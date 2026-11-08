# Rollback manifest: 20261108_materio_layouts
Timestamp: 2026-11-08T23:47:48.9587973+07:00

## Iteration 1 — pre-change inventory
| Path | Original existence | Operation | Backup | Pre-change SHA-256 |
| --- | --- | --- | --- | --- |
| layouts/default_layout.html | absent | create | not applicable | absent |
| layouts/horizontal_layout.html | absent | create | not applicable | absent |
| layouts/boxed_layout.html | absent | create | not applicable | absent |
| layouts/compact_layout.html | absent | create | not applicable | absent |
| layouts/single_column_layout.html | absent | create | not applicable | absent |
| layouts/blank_layout.html | absent | create | not applicable | absent |
| assets/css/layouts.css | absent | create | not applicable | absent |
| assets/js/layouts.js | absent | create | not applicable | absent |
| tests/layouts.spec.js | absent | create | not applicable | absent |

Initial absent records are immutable. No existing application files are being modified.
Git ignore rule for .task-backups is currently absent. No configuration is changed automatically; backups must not be staged or deployed. Test server will allow only application paths. No deployment or staging is performed.
Rollback requires explicit approval and comparison with final hashes; preserve unrelated files and documents.

## Iteration 2
Browser test found menu focus remained on body during visibility transition. Pre-edit CSS stored at iterations/02/assets/css/layouts.css; SHA-256: 0384B949B0D50FA9A66888F31DD77723CB9F1D2F6F5EF8FD213FF73478EF21D0. Remove visibility animation so opening makes focus target immediately visible.

## Iteration 3
Resize assertion raced asynchronous media-query change event. Save test at iterations/03/tests/layouts.spec.js, SHA-256 AF577CE5883744F900C25C7624A26FB86A93C4C8548B85A80EC040C99BCADE31. Wait for settled state in test before assertion.

## Iteration 4
Rendered reference inspected in Chrome. Sidebar width 260px and background rgb(244,245,250) verified. Align sidebar background and active pill treatment. Pre-edit CSS snapshot iterations/04/assets/css/layouts.css SHA-256 D389D5F734841870DCFE271D0E8BB52D522415B649BB81048AC5A4244F2760C1. Original icons/system font remain an intentional fidelity limitation.

## Final validation
- Chrome 157.0.8103.38, headless Playwright, Windows. Command: set PLAYWRIGHT_MODULE to C:/Users/ADMIN/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright, then `node tests/layouts.spec.js`.
- Final run PASS: 36 viewport cases (six pages × four BA viewports plus two landscape sizes), 66 sampled resize points including 1199/1200/1201, menu touch/keyboard/focus cycle/Escape/backdrop/close/resize cleanup, six direct-file URLs, local HTTP resources, variant geometry; no page errors or failed resources.
- Supplemental Node/Playwright inline check PASS: all six pages with temporary long main content, footer below main, reduced-motion drawer has zero transition duration. Temporary content was browser-only.
- Inspected reference render and all six desktop screenshots, plus default mobile screenshot. Artifacts in validation/. Not pixel-identical: original logo/icons and system font used; reference uses Inter. No physical-device, Safari or Firefox tests performed. Width testing sampled points; continuous drag across every pixel not performed.
- Two earlier runs failed: actual opening-focus issue corrected by removing visibility transition; resize test race corrected by waiting for media-query state to settle. Final suite passed after visual CSS tuning.
- Local test HTTP server uses allowlisted application paths, binds loopback and closes after tests. It never exposes backup or Git paths.
- No task/BA/plan/root index modifications, no deployment, no staging, no commit or push. Backup Git-ignore/deployment exclusion remains unconfigured; no config automatically changed. Keep backups out of any future staging/deployment.

## Final application hashes (SHA-256)
Compare these hashes with current files before proposing rollback. Created files may be deleted only after explicit approval and divergence checks.
| Path | Operation | SHA-256 |
| --- | --- | --- |
| layouts/default_layout.html | created | 88EB8609DE7BEB6FD9C140267D82DD12EE77DE310D0B24596FC75C7121C6FA02 |
| layouts/horizontal_layout.html | created | 2231785C638C973F64C4418D3906246194EF80EB389485B51405D1F67AC3D1A1 |
| layouts/boxed_layout.html | created | 2B27F43B2BAA1CE2A7C9356B52874DBCC61C5B890DA3AE6DABC3BCB58375B993 |
| layouts/compact_layout.html | created | 48FC93516342A053D395CEA2C5B8179137E06865B54EEAF0E364A1ED7F7DEB90 |
| layouts/single_column_layout.html | created | 52EE7FEB3FB439176E0D2190A863288CBF9D81B1A5D3B5A9E0AF299E7AC386B5 |
| layouts/blank_layout.html | created | F216B82FAE865A4E86FEBD8AE977B3DC8B84818631DF95EABF7D05943E3B888D |
| assets/css/layouts.css | created | 408271451650029A8410F978E9B82064D12D675999FEE670C2E5F02CDD8ADB8A |
| assets/js/layouts.js | created | D25F06BC1D37139951DB9D2BB02D783709B32FE05C76563597B9F8BFB65D2F3C |
| tests/layouts.spec.js | created | 842819C44C609FDEEE08B8EB42446B82A7E78A04A4EBA34C11E34C5D07BE9BAE |
