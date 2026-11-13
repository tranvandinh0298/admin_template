# Task: Replicate Materio dropdowns with a sidebar navigation variant
**Task ID:** 20261109_materio_dropdowns

## Context
The user requests Dropdowns based on:
https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/ui-dropdowns.html

The user additionally requests a variant for a sidebar dropdown menu. Treat the showcase and sidebar adaptation as one coherent dropdown capability; do not expand this into rebuilding the entire navigation system.

The repository contains standalone static component pages, shared layout/button assets, local Font Awesome and Node/Playwright tests. No Dropdowns page/task was found during discovery. Existing modified shared layout JavaScript/single-column HTML and untracked earlier-task artifacts must be preserved.

Retrieved reference HTML identifies Basic, Label, Outline and Split color variants; hidden-arrow, hover, icon-bearing and icon-only triggers; alignment, sizes, directions/centered directions; header/divider/text/form menu content; offset/reference positioning; and four auto-close modes. This is markup evidence, not verified rendering or interaction.

## Objective
Provide a directly viewable Dropdowns showcase that reproduces the reference's relevant styles and interactions, plus a reusable sidebar-style dropdown navigation example integrated safely with the existing page shell.

## Scope
### In scope
- Reference dropdown trigger treatments, menus, layout variations, positioning and close behavior.
- One sidebar dropdown navigation variant with expandable child links.
- Keyboard/pointer/touch usability, focus management, responsive positioning and authorized local icon/assets.
- Supporting resources and focused validation during implementation.

### Out of scope / Non-goals
- Real authentication, form submission, account creation, data mutation or backend integrations from demo menu content.
- Rewriting navigation on all existing pages, permission-based menu generation or persistent navigation preferences.
- Unrequested multilevel recursive navigation, routing framework, notification service or unrelated components.
- BA, technical design, application code or tests during task-create.

## Requirements
1. Deliver one standalone HTML page clearly organizing all observed reference dropdown families and the sidebar variant.
2. Basic, Label, Outline and Split examples must cover the reference's six observed colors: Primary, Secondary, Success, Danger, Warning and Info. Inspect rendered inventory before finalizing. Split examples must distinguish their main action from the separate menu toggle; demonstration actions must be harmless.
3. Include hidden-arrow, hover, icon-bearing and icon-only triggers. Hover behavior must also have an operable keyboard/touch path; do not require hover as the sole activation mechanism. Icon-only controls need accessible names.
4. Include end alignment and responsive start/end alignment examples, extra-large/large/small/extra-small sizes, dropdown/dropup/dropend/dropstart, and centered dropdown/dropup variants as verified against the reference.
5. Include menu headers, dividers, free-form text and a sample form with email/password/remember-me/sign-in controls. Form content is illustrative: it must not transmit credentials or perform real authentication. Preserve native input/label semantics and permit normal editing without unrequested dismissal.
6. Include offset/reference positioning examples and default, outside-click, inside-click and manual auto-close modes. Inspect live reference behavior to define exactly which pointer/keyboard actions open/close each mode, including Escape and form interaction; do not infer all semantics from labels alone.
7. Opening, closing, item activation and focus return must be consistent and accessible. Triggers expose expanded state and control association; closed menus do not leave hidden items tabbable. Plain navigation lists and menus containing form/text content need appropriate semantics rather than indiscriminately assigning application-menu roles.
8. Sidebar variant must show a labeled parent trigger and child navigation links in the sidebar style. Explicit working assumption: children expand/collapse inline beneath the parent, one submenu level, without floating over page content. Keep the parent toggle distinguishable from a navigation destination. Confirm/refine this assumption in BA before dependent design if user intent differs.
9. Sidebar submenu state must agree with its indicator and accessibility attributes. Child links must be reachable only while expanded and point to existing local examples or safe clearly identified demo destinations. Its controls must coexist with the existing mobile drawer, including focus, Escape and viewport changes, without breaking navigation.
10. Menus must remain usable near viewport edges and in narrow/short screens. Position/flip or constrain menus as appropriate, allow scrolling long menus, and avoid unintended page overflow, clipped content or collisions with unrelated examples. Repeated/rapid activation and resize must leave consistent state. Respect reduced-motion preferences where animation is included.
11. Inspect reference render before finalizing surfaces, typography, colors, icon placement, spacing, menu dimensions and positional offsets. Report necessary differences, especially accessible behavior and sidebar adaptation not present on the supplied component page.
12. Preserve unrelated repository work; reuse existing patterns and authorized assets. Use local Font Awesome rather than SVG. Avoid unnecessary dependencies, but do not mandate a particular positioning library before technical investigation.

## Constraints
- Deliver ordinary HTML/CSS/JavaScript suitable for the current static project; no backend or framework-only application requirement.
- Never treat sample menu actions or form fields as authorization to send data, navigate externally or mutate user data.
- Keep original task brief immutable; later stages own BA, technical plan and implementation artifacts separately.
- Recreate commercial theme styling using authorized resources rather than copying proprietary bundles without permission.

## Acceptance Criteria
1. A directly viewable page contains the trigger families, variation groups and sidebar example described in Requirements.
2. Basic/Label/Outline/Split color coverage matches the verified reference; split controls have separate, harmless main-action/menu-toggle behavior.
3. Standard, hover and icon-only examples can be used by pointer, keyboard and a non-hover interaction path, with visible focus and accessible names.
4. Alignment, size, direction, centered direction and offset/reference examples display their intended placements; edge handling keeps content usable.
5. Menu headers/dividers/text/form examples render correctly. Form fields are labeled/editable, and no credentials or real authentication requests are transmitted.
6. All four auto-close modes match verified reference semantics or explicitly reported accessibility improvements, including supported Escape handling and focus return.
7. Closed menus/submenus are excluded from keyboard navigation; expanded state and target associations remain accurate throughout interactions.
8. Sidebar parent toggles its inline child list, indicator and state consistently; only expanded children are reachable and local navigation links work. Mobile drawer controls, focus and viewport transitions remain functional.
9. Long menus, narrow/landscape viewports, rapid activation and resize do not leave clipped/unreachable menus, stale states or unintended horizontal scrolling.
10. Reference comparison and actual validation results are reported with limits. Required local resources load without runtime errors affecting functionality, and relevant existing behavior remains intact.

## Validation Expectations
- Inspect rendered reference and exercise every trigger family, alignment/direction, positioning option and auto-close mode, including form editing and Escape.
- Validate parent/menu/item keyboard paths, focus visibility/return, hidden-content exclusion and hover alternatives on touch/keyboard.
- Exercise sidebar expansion, child-link navigation and coexistence with mobile drawer at its breakpoint, including resize while open.
- Check viewport-edge collision handling, long content, short heights, reduced motion, rapid activation and resource/runtime errors.
- Confirm demo form/actions do not send data; compare desktop/mobile visuals and run relevant regressions if shared assets change. No browser validation or application tests were run during task-create.

## Assumptions and Open Questions
- Assume root-level dropdowns.html, matching the standalone page convention; filename/location were not specified.
- Assume default light appearance and English demo wording, with original equivalent icons/prose as needed.
- Sidebar interpretation is a one-level inline disclosure navigation list in the new page's sidebar, not a flyout and not a rewrite of every existing sidebar. The user has not specified inline versus flyout, nesting depth or exclusivity between parent groups; record this as an assumption for BA.
- Exact reference keyboard/auto-close/hover/form semantics and edge behavior require task-analyze verification before design decisions depend on them.
- The sidebar variant and showcase form one coherent capability. If later requirements demand a separate global navigation redesign, scope that independently rather than silently enlarging this task.
