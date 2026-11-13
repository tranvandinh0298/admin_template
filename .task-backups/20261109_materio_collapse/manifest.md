# Rollback manifest: 20261109_materio_collapse
Timestamp 2026-11-09T15:36:27.7802699+07:00
Iteration 1 pre-write. Existing application files unchanged.
| collapse.html | absent | create | pre-change SHA256 n/a |
| assets/css/collapse.css | absent | create | pre-change SHA256 n/a |
| assets/js/collapse.js | absent | create | pre-change SHA256 n/a |
| tests/collapse.spec.js | absent | create | pre-change SHA256 n/a |
Validation reference.png, desktop.png, mobile.png absent. Backup Git/deployment exclusion previously unconfigured; no config automatically changed; no staging/deployment. Test server will exclude backups. All unrelated work preserved.

## Validation
Timestamp 2026-11-09T15:39:08.2760763+07:00
Reference screenshot visually inspected. Reference both-toggle equal states checked: 0->2->0 visible panels; horizontal first click closes. Mixed states verified during preceding analysis.
PLAYWRIGHT_MODULE=<TEMP>/codex-buttons-validation/node_modules/playwright node tests/collapse.spec.js with COLLAPSE_SCREENSHOTS=task validation directory: PASS Chrome 157.0.8103.38, initial states, all six triggers, Basic sync, four combined state transitions, Enter/Space and unchanged link URL, intermediate width animation, focus/inert, rapid toggles, resize, reduced motion, ten widths, long content, drawer, HTTP/file resources and no runtime errors.
Desktop/mobile implementation screenshots reviewed against reference desktop appearance. Original shell/logo/system font, short original demo prose and compact navigation intentionally retained. No reference mobile screenshot, Firefox/Safari or physical-device checks.
node --check assets/js/collapse.js and node --check tests/collapse.spec.js passed. git diff --check passed for tracked diffs. No shared source changed; button/Accordion suites not rerun.
No original brief, BA, plan or config edits; no staging/commit/deployment. Existing backup exclusion limitation remains; omit backups from staging/deployment.
## Final SHA256
| collapse.html | created from absent | 77BFCA6CFD7F08D49A0A245BA11155B6F3D27170D5CA497D45DEA75A44EAD38C |
| assets/css/collapse.css | created from absent | 2105668E2C753CB06D7CBDB7F0E56626B9C6D3B9EAAA884254AEAA605B3F9A26 |
| assets/js/collapse.js | created from absent | 445FE3CB9CE7141DCB6F3FC6E064130E99E380EA68A1CC292E723865F15A57BF |
| tests/collapse.spec.js | created from absent | 2BD3A4FAACDF40BACC0820B30FE943273314AF2C3B1462CFA7D5455763693078 |
Regression command with same external PLAYWRIGHT_MODULE: node tests/layouts.spec.js PASS Chrome 157.0.8103.38, 36 viewport cases, 66 resize points, menu touch/keyboard/focus/backdrop/resize, six file URLs, variant geometry, no resource/runtime errors. No implementation iterations needed after initial source creation.
