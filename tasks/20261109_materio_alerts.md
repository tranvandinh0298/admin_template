# Task: Replicate Materio alerts showcase
**Task ID:** 20261109_materio_alerts

## Context
The user requests the Alerts component next, based on:
https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/ui-alerts.html

The current repository provides static HTML layout, button, Accordion and Collapse examples, shared layout assets, local Font Awesome and SweetAlert2 resources, and Node/Playwright tests. No Alerts page/task was found in the inspected inventory. Existing modified shared layout files and untracked earlier-task artifacts must be preserved.

Reference HTML retrieved via PowerShell identifies six sections: Basic Alerts, Outline Alerts, Solid Alerts, Dismissible Alerts, Alerts with Heading, and Alerts with Icons. Basic/Outline/Solid/Dismissible/Icon sections each include Primary, Secondary, Success, Danger, Warning, Info and Dark examples. Heading examples include Success, Danger and Primary, with icons and close controls. Reference alert containers use role=alert. These are markup observations; rendered appearance, complete content and dismissal behavior have not yet been verified.

## Objective
Provide a directly viewable Alerts showcase reproducing the reference's requested alert treatments, content hierarchy, icons and dismissal interactions within the existing static admin template.

## Scope
### In scope
- One HTML page displaying all six reference alert groups.
- Relevant color variants, basic/outline/solid treatments, dismissible messages, headings and icons.
- Accessible close controls, appropriate alert semantics, responsive content and reference-guided appearance.
- Supporting local assets and focused validation required during later implementation.

### Out of scope / Non-goals
- SweetAlert modal confirmations, toast notifications or a global notification service.
- Backend-triggered messages, APIs, persistence, authentication and database integration.
- Rebuilding unrelated Materio page chrome or changing existing component behavior.
- BA, technical design, application code or test creation during task-create.

## Requirements
1. Deliver a standalone static HTML showcase with clearly identified Basic Alerts, Outline Alerts, Solid Alerts, Dismissible Alerts, Alerts with Heading and Alerts with Icons sections.
2. Include all seven observed colors in applicable groups: Primary, Secondary, Success, Danger, Warning, Info and Dark. Heading examples must cover the observed Success, Danger and Primary treatments.
3. Inspect the rendered reference before finalizing background, border, text/icon colors, dimensions, spacing, corner shapes and layout. Reproduce relevant appearance as closely as practical and report material differences.
4. Heading alerts must demonstrate readable heading/body hierarchy, accompanying icons and close controls as verified in the reference. Icon alerts must use appropriate equivalents and preserve icon/text alignment when content wraps.
5. Every dismissible alert, including heading examples with close controls, must allow the user to dismiss only that message. Other alerts and groups remain unchanged. Verify whether the reference removes or hides messages and whether dismissal is animated before choosing implementation details.
6. Close controls must have accessible names, visible keyboard focus and native keyboard operation. When removing an alert containing focus, keep keyboard users at a meaningful visible location instead of leaving focus lost in removed content.
7. Provide appropriate alert semantics and understandable message text; meaning must not depend solely on color or decorative icons. Decorative icons must not introduce redundant accessible labels. Do not equate static example markup with proof of screen-reader announcement behavior.
8. Content and controls must remain readable and usable at desktop/mobile widths, with wrapping long text, no unintended overlap or horizontal overflow. Any dismissal animation must respect reduced-motion preferences and tolerate repeated activation.
9. Reuse appropriate repository layout conventions and authorized assets without altering unrelated user work. Use existing local Font Awesome for icons rather than SVG, consistent with established preference; avoid unnecessary dependencies.

## Constraints
- Deliver ordinary HTML/CSS/JavaScript appropriate for the current static project, not a framework-only application.
- Do not introduce SweetAlert simply because alert terminology is shared; these are inline page messages.
- Keep this original task brief immutable; later skills own their respective documents and implementation artifacts.
- Recreate commercial theme styling using authorized resources; public demo access does not by itself authorize copying proprietary bundles.

## Acceptance Criteria
1. A directly viewable page contains all six labeled groups with the observed color coverage and three heading examples.
2. Basic, Outline and Solid treatments are visibly distinguishable; heading/icon examples preserve hierarchy and alignment when compared with the rendered reference.
3. Each close control dismisses its own alert while leaving other examples intact. Dismissal behavior matches the verified reference or any necessary deviation is reported.
4. Close controls can be reached and activated by keyboard, have accessible names and visible focus; focus remains meaningful after dismissal, including the last alert in a group.
5. Message meaning is understandable without color alone, alert semantics are appropriate, and decorative icons are hidden from assistive technology where applicable.
6. Desktop/mobile layouts and long content remain readable without overlap, clipped close controls or unintended horizontal scrolling.
7. Repeated dismissal attempts and reduced motion do not leave broken transitions, invisible focusable elements or runtime errors.
8. Local assets load successfully and relevant existing layout/button/Accordion/Collapse behavior remains intact.
9. Reference comparison and actual validation outcomes are reported with limits; no unperformed visual/accessibility checks are claimed.

## Validation Expectations
- Inspect reference render on desktop/mobile, verify six groups and exact heading/icon content arrangements, and exercise dismissal.
- Compare applicable color treatments, spacing, hierarchy and icon/close placement.
- Exercise close controls by pointer and keyboard, including focused dismissal and the final alert in a group; verify isolation and stable focus recovery.
- Check semantics, accessible names, decorative icons, long content, reduced motion and narrow/landscape viewports.
- Check resource/runtime errors and run relevant regressions if shared assets change. No application tests or browser validation were run during task-create.

## Assumptions and Open Questions
- Assume root-level alerts.html, following the existing standalone component pages; filename/location were not specified.
- Assume default light styling and English sample labels/prose, without requiring verbatim commercial demo text.
- Assume inline alerts start visible and dismissed examples reappear on reload; no persistent dismissal or automatic expiry was requested. Verify initial display against the reference.
- All six groups form one coherent alert-showcase capability, separate from existing SweetAlert confirmation work.
- Exact dismissal transition/removal behavior and detailed heading/icon arrangements require reference verification during task-analyze. Record ambiguity before dependent implementation rather than inventing business behavior.
- No blocking clarification is needed to create this brief. Exact wording and filename may be clarified in later stages while retaining their assumption status until confirmed.
