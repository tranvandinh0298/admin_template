# 20261111_materio_basic_inputs

Iteration 1 2026-11-11T02:08:28.797Z
- basic-inputs.html | absent | create | original hash and snapshot N/A
- assets/css/basic-inputs.css | absent | create | original hash and snapshot N/A
- assets/js/basic-inputs.js | absent | create | original hash and snapshot N/A
- tests/basic-inputs.spec.js | absent | create | original hash and snapshot N/A
Iteration 2 | assets/css/basic-inputs.css | SHA-256 7A52BA04DE1A6FA9B34EC28056B57CDB04399056DF98FD92B052737E16ACE0C1 | iterations/2/assets/css/basic-inputs.css | align desktop grid to reference

Final SHA-256
- basic-inputs.html | 2FD94AEBB77C39602C190561BD6AFEFED119CC98BEBA19484F754B83AB30114D
- assets/css/basic-inputs.css | 94F32C13EF8B69C14A127073A27BA8AE3ACD24D69B829AAB2056016B1EAE24D8
- assets/js/basic-inputs.js | A4E7E800A2632ADB7F56720FBB1AA6D955A1C0F62090B577DD9A2E5292071647
- tests/basic-inputs.spec.js | 1834D5D5E9D777711283B13C06C46ECD7F93BF63827E3ED2B5C264282236A6CB

- node tests/basic-inputs.spec.js: PASS on Chrome 157 after grid refinement. Eleven groups, labels, floating states, native controls, file selection, nine widths, no resource/runtime errors.
- node tests/layouts.spec.js: PASS 36 viewport cases and 66 resize points.
- node --check assets/js/basic-inputs.js and git diff --check: PASS.
- Browser pickers use the native browser UI. File selection stays local.
- Backup exclusion from tracking/deployment is unconfigured. No configuration change made.
