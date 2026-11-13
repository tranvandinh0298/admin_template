(() => {
    const main = document.querySelector('.form-layout-page main');
    if (!main) return;

    main.querySelectorAll('form').forEach(form => {
        const status = form.querySelector('.fl-status');
        const cardFields = form.querySelector('[data-card-fields]');
        const syncPayment = () => {
            if (!cardFields) return;
            const cash = form.querySelector('input[name="payment"]:checked')?.value === 'Cash on Delivery';
            cardFields.hidden = cash;
            cardFields.querySelectorAll('input').forEach(input => { input.disabled = cash; });
        };
        form.addEventListener('change', event => {
            if (event.target.name === 'payment') syncPayment();
        });
        form.addEventListener('submit', event => {
            event.preventDefault();
            status.textContent = form.querySelector('.fl-sticky')
                ? 'Demo order complete.'
                : 'Demo form submitted.';
        });
        form.addEventListener('reset', () => {
            status.textContent = 'Form reset.';
            requestAnimationFrame(syncPayment);
        });
        syncPayment();
    });

    main.querySelectorAll('[role="tablist"]').forEach(list => {
        const tabs = [...list.querySelectorAll('[role="tab"]')];
        function select(tab) {
            tabs.forEach(item => {
                const active = item === tab;
                item.tabIndex = active ? 0 : -1;
                item.setAttribute('aria-selected', String(active));
                document.getElementById(item.getAttribute('aria-controls')).hidden = !active;
            });
        }
        tabs.forEach(tab => tab.addEventListener('click', () => select(tab)));
        list.addEventListener('keydown', event => {
            const index = tabs.indexOf(event.target);
            if (index < 0) return;
            const targets = { ArrowLeft: (index + tabs.length - 1) % tabs.length,
                ArrowRight: (index + 1) % tabs.length, Home: 0, End: tabs.length - 1 };
            if (!Object.hasOwn(targets, event.key)) return;
            event.preventDefault();
            const tab = tabs[targets[event.key]];
            select(tab);
            tab.focus();
        });
    });

    const sticky = main.querySelector('.fl-sticky');
    if (sticky) {
        sticky.append(main.querySelector('.fl-status'));
        const topbar = document.querySelector('.topbar-wrap');
        const position = () => sticky.style.setProperty('--fl-header-height', topbar.offsetHeight + 'px');
        new ResizeObserver(position).observe(topbar);
        position();
        const promo = document.getElementById('fl-promo');
        const promoStatus = document.getElementById('fl-promo-status');
        function applyPromo() {
            promoStatus.textContent = promo.value.trim().toUpperCase() === 'DEMO10'
                ? 'DEMO10 applied to this demo.'
                : 'Use DEMO10 to try a promo code.';
        }
        main.querySelector('[data-promo]').addEventListener('click', applyPromo);
        promo.addEventListener('input', () => { promoStatus.textContent = ''; });
        promo.addEventListener('keydown', event => {
            if (event.key !== 'Enter') return;
            event.preventDefault();
            applyPromo();
        });
    }
})();
