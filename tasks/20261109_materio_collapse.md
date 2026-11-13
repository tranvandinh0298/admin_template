# Task: Replicate Materio collapse showcase
**Task ID:** 20261109_materio_collapse

## Context
The user requests the Collapse component next, based on:
https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/ui-collapse.html

The repository is a static HTML/CSS/JavaScript admin template with layout examples, button.html, accordion.html, shared layout assets, local Font Awesome/SweetAlert2 resources and Node/Playwright tests. No collapse page or task with this ID was found during discovery.

Reference HTML retrieved through PowerShell identifies Basic, Horizontal and Multiple targets examples. Basic has a link and a button controlling the same panel. Horizontal has a width-toggle button. Multiple targets has first-panel, second-panel and both-panels controls. Basic and multiple-target panels lack the show class; the horizontal panel has show despite its trigger declaring aria-expanded=false. These are markup observations, not verified rendered behavior; resolve the initial-state mismatch by inspecting the live reference during later analysis.

Existing modified shared layout JavaScript/single-column HTML and untracked button/accordion work must be preserved.

## Objective
Provide a directly viewable Collapse showcase matching the reference's relevant appearance and interactions, including vertical, horizontal and multiple-target examples.

## Scope
### In scope
- One HTML page demonstrating Basic, Horizontal and Multiple targets collapse examples.
- Link and button triggers for one panel, width-based collapse, independent panel controls and a control targeting both panels.
- Reference-guided initial states, animations, visual styling, responsive behavior and accessible interaction states.
- Supporting assets and focused validation needed during later implementation.

### Out of scope / Non-goals
- Backend actions, APIs, authentication, database storage or persistence across reloads.
- Rebuilding the full Materio admin navigation, customizer or unrelated component pages.
- Changing button confirmation flows, accordion behavior or unrelated layout work.
- BA, technical design, source code and tests during task-create.

## Requirements
1. Deliver a static HTML showcase with three clearly identified sections: Basic, Horizontal and Multiple targets.
2. Basic must include a link trigger and a button trigger controlling the same content panel. Both controls must remain synchronized with the panel's actual state.
3. Horizontal must demonstrate expansion/collapse along the width axis, following the reference's presentation and allowing content to fit narrow screens.
4. Multiple targets must include two panels, a control for each individual panel and a control targeting both. Individual operations must not change unrelated panels or other sections. Verify the reference's combined-toggle behavior when the two panels start in different states; do not invent that behavior from the label alone.
5. Inspect the rendered reference before finalizing initial visibility, combined-toggle semantics, dimensions, surfaces, spacing, colors and animation. Resolve the observed horizontal initial-state mismatch explicitly; visible state and accessibility attributes must agree in the delivered page.
6. Support pointer and keyboard operation, visible focus, accurate expanded state and trigger-to-panel associations, including a trigger with multiple targets. Collapsed content must not leave hidden controls reachable by Tab. Collapse links act as local controls rather than navigating away.
7. Opening and closing must remain reliable under repeated/rapid activation and viewport changes, without stuck dimensions or clipped settled content. Respect reduced-motion preferences.
8. At desktop and mobile widths, triggers wrap as necessary and content remains readable without unintended overlap or horizontal overflow.
9. Preserve existing repository behavior and user work. Reuse appropriate existing layout/button conventions and authorized local assets; avoid unnecessary dependencies. Follow snapshot requirements during implementation.

## Constraints
- Deliver ordinary HTML/CSS/JavaScript compatible with the existing static project, not a framework-only application.
- Keep this original task brief immutable; later stages own BA, technical plan and application changes separately.
- Recreate commercial theme styling using authorized resources rather than assuming public demo access permits copying its bundles.
- If icons are needed, prefer existing local Font Awesome rather than SVG, consistent with the established user preference.

## Acceptance Criteria
1. A directly viewable page contains all three labeled sections and their specified triggers/panels.
2. Either Basic trigger toggles the same panel; after operation, both controls expose the correct state and unrelated examples retain theirs.
3. Horizontal visibly expands/collapses width, settles correctly and does not cause unintended page overflow on narrow screens.
4. Individual multiple-target controls affect only their assigned panel. The both-panels control operates on both according to verified reference semantics, including a mixed initial state.
5. Initial visibility is checked against the live reference, the horizontal markup inconsistency is resolved, and visual/accessibility states agree for every control.
6. Pointer and keyboard activation work with visible focus and valid target associations. Local link controls do not navigate away; collapsed content is excluded from keyboard interaction.
7. Rapid toggles, resize and reduced motion leave each panel in a consistent final state without stuck height/width or duplicate content.
8. Visual comparison covers the three examples at desktop/mobile sizes, with material differences reported. Labels/content remain readable without unintended overlap or scrolling.
9. Required resources load without errors affecting functionality; relevant existing behavior remains intact.

## Validation Expectations
- Inspect reference render and interaction for all examples, especially horizontal initial visibility and both-target toggling from mixed states.
- Test both Basic controls and their synchronization, width animation, individual/both-panel operations and isolation between sections.
- Test keyboard activation, focus visibility, hidden-content focus exclusion and accessible expanded/target states for single/multiple triggers.
- Exercise rapid activation, resizing, long content, reduced motion, desktop and narrow/mobile viewports.
- Check resource/runtime errors and run relevant regression tests if shared assets change. Report actual outcomes and verification limits; no browser validation or application tests were run during task-create.

## Assumptions and Open Questions
- Assume root-level collapse.html, following button.html and accordion.html; filename/location were not specified by the user.
- Assume default light styling and English sample content, without requiring verbatim demo prose.
- The three examples form one coherent Collapse showcase capability and remain distinct from the Accordion task.
- The horizontal initial-state mismatch and combined-toggle semantics are reference-verification items for task-analyze, not invented business decisions. If live behavior is ambiguous, record the uncertainty and clarify before dependent implementation.
- No blocking clarification is required to create this brief. Filename, wording and exact icon equivalents may be refined in later stages while retaining their assumption status until confirmed.
