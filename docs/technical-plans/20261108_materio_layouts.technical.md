# Technical Plan: Materio-style responsive layout examples
**Task ID:** 20261108_materio_layouts
**Status:** Ready

## References
- Immutable brief: `tasks/20261108_materio_layouts.md`.
- BA: `docs/business-analysis/20261108_materio_layouts.ba.md`, status `Ready for technical design`; Q-001–Q-003 non-blocking and still open.
- Repository instructions: `AGENTS.md`; implementation snapshot policy: `.agents/skills/task-implement/SKILL.md`.
- Reference: https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/index.html
- Prior read-only analysis in this conversation: reference HTML and five related variants returned HTTP 200 through PowerShell. Web reader failed. No rendered visual inspection has occurred.

## Technical Context and Current Behavior
- Static repository, no application code beyond an empty `index.html`; `assets/css`, `assets/fonts`, `assets/js`, `assets/plugins` are empty.
- No routes, backend, dependency manifest, frontend build pipeline, or tests exist. No application data flow, authentication or API contract to preserve.
- `layouts/` and this task's technical plan did not exist before planning. Git status at planning showed only the BA as untracked; preserve it and recheck before implementation.
- Node/npm executables are available. Browser automation/test package availability has not been established. Python resolution may be a Windows Store alias; do not assume a working Python runtime.
- Reference HTML observations: default/container/collapsed layouts have vertical sidebar, detached navbar, content and footer; collapsed adds a menu-collapsed state. Container uses `container-xxl` for navbar/content/footer while sidebar is separate. Without-menu retains navbar/footer. Horizontal has navbar and a separate horizontal navigation region. Blank lacks those shell regions in inspected markup.
- These observations establish structure only, not computed dimensions, colors or responsive behavior. Never equate the reference's `layout-compact` class with an icon-only menu; the observed collapsed-menu state is the relevant compact example.

## Requirements / Acceptance Criteria Mapping
BA criteria are identified below; original brief requirements R1–R7 refer to its numbered Requirements section.

| Requirement / criterion | Design element | Validation |
| --- | --- | --- |
| R1, R2; AC-001 | Six explicitly named HTML entry points, relative local assets and page titles | Open each via file URL and local HTTP; check expected paths and links |
| R3; AC-012 | Shared visual tokens and reference inspection before visual tuning | Compare all six rendered pages to reference structure and available visuals; record limits |
| R4, R5; AC-013; BR-002 | Semantic shell, minimal navigation between six examples, neutral main heading only | Inspect DOM and screenshots for unnecessary widgets and broken resources |
| R6; AC-002 | Default: full vertical sidebar beside main page | Desktop screenshot and region placement check |
| R6; AC-003 | Horizontal: top navbar plus horizontal navigation | Desktop screenshot and narrow-width navigation checks |
| R6; AC-004 | Boxed: sidebar outside centered, max-width navbar/content/footer containers | Wide-screen measurements and screenshot show outer space |
| R6; AC-005 | Compact: narrow icon-oriented sidebar with accessible names | Desktop width comparison with default; keyboard/touch label access |
| R6; AC-006 | Single column: navbar/main/footer, no sidebar | DOM and screenshot check |
| R6; AC-007 | Blank: main only, no navbar/sidebar/footer | DOM and screenshot check |
| AC-008, AC-011; BR-003 | Responsive rules for every region, including footer and navigation | All six pages at four BA viewports; visible-region and overflow checks |
| AC-009; BR-004, BR-005 | Fluid sizing, media-query transitions, state cleanup on resize | Continuous resize, breakpoint boundary checks and mobile landscape |
| AC-010; BR-006 | Accessible mobile navigation state and focus management | Pointer/touch, Enter/Space, Tab/Shift+Tab, Escape, dismissal and resize checks |
| AC-013 | Local CSS/classic deferred script; no remote runtime dependencies | Network/console checks, local-file loading and offline asset check |
| R7; BR-008 | Task-scoped pre-change manifest/snapshots | Compare Git status; verify path ownership and hashes |

## Proposed Approach and Alternatives
### Chosen architecture
Use six standalone HTML documents, one shared stylesheet and one small classic deferred script. All shell markup is present in HTML, rather than fetched or injected. This preserves direct `file://` use and avoids module/fetch restrictions, build tools and runtime dependencies. Duplication of a small navigation list is accepted to keep examples portable and independently readable.

Use semantic `header`, `nav`/`aside`, `main`, `footer`, a skip link where chrome exists, one primary heading and a descriptive page title. Navigation links target the actual six example files and indicate the current page with `aria-current="page"`. No dummy links, search field, account dropdown, notification menu, customizer or dashboard cards. Blank page has only minimal main content.

Use a page-level `data-layout` value (`default`, `horizontal`, `boxed`, `compact`, `single-column`, `blank`) and scoped CSS modifiers. CSS owns layout dimensions and visibility; JavaScript owns only user-controlled navigation state. Shared custom properties cover background, surfaces, text, accent, border, shadow, spacing, container width and sidebar widths. Reference-derived values are finalized after visual inspection; do not claim pixel-level fidelity before measurement.

Use local system fonts and small original inline SVG icons with consistent geometry; decorative SVGs are hidden from assistive technology. Keep labels available to assistive technology even when visually hidden in compact mode. Compact items should also expose a visible label on focus/hover without being clipped; mobile drawer shows full labels. Do not download commercial theme bundles or introduce external icon/font dependencies.

### Layout composition
| Entry point | Wide viewport | Narrow viewport |
| --- | --- | --- |
| Default | Full sidebar; detached navbar; main; footer | Sidebar becomes a dismissible drawer; content spans available width |
| Horizontal | Full-width top header and separate horizontal menu; main; footer | Labeled menu toggle exposes stacked navigation; same accessible drawer behavior may be reused |
| Boxed | Default sidebar; navbar/main/footer each centered within bounded content container | Container becomes fluid with gutters; sidebar drawer |
| Compact | Narrow sidebar with icons; navbar/main/footer offset by compact width | Full-label drawer; no permanent narrow strip consuming mobile width |
| Single column | Navbar/main/footer, no sidebar or unused menu toggle | Same regions reflow/wrap with smaller gutters |
| Blank | Minimal main, no chrome | Main fits viewport with responsive padding |

Proposed boxed/single-column/blank interpretation follows BA assumptions and observed reference structure; Q-001/Q-002 remain open rather than silently resolved.

### Responsive and interaction contracts
- Include viewport metadata without disabling user zoom. Use border-box sizing, `min-width: 0` on flex/grid children, wrapping text and intrinsic/fluid widths; do not hide horizontal overflow globally to conceal sizing defects.
- Initial desktop-navigation threshold: `1200px`; tune only if reference inspection or content fit justifies it. Sidebar targets approximately `260px` expanded and `80px` compact, bounded drawer width `min(280px, calc(100vw - 32px))`, content max-width initially `1440px`. These are implementation starting values, not business requirements or verified theme measurements.
- Use a flex column page with minimum viewport height so footer follows short content and moves naturally below long content. Sidebar/drawer can scroll vertically on short landscape viewports. Avoid forcing main height or an overlapping footer.
- Mobile menu toggle is a native button with `aria-controls` and synchronized `aria-expanded`. Close button and backdrop dismiss the menu; Escape dismisses it. Background is non-interactive while the modal drawer is open; keyboard focus remains in the drawer and returns to the opener when dismissed.
- Hidden navigation must not remain tabbable. On crossing into desktop, remove mobile backdrop, scroll lock and temporary focus/inert states; on returning to narrow mode start closed. If focus would be hidden by a transition, move it to the visible navigation trigger or an appropriate visible target.
- No persistent storage required; menu state is in memory only. Script checks for relevant elements and safely does nothing on single-column/blank pages; blank need not load the script.
- Respect reduced-motion preference; visible focus styles; proposed minimum touch controls `44×44` CSS pixels.

### Interfaces and data flow
1. Browser loads the selected document and shared stylesheet through relative paths.
2. HTML identifies the layout and active navigation item; CSS selects the arrangement using the current viewport.
3. Deferred script binds existing navigation controls, if present.
4. Toggle/dismiss/keyboard events update menu state and accessibility attributes; viewport transition resets transient state.
5. Navigation follows ordinary links to another standalone example. No API, dynamic payload, database, storage, or third-party requests.

### Alternatives considered
- Bootstrap CDN: recognizable utilities, but adds network dependence and a large library for shell-only work. Not selected.
- Framework/build pipeline: useful for larger applications, unnecessary for six static examples and direct file viewing. Not selected.
- Copy all styling into each page: standalone single files, but visual fixes drift across variants. Shared local CSS is preferred.
- JavaScript-generated shared shell: reduces duplicated markup, but makes rendering depend on script and complicates local fetch. Not selected.

## Files and Components
Expected application changes are new files only:
- `layouts/default_layout.html`
- `layouts/horizontal_layout.html`
- `layouts/boxed_layout.html`
- `layouts/compact_layout.html`
- `layouts/single_column_layout.html`
- `layouts/blank_layout.html`
- `assets/css/layouts.css`
- `assets/js/layouts.js`

If a usable browser-test runtime exists or can be invoked without project dependency changes, add one focused `tests/layouts.spec.js` only when it can actually run and verify responsive/menu behavior. Do not create an unexecutable test stub or package/config solely to mirror markup. Manual checks remain necessary for visual fidelity; command-based checks may supplement them.

Implementation also creates `.task-backups/20261108_materio_layouts/manifest.md` and required snapshots. No planned change to root `index.html`, task brief, BA, technical plan, README, package/config or unrelated assets. If expected paths appear before implementation, inspect ownership and snapshot rather than overwrite.

## Implementation Steps
1. Re-read task/BA/plan, check current Git status and target-path existence. Confirm no new business blocker.
2. Before first application write, record all intended paths as absent or snapshot existing exact bytes with SHA-256. Set up task manifest per task-implement; preserve initial snapshots. Check exclusion from Git/deployment without automatically editing configuration; report any unresolved exclusion issue.
3. Inspect reference and related variants in a rendered browser if available; inspect linked CSS read-only for dimensions/breakpoints as needed. Record factual observations separately from assumptions. Do not copy commercial source. Explain any material design deviation before implementation.
4. Implement shared visual tokens and semantic default shell with minimal neutral content and working links to six variants.
5. Add horizontal, boxed, compact, single-column and blank documents with layout modifiers; ensure blank has no shell chrome.
6. Implement responsive CSS across all regions and minimal navigation state behavior, including keyboard/focus/scroll cleanup. Tune dimensions from observed appearance.
7. Validate the complete matrix, interactions, local paths, console/network and file URLs. Fix task-specific defects; capture iteration states before further edits and append resulting file hashes and actual verification to the manifest.
8. Review requirement mapping, changed paths and unrelated-file preservation. Report completed checks, limitations, deviations and open assumptions; no automatic commit/push.

## Testing Strategy
### Browser matrix
For each of six pages, inspect `1920×1080`, `1366×768`, `390×844`, `320×568` CSS-pixel viewports: 24 base cases. Include mobile landscape at `844×390` and `568×320`. Inspect all visible regions, not just main content. Check menu vertical scroll on short screens.

Sweep width from 320 to 1920 without reloading; inspect `1199/1200/1201px` and every additional implemented breakpoint on each side. Confirm geometry and document scroll width rather than treating hidden overflow as success. Check text wrapping and main/footer placement with temporary long content using browser-only inspection, without adding demo components to deliverables.

### Interaction and accessibility
For all menu-bearing variants: closed/open/dismissed states, repeated toggle, backdrop, close button, Escape, keyboard traversal/focus return and touch-emulated activation. Resize while open from narrow to wide and back; verify scroll remains available and hidden links cannot receive focus. Verify compact labels on focus and mobile full labels; active-link indication, skip link, usable zoom and reduced motion.

### Resources and static behavior
Open every file directly and over local HTTP. Check relative CSS/script/navigation links, console exceptions, failed resources and lack of external runtime dependencies. Verify single-column/blank work without missing menu elements. Inspect DOM for expected regions and absence of out-of-scope widgets. No backend/security integration tests apply.

Use existing browser tools first. If unavailable, report rendered checks as not run and use static/path checks only; do not claim responsive or visual validation from source inspection. Physical-device testing is separate and must be identified as such if performed. No browser tests have been run during planning.

## Risks, Dependencies and Rollback Considerations
- Visual fidelity depends on rendered reference access; HTTP 200/HTML access alone does not validate appearance. Compare what is accessible and report unverified details.
- BA remains unapproved but ready for technical design; Q-001–Q-003 are non-blocking. Material contradictions require business clarification, not silent BA edits.
- System fonts/original icons may differ from commercial demo assets. Avoid adding asset downloads/dependencies merely to hide this distinction; disclose any material fidelity limitation.
- Browser/automation runtime is not yet verified. No new application dependency is required; test tooling availability affects automated coverage only.
- There is no prior application behavior to regress, but shared CSS/script changes affect all six pages. Scope selectors and test all variants.
- Snapshot/manifest must record pre-change existence, operations, hashes, backup locations, iterations and final hashes. Initially absent paths need an absent record, not invented originals. Preserve any existing user edits and initial snapshots.
- Do not change ignore/deployment config automatically. Ensure backup files are not staged or served; any temporary HTTP server should bind locally and expose only necessary application paths, excluding `.git` and `.task-backups`.
- Rollback is a separate plan-and-explicit-approval action. Only reverse paths with manifest evidence and no intervening divergence; preserve task documents by default. Do not use blanket Git restore/reset.

## Validation Checklist
- [ ] Six correctly named standalone layout pages; required names retained.
- [ ] Default/horizontal/boxed/compact distinct at wide viewport.
- [ ] Single column has no sidebar; blank has no navigation/footer chrome.
- [ ] Shared appearance compared with reference; evidence and limits reported.
- [ ] All 24 base viewport cases, landscape and breakpoint transitions checked.
- [ ] No unintended horizontal overflow, overlap or inaccessible controls.
- [ ] Drawer keyboard/touch/dismissal/focus and resize cleanup checked.
- [ ] Footer and short-height navigation remain accessible.
- [ ] Direct-file/local-HTTP loading, local resources and console checked.
- [ ] No dashboard widgets, remote runtime dependencies or unrelated changes.
- [ ] Snapshots/manifest and actual validation records complete.

## Open Questions / Decisions
| ID | State | Technical treatment |
| --- | --- | --- |
| Q-001 (BA) | Open, non-blocking | Plan boxed content/navbar/footer containers with external sidebar, supported by reference markup; not a new user decision. |
| Q-002 (BA) | Open, non-blocking | Plan single-column navbar/footer and chrome-free blank under existing assumptions. |
| Q-003 (BA) | Open, non-blocking | Target modern browsers; record actual browser/version and device emulation used, without universal compatibility claims. |
| TD-001 | Proposed technical choice, 08/11/2026 | Static HTML + shared CSS + minimal classic JS, no build pipeline. |
| TD-002 | Proposed technical choice, 08/11/2026 | Local assets/original SVG, no commercial theme source copying. |
| TD-003 | Proposed technical choice, 08/11/2026 | Initial 1200px navigation threshold; tune against rendered reference and fit tests. |

Ready for task-implement within the stated assumptions. This plan does not constitute implementation or BA approval.
