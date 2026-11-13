# Rollback manifest: 20261109_materio_carousel
Timestamp 2026-11-09T16:12:48.4812139+07:00
Iteration 1 before source writes. No existing source modifications.
| carousel.html | absent | create | SHA256 n/a |
| assets/css/carousel.css | absent | create | SHA256 n/a |
| assets/js/carousel.js | absent | create | SHA256 n/a |
| assets/vendor/swiper/swiper-bundle.min.js | absent | create | SHA256 n/a |
| assets/vendor/swiper/swiper-bundle.min.css | absent | create | SHA256 n/a |
| assets/vendor/swiper/LICENSE | absent | create | SHA256 n/a |
| tests/carousel.spec.js | absent | create | SHA256 n/a |
Validation reference/desktop/mobile images absent. Backup exclusion unconfigured; no staging/deployment/config changes. Local test server excludes backups.
Validation reference.png absent before capture; implementation desktop/mobile screenshots inspected. Original CSS landscapes deliberately substitute photographic media.

## Implementation validation
Timestamp 2026-11-09T16:15:48.0412835+07:00
Swiper 14.4.0 MIT bundle and LICENSE from https://cdn.jsdelivr.net/npm/swiper@14.4.0/ . Original CSS artwork replaces commercial photos. External runtime unchanged.
PLAYWRIGHT_MODULE=<TEMP>/codex-buttons-validation/node_modules/playwright node tests/carousel.spec.js PASS Chrome157.0.8103.38: 11 examples/12 instances, 60 slides, scoped controls/isolation, pagination, vertical keyboard, effects, gallery, motion, 8 viewport widths, pointer drag, HTTP/file, missing library fallback, no normal resource/runtime errors.
Supplemental browser check PASS actual scrollbar drag and offscreen thumbnail Tab exclusion after gallery main slide4.
node tests/layouts.spec.js PASS:36 viewport cases,66 resize points, drawer focus/keyboard/touch/backdrop/resize,6 file URLs,geometry,no errors. Shared source unchanged; other suites not rerun.
Syntax checks and git diff --check passed. Desktop/mobile implementation and reference viewport screenshots inspected. Differences: original CSS illustrations/system font/shell, extra external accessible previous/next controls and draggable scrollbar. No reference mobile screenshot, physical touch or manual screen-reader/Firefox/Safari tests.
No shared source edits, no brief rewrite, no config/staging/commit/deployment. Backup exclusion remains unconfigured; omit backups from future staging/deployment.
## Final source SHA256
| carousel.html | created from absent | 3F41A1AB9CD0B3B5150D889A05FFA5B368893129898BF65A6C68D8FA2DEE639E |
| assets/css/carousel.css | created from absent | D19ED552D683622F183AA3E4AF8A987A58E4C01E1458869AD77E52B5FA73661A |
| assets/js/carousel.js | created from absent | 8C633877A03800B40031BE3E2C16115B174B2C27DD38CE9CCE44D0ACF80753CD |
| assets/vendor/swiper/swiper-bundle.min.js | created from absent | 2EC62F21A16674B6B3EB3E3509B6307AF6B7DC5EB1D48C81708A9E62C4926C7A |
| assets/vendor/swiper/swiper-bundle.min.css | created from absent | F8BE957D6F58E7A9A77C0D5B60510DC94263AF3CD76B9DA4305B7B30FC076237 |
| assets/vendor/swiper/LICENSE | created from absent | 99F08E3E3EE0799FE1488FCBCB41DC933B14873E9556693209DAF9E1007601D6 |
| tests/carousel.spec.js | created from absent | 1F3317212020856DF58CEFBF986508A578DA708758E6F38555D3065457F7C729 |
