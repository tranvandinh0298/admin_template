# Rollback manifest: 20261109_materio_accordion
Timestamp 2026-11-09T14:49:26.5957969+07:00
Iteration 1 pre-change: all four application/test paths absent. No existing files changed.
| accordion.html | absent | create | original SHA256 n/a |
| assets/css/accordion.css | absent | create | original SHA256 n/a |
| assets/js/accordion.js | absent | create | original SHA256 n/a |
| tests/accordion.spec.js | absent | create | original SHA256 n/a |
Validation reference.png, desktop.png, mobile.png absent before capture. Backups excluded from test server; no deployment or staging. Git/deployment backup exclusion previously unconfigured; no config automatically changed. Preserve all unrelated modified/untracked work.
Iteration 2 test pre-edit SHA256 ED6F855875C33335FEB66F7780A14FF21E9F83478C5477F339E8D16F3307AEC9: first test clicked initially open item then incorrectly expected open. Close initial item before test loop; application unchanged.

## Final validation
Timestamp 2026-11-09T14:52:49.1080981+07:00
Plan refinement: breakpoint 768px rather than provisional 992px, based on reference rendered at 768px (two 356px groups). Reference all four sibling transitions exercised; first group toggle-close verified in preceding analysis.
Commands: PLAYWRIGHT_MODULE=<TEMP>/codex-buttons-validation/node_modules/playwright node tests/accordion.spec.js with ACCORDION_SCREENSHOTS pointing to task validation directory. PASS Chrome 157.0.8103.38: 4 variants/12 items, initial 1/3/1/3, pointer/Enter/Space, group isolation, focus recovery/inert panels, rapid toggles, resize, reduced motion, long content, 10 widths, mobile drawer, local fonts, HTTP/file loads, no runtime/resource errors.
Supplemental in-memory browser check PASS: reduced-motion change during animation settles heights; Tab excludes a focusable fixture in hidden content.
Same external module, node tests/layouts.spec.js PASS: 36 viewport cases, 66 resize points, drawer touch/keyboard/focus/backdrop/resize, six file URLs, geometry, no errors. Button suite not rerun because shared assets unchanged.
node --check assets/js/accordion.js and node --check tests/accordion.spec.js PASS. git diff --check PASS for tracked diffs.
Visual inspection: reference desktop full-page screenshot compared with implementation desktop and mobile. Differences retained: original shell/logo/system font, Font Awesome substitutes, original short demo prose and minimal navigation. Reference mobile screenshot not captured; mobile layout geometry was measured in preceding analysis. No Firefox/Safari/physical-device verification.
First test attempt failed because it clicked initial open item then expected open; test normalized state in iteration 2, no application fix required.
No existing source, brief, BA, technical plan or configuration changed. All application/test paths created from recorded absent state. No staging, commit, deployment or push. Backup Git/deployment exclusion remains unconfigured, as previously reported; omit .task-backups from future staging/deployment.
## Final SHA256 — verify divergence before any approved rollback
| accordion.html | created | 02C83CF409C2D8E830215BB837B5C864D94DC530BED1131CCC77620224E1E157 |
| assets/css/accordion.css | created | FAF7830F3E9359BD731C40B1068663BB6FB6BB5FEB0F393AEBCD974D58D0DB40 |
| assets/js/accordion.js | created | 23D481365E7A2BDC436016BF7A0F7CDF27172B10979D36252F972B97E9366D6C |
| tests/accordion.spec.js | created | 7C542A58DFDB6A0B410DA8912BC733AC33D9126F88AF3E2D2D965DB2ADC63ABA |
