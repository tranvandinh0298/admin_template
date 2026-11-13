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
        await page.goto(pathToFileURL(resolve(__dirname, '../switches.html')).href);
        const menu = page.getByRole('navigation', { name: 'Form Elements' });
        await menu.getByRole('link', { name: 'Sliders' }).click();
        await menu.getByRole('link', { name: 'Switches' }).click();
        assert.equal(await menu.locator('[aria-current=page]').textContent(), 'Switches');
        assert.equal(await page.locator('.sw-card').count(), 5);
        assert.equal(await page.getByRole('switch').count(), 21);
        assert.equal(await page.getByRole('radio').count(), 6);
        const iconSwitch = page.getByRole('switch', { name: 'With icon' }).first();
        await iconSwitch.press('Space');
        assert(await iconSwitch.isChecked());
        assert(await iconSwitch.locator('..').locator('.sw-on').isVisible());
        await iconSwitch.locator('../..').click();
        assert.equal(await iconSwitch.isChecked(), false);
        const disabled = page.getByRole('switch', { name: /Default – ON/ });
        assert(await disabled.isDisabled());
        await disabled.locator('../..').click();
        assert(await disabled.isChecked());
        assert.equal(await page.getByRole('switch', { name: 'Invalid' }).getAttribute('aria-invalid'), 'true');
        const rounded = page.getByRole('group', { name: 'Rounded' });
        const square = page.getByRole('group', { name: 'Square' });
        await rounded.getByRole('radio', { name: 'Option 1' }).press('ArrowDown');
        assert(await rounded.getByRole('radio', { name: 'Option 2' }).isChecked());
        assert.equal(await rounded.getByRole('radio', { name: 'Option 1' }).isChecked(), false);
        assert(await square.getByRole('radio', { name: 'Option 1' }).isChecked());
        for (const width of [320, 390, 568, 768, 991, 1199, 1200, 1366, 1920]) {
            await page.setViewportSize({ width, height: 900 });
            assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), String(width));
        }
        await page.emulateMedia({ forcedColors: 'active' });
        assert.equal(await iconSwitch.evaluate(el => getComputedStyle(el).opacity), '1');
        assert.deepEqual(errors, []);
        console.log('PASS 27 controls, label/keyboard toggles, icon state, disabled/invalid, radio isolation, forced colors, navigation and nine widths.');
    } finally {
        await browser.close();
    }
}
run().catch(error => {
    console.error(error);
    process.exitCode = 1;
});
