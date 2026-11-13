# 20261110_materio_perfect_scrollbar

Iteration 1 — 2026-11-10T10:01:23.470Z
All paths below were absent before creation; pre-change SHA-256 and backup: N/A. Operation: create.
- perfect-scrollbar.html | absent
- assets/css/perfect-scrollbar.css | absent
- assets/js/perfect-scrollbar.js | absent
- assets/vendor/perfect-scrollbar/perfect-scrollbar.min.js | absent
- assets/vendor/perfect-scrollbar/perfect-scrollbar.css | absent
- assets/vendor/perfect-scrollbar/LICENSE | absent
- assets/vendor/perfect-scrollbar/README.md | absent
- tests/perfect-scrollbar.spec.js | absent

Pre-existing layout edits and other task files untouched. Backup exclusion from Git/deployment is not configured; no configuration changed.

Iteration 2: snapshot assets/js/perfect-scrollbar.js before focus-based keyboard fix. Upstream handler uses hover rather than region focus.

Iteration 2 pre-change SHA-256: a9e41025799ebb0af939b0210758e9193854623405ef946708cdcd395c5b904b

Final SHA-256
- perfect-scrollbar.html | a7b42b1e46c58a3913b1fe3f4f8948b201527869295756cb1bf440d5dce9286a
- assets/css/perfect-scrollbar.css | 2fb0a75dd6ed5b158b31722fd575a52b671e31b3318c22fb03af09fa76b9b1bd
- assets/js/perfect-scrollbar.js | ec3b63fb206db8646aff8b458d12b3950583444f7fbd8f58dc1af73ab66150dd
- assets/vendor/perfect-scrollbar/perfect-scrollbar.min.js | 07af4b6893a4003b620a19eb00c285bc0caa6f33374e1a6be84c86b5588e146f
- assets/vendor/perfect-scrollbar/perfect-scrollbar.css | 7b6508c9e8e04de8ebfec5de2ce1c4303bc46a0a279283eff7e248c1c900a91b
- assets/vendor/perfect-scrollbar/LICENSE | 58ca49a0a0917f046518fd93f6415f197303a7fd06ae52a217d7ec0e7e07b76f
- assets/vendor/perfect-scrollbar/README.md | 7749f915e6a658d7d0553029e3b2f0c461af594e8a6c77130188f655de629484
- tests/perfect-scrollbar.spec.js | 41edb56f891e7204dda607bfdccd9baa95d35b4ed08e6193572e99c2c93dd1b2

Validation executed:
- node --check assets/js/perfect-scrollbar.js: PASS
- node --check tests/perfect-scrollbar.spec.js: PASS
- node tests/perfect-scrollbar.spec.js with external PLAYWRIGHT_MODULE: PASS (Chrome 157; 3 axes; wheel; focus keyboard; draggable thumbs; touch; observer; 9 viewport widths; drawer; reduced motion; file URL; native fallback; no errors). First run identified upstream hover-based keyboard behavior; fixed in iteration 2 and rerun passed.
- node tests/layouts.spec.js: PASS 36 viewport cases and 66 resize points; no errors.
- git diff --check: PASS (tracked changes only).
- Desktop/mobile screenshots inspected; neutral CSS landscape substituted for reference photography.
Limitations: no Firefox/Safari/manual screen reader validation; backup exclusion not configured; no shared source changes.
