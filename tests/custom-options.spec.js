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
        await page.goto(pathToFileURL(resolve(__dirname, '../custom-options.html')).href);
        const nav = page.getByRole('navigation', { name: 'Form Elements' });
        for (const name of ['Basic Inputs', 'Input Groups', 'Custom Options']) {
            await nav.getByRole('link', { name, exact: true }).click();
            assert.equal(await nav.locator('[aria-current=page]').textContent(), name);
        }
        const groups = page.locator('.co-card');
        assert.equal(await groups.count(), 10);
        assert.equal(await page.locator('.co-option').count(), 26);
        for (const group of await groups.all()) {
            const inputs = group.locator('input');
            const first = inputs.first();
            const second = inputs.nth(1);
            assert(await first.isChecked());
            await group.locator('.co-title').nth(1).click();
            assert(await second.isChecked());
            if (await first.getAttribute('type') === 'radio') {
                assert.equal(await first.isChecked(), false);
                await second.press('ArrowLeft');
                assert(await first.isChecked());
            } else {
                assert(await first.isChecked());
                await second.press('Space');
                assert.equal(await second.isChecked(), false);
            }
        }
        assert.equal(await page.locator('main svg').count(), 0);
        assert(await page.locator('.co-image img').evaluateAll(images =>
            images.length === 6 && images.every(image => image.complete && image.naturalWidth > 0)));
        for (const width of [320, 390, 568, 768, 991, 1199, 1200, 1366, 1920]) {
            await page.setViewportSize({ width, height: 900 });
            assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), String(width));
        }
        assert.deepEqual(errors, []);
        console.log('PASS: ten groups, full-card selection, keyboard, local images, Form Elements links and nine widths.');
    } finally {
        await browser.close();
    }
}

run().catch(error => {
    console.error(error);
    process.exitCode = 1;
});
