(() => {
 const root=document.querySelector('.tabs-pills-page main');if(!root)return;
 root.querySelectorAll('[role=tablist]').forEach(list=>{
  const tabs=[...list.querySelectorAll('[role=tab]')],enabled=tabs.filter(t=>!t.disabled);
  function select(tab,focus=false){if(tab.disabled)return;tabs.forEach(t=>{const selected=t===tab;t.setAttribute('aria-selected',String(selected));t.tabIndex=selected?0:-1;const panel=document.getElementById(t.getAttribute('aria-controls'));if(panel)panel.hidden=!selected;});if(focus){tab.focus({preventScroll:true});const rect=tab.getBoundingClientRect(),viewport=list.getBoundingClientRect();if(rect.left<viewport.left)list.scrollLeft+=rect.left-viewport.left;else if(rect.right>viewport.right)list.scrollLeft+=rect.right-viewport.right;}}
  enabled.forEach(tab=>tab.addEventListener('click',()=>select(tab)));
  list.addEventListener('keydown',event=>{const tab=event.target.closest('[role=tab]');if(!tab||tab.disabled)return;const vertical=list.getAttribute('aria-orientation')==='vertical',next=vertical?'ArrowDown':'ArrowRight',prev=vertical?'ArrowUp':'ArrowLeft';if(![next,prev,'Home','End'].includes(event.key))return;event.preventDefault();const index=enabled.indexOf(tab),target=event.key==='Home'?0:event.key==='End'?enabled.length-1:(index+(event.key===next?1:-1)+enabled.length)%enabled.length;select(enabled[target],true);});
 });
 root.querySelectorAll('[data-tp-demo]').forEach(link=>link.addEventListener('click',event=>{event.preventDefault();link.parentElement.querySelector('.tp-result').textContent='Demonstration only. No navigation or action was performed.';}));
})();

