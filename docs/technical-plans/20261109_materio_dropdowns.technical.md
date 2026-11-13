# Technical Plan: Dropdown showcase and inline sidebar submenu
**Task ID:** 20261109_materio_dropdowns
**Status:** Ready
## References
Immutable task and BA under tasks/ and docs/business-analysis/ for this ID; BA Ready for technical design. Reference ui-dropdowns.html; official https://getbootstrap.com/docs/5.3/components/dropdowns/ . Repository rules/snapshot policy apply.
## Technical Context and Current Behavior
Static repo, shared shell/button styles, Font Awesome, external Playwright available. Preserve modified layout source and earlier untracked artifacts. Reference live inspection found 56 triggers including shell, forms outside mode, manual Escape closes; labels Clickable outside/inside reversed relative to data values. New page will name modes by actual semantics. No Dropdown source exists.
## Requirements / Acceptance Criteria Mapping
AC-01:51 showcase triggers including24 colored/split,4extras,3alignment,4sizes,4directions,2centered,4content,2position options,4close modes. AC-02: native button, hover pointer path and click/keyboard. AC-03: Popper placements, responsive alignment, offset/reference. AC-04: form preventDefault and demo status only. AC-05: mode controller plus Escape. AC-06: keyboard, hidden/focus and resize tests. AC-07:inline disclosure and drawer capture Escape. AC-08: scoped CSS, viewport boundary checks/resources/screenshots/regression.
## Proposed Approach and Alternatives
Use local pinned @popperjs/core2.11.8 UMD + license, custom small controller. Alternative Bootstrap bundle adds unrelated plugins; hand positioning risks edge bugs. No Bootstrap CSS or shared source refactor.
Generate static dropdowns.html from existing shell; own dropdowns.css/js and tests. Trigger native button aria-expanded/controls; menu uses plain lists/buttons or form, not forced role=menu. Menus fixed-position Popper with flip/preventOverflow, viewport padding8, max-height viewport minus16 and max-width available; update on resize and responsive alignment at992. Center placement bottom/top, side placements left/right; reference option anchors to full split group. Offset option applies [12,20].
One floating menu open at a time. Default closes outside/item; inside only on item; outside only outside; manual toggle/Escape. Opening another trigger closes previous. Form inputs never close on edit; submit safe demo status no requests. Hover only for fine hover-capable pointers; click/keyboard always available. Arrow keys cycle menu items, Home/End, Escape closes restores trigger, Tab natural with close after focus leaves. Hidden menus excluded from focus. No popup actions beyond status updates.
Sidebar one-level inline children, button parent, local links; hidden attr and aria sync. Capture Escape while focused submenu closes child first and stops event before shared drawer handler; next Escape closes drawer. Existing drawer focus trap dynamically queries visible descendants. Do not change shared script. No animation required, reduced motion safe.
## Files and Components
New dropdowns.html, assets/css/dropdowns.css, assets/js/dropdowns.js, assets/vendor/popper/popper.min.js, LICENSE, tests/dropdowns.spec.js. Metadata under .task-backups/20261109_materio_dropdowns only. Existing brief/BA/plan/shared source unchanged during implementation.
## Implementation Steps
Record absent paths and snapshot policy. Retrieve pinned Popper. Inspect reference screenshot. Build51 examples/sidebar and scoped CSS. Implement modes, keyboard, positioning, hover/form safety. Run focused tests, visual inspect and layout regression, snapshot further iterations. Final hashes then read-only review; fixes require separate implementation iteration.
## Testing Strategy
Loopback allowlist, MIME types, HTTP/file, resource errors. All51 open/close, modes inside/outside/manual/Escape, native form editing/no network, split separation, hover path, keyboard/focus, sidebar/drawer two-stage Escape and local links. Widths320/390/568/768/991/992/1199/1200/1366/1920, landscape, viewport menus/resize. Syntax, screenshots, existing layout suite. No manual screen-reader or physical touch claims.
## Risks, Dependencies and Rollback Considerations
Popper dependency pinned local MIT; license retained. Collision handling avoids clipped menu. Shared event order drawer Escape handled capture; no credential transmission. Preserve all unrelated edits. Backup exclusion previously unconfigured; no config auto edits/staging/deploy, report limitation. Absent paths/final hashes permit divergence checks before explicitly approved rollback.
## Validation Checklist
- [ ]51 triggers and six-color coverage.
- [ ]Modes, keyboard, form, split and hover.
- [ ]Sidebar/drawer and mobile boundaries.
- [ ]Position/focus/resources and screenshots.
- [ ]Tests/regression/hashes and read-only review.
## Open Questions / Decisions
Q-001 inline sidebar assumption retained; no blocker. Q-002 live evidence resolves manual Escape and reversed labels; modes labeled by behavior. Q-003 root dropdowns.html/light English nonblocking. Plan ready, not BA approval. Scoped controller/no new framework selected; no earlier plan history.
