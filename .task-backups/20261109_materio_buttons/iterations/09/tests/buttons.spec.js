/* Run: node tests/buttons.spec.js; PLAYWRIGHT_MODULE may point to an external installation. */
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const assert = require('node:assert/strict');
const { pathToFileURL } = require('node:url');
const root = path.resolve(__dirname, '..');
const resources = new Set([
  '/assets/vendor/fontawesome/css/fontawesome.min.css', '/assets/vendor/fontawesome/css/solid.min.css',
  '/assets/vendor/fontawesome/webfonts/fa-solid-900.woff2', '/assets/vendor/fontawesome/webfonts/fa-solid-900.ttf',
  '/button.html', '/assets/css/layouts.css', '/assets/css/buttons.css',
  '/assets/js/layouts.js', '/assets/js/buttons.js',
  '/assets/vendor/sweetalert2/sweetalert2.all.min.js',
  ...['default','horizontal','boxed','compact','single_column','blank'].map(n => '/layouts/' + n + '_layout.html')
]);
(async () => {
  const server = http.createServer((req, res) => {
    const pathname = new URL(req.url, 'http://localhost').pathname;
    if (!resources.has(pathname)) { res.writeHead(404); return res.end(); }
    res.setHeader('Content-Type', pathname.endsWith('.css') ? 'text/css' : pathname.endsWith('.js') ? 'text/javascript' : 'text/html');
    fs.createReadStream(path.join(root, pathname)).on('error', () => { res.statusCode = 404; res.end(); }).pipe(res);
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  let browser;
  try {
    browser = await chromium.launch({ channel: 'chrome', headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    page.on('requestfailed', r => errors.push(r.url()));
    page.on('response', r => { if (r.status() >= 400) errors.push(r.status() + ' ' + r.url()); });
    const url = 'http://127.0.0.1:' + server.address().port + '/button.html';
    await page.goto(url);
    assert.equal(await page.locator('.button-card').count(), 10);
    assert.equal(await page.locator('svg').count(), 0);
    await page.evaluate(() => document.fonts.ready);
    assert(await page.evaluate(() => document.fonts.check('900 18px "Font Awesome 6 Free"')));
    assert(await page.locator('#icons .fa-solid').count() > 0);
    for (const id of ['basic','rounded','label','outline','text','icons','sizes','selection','disabled']) {
      assert.equal(await page.locator('#' + id + ' h2').count(), 1);
    }
    assert.equal(await page.locator('#basic .btn').count(), 7);
    const sizes = await page.locator('#sizes > .example-block:first-of-type .button-row .btn').evaluateAll(elements => elements.map(e => e.getBoundingClientRect().height));
    assert(sizes.every((size, i) => i === 0 || sizes[i - 1] > size));
    for (const button of await page.locator('main button.btn:not(:disabled):not([data-action])').all()) {
      await button.click();
      assert(await button.locator('.btn-ripple').count() > 0, 'Missing ripple');
      assert.equal(await button.evaluate(e => getComputedStyle(e).overflow), 'hidden');
    }
    for (let i = 0; i < 5; i++) await page.locator('#rounded .btn').first().click();
    await page.waitForFunction(() => !document.querySelector('.btn-ripple'));

    const anchor = page.locator('#anchor-buttons a').first();
    await anchor.click();
    assert.equal(new URL(page.url()).hash, '#basic');
    assert(await anchor.locator('.btn-ripple').count() > 0);
    await anchor.press('Enter');
    assert.equal(new URL(page.url()).hash, '#basic');
    const disabledLink = page.locator('#anchor-buttons .disabled');
    await disabledLink.scrollIntoViewIfNeeded(); const disabledBox = await disabledLink.boundingBox(); await page.mouse.click(disabledBox.x + disabledBox.width / 2, disabledBox.y + disabledBox.height / 2);
    assert.equal(new URL(page.url()).hash, '#basic');
    assert.equal(await disabledLink.locator('.btn-ripple').count(), 0);
    const confirmLink = page.locator('#anchor-buttons [data-action]');
    await confirmLink.click();
    await page.locator('.swal2-cancel').click();
    await page.waitForFunction(() => !document.querySelector('.swal2-container'));
    assert.equal(new URL(page.url()).hash, '#basic');
    await page.waitForFunction(() => document.activeElement?.textContent === 'Confirm link');
    const checkbox = page.locator('#selection input[type=checkbox]');
    await page.locator('#selection .choice').nth(1).click();
    assert.equal(await page.locator('#selection .choice').nth(1).locator('.btn-ripple').count(), 1);
    assert.equal(await checkbox.evaluateAll(es => es.map(e => e.checked).join(',')), 'true,true,false');
    await checkbox.nth(1).press('Space');
    assert.equal(await checkbox.evaluateAll(es => es.map(e => e.checked).join(',')), 'true,false,false');
    await checkbox.nth(2).press('Space');
    assert.equal(await checkbox.nth(2).isEnabled(), true);
    assert(await checkbox.nth(2).evaluate(e => e.checked));
    const radio = page.locator('#selection input[type=radio]');
    await page.locator('#selection .choice').nth(4).click();
    assert.equal(await radio.evaluateAll(es => es.map(e => e.checked).join(',')), 'false,true,false');
    await radio.nth(1).press('ArrowRight');
    assert.equal(await radio.evaluateAll(es => es.map(e => e.checked).join(',')), 'false,false,true');
    await page.waitForFunction(() => !document.querySelector('.btn-ripple'));
    // Hit-test actual disabled controls with a pointer rather than bypassing disabled semantics.
    for (const control of await page.locator('#disabled button, #disabled .choice .btn').all()) {
      await control.scrollIntoViewIfNeeded();
      const box = await control.boundingBox();
      await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
    }
    assert.equal(await page.locator('#disabled .btn-ripple, .swal2-popup').count(), 0);
    assert.equal(await page.locator('#disabled input:checked').count(), 0);

    const status = page.locator('.action-status');
    for (const action of ['confirm','delete']) {
      const trigger = page.locator('#confirmation [data-action=' + action + ']');
      for (const choice of ['cancel','escape','backdrop','confirm']) {
        console.log('Dialog:', action, choice);
        await trigger.click();
        await page.locator('.swal2-popup').waitFor({ state: 'visible' });
        assert.equal(await status.getAttribute('data-state'), 'pending');
        assert(await page.locator('.swal2-cancel').evaluate(e => e === document.activeElement));
        // Tab and Shift+Tab keep focus within the modal.
        await page.keyboard.press('Tab');
        assert(await page.locator('.swal2-popup').evaluate(e => e.contains(document.activeElement)));
        await page.keyboard.press('Shift+Tab');
        if (choice === 'escape') await page.keyboard.press('Escape');
        else if (choice === 'backdrop') await page.mouse.click(2, 2);
        else await page.locator('.swal2-' + choice).click();
        await page.waitForFunction(() => !document.querySelector('.swal2-container'));
        await page.waitForFunction(() => document.activeElement?.matches('#confirmation [data-action]'));
        assert(await trigger.evaluate(e => e === document.activeElement));
        assert.equal(await status.getAttribute('data-state'), choice === 'confirm' ? 'success' : 'cancelled');
      }
      await trigger.press('Enter');
      await page.locator('.swal2-cancel').press('Enter');
      await page.waitForFunction(() => !document.querySelector('.swal2-container'));
      assert.equal(await status.getAttribute('data-state'), 'cancelled');
    }

    for (const [width,height] of [[320,568],[390,844],[568,320],[768,1024],[1199,768],[1200,768],[1366,768],[1920,1080]]) {
      console.log('Viewport:', width, height);
      await page.setViewportSize({width,height});
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'Horizontal overflow at ' + width);
      for (const [selector, ratio] of [['.button-fullwidth', 1], ['.button-near-fullwidth', .9]]) {
        assert(await page.locator(selector).evaluate((button, ratio) => {
          const p = button.parentElement, style = getComputedStyle(p);
          const available = p.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
          const rect = button.getBoundingClientRect();
          return Math.abs(rect.width - available * ratio) < 1 &&
            Math.abs((rect.left + rect.right) / 2 - (p.getBoundingClientRect().left + p.getBoundingClientRect().right) / 2) < 1;
        }, ratio), 'Button width/centering at ' + width);
      }
      if (width < 1200) {
        await page.locator('.menu-toggle').click();
        assert(await page.locator('.close-menu').evaluate(e => e === document.activeElement));
        await page.keyboard.press('Escape');
        assert.equal(await page.locator('.menu-toggle').getAttribute('aria-expanded'), 'false');
      }
      await page.locator('#confirmation [data-action=delete]').click();
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
      await page.keyboard.press('Escape');
      await page.waitForFunction(() => !document.querySelector('.swal2-container'));
    }
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.locator('#basic .btn').first().click();
    assert.equal(await page.locator('#basic .btn-ripple').first().evaluate(e => getComputedStyle(e).animationName), 'button-ripple-reduced');
    await page.waitForFunction(() => !document.querySelector('.btn-ripple'));
    await page.emulateMedia({ reducedMotion: 'no-preference' });
    await page.goto(pathToFileURL(path.join(root, 'button.html')).href);
    await page.locator('#confirmation [data-action=confirm]').click();
    await page.locator('.swal2-confirm').click();
    await page.waitForFunction(() => !document.querySelector('.swal2-container'));
    assert.equal(await status.getAttribute('data-state'), 'success');
    assert.deepEqual(errors, []);

    // Resource failure and thrown library errors must never produce success.
    const failure = await context.newPage();
    await failure.route('**/sweetalert2.all.min.js', route => route.abort());
    await failure.goto(url);
    await failure.locator('#confirmation [data-action=delete]').click();
    assert.equal(await failure.locator('.action-status').getAttribute('data-state'), 'error');
    assert.equal(await failure.locator('.swal2-popup').count(), 0);
    await failure.close();
    await page.evaluate(() => { window.Swal.fire = () => { throw new Error('Simulated dialog failure'); }; });
    await page.locator('#confirmation [data-action=delete]').click();
    assert.equal(await status.getAttribute('data-state'), 'error');

    const screenshots = process.env.BUTTON_SCREENSHOTS;
    if (screenshots) {
      fs.mkdirSync(screenshots, {recursive: true});
      for (const [width,height,name] of [[1366,900,'desktop'],[390,844,'mobile']]) {
        await page.setViewportSize({width,height}); await page.goto(url);
        await page.screenshot({path:path.join(screenshots,name + '.png'),fullPage:true});
      }
    }
    await context.close();
    console.log('PASS Chrome', browser.version(), ': groups, sizes, ripples, native selection, disabled, both dialog outcomes/dismissals, keyboard/focus, 8 viewports, reduced motion, file URL, dependency failure; no normal-load runtime/resource errors.');
  } finally {
    if (browser) await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(e => { console.error(e); process.exitCode = 1; });


