const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
const { resolve } = require('node:path');
const { pathToFileURL } = require('node:url');

async function run() {
    const browser = await chromium.launch({ channel: 'chrome' });
    try {
        const page = await browser.newPage();
        const errors = [];
        page.on('pageerror', error => errors.push(error.message));
        page.on('requestfailed', request => errors.push(request.url()));
        await page.addInitScript(() => {
            window.SpeechRecognition = undefined;
            window.webkitSpeechRecognition = undefined;
        });
        await page.goto(pathToFileURL(resolve(__dirname, '../input-groups.html')).href);
        assert.equal(await page.locator('.ig-grid .bi-card').count(), 12);
        const nav = page.getByRole('navigation', { name: 'Form Elements' });
        assert.equal(await nav.locator('[aria-current=page]').textContent(), 'Input Groups');
        await nav.getByRole('link', { name: 'Basic Inputs' }).click();
        assert.equal(await nav.locator('[aria-current=page]').textContent(), 'Basic Inputs');
        await nav.getByRole('link', { name: 'Input Groups' }).click();
        const password = page.locator('[data-password]').first();
        await password.click();
        assert.equal(await password.locator('..').locator('input').getAttribute('type'), 'text');
        await password.click();
        assert.equal(await password.getAttribute('aria-pressed'), 'false');
        const dropdown = page.locator('.ig-dropdown').first();
        const summary = dropdown.locator('summary');
        await summary.press('Enter');
        await page.keyboard.press('Tab');
        assert(await dropdown.getByRole('button', { name: 'Action', exact: true }).evaluate(el => el === document.activeElement));
        await page.keyboard.press('Escape');
        assert.equal(await dropdown.getAttribute('open'), null);
        await summary.press('Enter');
        await dropdown.getByRole('button', { name: 'Another action' }).click();
        assert.match(await page.locator('#ig-status').textContent(), /Another action/);
        await page.locator('[data-speech]').first().click();
        assert.match(await page.locator('#ig-status').textContent(), /unavailable/);
        await page.getByRole('textbox', { name: 'Dictation' }).first().fill('Typed fallback');
        await page.locator('input[type=file]').first().setInputFiles({
            name: 'sample.txt', mimeType: 'text/plain', buffer: Buffer.from('sample')
        });
        assert.equal(await page.locator('input[type=file]').first().evaluate(input => input.files.length), 1);
        for (const width of [320, 390, 568, 768, 991, 1199, 1200, 1366, 1920]) {
            await page.setViewportSize({ width, height: 900 });
            assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), String(width));
        }
        assert.deepEqual(errors, []);
        console.log('PASS Input Groups: twelve groups, Form Elements navigation, keyboard dropdown, password, speech fallback, file selection and nine widths.');
    } finally {
        await browser.close();
    }
}

run().catch(error => {
    console.error(error);
    process.exitCode = 1;
});
