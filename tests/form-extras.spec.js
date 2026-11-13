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
        await page.goto(pathToFileURL(resolve(__dirname, '../form-extras.html')).href);
        const menu = page.getByRole('navigation', { name: 'Form Elements' });
        await menu.getByRole('link', { name: 'Switches' }).click();
        await menu.getByRole('link', { name: 'Form Extras' }).click();
        assert.equal(await menu.locator('[aria-current=page]').textContent(), 'Form Extras');
        await page.locator('.fx-row').waitFor();
        assert.equal(await page.locator('.fx-card').count(), 4);
        const textarea = page.locator('#fx-autosize');
        const initial = (await textarea.boundingBox()).height;
        await textarea.fill('One\nTwo\nThree\nFour\nFive\nSix');
        assert((await textarea.boundingBox()).height > initial);
        await textarea.fill('');
        assert.equal((await textarea.boundingBox()).height, initial);
        for (const [id, value, expected] of [
            ['card', '4111111111111111', '4111 1111 1111 1111'],
            ['phone', '1234567890', '123 456 7890'],
            ['date', '20261111', '2026-11-11'],
            ['time', '123456', '12:34:56'],
            ['numeral', '1234.56', '1,234.56'],
            ['blocks', '1234567890', '1234 567 890'],
            ['delimiter', '123456789', '123·456·789'],
            ['custom', 'abcdefghijk', 'ABC.DEF.GHI-JK'],
            ['prefix', '+631234567890', '+63 123 456 7890']
        ]) {
            const input = page.locator('#fx-' + id);
            await input.fill(value);
            assert.equal(await input.inputValue(), expected, id);
        }
        for (const [id, limit] of [['input', 25], ['textarea', 255]]) {
            await page.locator('#fx-count-' + id).fill('a'.repeat(limit + 10));
            assert.equal(await page.locator('#fx-count-' + id + '-output').textContent(), limit + ' / ' + limit);
        }
        await page.getByRole('button', { name: 'Add row' }).click();
        const entry = page.getByRole('group', { name: 'Entry 2' });
        await entry.getByLabel('Username').fill('Ada');
        await entry.getByRole('button', { name: 'Delete entry 2' }).click();
        await page.getByRole('button', { name: 'Cancel' }).click();
        assert.equal(await entry.getByLabel('Username').inputValue(), 'Ada');
        await entry.getByRole('button', { name: 'Delete entry 2' }).click();
        await page.getByRole('dialog').getByRole('button', { name: 'Delete', exact: true }).click();
        await entry.waitFor({ state: 'detached' });
        assert(await page.getByRole('group', { name: 'Entry 1' }).getByLabel('Username').evaluate(el => el === document.activeElement));
        for (const width of [320, 390, 568, 768, 991, 1199, 1200, 1366, 1920]) {
            await page.setViewportSize({ width, height: 900 });
            assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), String(width));
        }
        assert.deepEqual(errors, []);
        console.log('PASS autosize, nine masks, counters, repeater cancel/delete, focus, navigation and nine widths.');
    } finally {
        await browser.close();
    }
}
run().catch(error => {
    console.error(error);
    process.exitCode = 1;
});
