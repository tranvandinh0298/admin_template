# 20261110_materio_tour
Iteration 1 — 2026-11-10
All intended paths absent before creation; operation create; pre-change SHA-256/backup N/A:
- tour.html
- assets/css/tour.css
- assets/js/tour.js
- assets/vendor/driver/driver.js.iife.js
- assets/vendor/driver/driver.css
- assets/vendor/driver/LICENSE
- assets/vendor/driver/README.md
- tests/tour.spec.js

Unrelated files preserved. Backup exclusion from tracking/deployment not configured; no configuration changed.
`nIteration 2: snapshot assets/css/tour.css before fixing focused Next button contrast.

Iteration 2 CSS pre-change SHA-256: 3209806474522dc95c5758e197347c32ba3b3d35ed82211d54b546318d05e116
README clarification changed license filename from LICENSE to license saved as LICENSE; exact one-line diff recorded in task history, no pre-edit snapshot captured for this documentation refinement.

Final SHA-256
- tour.html | 00b0838768765d1f7911e7e5e554125d60a811e205a05c663561febf9f095a74
- assets/css/tour.css | 251eb37755b0a2a04d0a45ea4e0a27a9bc9667302425b4d488fa2e462bf55459
- assets/js/tour.js | 34f7d8c5887048ed89c540b328ff4c564f0f9398f237f4da9b6c40453cd9eeaf
- assets/vendor/driver/driver.js.iife.js | 31d6a387715585cc5507a3dded09eb97969f8167fabfb272648f84c6b2608325
- assets/vendor/driver/driver.css | 4b398481a7ce8375af4d9f58f39410c73a0b70726fe513686d3d51c10ad76cb5
- assets/vendor/driver/LICENSE | ec3ce3a08736fefd6a03a6d5b52b0705e6919fe06de9d7bd3fb63dcfb492d76d
- assets/vendor/driver/README.md | 52e626470df0567bfa231624b11b6e1303a6b692d2c6afe48b879e0b9b9fff1a
- tests/tour.spec.js | 3d4c38f528b6ce9f434368472cf05d8e7883108a211297f7afc599bff99e691a

Checks executed:
- node tests/tour.spec.js with external PLAYWRIGHT_MODULE: PASS Chrome 157, four steps, Back/Next/Skip/Finish/close/Escape, focus trap/return, restart, nine widths 320–1920 including 568x320, active resize; no runtime/resource errors.
- node tests/layouts.spec.js: PASS 36 viewport cases and 66 resize points, no errors.
- node --check assets/js/tour.js and tests/tour.spec.js: PASS.
- git diff --check: PASS (tracked files only).
- Desktop/mobile screenshots inspected; focused button contrast corrected.
Deviations: Driver.js MIT instead of reference Shepherd, neutral Learn more replaces commercial Upgrade. Driver overlay uses an SVG mask internally, no SVG icons added. Library license retrieved from package lowercase license after uppercase URL returned 404.
Limitations: Chrome file URL validation; no Firefox/Safari or manual screen-reader check. Backups not excluded from deployment/tracking by config.
