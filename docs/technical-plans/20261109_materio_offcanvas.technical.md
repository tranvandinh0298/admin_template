# Technical Plan: Materio Offcanvas
**Task ID:** 20261109_materio_offcanvas
**Status:** Ready
## References
Immutable task and BA Ready for technical design. Live Chrome: nine panels; responsive trigger visible1199/hidden1200; side400px; transition transform250ms ease-in-out; Start dialog/aria-modal true. Existing layout drawer uses inert, body.menu-open and document Escape/Tab.
## Technical Context and Current Behavior
Static component pages with local fonts/button styles; no new dependencies. Preserve unrelated tracked edits and previous tasks. Existing modal controller not reusable for nonmodal scrolling example.
## Requirements / Acceptance Criteria Mapping
AC01 nine panels/static groups; AC02 edge CSS/dark/transitions; AC03 per-panel scroll/backdrop settings/restoration; AC04 media1200 reset; AC05 labels/inert/focus/Tab/Escape; AC06 cancellation-safe cleanup/geometry/reduced-motion; AC07 safe status demo/local resources/shell; AC08 screenshots and actual test reporting.
## Proposed Approach and Alternatives
New offcanvas.html and scoped CSS/JS. Panels as body siblings of shell with explicit dialog role while open; aria-modal only backdrop configurations. Hidden after exit transition; focus returns immediately to launcher on final cleanup. Modal background siblings inert with exact prior inert states restored. Nonmodal scrolling panel leaves background accessible. One active panel; switching finishes previous cleanup. Transition token/timer prevents old exit callback closing reopened panel. Snapshot inline body overflow exactly; only lock non-scroll variants. Close with X,Cancel,Escape,backdrop; Continue only status. Responsive closes immediately at1200, hides trigger and shows informational block. Desktop responsive title shown inline; no hidden modal focus at desktop.
One active overlay: opening panel closes existing shell drawer through its close button; clicking sidebar toggle in nonmodal mode finishes panel first in capture phase. Modal backdrop/inert blocks shell. No shared controller mutation. Offcanvas z-index above shell. Focus trap modal only; guard focusin; Tab boundary cycling. Dark panel custom palette. Native form-free content; Font Awesome close icon.
Alternative native showModal rejected for body-scroll-enabled and nonmodal configuration mismatch; full Bootstrap dependency unnecessary. Match sample paragraph and Continue/Cancel; responsive body absent desktop. Horizontal sizes400px capped100vw; top/bottom30vh with internal scroll and header reachable.
## Files and Components
New offcanvas.html,assets/css/offcanvas.css,assets/js/offcanvas.js,tests/offcanvas.spec.js; task backup manifest/screenshots only.
## Implementation Steps
Record absent paths; build page and controller; test all examples and transitions/resize/drawer; snapshot before refinements; final hashes and validation; read-only review.
## Testing Strategy
Chrome HTTP allowlisted assets and file URL; all nine examples/dismissals/focus/scroll/backdrop; mobile/desktop1200 boundary; rapid close/reopen/switch; reduced motion; long body; geometry320/390/568x320/768/1199/1200/1366/1920; sidebar interaction; request/runtime errors. Layout regression. Screenshot desktop/mobile/open panels and compare reference. No physical touch/manual screenreader/Firefox/Safari claims.
## Risks, Dependencies and Rollback Considerations
Preserve existing body overflow/inert states, prevent stale timers; sidebar asynchronous/media handling must not collide. Absent records then final hashes; rollback needs explicit authorization/divergence checks. Backup exclusion unconfigured, do not auto edit config/stage/deploy.
## Validation Checklist
Tests and hashes recorded in implementation manifest; read-only review reports unmet or unverifiable criteria.
## Open Questions / Decisions
No blocking business questions. Root filename/lightEnglish assumptions. Responsive inline content follows reference; foreground/icon substitutions local Font Awesome. Only one overlay at once as technical safety choice.
