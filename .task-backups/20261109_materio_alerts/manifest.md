# Rollback manifest: 20261109_materio_alerts
Timestamp 2026-11-09T15:48:30.7004015+07:00
Iteration 1 before writes. Existing application files preserved.
| alerts.html | absent | create | pre-change SHA256 n/a |
| assets/css/alerts.css | absent | create | pre-change SHA256 n/a |
| assets/js/alerts.js | absent | create | pre-change SHA256 n/a |
| tests/alerts.spec.js | absent | create | pre-change SHA256 n/a |
Validation reference.png, desktop.png and mobile.png absent before capture. No staging/deployment. Backup Git/deployment exclusion previously unconfigured; no config auto-edited. Test server will exclude backups.
Iteration 2 test before edit SHA256 048C1CE8A3A1CB1FBC6FB44984AC706C49071BC9212D99DAB133AD491AA971B6. Isolation test compared duplicated message text across variants; use exact owner element disconnection instead. Application unchanged.
Iteration 3 alerts.html pre-edit SHA256 384F3D929A17ECEF18E7C0FB0F52BFDF1A650F4591EC1BB0A396F289071D265E. Resource checks caught inherited unnecessary buttons.css link because original removal did not match line endings; remove link with whitespace-tolerant regex.
Iteration 4 alerts.html pre-edit SHA256 75614C207E7201E438781B7C7282EB1F7A2EBFB1CBA6452A8189E48317988C8A. Visual inspection caught inherited Collapse active item; keep only Alerts active.

## Final validation
Timestamp 2026-11-09T15:51:59.0674457+07:00
Reference desktop screenshot inspected: six groups, local icon equivalents, heading separators, 10 close controls; measured dismissal transitionDuration 0s and DOM removal. Immediate removal matches reference.
PLAYWRIGHT_MODULE=<TEMP>/codex-buttons-validation/node_modules/playwright node tests/alerts.spec.js PASS Chrome 157.0.8103.38: six groups, 38 messages, ten isolated dismissals, pointer/Enter/Space, next/previous/heading focus, repeated removal, reload, reduced motion, ten widths, long content, drawer, local font, HTTP/file loads; no runtime/resource errors. Final rerun passed after active-navigation correction.
Same runtime node tests/layouts.spec.js PASS: 36 viewport cases, 66 resize points, menu touch/keyboard/focus/backdrop/resize, six file URLs, geometry, no errors. Shared source unchanged; other component suites not rerun.
node --check assets/js/alerts.js and node --check tests/alerts.spec.js passed; git diff --check passed for tracked diffs.
Reference desktop and implementation desktop/mobile screenshots visually reviewed. Retained differences: original shell/logo/system font and original prose; darker text on light alerts and dark text on bright solid success/warning/info for readability. No formal contrast audit, manual screen-reader, Firefox/Safari or physical-device validation claimed. Reference mobile screenshot not captured. Stored implementation screenshots predate correction of duplicate active navigation; final HTML keeps only Alerts active.
Iterations: test compared duplicate prose rather than node ownership (corrected); resource check caught inherited unnecessary buttons.css (removed); visual check caught duplicate active menu state (corrected). Exact snapshots retained.
No task brief, BA, technical plan, shared source or config modifications. No staging, commit or deployment. Backup Git/deployment exclusion remains unconfigured; keep backups out of future staging/deployment.
## Final SHA256 — verify divergence before approved rollback
| alerts.html | created from recorded absence | 0CE3CDB334B36C4F280BF2A08EEF401FAC0187BE566B645E578C1A94636D1ACE |
| assets/css/alerts.css | created from recorded absence | 8499CD3B3FA5ED135CBB2EBF15AC5241AAADCDE81DB8602EE98AA2447BF80113 |
| assets/js/alerts.js | created from recorded absence | E80C6C309F319BA0AC2971A6F46EFE096B8296357205C187443D3F9FFE14BA94 |
| tests/alerts.spec.js | created from recorded absence | E529667CC5F1E689E6918183836B7D7625873950F078267223BBE7AD977FD8CA |
