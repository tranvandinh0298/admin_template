# Task: Replicate Materio navbar showcase
**Task ID:** 20261109_materio_navbar

## Context
The user requests Navbar based on:
https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/ui-navbar.html

The repository contains standalone static component examples, shared layout/button resources, local Font Awesome and browser tests. Existing modified shared layout files and untracked earlier-task artifacts must be preserved. No Navbar task was found in the inspected task inventory.

Retrieved reference HTML identifies an Example navbar; Supported content examples for Text, Input Group and Button; Mega dropdown examples opening on click and hover; eight Color schemes (Primary, Secondary, Success, Danger, Warning, Info, Dark, White); and a Navbar Theme example. The markup contains 15 showcase nav elements using navbar-expand-lg. Mega panels include grouped links/list content and email/password/remember-me/sign-in controls. These are markup observations; rendered breakpoints, positioning and interaction have not yet been verified.

## Objective
Provide a directly viewable Navbar showcase reproducing the reference's content, responsive arrangements, dropdown/mega-menu interactions and color/theme treatments within the current static admin template.

## Scope
### In scope
- All observed navbar showcase families, including the 15 examples identified in Context, subject to rendered verification.
- Brand/navigation links, active/disabled items, dropdowns, search/input/button content and mega panels.
- Responsive collapse/toggle behavior, accessible keyboard/focus interaction, color/theme presentation and safe demo forms/actions.

### Out of scope / Non-goals
- Replacing the global header/sidebar on every existing page or a new site-wide navigation architecture.
- Real search, purchases, login, logout, account settings, profit reports or application integrations represented by sample labels.
- Backend/API requests, credential transmission, persistence, authentication, routing framework or database changes.
- Fixing unrelated component issues or creating BA, technical plan, application code or tests during task-create.

## Requirements
1. Deliver a standalone HTML page organizing Example, Supported content, Mega dropdown, Color schemes and Navbar Theme groups. Preserve each observed example rather than substituting one generic navbar.
2. Example navbar must include brand, active/ordinary links, a dropdown, a disabled item and search controls as shown in the reference. Supported content must cover text, input-group and button variants with appropriate alignment and wrapping.
3. Provide mega dropdown examples activated on click and on hover, with grouped navigation/list content and a sample form. Verify the complete panel inventory and layout against the rendered reference before finalizing.
4. Hover menus must also work with keyboard and non-hover pointer/touch input. Dropdown and mega-menu controls must expose their open/closed state and associated content, have accessible names and visible focus, and exclude hidden content from keyboard navigation.
5. Verify opening/closing behavior, Escape handling, outside-click behavior, item activation and focus return against the live reference. Form editing must remain possible without unintended dismissal; any accessibility improvement or necessary deviation must be reported.
6. Implement the eight observed color schemes and the separate Navbar Theme example. Inspect the latter to determine its actual intended appearance/behavior rather than invent a global theme switch or persistent setting. Maintain readable labels/icons/focus across colored surfaces and report accessibility adjustments.
7. Each navbar must collapse/expand at the appropriate verified responsive threshold. Its toggle must operate only its own navbar content, with accurate expanded state and target association. Multiple examples and their menus must remain independent unless verified reference behavior intentionally closes other menus.
8. Disabled items must visibly communicate unavailability and not navigate or execute actions. Search, Buy Now, Sign in, Profile/Settings/Logout and other demo actions must not transmit data, charge money, authenticate or mutate real application state. Local example links or harmless observable demo results may be used; do not invent external destinations.
9. All forms/inputs need labels and native semantics. Mega navigation should use appropriate navigation/list/form structure rather than indiscriminately applying application-menu roles to mixed content. If icons are needed, use local Font Awesome instead of SVG.
10. Ensure dropdown/mega panels remain usable near viewport/card edges and on narrow/short screens. Use wrapping, stacking, scrolling or positioning fallback as appropriate; no unreachable content, unintended page overflow or overlap with unrelated examples. Repeated toggles, resize and orientation changes must leave consistent states. Respect reduced-motion preferences if transitions are included.
11. Inspect reference render before finalizing navbar/menu dimensions, spacing, typography, colors, icons, layout and stacking. Reuse authorized local assets; report imagery/glyph substitutions instead of assuming commercial assets may be copied.
12. Preserve shared-shell behavior and unrelated user work. Navbar example toggles/dropdowns must coexist with the existing mobile sidebar drawer without selector, focus, Escape or scroll-state conflicts. Avoid unnecessary dependencies and broad changes to earlier tasks.

## Constraints
- Deliver ordinary HTML/CSS/JavaScript suitable for the existing static repository, not a framework-only application or backend feature.
- Sample labels/forms do not authorize real requests or actions; forms are demonstration-only.
- Do not presume the existing dropdown controller can be reused unchanged: its scope and known edge-positioning limitation require investigation before any dependency on it.
- Keep this original task brief immutable; other stages own their respective documents, source and rollback artifacts.

## Acceptance Criteria
1. A directly viewable page contains all verified navbar examples, including three Supported content variants, click/hover mega panels, eight color schemes and Navbar Theme.
2. Content, link states and control arrangement match the relevant reference examples; material visual differences are reported.
3. Each responsive toggle opens/closes only its associated content and synchronizes visibility/expanded state across viewport transitions.
4. Dropdowns/mega panels operate via click, keyboard and a non-hover path. Escape/dismissal/focus behavior is verified, hidden content is not tabbable, and form editing remains usable.
5. Mega panels contain the verified grouped links/list/form content without clipping or collisions at desktop/mobile widths.
6. Disabled items remain inactive; search/form/button/account demo actions do not send credentials, navigate unexpectedly, purchase or mutate data.
7. Color and theme examples remain readable, controls have accessible names and labels, focus is visible and decorative icons do not create redundant information.
8. Narrow/short landscape, long labels, rapid toggling and resize do not produce stale states, inaccessible menus or unintended horizontal scrolling.
9. Existing page-shell drawer and new navbar controls coexist correctly. Required local resources load without errors affecting functionality, and relevant existing behavior remains intact.
10. Reference comparison and actual tests are reported with limitations; no unperformed responsive/accessibility checks are claimed.

## Validation Expectations
- Inspect the live reference at desktop/mobile widths, confirm all 15 observed showcase navbars, responsive thresholds and Navbar Theme semantics.
- Exercise every collapse toggle, ordinary dropdown and click/hover mega panel; test keyboard, focus, outside click, Escape and hidden-content exclusion.
- Verify native form labeling/editing and harmless demo submissions/actions; confirm no real data transmission.
- Check all color schemes, disabled controls, long content, viewport-edge positioning and short-height menu access.
- Test resize while content/menu is open, rapid activation, reduced motion and interaction with the mobile page-shell drawer.
- Compare renders, check local resource/runtime failures and run relevant regressions if shared assets change. No application tests or browser validation were run during task-create.

## Assumptions and Open Questions
- Assume root-level navbar.html, following the established standalone component-page convention; filename/location were not specified.
- Assume default light page styling and English demo content; individual color/theme examples follow the verified reference.
- navbar-expand-lg suggests a responsive threshold but does not establish the behavior by itself; confirm computed/rendered behavior during task-analyze.
- Navbar Theme may be a styling example rather than a global switch. Verify before adding any theme behavior; persistence is outside scope.
- Exact mega-menu inventory, hover/close semantics, responsive states and safe demo link destinations require investigation before dependent design.
- These families form one coherent navbar-showcase capability. If later requirements call for replacing navigation globally, scope that separately rather than silently enlarging this task.
