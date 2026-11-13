(() => {
  const root=document.querySelector('.dropdowns-page'); if(!root)return;
  const status=root.querySelector('#dd-status'); let active=null;
  const available=menu=>[...menu.querySelectorAll('.dd-item:not(:disabled)')].filter(e=>e.getClientRects().length);
  function close(restore=false){if(!active)return;const old=active;active=null;old.menu.hidden=true;old.trigger.setAttribute('aria-expanded','false');old.popper?.destroy();if(restore)old.trigger.focus({preventScroll:true});}
  function placement(trigger){const alignment=trigger.dataset.align;return alignment?(innerWidth>=992?(alignment==='start-end'?'bottom-end':'bottom-start'):(alignment==='start-end'?'bottom-start':'bottom-end')):trigger.dataset.placement;}
  function open(trigger){close();const menu=document.getElementById(trigger.getAttribute('aria-controls'));if(!menu||!root.contains(menu))return;menu.hidden=false;trigger.setAttribute('aria-expanded','true');const reference=trigger.dataset.reference?trigger.closest('.dd-reference'):trigger;active={trigger,menu,popper:window.Popper?.createPopper(reference,menu,{placement:placement(trigger),strategy:'fixed',modifiers:[{name:'offset',options:{offset:trigger.dataset.offset?[12,20]:[0,6]}},{name:'flip',options:{padding:8}},{name:'preventOverflow',options:{padding:8}}]})};if(!active.popper){close();status.textContent='Dropdown positioning is unavailable. Please reload.';}}
  root.querySelectorAll('[data-dd-trigger]').forEach(trigger=>{
    trigger.addEventListener('click',()=>active?.trigger===trigger?close():open(trigger));
    trigger.addEventListener('keydown',event=>{if(['ArrowDown','ArrowUp'].includes(event.key)){event.preventDefault();if(active?.trigger!==trigger)open(trigger);const list=active?available(active.menu):[];(event.key==='ArrowDown'?list[0]:list.at(-1))?.focus();}});
    if(trigger.closest('[data-hover]')){const wrap=trigger.closest('.dd-wrap');wrap.addEventListener('pointerenter',event=>{if(event.pointerType==='mouse'&&matchMedia('(hover:hover)').matches)open(trigger);});wrap.addEventListener('pointerleave',event=>{if(event.pointerType==='mouse'&&!wrap.contains(document.activeElement)&&active?.trigger===trigger)close();});}
  });
  document.addEventListener('click',event=>{
    if(!active)return;const {trigger,menu}=active;if(trigger.contains(event.target))return;
    const inside=menu.contains(event.target),mode=trigger.dataset.close;
    const item=event.target.closest('.dd-item');if(inside&&item)status.textContent=`Selected: ${item.textContent.trim()}. Demo only.`;
    if(inside&&item&&(mode==='default'||mode==='inside'))close();
    else if(!inside&&(mode==='default'||mode==='outside'))close();
  });
  document.addEventListener('keydown',event=>{
    if(!active)return;
    if(event.key==='Escape'){event.preventDefault();close(true);return;}
    if(!active.menu.contains(event.target)||event.target.matches('input,textarea,select'))return;
    const list=available(active.menu),index=list.indexOf(document.activeElement);
    if(['ArrowDown','ArrowUp','Home','End'].includes(event.key)){event.preventDefault();const next=event.key==='Home'?0:event.key==='End'?list.length-1:(index+(event.key==='ArrowDown'?1:-1)+list.length)%list.length;list[next]?.focus();}
  },true);
  document.addEventListener('focusin',event=>{if(active&&!active.menu.contains(event.target)&&!active.trigger.contains(event.target))close();});
  root.querySelectorAll('.dd-form').forEach(form=>form.addEventListener('submit',event=>{event.preventDefault();status.textContent='Sign-in demonstration only. No information was sent.';}));
  root.querySelectorAll('.dd-main').forEach(button=>button.addEventListener('click',()=>{status.textContent=`${button.textContent.trim()} main action selected. Demo only.`;}));
  addEventListener('resize',()=>close());
  const parent=root.querySelector('.sidebar-parent'),submenu=root.querySelector('#sidebar-submenu');
  function toggleSidebar(open){if(!open&&submenu.contains(document.activeElement))parent.focus();submenu.hidden=!open;parent.setAttribute('aria-expanded',String(open));}
  parent.addEventListener('click',()=>toggleSidebar(submenu.hidden));
  parent.closest('aside').addEventListener('keydown',event=>{if(event.key==='Escape'&&!submenu.hidden&&(submenu.contains(event.target)||event.target===parent)){event.preventDefault();event.stopPropagation();toggleSidebar(false);}},true);
})();
