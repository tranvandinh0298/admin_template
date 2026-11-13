(() => {
    const menu = document.getElementById("layout-menu");
    const toggle = document.querySelector(".menu-toggle");
    const close = document.querySelector(".close-menu");
    const backdrop = document.querySelector(".backdrop");
    if (!menu || !toggle || !close || !backdrop) return;
    const desktop = window.matchMedia("(min-width: 1200px)");
    const background = [
        ...document.querySelectorAll(".topbar-wrap, .page, .skip-link"),
    ];
    let open = false;
    function setOpen(value, restoreFocus = true) {
        open = value && !desktop.matches;
        document.body.classList.toggle("menu-open", open);
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute(
            "aria-label",
            open ? "Close navigation" : "Open navigation",
        );
        backdrop.hidden = !open;
        background.forEach((element) => {
            element.inert = open;
        });
        menu.inert = !desktop.matches && !open;
        if (open) {
            menu.setAttribute("role", "dialog");
            menu.setAttribute("aria-modal", "true");
            close.focus();
        } else {
            menu.removeAttribute("role");
            menu.removeAttribute("aria-modal");
            if (restoreFocus && !desktop.matches) toggle.focus();
        }
    }
    toggle.addEventListener("click", () => setOpen(!open));
    close.addEventListener("click", () => setOpen(false));
    backdrop.addEventListener("click", () => setOpen(false));
    document.addEventListener("keydown", (event) => {
        if (!open) return;
        if (event.key === "Escape") {
            event.preventDefault();
            setOpen(false);
        }
        if (event.key === "Tab") {
            const items = [
                ...menu.querySelectorAll("a[href],button:not([disabled])"),
            ].filter((el) => el.getClientRects().length);
            const first = items[0],
                last = items[items.length - 1];
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        }
    });
    desktop.addEventListener("change", () => {
        const active = document.activeElement;
        const focusInMenu = menu.contains(active);
        setOpen(false, false);
        if (!desktop.matches && focusInMenu) toggle.focus();
        else if (desktop.matches && (active === toggle || active === close))
            menu.querySelector("[aria-current],a").focus();
    });
    setOpen(false, false);
})();
