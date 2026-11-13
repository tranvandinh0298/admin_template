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
        await page.goto(pathToFileURL(resolve(__dirname, '../sliders.html')).href);
        const nav = page.getByRole('navigation', { name: 'Form Elements' });
        await nav.getByRole('link', { name: 'Selects' }).click();
        await nav.getByRole('link', { name: 'Sliders' }).click();
        await page.getByRole('slider', { name: 'Single handle' }).waitFor();
        assert.equal(await nav.locator('[aria-current=page]').textContent(), 'Sliders');
        assert.equal(await page.locator('.sl-card').count(), 9);
        assert.equal(await page.locator('.sl-track.noUi-target').count(), 19);
        const handle = page.getByRole('slider', { name: 'Single handle' });
        await handle.press('ArrowRight');
        assert.equal(Number(await handle.getAttribute('aria-valuenow')), 51);
        const stepped = page.getByRole('slider', { name: 'Stepped scale' });
        await stepped.press('ArrowRight');
        assert.equal(Number(await stepped.getAttribute('aria-valuenow')), 20);
        const fixed = page.locator('#sl-fixed .noUi-connect');
        await fixed.scrollIntoViewIfNeeded();
        const box = await fixed.boundingBox();
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await page.mouse.down();
        await page.mouse.move(box.x + box.width / 2 + 35, box.y + box.height / 2, { steps: 8 });
        await page.mouse.up();
        const fixedValues = await page.locator('#sl-fixed [role=slider]').evaluateAll(els => els.map(e => Number(e.getAttribute('aria-valuenow'))));
        assert(fixedValues[0] > 40);
        assert.equal(fixedValues[1] - fixedValues[0], 20);
        const upper = page.getByRole('slider', { name: 'Limit upper value' });
        await upper.press('End');
        assert.equal(Number(await upper.getAttribute('aria-valuenow')), 60);
        assert.equal(await upper.getAttribute('aria-orientation'), 'vertical');
        await page.locator('#sl-low').selectOption('14');
        const linked = page.getByRole('slider', { name: 'Linked range lower value' });
        assert.equal(Number(await linked.getAttribute('aria-valuenow')), 14);
        await linked.press('ArrowRight');
        assert.equal(await page.locator('#sl-low').inputValue(), '15');
        await page.locator('#sl-high').fill('100');
        await page.locator('#sl-high').press('Tab');
        assert.equal(await page.locator('#sl-high').inputValue(), '40');
        for (const width of [320, 390, 568, 768, 991, 1199, 1200, 1366, 1920]) {
            await page.setViewportSize({ width, height: 900 });
            assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), String(width));
        }
        assert.deepEqual(errors, []);
        console.log('PASS 19 sliders, keyboard, fixed drag, steps, vertical limit, dynamic sync, nine widths and navigation.');
    } finally {
        await browser.close();
    }
}
run().catch(error => {
    console.error(error);
    process.exitCode = 1;
});
