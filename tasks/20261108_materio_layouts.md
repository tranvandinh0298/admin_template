# Task: Replicate Materio admin layout variants
**Task ID:** 20261108_materio_layouts

## Context
The user requests layout-only HTML examples based on the Materio Bootstrap HTML admin theme:
https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/index.html

The repository currently has an empty root index.html, an assets directory, and task workflow documentation. No application dependencies, routes, build configuration, or tests were found during discovery. Existing untracked files must be preserved. The reference URL could not be retrieved by the web tool during task creation; its visual details have not yet been verified.

## Objective
Provide six individually viewable HTML pages demonstrating the requested Materio-style admin shell arrangements, without adding dashboard features or extra UI components.

## Scope
### In scope
- Vertical navigation/sidebar layout (default).
- Horizontal navigation/top navbar layout.
- Boxed layout.
- Icon-sidebar/compact layout.
- Single column layout.
- Blank layout.
- HTML examples under layouts/, with only the styling, assets, and minimal behavior needed to demonstrate each layout.
- Layout structure, dimensions, spacing, colors, navigation placement, and responsive behavior guided by the reference theme.

### Out of scope / Non-goals
- Dashboard charts, statistics, cards, data tables, forms, or other showcase components.
- Business features, backend services, authentication, database integration, or populated application pages.
- Rebuilding the full Materio theme or its settings/customizer interface.
- BA, technical design, implementation, or tests during this task-create step.

## Requirements
1. Create a separate HTML example for each of the six layout variants in layouts/.
2. Use layouts/default_layout.html for the default vertical/sidebar example and layouts/single_column_layout.html for the single column example, as requested by the user. The remaining filenames must clearly identify their variants.
3. Match the reference theme's layout appearance as closely as practical within the layout-only scope. Inspect the reference and relevant variant examples before implementation; do not treat unverified visual details as established requirements.
4. Include navigation/header/footer regions only as needed for the demonstrated shell. Keep content empty or use minimal neutral placeholders to make the layout boundaries visible.
5. Include only minimal navigation labels/icons and layout controls necessary to demonstrate the shell; do not introduce extra components.
6. Each page must be directly viewable and its variant clearly distinguishable from the others.
7. Preserve existing unrelated repository content and follow the repository workflow and rollback snapshot requirements during later implementation.

## Constraints
- Deliver HTML examples in layouts/; do not substitute a framework-only application.
- Avoid unnecessary dependencies and follow existing conventions where present.
- Do not assume that access to the public demo permits copying proprietary theme source or bundled assets; use assets available for authorized reuse or independently recreate the layout styling.
- Keep the original task brief immutable after creation.

## Acceptance Criteria
1. Six HTML pages exist under layouts/ and cover all six requested variants.
2. default_layout.html visibly demonstrates a vertical sidebar with the main content region beside it.
3. The horizontal layout visibly demonstrates navigation across the top of the content region.
4. The boxed layout visibly constrains and centers the shell/content, leaving outer space on a sufficiently wide viewport.
5. The compact layout visibly uses a narrow icon-oriented sidebar.
6. single_column_layout.html visibly presents a single main column without a side navigation column.
7. The blank layout provides a minimal page without navigation chrome; this interpretation is an assumption pending any later clarification.
8. Layout styling is visually consistent across the examples and compared with the accessible Materio reference before completion.
9. At narrow viewport widths, each example remains usable without unintended overlap or horizontal overflow; any required layout toggle works.
10. No dashboard widgets or extra showcase components are added. Pages load without missing local resources or runtime errors affecting layout.

## Validation Expectations
- Open each HTML page in a browser and inspect desktop and narrow/mobile viewport behavior.
- Compare shell arrangement, spacing, and visual hierarchy with the reference and its relevant layout variants when accessible.
- Check local asset links, browser errors, overflow, and any included shell controls.
- Report actual checks performed and any inability to verify reference fidelity. No tests or browser validation have been performed in this task-create step.

## Assumptions and Open Questions
- The six variants form one coherent layout-example capability and are recorded in one task.
- Light/default theme styling is assumed because no alternate color mode was requested.
- Boxed is assumed to mean a centered width-constrained layout; whether the entire shell or only its content is boxed should be settled against the reference during analysis.
- Single column is assumed to omit the sidebar; exact header/footer treatment should follow the reference where available.
- Blank is assumed to omit sidebar, navbar, and footer chrome.
- Exact navigation labels, icons, fixed/sticky behavior, and breakpoint rules are not specified; derive them from the reference where possible while retaining the layout-only boundary.
- No blocking question prevents creation of this brief. Reference availability and ambiguous variant details remain for subsequent analysis.
