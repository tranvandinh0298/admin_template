(() => {
  const showcase = document.querySelector('.buttons-page main');
  if (!showcase) return;
  const status = showcase.querySelector('.action-status');
  let dialogPending = false;

  function ripple(button, event) {
    const bounds = button.getBoundingClientRect();
    const diameter = Math.hypot(bounds.width, bounds.height) * 2;
    const wave = document.createElement('span');
    wave.className = 'btn-ripple';
    wave.setAttribute('aria-hidden', 'true');
    const pointer = event.detail > 0;
    Object.assign(wave.style, {
      width: `${diameter}px`, height: `${diameter}px`,
      left: `${pointer ? event.clientX - bounds.left : bounds.width / 2}px`,
      top: `${pointer ? event.clientY - bounds.top : bounds.height / 2}px`
    });
    button.append(wave);
    wave.addEventListener('animationend', () => wave.remove(), { once: true });
    // Also clean up when animation is suppressed by user styles or the page is hidden.
    setTimeout(() => wave.remove(), 800);
  }

  async function confirmAction(button) {
    if (dialogPending) return;
    const deleting = button.dataset.action === 'delete';
    const action = deleting ? 'Delete' : 'Confirm';
    status.textContent = 'Awaiting your confirmation.';
    status.dataset.state = 'pending';
    if (!window.Swal || typeof window.Swal.fire !== 'function') {
      status.textContent = 'The confirmation dialog is unavailable. No action was taken. Please reload and try again.';
      status.dataset.state = 'error';
      return;
    }
    dialogPending = true;
    try {
      const result = await window.Swal.fire({
        title: deleting ? 'Continue with delete?' : 'Continue with confirmation?',
        text: 'This is a demonstration. No real data will be changed.',
        icon: deleting ? 'warning' : 'question',
        showCancelButton: true,
        confirmButtonText: deleting ? 'Yes, delete' : 'Yes, continue',
        cancelButtonText: 'Cancel',
        confirmButtonColor: deleting ? '#ff4c51' : '#8c57ff',
        cancelButtonColor: '#6d6777',
        focusCancel: true,
        returnFocus: true,
        didClose: () => { dialogPending = false; button.focus({ preventScroll: true }); }
      });
      status.dataset.state = result.isConfirmed ? 'success' : 'cancelled';
      status.textContent = result.isConfirmed
        ? `${action} demo completed. No real data was changed.`
        : `${action} cancelled. No action was taken.`;
    } catch {
      dialogPending = false;
      status.dataset.state = 'error';
      status.textContent = 'The confirmation dialog could not open. No action was taken.';
      button.focus({ preventScroll: true });
    }
  }

  showcase.addEventListener('click', event => {
    // Labels forward clicks to native inputs; handle only the forwarded input event.
    // That preserves native selection and avoids two ripples for one activation.
    const input = event.target.closest('.choice input');
    const button = input ? input.nextElementSibling : event.target.closest('button.btn');
    if (!button || button.disabled || (input && input.disabled)) return;
    ripple(button, event);
    if (button.dataset.action) void confirmAction(button);
  });
})();
