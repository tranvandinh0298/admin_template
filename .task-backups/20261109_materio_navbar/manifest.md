# Rollback manifest:20261109_materio_navbar
Timestamp 2026-11-09T16:54:45.2889250+07:00
Iteration1 before writes,existing source unchanged.
| navbar.html | absent | create | SHA256 n/a |
| assets/css/navbar.css | absent | create | SHA256 n/a |
| assets/js/navbar.js | absent | create | SHA256 n/a |
| tests/navbar.spec.js | absent | create | SHA256 n/a |
Reference/desktop/mobile screenshots absent. Backup exclusion unconfigured,no config/staging/deployment. Tests exclude backups.
Iteration2: exact navbar.js snapshot at iterations/2/assets/js/navbar.js before hover click refinement.
Iteration3: snapshot tests/navbar.spec.js before synchronizing asynchronous breakpoint focus assertion.
Iteration4: exact JS snapshot before retaining focus across CSS breakpoint hiding (browser may blur before media change listener).
Iteration5: exact JS snapshot before hover gap grace period to allow reaching fixed panels.
Iteration6: snapshot test before hover panel traversal and deferred close assertion.
Validation: node tests/navbar.spec.js PASS Chrome157.0.8103.38 (final iteration); node tests/layouts.spec.js PASS 36 viewport/66 resize; node --check JS/test PASS; git diff --check PASS tracked files only. Desktop/mobile screenshots visually inspected. Earlier failed runs exposed hover and breakpoint focus issues, corrected with iteration snapshots. Backup exclusion remains unconfigured; no config/staging/deployment changes. Manual screenreader, physical touch, Firefox/Safari not tested. Color foreground adjusted for readability; mobile menus in flow instead of floating.
Final SHA256 D:\workspace\work\xampp\htdocs\UI\admin_template\navbar.html AD6D12ADAD8388C16A4C668D74AC4425631B14DAA8BF52EEF1DA1C9CC1548863
Final SHA256 D:\workspace\work\xampp\htdocs\UI\admin_template\assets\css\navbar.css 6B8627B7C829FFAFA4BA92F0955CC5A3E777BD8505DACE573C2C7625A9AAD13B
Final SHA256 D:\workspace\work\xampp\htdocs\UI\admin_template\assets\js\navbar.js 939478FEF072C710078B0C9F1FDF2C2A8F7CF1E658B4DEC963DA6090E5B6EA29
Final SHA256 D:\workspace\work\xampp\htdocs\UI\admin_template\tests\navbar.spec.js 62E171064E54742191C75FE435780756B71F254634B61F139956A4CCDFF837D3
Iteration snapshot SHA256 D:\workspace\work\xampp\htdocs\UI\admin_template\.task-backups\20261109_materio_navbar\iterations\2\assets\js\navbar.js 919D8EB965244B6F0FCD66765BC2914E800A60D8F01B71E1C5405794015C7BAA
Iteration snapshot SHA256 D:\workspace\work\xampp\htdocs\UI\admin_template\.task-backups\20261109_materio_navbar\iterations\3\tests\navbar.spec.js 51984264E595E3ECFA9AF152A2A70DC4847CF954B1B0866B91A4F7D018C0C76C
Iteration snapshot SHA256 D:\workspace\work\xampp\htdocs\UI\admin_template\.task-backups\20261109_materio_navbar\iterations\4\assets\js\navbar.js 715A4633FFBCB664E4A9C417DAF0B87FA0BE090EC456061C4C6B540CDD83B773
Iteration snapshot SHA256 D:\workspace\work\xampp\htdocs\UI\admin_template\.task-backups\20261109_materio_navbar\iterations\5\assets\js\navbar.js 25D2BA9EAA084993062908A51C8DAAAE068C5A182565C9E945A892540C4589CA
Iteration snapshot SHA256 D:\workspace\work\xampp\htdocs\UI\admin_template\.task-backups\20261109_materio_navbar\iterations\6\tests\navbar.spec.js 509EBE8EA86C8AF92DA243002B60D3DBD506000471698DC8D9448F925D62DA50
