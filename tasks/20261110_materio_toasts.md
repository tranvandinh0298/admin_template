# Task: Replicate Materio Toast showcase using a standalone notification library
**Task ID:** 20261110_materio_toasts

## Context
The user requests Toast based on https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/ui-toasts.html and explicitly prefers a library instead of Bootstrap if feasible.
The repository contains standalone static component pages, a shared shell, local Font Awesome, Animate.css and SweetAlert2 assets, and browser tests. No dedicated Notyf asset directory was observed. Preserve unrelated shared-layout edits and earlier task artifacts.
Direct HTTP retrieval identifies four groups: animated toast demo, placement demo, toast-style gallery and Notyf Notifications configurator. The first two reference headings mention Bootstrap; that does not require the implementation to use Bootstrap. The animated demo has seven color choices and numerous animation options; placement has seven color choices and nine viewport positions. The Notyf form exposes message, dismissible, ripple, success/error/info/warning, duration (initial3000ms), horizontal left/center/right and vertical top/bottom, plus Show Notification and Clear Notifications. Gallery inventory, all animation choices, runtime timing and interactions require rendered verification. The web reader could not access the page; direct HTTP retrieval succeeded.

## Objective
Provide a directly viewable toast/notification showcase reproducing the reference families and configurable behavior, preferably powered by a suitable standalone notification library rather than Bootstrap Toast.

## Scope
### In scope
- Animation and placement demonstrations, reference toast-style gallery and Notyf-style notification configurator.
- Library-backed showing, dismissal, lifetime, positioning and clearing of notifications, with appropriate adaptation to reference styling.
- Accessible announcements, keyboard interaction, reduced motion, safe message rendering, responsive layout and shared-shell coexistence.
### Out of scope / Non-goals
- Backend notifications, push services, polling, real business events, persistence or notification inbox.
- Introducing Bootstrap solely to reproduce these toast examples when a suitable independent library can meet the requirements.
- Additional notification workflows, modal confirmation flows or unrelated component fixes.
- BA, technical design, library installation, application source or tests during task-create.

## Requirements
1. Deliver a standalone page following repository component-page conventions with all four verified reference families. Use implementation-neutral headings where Bootstrap is not used; avoid falsely labeling library-backed behavior as Bootstrap.
2. During analysis, evaluate a suitable standalone notification library. Notyf is a relevant candidate because the supplied reference includes it; the user has not mandated a particular library. Prefer a maintained, appropriately licensed option compatible with the existing static project and required interactions. Record the selection, version, license, necessary adapters and any unsupported capabilities. Do not silently substitute bespoke lifecycle code or Bootstrap if the library preference cannot be met; explain the limitation and resolve any material scope change.
3. Avoid unnecessary overlapping toast libraries. Reuse existing authorized assets such as Animate.css or Font Awesome where suitable. If new assets are needed later, pin versions and keep the example usable through the project's local asset conventions; do not rely on an unexplained latest CDN URL.
4. Animation demo must preserve the seven observed color choices (primary, secondary, success, danger, warning, info, dark), verified animation inventory, initial choices and Show Toast action. Selected animation must affect the displayed toast consistently; distinguish entrance animation from indefinite attention effects and inspect the actual reference behavior before deciding lifecycle.
5. Placement demo must preserve seven color choices and all nine observed positions: top/middle/bottom crossed with left/center/right. Verify default selection, margins, stacking and viewport anchoring. Library limitations for middle positions must be investigated and documented rather than silently dropping examples.
6. Reproduce the complete rendered style-gallery inventory and its light/dark presentation, headers, icons, timestamps, body messages and close controls where present. Verify which gallery items are persistent examples versus auto-dismissed notifications and whether dismissed examples can be revisited through page reload or another reference mechanism.
7. The configurable notification demo must support message entry, dismissible and ripple options, success/error/info/warning types, duration in milliseconds, six top/bottom horizontal positions, Show Notification and Clear Notifications. Match verified defaults and outcomes, including repeated notifications and clear behavior; do not infer unsupported behavior from markup alone.
8. Define and visibly handle blank messages and invalid durations during BA/design. Investigate the library's meaning for zero, negative, nonnumeric and excessive values before selecting allowed input behavior; do not let invalid input crash the page, create accidental permanent floods or silently yield unpredictable timers. No arbitrary business limits are established by this brief.
9. Respect per-notification configuration when multiple notifications are created. Define stacking/queue policy based on reference/library capabilities. Repeated triggering, manual dismissal, clear-all, expiry and animation interruption must not leave stale timers, invisible clickable overlays, orphan DOM or notifications in the wrong location. Clear must affect the intended notification scope without removing unrelated page content.
10. Provide accessible names for form fields and close controls, meaningful status/alert announcements with suitable urgency and atomicity, visible keyboard focus and keyboard dismissal where appropriate. Notifications must not steal focus on arrival or trap focus. If a focused notification disappears, restore focus predictably. Avoid making every gallery example a simultaneous assertive announcement.
11. Make time-limited messages usable for keyboard and pointer users. Investigate pause/resume on hover/focus or an equivalent accessible persistence/dismissal mechanism; report any improvement over the reference. Persistent notifications must offer a reachable dismissal path. Respect reduced-motion preferences for animation and ripple without suppressing notification content.
12. Render user-entered messages as plain text by default. Markup-like input must not execute scripts, inject HTML or create unintended destinations. Demo actions must not send message content to a server, initiate real workflows or navigate externally.
13. Keep controls and toasts usable on narrow mobile and short landscape screens, during resize, with long/multiline/unbroken messages and text enlargement. Prevent unintended horizontal page overflow, clipped close controls and unreachable stacked messages. Account for viewport edges and the existing header/sidebar layers.
14. Toasts and the mobile sidebar drawer must coexist without selector, focus, Escape, overlay or scroll-lock conflicts. Define positioning/stacking behavior around the drawer during design; notifications must not accidentally become modal dialogs or lock page scrolling.
15. Use local Font Awesome rather than SVG icons where icons are needed. Preserve existing application styles, unrelated changes and previous component behavior.
16. Compare reference render and motion before finalizing spacing, colors, shadows, shapes, icon substitutions, timing and form arrangement. Report library-driven differences, accessibility adaptations, actual tests and remaining limitations.

## Constraints
- Ordinary HTML/CSS/JavaScript compatible with this static repository; no backend or framework migration.
- A standalone notification library is the user's stated preference; feasibility must be investigated before implementation decisions.
- Original task brief remains immutable. Later workflow skills own BA, technical plan, application source/tests, vendored assets and rollback metadata.
- Retrieved markup establishes an initial control inventory only; it does not establish lifecycle, stacking, duration validation, animation mapping or complete style-gallery count.
- No real notification service, external destination or data transmission is authorized.

## Acceptance Criteria
1. A directly viewable page contains all verified animation, placement, style-gallery and configurable-notification examples.
2. A suitable standalone library powers notification lifecycle where feasible; selection/version/license and adaptations are recorded, with no unnecessary Bootstrap Toast dependency.
3. Seven colors and the verified animation inventory work in the animation demo; all nine placement choices work and remain reachable.
4. Gallery content/treatments and dismissal/persistence match the verified reference, with deviations reported.
5. Message/type/dismissible/ripple/duration/position settings take effect correctly; repeated creation and Clear Notifications work predictably.
6. Blank/invalid input follows documented behavior without runtime failure, unsafe timers or unintended notification floods; user message text cannot execute HTML/scripts.
7. Announcements, labels, keyboard focus/dismissal, timing accessibility and reduced motion are usable without focus theft or trapping.
8. Expiry, dismissal, clear-all, rapid actions and resize clean up correctly; narrow/short screens, long messages and text enlargement avoid inaccessible clipping or page overflow.
9. Local assets load without functional errors; no message transmission or real operation occurs; shared sidebar behavior remains intact.
10. Reference comparison, actual tests, library limitations and unverified behavior are reported accurately.

## Validation Expectations
- Inspect live desktop/mobile reference to confirm complete gallery/animation inventory, defaults, toast content, timing, close behavior, ripple, positions, repeated-show and clear semantics.
- Check official library documentation and installed/vendored assets for required features, version/license, duration semantics, accessibility and integration limits.
- Exercise color/animation/position controls, all notification settings, repeated creation, expiration, manual close and clear during animation; check independent configuration and cleanup.
- Test empty/whitespace messages, markup-like strings, long/multiline/unbroken text and invalid duration inputs without executing injected content or transmitting data.
- Test labels, live announcements, keyboard focus and close paths, hover/focus timing behavior and reduced motion. Verify passive arrival does not move focus.
- Check mobile/desktop/short landscape, all nine positions, resize, text enlargement, stacking reachability and drawer coexistence. Compare screenshots and animation behavior.
- Verify HTTP/file viewing, resource/runtime failures and relevant regressions for shared assets changed. No application tests or browser interaction validation were performed during task-create.

## Assumptions and Open Questions
- Assume root-level toasts.html, English demo content and the existing light shell, with the reference dark gallery treatment where verified.
- Q-001: Which standalone library best supports the reference requirements? Notyf is a candidate, not a selected dependency; decide through technical investigation.
- Q-002: Confirm full gallery inventory, animation options and any library-specific compromises for nine positions and reference animations.
- Q-003: Determine blank-message and duration-validation behavior in BA, informed by reference/library behavior; no invented numerical policy is approved yet.
- Q-004: Confirm notification lifetime, stacking, clear scope and accessible pause/dismissal behavior before implementation.
- Q-005: Confirm local vendor/version/license approach, plain-text rendering and reduced-motion support.
- No blocking clarification is needed to create this brief. Material library/scope incompatibility or unresolved business input behavior must be surfaced before dependent implementation.