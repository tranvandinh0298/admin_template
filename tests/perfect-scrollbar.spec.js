
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const fs=require('fs'),path=require('path'),http=require('http'),assert=require('assert/strict'),{pathToFileURL}=require('url');
const root=path.resolve(__dirname,'..');
(async()=>{
 const server=http.createServer((req,res)=>{const file=path.resolve(root,'.'+new URL(req.url,'http://localhost').pathname);if(!file.startsWith(root+path.sep)||!fs.existsSync(file)||!fs.statSync(file).isFile()){res.writeHead(404);return res.end();}res.setHeader('Content-Type',({'.css':'text/css','.js':'text/javascript','.woff2':'font/woff2'})[path.extname(file)]||'text/html');fs.createReadStream(file).pipe(res);});
 await new Promise(r=>server.listen(0,'127.0.0.1',r));let browser;
 try{
 browser=await chromium.launch({channel:'chrome'});const p=await browser.newPage({viewport:{width:1366,height:1000}}),errors=[];
 p.on('pageerror',e=>errors.push(e.message));p.on('requestfailed',r=>errors.push(r.url()));p.on('response',r=>{if(r.status()>=400)errors.push(r.url())});
 const url='http://127.0.0.1:'+server.address().port+'/perfect-scrollbar.html';await p.goto(url);
 assert.equal(await p.locator('.ps-demo-region.ps').count(),3);assert.equal(await p.locator('svg').count(),0);
 const v=p.locator('#vertical-example'),h=p.locator('#horizontal-example'),both=p.locator('#both-scrollbars-example');
 const pos=el=>el.evaluate(e=>[e.scrollLeft,e.scrollTop]);
 await v.hover();await p.mouse.wheel(0,180);await p.waitForTimeout(150);assert((await pos(v))[1]>0);assert.equal((await pos(v))[0],0);
 await h.hover();await p.mouse.wheel(240,0);await p.waitForTimeout(150);assert((await pos(h))[0]>0);assert.equal((await pos(h))[1],0);
 await both.hover();await p.mouse.wheel(200,180);await p.waitForTimeout(150);assert((await pos(both)).every(n=>n>0));
 for(const [el,key,axis] of [[v,'ArrowDown',1],[h,'ArrowRight',0],[both,'PageDown',1]]){
 await el.evaluate(e=>{e.scrollTop=0;e.scrollLeft=0});await el.focus();await p.keyboard.press(key);assert((await pos(el))[axis]>0);
 }await p.keyboard.press('Tab');assert.notEqual(await p.evaluate(()=>document.activeElement.id),'both-scrollbars-example');
 // Drag a real thumb in both orientations.
 for(const [el,axis] of [[v,'y'],[h,'x']]){
 await el.evaluate(e=>{e.scrollTop=0;e.scrollLeft=0});await el.hover();await p.waitForTimeout(100);const thumb=el.locator('.ps__thumb-'+axis),box=await thumb.boundingBox();await p.mouse.move(box.x+box.width/2,box.y+box.height/2);await p.mouse.down();await p.mouse.move(box.x+box.width/2+(axis==='x'?50:0),box.y+box.height/2+(axis==='y'?35:0),{steps:10});await p.mouse.up();assert((await pos(el))[axis==='x'?0:1]>0);
 }
 // The observer responds to changed content dimensions without explicit caller updates.
 await h.locator('.ps-demo-landscape').evaluate(e=>e.style.width='1800px');await p.waitForTimeout(100);
 assert(await h.locator('.ps__thumb-x').evaluate(e=>e.offsetWidth<e.parentElement.offsetWidth));
 const widths=[320,390,568,768,991,1199,1200,1366,1920];
 for(const width of widths){await p.setViewportSize({width,height:900});await p.waitForTimeout(100);assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'overflow '+width);assert(await h.evaluate(e=>e.scrollWidth>e.clientWidth));if(width<1200){await p.locator('.menu-toggle').click();await p.keyboard.press('Escape');assert.equal(await p.locator('body.menu-open').count(),0);}}
 await p.setViewportSize({width:1366,height:1000});await p.emulateMedia({reducedMotion:'reduce'});
 await p.locator('h2').first().evaluate(e=>e.style.fontSize='36px');assert(await v.evaluate(e=>e.clientHeight>0));
 const dir=path.join(root,'.task-backups/20261110_materio_perfect_scrollbar/validation');fs.mkdirSync(dir,{recursive:true});await p.screenshot({path:path.join(dir,'desktop.png'),fullPage:true});
 await p.setViewportSize({width:390,height:844});await p.screenshot({path:path.join(dir,'mobile.png'),fullPage:true});
 await p.goto(pathToFileURL(path.join(root,'perfect-scrollbar.html')).href);assert.equal(await p.locator('.ps').count(),3);
 assert.deepEqual(errors,[]);
 // Actual touch gesture.
 const touch=await browser.newPage({viewport:{width:390,height:844},hasTouch:true,isMobile:true});await touch.goto(url);const tv=touch.locator('#vertical-example');await tv.scrollIntoViewIfNeeded();const rect=await tv.boundingBox(),cdp=await touch.context().newCDPSession(touch);
 const x=rect.x+rect.width/2,y=rect.y+rect.height-30;
 await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x,y}]});
 for(let n=1;n<=12;n++)await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x,y:y-n*8}]});
 await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});await touch.waitForTimeout(150);assert((await pos(tv))[1]>0);await touch.close();
 // Native fallback remains scrollable if the dependency is unavailable.
 const fallback=await browser.newPage();await fallback.route('**/perfect-scrollbar.min.js',r=>r.abort());await fallback.goto(url);assert.equal(await fallback.locator('.ps').count(),0);assert.equal(await fallback.locator('#vertical-example').evaluate(e=>getComputedStyle(e).overflowY),'auto');await fallback.close();
 console.log('PASS: three axes, wheel, keyboard, thumb dragging, touch, resize observer, 9 widths, drawer, reduced motion, file URL, native fallback; no resource/runtime errors.');
 }finally{if(browser)await browser.close();await new Promise(r=>server.close(r));}
})().catch(e=>{console.error(e);process.exitCode=1;});
