(() => {
  const root = document.querySelector('.alerts-page main');
  if (!root) return;
  const visible = element => element?.isConnected && !element.closest('[hidden], [inert]') && element.getClientRects().length;
  root.addEventListener('click', event => {
    const button = event.target.closest('button[data-alert-dismiss]');
    if (!button || !root.contains(button) || button.disabled) return;
    const alert = button.closest('[data-alert-dismissible]');
    const section = alert?.closest('.alert-demo-section');
    if (!alert || !section || !root.contains(section)) return;
    const recover = alert.contains(document.activeElement);
    let fallback;
    if (recover) {
      const controls = [...section.querySelectorAll('button[data-alert-dismiss]:not(:disabled)')].filter(visible);
      const index = controls.indexOf(button);
      fallback = controls.slice(index + 1).find(control => !alert.contains(control))
        || controls.slice(0, index).reverse().find(control => !alert.contains(control))
        || section.querySelector('h2');
    }
    alert.remove();
    if (recover) {
      if (!visible(fallback)) fallback = section.querySelector('h2');
      if (!visible(fallback)) fallback = root.querySelector('h1');
      fallback?.focus({preventScroll:true});
    }
  });
})();
