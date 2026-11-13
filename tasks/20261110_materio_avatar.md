# Task: Replicate Materio Avatar showcase
**Task ID:** 20261110_materio_avatar

## Context
The user requests the Avatar reference https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/extended-ui-avatar.html and authorizes task-create → task-ba → task-analyze → task-implement in sequence.
The repository contains standalone showcases, shared shell, local Font Awesome and Popper, and browser tests. Preserve unrelated shared-layout edits and earlier task artifacts.
Direct HTTP retrieval identifies seven cards: Sizes, Initials, Label Initials, Shapes, Status Indicator, Label Avatar Status Indicator (reference spelling Lable), and Avatar Group. Size rows show xs/sm/md/lg/xl; Shapes shows circle/rounded/square; status examples cover online/away/busy/offline for images and initials. Group examples include default overlap, pull-up, pull-up with tooltip and a count indicator. Exact dimensions, colors, row inventories and interactions require rendered verification. Direct retrieval succeeded; web reader access failed.

## Objective
Deliver a reusable avatar component family and directly viewable showcase reproducing the reference variants, grouping and accessible hover/focus behavior in the existing static template.

## Scope
### In scope
- All seven verified cards, image/solid-initial/tinted-initial sizes, shapes and both status treatments.
- Overlapping groups, pull-up effects, named tooltips and additional-member count.
- Local lawful illustrative avatar assets, accessible identity/status descriptions, responsive behavior and shell coexistence.
### Out of scope / Non-goals
- User profile management, uploads, image editing UI, authentication, real presence tracking, member loading or persistence.
- Copying commercial reference portraits or building unrelated avatar variants.
- Global replacement of existing avatars or unrelated component fixes.

## Requirements
1. Create a standalone Avatar page following project conventions with the complete verified seven-card inventory.
2. Verify size-row values, colors and item counts; reproduce xs/sm/md/lg/xl dimensions and appropriate initials sizing. Distinguish reference md from any default size rather than assuming they are equal.
3. Provide actual image examples, solid initials and tinted/label initials, using readable foreground/background treatments. Use lawful local neutral portrait placeholders if reference assets cannot be reused; report substitutions explicitly.
4. Reproduce circle, rounded and square shapes with correctly cropped images. Images must not distort with differing aspect ratios. Provide meaningful identity alternatives; avoid repeating a person's name redundantly through surrounding labels and alt text.
5. Both image and initial variants must support online, away, busy and offline indicators. Match badge size/border/position against the rendered reference, and expose the status in accessible text rather than color alone.
6. Group examples must reproduce overlap order/borders, pull-up hover treatment, tooltip identity labels and the +3-style count as verified. Focused/hovered members must remain identifiable, visible and above neighbors. Additional-member count must communicate its meaning; do not imply it loads real members or opens a profile unless an actual demo action is specified.
7. Tooltips must work by keyboard focus as well as pointer hover, preserve accessible identity, support Escape dismissal and avoid duplicate native title tooltips. Keep content usable while hovering/focusing; cleanup descriptions and positioning when dismissed, scrolled offscreen or made inert/hidden.
8. Static avatars must not become unnecessary tab stops. Only tooltip-bearing or genuinely interactive examples need keyboard entry. Avoid adding click actions to decorative/static members; any demo action must be harmless and not navigate or request data.
9. Respect reduced motion for pull-up/transitions. Touch users must have a usable alternative to hover-only identity disclosure; accessible text and/or a deliberate local tap path are acceptable with documented behavior.
10. Reusable sizing/shape/status/group styles must tolerate different names, initials and image aspect ratios without depending on exact demo copy. Define reasonable presentation for long initials/content without silent inaccessible clipping.
11. Support narrow mobile, short landscape, resize, text enlargement and longer identity/tooltip labels without unintended page overflow, clipped indicators, unreadable count or inaccessible group members. Any wrapping/group scroll adaptation must preserve ordering and focus visibility.
12. Reuse suitable existing assets, local Font Awesome instead of SVG if icons are needed, and avoid unnecessary dependencies. Do not modify global shell/component styles merely for this showcase. Tooltip layering and Escape/focus behavior must coexist with the sidebar drawer.
13. Compare reference geometry, colors, fonts, border radii, status alignment, stacking and motion. Report substitutions, accessibility adjustments and actual verification limits.

## Constraints
- Static HTML/CSS/JavaScript project, no backend/framework migration or runtime remote-image dependency.
- Original brief immutable; subsequent skills own BA, plans, source/tests/assets and rollback metadata. This task-create stage creates only this brief.
- Initial markup facts do not establish computed sizes, complete counts, tooltip semantics or animation behavior.

## Acceptance Criteria
1. All seven verified cards and their complete image/initial/shape/status/group examples are directly viewable.
2. Sizes, shapes, colors, cropping and indicators match verified treatments with deviations documented.
3. Four group patterns work with correct overlap/focus/hover stacking, identity tooltips and additional-member semantics.
4. Accessible identity/status names, keyboard/Escape/hidden-state handling and reduced motion are correct, without unnecessary interaction on static avatars.
5. Narrow/short screens, long names/initials, resize, differing image ratios and text enlargement preserve usable content without unintended page overflow.
6. Resources are local/lawful, styles scoped and shared sidebar remains operational; no real presence, profile or member action occurs.
7. Reference comparison, actual tests, asset substitutions and remaining limits are reported accurately.

## Validation Expectations
Inspect live desktop/mobile reference for all seven inventories, computed sizes/defaults, shapes, indicator geometry, stacking and tooltip/pull-up behavior. Verify local assets, semantic identity/status, actual crop ratios, hover/focus/tap/Escape and description cleanup. Test narrow/short widths, long names/initials, text enlargement, group ordering, reduced motion, scroll/resize and drawer coexistence. Check HTTP/file resources/runtime errors and relevant regressions. No application tests were run during task-create.

## Assumptions and Open Questions
Assume root avatar.html, English neutral demo identities and existing light shell. Q-001: verify exact dimensions/colors/counts during analysis. Q-002: determine lawful local portrait substitutes; reference portraits are not presumed reusable. Q-003: determine group tooltip/tap/focus model and full accessible status descriptions. No business question blocks creation; resolve material ambiguities before dependent implementation.