# 20261111_materio_file_upload
Iteration 1 2026-11-11T03:24:40.992Z
- basic-inputs.html | modify | original/basic-inputs.html | 798b5ebf5b0af5f887a7952eb0f4feacc065a7447ad912a44610d013b766039f
- input-groups.html | modify | original/input-groups.html | 48521c4e33529b3ba62b9ccb989406d376a46f0cff9e07a3271ddbdb7a5e3940
- custom-options.html | modify | original/custom-options.html | 1bb0f22bbff20eeb5ff4a2081f515d85c857b946c61d440d0ce84ba0169a2f9c
- editors.html | modify | original/editors.html | d6279c4f172425af9396ccbf924afec8f8e2b9c6dbd6340a8bbe0518f948cdfe
- file-upload.html | absent | create | snapshot/hash N/A
- assets/css/file-upload.css | absent | create | snapshot/hash N/A
- assets/js/file-upload.js | absent | create | snapshot/hash N/A
- tests/file-upload.spec.js | absent | create | snapshot/hash N/A

Final SHA-256
- basic-inputs.html | ECF8FDA0B0570FFE463289AF9D9702435F1C9230BD4DA46C34CF23C7A08E10ED
- input-groups.html | FAFF298D50DAF2F0350DCDE5D4700FA658BE8C37F609770EC653A0C9F5DB176A
- custom-options.html | C567548A806A968CB3C88AD97494C4E9062BD5024D6076CDFC0E3BC1DE0B9FEF
- editors.html | 8DE953208F699D71BBC31BA9F48F8199D5DCA478FA9C50DB6A62D308EB167C67
- file-upload.html | 3151C7E673B07FBA4D8CC6520788A4918FD6EC0B793DB8B61FA5421A7BC68716
- assets/css/file-upload.css | C130384ADD1DDE7F5C6AA38BA7B176E9C4A4CDB95DE1DB0C7A151CC286344800
- assets/js/file-upload.js | 81B0526C7E85F86A25F0D7878D1D6EB5AA9D926837705C729A494AC53711D41D
- tests/file-upload.spec.js | B382DAA757E9186ADA836625A16A066EA4BC028C74D6E1E5BD7A9CA844E46E8F

Chrome file-upload.spec.js PASS: keyboard picker, image preview, drop events, one/many, size boundary, duplicate, literal names, removal/reselection, focus, navigation, nine widths and no HTTP requests.
Chrome editors.spec.js PASS. node --check assets/js/file-upload.js and git diff --check PASS.
Native File API instead of Dropzone, local-only processing. Firefox/Safari and physical OS drag not tested.
Backup exclusion from tracking/deployment is unconfigured.
