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
        await page.goto(pathToFileURL(resolve(__dirname, '../form-wizard-icons.html')).href);
        const link = page.getByRole('link', { name: 'Form Validation' });
        await link.click();
        assert.equal(await link.getAttribute('aria-current'), 'page');
        assert.equal(await page.locator('.fv-card').count(), 3);
        for (const mode of ['browser', 'bootstrap', 'advanced']) {
            const form = page.locator('[data-mode=' + mode + ']');
            const submit = form.getByRole('button', { name: 'Submit' });
            const name = form.getByLabel(mode === 'advanced' ? 'Full Name' : 'Name', { exact: true });
            await submit.click();
            assert(await name.evaluate(el => el === document.activeElement));
            if (mode !== 'browser') assert.equal(await name.getAttribute('aria-invalid'), 'true');
            await name.fill('Jane Doe');
            assert.equal(await name.getAttribute('aria-invalid'), null);
            await form.getByLabel('Email', { exact: true }).fill('invalid');
            await submit.click();
            assert(await form.getByLabel('Email', { exact: true }).evaluate(el => el === document.activeElement));
            await form.getByLabel('Email', { exact: true }).fill('jane@example.com');
            await form.getByLabel('Password', { exact: true }).fill('sample-password');
            await form.getByLabel('Country').selectOption('Vietnam');
            await form.getByLabel('Date of birth').fill('2000-02-20');
            await form.getByLabel('Profile picture').setInputFiles(resolve(__dirname, '../assets/img/avatar-demo/person-1.png'));
            await form.getByLabel('Bio').fill(mode === 'advanced' ? 'Sample biography. '.repeat(8) : 'Sample biography.');
            await form.getByLabel('Agree to the terms and conditions').check();
            await form.getByRole('switch').check();
            if (mode === 'advanced') {
                await form.getByLabel('Confirm Password').fill('different');
                await form.getByLabel('Languages').fill('English, Vietnamese');
                await form.getByLabel('Tech').selectOption(['HTML', 'CSS']);
                await form.getByLabel('Hobbies').selectOption('Reading');
                await form.getByRole('radio', { name: 'Premium' }).check();
                await submit.click();
                assert.match(await form.locator('#fv-advanced-confirm-error').textContent(), /Passwords must match/);
                await form.getByLabel('Confirm Password').fill('sample-password');
                await form.getByLabel('Bio').fill('Too short');
                assert.match(await form.locator('#fv-advanced-bio-error').textContent(), /100/);
                await form.getByLabel('Bio').fill('Sample biography. '.repeat(8));
            }
            await submit.click();
            assert.match(await form.getByRole('status').textContent(), /Validation passed/);
            await form.getByRole('button', { name: 'Reset' }).click();
            assert.equal(await name.inputValue(), '');
            assert.equal(await form.locator('[aria-invalid]').count(), 0);
            assert.equal(await form.locator('.fv-error:visible').count(), 0);
        }
        for (const width of [320, 390, 568, 768, 991, 1199, 1200, 1366, 1920]) {
            await page.setViewportSize({ width, height: 900 });
            await page.locator('[data-mode=advanced] button[type=submit]').click();
            assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), String(width));
        }
        assert.deepEqual(errors, []);
        console.log('PASS three validation forms, invalid focus, correction, password/bio rules, file, submit/reset and nine widths.');
    } finally {
        await browser.close();
    }
}
run().catch(error => {
    console.error(error);
    process.exitCode = 1;
});
