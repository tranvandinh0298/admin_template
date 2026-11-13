# Task: Replicate Materio accordion showcase
**Task ID:** 20261109_materio_accordion

## Context
The user requests replication of the Accordion page at:
https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/ui-accordion.html

The repository contains static HTML layout examples, button.html, shared layout CSS/JavaScript, local Font Awesome and SweetAlert2 assets, and Node/Playwright tests. No accordion page exists in the inspected file inventory. Reference HTML was retrieved through PowerShell after the web reader failed; its rendered appearance has not been inspected for this task.

Reference markup identifies four accordion groups: accordionExample, accordionIcon (accordion-without-arrow), accordionCustom (accordion-custom-button), and accordionCustomIcon (custom controls with leading icons). Each has three items and uses group-specific parent associations. The first and third groups initially open item 1; the second and fourth initially open item 3. These are markup observations, pending rendered verification.

Existing modified layouts/single_column_layout.html and assets/js/layouts.js, plus untracked button-task artifacts, must be preserved as unrelated work.

## Objective
Provide a directly viewable accordion showcase that reproduces the reference's relevant accordion variants, visual states and expand/collapse interactions within the existing static admin template.

## Scope
### In scope
- One HTML showcase page for the reference accordion variants.
- Standard accordion, accordion without arrow, customized accordion controls, and customized accordion with leading icons, as verified against the reference.
- Three items per group, readable example content, initial states and independent group behavior matching the reference.
- Responsive presentation, keyboard operation, accessible expanded/collapsed states and appropriate transition behavior.

### Out of scope / Non-goals
- Replicating unrelated dashboard navigation entries, theme customizer, notifications or other UI components.
- Backend data loading, persistence, authentication, APIs or database changes.
- Changing existing button behaviors or redesigning established layout pages.
- BA, technical planning, application code or test creation during task-create.

## Requirements
1. Deliver a standalone HTML page demonstrating all four observed accordion groups, with clear variant labels and three independently identifiable items per group.
2. Inspect the rendered reference before finalizing appearance. Reproduce relevant surfaces, borders, shadows, spacing, typography, active colors, indicators and icon alignment as closely as practical; report material differences.
3. Activating an item header toggles its content. Opening another item in the same group closes the previously open item; operations in one group do not affect other groups. Verify reference toggle details before implementation rather than inventing additional interaction modes.
4. Match the reference's initial expanded items described in Context unless rendered verification demonstrates different intended states. Ensure visible content, indicators and accessible states agree at initial load and after interaction.
5. Include the reference's without-arrow treatment and custom controls; use equivalent leading icons for icon-bearing examples. Prefer the repository's local Font Awesome assets, consistent with the user's established icon preference, without introducing SVG icons.
6. Headers must be operable by pointer and keyboard, have visible focus, expose expanded state, and identify their associated content. Collapsed content must not leave hidden interactive descendants reachable by keyboard.
7. Expand/collapse transitions must remain reliable during repeated or rapid activation. Respect reduced-motion preferences.
8. Fit desktop and narrow/mobile viewports without unintended horizontal scrolling, overlap or clipped content. Allow long text to wrap naturally.
9. Reuse appropriate existing layout conventions and assets, avoiding unnecessary dependencies and preserving unrelated changes. Follow task-specific rollback snapshot requirements during implementation.

## Constraints
- Deliver ordinary HTML/CSS/JavaScript suitable for the current static repository; do not require a framework-only application or backend.
- Do not assume that public demo access authorizes reuse of commercial theme bundles; recreate styling using authorized assets.
- Keep the original task brief immutable. Later stages own their respective artifacts.

## Acceptance Criteria
1. The showcase page is directly viewable and contains four clearly identified groups with three items each.
2. Standard, without-arrow, custom-control and leading-icon treatments are distinguishable and compared against the rendered reference; differences are documented.
3. Initial open items match verified reference states, with consistent content visibility and indicators.
4. Pointer activation can open and close an item. Opening a sibling closes the previous item within that group, while other groups retain their state.
5. Keyboard users can reach and toggle headers using native button activation, see focus and access only visible panel controls. Expanded state and header/panel associations remain accurate.
6. Repeated and rapid activation settles into a consistent state without stuck heights, duplicate content or lingering transitions; reduced-motion behavior is usable.
7. At desktop and mobile widths, labels and content remain readable and no unintended overlap or horizontal overflow occurs.
8. All required local resources load without errors affecting the showcase. Existing layout and button behavior remains intact.

## Validation Expectations
- Open the reference and implementation in a browser; compare all four variants at desktop and mobile widths.
- Exercise opening, closing, sibling switching, group isolation, initial states and rapid repeated activation.
- Check keyboard activation, focus visibility, expanded-state attributes, hidden content focusability and reduced motion.
- Check resource/runtime errors and representative narrow/desktop widths; run relevant existing regression tests if shared assets change.
- Report actual checks and limits. No browser validation or application tests have run for this task-create step.

## Assumptions and Open Questions
- Assume the deliverable is root-level accordion.html, following button.html; the user has not specified a filename or directory.
- Assume the reference default light appearance and English sample labels/content; exact demo prose is not a business requirement.
- Assume all four reference accordion groups form one coherent capability; unrelated page chrome is outside scope.
- Local Font Awesome is the working icon choice based on prior user preference. Exact glyph equivalents and custom indicator appearance require reference verification.
- No blocking clarification is needed to create this brief. Filename/location and exact text may be clarified in later analysis without silently treating assumptions as user decisions.
