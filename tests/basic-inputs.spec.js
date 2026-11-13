const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
const path = require('node:path');
const { pathToFileURL } = require('node:url');

async function run() {
    const browser = await chromium.launch({ channel: 'chrome' });
    try {
        const page = await browser.newPage();
        const errors = [];
        page.on('pageerror', error => errors.push(error.message));
        page.on('requestfailed', request => errors.push(request.url()));
        await page.goto(pathToFileURL(path.resolve(__dirname, '../basic-inputs.html')).href);
        assert.equal(await page.locator('.bi-card').count(), 11);
        assert(await page.locator('.bi-card :is(input,select,textarea)').evaluateAll(
            controls => controls.every(control => control.labels.length === 1) &&
                new Set(controls.map(control => control.id)).size === controls.length
        ));
        for (const id of ['outline-name', 'filled-name']) {
            const input = page.locator('#' + id);
            const label = page.locator('label[for="' + id + '"]');
            const resting = (await label.boundingBox()).y;
            await input.fill('Ada Lovelace');
            await input.blur();
            await page.waitForFunction(({ id, resting }) =>
                document.querySelector('label[for="' + id + '"]').getBoundingClientRect().y < resting,
                { id, resting });
        }
        const mixed = page.locator('#mixed');
        assert(await mixed.evaluate(input => input.indeterminate));
        await mixed.click();
        assert.equal(await mixed.evaluate(input => input.indeterminate), false);
        await page.locator('#radio-one').check();
        assert.equal(await page.locator('#radio-two').isChecked(), false);
        await page.locator('#switch-0').press('Space');
        assert(await page.locator('#switch-0').isChecked());
        assert(await page.locator('#switch-2').isDisabled());
        assert.equal(await page.locator('#value-readonly').isEditable(), false);
        await page.locator('#example-multi').selectOption(['One', 'Two']);
        assert.equal(await page.locator('#example-multi option:checked').count(), 2);
        const range = page.locator('#range-step');
        await range.press('Home');
        await range.press('ArrowRight');
        assert.equal(await range.inputValue(), '0.5');
        await range.press('End');
        assert.equal(await range.inputValue(), '5');
        await page.locator('#file-multiple').setInputFiles(['one.txt', 'two.txt'].map(name =>
            ({ name, mimeType: 'text/plain', buffer: Buffer.from(name) })));
        assert.equal(await page.locator('#file-multiple').evaluate(input => input.files.length), 2);
        assert(await page.locator('#file-disabled').isDisabled());
        for (const width of [320, 390, 568, 768, 991, 1199, 1200, 1366, 1920]) {
            await page.setViewportSize({ width, height: 900 });
            assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), String(width));
        }
        assert.deepEqual(errors, []);
        console.log('PASS Basic Inputs: 11 groups, labels, floating states, choices, range, files and nine widths.');
    } finally {
        await browser.close();
    }
}

run().catch(error => {
    console.error(error);
    process.exitCode = 1;
});
