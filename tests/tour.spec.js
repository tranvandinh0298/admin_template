const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const fs=require('fs'),path=require('path'),assert=require('assert/strict'),{pathToFileURL}=require('url');
(async()=>{const b=await chromium.launch({channel:'chrome'});try{
 const p=await b.newPage({viewport:{width:1366,height:900},reducedMotion:'reduce'}),errors=[];
 p.on('pageerror',e=>errors.push(e.message));p.on('requestfailed',r=>errors.push(r.url()));
 await p.goto(pathToFileURL(path.resolve(__dirname,'../tour.html')).href);
 const start=async()=>{await p.locator('#start-tour').click();await p.locator('.driver-popover').waitFor();};
 const title=()=>p.locator('.driver-popover-title').textContent();
 const next=()=>p.locator('.driver-popover-next-btn').click();
 const closed=async()=>{await p.waitForFunction(()=>!document.querySelector('.driver-popover'));assert.equal(await p.locator('.driver-overlay').count(),0);assert.equal(await p.evaluate(()=>document.activeElement.id),'start-tour');};
 assert.equal(await p.locator('.driver-popover').count(),0);await start();assert.equal(await title(),'Navbar');await next();assert.equal(await title(),'Card');await p.locator('.driver-popover-prev-btn').click();assert.equal(await title(),'Navbar');
 for(let i=0;i<12;i++){await p.keyboard.press(i%2?'Shift+Tab':'Tab');assert(await p.evaluate(()=>!!document.activeElement.closest('.driver-popover')));}
 await next();await next();assert.equal(await title(),'Footer');await next();assert.equal(await title(),'Learn more');assert.equal(await p.locator('.driver-popover-next-btn').textContent(),'Finish');await next();await closed();
 for(const method of ['skip','close','escape']){await start();assert.equal(await title(),'Navbar');if(method==='skip')await p.locator('.tour-skip').click();else if(method==='close')await p.locator('.driver-popover-close-btn').click();else await p.keyboard.press('Escape');await closed();}
 for(const width of [320,390,568,768,991,1199,1200,1366,1920]){await p.setViewportSize({width,height:width===568?320:844});await start();for(let i=0;i<4;i++){const box=await p.locator('.driver-popover').boundingBox();assert(box.x>=0&&box.x+box.width<=width+1,'horizontal overflow '+width);assert(box.y>=0&&box.y+box.height<=(width===568?320:844)+1,'vertical overflow '+width);if(i<3)await next();}await next();await closed();}
 await p.setViewportSize({width:1366,height:900});await start();await p.setViewportSize({width:390,height:844});await p.waitForTimeout(100);assert.equal(await title(),'Navbar');
 const dir=path.resolve(__dirname,'../.task-backups/20261110_materio_tour/validation');fs.mkdirSync(dir,{recursive:true});await p.screenshot({path:path.join(dir,'mobile.png')});await p.keyboard.press('Escape');await closed();await p.setViewportSize({width:1366,height:900});await start();await p.screenshot({path:path.join(dir,'desktop.png')});await p.keyboard.press('Escape');await closed();
 assert.deepEqual(errors,[]);console.log('PASS: four steps, Back/Next/Skip/Finish/close/Escape, focus trap/return, restart, nine widths, active resize; no resource/runtime errors.');
 }finally{await b.close();}})().catch(e=>{console.error(e);process.exitCode=1;});
