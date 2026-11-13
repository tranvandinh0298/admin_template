# Technical Plan: Navbar showcase
**Task ID:** 20261109_materio_navbar
**Status:** Ready
## References
Task/BA this ID,BA Ready. AGENTS.md/snapshot rules. Reference live Chrome:15showcase navbars after excluding shell,collapse hidden at991 and flex at992. Navbar Theme has no theme switch.5forms observed. Existing dropdown edge issue not reused.
## Technical Context and Current Behavior
Static repo,shared shell/buttons/fonts/external Playwright. Preserve all existing edits. No Navbar source. Existing dropdown JS scope cannot be reused safely. No new library needed.
## Requirements / Acceptance Criteria Mapping
AC-01:15navs via static markup/counts. AC-02:per-nav disclosure and992media state. AC-03:scoped menu open/close,arrow keys/Escape/hover alternative. AC-04:2mega groupedlinks/list/form;prevent all submissions. AC-05:demo actions/disabled/native inputs. AC-06:8colors/theme,Font Awesome/focus. AC-07:responsive flow menus below992;desktop fixed menu collision clamp/flip. AC-08:drawer coexistence and layout regression.
## Proposed Approach and Alternatives
New navbar.html isolated navbar.css/js. Reuse layout/buttons/font styles only,not previous component controllers.15navs:example;3supported content;2mega;8colors;theme. Responsive toggles target unique panel IDs,nav landmarks distinctly named. Below992 panel hidden unless open;above always visible with aria consistent. On breakpoint change close floating menus and reset disclosure; if focus would hide,return toggle. Menu below992 in flow,desktop fixed position measured/clamped to viewport,scroll if short. Menus close on outside,item,Escape or Tab leaving;form editing does not close. No application-menu roles on mixed content. Buttons native,aria-controls/expanded. ArrowDown/Up menu items,Home/End;Escape capture prevents shell double handling when applicable. Hover only fine pointer;click always available.
Mega contains Applications,Useful Links,List Group and labeled email/password/remember/signin. Form/demo links preventDefault,status text only. Disabled aria-disabled and tabindex=-1 with event guard. No requests. Safe sample anchor hrefs #demo prevented; navbar brand non-destructive. Theme neutral styling only. Readable text foreground on colored surfaces;dark text on warning/info/success where needed. Long text wraps,no global overflow masking.
Alternative Bootstrap bundle or shared Dropdown refactor rejected as unnecessary scope/dependency. Fixed positioning custom limited to small menu/mega,with explicit edge tests. One open menu at a time avoids overlap;navbar collapse states independent. No animations needed,reduced motion naturally immediate.
## Files and Components
New navbar.html,assets/css/navbar.css,assets/js/navbar.js,tests/navbar.spec.js;metadata .task-backups/20261109_materio_navbar. No shared source/config edits.
## Implementation Steps
Record absence/manifest. Inspect reference screenshot. Build15navs/unique IDs/content. Scoped controller+forms/keyboard. Test every navbar,992boundary,menus/forms/drawer. Snapshot before additional fixes. Final hashes/tests then read-only review.
## Testing Strategy
Loopback allowlist/MIME,HTTP/file.15navs,collapse isolation,modes/keyboard/focus,allforms no requests,disabled inactive,hover path. Widths320/390/568/768/991/992/1199/1200/1366/1920/short heights,mega bounds,longlabels/resize. Native Tab hidden exclusion. Screenshot reference/desktop/mobile. Syntax/layout regression,failed resources/pageerrors. No physical touch/manualscreenreader or other browser claims.
## Risks, Dependencies and Rollback Considerations
Desktop menu placement must clamp both axes;mobile flow avoids horizontal collision. Shared drawer operates at1200 distinct from navbar992;scope IDs/events. Preserve credentials in DOM only no logging/network. No newproduction dependency. Backup exclusion unconfigured,no auto config/staging/deployment. Record absent/final hashes;rollback needs explicit approval/divergence checks.
## Validation Checklist
- [ ]15examples/8colors/theme.
- [ ]992collapse,isolation,keyboard/hover/menu.
- [ ]Forms/disabled/no network.
- [ ]Mega responsive/drawer/geometry/resources.
- [ ]Screenshots/tests/regression/final hashes.
## Open Questions / Decisions
Q-002 resolved breakpoint992 andTheme styling via reference. Q-001rootnavbar.html/lightEnglish,Q-003harmlessdemo nonblocking. Original grouped content/Font Awesome substitutes accepted assumptions. Initial plan ready,notBAapproval. No previous plan history.
