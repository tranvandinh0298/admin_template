/* Run with Node. Set PLAYWRIGHT_MODULE to an installed playwright module if needed. */
const {chromium} = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const fs=require('node:fs');
const path=require('node:path');
const http=require('node:http');
const assert=require('node:assert/strict');
const {pathToFileURL}=require('node:url');
const root=path.resolve(__dirname,'..');
const files=['default','horizontal','boxed','compact','single_column','blank'].map(n=>n+'_layout.html');
(async()=>{
 const server=http.createServer((req,res)=>{
  const p=decodeURIComponent(req.url.split('?')[0]);
  if(!/^\/(layouts\/[a-z_]+\.html|assets\/(css\/layouts\.css|js\/layouts\.js))$/.test(p)){res.writeHead(404);return res.end();}
  const f=path.join(root,p); res.setHeader('Content-Type',p.endsWith('.css')?'text/css':p.endsWith('.js')?'text/javascript':'text/html');
  fs.createReadStream(f).on('error',()=>{res.statusCode=404;res.end();}).pipe(res);
 });
 await new Promise(r=>server.listen(0,'127.0.0.1',r));
 let browser;
 try {
  browser=await chromium.launch({channel:'chrome',headless:true});
  console.log('Browser:',browser.version());
  const context=await browser.newContext({hasTouch:true});
  const page=await context.newPage(); const errors=[];
  page.on('pageerror',e=>errors.push(e.message)); page.on('requestfailed',r=>errors.push(r.url()));
  page.on('response',r=>{if(r.status()>=400) errors.push(r.status()+' '+r.url());});
  const base='http://127.0.0.1:'+server.address().port+'/layouts/';
  let cases=0;
  const fit=async()=>assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'horizontal overflow: '+page.url());
  for(const file of files){
   for(const [width,height] of [[1920,1080],[1366,768],[390,844],[320,568],[844,390],[568,320]]){
    await page.setViewportSize({width,height}); await page.goto(base+file); await fit();
    assert.equal(await page.locator('h1').count(),1);
    if(width<1200 && await page.locator('.menu-toggle').count()){
     const toggle=page.locator('.menu-toggle'); await toggle.tap();
     assert.equal(await toggle.getAttribute('aria-expanded'),'true');
     assert(await page.locator('.close-menu').evaluate(e=>e===document.activeElement));
     await page.keyboard.press('Escape'); assert.equal(await toggle.getAttribute('aria-expanded'),'false');
     assert(await toggle.evaluate(e=>e===document.activeElement));
     await toggle.focus(); await page.keyboard.press('Enter');
     await page.locator('#layout-menu a').last().focus(); await page.keyboard.press('Tab');
     assert(await page.locator('#layout-menu a').first().evaluate(e=>e===document.activeElement));
     await page.keyboard.press('Shift+Tab'); assert(await page.locator('#layout-menu a').last().evaluate(e=>e===document.activeElement));
     await page.locator('.close-menu').click();
     await toggle.click(); await page.locator('.backdrop').click({position:{x:width-4,y:height-4}});
     assert.equal(await toggle.getAttribute('aria-expanded'),'false');
     await toggle.click(); await page.setViewportSize({width:1366,height:768});
     assert.equal(await page.evaluate(()=>document.body.classList.contains('menu-open')),false);
     assert.equal(await page.locator('.page').evaluate(e=>e.inert),false);
     await page.setViewportSize({width,height}); assert.equal(await toggle.getAttribute('aria-expanded'),'false'); await fit();
    }
    cases++;
   }
   for(const width of [320,375,599,600,768,1024,1199,1200,1201,1440,1920]){await page.setViewportSize({width,height:768});await fit();}
   await page.goto(pathToFileURL(path.join(root,'layouts',file)).href); await fit();
   if(file==='blank_layout.html') assert.equal(await page.locator('aside,nav,header,footer').count(),0);
   if(file==='single_column_layout.html') assert.equal(await page.locator('aside,.menu-toggle').count(),0);
  }
  await page.setViewportSize({width:1920,height:1080}); await page.goto(base+'boxed_layout.html');
  assert(await page.locator('.content-inner').evaluate(e=>e.getBoundingClientRect().width<e.parentElement.getBoundingClientRect().width));
  await page.goto(base+'compact_layout.html'); assert.equal(await page.locator('.navigation').evaluate(e=>e.getBoundingClientRect().width),80);
  await page.goto(base+'horizontal_layout.html'); assert(await page.locator('.navigation').evaluate(e=>e.getBoundingClientRect().width>1000));
  assert.deepEqual(errors,[]); console.log('PASS:',cases,'viewport cases; 66 resize points; menu touch/keyboard/focus/backdrop/resize; six file URLs; variant geometry; no resource/runtime errors.');
  const output=process.env.LAYOUT_SCREENSHOTS;
  if(output){fs.mkdirSync(output,{recursive:true});for(const [w,h,n] of [[1366,768,'desktop'],[390,844,'mobile']]){await page.setViewportSize({width:w,height:h});await page.goto(base+'default_layout.html');await page.screenshot({path:path.join(output,n+'.png'),fullPage:true});}}
  await context.close();
 } finally {if(browser)await browser.close();await new Promise(r=>server.close(r));}
})().catch(e=>{console.error(e);process.exitCode=1;});
