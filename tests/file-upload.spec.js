const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
const { resolve } = require('node:path');
const { pathToFileURL } = require('node:url');

async function run() {
    const browser = await chromium.launch({ channel: 'chrome' });
    try {
        const page = await browser.newPage();
        const errors = [];
        const requests = [];
        page.on('pageerror', error => errors.push(error.message));
        page.on('requestfailed', request => errors.push(request.url()));
        page.on('request', request => requests.push(request.url()));
        await page.goto(pathToFileURL(resolve(__dirname, '../file-upload.html')).href);
        const nav = page.getByRole('navigation', { name: 'Form Elements' });
        await nav.getByRole('link', { name: 'Editors' }).click();
        await nav.getByRole('link', { name: 'File Upload' }).click();
        assert.equal(await nav.locator('[aria-current=page]').textContent(), 'File Upload');
        const basic = page.locator('[data-upload=basic]');
        const multiple = page.locator('[data-upload=multiple]');
        const picker = basic.locator('input');
        await picker.focus();
        const [chooser] = await Promise.all([page.waitForEvent('filechooser'), picker.press('Space')]);
        await chooser.setFiles(resolve(__dirname, '../assets/img/avatar-demo/person-1.png'));
        await basic.locator('img').waitFor();
        assert(await basic.locator('img').evaluate(image => image.naturalWidth > 0));
        const drop = async (section, files) => {
            const dataTransfer = await page.evaluateHandle(entries => {
                const transfer = new DataTransfer();
                entries.forEach(([name, size]) => transfer.items.add(new File(
                    [new Uint8Array(size)], name, { type: 'text/plain', lastModified: 1 }
                )));
                return transfer;
            }, files);
            await section.locator('.fu-drop').dispatchEvent('drop', { dataTransfer });
            await dataTransfer.dispose();
        };
        await drop(basic, [['extra.txt', 1]]);
        assert.match(await basic.locator('[role=status]').textContent(), /accepts one/);
        await basic.getByRole('button', { name: 'Remove person-1.png' }).click();
        assert.equal(await basic.locator('.fu-file').count(), 0);
        assert(await picker.evaluate(input => input === document.activeElement));
        await picker.setInputFiles(resolve(__dirname, '../assets/img/avatar-demo/person-1.png'));
        await basic.locator('img').waitFor();
        await drop(multiple, [['one.txt', 1], ['<sample>.txt', 5 * 1024 * 1024], ['oversize.txt', 5 * 1024 * 1024 + 1]]);
        assert.equal(await multiple.locator('.fu-file').count(), 2);
        assert.match(await multiple.locator('[role=status]').textContent(), /oversize.txt exceeds 5 MiB/);
        assert.equal(await multiple.getByText('<sample>.txt', { exact: true }).count(), 1);
        await drop(multiple, [['one.txt', 1]]);
        assert.match(await multiple.locator('[role=status]').textContent(), /already selected/);
        assert.equal(await multiple.locator('.fu-file').count(), 2);
        for (const width of [320, 390, 568, 768, 991, 1199, 1200, 1366, 1920]) {
            await page.setViewportSize({ width, height: 900 });
            assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), String(width));
        }
        assert.deepEqual(errors, []);
        assert.equal(requests.filter(url => /^https?:/.test(url)).length, 0);
        console.log('PASS Basic/Multiple, keyboard picker, preview, drop, limits, duplicate, removal, navigation and nine widths.');
    } finally {
        await browser.close();
    }
}
run().catch(error => {
    console.error(error);
    process.exitCode = 1;
});
