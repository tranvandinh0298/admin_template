# Technical Plan: Materio Collapse showcase
**Task ID:** 20261109_materio_collapse
**Status:** Ready

## References
- Immutable brief: `tasks/20261109_materio_collapse.md`.
- BA: `docs/business-analysis/20261109_materio_collapse.ba.md`, status `Ready for technical design`.
- Repository instructions: `AGENTS.md`; rollback policy: `.agents/skills/task-implement/SKILL.md`.
- Reference: https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/ui-collapse.html
- Preceding task-analyze in this chat exercised the live reference in Chrome at 1366×900 and measured the page at 390×844. It verified Basic synchronization, Horizontal initially visible, and both mixed-state multiple-target cases. No screenshot comparison was performed. Those observations resolve the technical prerequisites Q-002/Q-003 for this plan without editing the BA or implying user approval.

## Technical Context and Current Behavior
- Static HTML/CSS/JavaScript project without a package manifest/backend. No `collapse.html`, Collapse source assets/tests or earlier technical plan exists.
- Existing `layouts.css` and `layouts.js` supply the responsive shell, mobile drawer, focus management and inert background. Preserve them.
- `buttons.css` supplies element-independent button styling and ripple animation classes. `buttons.js` is scoped to `.buttons-page main` and includes SweetAlert actions; do not load it merely to obtain ripple on this page.
- `accordion.js` demonstrates interruptible height animation, inertness and focus recovery, but enforces sibling exclusivity. Collapse requires independent panels, both axes and a trigger-to-panels relationship; do not directly reuse its controller or refactor its public behavior.
- Local Font Awesome Free assets already exist. No new production dependencies are needed.
- Observed reference states: Basic closed, Horizontal open, both Multiple targets panels closed. Horizontal trigger incorrectly reports aria-expanded=false despite visible content.
- Observed combined action independently inverts each panel: closed/closed becomes open/open; mixed open/closed becomes closed/open, and closed/open becomes open/closed. The last two were directly exercised; equal-state inversions follow the same toggle model and must be explicitly checked during implementation validation.
- Reference combined trigger ARIA is order-dependent for mixed states. Recreate panel behavior with consistent accessibility metadata, not that defect.
- Existing modified `assets/js/layouts.js`, `layouts/single_column_layout.html` and all untracked button/Accordion artifacts belong to earlier work. Preserve them. No planned shared-file edits.
- Node/Playwright tests already run using `PLAYWRIGHT_MODULE=<TEMP>/codex-buttons-validation/node_modules/playwright` and Chrome; recheck availability. Existing HTTP test servers do not serve Collapse paths.

## Requirements / Acceptance Criteria Mapping
R1–R9 refer to brief Requirements; AC identifiers refer to BA.

| Requirements / criteria | Design | Validation |
| --- | --- | --- |
| R1; AC-01 | Three labeled sections, four panels, six triggers (2 Basic, 1 Horizontal, 3 Multiple targets) | DOM structure, target associations and page loading |
| R2; AC-02–AC-03 | Two Basic controls resolve to one panel; prevent default link navigation; update all referencing controls | Both activation paths, unchanged URL, synchronized ARIA |
| R3; AC-04 | Width-axis panel with constrained inner content and interruptible animation | Intermediate width, settled geometry, mobile overflow |
| R4; AC-05–AC-06 | Independent panel state; snapshot desired states before batch inversion | All four combinations, individual controls and section isolation |
| R5; AC-07, AC-14 | Initial closed/open/closed/closed; Horizontal expanded=true; reference visual comparison | Initial visibility/ARIA assertions and desktop/mobile inspection |
| R6; AC-08–AC-10 | Native buttons, link role/button keyboard support, controls IDs, hidden/inert panels, aggregate state rule | Enter/Space/Tab, focus recovery, shared/multi-trigger state checks |
| R7; AC-11–AC-12 | Per-panel animation identity, resize/preference settlement, reduced-motion immediate state | Rapid activation, resize mid-animation, preference changes |
| R8; AC-13 | Wrapping triggers, fluid cards and responsive panel columns | Representative widths, long labels/content, landscape |
| R9; AC-15 | Isolated files, local shared styles/fonts, no existing behavior edits | Resource/runtime checks and relevant regressions |

## Proposed Approach and Alternatives
### Page and styles
- Create root `collapse.html` following BA A-01. Use the existing vertical shell as markup guidance; new-page navigation links point to actual local examples. Do not alter existing navigation pages to add backlinks in this task.
- Load `layouts.css`, local Font Awesome CSS, `buttons.css`, then isolated `collapse.css`; defer `layouts.js` and new `collapse.js`. Do not load SweetAlert, `buttons.js`, Bootstrap or accordion assets.
- Use `.collapse-page` and `.collapse-demo` to scope new styles. Reuse `.btn tone-primary` for buttons/links. CSS alone does not imply interactive button script reuse.
- Provide Basic, Horizontal and Multiple targets cards with reference-guided heading, padding and panel body treatment. Inspect rendered reference before final visual tuning; exact dimensions and layout breakpoints are not established by this plan.
- Use a wrapping flex row for triggers. Multiple panel containers can be two columns at suitable widths and stack when needed, verified against reference. Ensure min-width:0, wrapping text and fluid content; do not globally hide overflow to conceal sizing errors.
- Horizontal uses an outer animated width wrapper and a separately constrained inner card. Determine its natural open width from the available container before animation; inner width stays stable during that animation to avoid continual text reflow. At rest, clear transient widths and let responsive CSS govern size. Recheck the reference content/card width visually instead of assuming the measured 1018px outer wrapper is the intended inner-card width.

### Trigger and panel contract
- Every panel has a unique ID, a `.collapse-panel` marker and initial hidden/inert state. Identify the horizontal panel using `data-collapse-axis="width"`; height is the default.
- Use `data-collapse-targets="panel-id"` or a whitespace-separated ID list for multiple targets. Basic link href points to its panel ID and also declares the explicit target attribute; no arbitrary selector evaluation is needed.
- Each trigger has `aria-controls` listing the same target IDs, `aria-expanded`, and an accessible name. Anchors use href plus role=button. Native buttons use type=button. Panels have accessible labeling where appropriate.
- Initialize records only within the new page root. Resolve IDs, reject missing or out-of-root targets, deduplicate target IDs and do not partially apply an invalid multi-target operation. Guard malformed markup without affecting unrelated components.
- Initial desired states are explicit: Basic false, Horizontal true, panel 1 false, panel 2 false. Render initial hidden/inert/expanded metadata consistently in static HTML and synchronize on initialization without animation.
- Maintain a reverse map of panel records to all controlling triggers, including Basic shared triggers and the aggregate trigger. Do not update only the clicked trigger.

### State rules and accessibility
- A single-target activation inverts that panel's desired state. It never closes another panel automatically.
- A multiple-target activation first snapshots the desired state of every target, then requests the inverse of each snapshot in one batch. Rapid clicks operate on latest desired states, not intermediate rendered dimensions. After the batch, recompute all affected trigger metadata once.

| Panel 1 before | Panel 2 before | After Toggle both |
| --- | --- | --- |
| closed | closed | open / open |
| open | open | closed / closed |
| open | closed | closed / open |
| closed | open | open / closed |

- Single-target `aria-expanded` equals its target desired state. For multiple targets, use true only when all targets are open, false otherwise. Do not use aria-expanded=mixed. Add a separate screen-reader description reporting “0 of 2 panels expanded”, “1 of 2…” or “2 of 2…” so a false aggregate value does not obscure a partially open result. This is a technical accessibility decision correcting order-dependent reference metadata.
- Trigger controls describe requested state during transition; settled content and ARIA must agree. Collapsing content becomes inert immediately, then hidden on completion. Before applying inert to a panel containing focus, return focus to the initiating trigger (or a visible single-target trigger for programmatic closure).
- Native buttons use browser Enter/Space behavior. Link controls prevent default on click and implement Space activation with default scrolling suppressed; Enter uses native link click so it must not be handled twice. Local link triggers must not change URL/hash or scroll position unexpectedly.
- Use existing visible focus styling with scoped refinements where needed. Decorative Font Awesome icons use aria-hidden=true. No SVG introduced.

### Interruptible transitions
- Store desired open state and current animation per panel. Use Web Animations API with a non-animated fallback; start around 200ms ease and visually tune to reference. Animate height for Basic/multiple panels and width for Horizontal.
- Measure current rendered size before cancelling any prior animation; set up the new animation from that size toward measured natural size or zero. Opening removes hidden first; closing makes content inert first.
- Keep a matching animation identity/generation on completion. Stale finish callbacks must never override a more recent request. Clear transient dimension/overflow/inner-width styles after settlement; do not rely solely on an event that cancellation or reduced motion can suppress.
- Resize cancels animations and settles all panels to latest desired state, then returns dimensions to responsive sizing. Reduced-motion initialization and preference change likewise settle immediately.
- No fixed maximum height that clips long content. Horizontal inner content must fit the available width at the smallest supported viewport even when the reference uses a larger nominal card width.

### Ripple and separation from confirmation behavior
- Keep ripple feedback for enabled showcase triggers consistent with the existing button examples using local `.btn-ripple` styling and a small page-scoped helper in `collapse.js`. Clean up on animation completion and with a bounded fallback timer; reduced motion uses existing short feedback styling.
- Ignore disabled/aria-disabled controls if any are encountered. Avoid broadening the existing button controller or loading confirmation code. No new shared abstraction/refactor is justified for this focused task.

### Data flow and security
1. Browser loads static markup and local assets through relative paths.
2. Collapse controller resolves explicit target ID lists and builds panel/trigger maps.
3. Pointer or keyboard activation validates the trigger, prevents local link navigation, snapshots requested changes, applies them and synchronizes metadata.
4. Per-panel transitions settle independently into latest desired states; resize/preference events safely cancel transient geometry.
- No API, storage, account, data mutation or external requests required for the finished showcase. Use textContent for generated state descriptions; no dynamic HTML evaluation.
- Include a concise noscript notice that collapse interactions require JavaScript; do not claim full no-script interactivity.

### Alternatives
- Bootstrap Collapse: matches reference API but adds a whole production dependency and does not address observed ARIA defects by itself. Not selected.
- Extending accordion.js into a shared engine: reduces some duplication but risks unrelated sibling-exclusivity behavior. Keep controllers separate for this task.
- CSS-only max-height/checkbox techniques: cannot cleanly cover multi-target synchronization, focus safety or interrupted width animation. Not selected.
- Reusing buttons.js for ripple: couples this page to SweetAlert/page-specific action logic. A focused local helper is selected instead.

## Files and Components
New files expected:
- `collapse.html` — shell, three sections, four panels and six triggers.
- `assets/css/collapse.css` — component surfaces/layout, width inner-wrapper behavior and screen-reader description utility.
- `assets/js/collapse.js` — target maps, state batches, keyboard/ripple and transitions.
- `tests/collapse.spec.js` — runnable focused browser tests with optional screenshots.

Implementation metadata/artifacts: `.task-backups/20261109_materio_collapse/manifest.md`, original/iteration snapshots as needed and validation images. No expected edits to shared source/vendor files, existing tests/pages, original brief, BA, this plan, root index or configuration. If a target exists at implementation time, inspect ownership/current bytes and snapshot before editing rather than overwriting.

## Implementation Steps
1. Re-read task/BA/plan and current status. Confirm target paths, preserve unrelated work, record absent paths and any exact originals before the first application write.
2. Inspect reference screenshots at desktop/mobile, Horizontal toggle behavior and all four multiple-panel combinations. Retain prior Q-002/Q-003 evidence; resolve any contradictory observation before dependent changes.
3. Create semantic static markup and scoped responsive presentation with consistent initial states, local assets and working navigation links.
4. Implement explicit target validation, independent state records, reverse trigger maps and batch inversion; add ARIA count description and correct initial Horizontal state.
5. Implement focus/inert handling, keyboard controls, interruptible axis-specific animation, resize/reduced-motion cleanup and trigger ripple.
6. Add meaningful focused tests; run them using an external browser runtime without project dependency/config changes. Visually compare renders and refine only from observed evidence, snapshotting each additional iteration first.
7. Run syntax checks and relevant regressions. Record actual commands/outcomes, deviations, limitations, file operations and final hashes in the task manifest. No auto-staging, commit, deployment or document rewrites.

## Testing Strategy
- Suggested command: `PLAYWRIGHT_MODULE=<external-playwright-path> node tests/collapse.spec.js`; resolve actual path for PowerShell. No application tests are run in this plan step.
- Use a loopback-only test HTTP server with exact application resource allowlist, correct MIME types including fonts and safe cleanup. Never expose .git or task backups. Also verify direct file loading.
- Assert three sections, four panels, six triggers, unique associations and initial false/true/false/false. Both Basic triggers must agree after either path.
- Test all four state combinations for Toggle both and both individual controls. Compare unrelated panel states before/after. Verify each aggregate count/ARIA value independent of activation order.
- Check intermediate horizontal width changes as well as final hidden/open state; ensure the tested behavior is width animation rather than an instantaneous display toggle. Check natural settled size and responsive inner content.
- Test Enter/Space on buttons and link controls, visible focus, unchanged URL/hash, no double activation, and hidden-panel Tab exclusion. Use browser-only focusable fixtures for focus recovery instead of adding unrelated product controls.
- Test rapid same/sibling/multi-trigger activation, cancelling animations on resize and reduced-motion change, long content and cleared transient geometry. Sample 320, 390, 568, 768, 991, 992, 1199, 1200, 1366 and 1920 widths plus short landscape heights.
- Check mobile drawer integration, no horizontal overflow, resource/runtime errors, font availability and ripple lifecycle. Visually compare all examples on desktop/mobile and report original shell/font/icon/prose differences.
- Run `node --check assets/js/collapse.js` and `node --check tests/collapse.spec.js`. Run existing layout suite for shell integration; run button/Accordion suites if any shared asset changes or a specific observed regression risk warrants them. Do not rerun unrelated suites repeatedly without cause.

## Risks, Dependencies and Rollback Considerations
- Reference ARIA is not authoritative where it contradicts content. Correct Horizontal to expanded=true and replace aggregate order dependence with the explicit all-open/count rule.
- Batch operations can accidentally become “open all/close all”; snapshot desired states and test both mixed cases.
- Reflow during width animation can clip content or leave stale widths; stable inner sizing during animation and natural-size cleanup are required.
- Closing panels must not leave active focus or tabbable descendants hidden. Move focus before inertness and verify it.
- Broad button/global selectors and menu inertness can interfere; isolate controller roots and avoid reused menu IDs.
- Existing production dependencies are local styles/fonts; browser-test availability is an environment dependency, not a new project package requirement.
- Pre-existing unrelated edits/untracked artifacts must remain intact. Backup originals before unexpected shared-file edits and explain any deviation.
- Record new paths as absent and final hashes. Rollback requires explicit approval and divergence checks, and preserves task/BA/plan unless deletion is separately authorized.
- Backup Git/deployment exclusions were previously reported unconfigured. Recheck/report honestly; do not automatically edit config or include backups in staging/deployment. No secrets are needed.

## Validation Checklist
- [ ] Reference screenshots inspected at desktop/mobile; initial Horizontal and combined toggle verified.
- [ ] Three sections, four panels and six correctly associated triggers.
- [ ] Basic synchronization and unchanged link URL/hash.
- [ ] Width animation, final responsive geometry and long-content fit.
- [ ] Four combined-toggle outcomes and section isolation.
- [ ] Consistent single/aggregate expanded states and count description.
- [ ] Keyboard, focus recovery and hidden-content interaction exclusion.
- [ ] Rapid requests, resize, reduced motion and ripple cleanup.
- [ ] HTTP/file resources, syntax checks and relevant regressions pass.
- [ ] Snapshot manifest, iteration history and final hashes complete; unrelated work preserved.

## Open Questions / Decisions
- Q-001 remains a non-blocking BA assumption: root `collapse.html`.
- Q-002 prerequisite resolved for this plan by preceding live-reference observation: Horizontal starts visible; implementation sets expanded=true. BA text is not edited in task-plan.
- Q-003 prerequisite resolved by observing both mixed cases: invert each panel individually. Equal-state combinations are included in implementation validation.
- Q-004 remains non-blocking: light English examples and existing Font Awesome equivalents if icons are needed.
- Technical decision: aggregate expanded=true only when all targets are open, with a separate expanded-count description. This corrects reference metadata without changing panel-toggle behavior.
- Initial plan decisions: vanilla isolated controller, no shared refactor/new production dependency, explicit ID lists, axis-specific interruptible animation and scoped ripple. No earlier plan history exists.
- Ready for implementation; readiness does not imply BA approval, completed visual comparison or passing application tests.
