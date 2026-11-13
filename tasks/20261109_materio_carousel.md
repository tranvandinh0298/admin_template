# Task: Replicate Materio carousel showcase using Swiper
**Task ID:** 20261109_materio_carousel

## Context
The user requests Carousel based on:
https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/ui-carousel.html

The user explicitly states that implementing carousel with Swiper is sufficient. Treat this as a Swiper-only scope; do not require a separate Bootstrap carousel implementation.

The static repository contains layout and button/Accordion/Collapse/Alerts/Badge examples, local Font Awesome assets and Node/Playwright tests. No Swiper assets or Carousel task were found in the inspected inventory. Existing modified layout files and untracked prior-task artifacts must be preserved.

Retrieved reference HTML identifies two Bootstrap examples and a Swiper section with 11 variants: Default, With arrows, With pagination, With progress, With scrollbar, Vertical, Multiple slides, 3D coverflow effect, 3D cube effect, 3D flip effect and Thumbs Gallery. These are markup observations; rendering, configuration and interaction have not yet been verified.

## Objective
Provide a directly viewable carousel showcase using Swiper that reproduces the relevant Swiper variants, controls, gallery coordination and responsive presentation from the reference.

## Scope
### In scope
- One HTML page covering the 11 observed Swiper examples.
- Swiping/dragging, applicable arrows, pagination/progress/scrollbar controls, vertical movement, multiple visible slides, 3D effects and thumbnail gallery coordination.
- Supporting Swiper resources, authorized demo visuals, accessibility and responsive validation during implementation.

### Out of scope / Non-goals
- Separate Bootstrap carousel and Bootstrap dark crossfade examples from the reference.
- Backend media loading, CMS, uploads, persistence, APIs, authentication or databases.
- Recreating unrelated Materio navigation/customizer features or changing existing component behavior.
- BA, technical design, source code or tests during task-create.

## Requirements
1. Use Swiper as the carousel library; do not substitute a custom slider-only implementation or introduce Bootstrap solely for carousel behavior.
2. Provide clearly labeled examples for all 11 Swiper variants identified in Context. Verify exact slide inventories and configuration against the rendered reference before finalizing implementation.
3. Each example must support its applicable navigation and display behavior: default horizontal sliding, previous/next arrows, pagination, progress indication, scrollbar, vertical sliding and multiple visible slides as demonstrated in the reference.
4. Coverflow, cube and flip examples must visibly demonstrate their corresponding effects. Thumbs Gallery must synchronize thumbnail selection with the main slide and reflect main-slide changes in thumbnail state.
5. Controls must operate only their associated example. Separate carousel instances must not change each other's slide or control state; main/thumbnail instances within the same gallery intentionally coordinate.
6. Inspect the live reference before deciding initial slides, slide count, looping, autoplay, timing, slides-per-view, breakpoints, draggable scrollbar behavior and gallery interactions. Do not infer these settings from section names alone. Autoplay is not mandatory merely because the Bootstrap examples use automatic cycling.
7. Use authorized local/original demo visuals with consistent sizing and meaningful alternative text where appropriate. Report substitutions for commercial reference images; do not assume access to the public demo authorizes copying its bundled imagery.
8. Provide accessible names for carousel regions and controls, visible focus and usable keyboard operation. Keyboard input must affect the intended focused/active example rather than unrelated sliders; hidden slides must not leave inaccessible offscreen focus targets. Handle motion preferences appropriately, including any automatic movement if verified/selected.
9. At desktop/mobile widths, slides, effects and controls fit their containers without unintended page overflow or overlap. Resize/orientation changes and rapid navigation must leave slide/control/gallery states consistent. Touch interactions should not unnecessarily prevent normal page scrolling.
10. Follow existing layout conventions and preserve unrelated files. Prefer local pinned Swiper assets for directly viewable examples, avoiding unnecessary dependencies. If custom icons are needed, use existing Font Awesome rather than SVG, consistent with prior user preference.

## Constraints
- Deliver ordinary HTML/CSS/JavaScript appropriate for the current static project; no framework-only application or backend requirement.
- Swiper-only implementation satisfies the user's library scope. Bootstrap-specific examples are not additional required deliverables.
- Record the selected Swiper version and resource/license provenance during technical planning/implementation; no version is specified by the user.
- Keep the original task brief immutable. Other workflow stages own their respective artifacts.

## Acceptance Criteria
1. A directly viewable page loads Swiper and contains all 11 named Swiper examples, without requiring separate Bootstrap carousel implementations.
2. Each variant exhibits its verified reference behavior, including appropriate controls, direction, visible-slide arrangement and effect.
3. Arrows, pagination, progress and scrollbar states remain synchronized with their associated slides; interacting with one independent example does not affect another.
4. Selecting a gallery thumbnail changes the main slide; navigating the main gallery updates thumbnail selection. Repeated/rapid interactions do not desynchronize them.
5. Initial state, loop/autoplay choices and responsive settings are verified or explicitly documented as assumptions/deviations rather than claimed from untested markup.
6. Keyboard users can identify and operate relevant controls with visible focus; slide images have appropriate accessible descriptions and offscreen content does not create hidden focus traps.
7. Motion-preference handling is usable. If autoplay is included, its accessibility controls and reduced-motion behavior are defined and tested; no unrequested automatic movement is silently introduced.
8. Desktop/mobile/landscape layouts and resize behavior remain usable, without unintended page scrolling, clipped controls or effects colliding with unrelated sections.
9. Required local Swiper/media/font resources load without errors affecting the showcase. Visual substitutions and verification limits are reported, and relevant existing components remain intact.

## Validation Expectations
- Inspect all 11 Swiper examples in the reference at desktop/mobile sizes; record actual configuration and interactions before design decisions depend on them.
- Exercise swipe/drag and applicable controls, effect transitions, multiple-slide behavior, gallery synchronization and independent instance isolation.
- Check keyboard focus, accessible names, image descriptions, offscreen focusability and motion preferences; test autoplay only if included.
- Test rapid navigation, resizing, narrow/landscape viewports, touch-versus-page-scroll behavior and resource/runtime errors.
- Compare implementation/reference renders and record imagery/font/icon substitutions. Run relevant regressions if shared assets change. No browser validation or application tests were run during task-create.

## Assumptions and Open Questions
- Assume root-level carousel.html, following the existing component-page convention; filename/location were not specified.
- Interpret “making carousel with Swiper is enough” as implementing the reference's Swiper section while omitting separate Bootstrap examples. This scope interpretation is explicit; a smaller subset was not specified.
- Assume default light appearance, English labels and static demo media; no content management or dynamic feeds.
- Swiper version, exact slide inventory, image substitutes and loop/autoplay settings require later reference/dependency investigation. If reference behavior is unavailable or ambiguous, record it and clarify material behavior before dependent implementation.
- The 11 variants form one coherent carousel-showcase task; technical steps do not require separate task briefs.
