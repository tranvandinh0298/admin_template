Iteration 1 2026-11-11T02:59:41.389Z
- basic-inputs.html | modify | original/basic-inputs.html | 2fd94aebb77c39602c190561bd6afefed119cc98beba19484f754b83ab30114d
- input-groups.html | absent | create | snapshot/hash N/A
- assets/css/input-groups.css | absent | create | snapshot/hash N/A
- assets/js/input-groups.js | absent | create | snapshot/hash N/A
- tests/input-groups.spec.js | absent | create | snapshot/hash N/A
Iteration 2 | input-groups.html | iterations/2/input-groups.html | 309DE2EEB2188CBDFAD59E708CE580F19EFB4A77FB0E8915D16A03C289F566B2

Final SHA-256
- basic-inputs.html | 270ED2A4FACB3F54B5B98A4A8A286B45E832A445641166A4A9AFA72C083245CB
- input-groups.html | F721D3AD2BA518DCF814B251160CFE8BD473F11981DB68B4B99DB503A082CD6C
- assets/css/input-groups.css | BB992E8548BFDF245998ACBF50996AB125E6E601218425E17DD8CBAEFBB1A0FB
- assets/js/input-groups.js | FAF6015B360D7B34FBD5EAC1A1E48CE66E6C85AC98577F4FB26CC394423E3CF7
- tests/input-groups.spec.js | A492DA52D5B6CA3BC3C6E0BD5C82E745DDCE3C13DCA8DE311C17BD006CFF06AE

Chrome Playwright input-groups.spec.js PASS after iteration 2: 12 groups, both navigation states, keyboard dropdown, password toggle, speech unavailable fallback, file selection, nine widths, no resource/runtime errors.
Chrome Playwright basic-inputs.spec.js PASS: 11 groups and nine widths.
node --check assets/js/input-groups.js and git diff --check PASS.
Speech recognition with a live microphone and other browsers were not tested.
Backup exclusion from tracking/deployment is unconfigured. No configuration changes.
