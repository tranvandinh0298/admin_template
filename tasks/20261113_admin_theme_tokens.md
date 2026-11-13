# Task: Admin Theme Design Tokens and Night Mode
**Task ID:** 20261113_admin_theme_tokens

## Context
The admin project has shared CSS custom properties in `layouts.css` and separate styles for components, form controls, tables, and authentication pages. The shared stylesheet currently declares a light color scheme.

## Objective
Give the entire admin project one flexible design token system with light and night modes. Allow maintainers to change the theme centrally and let users switch appearance.

## Scope
### In scope
- The shared admin shell and layout variants, component demos, form capsule and form pages, tables, login variants, and their showcase.
- Shared visual tokens for surfaces, text, borders, brand and status colors, typography, spacing, radii, and elevation. Cover interaction states such as focus, hover, selection, and disabled controls.
- Light and night token values, a theme control, and theme-aware styling for visible third-party widgets and popups.

### Out of scope / Non-goals
- Redesigning page layouts, changing workflows, or adding backend services.
- Replacing vendor libraries solely to support theme colors.

## Requirements
- Keep shared theme values in one documented source. Components consume semantic tokens so palette changes can be made centrally.
- Cover both modes consistently, including native controls, overlays, and widgets rendered outside their parent component.
- Provide an accessible theme control and keep the chosen mode consistent across page navigation and reloads.
- Preserve current component behavior, responsive layouts, and local asset loading.

## Constraints
Keep the runtime Bootstrap-free. Preserve existing work and use the repository rollback workflow during implementation.

## Acceptance Criteria
- Every runnable admin, demo, and authentication page uses the shared theme system. An inventory identifies any intentional fixed colors, such as illustrative assets or color picker samples.
- Updating a shared brand or surface token changes the relevant components across pages without editing each component stylesheet.
- Switching to night mode updates the shell, content surfaces, text, controls, and openable overlays. The selected mode persists across reloads and navigation where storage is available.
- Text and controls remain readable, with visible focus and distinguishable interaction states in both modes.
- Existing layout and interaction tests continue to pass.

## Validation Expectations
- Inventory pages, token consumers, and vendor widgets. Smoke-test all runnable pages in both modes and inspect representative layouts, forms, tables, login pages, and popups at desktop and mobile widths.
- Verify theme switching by keyboard, persistence, contrast, and behavior when browser storage is unavailable.

## Assumptions and Open Questions
- Preserve the current light appearance as the baseline. Assume Light, Night, and System choices unless a different default or switch behavior is requested.
- Confirm token naming, theme control placement, and any intentional fixed colors during BA. No blocking questions for task creation.
