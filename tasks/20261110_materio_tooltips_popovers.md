# Task: Replicate Materio Tooltips & Popovers showcase
**Task ID:** 20261110_materio_tooltips_popovers

## Context
The user requests Tooltips & Popovers based on https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/ui-tooltips-popovers.html.
The repository contains standalone static component pages, shared shell/button styles, local Font Awesome and Popper assets, and browser tests. Preserve unrelated shared-layout edits and earlier component artifacts.
Direct HTTP retrieval identifies two groups: Tooltips and Popovers. Initial showcase inventory is 11 tooltip triggers (four directional and seven color variants) and 19 popover triggers (four directional, seven full-color, seven header-color and one custom-popover). Colors are primary, secondary, success, danger, warning, info and dark. Popover headings are “Popover title” with body “This is a very beautiful popover, show some love.” Direction choices differ among individual colored examples. This inventory excludes tooltips in the reference page's global shell and requires rendered verification. The web reader could not access the URL; direct HTTP retrieval succeeded.

## Objective
Provide a directly viewable showcase reproducing the reference tooltip/popover families, appearance, placement and accessible interactions within the existing static admin template.

## Scope
### In scope
- Directional and seven-color tooltip examples.
- Directional, full-color, header-color and custom popover examples.
- Safe content rendering, opening/dismissal, keyboard/focus interaction, viewport-aware positioning, responsive layout and shell coexistence.
### Out of scope / Non-goals
- Backend content loading, business actions, routing, persistence or real data mutation.
- Interactive forms, menus or confirmation workflows inside popovers unless established by the supplied reference.
- Application-wide tooltip retrofit or unrelated component fixes.
- BA, technical design, source/tests or library installation during task-create.

## Requirements
1. Deliver a standalone page following repository component-page conventions, preserving Tooltips and Popovers groupings and all verified subgroups.
2. Confirm the initial 11-tooltip/19-popover inventory and exact trigger labels, content, colors and placements in the live reference. Do not count unrelated shell controls as showcase examples or replace all variants with generic samples.
3. Tooltips must cover top, right, bottom and left placement plus seven color variants. Match text, foreground/background, padding, rounding, arrow, delay and any transition after rendered verification.
4. Popovers must cover four directions, seven fully colored surfaces, seven colored headers and the custom-popover example. Match title/body structure, arrow, borders, shadows, typography and trigger styling. Investigate what makes custom-popover distinct rather than inventing its treatment.
5. Preserve per-example preferred placement, including differences among colored and header-colored examples. Floating content must flip, shift or otherwise adapt near viewport edges while keeping the trigger association clear and arrow placement coherent.
6. Inspect reference trigger modes and lifecycle: hover/focus/click, opening another example, repeated activation, outside click, Escape, blur and pointer movement between trigger and floating content. Define intentional accessibility improvements during BA/design rather than copying inaccessible behavior silently.
7. Tooltips must work on keyboard focus as well as pointer hover and provide appropriate tooltip semantics and accessible description relationships. They must not steal or trap focus, and must not contain focusable controls. Preserve the trigger's accessible name and avoid duplicate native title tooltips where a custom tooltip is shown.
8. Popovers must have suitable semantics for their verified noninteractive title/body content, unique associations and accurate disclosure state where applicable. Pointer and keyboard users must be able to open and dismiss them without unexpected navigation or focus movement. If interactive content is discovered, investigate an appropriate focus model before adding it.
9. Floating content shown on hover/focus must remain usable under pointer movement and text enlargement. Provide an accessible dismissal route and avoid immediately reopening content dismissed with Escape until a meaningful new trigger interaction. Document hover persistence, dismissal and focus-return policy.
10. Hidden/dismissed overlays must not remain in the accessibility tree as active descriptions, intercept pointer events or leave stale expanded/description attributes. Repeated/rapid switching, scrolling, resize and dismiss-during-transition must clean up DOM, positioning listeners and timers correctly.
11. Overlay placement must stay within narrow/short viewports and respond to scrolling or resizing. Long/multiline/unbroken content must wrap or scroll accessibly without unintended page overflow, clipped text or unreachable dismissal controls. Do not mask overflow globally to hide positioning defects.
12. Respect prefers-reduced-motion for any implemented entrance/exit effects while retaining visible content and predictable dismissal. Keep colors, text and focus indicators readable across all variants; report accessibility-driven palette or sizing adjustments.
13. Render text safely by default. Markup-like tooltip/popover content must not execute scripts or inject unintended HTML; the reference does not authorize arbitrary rich HTML. Trigger actions must not send data, navigate externally or mutate application state.
14. Reuse existing appropriate assets where feasible and avoid unnecessary dependencies. The user has not selected a tooltip/popover library or explicitly extended the earlier Toast library preference to this task; investigate suitable existing positioning capabilities before choosing an implementation. If icons are needed, use local Font Awesome instead of SVG.
15. Preserve shared shell/sidebar behavior. Tooltips/popovers must not interfere with drawer focus trapping, Escape handling, overlays or scroll state. Define behavior when a trigger becomes hidden/inert or the sidebar opens; stale floating content must not remain interactive over unrelated modal UI.
16. Compare rendered reference spacing, geometry, typography, arrows, colors, shadows, custom styling and motion before finalizing. Report material substitutions, interaction improvements, actual tests and remaining limits.

## Constraints
- Ordinary HTML/CSS/JavaScript compatible with the existing static repository; no backend or framework migration.
- Original task brief remains immutable; later skills own BA, plans, source/tests, dependencies and rollback artifacts.
- Retrieved markup establishes an initial inventory only, not actual lifecycle, collision handling, custom styling or responsive behavior.
- No real operation, remote content request or arbitrary HTML injection is authorized by this showcase request.

## Acceptance Criteria
1. A directly viewable page includes every verified example across the tooltip and popover subgroups, initially 11 and 19 triggers respectively.
2. Four preferred directions, seven tooltip colors, seven full popover colors, seven header colors and custom-popover treatment reproduce the relevant reference appearance with deviations reported.
3. All examples open/dismiss according to a documented pointer/keyboard model; Escape, repeated activation and any outside/blur behavior remain consistent and do not cause immediate unwanted reopening.
4. Names, tooltip descriptions, popover associations, disclosure states and hidden-state cleanup are valid; focus is neither stolen nor trapped.
5. Collision handling, arrows, scroll/resize updates and long content remain usable on narrow mobile, short landscape and desktop screens without unintended horizontal page overflow.
6. Rapid interactions and interrupted transitions leave no stale overlay, pointer blocker, active description, timer or listener.
7. Text is safely rendered, actions are harmless, reduced motion is respected and all variants remain readable.
8. Required local resources load without functional errors and floating content coexists with the sidebar drawer and shared shell.
9. Reference comparison, actual tests, accessibility changes, risks and unverified behavior are reported accurately.

## Validation Expectations
- Inspect live reference desktop/mobile to verify trigger counts, content, per-example placements, custom styling, delay/transition and actual opening/dismissal behavior.
- Exercise every tooltip/popover by pointer and keyboard, including Escape, hover persistence, repeated activation, outside/blur behavior and independent/concurrent examples according to the chosen model.
- Check accessible names/relationships, unique IDs, state cleanup, hidden exclusions, focus preservation and avoidance of duplicate native tooltips.
- Test all viewport edges, narrow/short layouts, scrolling, resize, long/multiline/unbroken text, text enlargement and reduced motion. Check arrow alignment and actual viewport bounds.
- Test rapid switching and dismissal during animation, sidebar opening while content is visible and triggers becoming hidden/inert. Verify cleanup and no Escape/focus conflict.
- Check plain-text safety, HTTP/file viewing, runtime/resource failures and relevant regressions for shared assets changed; compare screenshots and motion.
- No application tests or browser interaction validation were performed during task-create.

## Assumptions and Open Questions
- Assume root-level tooltips-popovers.html, English reference content and the existing light shell.
- Q-001: Confirm 11/19 inventory, exact color/placement mappings and custom-popover differences during analysis.
- Q-002: Verify reference hover/focus/click and dismissal behavior, then document the accessible interaction policy including Escape and hover persistence.
- Q-003: Determine appropriate popover semantics for the verified content; no interactive content is presumed.
- Q-004: Evaluate existing positioning assets and any necessary library choice without assuming Bootstrap or a new dependency is required.
- Q-005: Establish overlay coexistence and sidebar dismissal policy, reduced-motion behavior and safe plain-text rendering.
- No blocking clarification is needed to create the brief; unresolved business behavior must be surfaced before dependent implementation.