(() => {
  if (typeof PerfectScrollbar !== 'function') return;
  document.querySelectorAll('.ps-demo-region').forEach(region => {
    const instance = new PerfectScrollbar(region, {
      wheelPropagation: false,
      suppressScrollX: region.id === 'vertical-example',
      suppressScrollY: region.id === 'horizontal-example',
      swipeEasing: !matchMedia('(prefers-reduced-motion: reduce)').matches
    });
    let frame;
    const update = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(() => instance.update()); };
    const observer = new ResizeObserver(update);
    observer.observe(region);
    [...region.children].filter(child => !child.className.startsWith('ps__')).forEach(child => observer.observe(child));
    region.querySelectorAll('img').forEach(image => image.addEventListener('load', update));
    // The region itself provides keyboard scrolling; thumbs remain mouse/touch targets.
    region.querySelectorAll('.ps__thumb-x,.ps__thumb-y').forEach(thumb => thumb.setAttribute('tabindex', '-1'));
    update();
  });
})();
