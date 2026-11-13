# Task: Replicate Materio Pagination & Breadcrumbs showcase
**Task ID:** 20261110_materio_pagination_breadcrumbs

## Context
The user requests Pagination & Breadcrumbs based on https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/ui-pagination-breadcrumbs.html.
The repository contains standalone static component pages, shared layout/button resources, local Font Awesome and browser tests. Existing unrelated shared-layout edits and earlier task artifacts must be preserved.
Direct HTTP retrieval identifies four basic pagination examples (standard/rounded, filled/outline), three sizes, three alignments, twelve color examples (six filled and six outline: primary, secondary, success, danger, warning, info), and four breadcrumb examples. This gives 22 pagination and four breadcrumb examples, subject to rendered verification. The web reader could not access the URL; direct retrieval succeeded. These are markup observations, not verified browser interactions.

## Objective
Provide a directly viewable showcase reproducing the reference pagination and breadcrumb variants, visual states, layout and accessible navigation semantics within the existing static admin template.

## Scope
### In scope
- One coherent paired navigation-component showcase matching the supplied combined reference page.
- Basic/rounded/outline pagination, sizes, alignments and six filled/outline color variants.
- Basic breadcrumbs, chevron separators, circled-arrow separators and star-icon breadcrumbs.
- Active/current states, icon-only navigation controls, safe demonstration interactions, keyboard access and responsive presentation.
### Out of scope / Non-goals
- Backend pagination, database queries, data tables, API loading, routing changes or real record navigation.
- Global breadcrumb generation, application-wide navigation replacement or persistence.
- Additional variants not established by the reference or later user requirements.
- BA, technical design, source or test creation during task-create.

## Requirements
1. Deliver a standalone page following existing component-page conventions. Preserve the reference groupings: Pagination, Sizes & Alignments, Pagination Color Options and Breadcrumbs.
2. Reproduce the complete verified example inventory. Initial markup shows 22 pagination examples and four breadcrumbs; confirm counts and content in the rendered reference before finalizing.
3. Basic pagination must cover standard and rounded shapes in filled and outline styling. Match page numbers, initial active states, first/previous/next/last icon controls, spacing and borders as present in each example; do not assume every example has identical controls.
4. Provide small, default and large pagination sizes and start/center/end alignment demonstrations. Verify their geometry, spacing and responsive arrangement against the live page.
5. Provide primary, secondary, success, danger, warning and info pagination in filled and outline forms. Preserve clear distinctions among default, hover, focus and current states, with readable foregrounds; report any accessibility-driven color adjustment.
6. Reproduce four breadcrumb treatments: basic separators; chevrons; circled-arrow separators; and star icons with the reference separator treatment. Verify exact labels/current items: the retrieved star example repeats Library in its last item, while the other examples end in Data. Do not silently invent a different hierarchy or destination.
7. Use meaningful navigation landmarks and list structure, distinguish examples with accessible labels, expose current-page/current-location semantics and give icon-only controls accessible names. Decorative icons/separators must not create redundant screen-reader output. Ensure visible keyboard focus and native keyboard activation.
8. Inspect actual reference interaction before deciding whether pagination changes the selected page or is purely presentational. Define the safe demo behavior in BA/design. Do not imply that record data loads when no such integration exists. Breadcrumb links and pagination controls must not navigate to invented external destinations, send requests or mutate real data.
9. If a local interactive page-state demonstration is selected, each pagination must manage its own state consistently; first/previous/next/last must respect boundaries, current state must remain unambiguous and inactive controls must neither navigate nor act. If static behavior is selected, disclose it clearly and preserve reference current/disabled states. Do not add unsupported disabled examples merely to expand scope.
10. Keep controls and breadcrumb content usable at narrow/short widths, during resize and with long labels. Avoid unintended horizontal page scrolling, clipped controls and collisions; any wrap/scroll adaptation must preserve navigation order and alignment intent.
11. Use local Font Awesome instead of SVG or unapproved reference icon assets. Reuse existing assets where suitable, avoid unnecessary dependencies and preserve shared shell/sidebar behavior and unrelated user work.
12. Compare rendered dimensions, shapes, typography, colors, spacing and grouped layout against the live reference. Report meaningful substitutions, deviations and limits of validation.

## Constraints
- Ordinary HTML/CSS/JavaScript suitable for the existing static repository; no backend or framework migration.
- The original task brief remains immutable. Later skills own BA, technical plan, source/tests and rollback artifacts.
- Retrieved HTML establishes an initial inventory only; live interaction, dimensions, states and responsive behavior require verification.
- No authorization for real search, data retrieval, navigation destinations or persistent preferences is implied.

## Acceptance Criteria
1. A directly viewable page contains all verified pagination and breadcrumb examples, including the four reference groupings.
2. Basic shapes, outline styles, three sizes, three alignments and twelve color examples match the relevant rendered treatments, with deviations documented.
3. Four breadcrumbs preserve verified labels, icon/separator treatments and clear current-location semantics.
4. Every icon-only control has an accessible name; navigation/list semantics, current states, focus indicators and keyboard activation are valid.
5. Pagination and breadcrumb demo behavior is explicit, harmless and consistent with the selected BA/design; any interactive pagination respects independence and boundaries.
6. Narrow mobile, short landscape, long labels and resize retain reachable controls and readable content without unintended page overflow.
7. Local assets load without functional errors, Font Awesome replaces reference icons, and the existing shell/sidebar remains operational.
8. Reference comparison, executed tests, remaining risks and unverified behavior are reported accurately.

## Validation Expectations
- Inspect live desktop/mobile reference to confirm the full example count, control inventory, initial states, labels, hover/click behavior, size/alignment geometry and breadcrumb separators.
- Exercise pointer and keyboard activation, focus, current semantics, harmless link behavior and any implemented disabled/boundary states.
- If stateful demos are chosen, test every action, first/last boundaries, repeated activation and independence across examples; confirm no real data request or unexpected navigation.
- Check narrow mobile, desktop, short landscape, resize and long breadcrumb labels; compare screenshots and verify all color states remain readable.
- Check local HTTP/file viewing, resource/runtime failures and shared drawer coexistence; run relevant regressions for any shared assets changed.
- No application tests or browser interaction checks were run during task-create.

## Assumptions and Open Questions
- Assume a root-level pagination-breadcrumbs.html, English sample content and the existing light shell.
- Assume a single showcase task for the combined reference, with no real paginated dataset or application hierarchy.
- Q-001: Does the live reference change page state on click? Resolve during analysis before choosing local demo behavior; no backend behavior is implied.
- Q-002: Should the star breadcrumb's repeated Library label be retained? Default to verified reference content, with any deliberate correction recorded during BA.
- Q-003: Confirm initial current/disabled states, icon variants, responsive layout and exact example inventory during investigation.
- These technical/content verification questions do not block creation of the brief; unresolved business decisions affecting implementation must be surfaced in BA.