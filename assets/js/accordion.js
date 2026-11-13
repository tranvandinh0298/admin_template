(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const records = [];
  function settle(record) {
    record.animation?.cancel();
    record.animation = null;
    record.panel.hidden = !record.open;
    record.panel.inert = !record.open;
    record.panel.style.height = '';
    record.panel.style.overflow = '';
  }
  function change(record, open, animate = true) {
    const height = record.panel.getBoundingClientRect().height;
    record.animation?.cancel();
    record.animation = null;
    record.open = open;
    if (!open && record.panel.contains(document.activeElement)) record.trigger.focus();
    record.trigger.setAttribute('aria-expanded', String(open));
    record.item.classList.toggle('is-open', open);
    const indicator = record.trigger.querySelector('.accordion-indicator');
    if (record.group.classList.contains('custom') && indicator) {
      indicator.classList.toggle('fa-plus', !open);
      indicator.classList.toggle('fa-minus', open);
    }
    record.panel.inert = !open;
    record.panel.hidden = false;
    record.panel.style.height = '';
    const target = open ? record.panel.scrollHeight : 0;
    if (!animate || reduced.matches || !record.panel.animate) { settle(record); return; }
    record.panel.style.overflow = 'hidden';
    const animation = record.panel.animate([{height: `${height}px`}, {height: `${target}px`}], {duration:200, easing:'ease', fill:'forwards'});
    record.animation = animation;
    animation.onfinish = () => { if (record.animation === animation) settle(record); };
  }
  document.querySelectorAll('.accordion-page .accordion-demo').forEach(group => {
    const items = [];
    group.querySelectorAll('.accordion-trigger').forEach(trigger => {
      const panel = document.getElementById(trigger.getAttribute('aria-controls'));
      if (!panel || !group.contains(panel)) return;
      const record = {group, trigger, panel, item:trigger.closest('.accordion-item'), open:trigger.getAttribute('aria-expanded') === 'true', animation:null};
      items.push(record); records.push(record);
      change(record, record.open, false);
      trigger.addEventListener('click', () => {
        const open = !record.open;
        if (open) items.filter(other => other !== record && other.open).forEach(other => change(other, false));
        change(record, open);
      });
    });
  });
  const settleAll = () => records.forEach(settle);
  addEventListener('resize', settleAll);
  reduced.addEventListener('change', settleAll);
})();
