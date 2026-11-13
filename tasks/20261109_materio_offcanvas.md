# Task: Replicate Materio Offcanvas showcase
**Task ID:** 20261109_materio_offcanvas

## Context
The user requests Offcanvas based on https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/ui-offcanvas.html.
The repository contains standalone static component pages, shared layout/button styles, local Font Awesome and browser tests. Preserve existing component artifacts and unrelated shared-layout edits.
Reference HTML retrieved during task creation identifies nine examples: four placements (Start, End, Top, Bottom), three backdrop/scroll combinations, Responsive offcanvas (offcanvas-xl), and Dark offcanvas. This is a markup inventory; rendered behavior, dimensions, animation and breakpoint transitions still require investigation. The web reader could not access the page; direct HTTP retrieval succeeded.

## Objective
Provide a directly viewable Offcanvas showcase that reproduces the reference families, appearance and interactions within the existing admin template, including accessible opening/closing, responsive behavior and correct scroll/backdrop handling.

## Scope
### In scope
- All nine observed examples, grouped as Placements, Backdrop, Responsive offcanvas and Dark offcanvas.
- Triggers, headers, close controls, sample body content and actions shown in the verified reference.
- Sliding transitions, backdrop behavior, body scrolling, keyboard/focus interaction and responsive layout.
- Coexistence with the existing mobile sidebar drawer and shared page shell.
### Out of scope / Non-goals
- Replacing navigation throughout the application or changing earlier component pages.
- Real business actions, authentication, purchases, backend/API integration or persistence.
- Adding unrelated offcanvas variants not present in the reference.
- BA, technical design, implementation or tests during task-create.

## Requirements
1. Deliver a standalone Offcanvas page following repository conventions, with all verified examples rather than a single generic drawer.
2. Provide Start, End, Top and Bottom placements with corresponding entry/exit directions. Verify sizes, alignment, padding, typography, content and actions against the rendered reference.
3. Preserve the three observed combinations: body scrolling enabled without backdrop; default backdrop with body scroll locked; body scrolling enabled together with backdrop. Verify actual background interaction and dismissal semantics before finalizing behavior.
4. Provide the responsive offcanvas-xl example and its informational text/toggle states. Verify the actual rendered breakpoint and above/below-breakpoint presentation; do not infer complete behavior from class names alone. Resizing an open panel must leave focus, backdrop, scroll lock and visibility consistent.
5. Provide the dark offcanvas example with readable text, controls and focus indicators; it does not imply a new global theme switch.
6. Match reference open/close triggers, close icons, Cancel controls, backdrop-click and Escape behavior after live verification. Any other sample action must remain harmless and must not navigate externally, send data or mutate application state.
7. Use smooth slide-in/slide-out transitions and backdrop appearance consistent with the reference; respect prefers-reduced-motion. Rapid toggling, opening another example and closing during animation must not leave stale overlays, invisible focus traps or scroll locks.
8. Controls require accessible names and unique target/title associations. Hidden panels must not receive keyboard focus. For modal configurations, provide appropriate dialog semantics, focus containment and background isolation; for nonmodal scrolling examples, preserve intended background access. Restore focus appropriately on dismissal and verify Tab/Shift+Tab/Escape behavior.
9. Panel content must remain reachable on narrow and short screens through suitable sizing and internal scrolling, without unintended horizontal page overflow or clipped close controls. Verify long content and responsive/orientation changes.
10. New offcanvas behavior must coexist with the existing mobile sidebar drawer: avoid competing focus traps, double Escape handling, duplicate backdrops and incorrect restoration of shared body scroll state. Define the intended overlay coexistence policy during analysis/design rather than assuming both controllers are compatible.
11. Reuse existing styles/assets where appropriate and local Font Awesome for icons; do not use SVG icons or introduce unnecessary dependencies. Preserve unrelated user changes.
12. Report material visual or interaction deviations, reference substitutions and verification limits explicitly.

## Constraints
- Ordinary HTML/CSS/JavaScript suitable for this static project; no backend or framework migration.
- Original brief remains immutable; subsequent skills own BA, plan, source and rollback artifacts.
- Reference markup observations are facts; rendered thresholds, geometry, animation, modal semantics and action outcomes remain to be verified.
- Existing modal/sidebar code may be relevant but must be investigated before reuse or modification.

## Acceptance Criteria
1. A directly viewable page includes all nine verified examples and their reference groupings.
2. Each placement opens from the correct edge with matching content/controls and usable close behavior.
3. All three body-scroll/backdrop combinations behave as verified, with correct state restoration after close.
4. Responsive offcanvas switches correctly at the verified threshold, including resize while open; dark styling remains readable.
5. Pointer and keyboard users can open, operate and close panels; names, target associations, hidden-state exclusion, modal focus behavior and focus restoration are correct.
6. Transitions are smooth, reduced motion is respected, and repeated/rapid interactions leave no stale overlay or scroll lock.
7. Narrow/short viewports and long panel content remain usable without unintended horizontal overflow.
8. Demo actions are harmless; local resources load and no runtime errors affect behavior.
9. Offcanvas and the existing shell drawer coexist without focus, Escape, backdrop or body-scroll conflicts.
10. Actual reference comparison, tests, deviations and remaining limitations are reported without claiming unperformed checks.

## Validation Expectations
- Inspect live desktop/mobile reference, confirming nine-example inventory, responsive threshold, placements, content/actions, transition timing and dismissal behavior.
- Exercise every trigger and dismissal route, scrolling combinations, keyboard/focus cycle and nonmodal background access.
- Test rapid open/close/reopen, switching examples, resizing across the responsive threshold, orientation changes, reduced motion and long content.
- Check narrow mobile, short landscape and desktop viewport geometry, backdrop coverage and panel-content reachability.
- Test shared mobile drawer coexistence and restoration of prior scroll state; run relevant regression checks for any shared code changed.
- Check resource/runtime failures and harmless action behavior. No application tests or browser interaction validation were performed during task-create.

## Assumptions and Open Questions
- Assume root-level offcanvas.html, English example content and the existing light shell, with dark styling limited to its example.
- Assume sample actions are demonstrations, not real workflows; verify their inventory and provide safe observable outcomes as necessary.
- Confirm rendered xl threshold, default backdrop/Escape behavior, focus/scroll semantics and responsive inline presentation during analysis.
- Determine whether only one offcanvas/sidebar overlay may be active at once during technical design while preserving reference behavior and accessibility.
- No additional business requirements are presently blocking creation of this brief.