const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
const { resolve } = require('node:path');
const { pathToFileURL } = require('node:url');

async function run() {
    const browser = await chromium.launch({ channel: 'chrome' });
    try {
        const page = await browser.newPage({ viewport: { width: 1366, height: 900 } });
        const errors = [];
        page.on('pageerror', error => errors.push(error.message));
        page.on('requestfailed', request => errors.push(request.url()));
        await page.goto(pathToFileURL(resolve(__dirname, '../form-layouts-vertical.html')).href);
        const menu = page.getByRole('navigation', { name: 'Form Wizard' });
        await menu.getByRole('link', { name: 'Numbered' }).click();
        assert.equal(await menu.locator('[aria-current=page]').textContent(), 'Numbered');
        assert.equal(await page.locator('[data-wizard]').count(), 5);
        const validation = page.locator('[data-validate]');
        await validation.getByRole('button', { name: 'Next' }).click();
        assert(await validation.locator('#wiz-validation-panel-0').isVisible());
        assert(await validation.getByLabel('Username').evaluate(el => el === document.activeElement));
        await validation.getByLabel('Username').fill('demo');
        await validation.getByLabel('Email').fill('demo@example.com');
        await validation.getByLabel('Password', { exact: true }).fill('sample-password');
        await validation.getByLabel('Confirm Password').fill('wrong-password');
        await validation.getByRole('button', { name: 'Next' }).click();
        assert(await validation.locator('#wiz-validation-panel-0').isVisible());
        assert.equal(await validation.getByLabel('Confirm Password').evaluate(el => el.validity.customError), true);
        await validation.getByLabel('Confirm Password').fill('sample-password');
        await validation.getByRole('button', { name: 'Next' }).press('Enter');
        assert(await validation.locator('#wiz-validation-step-1').evaluate(el => el === document.activeElement));
        await validation.getByLabel('First Name').fill('Ada');
        await validation.getByLabel('Last Name').fill('Lovelace');
        await validation.getByLabel('Country').selectOption('Singapore');
        await validation.getByLabel('Language').selectOption('English');
        await validation.getByRole('button', { name: 'Next' }).click();
        await validation.getByRole('button', { name: 'Submit' }).click();
        assert.match(await validation.getByRole('status').textContent(), /complete/);

        for (const variant of ['Numbered', 'Icons']) {
            if (variant === 'Icons') await menu.getByRole('link', { name: variant }).click();
            assert.equal(await menu.locator('[aria-current=page]').textContent(), variant);
            assert.equal(await page.locator('[data-wizard]').count(), variant === 'Icons' ? 4 : 5);
            for (const wizard of await page.locator('[data-wizard]:not([data-validate])').all()) {
                await wizard.getByLabel('Username').fill('<demo>');
                await wizard.getByLabel('Password', { exact: true }).fill('private-value');
                await wizard.getByRole('button', { name: 'Next' }).click();
                await wizard.getByRole('button', { name: 'Previous' }).click();
                assert.equal(await wizard.getByLabel('Username').inputValue(), '<demo>');
                const panels = await wizard.locator('[data-panel]').count();
                for (let i = 1; i < panels; i++) await wizard.getByRole('button', { name: 'Next' }).click();
                if (panels === 5) {
                    const review = wizard.locator('.wiz-review');
                    assert.equal(await review.getByText('<demo>', { exact: true }).count(), 1);
                    assert(!/password|private-value/i.test(await review.textContent()));
                }
                await wizard.getByRole('button', { name: 'Submit' }).click();
                assert.match(await wizard.getByRole('status').textContent(), /complete/);
            }
            for (const width of [320, 390, 568, 768, 991, 1199, 1200, 1366, 1920]) {
                await page.setViewportSize({ width, height: 900 });
                assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), variant + ' at ' + width);
            }
        }
        assert.deepEqual(errors, []);
        console.log('PASS nine wizards, validation, keyboard focus, back navigation, safe review, completion and nine widths.');
    } finally {
        await browser.close();
    }
}
run().catch(error => {
    console.error(error);
    process.exitCode = 1;
});
