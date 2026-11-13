# Task: Replicate Materio badges showcase
**Task ID:** 20261109_materio_badges

## Context
The user requests the Badge component next, based on:
https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/ui-badges.html

The repository is a static admin template with layout, button, Accordion, Collapse and Alerts examples, local Font Awesome assets and Node/Playwright tests. No badges task/page was found in the inspected inventory. Existing modified shared layout files and untracked earlier-task artifacts must be preserved.

Reference HTML retrieved through PowerShell identifies 12 sections: Basic Badges, Label Badges, Button with Badges, Badge Circle & Square Style, Badge Circle & Square With Icon, Dots Style, Button with Badges Notification, Notifications With Icons, Badges Position, Badge Overlaps for Shapes, Maximum Values, and Custom label Badges. Basic/Label include seven colors in default and pill shapes. Circle/square examples include numbers and icons, with solid/basic and label treatments. Later sections demonstrate positioned notifications, avatar/shape overlaps, values 99/99+/999+ and custom labels. These are markup observations; exact visual arrangement and any interaction have not yet been verified in a browser.

## Objective
Provide a directly viewable badges showcase reproducing the reference's badge styles, shapes, counters, icon examples and notification placements within the existing static template.

## Scope
### In scope
- One HTML page with all 12 observed reference sections.
- Basic/label colors, default/pill shapes, numbered and icon circle/square badges, dot indicators and button-attached counters.
- Icon notifications, badge positions, overlaps on shapes/avatar examples, maximum-value displays and custom labels.
- Responsive presentation, accessible meaning and supporting authorized local assets.

### Out of scope / Non-goals
- Live unread counts, notification fetching, backend APIs, persistence, authentication or databases.
- A notification center, inbox, click-to-read workflow or global badge service.
- Changing existing button confirmation, Alerts dismissal, Accordion or Collapse behavior.
- BA, technical planning, source code and tests during task-create.

## Requirements
1. Deliver a standalone HTML page with all 12 sections listed in Context, clearly labeled and independently identifiable.
2. Basic and Label Badges must demonstrate Primary, Secondary, Success, Danger, Warning, Info and Dark in default and rounded-pill forms, matching the reference inventory.
3. Demonstrate button-attached count badges across the observed button treatments; reproduce circle/square numeric and icon badges in basic and label styles, and the observed dot examples. Verify exact inventories from the rendered reference before finalizing them.
4. Include Button with Badges Notification and Notifications With Icons examples with count and dot indicators placed relative to their host controls. Preserve readable content and ensure overlays are not clipped by button/ripple boundaries.
5. Reproduce reference badge-position examples, overlap treatments for avatar/shape hosts, maximum-value labels including 99, 99+ and 999+, and custom label examples. Treat these as visual demonstrations unless reference verification or user clarification establishes actual dynamic logic.
6. Inspect the rendered reference before finalizing colors, dimensions, typography, padding, corner shapes, icon alignment, host shapes, overlay offsets and page layout. Record material differences rather than claim unverified fidelity.
7. Use local Font Awesome equivalents rather than SVG for icons. If avatar imagery is required, use authorized local or original placeholder assets and report differences; do not assume commercial demo assets may be copied.
8. Static badges must not become unnecessary keyboard controls. Buttons/links must retain native semantics and visible focus. Provide accessible context for standalone counts and notification dots so meaning does not depend on color or an unlabeled number/icon alone; hide purely decorative icons from assistive technology.
9. At desktop/mobile widths, groups wrap naturally and long labels/multi-digit values remain readable without unintended overflow, overlap between unrelated examples or clipped positioned badges. Intended overlap within a host example must remain visible.
10. Preserve existing repository behavior and user edits. Reuse appropriate layout/button conventions and local assets, avoiding unnecessary dependencies. Demonstration controls must not invent destructive actions, external navigation or count-changing business behavior.

## Constraints
- Deliver ordinary HTML/CSS/JavaScript suitable for the static repository, not a framework-only application.
- Keep this original task brief immutable. Later skills own BA, plan and implementation artifacts separately.
- Recreate the commercial theme styling using authorized resources; public demo access does not itself authorize copying bundled assets.
- No real-time data or persistent state is implied by notification/count examples.

## Acceptance Criteria
1. The page is directly viewable and contains all 12 named reference sections.
2. Basic/Label examples cover seven colors in both default and pill shapes; number/icon circle/square examples and dots match verified reference coverage.
3. Button badges and notification badges retain correct alignment and remain visible at their intended host position, including outside host edges where appropriate.
4. Position/shape-overlap, maximum-value and custom-label sections visibly reproduce their verified reference arrangements; 99, 99+ and 999+ are demonstrated.
5. Font Awesome local icons render successfully; imagery, if used, is authorized and any substitution is reported.
6. Counts/dots have meaningful accessible context, decorative icons do not cause redundant labels, and only genuinely interactive controls participate in keyboard navigation with visible focus.
7. Desktop/mobile and long-label/multi-digit examples do not create unintended page scrolling, content clipping or collisions between unrelated samples.
8. If host button ripple is included through established conventions, it does not clip positioned badges or interfere with labels. No unrequested count mutations or application actions occur.
9. Required local resources load without runtime errors affecting the showcase; relevant existing components remain intact. Actual visual/interaction checks and limits are reported.

## Validation Expectations
- Open the reference in a browser to verify all 12 sections, precise example inventories, positional offsets, host shapes and custom labels.
- Compare desktop/mobile renders and inspect overlays at card edges, inside buttons and on avatar/shape hosts.
- Check long labels, multi-digit and maximum-value text, wrapping, icon alignment and overflow at narrow widths.
- Inspect keyboard focus, accessible names/context for counts/dots and decorative icon treatment; verify any included button feedback without inventing actions.
- Check local resources/runtime errors and run relevant regression tests if shared assets change. No browser validation or application tests were run during task-create.

## Assumptions and Open Questions
- Assume root-level badges.html, following existing standalone component pages; filename/location were not specified.
- Assume default light appearance and English sample labels, without requiring verbatim demo prose.
- Assume counts and maximum-value labels are static examples; runtime truncation thresholds, count updates or live notification behavior are not requested.
- Exact custom labels, avatar substitutions, host shapes and inventories beyond the explicitly observed examples require task-analyze reference verification. Do not invent interaction semantics from the notification terminology alone.
- All 12 sections form one coherent badges-showcase capability, separate from a real notification system.
- No blocking clarification is needed to create this brief. If later inspection reveals an ambiguous interaction or asset requirement affecting scope, record it before dependent implementation.
