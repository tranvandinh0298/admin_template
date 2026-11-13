# Technical Plan: Swiper Carousel showcase
**Task ID:** 20261109_materio_carousel
**Status:** Ready

## References
Brief: tasks/20261109_materio_carousel.md. BA: docs/business-analysis/20261109_materio_carousel.ba.md, Ready for technical design. Repository AGENTS.md and task-implement snapshot policy apply. Official API: https://swiperjs.com/swiper-api

## Technical Context and Current Behavior
Static repo, existing layout shell/fonts and external Playwright runtime. No Carousel source or Swiper installed. Preserve all earlier-task files and modified shared layout source. Read-only investigation in this chat retrieved reference ui-carousel.js and inspected live instances: 12 instances across 11 examples, each five slides, loop/autoplay false. Gallery thumbs shows four, Multiple slides 2 below 576px/3 above. Reference progress uses progressbar/arrows, scrollbar hides automatically, vertical has bullets, coverflow rotates 50/depth100, cube and flip use their corresponding effects. No application tests yet.

## Requirements / Acceptance Criteria Mapping
| Brief / BA | Design and test |
| --- | --- |
| R1–R2 / AC-01 | 11 sections, local pinned Swiper; count 12 instances and 5 slides each. |
| R3,R5 / AC-02–AC-03 | Scoped navigation/pagination/scrollbar elements; test controls, swipe and isolation. |
| R4 / AC-04–AC-05 | Effects, multiple breakpoints, paired gallery/thumbs; test parameters, rendered transforms and two-way selection. |
| R6,R8 / AC-06–AC-07 | No autoplay/loop; focused-region arrow keys only, native controls, speed0 reduced motion and focusable thumbnail visibility. |
| R7,R9,R10 / AC-08–AC-09 | Original CSS landscape artwork, responsive wrappers, isolated source; HTTP/file/font checks, geometry and screenshots. |

## Proposed Approach and Alternatives
Pin Swiper 14.4.0 MIT bundle JS/CSS and LICENSE locally, confirmed current npm version and official API during analysis. Native library uses full bundle for effects/thumbs, avoiding build pipeline. Alternative custom slider/Bootstrap rejected by explicit Swiper scope.

Use static HTML for five original landscape-art slides per instance; CSS gradients/geometry replace commercial photos with visible scene labels, no SVG/downloaded commercial imagery. All originals remain independently viewable with an initialization-error notice if library fails. Reuse shell and Font Awesome arrows. Label every region; controls are button elements. Add visually modest previous/next controls outside examples lacking arrows for keyboard accessibility, while preserving named visual treatments.

Initialize with actual local DOM element references, no global control selectors. Disable Swiper global keyboard module; handle directional arrow keys only in the focused carousel region, ignoring buttons with standard activation semantics where appropriate. No autoplay or loop. Use speed300 or 0 on reduced motion; preference change updates all instances. Prevent offscreen thumbnail buttons from Tab by visible-slide state while keeping accessible prev/next thumbnail controls; update active thumbnail aria-pressed. Main slides contain no interactive descendants. Swiper A11y names and focus outlines enabled. Use buttons for gallery thumbnails; their click selects main image without cross-instance effects.

Use same reference effect configuration, multi-slide breakpoint and four thumbs. Scrollbar draggable true is an explicit usability addition; hide after inactivity matches reference. Container wrappers reserve padding for 3D shadows and clip effects locally to prevent page overflow. Responsive two-column grid where space permits; gallery full width. Width/min-width constraints prevent shared shell flex overflow. Do not refactor other components.

## Files and Components
New carousel.html, assets/css/carousel.css, assets/js/carousel.js, assets/vendor/swiper/swiper-bundle.min.js, swiper-bundle.min.css, LICENSE, tests/carousel.spec.js. Implementation metadata only under .task-backups/20261109_materio_carousel/. No shared source/config changes.

## Implementation Steps
1. Record original absence and manifest before source writes; preserve unrelated edits.
2. Retrieve pinned authorized Swiper bundle/license; inspect reference screenshot.
3. Create 11 examples, original artwork, semantic controls and scoped CSS.
4. Initialize effects, scoped controls, keyboard, thumbnail synchronization and motion preference handling.
5. Run targeted browser tests, screenshot comparison and layout regression; snapshot each subsequent iteration before changes.
6. Record final hashes, actual checks and deviations; then task-review is read-only. Any findings needing fixes require a new authorized implementation stage.

## Testing Strategy
External PLAYWRIGHT_MODULE runtime, Chrome channel. Loopback resource allowlist and proper JS/CSS/font MIME; exclude backups. Verify 12 instances, 5 slides, no loop/autoplay, controls/pagination/progress, scrollbar drag, pointer swipe, vertical keys, three effects and multiple breakpoints. Test gallery click/main next synchronization, rapid changes, unrelated instance isolation, keyboard focus and reduced-motion init/change, offscreen thumbs tab exclusion. Sample 320/390/568/768/1199/1200/1366/1920, landscape and direct file URL. Check resources/runtime, failed-library fallback and resize. Capture reference/desktop/mobile screenshots; do not claim physical touch or screen-reader verification from desktop automation. Run existing layout regression and syntax checks; broaden only on shared changes or concrete concerns.

## Risks, Dependencies and Rollback Considerations
Version-specific Swiper behavior must be verified by actual browser tests. 3D transforms/thumb overflow can escape containers. Multiple viewport-visible sliders must not all respond to keyboard. Motion effect speed0 retains layout without animation. Original artwork intentionally differs from photos. Backup exclusion previously unconfigured: no auto config edits/staging/deployment, report limitation. Record absent paths, iterations and final hashes; rollback requires explicit approval/divergence checks, preserving task documents.

## Validation Checklist
- [ ] 11 variants/12 instances and controls.
- [ ] Effects, direction, breakpoints, scrollbar/swipe.
- [ ] Gallery bidirectional synchronization and independence.
- [ ] Keyboard, names, focus, reduced motion.
- [ ] Responsive geometry, resources, HTTP/file, fallback.
- [ ] Screenshots/syntax/regression and final hashes.

## Open Questions / Decisions
Q-002 configuration resolved by live reference evidence above; BA not edited during analysis/plan. Q-001 filename/original media assumptions non-blocking. Explicit technical choices: local14.4.0, original CSS art, extra accessible external controls, draggable scrollbar, no autoplay/loop. No blocking business questions. This is the initial plan, not BA approval or test completion.
