# Rollback manifest:20261109_materio_dropdowns
Timestamp 2026-11-09T16:23:20.7523063+07:00
Iteration1 before writes. Existing source untouched.
| dropdowns.html | absent | create | SHA256 n/a |
| assets/css/dropdowns.css | absent | create | SHA256 n/a |
| assets/js/dropdowns.js | absent | create | SHA256 n/a |
| assets/vendor/popper/popper.min.js | absent | create | SHA256 n/a |
| assets/vendor/popper/LICENSE | absent | create | SHA256 n/a |
| tests/dropdowns.spec.js | absent | create | SHA256 n/a |
Reference/desktop/mobile screenshots absent. No staging/deployment/config edits. Backup exclusion unconfigured; test server excludes backups.
Iteration2 pre-edit JS SHA256 9BD7981BCBA7F0BBFCFF37F78A75F0B521B55A0F2DA950766E7D75761F964C9D: preserve manual/inside modes on outside pointer focus; dismiss after Tab leaves instead.
Iteration3 test SHA256 7DB632B27F714698081E2177D9A2CC3A668D0D87928DC869E6BE4279647B0FDA: hover pointer enter opens before click toggles closed; use native Enter for uniform all-trigger check, pointer tested modes separately.
Iteration4 JS SHA256 5E2900227FCC6A3D5952208F5AD29360AA5BF44E03E9DBF9ABBA9B7ED1D92E85: restore focus after selectable item closes, avoid focus left in hidden menu.
Validation reference.png and menu-open.png absent before capture.

## Implementation validation
Timestamp 2026-11-09T16:27:29.7149735+07:00
Local Popper2.11.8 UMD and LICENSE.md from cdn.jsdelivr.net/npm/@popperjs/core@2.11.8; no Bootstrap/SweetAlert production dependency.
PLAYWRIGHT_MODULE=<TEMP>/codex-buttons-validation/node_modules/playwright node tests/dropdowns.spec.js PASS Chrome157.0.8103.38:51 triggers, keyboard/focus,4close modes,form no network,split actions,sidebar and drawer two-stage Escape,10widths,viewport position,HTTP/file,no runtime/resource errors. Supplemental hover and item focus recovery PASS after narrowing overly broad test locator.
node tests/layouts.spec.js PASS36viewport cases,66resize points,drawer touch/keyboard/focus/backdrop/resize,6file URLs,geometry,no errors. Syntax checks and git diff --check passed.
Reference viewport and implementation desktop/mobile plus open-menu images inspected. Differences: original shell/font/icons, sections split into cards; corrected inverted inside/outside labels; no animation. No manual screen-reader, physical touch, Firefox/Safari verification. No shared source/config changes, no staging/commit/deployment; backup exclusion unconfigured as previously reported.
## Final SHA256
| dropdowns.html | created from absent | D0A004876F44306D6FB71BB6F12FEA6E7BDEE02A4820A08DAB9D29BFB162D78A |
| assets/css/dropdowns.css | created from absent | 23072390380F4FDAABD501F1CB12F803CA3EABDBD45EAF802F73E606739FC8A7 |
| assets/js/dropdowns.js | created from absent | 504127D54C94760AA60129B78A6635155BB9248C268F18E00626AE24A1A126DE |
| assets/vendor/popper/popper.min.js | created from absent | C212F4B505A86352AED62B24A8F16F999F821ECBE6456C7F3C8A04BC87968782 |
| assets/vendor/popper/LICENSE | created from absent | BF67E2C9B7974543BB18CED3A0B37F53729AAFF953B442DD89A3ADAF90FD93E8 |
| tests/dropdowns.spec.js | created from absent | 60BA7D2066C4D11C3E1D96C2B250082C840B0991D3B0B32A38D8F85BD0F64FA5 |
