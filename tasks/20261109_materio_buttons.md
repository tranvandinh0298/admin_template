# Task: Replicate Materio button showcase with ripple and confirmation dialogs
**Task ID:** 20261109_materio_buttons

## Context
The user requests a button showcase based on the Materio reference:
https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/ui-buttons.html

The repository contains static HTML layout examples under layouts/, shared assets/css/layouts.css and assets/js/layouts.js, and a Node/Playwright layout test script. No package manifest or backend configuration was found. Git status was clean at discovery. The reference HTML was retrieved through PowerShell after the web reader failed; button headings, button variants, and waves-related markup were found, but visual rendering has not been inspected during task creation.

## Objective
Provide a directly viewable button.html that demonstrates the requested Materio-style button groups, click ripple feedback, and SweetAlert confirmation flows for Confirm and Delete actions.

## Scope
### In scope
- One button showcase page named button.html with clearly labeled examples for every requested group.
- Basic, rounded, label, outline, text, icon, different-size, checkbox/radio, and disabled buttons.
- Styling and responsive presentation guided by the reference page and existing repository conventions.
- Ripple feedback when enabled showcase buttons are activated.
- SweetAlert dialogs asking the end user whether to continue with Confirm and Delete demonstration actions.
- Supporting assets and focused interaction validation required for this page during later implementation.

### Out of scope / Non-goals
- Rebuilding the entire Materio template or all UI component pages.
- Backend actions, real record deletion, persistence, authentication, or database integration.
- Unrequested button families or unrelated changes to existing layout examples.
- BA, technical planning, application code, or test creation during this task-create step.

## Requirements
1. Create button.html and visibly identify each requested button group: Basic Buttons, Rounded Buttons, Label Buttons, Outline Buttons, Text Buttons, Buttons with Icons, Button Sizes, Checkbox/Radio Buttons, and Disabled Buttons.
2. Reproduce the reference's relevant visual treatment, including color variants, shapes, borders, label backgrounds, spacing, icon alignment, sizes, and interaction states, as closely as practical. Inspect the rendered reference before implementation decisions depend on its exact appearance.
3. Show the relevant reference color variants within each applicable group. The exact variant inventory must be verified against the reference rather than invented in this brief.
4. Demonstrate usable icon-bearing buttons and visibly distinct button sizes as shown in the reference. Icon-only examples, when included, must have accessible names.
5. Checkbox-style buttons must independently toggle their checked state. Radio-style buttons within the same group must allow only one selected option. Expose these states to assistive technology and support keyboard interaction.
6. Enabled showcase buttons must display a visible ripple on activation, clipped to their shape, without interfering with their action or selection state. Repeated activation must remain reliable.
7. Disabled examples must visibly communicate their disabled state and must not execute actions, change selection, trigger dialogs, or generate interactive ripple feedback.
8. Provide clearly labeled Confirm and Delete demonstration buttons. Each opens a SweetAlert dialog asking whether to continue, with explicit continue/confirm and cancel choices. Proceed only after affirmative confirmation; cancellation or dismissal must not proceed.
9. Make confirmation outcomes observable within the demo without performing real destructive operations. Exact copy and outcome presentation are implementation choices unless the user supplies further requirements.
10. Keep examples usable at desktop and mobile widths, with readable labels, visible keyboard focus, and no unintended horizontal overflow. Dialogs must support keyboard use and restore focus appropriately when closed.
11. Follow existing project conventions and preserve unrelated files and behavior. Later implementation must follow the repository's pre-change snapshot requirements.

## Constraints
- Deliver an HTML page named button.html; do not substitute a framework-only application.
- Use SweetAlert for confirmation dialogs as requested. No specific version or choice between SweetAlert and SweetAlert2 has been supplied; record the selected library during technical planning.
- Avoid unnecessary dependencies. Reuse existing assets and shell conventions where appropriate without broadening the task into a layout redesign.
- Keep this original task brief immutable after creation.

## Acceptance Criteria
1. button.html is directly viewable and contains all nine labeled groups listed in Requirement 1, including both checkbox and radio examples.
2. Visual comparison against the rendered reference confirms the requested button treatments, applicable colors, icon placement, sizes, and group presentation; any material differences are reported.
3. Clicking enabled examples produces a visible ripple contained within the activated button, including rounded and outlined examples. Repeated clicks do not leave persistent ripple artifacts.
4. Checkbox examples toggle independently; radio examples remain mutually exclusive within their group. Pointer and keyboard activation update visible and accessible states consistently.
5. Disabled examples remain inactive and do not produce ripples or dialogs.
6. Both Confirm and Delete open SweetAlert confirmation dialogs. Affirmative confirmation produces the corresponding observable demo outcome, while cancellation or dismissal produces no action.
7. Keyboard users can reach and operate enabled controls and dialog choices, see focus, and return to the triggering button after closing a dialog.
8. The page remains usable at narrow/mobile and desktop widths without overlapping controls or unintended horizontal scrolling.
9. The page loads its required resources without missing assets or uncaught runtime errors affecting the showcase, and existing layout behavior remains intact.

## Validation Expectations
- Compare the rendered showcase with the linked reference at desktop and mobile widths.
- Exercise every requested group, repeated ripple activation, checkbox/radio state changes, and disabled controls.
- Validate affirmative, cancel, and dismissal paths for both Confirm and Delete, including keyboard operation and focus restoration.
- Check asset loading, browser console errors, and responsive overflow. Run relevant existing regression checks if shared assets are modified.
- Report actual checks and outcomes, including any limitations in visual comparison or external dependency availability. No application tests or browser validation were run during this task-create step.

## Assumptions and Open Questions
- All requested groups and their interactions form one coherent button-showcase capability.
- Assume button.html belongs at the repository root because no directory was specified; preserve the exact filename.
- Assume the reference's default light appearance and English example labels unless directed otherwise.
- Confirm and Delete are demonstrations, with no real backend operation implied.
- SweetAlert library choice, exact dialog copy, and demo outcome presentation remain open implementation details; they do not block creation of this brief.
