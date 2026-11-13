(() => {
 const launcher = document.getElementById('start-tour'), status = document.getElementById('tour-status');
 if (!launcher) return;
 if (!window.driver?.js?.driver) { launcher.disabled = true; status.textContent = 'The tour could not load. Please reload the page.'; return; }
 let active = null;
 const targets = [
  ['.topbar', 'Navbar', 'This is your navbar. It keeps page context and navigation within reach.', 'bottom'],
  ['.tour-card', 'Card', 'Cards group related content and actions. This card starts the tour.', 'bottom'],
  ['.footer', 'Footer', 'This is the footer, where supporting information and links belong.', 'top'],
  ['.tour-more', 'Learn more', 'Explore the local card components after finishing this tour.', 'top']
 ];
 launcher.addEventListener('click', () => {
  if (active) return;
  if (document.body.classList.contains('menu-open')) document.querySelector('.close-menu').click();
  status.textContent = '';
  active = window.driver.js.driver({
   animate: !matchMedia('(prefers-reduced-motion: reduce)').matches,
   smoothScroll: false, overlayOpacity: .5, stagePadding: 6, stageRadius: 7,
   disableActiveInteraction: true, allowClose: true, showProgress: true,
   nextBtnText: 'Next', prevBtnText: 'Back', doneBtnText: 'Finish', popoverClass: 'materio-tour',
   steps: targets.map(([element,title,description,side]) => ({element,popover:{title,description,side,align:'start'}})),
   onPopoverRender(popover) {
    popover.wrapper.setAttribute('aria-modal', 'true');
    popover.closeButton.setAttribute('aria-label','Close tour');
    if (!active.isLastStep()) {
     const skip = document.createElement('button'); skip.type = 'button'; skip.className = 'tour-skip'; skip.textContent = 'Skip';
     skip.addEventListener('click', () => active?.destroy()); popover.footer.insertBefore(skip, popover.footer.firstChild);
    }
    requestAnimationFrame(() => { if (active) popover.nextButton.focus({preventScroll:true}); });
   },
   onDestroyed() { active = null; status.textContent = 'Tour ended. You can start it again at any time.'; launcher.focus({preventScroll:true}); }
  });
  active.drive();
 });
 document.addEventListener('keydown', event => {
  if (!active || event.key !== 'Tab') return;
  const buttons = [...document.querySelectorAll('.driver-popover button')].filter(b => !b.disabled && b.getClientRects().length);
  if (!buttons.length) return;
  const index = buttons.indexOf(document.activeElement);
  event.preventDefault(); event.stopImmediatePropagation();
  buttons[(index + (event.shiftKey ? -1 : 1) + buttons.length) % buttons.length].focus();
 }, true);
 document.addEventListener('focusin', event => {
  if (active && !event.target.closest('.driver-popover')) document.querySelector('.driver-popover-next-btn')?.focus({preventScroll:true});
 });
})();
