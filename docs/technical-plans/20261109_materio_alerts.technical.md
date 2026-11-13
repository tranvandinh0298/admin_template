# Technical Plan: Materio Alerts showcase
**Task ID:** 20261109_materio_alerts
**Status:** Ready

## References
- Brief: `tasks/20261109_materio_alerts.md` (immutable).
- BA: `docs/business-analysis/20261109_materio_alerts.ba.md`, status `Ready for technical design`.
- Repository rules: `AGENTS.md`; pre-change snapshot policy: `.agents/skills/task-implement/SKILL.md`.
- Reference: https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/ui-alerts.html
- Preceding task-analyze in this chat: live Chrome inspection confirmed six groups, 38 initially visible alerts, 10 close controls, removal on Enter, focus falling to BODY, restoration of 38 examples on reload and no measured overflow at 390px. No screenshot comparison or screen-reader test was performed. Exact dismissal timing remains unmeasured.

## Technical Context and Current Behavior
- Static HTML/CSS/JavaScript repository with standalone button/Accordion/Collapse pages, shared layout CSS/JavaScript, local Font Awesome Free assets and Node/Playwright tests. No backend/package manifest or Alerts page exists; no prior Alerts technical plan exists.
- `layouts.css` provides shell, tokens, global button/font/focus styling; `layouts.js` provides mobile drawer focus and inert behavior. Reuse these unchanged.
- Inline Alerts do not need SweetAlert, button confirmation JavaScript, Collapse or Accordion controllers. No new production dependency is necessary.
- Reference groups contain 7 Basic, 7 Outline, 7 Solid, 7 Dismissible, 3 Heading and 7 Icon examples. Colors in seven-example groups are Primary, Secondary, Success, Danger, Warning, Info and Dark. Heading examples are Success, Danger and Primary with icon/title/body/close controls. Icon examples use solid treatment.
- Reference Dismissible and Heading close controls remove their containing alert from DOM. All examples return after reload. Closing a focused control leaves focus on BODY; the implementation must improve this to satisfy BA.
- Existing modified `assets/js/layouts.js`, `layouts/single_column_layout.html` and untracked artifacts from earlier tasks are unrelated work. Preserve them; no shared-file changes planned.
- Existing tests use external Playwright via `PLAYWRIGHT_MODULE` and Chrome channel. A previously usable installation is `<TEMP>/codex-buttons-validation/node_modules/playwright`; recheck before implementation. Test servers use explicit allowlists and will need a separate Alerts allowlist.

## Requirements / Acceptance Criteria Mapping
R1–R9 reference brief Requirements; AC identifiers reference BA.

| Requirement / BA criteria | Design | Validation |
| --- | --- | --- |
| R1–R2; AC-01 | Six named sections, 38 static examples, observed color coverage | Counts, variant/color inventory and initial visibility |
| R3; AC-02, AC-16 | Scoped basic/outline/solid treatments and reference visual inspection | Desktop/mobile comparison and recorded deviations |
| R4; AC-03–AC-04 | Heading/body hierarchy, icon containers and local Font Awesome equivalents | Three heading structures, seven icon examples, wrapping/geometry checks |
| R5; AC-05, AC-08 | Only explicit close controls remove their owning alert | Pointer/keyboard isolation and no remaining removed controls |
| R6; AC-06–AC-07 | Native accessible close buttons; deterministic focus fallback | Enter/Space/Tab, focus visibility, first/middle/last/empty-group cases |
| R7; AC-09–AC-10 | Meaningful text, role=alert, decorative icons hidden | Semantics/name checks; screen-reader claims limited to actual tests |
| R8; AC-11–AC-13 | Wrapping layout, reserved close space, reliable immediate removal | Long content, narrow/landscape widths, repeated close, reduced motion |
| R9; AC-14–AC-15 | No persistence, local isolated assets, unchanged shared code | Reload restores 38; resources, font loading and relevant regression checks |

## Proposed Approach and Alternatives
### Page and visual structure
- Create root `alerts.html` following BA A-01. Adapt the established vertical shell with valid local links and an active Alerts entry only in this new page. Do not add backlinks to existing pages in this task.
- Load `layouts.css`, local Font Awesome CSS and new `alerts.css`; defer `layouts.js` and `alerts.js`. Do not load SweetAlert, `buttons.js` or other component scripts/styles unless a concrete need is established.
- Scope all new selectors beneath `.alerts-page` or distinctive `.alert-demo-*` names. Avoid broad `.close`, `.icon-button` or generic button overrides that could alter the drawer.
- Six sections have accessible headings with IDs and tabindex=-1 for programmatic focus fallback. Add 38 static alert containers with role=alert and clear message text. All examples start visible.
- Inspect reference screenshots before finalizing grid arrangement, breakpoints, card padding, alert surfaces, borders, radii, text colors and close/icon placement. Prior DOM inspection does not establish these visual values. Use existing light tokens where appropriate and scoped color variables for variants.
- Basic uses reference-guided light treatment, Outline emphasizes borders, Solid uses stronger backgrounds. Dismissible follows the matching reference treatment. Heading includes a suitable heading element, icon and readable body content; verify separators/extra copy from the live reference before tuning. Icon alerts use solid surfaces with a decorative leading icon.
- Use original English sample wording; state the variant or semantic meaning in words so color is not the only cue. Use equivalent local Font Awesome icons; all decorative icons and visual close glyphs are aria-hidden=true. No SVG.
- Reserve space for close controls rather than placing them over text. Use wrapping flex/grid, min-width:0 and overflow-wrap for long labels/content. Do not hide page overflow to mask layout defects.

### Dismissal contract
- Mark dismissible containers with a task-scoped attribute such as `data-alert-dismissible`; close controls use `button type="button" data-alert-dismiss` and an accessible name identifying dismissal, with context where useful.
- Use delegated click handling limited to `.alerts-page main`. Resolve the closest close button and its owning dismissible alert, validate both belong to the root and section, then remove only that alert. Native Enter/Space creates the same click; no duplicate keyboard activation handlers.
- Perform synchronous DOM removal with no custom animation in the initial implementation. Reference removal was observed without a fade class, but timing was not measured; recheck classes/computed duration and dismissal in implementation. If a meaningful transition is found, either implement it with cancellation/reduced-motion cleanup or explicitly report the deviation before finalizing. Do not invent a long animation.
- Synchronous removal naturally has no intermediate invisible focusable content and does not depend on animationend. Ignore events whose alert is already disconnected; repeated activations cannot remove another message by stale reference.
- Non-dismissible examples have no close handler. Clicking alert text or icon does not dismiss it. No timers, storage, reload interception or global notification service.

### Focus recovery policy
- Capture whether the removed alert contains document.activeElement before deletion. Only recover focus when true; programmatic dismissal of an unrelated alert must not steal focus.
- Determine a fallback in document order within the same section before removal: next enabled visible close button, otherwise previous enabled visible close button, otherwise the section heading. Exclude controls in the alert being removed, hidden/inert content and disconnected elements.
- Remove the alert, verify fallback is still connected/visible and focus it with preventScroll where appropriate. If the expected control is unavailable, use the section heading. As a defensive last fallback use the page heading, also tabindex=-1.
- Give programmatically focused headings a visible focus treatment; do not suppress their outlines. Do not make them permanent Tab stops. The next Tab should proceed naturally from the recovered location.
- Cases covered: first alert, middle alert, last alert with earlier dismissible examples, only remaining alert and empty group. Closing the final alert leaves the section heading/card so the user retains context; no restore button or invented empty-state workflow required.
- This intentionally improves the reference's BODY-focus result to meet BA AC-07. It does not change which alert is dismissed.

### Accessibility and state
- Static containers use role=alert consistent with the reference. Avoid adding a second assertive live region or duplicating aria-live on nested content. No automatic focus into alerts at load.
- Heading hierarchy remains coherent with the page and section headings. Text conveys success/error/warning information where applicable; color names alone should not replace the message.
- Preserve native button semantics and visible focus. Close hit areas must remain usable on mobile, with enough reserved content space; verify actual geometry rather than assume icon size is sufficient.
- Reload rebuilds all static examples, with no persistence or automatic expiry. Do not claim that initial static role=alert markup guarantees an announcement in every screen reader; report actual assistive-technology checks separately.

### Data flow and security
1. Browser loads static markup, local styles/fonts and deferred shell/Alerts scripts.
2. User activates a native close button.
3. Controller validates the owning alert and captures focus/fallback context.
4. Controller removes that alert and conditionally restores focus within visible page content.
5. Reload starts from the original 38-example markup.
- No network API, application payload, database or authentication changes. No runtime HTML injection, eval or untrusted selectors required; any generated text uses textContent.
- No production network dependency: use existing local Font Awesome resources and licenses unchanged.

### Alternatives considered
- Bootstrap Alert plugin: matches reference data API but introduces framework weight and does not solve focus recovery. Not selected.
- SweetAlert: modal confirmation behavior outside inline alert scope. Not selected.
- Hide instead of remove: preserves unused DOM/focus-management burden and differs from observed reference removal. Not selected.
- Build a shared global notification framework: no dynamic notification requirement; unnecessarily broad. Not selected.
- Animated removal: useful only if reference verification supports it; immediate removal is simpler, deterministic and reduced-motion friendly. Finalize after timing check.

## Files and Components
Expected new application/test files:
- `alerts.html` — static shell, six sections, 38 messages and 10 close controls.
- `assets/css/alerts.css` — isolated surfaces, colors, responsive layout, icons and close/focus treatment.
- `assets/js/alerts.js` — scoped dismissal and focus recovery.
- `tests/alerts.spec.js` — focused browser validation with optional screenshot output.

Implementation artifacts: `.task-backups/20261109_materio_alerts/manifest.md`, absent/original records, iteration snapshots and validation images. No expected edits to shared layout/vendor files, existing component pages/tests, brief, BA, this plan, index or configuration. If a target path appears before implementation, inspect and snapshot it instead of overwriting.

## Implementation Steps
1. Re-read brief/BA/plan and recheck status/ownership. Record all intended absent paths or exact originals before application writes according to task-implement.
2. Inspect reference desktop/mobile render, heading/icon arrangements and actual dismissal timing. Confirm 38 initially visible messages, 10 dismissible examples and reload restoration; record any discrepancy.
3. Create static semantic examples and isolated responsive styles using local fonts/icons, with meaningful wording and clear color/variant coverage.
4. Add delegated dismissal with validation, synchronous removal and focus fallback. Keep native keyboard behavior and avoid duplicate event bindings.
5. Add runnable targeted tests using the available external Playwright runtime; no project dependency/config changes by default. Use a loopback server with exact asset allowlist, proper font MIME types, error handling and cleanup; exclude .git/backups.
6. Run targeted tests, inspect reference/implementation screenshots, refine from observed evidence and snapshot before each further iteration. If dismissal animation is added, test cancellation and reduced motion explicitly.
7. Run syntax checks and relevant regressions. Record commands, outcomes, deviations, actual operations and final hashes in the task manifest. Do not stage, commit, deploy or update task/BA/plan as part of implementation.

## Testing Strategy
- Suggested command: set `PLAYWRIGHT_MODULE` to an available external module, then run `node tests/alerts.spec.js`. Tests have not run during this plan step.
- Assert six sections, 38 alerts, seven relevant colors in five groups, three heading examples, seven icon alerts and 10 close controls. Verify initial visibility and unique section IDs.
- Close each Dismissible and Heading example on fresh pages or controlled sequences; assert only the intended node is removed and other messages remain unchanged. Check text/icon clicks on non-dismissible examples do nothing.
- Test pointer, Enter and Space, accessible names and visible focus. Exercise first/middle/last/only-remaining alert focus paths, final empty group and next Tab navigation. Browser-only fixtures may verify that programmatic removal outside active focus does not steal focus.
- Exercise fast repeated actions and stale removed-node events without confusing naturally consecutive dismissals after focus moves. Assert no remaining detached/invisible control is tabbable and no runtime errors occur.
- Verify reload restores 38 messages and no local/session persistence or expiry timer is introduced. Reduced-motion mode must preserve dismissal and focus behavior; no custom animation is required for the selected immediate-removal design.
- Inject long headings, long/unbroken words and body text in browser memory; check close-control overlap, content wrapping and icon alignment. Do not deliver test-only extra UI.
- Sample widths 320, 390, 568, 768, 991, 992, 1199, 1200, 1366 and 1920 with short landscape cases. Check drawer keyboard/focus integration and resource/runtime errors.
- Verify direct file and loopback HTTP loading, local font availability and no SVG. Capture desktop/mobile screenshots under task validation metadata when enabled, and inspect them; DOM counts are not visual proof.
- Run `node --check assets/js/alerts.js` and `node --check tests/alerts.spec.js`. Run existing layout suite for shell integration; broaden to button/Accordion/Collapse suites only if shared source changes or concrete regression concerns warrant it.
- Screen-reader behavior is not covered merely by browser attribute tests. If no manual screen-reader test runs, explicitly state that limit and avoid claiming announcements were verified.

## Risks, Dependencies and Rollback Considerations
- Removing the focused close button can lose keyboard position. Deterministic next/previous/heading fallback and focused-heading styling are required.
- General close/button selectors can capture mobile drawer controls; scope handlers and CSS under the new page/component root.
- Low-contrast color combinations and icon-only meaning can undermine usability. Compare reference treatments and check readability/contrast during implementation; report any necessary accessible styling adjustment.
- Many static role=alert elements may behave differently across assistive technologies. No dynamic announcement service or broad guarantee is implied.
- Narrow layouts can overlap text and close controls; reserve space and test long content at the smallest viewport.
- Dependencies: existing local layout/font assets and a usable browser-test runtime. No backend or new production package dependency.
- Preserve all unrelated modified/untracked work. If shared-file changes become necessary, explain the deviation and snapshot exact current bytes before touching them.
- Record original absence for created paths and final hashes. Rollback requires explicit approval and divergence checks; preserve brief/BA/plan unless separate deletion authorization exists.
- Earlier manifests report backup Git/deployment exclusions unconfigured. Recheck and report honestly; do not automatically edit config or stage/deploy backups. No secrets needed for this task.

## Validation Checklist
- [ ] Reference desktop/mobile appearance and dismissal timing inspected.
- [ ] Six sections, 38 messages, correct color/heading/icon coverage and 10 close controls.
- [ ] Dismissal affects only the owning alert; non-dismissible content remains intact.
- [ ] Pointer/Enter/Space, accessible names and visible focus pass.
- [ ] Next/previous/heading focus fallback, last-message and empty-group cases pass.
- [ ] Repeated actions, reload restoration and reduced motion pass.
- [ ] Long content, icon alignment and mobile close geometry pass.
- [ ] Local resources, HTTP/file behavior, syntax and relevant regressions pass.
- [ ] Visual differences and unverified assistive-technology/browser coverage reported.
- [ ] Snapshots, iteration records and final hashes complete; unrelated files preserved.

## Open Questions / Decisions
- Q-001 remains a non-blocking assumption: root `alerts.html`.
- Q-002: preceding analysis verified DOM removal. Exact timing was not measured; immediate removal is the initial design, with implementation-time timing verification and an explicit deviation record if needed. No unresolved business choice blocks this plan.
- Q-003 remains non-blocking: original English messages and existing Font Awesome equivalents; user may specify alternatives later.
- Q-004: preceding analysis confirmed all 38 visible at load and restored after reload; no persistence/expiry functionality is added. BA is unchanged by task-plan.
- Focus recovery to next close control, previous control or section heading is an explicit technical improvement over the reference, required by BA.
- Initial technical decisions: isolated vanilla page/controller, local assets, no production dependencies, no shared refactor, DOM removal and scoped focus recovery. No earlier plan history exists.
- Ready for implementation, not a claim of BA approval or passing implementation validation.
