(() => {
 const root=document.querySelector('.navbar-page main');if(!root)return;
 const desktop=matchMedia('(min-width:992px)');let active=null;let lastFocus=null;document.addEventListener('focusin',event=>{lastFocus=event.target;});
 const status=root.querySelector('#nv-status');
 const entries=menu=>[...menu.querySelectorAll('a[href]:not([aria-disabled=true])')].filter(e=>e.getClientRects().length);
 function close(restore=false){if(!active)return;const old=active;active=null;old.menu.hidden=true;old.trigger.setAttribute('aria-expanded','false');if(restore)old.trigger.focus({preventScroll:true});}
 function position(){if(!active)return;const {trigger,menu}=active;menu.style.left='';menu.style.top='';if(!desktop.matches)return;const t=trigger.getBoundingClientRect(),w=menu.getBoundingClientRect().width,h=menu.getBoundingClientRect().height;const x=Math.max(8,Math.min(t.left,innerWidth-w-8));const below=t.bottom+6;const y=below+h<=innerHeight-8?below:Math.max(8,Math.min(t.top-h-6,innerHeight-h-8));menu.style.left=x+'px';menu.style.top=y+'px';}
 function open(trigger){close();const menu=document.getElementById(trigger.getAttribute('aria-controls'));if(!menu||!root.contains(menu))return;active={trigger,menu};menu.hidden=false;trigger.setAttribute('aria-expanded','true');position();}
 root.querySelectorAll('[data-menu-toggle]').forEach(trigger=>{
 trigger.addEventListener('click',()=>active?.trigger===trigger&&!trigger.closest('[data-hover]:hover')?close():open(trigger));
 trigger.addEventListener('keydown',event=>{if(['ArrowDown','ArrowUp'].includes(event.key)){event.preventDefault();if(active?.trigger!==trigger)open(trigger);const list=entries(active.menu);(event.key==='ArrowDown'?list[0]:list.at(-1))?.focus();}});
 const parent=trigger.closest('[data-hover]');if(parent){let leaveTimer;parent.addEventListener('pointerenter',e=>{clearTimeout(leaveTimer);if(e.pointerType==='mouse'&&matchMedia('(hover:hover)').matches)open(trigger);});parent.addEventListener('pointerleave',e=>{if(e.pointerType==='mouse'&&active?.trigger===trigger&&!parent.contains(document.activeElement))leaveTimer=setTimeout(()=>{if(active?.trigger===trigger&&!parent.matches(':hover')&&!parent.contains(document.activeElement))close();},180);});}
 });
 root.querySelectorAll('[data-nav-toggle]').forEach(toggle=>toggle.addEventListener('click',()=>{const nav=toggle.closest('.nv-example'),open=toggle.getAttribute('aria-expanded')!=='true';if(!open){if(active&&nav.contains(active.trigger))close();const panel=document.getElementById(toggle.getAttribute('aria-controls'));if(panel.contains(document.activeElement))toggle.focus();}nav.classList.toggle('is-expanded',open);toggle.setAttribute('aria-expanded',String(open));}));
 root.querySelectorAll('form').forEach(form=>form.addEventListener('submit',event=>{event.preventDefault();status.textContent='Demonstration only. No information was sent.';}));
 root.addEventListener('click',event=>{const item=event.target.closest('[data-demo]');if(!item)return;event.preventDefault();if(item.getAttribute('aria-disabled')==='true')return;status.textContent=`${item.textContent.trim()} selected. Demonstration only.`;if(active&&active.menu.contains(item))close(true);});
 document.addEventListener('click',event=>{if(active&&!active.menu.contains(event.target)&&!active.trigger.contains(event.target))close();});
 document.addEventListener('keydown',event=>{if(!active)return;if(event.key==='Escape'){event.preventDefault();event.stopPropagation();close(true);return;}if(event.key==='Tab')setTimeout(()=>{if(active&&!active.menu.contains(document.activeElement)&&!active.trigger.contains(document.activeElement))close();},0);if(!active?.menu.contains(event.target)||event.target.matches('input,select,textarea'))return;const list=entries(active.menu),index=list.indexOf(document.activeElement);if(['ArrowDown','ArrowUp','Home','End'].includes(event.key)){event.preventDefault();const next=event.key==='Home'?0:event.key==='End'?list.length-1:(index+(event.key==='ArrowDown'?1:-1)+list.length)%list.length;list[next]?.focus();}},true);
 function reset(){close();root.querySelectorAll('[data-nav-toggle]').forEach(toggle=>{const nav=toggle.closest('.nv-example'),panel=document.getElementById(toggle.getAttribute('aria-controls'));if(!desktop.matches&&(panel.contains(document.activeElement)||(document.activeElement===document.body&&panel.contains(lastFocus))))toggle.focus();nav.classList.remove('is-expanded');toggle.setAttribute('aria-expanded',String(desktop.matches));});}
 desktop.addEventListener('change',reset);addEventListener('resize',position);addEventListener('scroll',position,true);reset();
})();



