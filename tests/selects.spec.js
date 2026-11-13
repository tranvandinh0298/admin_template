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
        await page.goto(pathToFileURL(resolve(__dirname, '../selects.html')).href);
        const nav = page.getByRole('navigation', { name: 'Form Elements' });
        await nav.getByRole('link', { name: 'Pickers' }).click();
        await nav.getByRole('link', { name: 'Selects' }).click();
        assert.equal(await nav.locator('[aria-current=page]').textContent(), 'Selects');
        for (const [selector, count] of [
            ['.sel-field', 22], ['.select2-selection', 10], ['.tagify', 6],
            ['.twitter-typeahead', 6]
        ]) assert.equal(await page.locator(selector).count(), count, selector);

        const basic = page.locator('#s2-basic').locator('..');
        await basic.locator('.select2-selection').click();
        await basic.locator('.select2-search__field').fill('Tokyo');
        await basic.getByRole('option', { name: 'Tokyo', exact: true }).click();
        assert.equal(await page.locator('#s2-basic').inputValue(), 'Tokyo');
        assert(await page.locator('#s2-disabled').isDisabled());

        const tags = page.locator('#sel-tag-0').locator('..');
        await tags.locator('.tagify__input').fill('Planning');
        await tags.locator('.tagify__input').press('Enter');
        await page.waitForFunction(() => document.getElementById('sel-tag-0').value.includes('Planning'));
        assert.equal(await page.locator('#sel-tag-1').locator('..').locator('.tagify__input').evaluate(el => el.isContentEditable), false);

        const prefetch = page.locator('#sel-type-2');
        await prefetch.fill('Tai');
        await prefetch.press('ArrowDown');
        await prefetch.press('Enter');
        assert.equal(await prefetch.inputValue(), 'Taipei');
        await page.locator('#sel-type-4').fill('Han');
        await page.locator('.tt-suggestion:visible').getByText('Hanoi').click();
        assert.equal(await page.locator('#sel-type-4').inputValue(), 'Hanoi');

        for (const width of [320, 390, 568, 768, 991, 1199, 1200, 1366, 1920]) {
            await page.setViewportSize({ width, height: 900 });
            await basic.locator('.select2-selection').click();
            const dropdown = await basic.locator('.select2-dropdown').boundingBox();
            assert(dropdown && dropdown.x >= 0 && dropdown.x + dropdown.width <= width + 1, 'Select2 at ' + width);
            await page.keyboard.press('Escape');
            assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), String(width));
        }
        assert.deepEqual(errors, []);
        console.log('PASS 22 examples, Select2 search, tags, Typeahead, navigation and nine widths.');
    } finally {
        await browser.close();
    }
}
run().catch(error => {
    console.error(error);
    process.exitCode = 1;
});
