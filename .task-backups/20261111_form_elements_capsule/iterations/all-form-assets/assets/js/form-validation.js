document.querySelectorAll('form[data-mode]').forEach(form => {
    const mode = form.dataset.mode;
    const status = form.querySelector('.fv-status');
    const fields = [...form.querySelectorAll('.fv-field')];
    const confirmation = form.querySelector('[data-confirm]');
    const password = form.querySelector('[data-password]');
    const fullName = form.querySelector('[data-full-name]');
    const bio = form.querySelector('[data-bio]');

    function syncRules() {
        if (!confirmation) return;
        confirmation.setCustomValidity(confirmation.value && confirmation.value !== password.value
            ? 'Passwords must match.' : '');
        fullName.setCustomValidity(fullName.value && fullName.value.trim().length < 6
            ? 'Enter a name of at least 6 characters.' : '');
        bio.setCustomValidity(bio.value && bio.value.trim().length < 100
            ? 'Enter at least 100 characters for the bio.' : '');
    }

    function updateFeedback() {
        syncRules();
        let firstError;
        let count = 0;
        fields.forEach(field => {
            const controls = [...field.querySelectorAll('input, select, textarea')];
            const invalid = controls.find(control => !control.validity.valid);
            const message = field.querySelector('.fv-error');
            message.hidden = !invalid;
            message.textContent = invalid?.validationMessage || '';
            field.classList.toggle('fv-invalid', Boolean(invalid));
            field.classList.toggle('fv-valid', !invalid);
            for (const control of controls) {
                if (invalid) control.setAttribute('aria-invalid', 'true');
                else control.removeAttribute('aria-invalid');
            }
            if (invalid) {
                count++;
                firstError ||= invalid;
            }
        });
        return { firstError, count };
    }

    function refresh() {
        status.textContent = '';
        if (form.classList.contains('fv-checked')) updateFeedback();
    }
    form.addEventListener('input', refresh);
    form.addEventListener('change', refresh);
    form.addEventListener('invalid', () => {
        status.textContent = '';
    }, true);
    form.addEventListener('submit', event => {
        event.preventDefault();
        if (mode !== 'browser') {
            form.classList.add('fv-checked');
            const { firstError, count } = updateFeedback();
            if (firstError) {
                status.textContent = count === 1 ? 'Correct the highlighted field.' : 'Correct the ' + count + ' highlighted fields.';
                firstError.focus();
                return;
            }
        }
        status.textContent = 'Validation passed. Demo form complete.';
    });
    form.addEventListener('reset', () => {
        form.classList.remove('fv-checked');
        [confirmation, fullName, bio].forEach(control => control?.setCustomValidity(''));
        fields.forEach(field => {
            field.classList.remove('fv-valid', 'fv-invalid');
            field.querySelectorAll('[aria-invalid]').forEach(control => control.removeAttribute('aria-invalid'));
            const message = field.querySelector('.fv-error');
            if (message) {
                message.hidden = true;
                message.textContent = '';
            }
        });
        status.textContent = 'Form reset.';
    });
});
