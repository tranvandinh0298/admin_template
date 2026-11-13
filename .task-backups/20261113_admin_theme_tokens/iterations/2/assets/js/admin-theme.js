(() => {
    const root = document.documentElement;
    const system = matchMedia('(prefers-color-scheme: dark)');
    const key = 'materio-theme';
    const modes = { system: 'System', light: 'Light', night: 'Night' };
    let preference = 'system';
    let select;

    function apply(value) {
        preference = Object.hasOwn(modes, value) ? value : 'system';
        root.dataset.theme = preference === 'system' ? (system.matches ? 'night' : 'light') : preference;
        if (select) select.value = preference;
    }

    try { apply(localStorage.getItem(key)); }
    catch { apply('system'); }
    system.addEventListener('change', () => apply(preference));
    window.addEventListener('storage', event => {
        if (event.key === key || event.key === null) apply(event.newValue);
    });

    document.addEventListener('DOMContentLoaded', () => {
        const label = document.createElement('label');
        label.className = 'admin-theme-control';
        label.append('Theme');
        select = document.createElement('select');
        for (const [value, text] of Object.entries(modes)) select.add(new Option(text, value));
        label.append(select);
        document.body.append(label);
        select.value = preference;
        select.addEventListener('change', () => {
            apply(select.value);
            try { localStorage.setItem(key, preference); } catch {}
        });
    });
})();
