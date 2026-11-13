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
        await page.goto(pathToFileURL(resolve(__dirname, '../pickers.html')).href);
        const nav = page.getByRole('navigation', { name: 'Form Elements' });
        await nav.getByRole('link', { name: 'File Upload' }).click();
        await nav.getByRole('link', { name: 'Pickers' }).click();
        assert.equal(await nav.locator('[aria-current=page]').textContent(), 'Pickers');
        assert.equal(await page.locator('.pk-field').count(), 23);
        await page.locator('.flatpickr-calendar.inline').waitFor();
        assert.equal(await page.locator('.flatpickr-calendar').count(), 8);
        assert.equal(await page.locator('.daterangepicker').count(), 6);
        assert.equal(await page.locator('.pcr-button').count(), 3);
        await page.locator('#pk-flat-0').click();
        await page.locator('.flatpickr-calendar.open .flatpickr-day:not(.prevMonthDay,.nextMonthDay)').first().click();
        assert.match(await page.locator('#pk-flat-0').inputValue(), /^\d{4}-\d\d-\d\d$/);
        assert.equal(await page.locator('#pk-flat-6').evaluate(el => el._flatpickr.isEnabled(new Date())), false);
        await page.locator('#pk-range-3').press('Enter');
        await page.locator('.daterangepicker:visible').getByText('Last 7 Days', { exact: true }).click();
        assert.match(await page.locator('#pk-range-3').inputValue(), / - /);
        await page.locator('#pk-time-1').click();
        await page.locator('.ui-timepicker-wrapper:visible li').first().click();
        assert.match(await page.locator('#pk-time-1').inputValue(), /2:00pm/);
        await page.getByRole('button', { name: 'Choose nano color' }).click();
        const color = page.locator('.pcr-app.visible');
        await color.locator('.pcr-swatches button').nth(1).click();
        await color.locator('.pcr-save').click();
        assert.match(await page.locator('[data-theme=nano] output').textContent(), /56CA00/i);
        for (const width of [320, 390, 568, 768, 991, 1199, 1200, 1366, 1920]) {
            await page.setViewportSize({ width, height: 900 });
            for (const [input, popup] of [
                ['#pk-flat-3', '.flatpickr-calendar.open'],
                ['#pk-range-0', '.daterangepicker:visible'],
                ['[data-theme=classic] .pcr-button', '.pcr-app.visible']
            ]) {
                await page.locator(input).click();
                const box = await page.locator(popup).boundingBox();
                assert(box && box.x >= -1 && box.x + box.width <= width + 1, input + ' at ' + width + ' ' + JSON.stringify(box));
                await page.locator('.pk-card h2').first().click();
            }
            assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), String(width));
        }
        assert.deepEqual(errors, []);
        console.log('PASS 23 pickers, calendar selection, disabled dates, range preset, time and color, nine viewport widths.');
    } finally {
        await browser.close();
    }
}
run().catch(error => {
    console.error(error);
    process.exitCode = 1;
});
