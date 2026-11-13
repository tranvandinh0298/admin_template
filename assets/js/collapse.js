(() => {
  const root = document.querySelector('.collapse-page main');
  if (!root) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const panels = new Map([...root.querySelectorAll('.collapse-panel[id]')].map(panel => [panel.id, {
    panel, axis:panel.dataset.collapseAxis === 'width' ? 'width' : 'height', open:!panel.hidden, animation:null
  }]));
  const controls = [];
  function sync() {
    controls.forEach(({trigger, targets}) => {
      const count = targets.filter(record => record.open).length;
      trigger.setAttribute('aria-expanded', String(count === targets.length));
      if (targets.length > 1) {
        const description = document.getElementById(trigger.getAttribute('aria-describedby'));
        if (description && root.contains(description)) description.textContent = `${count} of ${targets.length} panels expanded`;
      }
    });
  }
  function settle(record) {
    record.animation?.cancel(); record.animation = null;
    record.panel.hidden = !record.open; record.panel.inert = !record.open;
    record.panel.style[record.axis] = ''; record.panel.style.overflow = '';
    if (record.axis === 'width') record.panel.firstElementChild.style.width = '';
  }
  function change(record, open, trigger) {
    const {panel, axis} = record;
    const current = panel.getBoundingClientRect()[axis];
    record.animation?.cancel(); record.animation = null;
    if (!open && panel.contains(document.activeElement)) trigger.focus();
    record.open = open; panel.inert = !open; panel.hidden = false;
    panel.style[axis] = '';
    if (axis === 'width') {
      panel.firstElementChild.style.width = `${Math.min(300, panel.parentElement.clientWidth)}px`;
      // Preserve the inner card width while its outer wrapper shrinks.
      panel.firstElementChild.style.maxWidth = 'none';
    }
    const target = open ? (axis === 'width' ? panel.parentElement.clientWidth : panel.scrollHeight) : 0;
    if (reduced.matches || !panel.animate) { settle(record); if(axis === 'width') panel.firstElementChild.style.maxWidth = ''; return; }
    panel.style.overflow = 'hidden';
    const animation = panel.animate([{[axis]:`${current}px`},{[axis]:`${target}px`}], {duration:200,easing:'ease',fill:'forwards'});
    record.animation = animation;
    animation.onfinish = () => { if (record.animation === animation) { settle(record); if(axis === 'width') panel.firstElementChild.style.maxWidth = ''; } };
  }
  function ripple(trigger, event) {
    const box = trigger.getBoundingClientRect(), size = Math.hypot(box.width,box.height)*2;
    const wave = document.createElement('span'); wave.className = 'btn-ripple'; wave.setAttribute('aria-hidden','true');
    Object.assign(wave.style,{width:`${size}px`,height:`${size}px`,left:`${event.detail ? event.clientX-box.left : box.width/2}px`,top:`${event.detail ? event.clientY-box.top : box.height/2}px`});
    trigger.append(wave); wave.addEventListener('animationend',()=>wave.remove(),{once:true}); setTimeout(()=>wave.remove(),800);
  }
  root.querySelectorAll('[data-collapse-targets]').forEach(trigger => {
    const ids = [...new Set(trigger.dataset.collapseTargets.trim().split(/\s+/))];
    if (!ids.length || ids.some(id=>!panels.has(id))) return;
    const targets = ids.map(id=>panels.get(id)); controls.push({trigger,targets});
    trigger.setAttribute('aria-controls',ids.join(' '));
    trigger.addEventListener('click',event=>{
      event.preventDefault();
      if(trigger.disabled || trigger.classList.contains('disabled') || trigger.getAttribute('aria-disabled') === 'true') return;
      const desired = targets.map(record=>!record.open);
      targets.forEach((record,i)=>change(record,desired[i],trigger)); sync(); ripple(trigger,event);
    });
    if(trigger.tagName === 'A') trigger.addEventListener('keydown',event=>{if(event.key === ' '){event.preventDefault(); if(!event.repeat) trigger.click();}});
  });
  const settleAll = () => { panels.forEach(record=>{settle(record); if(record.axis==='width') record.panel.firstElementChild.style.maxWidth='';}); sync(); };
  settleAll(); addEventListener('resize',settleAll); reduced.addEventListener('change',settleAll);
})();
