const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');

async function run() {
    const root = path.resolve(__dirname, '..');
    const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json' };
    const server = http.createServer((req, res) => {
        const file = path.resolve(root, '.' + new URL(req.url, 'http://localhost').pathname);
        if (!file.startsWith(root + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
            res.writeHead(404).end();
            return;
        }
        res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
        fs.createReadStream(file).pipe(res);
    });
    await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
    const url = 'http://127.0.0.1:' + server.address().port + '/';
    let browser;
    try {
        browser = await chromium.launch({ channel: 'chrome' });
        const page = await browser.newPage({ viewport: { width: 1366, height: 900 } });
        const errors = [];
        page.on('pageerror', error => errors.push(page.url() + ': ' + error.message));
        page.on('response', response => {
            if (response.status() >= 400 && !response.url().endsWith('/favicon.ico')) errors.push(response.url());
        });
        const files = ['.', 'layouts'].flatMap(dir => fs.readdirSync(path.join(root, dir))
            .filter(file => file.endsWith('.html')).map(file => path.posix.join(dir, file)))
            .filter(file => /<html\b/i.test(fs.readFileSync(path.join(root, file), 'utf8')));
        await page.goto(url + 'login.html');
        await page.getByLabel('Theme', { exact: true }).press('End');
        assert.equal(await page.locator('html').getAttribute('data-theme'), 'night');
        await page.reload();
        assert.equal(await page.getByLabel('Theme', { exact: true }).inputValue(), 'night');
        for (const [mode, width] of [['night', 390], ['light', 1366]]) {
            await page.getByLabel('Theme', { exact: true }).selectOption(mode);
            await page.setViewportSize({ width, height: 900 });
            for (const file of files) {
                await page.goto(url + file);
                assert.equal(await page.locator('html').getAttribute('data-theme'), mode, file);
                assert.equal(await page.getByLabel('Theme', { exact: true }).count(), 1, file);
                assert.equal(await page.locator('html').evaluate(el => getComputedStyle(el).colorScheme), mode === 'night' ? 'dark' : 'light', file);
            }
        }
        await page.getByLabel('Theme', { exact: true }).selectOption('system');
        await page.emulateMedia({ colorScheme: 'dark' });
        await page.waitForFunction(() => document.documentElement.dataset.theme === 'night');
        await page.goto(url + 'pickers.html');
        await page.locator('#pk-flat-0').click();
        assert.equal(await page.locator('.flatpickr-calendar.open').evaluate(el => getComputedStyle(el).backgroundColor), 'rgb(37, 32, 49)');
        const blocked = await browser.newPage({ colorScheme: 'dark' });
        await blocked.addInitScript(() => Object.defineProperty(window, 'localStorage', { get() { throw new Error('Storage unavailable'); } }));
        await blocked.goto(url + 'login.html');
        assert.equal(await blocked.locator('html').getAttribute('data-theme'), 'night');
        await blocked.getByLabel('Theme', { exact: true }).selectOption('light');
        assert.equal(await blocked.locator('html').getAttribute('data-theme'), 'light');
        assert.deepEqual(errors, []);
        console.log('PASS ' + files.length + ' pages in both modes, keyboard, persistence, System, blocked storage, calendar popup.');
    } finally {
        if (browser) await browser.close();
        await new Promise(resolve => server.close(resolve));
    }
}
run().catch(error => {
    console.error(error);
    process.exitCode = 1;
});
