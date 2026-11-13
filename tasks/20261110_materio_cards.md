# Task: Build a reusable Card variants showcase inspired by Materio
**Task ID:** 20261110_materio_cards

## Context
The user requests Card components using six Materio references:
- https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/cards-basic.html
- https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/cards-advance.html
- https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/cards-statistics.html
- https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/cards-analytics.html
- https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/cards-gamifications.html
- https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/cards-actions.html

The user explicitly prioritizes different card variants rather than the template's dashboard content. Treat these pages as references for one coherent card-component family, not six dashboard applications or a requirement to duplicate every content instance.
The repository contains standalone component showcases, shared layout/assets, local Font Awesome and browser tests. Preserve unrelated shared-layout edits and earlier tasks.
Direct HTTP retrieval shows basic content/media/color/layout/navigation variants; advanced list/summary/card-header compositions; compact statistics and analytics compositions; promotional/gamification cards; and action cards with collapse, refresh, expand, remove, header elements and draggable examples. These are initial markup observations. Rendered variant inventory and action behavior require investigation. The web reader could not access the references; direct HTTP retrieval succeeded.

## Objective
Deliver reusable card styles/behaviors and a directly viewable showcase demonstrating the distinct structural, visual and interactive variants from the six references, using concise neutral demo content instead of recreating dashboard data, domain workflows or commercial illustrations.

## Scope
### In scope
- A deduplicated inventory of meaningful card variants from all six reference families.
- Card anatomy, media placement, alignment, color/border treatments, grouping and responsive composition.
- Representative advanced/statistic/analytic/promotional structures with simple illustrative data/media.
- Card-header controls and verified card actions, including draggable ordering where present, with accessible alternatives.
- Safe demo interactions, accessibility, responsive behavior and shared-shell coexistence.
### Out of scope / Non-goals
- Reproducing all template copy, people, avatars, transactions, products, financial metrics, course/shipment datasets or exact chart series.
- Six full dashboard pages, backend APIs, authentication, real purchases/payments, reports, business workflows or persistence.
- Copying proprietary illustrations/photos or adding a charting dependency solely to duplicate dashboard content.
- Global shell redesign, unrelated component fixes or automatic conversion of every earlier component card.
- BA, technical design, source/tests, assets or dependency installation during task-create.

## Requirements
1. Deliver a standalone card showcase following repository conventions. Organize examples so the distinct variants and their intended reusable styling/behavior are easy to inspect. A consolidated page is the default assumption; multiple pages are not required simply because six references were supplied.
2. During analysis, build a deduplicated variant inventory mapping each selected structural/behavioral pattern to its reference family and showcase example. Repeated business content using the same card structure need not become separate examples. Do not silently omit a distinct card treatment or action; document the inclusion/deduplication boundaries in BA.
3. Provide consistent card anatomy: outer surface, optional header/title/subtitle, body, media area, optional footer/actions and separators. Variants must work with caller-supplied content and differing text lengths without relying on one exact demo title, dataset or image dimension.
4. Basic family must cover verified patterns for text/title/subtitle/links, header/footer, quote, start/center/end text alignment, image top/bottom/overlay, horizontal media left/right, navigation in card headers, and grouped/grid/equal-height layouts where present. Confirm exact structural distinctions in the rendered reference before finalizing the inventory.
5. Color treatments must cover the verified solid, tinted/label and outline card variants, including observed primary, secondary, success, danger, warning and info schemes. Preserve readable text/controls and explain accessibility-driven palette changes. Verify other distinct border/shadow/background treatments rather than inventing variants.
6. Advanced family must demonstrate reusable structures such as list/row content with leading avatar/icon, trailing value/status/action, header overflow actions and multi-section summary/progress arrangements where verified. Use neutral labels and illustrative values; do not implement the referenced payment, upgrade, scheduling or personnel workflows.
7. Statistics/analytics families must demonstrate their distinct card layouts: compact metric with icon/change, multi-metric summary, metric with lightweight trend/visualization area, and card with a larger chart/legend/control region where verified. Emphasize card composition, spacing and responsive behavior. Simple accessible illustrative visuals or existing suitable assets may stand in for real chart data; exact charts and domain calculations are not required.
8. Gamification family must demonstrate distinct text/action/media arrangements for congratulations, achievement or upgrade/promotion-style cards, including contrasting surfaces where verified. Generic neutral content and lawful placeholder/media treatments are acceptable; commercial character illustrations and actual upgrades are not required.
9. Card actions must cover verified collapse/expand-body, refresh/loading feedback, expanded/full-view presentation, remove/dismiss and draggable/reorder examples. Investigate the reference behavior before choosing transitions, affected region, restoration and loading/error/demo completion semantics. Do not present an inert action icon as a working example.
10. Refresh must be a safe local demonstration without a real request, indefinite spinner or duplicate operation from rapid clicks. Collapsing must synchronize content visibility and expanded state without stranding keyboard focus. Expanded/full-view mode must have an accessible exit, appropriate focus/scroll behavior and correct restoration. Removal must move focus predictably; reloading the page may restore demo cards unless another restoration mechanism is selected during BA.
11. Draggable cards must demonstrate ordering within the intended showcase group without affecting unrelated cards. Provide a usable keyboard/non-drag alternative and communicate resulting order; persistence is out of scope. Verify touch behavior and avoid hijacking normal scrolling or button/link activation. If the reference requires a library, evaluate existing capabilities and document any dependency/adaptation before implementation.
12. Card-header element variants should represent verified flexible combinations such as buttons, icon controls, badges/status, form controls or overflow menus, while retaining aligned/wrapping title/actions. Sample menus, tabs/pills and other included controls must work locally and accessibly; no external dashboard workflow is implied.
13. Use meaningful native structure, accessible names for icon-only actions, visible focus, appropriate disclosure/current/selection/busy states and descriptions for illustrative visualizations. Static card content must not become unnecessarily focusable. Preserve heading hierarchy and text alternatives for meaningful media; decorative media/icons must not add redundant announcements.
14. Non-action card links/buttons must have harmless, explicit demo outcomes rather than invented external navigation, real payments, backend mutation or misleading data loading. Do not inject arbitrary HTML from user/configuration content; no real data operation or persistence is authorized.
15. Support narrow mobile, short landscape, desktop, resize, text enlargement, long titles/body/list items and differing card/media sizes. Prevent unintended page overflow, clipped controls, inaccessible overlay text and broken equal-height/group borders. Header actions must remain reachable; horizontal/complex arrangements may stack with documented behavior.
16. Reuse existing suitable shared assets and local Font Awesome instead of SVG icons. Avoid unnecessary dependencies and preserve shared sidebar/focus/Escape/scroll state; full-view and header overlays must not compete with the shell drawer. Respect reduced-motion preferences for collapse/loading/reorder/full-view effects where relevant.
17. Keep reusable card styles/behaviors focused on the card family and isolated from unrelated pages. Technical architecture, naming and any integration with earlier button/tab/dropdown assets are decisions for later investigation; this brief does not require a new framework or broad refactor.
18. Compare representative rendered variants from all six references before finalizing geometry, typography, padding, radius, borders, shadows, media balance and action placement. Report intentional simplified content/charts/media and material style/behavior deviations, rather than claiming six dashboards were replicated.

## Constraints
- Ordinary HTML/CSS/JavaScript compatible with the existing static project; no backend/framework migration.
- The user's priority is variant coverage and reusable composition, not template content fidelity. Deduplicate repeated content instances without collapsing distinct layout/action variants.
- Original task brief remains immutable; later workflow skills own BA, plans, source/tests, assets/dependencies and rollback metadata.
- Retrieved markup observations do not establish complete inventory, runtime interactions, responsive breakpoints or accessibility behavior.
- No proprietary asset copying, real domain workflow, global redesign or persistence is implied.

## Acceptance Criteria
1. A directly viewable showcase demonstrates a documented deduplicated variant inventory spanning all six reference families, with clear example labels and reference mappings.
2. Basic card anatomy, media positions, text alignment, navigation, colors, outlines/tints and grouped/grid layouts reproduce the selected structural treatments with reusable styling.
3. Advanced/list/summary, statistic/analytic and promotion/gamification compositions demonstrate their distinct layout patterns using neutral content and clearly illustrative visuals rather than real dashboard workflows.
4. Verified collapse, refresh/loading, full-view, removal and reorder actions work safely and predictably, including repeated activation, restoration and accessible non-drag operation.
5. Header controls, tabs/menus and sample actions are functional local demonstrations with correct names/state/focus, without unintended navigation, requests or real mutation.
6. Native semantics, focus visibility, media/visualization alternatives, disclosure/busy/current state and focus restoration remain correct across card variants.
7. Mobile/short landscape/desktop, resize, text enlargement and long content preserve readable cards, reachable controls, valid grouping and no unintended page overflow; reduced motion is respected.
8. Resources load without functional errors, new styles remain scoped, and shared drawer/focus/Escape/scroll behavior remains intact.
9. Actual reference comparison, tests, simplified content/media/chart choices, accessibility adaptations and remaining limitations are reported accurately.

## Validation Expectations
- Inspect representative live examples across all six references at desktop/mobile widths and verify the structural inventory, deduplication and custom action behavior before implementation.
- Compare anatomy/media/grouping, visual color treatments, header control alignment and distinct advanced/statistic/analytic/promotional layouts without requiring matching domain content.
- Exercise every implemented header/card action by pointer and keyboard: collapse state/focus, refresh completion/rapid clicks, full-view open/exit/resize/scroll restoration, remove focus and reorder via drag plus non-drag alternative.
- Test included tabs, menus, disabled controls and harmless sample actions; confirm no real request, navigation, persistence or business operation.
- Check heading/action semantics, media text alternatives, illustrative-data descriptions, status announcements, keyboard focus and reduced motion.
- Check mobile/short landscape/desktop, long text, differing media, text enlargement, resize, grouping/equal heights and drawer coexistence; verify drag/touch interactions where implemented.
- Check local HTTP/file viewing, runtime/resource failures and relevant regressions for any shared assets changed. Compare representative screenshots from every family and report deviations.
- No application tests or browser interaction validation were performed during task-create.

## Assumptions and Open Questions
- Assume root-level cards.html, English neutral demo content and the existing light shell. The filename/page organization is not explicitly specified by the user.
- Q-001: Establish the deduplicated variant inventory across the six references in BA; do not use every reference card instance as an automatic requirement.
- Q-002: Confirm exact card-action lifecycle, full-view semantics, draggable grouping and accessible reorder behavior during investigation.
- Q-003: Decide the minimum illustrative visualization/media needed to demonstrate statistic/analytic/promotional structures, using lawful local placeholders and no unnecessary chart dependency.
- Q-004: Determine suitable reuse of existing component assets and any justified dependency for drag/positioning without broad refactoring.
- Q-005: Confirm responsive adaptations, neutral demo outcomes and overlay/drawer coexistence policy before implementation.
- One coherent card-component family is intended. If later requirements add independent dashboard applications or real domain workflows, create separate tasks rather than silently enlarging this brief.