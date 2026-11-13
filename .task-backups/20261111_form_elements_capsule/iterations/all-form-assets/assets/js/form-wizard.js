document.querySelectorAll('[data-wizard]').forEach(form => {
    const panels = [...form.querySelectorAll('[data-panel]')];
    const steps = [...form.querySelectorAll('[data-step]')];
    const status = form.querySelector('.wiz-status');
    let current = 0;

    function showStep(index) {
        current = index;
        status.textContent = '';
        panels.forEach((panel, position) => { panel.hidden = position !== current; });
        steps.forEach((button, position) => {
            button.disabled = position > current;
            if (position === current) button.setAttribute('aria-current', 'step');
            else button.removeAttribute('aria-current');
            button.classList.toggle('wiz-complete', position < current);
        });
        const review = panels[current].querySelector('.wiz-review');
        if (review) {
            review.replaceChildren();
            form.querySelectorAll('.wiz-field').forEach(field => {
                const control = field.querySelector('input, select');
                if (control.type === 'password' || !control.value.trim()) return;
                const name = document.createElement('dt');
                const value = document.createElement('dd');
                name.textContent = field.querySelector('label').textContent;
                value.textContent = control.value;
                review.append(name, value);
            });
            if (!review.children.length) {
                const empty = document.createElement('div');
                empty.textContent = 'No details entered.';
                review.append(empty);
            }
        }
        panels[current].querySelector('h3').focus();
    }

    const password = form.querySelector('[data-password]');
    const confirmation = form.querySelector('[data-confirm]');
    function syncPassword() {
        confirmation.setCustomValidity(password.value === confirmation.value ? '' : 'Passwords must match.');
    }
    if (form.hasAttribute('data-validate')) {
        password.addEventListener('input', syncPassword);
        confirmation.addEventListener('input', syncPassword);
    }

    form.addEventListener('submit', event => {
        event.preventDefault();
        if (form.hasAttribute('data-validate')) {
            syncPassword();
            for (const control of panels[current].querySelectorAll('input, select')) {
                if (!control.reportValidity()) return;
            }
        }
        if (current < panels.length - 1) showStep(current + 1);
        else status.textContent = 'Demo wizard complete.';
    });
    form.addEventListener('click', event => {
        const button = event.target.closest('button');
        if (!button || button.disabled) return;
        if (button.hasAttribute('data-prev') && current > 0) showStep(current - 1);
        if (button.hasAttribute('data-step') && Number(button.dataset.step) < current) {
            showStep(Number(button.dataset.step));
        }
    });
});
