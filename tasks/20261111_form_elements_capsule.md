# Task: Form Elements CSS and JavaScript Capsule
**Task ID:** 20261111_form_elements_capsule

## Context
The Form Elements menu contains ten demos with separate page styles and scripts. Some form styles are also shared by pages outside that menu.

## Objective
Consolidate first-party Form Elements styles into one CSS file and first-party behavior into one JavaScript file for reuse as a capsule.

## Scope
### In scope
Basic Inputs, Input Groups, Custom Options, Editors, File Upload, Pickers, Selects, Sliders, Switches and Form Extras. Migrate their asset references and account for existing consumers of shared styles.

### Out of scope / Non-goals
Redesigning the demos, combining their HTML pages, or consolidating Form Layouts, Form Wizard, Form Validation or the shared admin shell.

## Requirements
- Each Form Elements demo uses the same capsule stylesheet and script. Third-party libraries can remain separate and load where needed.
- Styles and behavior stay scoped to the relevant component. Loading the capsule on a page with only some components must work without errors from missing markup or unused libraries.
- Preserve existing controls, states, accessibility, responsive behavior and local asset loading.

## Constraints
Preserve existing consumers of shared assets and follow the repository rollback workflow during implementation.

## Acceptance Criteria
- All ten demos load the same first-party CSS and JavaScript pair and no longer require separate first-party assets for their Form Elements behavior or styling.
- Representative interactions and keyboard controls work as before. A page using a subset of components initializes only those present.
- Form Layouts, Form Wizard and Form Validation retain styling where they use shared form controls.

## Validation Expectations
Run the existing Form Elements browser tests, check standalone capsule usage with a subset of components, and verify affected consumers of shared styles.

## Assumptions and Open Questions
“Form Elements” refers to the ten demos under that menu heading. “Capsule” means one reusable first-party CSS and JavaScript pair, with third-party libraries kept separate. No blocking questions for task creation.
