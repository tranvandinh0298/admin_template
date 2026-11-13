# Technical Plan: Admin Theme
**Task ID:** 20261113_admin_theme_tokens
**Status:** Ready

## References
Task brief and BA for 20261113_admin_theme_tokens.
## Technical Context and Current Behavior
Static pages share layouts.css. Component styles contain fixed values. Third-party CSS is local and loaded per demo.
## Requirements / Acceptance Criteria Mapping
Shared CSS tokens cover common roles and preserve existing light values. Mode selection, reload, navigation and storage fallback are exercised in browser checks. Page inventory and widget inspection cover rollout.
## Proposed Approach and Alternatives
Load a token sheet and synchronous preference script in each runnable page. Use CSS variables and explicit vendor overrides rather than duplicating full stylesheets. Keep illustrations, palette samples and vendor source assets fixed.
## Files and Components
Theme CSS and JS, page heads, first-party styles, and targeted browser validation.
## Implementation Steps
Snapshot paths. Add theme preference and controls. Replace fixed palette declarations with role tokens, then verify both modes.
## Testing Strategy
Smoke-test all pages at desktop and mobile widths. Exercise keyboard theme selection, persisted preference, System and blocked storage. Inspect representative vendor popups and run existing regression suites.
## Risks, Dependencies and Rollback Considerations
CSS cascade and overlays are the main risks. Preserve exact pre-change snapshots. Local storage is origin-scoped.
## Validation Checklist
Page coverage, no page overflow introduced, accessible selector, readable controls and visible focus.
## Open Questions / Decisions
System is the default. No blocking decisions.
