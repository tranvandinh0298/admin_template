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
        await page.goto(pathToFileURL(resolve(__dirname, '../editors.html')).href);
        assert.equal(await page.locator('.ql-editor').count(), 3);
        const before = await page.locator('#bubble-editor').textContent();
        await page.locator('#snow-editor .ql-editor').fill('Edited text');
        assert.equal(await page.locator('#bubble-editor').textContent(), before);
        await page.evaluate(() => Quill.find(document.getElementById('snow-editor')).setSelection(0, 6, 'user'));
        await page.locator('[data-editor=snow] .ql-bold').click();
        assert.equal(await page.locator('#snow-editor strong').textContent(), 'Edited');
        await page.evaluate(() => Quill.find(document.getElementById('bubble-editor')).setSelection(0, 6, 'user'));
        await page.locator('[data-editor=bubble] .ql-tooltip:not(.ql-hidden)').waitFor();
        await page.locator('[data-editor=bubble] .ql-italic').click();
        assert.equal(await page.locator('#bubble-editor em').textContent(), 'Select');
        await page.evaluate(() => {
            const editor = Quill.find(document.getElementById('full-editor'));
            editor.insertEmbed(0, 'formula', 'x^2');
        });
        assert.equal(await page.locator('.ql-formula .katex').count(), 1);
        const nav = page.getByRole('navigation', { name: 'Form Elements' });
        assert.equal(await nav.locator('[aria-current=page]').textContent(), 'Editors');
        for (const width of [320, 390, 568, 768, 991, 1199, 1200, 1366, 1920]) {
            await page.setViewportSize({ width, height: 900 });
            assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), String(width));
        }
        assert.deepEqual(errors, []);
        console.log('PASS three editors, independence, Snow/Bubble formatting, formula, navigation and nine widths.');
    } finally {
        await browser.close();
    }
}
run().catch(error => {
    console.error(error);
    process.exitCode = 1;
});
