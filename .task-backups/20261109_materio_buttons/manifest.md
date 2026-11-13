# Rollback manifest: 20261109_materio_buttons
Timestamp: 2026-11-09T11:09:38.4438697+07:00

## Iteration 1 — before application writes
| Path | Original existence | Operation | Backup | Pre-change SHA-256 |
| --- | --- | --- | --- | --- |
| button.html | absent | create | n/a | n/a |
| assets/css/buttons.css | absent | create | n/a | n/a |
| assets/js/buttons.js | absent | create | n/a | n/a |
| assets/vendor/sweetalert2/sweetalert2.all.min.js | absent | create | n/a | n/a |
| assets/vendor/sweetalert2/LICENSE | absent | create | n/a | n/a |
| tests/buttons.spec.js | absent | create | n/a | n/a |

No existing application files will be edited. Original absence recorded before creation.
Technical plan absent; implement from brief, BA and preceding analysis. SweetAlert2 11.26.25 local MIT distribution selected.
Existing untracked task and BA preserved. No deployment/staging. Git-ignore/deployment exclusion is unconfigured; repository config will not be changed automatically. Backups must be omitted from deployment and staging.

## Iteration 2
Timestamp: 2026-11-09T11:13:23.9901193+07:00
Test first run reached checkbox interaction then failed because check() targets the visually clipped native input. Correct the test to click its visible label, matching actual pointer usage. Pre-edit test saved at iterations/02/tests/buttons.spec.js; SHA-256 89A3A62885E4BF3415A773D5321E553F14A1CCCCEDD02A17B05D27AAC36FB464. No application change required.

## Visual validation artifacts
Before capture: validation/desktop.png, validation/mobile.png, validation/selection.png and validation/dialog.png absent. Screenshots generated only inside this task backup directory; not deployment assets.

Iteration 3 pre-edit: assets/js/buttons.js -> iterations/03/assets/js/buttons.js; SHA-256 3517A9160AD681049BC80F0D23E99DDC600DE5929EBDBD10FDBC13A288A052D7

Iteration 3 pre-edit: tests/buttons.spec.js -> iterations/03/tests/buttons.spec.js; SHA-256 C24FE463616E3DBFE297DDA1FF45C6B5CEBB40DE5E6F9E2786390533C2E3E1C3
Second suite failed reopening a dialog: pending flag was released only in delayed didClose, so activation after removal could be ignored. Release once a result is received; restore focus manually only if another dialog is not open. Add progress reporting to validation.

Final visual captures before write: validation/dialog-final.png and validation/icons-final.png absent. Earlier screenshots retained unchanged.

## Final validation
Timestamp: 2026-11-09T11:17:10.0103329+07:00
SweetAlert2 11.26.25 distributed locally with MIT LICENSE. Source: https://cdn.jsdelivr.net/npm/sweetalert2@11.26.25/dist/sweetalert2.all.min.js and matching LICENSE.
Playwright installed outside repository at TEMP/codex-buttons-validation; project dependency configuration unchanged.
Command: PLAYWRIGHT_MODULE=<TEMP>/codex-buttons-validation/node_modules/playwright node tests/buttons.spec.js
PASS Chrome 157.0.8103.38: all groups, five distinct sizes, enabled-button ripple/cleanup, native checkbox/radio pointer and keyboard, disabled pointer hit-testing, Confirm/Delete confirm/cancel/Escape/backdrop/keyboard paths and focus, eight viewport sizes (320,390,568,768,1199,1200,1366,1920), reduced motion, direct file URL, unavailable/thrown dialog library; no normal-load runtime or resource errors.
Command: same PLAYWRIGHT_MODULE, node tests/layouts.spec.js
PASS: 36 viewport cases; 66 resize points; menu touch/keyboard/focus/backdrop/resize; six file URLs; variant geometry; no resource/runtime errors.
node --check assets/js/buttons.js and node --check tests/buttons.spec.js passed. git diff --check passed for tracked diffs; all new application files remain untracked.
Visual inspection: desktop/mobile, checkbox/radio section, icon styles and settled mobile delete dialog screenshots reviewed. Reference desktop screenshot from preceding analysis used for comparison. Not pixel-identical: existing shell/system font/original SVG and logo retained; requested nine groups labeled independently; commercial theme extras omitted. No Firefox/Safari/physical device or reference-mobile comparison performed.
Earlier test failures: input check() wrongly targeted clipped input (test corrected to visible label); delayed dialog busy release prevented immediate reopening (application corrected and suite passed).
No existing tracked application files, task brief, BA or technical plan modified. No staging, commit, push or deployment.
Remaining repository policy limitation: backup exclusion is not configured, as in earlier task. No project/Git configuration auto-edited; keep .task-backups out of staging and deployment.

## Final application SHA-256
Check divergence against these hashes before any rollback. Original files were absent; deletion requires explicit approval.
| Path | Operation | SHA-256 |
| --- | --- | --- |
| button.html | created | D51C2711FA02434E8451FFB687A1640FDE44595878A0B19C16D11D12E27F2242 |
| assets/css/buttons.css | created | 6A79590B31694780E9D44A0281A3DE06E81E29645086397A20799CE2A00A3997 |
| assets/js/buttons.js | created | 6BED9811DC5D6BC469C8FA12C6681F83A7DAD9BE53F1599A07346A8BA31737D7 |
| assets/vendor/sweetalert2/sweetalert2.all.min.js | created | 4E86F0E22E4771B5B8AAC24C613C661806A678B1AFA284D03CF6AD03D3E21A0A |
| assets/vendor/sweetalert2/LICENSE | created | 879AA33FEBA35B3428C6485FC17CDDD8C820D7A8780281AA945E60582A28C4B4 |
| tests/buttons.spec.js | created | 5A6803679FDA1590CB077DF299DF436C51B6373553B5A3FE9B37927444247B3D |
Iteration 4 before edit: button.html snapshot iterations/04/button.html SHA256 D51C2711FA02434E8451FFB687A1640FDE44595878A0B19C16D11D12E27F2242
Iteration 4 before edit: assets/css/buttons.css snapshot iterations/04/assets/css/buttons.css SHA256 6A79590B31694780E9D44A0281A3DE06E81E29645086397A20799CE2A00A3997
Iteration 4 before edit: tests/buttons.spec.js snapshot iterations/04/tests/buttons.spec.js SHA256 5A6803679FDA1590CB077DF299DF436C51B6373553B5A3FE9B37927444247B3D
Iteration 4: user requests Font Awesome instead of SVG. New paths absent: assets/vendor/fontawesome/css/fontawesome.min.css, css/solid.min.css, webfonts/fa-solid-900.woff2, webfonts/fa-solid-900.ttf, LICENSE.txt. Pin Free 6.7.2 local webfont distribution. Original task absence records preserved.
Iteration 4 completed 2026-11-09T11:25:31.1765712+07:00: tests/buttons.spec.js PASS Chrome 157.0.8103.38 including zero SVG elements, Font Awesome webfont loaded, all interaction/regression checks and eight viewports. Local Font Awesome Free 6.7.2 CSS/webfonts and LICENSE.txt included. Shared layouts unchanged. Backup exclusion limitation unchanged.
Iteration 4 final SHA256 button.html ADB4C8AB7C009CF0A3B24B9B92B0C7040E9F045E91F22697DA6BC82472FD75F2
Iteration 4 final SHA256 assets/css/buttons.css 0D99D32122D2550DADDA893062112507EEEE46C1E63FE4ACC1F24EBD435F3822
Iteration 4 final SHA256 tests/buttons.spec.js 1D311298CEAB711321326427ABFA1461830F0A6E858FBEFD740B8B3C1F2271FD
Iteration 4 final SHA256 assets/vendor/fontawesome/LICENSE.txt 9B914EAE88817D63B576EAB5AAFDE7068C7A1ABAE125D7CDFB034F1DA43A9AFC
Iteration 4 final SHA256 assets/vendor/fontawesome/css/fontawesome.min.css 4C17B497D3E115A551DC3C07980DA341B51FD72EB2436D9106024A2A43640B9D
Iteration 4 final SHA256 assets/vendor/fontawesome/css/solid.min.css 1136CE38CF54F167DA5E0D80916DADF906DDA566054403BE1C45CEB61F0441B6
Iteration 4 final SHA256 assets/vendor/fontawesome/webfonts/fa-solid-900.ttf D2F0593540B0E33BA6DE255A54F272D466E31144806956BEA8CFDBF7EDFFC9BD
Iteration 4 final SHA256 assets/vendor/fontawesome/webfonts/fa-solid-900.woff2 AA75998623A391E61C6901794ACE832E3ECDD288B56D608F21BEA0411ACC0B8E
Iteration 5 pre-edit button.html SHA256 54F3C1A1ECD9CD047920CC02207850EBB2CC1971B621CB2004418C70524F9814, snapshot iterations/05/button.html. Current formatting/user changes preserved.
Iteration 5 pre-edit assets/css/buttons.css SHA256 5269E22AE661EF93F6067D7CA3FC8ECC04B8F69EFE27DE27C7F6DFBD450E7A81, snapshot iterations/05/assets/css/buttons.css. Current formatting/user changes preserved.
Iteration 5 pre-edit tests/buttons.spec.js SHA256 1D311298CEAB711321326427ABFA1461830F0A6E858FBEFD740B8B3C1F2271FD, snapshot iterations/05/tests/buttons.spec.js. Current formatting/user changes preserved.
Iteration 5 2026-11-09T11:42:52.1194581+07:00: user requests full width and near full width buttons. Use 100% and centered 90% of padded card content. No new files or changes to immutable brief/BA.
Iteration 5 validation: PLAYWRIGHT_MODULE=<TEMP>/codex-buttons-validation/node_modules/playwright node tests/buttons.spec.js PASS Chrome 157.0.8103.38. New 100%/90% width and centered geometry assertions passed at all eight viewports; both new buttons included in ripple checks. Full existing button interaction suite passed. Backup exclusion limitation unchanged; no deployment/config edits.
Iteration 5 final SHA256 button.html E2824032F7D39DDC0CFAF6F598E8B283C6F2C0E889D38A0A3DB52EA05758F3AB
Iteration 5 final SHA256 assets/css/buttons.css FA9230CF84EFF2967DFADB72DFC1EB8D9ED53034A98B078FB2AA5FE999D5D6A7
Iteration 5 final SHA256 tests/buttons.spec.js 22E3DD93C0D5806E662506A1DD70F5BF8CD70C5A7F6B655CEB8C7B668EB8BF70
Iteration 6 pre-edit button.html SHA256 E2824032F7D39DDC0CFAF6F598E8B283C6F2C0E889D38A0A3DB52EA05758F3AB, snapshot iterations/06/button.html
Iteration 6 pre-edit assets/css/buttons.css SHA256 FA9230CF84EFF2967DFADB72DFC1EB8D9ED53034A98B078FB2AA5FE999D5D6A7, snapshot iterations/06/assets/css/buttons.css
Iteration 6 pre-edit assets/js/buttons.js SHA256 6BED9811DC5D6BC469C8FA12C6681F83A7DAD9BE53F1599A07346A8BA31737D7, snapshot iterations/06/assets/js/buttons.js
Iteration 6 pre-edit tests/buttons.spec.js SHA256 22E3DD93C0D5806E662506A1DD70F5BF8CD70C5A7F6B655CEB8C7B668EB8BF70, snapshot iterations/06/tests/buttons.spec.js
Iteration 6 2026-11-09T11:44:57.4563542+07:00: user requests anchor support. CSS already element-independent; add anchor ripple, disabled guards and examples. Preserve native navigation for normal links; data-action anchors remain confirmation demos without navigation. No new paths.
Iteration 7: size test included new anchor row; narrow to first size example block. Snapshot iterations/07/tests/buttons.spec.js SHA256 7F6BBBE1013DA10A7D3EC884AC4D9382ED7142E215DD97167B0FB1F5D583CF70
Iteration 8: Playwright correctly refuses disabled locator click; use pointer coordinates as existing disabled tests. Snapshot iterations/08/tests/buttons.spec.js SHA256 73F4705BF3A006B211D592143F0DF7E610D4431E4B824CB9B6EE3BA1C64C137F
Iteration 8 final SHA256 button.html 1B7578F73E334A902326D96719E643D23CB9603E274DDB2A99ADE275CE5E89C1
Iteration 8 final SHA256 assets/css/buttons.css 168A5D01CF51F6D4C71B11F383E275F54FACABE5DB2B57A36D4E4A8EC2F1D770
Iteration 8 final SHA256 assets/js/buttons.js F56DF8C37B96D35B2496BE20252055D85C9B3838C66B3B8EB51DD6A56FF0BEF0
Iteration 8 final SHA256 tests/buttons.spec.js 7A313FE28137B6DE449F4587BD0F04B228778904CCAE0DE1FDF5DB9DBC43BD6D
Iteration 8 validation: PLAYWRIGHT_MODULE=<TEMP>/codex-buttons-validation/node_modules/playwright node tests/buttons.spec.js PASS Chrome 157.0.8103.38. Anchor pointer/Enter navigation, ripple, disabled inactivity and confirmation cancellation/focus verified alongside complete existing suite and eight viewports. node --check and git diff --check passed. Backup exclusion remains unconfigured; no config/deployment changes.
Iteration 9 pre-edit assets/js/buttons.js SHA256 F61C8139C8E5AB51422E7143648CEDDDD11959B92E151B1084C817F1C2FE5FD1, snapshot iterations/09/assets/js/buttons.js
Iteration 9 pre-edit tests/buttons.spec.js SHA256 7A313FE28137B6DE449F4587BD0F04B228778904CCAE0DE1FDF5DB9DBC43BD6D, snapshot iterations/09/tests/buttons.spec.js
Iteration 9 2026-11-09T14:01:15.4110879+07:00: explicit user override: confirmed action anchors follow href, cancellations do not. Preserve user-added external links in button.html and unrelated single_column_layout edits. No new files.
Iteration 10 pre-edit assets/js/buttons.js SHA256 FED34B6F7F614AB0D3F9D745A7FA2754650137DB369811F558B65EA592F97518, snapshot iterations/10/assets/js/buttons.js
Iteration 10 pre-edit tests/buttons.spec.js SHA256 21EB3F281B54B43A84812FB087E514BDAEACFA98B814D92E5F40E8ACCA91EB1E, snapshot iterations/10/tests/buttons.spec.js
Iteration 10: correct test URL glob (hash follows filename, not slash). Manual direct-file reproduction confirmed href navigation succeeds. Match formatted source to update link dialog copy.
Iteration 10 validation PASS Chrome full button suite, eight viewports and both action anchor href confirmation/cancellation. User-added external destinations preserved; tests substitute hash destinations in browser only.
Iteration 10 final SHA256 assets/js/buttons.js 710BDCEE23648D5B79CD8F4E52EA4FD0CE583637FB3C41DCBF8CB7AFA582C020
Iteration 10 final SHA256 tests/buttons.spec.js B75D2ECCFC819534F4E048FAF0128C3741D6F87F192AA376F3D0FF6FC9D4CC25
Iteration 11 pre-edit assets/js/buttons.js SHA256 710BDCEE23648D5B79CD8F4E52EA4FD0CE583637FB3C41DCBF8CB7AFA582C020, snapshot iterations/11/assets/js/buttons.js
Iteration 11 pre-edit button.html SHA256 B67B383527CF9E2120E03A4B4A27C1680237F03E48BC3BDC1B687A705535E9C5, snapshot iterations/11/button.html
Iteration 11 pre-edit tests/buttons.spec.js SHA256 B75D2ECCFC819534F4E048FAF0128C3741D6F87F192AA376F3D0FF6FC9D4CC25, snapshot iterations/11/tests/buttons.spec.js
Iteration 11 2026-11-09T14:03:40.8533012+07:00: user requests dataset overrides for dialog title/text/confirm/cancel labels. Defaults preserved; plain text rendering for custom values. No new paths.
Iteration 11 validation PASS Chrome 157.0.8103.38: dataset overrides for all four fields on confirm/delete buttons and anchors, body text not interpreted as HTML, complete existing suite including href navigation and eight viewport geometries. Command PLAYWRIGHT_MODULE=<TEMP>/codex-buttons-validation/node_modules/playwright node tests/buttons.spec.js. Existing backup exclusion limitation unchanged; no config/deployment edits.
Iteration 11 final SHA256 assets/js/buttons.js 9E287FAAB53E0135C84C6EE43DBA23AF917C33B0F3C3148888C7D098AB034DDA
Iteration 11 final SHA256 button.html 4B351A7B57F82CFD43CABE068AB16A17CAF09862869A0B5C4F3FF4BFC1450792
Iteration 11 final SHA256 tests/buttons.spec.js 67000656C112FE55CF5A8BE90AFBF620B2EB96CAE8722427F7FCDCE5C0B3968D
