# Task: Replicate Materio Tabs & Pills showcase
**Task ID:** 20261110_materio_tabs_pills

## Context
The user requests Tabs & Pills based on https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/ui-tabs-pills.html.
The repository contains standalone static component pages, shared layout resources, local Font Awesome and browser tests. Preserve unrelated shared-layout edits and previous component work.
Direct HTTP retrieval identifies eight tablists: Tabs (Basic, Filled Tabs, Vertical, Bottom tabs) and Pills (Basic, Filled Pills, Vertical, Within cards). The first seven contain Home/Profile/Messages; Within cards contains Active/Link/Disabled with two content panels. Initial inventory is 24 tab controls including one disabled control, and 23 content panels, subject to rendered verification. Filled variants include icons and additional label content that require closer inspection. The web reader could not access the URL; direct HTTP retrieval succeeded. These are markup observations, not verified rendered behavior.

## Objective
Provide a directly viewable Tabs & Pills showcase reproducing the reference variants, panel content, selected states, layouts and accessible switching behavior within the existing static admin template.

## Scope
### In scope
- All eight observed examples in the Tabs and Pills groups.
- Basic, filled, vertical and bottom tab arrangements; basic, filled, vertical and within-card pills.
- Reference icons, badges or other label details where verified; panel content and safe sample actions.
- Independent selection, disabled behavior, keyboard/focus interaction, responsive layout and shared-shell coexistence.
### Out of scope / Non-goals
- Application routing, backend loading, real messaging/profile actions, authentication or persistence.
- Adding dynamic tab creation/removal, deep links, remote panel fetching or unsupported variants.
- Global navigation redesign or fixes to unrelated component tasks.
- BA, technical plan, source or tests during task-create.

## Requirements
1. Deliver a standalone page following existing component-page conventions, with Tabs and Pills groupings and all verified examples.
2. Confirm the inventory of eight tablists, 24 controls and 23 panels before finalizing; inspect exact labels, icons, badges, initial selections and content rather than replacing all panels with one generic placeholder.
3. Tabs must include Basic, Filled Tabs, Vertical and Bottom tabs. Match the reference tab positions, width distribution, active indicator, shadows, borders, panel surface, spacing and typography. Verify whether any transition is present before reproducing it.
4. Pills must include Basic, Filled Pills, Vertical and Within cards. Match pill shape/selection treatment, horizontal or vertical arrangement, filled distribution and placement in the card header.
5. Every enabled control must select its associated panel. Exactly one enabled tab and one panel per example must be selected/visible at a time, with accurate visual and accessibility states. Switching one example must not affect the other seven.
6. Within cards must preserve Active and Link content, their verified headings and sample action inventory, plus an unavailable Disabled control. Disabled must not activate, change selection or navigate, and must be conveyed semantically and visually.
7. Use accessible tablist/tab/tabpanel relationships, unique IDs, accessible group names, selected state, panel labels and appropriate orientation. Hidden panels and their descendants must not receive keyboard focus. Avoid ambiguous or duplicated target associations.
8. Provide predictable keyboard operation: Tab enters/leaves the widget through an appropriate selected/focusable tab; arrow keys move among enabled tabs according to orientation; Home/End reach first/last enabled tab. Establish automatic versus manual activation during analysis and keep it consistent; if manual, support Enter/Space activation. Skip disabled controls, preserve visible focus and keep the focused tab reachable when the strip scrolls or wraps.
9. Panels containing only text must remain reachable for keyboard reading where appropriate. Native interactive panel content must retain normal behavior without event handlers swallowing unrelated keys. Repeated selection and rapid switching must not produce stale classes, conflicting aria-selected states or multiple visible panels.
10. Sample links/actions must remain harmless: no invented external destinations, real profile/message operation, request or data mutation. Inspect reference actions and document the local demo outcome; switching itself must not navigate the page or unexpectedly move focus into panel content.
11. Preserve usable tabs and readable panels at narrow mobile and short landscape widths, during resize, with long labels/content and text enlargement. Avoid unintended horizontal page scrolling, clipped focus indicators and unreachable controls. If vertical variants adapt orientation on small screens, synchronize keyboard semantics and document the change.
12. Respect prefers-reduced-motion for any implemented panel/indicator animation. Do not add unrelated animation or loading behavior absent from the reference.
13. Reuse suitable shared shell/assets and local Font Awesome instead of SVG or unapproved reference icon fonts. Avoid unnecessary dependencies and preserve sidebar drawer keyboard/focus behavior and unrelated work.
14. Compare rendered layouts, proportions, colors, icons, shadows, panel content and transitions against the live reference. Report substitutions, accessibility improvements, deviations and actual validation limits.

## Constraints
- Ordinary HTML/CSS/JavaScript suitable for the static repository, without a backend or framework migration.
- The original brief remains immutable; later skills own BA, technical plan, application code/tests and rollback metadata.
- Markup inventory does not establish rendered responsive thresholds, animation timing or keyboard behavior. Verify before making dependent design choices.
- The user has not requested real data, persistent active tabs or URL state.

## Acceptance Criteria
1. A directly viewable page contains all eight verified examples in the Tabs/Pills groups and the complete enabled/disabled control and panel inventory.
2. Reference arrangements, filled labels/icons, active styling, card presentation and panel content are reproduced with material deviations reported.
3. Each example maintains one selected enabled tab and one visible associated panel; examples remain independent through repeated and rapid switching.
4. Disabled remains inactive for pointer/keyboard and accurately communicates unavailability.
5. Tab semantics, names, unique relationships, orientation, hidden-state exclusion, roving focus and selected state are correct; arrows/Home/End and activation follow the documented keyboard model.
6. Switching does not navigate or trigger real operations; sample actions have safe observable demo behavior and no unexpected requests.
7. Mobile, short landscape, resize, long labels/content and text enlargement retain reachable controls and readable panels without unintended page overflow; reduced motion is respected when animation exists.
8. Local resources load without functional errors and shared shell/sidebar interactions remain operational.
9. Reference comparison, actual tests, deviations, risks and unverified behavior are reported accurately.

## Validation Expectations
- Inspect live reference at desktop/mobile widths to verify eight examples, initial states, filled icons/badges, card actions, panel content, geometry and any transitions.
- Exercise every enabled control by pointer and keyboard; check all disabled paths, independent state, repeated selection, rapid switching and panel visibility.
- Test selected/tabindex/controls/labelledby/orientation relationships, Tab/Shift+Tab, arrows, Home/End and the chosen activation model; ensure hidden descendants cannot receive focus.
- Test long labels/content, narrow mobile, short landscape, desktop, resize, text enlargement and reduced motion. Confirm focused tabs remain visible and panels remain readable.
- Compare screenshots, verify sample action safety, no unexpected navigation/data requests, HTTP/file viewing, runtime/resource errors and sidebar coexistence. Run relevant regressions if shared assets change.
- No application tests or browser interaction validation were performed during task-create.

## Assumptions and Open Questions
- Assume root-level tabs-pills.html, English demo content and the existing light shell.
- Assume local synchronous panel switching, no persistence and no URL/deep-link state.
- Q-001: Confirm exact filled-label icon/badge inventory, panel content, card actions and initial selections during analysis.
- Q-002: Verify the reference keyboard/activation model and any transitions; document accessibility improvements rather than silently copying deficiencies.
- Q-003: Confirm responsive layout/orientation behavior and the eight/24/23 inventory before implementation.
- Q-004: Determine safe local outcomes for any reference card links; no real destination is implied.
- No blocking business clarification is needed to create this brief; later ambiguous business behavior must be resolved before dependent implementation.