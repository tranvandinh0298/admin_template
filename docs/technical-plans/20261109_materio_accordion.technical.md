# Technical Plan: Materio accordion showcase
**Task ID:** 20261109_materio_accordion
**Status:** Ready

## References
- Immutable brief: `tasks/20261109_materio_accordion.md`.
- BA: `docs/business-analysis/20261109_materio_accordion.ba.md`, status `Ready for technical design`; Q-001–Q-003 non-blocking and unanswered.
- Repository instructions: `AGENTS.md`; snapshot policy: `.agents/skills/task-implement/SKILL.md`.
- Reference: https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/ui-accordion.html
- Preceding task-analyze in this chat: Chrome headless inspected reference DOM/computed dimensions at 1366×900 and 390×844, initial states, closing the first open standard item and opening another. No screenshot comparison was performed. This evidence does not establish pixel fidelity or verify every variant interaction.

## Technical Context and Current Behavior
- Static HTML/CSS/JavaScript repository; no package manifest or backend. `accordion.html`, accordion source assets and accordion tests do not exist yet.
- `layouts/default_layout.html` supplies vertical-shell markup. `assets/css/layouts.css` supplies shared light tokens, sidebar, mobile drawer and focus styling. `assets/js/layouts.js` manages drawer state, background inertness and focus; it must remain independent of accordion state.
- Local Font Awesome Free 6.7.2 solid CSS/webfonts already exist. Reuse these assets without changing them. No SweetAlert or button assets are needed by this page.
- Reference groups: `accordionExample`, `accordionIcon`, `accordionCustom`, `accordionCustomIcon`, three items each, initial open positions 1/3/1/3. At 1366px, measured content groups are two columns, each 517px, separated by 24px. At 390px each is 358px wide with 16px outer gutters and no measured horizontal overflow.
- Reference standard header backgrounds measured white; customized headers measured rgb(250,250,250). Exact custom indicator graphics, typography and shadows still require visual inspection. Do not invent visual measurements.
- Current Git status includes modified `assets/js/layouts.js` and `layouts/single_column_layout.html`, plus untracked task/button artifacts and accordion brief/BA. Preserve all existing work; it is not owned by this implementation.
- Existing tests use Node/Playwright with an external module through `PLAYWRIGHT_MODULE` and Chrome channel. External Playwright currently exists under `<TEMP>/codex-buttons-validation/node_modules/playwright`; recheck availability at implementation. Their servers have allowlists that do not cover accordion resources.

## Requirements / Acceptance Criteria Mapping
R1–R9 refer to numbered brief Requirements; AC identifiers refer to BA.

| Requirement / BA criteria | Design element | Verification |
| --- | --- | --- |
| R1; AC-01 | Four labeled sections, each with three header/panel pairs | DOM count and accessible names |
| R2, R5; AC-02 | Variant modifiers, shared tokens, Font Awesome equivalents; inspect rendered reference before tuning | Desktop/mobile visual comparison; report deviations |
| R4; AC-03 | Explicit initial state 1/3/1/3 in HTML | Visibility, expanded state and indicator assertions on load |
| R3; AC-04–AC-06 | Per-group selection state and toggle controller | Open/close, sibling switch and cross-group isolation in all four groups |
| R6; AC-07–AC-08 | Native buttons, unique IDs, aria-expanded/controls, labeled panels, hidden/inert collapsed content | Tab/Enter/Space, focus style and association checks |
| R7; AC-09–AC-10 | Interruptible height animation with cleanup; reduced-motion immediate state | Rapid toggles/sibling changes, resize, reduced-motion assertions |
| R8; AC-11 | Responsive two-column grid, fluid single-column fallback, wrapping content | Viewport geometry and long-content tests |
| R9; AC-12–AC-13 | Local resources, isolated source files, unchanged shared assets | HTTP/file load errors, font loading, relevant regression suites |

## Proposed Approach and Alternatives
### Page and presentation
- Create root-level `accordion.html`, following BA A-01. Use static semantic markup so content structure and initial state do not depend on fetching templates.
- Adapt the existing vertical shell in the new page, with valid links to local layout/button examples and the active Accordion item. Use Font Awesome for new-page icons, including menu controls; do not copy SVG markup from the layout example.
- Load shared `layouts.css`, local Font Awesome CSS, then `accordion.css`; defer shared `layouts.js` and new `accordion.js`. Do not load `buttons.css`, `buttons.js`, SweetAlert or Bootstrap.
- Scope component selectors beneath `.accordion-page`/`.accordion-demo`; use distinct accordion header/panel classes rather than `.btn` or shell selectors.
- Group the standard/without-arrow examples in the first grid row and custom/custom-with-icons examples in the second. Start with two columns at a content-appropriate breakpoint of 992px and a single column below it; confirm the reference's intermediate-width behavior and adjust before finishing. This breakpoint is a technical starting point, not an established business requirement. Use 24px gaps, fluid widths and `min-width: 0`.
- Inspect reference screenshots during implementation to finalize indicator shape, active styling, borders, separation and shadow. Use local Font Awesome chevron/custom equivalents; leading custom icons should correspond to chart, heart and lock seen in reference markup. Hide decorative icons from assistive technology.
- Wrap long titles and content; use natural height rather than fixed panel heights. Do not mask defects with global overflow-x hiding.

### Semantic contract and state
- Each section has an accessible heading; each item uses a heading containing `button type="button"` with unique `id`, `aria-controls` and explicit `aria-expanded="true|false"` from initial markup.
- Panels have unique IDs and `aria-labelledby` referencing their trigger; use an appropriate region role where useful. Collapsed panels start `hidden` and `inert`; open panels start visible and interactive. Do not reproduce missing aria-expanded attributes from the reference.
- One controller initializes each `.accordion-demo`. Resolve trigger/panel pairs within that group, validate associations, and avoid queries that modify another group's items.
- Track desired open item per group, allowing no open item. On activation of the open item, close it; otherwise close its sibling and open the requested item. At settled state at most one panel is visible per group.
- Enter and Space rely on native button activation; do not add key handlers that duplicate clicks. Arrow/Home/End navigation is outside the requested minimum and need not be added.
- On programmatic closure of a panel containing focus, move focus to its header before applying inert/hidden. Opening does not force focus into content. Preserve shell focus behavior.

### Transitions and rapid interaction
- Use one animation record per panel, preferably Web Animations API for numeric height interpolation, with a non-animated fallback when unavailable. Animate from current measured height to content height or zero for roughly 200ms; tune visually to reference. Avoid arbitrary max-height ceilings.
- On a new request, measure the current rendered height before cancelling the previous animation. Replace the previous animation from that height and use a generation token or animation identity so stale completion callbacks cannot hide/reopen a panel after a newer request.
- Opening removes hidden/inert, updates trigger state and active treatment, measures target height, and starts the transition. Closing updates expanded state, removes content from interaction immediately using inert, then applies hidden after the current closing animation completes. Opening a sibling may briefly show the old panel shrinking while the new panel expands; settled state must satisfy one-open-item behavior.
- On completion clear temporary height/overflow styles to restore natural sizing. On viewport resize settle/cancel active transitions to their desired states before remeasurement, avoiding stale pixel heights. Avoid permanent observers unless content behavior actually requires them.
- If reduced motion is requested, settle immediately. If the preference changes during animation, cancel and settle consistently. Cleanup must not rely only on a transitionend event that may never fire.

### Data flow and security
1. Browser loads HTML, local CSS, fonts and deferred scripts through relative paths.
2. Markup establishes initial state and links; controller validates and synchronizes group state without altering other groups.
3. Native header clicks request state changes; controller updates ARIA, focus safety, visibility and transition state.
4. Animation completion or interruption settles the latest requested state.
- No API, persistence, form submission, authentication or application payload. Do not evaluate dataset content or use innerHTML for runtime state changes. Demo prose is static; no external links/actions are required inside panels.
- If JavaScript is unavailable, include a concise noscript notice that interaction requires JavaScript; do not claim fully functional no-script behavior.

### Alternatives considered
- Bootstrap collapse: close to reference machinery, but adds an unused framework dependency to a vanilla repository. Not selected.
- Native details/name grouping: simpler semantics, but gives less control over exact transition interruption and custom treatment. Native button/panel controller selected for explicit state control.
- CSS-only arbitrary max-height: smaller implementation but can clip long content and yields inconsistent timing. Not selected.
- Reusing button JavaScript/classes: creates coupling with ripple and confirmation handling; unnecessary for accordion controls. Not selected.

## Files and Components
Expected new application/test files only:
- `accordion.html` — static shell, four variant sections, 12 item pairs.
- `assets/css/accordion.css` — isolated component, grid, focus and reduced-motion styling.
- `assets/js/accordion.js` — isolated state and animation controller.
- `tests/accordion.spec.js` — focused runnable browser tests with optional screenshot output.

Implementation rollback artifacts: `.task-backups/20261109_materio_accordion/manifest.md`, any required original/iteration snapshots and validation images. Record absent paths before creation. No planned writes to shared layout/vendor files, existing button page/tests, original brief, BA, this plan, root index or configuration. If expected target paths appear before implementation, inspect and snapshot current bytes rather than overwrite them.

## Implementation Steps
1. Re-read brief/BA/plan, recheck status and file ownership, confirm no new blocker. Record all intended absent/new paths and any originals in the task manifest before application writes.
2. Open reference render at desktop/mobile and inspect custom indicators and active treatments. Verify toggle/sibling behavior in all variants and intermediate-width layout; report conflicts instead of silently changing BA behavior.
3. Create static page with local links, Font Awesome, four groups and initial states. Add isolated responsive styling; preserve shared files.
4. Implement per-group toggle logic, native keyboard handling, ARIA/visibility/focus contracts and interruptible transitions. Guard missing/mismatched elements without crashing unrelated shell behavior.
5. Add targeted tests using existing external Playwright runtime; no package/config changes unless separately justified. Include a loopback server allowlisting only required application assets and correct HTML/CSS/JS/font MIME types; never serve task backups or Git files.
6. Run focused tests, visually inspect page/reference at desktop/mobile, and refine only from observed discrepancies. Before each additional source/test iteration, snapshot the current state according to task-implement.
7. Run relevant regressions and source syntax checks. Record commands, real outcomes, remaining limitations, changed-file hashes and iteration boundaries in the manifest. Do not stage, commit, deploy or update task/BA/plan during implementation.

## Testing Strategy
- Suggested command: set `PLAYWRIGHT_MODULE` to the available external installation, then `node tests/accordion.spec.js`. Recheck browser/module availability; do not claim success if unavailable.
- Test all four groups, 12 triggers, unique IDs, matching associations, initial 1/3/1/3 states, open/close and sibling switching, and snapshots of other groups before/after each operation.
- Test pointer, Enter and Space; visible focus, no duplicate activation, proper expanded attributes. Temporarily inject a focusable fixture into a panel in browser memory to verify hidden-panel Tab exclusion and closure focus recovery without adding unrelated UI to the delivered page.
- Test repeated same-item toggles and fast sibling sequences with assertions on the final desired state, hidden/inert attributes and cleared temporary heights. Exercise resize during transitions and long content so tests do more than count markup.
- Test reduced motion both at initial load and when changed while transitioning; target state must settle with no animation dependency.
- Sample widths 320, 390, 568, 768, 991, 992, 1199, 1200, 1366 and 1920, plus short landscape heights. Assert no horizontal overflow and usable visible content; test mobile drawer focus and reset across its 1200px boundary.
- Verify local font loading, icon names, no new SVG, no missing assets/runtime errors, both direct file and loopback HTTP access. Close test server/browser in finally blocks.
- Visually compare all variants and open/closed states with reference at desktop/mobile. Report retained shell/system font/Font Awesome differences; computed dimensions alone do not prove visual fidelity.
- Run `node --check assets/js/accordion.js` and `node --check tests/accordion.spec.js`. Run existing layout suite for shell integration; run button suite if any shared asset changes or an observed concern justifies it. Existing button fixtures include external link examples: keep any action tests confined to safe local/mock destinations.
- This planning step did not run application tests or create validation artifacts. Prior analysis only exercised the external reference.

## Risks, Dependencies and Rollback Considerations
- Rapid animation callbacks can overwrite newer state; cancellation tokens, final-state assertions and clearing inline heights are required.
- Hidden content can remain keyboard-accessible during collapse; inertness must be applied at closure start, with focus recovery before hiding.
- Global layout button/focus styling and menu inertness can interfere; isolate accordion selectors and do not reuse menu IDs.
- Reference accessibility omissions must not be copied. Visual equivalence uses Font Awesome substitutes and system fonts, so pixel identity is not promised.
- Existing user-modified/untracked files must remain untouched. Preserve their current hashes if implementation unexpectedly needs to alter shared assets, and document why.
- Original task state is expected absent for all four new files. Rollback may only delete task-created paths after explicit approval and divergence checks; never infer ownership from Git status alone. Preserve immutable task/BA/plan unless deletion is separately authorized.
- Earlier task manifests report backup Git/deployment exclusions unconfigured. Recheck this condition and report it honestly; do not automatically edit configuration or stage/deploy backups. No secrets are needed for this task.
- Dependencies: existing local fonts/layout assets and an available browser-test runtime. No backend or new production package dependency.

## Validation Checklist
- [ ] Four clearly identified variants, three items per group, initial 1/3/1/3.
- [ ] Reference indicators, layout and state treatments visually inspected and differences recorded.
- [ ] Toggle, sibling exclusivity and group isolation pass for every variant.
- [ ] Native keyboard activation, visible focus, panel associations and hidden focusability pass.
- [ ] Rapid activation, interrupted animations, long content and resize pass.
- [ ] Reduced-motion initialization and preference-change behavior pass.
- [ ] Desktop/mobile/landscape fit, drawer integration and local resources pass.
- [ ] Syntax and relevant regressions pass, with exact commands/results recorded.
- [ ] Snapshot manifest, iteration history and final hashes complete; unrelated files preserved.

## Open Questions / Decisions
- Q-001: filename/location remains a BA assumption; use root `accordion.html` unless user directs otherwise.
- Q-002: default light styling and English demo labels/prose remain assumptions; no localization scope added.
- Q-003: use existing Font Awesome equivalents; exact glyphs chosen after reference visual inspection. This is a technical working choice, not a recorded user answer for Accordion.
- No blocking business questions. Plan is Ready for implementation; readiness does not mean BA approval or verified implementation.
- Initial plan decisions: isolated vanilla HTML/CSS/JS, local existing assets, explicit button/panel semantics, interruptible height animations, no shared-file changes expected. No earlier technical-plan history exists for this task.
