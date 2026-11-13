# Task: Replicate Materio Progress bars showcase
**Task ID:** 20261110_materio_progress

## Context
The user requests Progress bars based on https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/ui-progress.html.
The repository contains standalone static component pages, shared shell resources, local Font Awesome and browser tests. Preserve unrelated shared-layout edits and earlier task artifacts.
Direct HTTP retrieval identifies five groups: Progress bars (Default, Height, With Label), Backgrounds, Striped, Animated and Multiple bars. Initial inventory: six single bars in the first group; seven each in Backgrounds, Striped and Animated; three multi-segment tracks with three segments each. This totals 30 tracks and 36 progress segments, subject to rendered verification. The web reader could not access the page; direct retrieval succeeded. These are markup observations, not verified browser behavior.

## Objective
Provide a directly viewable Progress bars showcase matching the reference variants, proportions, colors, labels, striped animation and grouped responsive layout within the existing static admin template.

## Scope
### In scope
- Default bars, height variations, percentage labels and seven background/color variants.
- Static striped and animated striped bars.
- Multiple-bar tracks in plain, striped and animated treatments.
- Accessible progress semantics, reduced motion, responsive presentation and shared-shell coexistence.
### Out of scope / Non-goals
- Real uploads, downloads, job monitoring, polling, API integration or backend processing.
- Simulated changing percentages, start/stop/reset controls, indeterminate loaders or additional variants unless established by the reference or separately requested.
- Global redesign or fixes to earlier component tasks.
- BA, technical design, source code or tests during task-create.

## Requirements
1. Deliver a standalone page following repository component-page conventions, preserving all five verified reference groups and their labels.
2. Confirm the initial inventory of 30 tracks/36 segments in the rendered reference before finalizing; do not substitute a small generic sample.
3. Default examples show 25% and 75% completion. Height examples use the same values with retrieved heights of 6px and 10px. With Label examples show visible 25% and 75% text with retrieved 12px track height. Verify actual computed heights, typography, rounding and label placement.
4. Backgrounds, Striped and Animated each cover primary, secondary, success, danger, warning, info and dark. Retrieved values in that order are 20, 30, 40, 75, 60, 50 and 85 percent. Match fill and track colors, proportional widths and spacing after rendered verification.
5. Striped examples display the reference stripe pattern without movement. Animated examples animate stripes rather than falsely implying percentages are changing. Verify direction, pattern size, speed and appearance against the live reference.
6. Multiple bars contains three tracks: plain, striped and animated. Each initially contains primary 15%, success 30% and danger 20% segments in that order, leaving 35% unfilled. Keep segment widths relative to the whole track and avoid independent rounding that creates gaps or overlaps.
7. Every meaningful progress indicator needs an accessible name and correct determinate range/value semantics. Values and visible widths/labels must agree. For multiple segments, provide understandable segment names and grouping without announcing an invented overall completion value or redundant nested progress roles. Decorative striping must add no semantic noise.
8. Respect prefers-reduced-motion by stopping or suitably reducing stripe animation while retaining readable values and the intended visual distinctions. Do not introduce flashing or unrelated animations.
9. Keep percentage labels readable and unclipped on narrow screens and under text enlargement. Any necessary accessibility adjustment to label height, text placement or foreground color must be documented rather than silently claiming exact visual fidelity.
10. Maintain usable track widths, spacing and group layout on narrow mobile, short landscape and desktop screens, including resize and long headings/names. No unintended horizontal page scrolling, clipped labels or overflowing segments.
11. These are fixed demonstration values, not real process status. Do not transmit data, start background work or imply a real operation is progressing. Verify whether the reference has controls or runtime behavior before adding any interaction.
12. Reuse suitable existing shell/assets and avoid unnecessary dependencies. If icons are needed, use local Font Awesome instead of SVG. Preserve shared sidebar behavior and unrelated user work.
13. Compare rendered layout, dimensions, colors, corner shapes, typography, label positioning, striping and motion against the live reference. Report substitutions, deviations, tests actually performed and remaining verification limits.

## Constraints
- Ordinary HTML/CSS/JavaScript suitable for the current static repository; no backend or framework migration.
- Original task brief remains immutable; later workflow skills own BA, plans, application code/tests and rollback metadata.
- Markup observations establish initial inventory and values only. Computed geometry, motion, responsive behavior and accessibility require investigation.
- No additional controls or real process integration are authorized by the reference request alone.

## Acceptance Criteria
1. A directly viewable page includes every verified example across the five reference groups.
2. Default, height and labeled bars preserve verified values and treatments; all seven colors appear in plain, striped and animated groups.
3. All three multiple-bar tracks show the correct segment order/proportions and remaining unfilled space.
4. Static stripes remain static; animated stripes match verified motion, and reduced-motion preferences are respected without changing values.
5. Accessible names, range/value semantics, visible percentages and segment widths agree; multi-segment meaning remains understandable.
6. Mobile, short landscape, resize, long labels and text enlargement retain readable content without unintended page overflow or inaccessible clipping.
7. No real progress operation or network activity is introduced; resources load without functional errors and the shared shell/sidebar remains operational.
8. Reference comparison, actual tests, accessibility adjustments and unverified behavior are reported accurately.

## Validation Expectations
- Inspect live desktop/mobile reference to confirm groups, track/segment inventory, values, dimensions, color palettes, label layout and any controls.
- Measure representative fill-to-track ratios, custom heights and multi-segment totals; confirm labels and aria values agree with display.
- Verify stripe animation runs only on intended examples, does not change completion values, and stops/reduces under reduced-motion preferences.
- Check accessible names and progress semantics, label contrast/clipping, narrow mobile, desktop, short landscape, resize, long labels and text enlargement.
- Compare screenshots and motion behavior; check local HTTP/file viewing, runtime/resource failures and shared drawer coexistence. Run relevant regressions if shared assets change.
- No application tests or browser interaction checks were run during task-create.

## Assumptions and Open Questions
- Assume root-level progress.html, English sample headings and the existing light shell.
- Assume percentages remain fixed and only stripes animate; verify against the rendered reference during analysis.
- Q-001: Confirm computed default/label heights, responsive layout and stripe timing/direction before implementation.
- Q-002: If the 12px label treatment clips text or lacks readability, define and report the smallest accessible adjustment during BA/design.
- Q-003: Confirm the 30-track/36-segment inventory and whether any reference controls exist; do not invent runtime controls.
- No blocking business clarification is needed to create this brief. Later business ambiguities must be surfaced before dependent implementation.