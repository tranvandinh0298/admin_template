(() => {
  if (typeof PerfectScrollbar !== 'function') return;
  document.querySelectorAll('.ps-demo-region').forEach(region => {
    const instance = new PerfectScrollbar(region, {
      wheelPropagation: false,
      handlers: ['click-rail', 'drag-thumb', 'wheel', 'touch'],
      suppressScrollX: region.id === 'vertical-example',
      suppressScrollY: region.id === 'horizontal-example',
      swipeEasing: !matchMedia('(prefers-reduced-motion: reduce)').matches
    });
    region.addEventListener('keydown', event => {
      if (event.target !== region || event.altKey || event.ctrlKey || event.metaKey) return;
      const horizontal = region.id !== 'vertical-example', vertical = region.id !== 'horizontal-example';
      const keys = {
        ArrowLeft: [-30, 0], ArrowRight: [30, 0], ArrowUp: [0, -30], ArrowDown: [0, 30],
        PageUp: [0, -region.clientHeight], PageDown: [0, region.clientHeight],
        Home: [0, -region.scrollHeight], End: [0, region.scrollHeight],
        ' ': [0, (event.shiftKey ? -1 : 1) * region.clientHeight]
      };
      const delta = keys[event.key];
      if (!delta || (delta[0] && !horizontal) || (delta[1] && !vertical)) return;
      event.preventDefault();
      region.scrollLeft += delta[0]; region.scrollTop += delta[1]; instance.update();
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
