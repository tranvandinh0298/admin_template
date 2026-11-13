# Task: Replicate Materio modal showcase
**Task ID:** 20261109_materio_modals

## Context
The user requests Modals based on:
https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/ui-modals.html

The repository is a static HTML/CSS/JavaScript admin template with component pages, shared layout/button resources, local Font Awesome/Swiper/Popper/SweetAlert2 assets and Node/Playwright tests. No Modals task was found in the inspected task inventory. Existing modified shared layout files and untracked earlier-task work must be preserved; the known dropdown viewport issue belongs to its separate task, not this new capability.

Retrieved reference HTML identifies default, vertically centered, slide-from-top, YouTube video, switching between two modals, fullscreen, small/large/extra-large sizes, two long-content scrolling options, backdrop behavior, selectable entrance animations, vertical/horizontal onboarding multistep and form variants, and a transparent modal. These are markup observations; rendered behavior and exact configuration have not yet been verified.

## Objective
Provide a directly viewable modal showcase reproducing the reference's relevant visual variants and modal interactions, with reliable focus, dismissal, scrolling and safe demonstration content.

## Scope
### In scope
- One HTML showcase page covering the reference's standard and extended modal examples.
- Placement, size/fullscreen, long-content scrolling, backdrop, animation, video and modal-switching demonstrations.
- Vertical/horizontal onboarding examples, including multistep navigation and form layouts, and transparent modal treatment.
- Accessibility, responsive behavior, motion preferences and supporting authorized local resources.

### Out of scope / Non-goals
- Real authentication, customer onboarding, form submission, profile saving or backend/API/database operations.
- Rebuilding unrelated Materio navigation/customizer features or retrofitting modals into every existing page.
- A second SweetAlert confirmation system or unrelated component fixes.
- BA, technical design, source code and tests during task-create.

## Requirements
1. Deliver a standalone HTML page with clearly labeled standard and extended modal examples matching the verified reference inventory.
2. Standard examples must include default, vertically centered, slide-from-top, video, switching between two dialogs, fullscreen, small/large/extra-large sizes, long-content scrolling options, backdrop behavior and selectable entrance-animation examples.
3. Extended examples must include vertical and horizontal onboarding presentations, each with a multistep slider and a form example, plus the transparent modal shown in the reference. Verify exact step count, controls, layout and visibility before finalizing.
4. Modal launch controls open the associated dialog; title, body, close controls and optional footer reflect the selected example. Switching to another modal hides the first rather than leaving unintended stacked dialogs or duplicate backdrops. Returning between the two examples must remain reliable.
5. Provide explicit close controls and appropriate keyboard/focus behavior. On opening, focus enters the dialog; Tab/Shift+Tab remain within the active modal; inactive background content cannot be interacted with; closing returns focus to the appropriate visible launcher or defined fallback. Closed dialogs must not remain tabbable.
6. Verify the reference's outside-click, Escape and static-backdrop behavior for each applicable example. Implement the demonstrated distinctions with accessible explicit exit controls; do not infer a static-backdrop policy from the label alone.
7. Fullscreen and size variants must visibly differ as intended. Long-content examples must demonstrate the reference's distinct page/dialog-body scrolling patterns without losing access to close/footer controls on narrow or short screens. Restore page scroll/interaction state after close.
8. Selectable animations must reflect the verified reference choices and remain safe under repeated activation or rapid switching. Respect reduced-motion preferences, including onboarding slide transitions, without disabling usable content or dismissal.
9. Video example must use an authorized source and stop playback/remove active media when closed. Do not start remote video/audio unexpectedly on page load. Verify whether an external embed is necessary or a local/original media substitute is appropriate, and report any substitution or dependency limits.
10. Onboarding Previous/Next/Skip and step indicators must remain synchronized with the current step where present. Form fields must have labels and allow editing; Save/Submit actions are demonstration-only, produce an observable harmless result if needed, and must not transmit entered data. Exact reset/preservation behavior between opens requires reference verification or explicit documented assumptions.
11. Inspect rendered reference before finalizing backgrounds, typography, spacing, borders, shadows, imagery, dimensions, placements and transparent treatment. Use existing local Font Awesome instead of SVG for custom icons, and authorized/original illustrations rather than assuming commercial demo assets may be copied.
12. Preserve existing repository work and avoid unnecessary dependencies. Modal focus/backdrop/scroll handling must coexist with the page's mobile navigation drawer and any reused slider assets without corrupting either component's state.

## Constraints
- Deliver ordinary HTML/CSS/JavaScript suitable for the existing static project; no backend or framework-only application requirement.
- Form controls, Save/Submit labels and video examples do not authorize real data submission, authentication, media uploads or external account actions.
- No specific modal/animation library is mandated. Select dependencies only after examining existing assets and verified reference behavior.
- Keep this original task brief immutable; later skills own their respective artifacts.

## Acceptance Criteria
1. The page is directly viewable and includes all standard/extended modal families in Requirements 2–3, with inventory verified against the reference.
2. Every launcher opens its intended dialog; switching/back controls leave exactly the intended modal active and do not accumulate backdrops or scroll locks.
3. Open dialogs have meaningful accessible names, visible keyboard focus, functioning close controls, focus containment and appropriate return focus. Background and hidden dialogs do not accept unintended interaction.
4. Outside-click/Escape/static-backdrop behavior matches verified reference semantics or explicitly reported accessibility improvements; every modal retains an accessible exit path.
5. Centered/top/fullscreen and size variants are visually distinguishable. Both long-content scrolling patterns remain usable at desktop/mobile/landscape sizes.
6. Entrance-animation selection and onboarding transitions work consistently under repeated opens/rapid navigation and reduced motion, without stale callbacks or hidden focus targets.
7. Video loads only as appropriate for its example, does not unexpectedly play at page load and stops after dismissal. Authorized source/substitution and external-loading limits are documented.
8. Vertical/horizontal onboarding step navigation and indicators remain synchronized. Forms are usable and labeled, and demonstration Save/Submit actions do not send entered data.
9. Closing/switching/reopening restores correct page scrolling, focus and background interaction, including viewport changes and coexistence with the mobile drawer.
10. Required local resources load without errors affecting functionality; reference comparison, substitutions, actual tests and limitations are reported. Existing unrelated component behavior remains intact.

## Validation Expectations
- Inspect reference render and exercise each launch target, scrolling mode, animation selection, backdrop/Escape path and modal-switch pair.
- Verify keyboard containment/return, accessible naming, hidden content focus exclusion and background interaction blocking.
- Exercise onboarding steps/indicators/Skip and harmless form submission; verify no data transmission.
- Check video start/stop lifecycle and remote-resource failure behavior if an embed is selected.
- Test rapid open/close/switch, resize, narrow/short landscape screens, reduced motion, page-scroll restoration and drawer integration.
- Compare desktop/mobile visuals and report differences in imagery/fonts/icons. Run relevant existing regression tests if shared assets change. No application tests or browser validation were run during task-create.

## Assumptions and Open Questions
- Assume root-level modals.html, matching the established component-page convention; filename/location were not specified.
- Assume default light styling, English example text and static demo content; no business onboarding workflow is implied.
- Reference inventory, exact animation choices, onboarding step count/state reset, backdrop/Escape semantics and video source require task-analyze verification before dependent design.
- Assume only one active demonstration modal at a time, with switching rather than arbitrary nested/stacked modals, consistent with observed toggle-between examples.
- If original imagery/video is unavailable for authorized reuse, choose an authorized/original substitute and report the difference rather than silently copying commercial assets.
- Standard and extended variants form one coherent modal-showcase capability. No blocking clarification is needed to create this brief; material uncertainties discovered later must be recorded and resolved before dependent implementation.
