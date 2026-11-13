const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
const { resolve } = require('node:path');
const { pathToFileURL } = require('node:url');

async function run() {
    const browser = await chromium.launch({ channel: 'chrome' });
    try {
        const page = await browser.newPage({ viewport: { width: 320, height: 800 } });
        const errors = [];
        page.on('pageerror', error => errors.push(error.message));
        page.on('requestfailed', request => errors.push(request.url()));
        const root = pathToFileURL(resolve(__dirname, '..') + '/').href;
        await page.goto(root + 'basic-inputs.html');
        // This fixture uses just parts of four demos, with Flatpickr as its only vendor.
        await page.setContent(`<!doctype html><base href="${root}">
            <link rel="stylesheet" href="assets/vendor/flatpickr/flatpickr.min.css">
            <link rel="stylesheet" href="assets/css/form-elements.css">
            <label><input type="checkbox" data-mixed> Mixed</label>
            <div class="ig-row"><input type="password" class="bi-control" value="demo">
                <button data-password><i></i> Show</button></div>
            <label for="pk-flat-5">Date</label><input class="bi-control" id="pk-flat-5">
            <textarea id="fx-autosize" rows="2"></textarea>
            <input id="fx-count-input" maxlength="25"><output id="fx-count-input-output"></output>
            <input data-mask="phone">
            <script src="assets/vendor/flatpickr/flatpickr.min.js" defer></script>
            <script src="assets/js/form-elements.js" defer></script>`, { waitUntil: 'load' });
        assert(await page.locator('[data-mixed]').evaluate(input => input.indeterminate));
        await page.locator('[data-password]').click();
        assert.equal(await page.locator('.ig-row input').getAttribute('type'), 'text');
        await page.getByLabel('Date').click();
        const popup = page.locator('.flatpickr-calendar.open.pk-popup');
        await popup.waitFor();
        const box = await popup.boundingBox();
        assert(box.x >= 0 && box.x + box.width <= 321);
        await page.keyboard.press('Escape');
        await page.locator('#fx-count-input').fill('test');
        assert.equal(await page.locator('output').textContent(), '4 / 25');
        await page.locator('[data-mask]').fill('123');
        assert.equal(await page.locator('[data-mask]').inputValue(), '123');
        assert.deepEqual(errors, []);
        console.log('PASS standalone mixed controls, Input Groups, Flatpickr without Moment and Form Extras without unused vendors.');
    } finally {
        await browser.close();
    }
}
run().catch(error => {
    console.error(error);
    process.exitCode = 1;
});
