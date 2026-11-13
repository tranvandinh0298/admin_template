# Technical Plan: Modals showcase
**Task ID:** 20261109_materio_modals
**Status:** Ready
## References
Task/BA for this ID; BA Ready for technical design. AGENTS.md/snapshot policy. Reference ui-modals.html inspected live in Chrome:19dialogs,3steps per onboarding slider,static backdrop remained visible after Escape in observed test. Animation selector inventory retrieved from reference HTML.
## Technical Context and Current Behavior
Static repo with shared shell/buttons/fonts; preserve all unrelated edits. No modal source/plan. Prior dropdown edge bug separate. Native HTML dialog supported by validation Chrome; no framework needed. Animate.css4.1.1 MIT supplies reference-named animations; local assets/license pinned. External video is opt-in nocookie embed of reference video, no autoplay.
## Requirements / Acceptance Criteria Mapping
AC-01:19dialogs/18launchers and correct IDs tested. AC-02:native showModal focus containment/inert top layer plus explicit return focus tests. AC-03:static cancel prevented, normal backdrop/cancel closes; switching closes current before show next, root launcher retained. AC-04:size/position/scroll CSS geometry. AC-05:animation selector44+ options, reduced motion override. AC-06:opt-in iframe src only after click, remove on close. AC-07:two3step onboarding sliders and twoform variants, local state and prevented submissions. AC-08:scroll lock snapshot/restore,drawer integration,resources/regression.
## Proposed Approach and Alternatives
Native dialog vs Bootstrap/SweetAlert: native provides top-layer/inert/focus with minimal dependency, chosen. Static HTML dialog content inside a reusable .modal-surface; page launcher data-open IDs. Active record stores root launcher and original body overflow; switch retains launcher, only one dialog. close event removes iframe, restores overflow and root focus; switching suppresses restoration until new modal opens. Capture Escape in dialog so drawer document handler cannot also fire. preventDefault cancel for static, normal cancel handled through close controller. Backdrop uses pointerdown/up outside dialog rectangle only to avoid closing on drag from inside.
All dialogs named via aria-labelledby; close buttons names, focus heading tabindex=-1 at opening; keyboard trap native verified Tab/ShiftTab; background inert browser behavior. Dialog closed descendants not tabbable. Short screen normal dialog scrolls whole panel, scrollable variant has fixed max-height flex body scroll; fullscreen viewport dimensions. Single active dialog tested during switching/repeated opens.
Onboarding originals CSS art,3steps hidden attr,Previous/Next and indicators aria-current; reset step0 each open,fields retain page-session values. All forms submit prevented, inline status only. Transparent modal transparent outer surface but legible text/backdrop. Animation whitelist from reference; invalid names fallback fadeIn; first animate__fade mapped fadeIn (not an Animate.css entrance). Reduced motion removes all custom animation, also onboarding. Video iframe authorized YouTube embed from ref, user load only; no tests contact external server (route mocked).
## Files and Components
New modals.html,assets/css/modals.css,assets/js/modals.js,assets/vendor/animate/animate.min.css,LICENSE,tests/modals.spec.js. Metadata under .task-backups/20261109_materio_modals. No existing source/config changes.
## Implementation Steps
Record absence/manifest before writes. Retrieve authorized animation assets; inspect reference screenshot. Build19dialogs/launchers. Native controller/media/step handling. Focus/backdrop/form tests and viewport screenshots. Snapshot further iterations before fixes. Final hashes/validation then read-only task-review.
## Testing Strategy
Loopback allowlist/proper MIME plus fileURL. Open every launcher,one active dialog,keyboard focus trap/return,static versus normal cancel/backdrop,switch pair root focus,full/size geometry,scrolling,3step indicators,forms no network,iframe opt-in/removal using intercepted embed,no runtime errors. Motion/repeated opens/resize at320/390/568/768/1199/1200/1366/1920; drawer integration. Syntax/layout regression/screenshots. Manual screen-reader/physical devices not implied.
## Risks, Dependencies and Rollback Considerations
Nested drawer and native top layer require Escape isolation. Page overflow restoration exact snapshot. Video remote availability uncertain; opt-in error guidance; no autoplay. Images replaced original CSS art. Record absence/iteration hashes; rollback only explicit approval/divergence checks. Backup Git/deploy exclusion unconfigured; no auto config/staging/deployment.
## Validation Checklist
- [ ]19dialogs/18launchers;focus/inert/switch/scroll.
- [ ]Static/backdrop/video/forms/onboarding.
- [ ]Animations/motion/resize/geometry.
- [ ]Resources/screenshots/regression/hashes.
## Open Questions / Decisions
Root modals.html/light English/original art nonblocking assumptions. Reference static Escape observed retained; explicit close always available. Onboarding3steps confirmed,reset first step assumption. Native dialog/local Animate.css chosen; video embed opt-in privacy improvement. No blocker; Ready is not BA Approved.
