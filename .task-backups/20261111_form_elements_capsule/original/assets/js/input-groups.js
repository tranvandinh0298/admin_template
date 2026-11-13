(() => {
    const page = document.querySelector('.input-groups-page');
    const status = document.getElementById('ig-status');
    let recognition;
    let statusTimer;
    function announce(message) {
        clearTimeout(statusTimer);
        status.textContent = message;
        statusTimer = setTimeout(() => { status.textContent = ''; }, 6000);
    }
    function closeDropdowns(except) {
        page.querySelectorAll('.ig-dropdown[open]').forEach(dropdown => {
            if (dropdown !== except) dropdown.open = false;
        });
    }
    page.addEventListener('click', event => {
        const dropdown = event.target.closest('.ig-dropdown');
        closeDropdowns(dropdown);
        const button = event.target.closest('button');
        if (!button) return;
        const input = button.closest('.ig-row')?.querySelector('.bi-control');
        if (button.hasAttribute('data-password')) {
            const visible = input.type === 'password';
            input.type = visible ? 'text' : 'password';
            button.setAttribute('aria-pressed', String(visible));
            button.setAttribute('aria-label', visible ? 'Hide password' : 'Show password');
            button.querySelector('i').classList.toggle('fa-eye-slash', visible);
            button.querySelector('i').classList.toggle('fa-eye', !visible);
        }
        if (button.hasAttribute('data-option')) {
            dropdown.open = false;
            dropdown.querySelector('summary').focus();
            announce(button.textContent + ' selected.');
        }
        if (button.hasAttribute('data-action')) announce(button.textContent + ' selected.');
        if (button.hasAttribute('data-speech')) dictate(input, button);
    });
    page.addEventListener('keydown', event => {
        if (event.key !== 'Escape') return;
        const open = page.querySelector('.ig-dropdown[open]');
        if (!open) return;
        open.open = false;
        open.querySelector('summary').focus();
        event.preventDefault();
    });
    function dictate(input, button) {
        const Speech = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!Speech) { announce('Dictation is unavailable. Type in the field instead.'); return; }
        if (recognition) return;
        const session = new Speech();
        recognition = session;
        session.lang = document.documentElement.lang;
        function finish() {
            if (recognition !== session) return;
            recognition = undefined;
            button.removeAttribute('aria-busy');
        }
        session.onresult = event => {
            input.value = event.results[0][0].transcript;
            input.dispatchEvent(new Event('input', { bubbles: true }));
            announce('Dictation added.');
        };
        session.onerror = () => { finish(); announce('Dictation failed. You can type in the field.'); };
        session.onend = finish;
        try {
            session.start();
            button.setAttribute('aria-busy', 'true');
            announce('Listening…');
        } catch {
            finish();
            announce('Unable to start dictation. You can type in the field.');
        }
    }
})();
