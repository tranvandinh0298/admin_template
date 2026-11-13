const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
const { resolve } = require('node:path');
const { pathToFileURL } = require('node:url');

async function run() {
    const browser = await chromium.launch({ channel: 'chrome' });
    try {
        const page = await browser.newPage({ viewport: { width: 1366, height: 800 } });
        const errors = [];
        page.on('pageerror', error => errors.push(error.message));
        page.on('requestfailed', request => errors.push(request.url()));
        await page.goto(pathToFileURL(resolve(__dirname, '../form-extras.html')).href);
        const menu = page.getByRole('navigation', { name: 'Form Layouts' });
        for (const [title, count] of [['Vertical Form', 6], ['Horizontal Form', 7], ['Sticky Actions', 4]]) {
            await page.setViewportSize({ width: 1366, height: 800 });
            await menu.getByRole('link', { name: title }).click();
            assert.equal(await menu.locator('[aria-current=page]').textContent(), title);
            assert.equal(await page.locator('.fl-card').count(), count);
            assert(await page.locator('main :is(input,select,textarea)').evaluateAll(
                controls => controls.every(control => control.labels.length === 1)));
            if (title !== 'Sticky Actions') {
                const field = page.locator('.fl-field').first();
                const label = await field.locator('label').boundingBox();
                const input = await field.locator('input').boundingBox();
                if (title === 'Horizontal Form') assert(input.x > label.x + label.width);
                else assert(input.y > label.y + label.height);
                const tab = page.getByRole('tab', { name: 'Personal Info' });
                await tab.press('ArrowRight');
                assert.equal(await page.getByRole('tab', { name: 'Account Details' }).getAttribute('aria-selected'), 'true');
                const panel = page.getByRole('tabpanel', { name: 'Account Details' });
                await panel.getByLabel('Username').fill('demo');
                await panel.getByRole('button', { name: 'Submit' }).click();
                assert.match(await panel.getByRole('status').textContent(), /submitted/);
                await panel.getByRole('button', { name: 'Cancel' }).click();
                assert.equal(await panel.getByLabel('Username').inputValue(), '');
                await page.locator('summary').getByText('Payment Method').click();
                assert.equal(await page.locator('details[open]').count(), 1);
                await page.getByRole('radio', { name: 'Cash on Delivery' }).check();
                assert.equal(await page.getByLabel('Card Number').isVisible(), false);
            } else {
                await page.locator('#fl-promo').fill('DEMO10');
                await page.locator('#fl-promo').press('Enter');
                assert.match(await page.locator('#fl-promo-status').textContent(), /applied/);
                await page.getByRole('radio', { name: 'Cash on Delivery' }).check();
                assert.equal(await page.getByLabel('Card Number').isVisible(), false);
                for (const width of [390, 1366]) {
                    await page.setViewportSize({ width, height: 600 });
                    await page.evaluate(() => scrollTo(0, 420));
                    await page.waitForFunction(() => {
                        const header = document.querySelector('.topbar-wrap').getBoundingClientRect();
                        const bar = document.querySelector('.fl-sticky').getBoundingClientRect();
                        return Math.abs(bar.top - header.bottom) < 2;
                    });
                }
                await page.getByRole('button', { name: 'Place Order' }).click();
                assert.match(await page.locator('.fl-sticky .fl-status').textContent(), /Demo order complete/);
            }
            for (const width of [320, 390, 568, 768, 991, 1199, 1200, 1366, 1920]) {
                await page.setViewportSize({ width, height: 900 });
                assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), title + ' at ' + width);
            }
        }
        assert.deepEqual(errors, []);
        console.log('PASS three layouts, labels, tabs, accordion, reset, promo, payment, sticky positioning and nine widths.');
    } finally {
        await browser.close();
    }
}
run().catch(error => {
    console.error(error);
    process.exitCode = 1;
});
