# Task: Materio Tour
**Task ID:** 20261110_materio_tour

## Context
Reference: https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/extended-ui-tour.html
## Objective
Provide an on-demand guided tour in the existing admin template.
## Scope
### In scope
Start tour button; Navbar, Card, Footer and final footer-link steps; highlighted targets and overlay; Next, Back, Skip, Finish, close and keyboard support.
### Out of scope / Non-goals
Automatic onboarding, persistence, paid upgrade flow and backend integration.
## Requirements
Create tour.html using a suitable local tour library. Preserve existing shell and local Font Awesome conventions.
## Constraints
Prepare rollback metadata before source writes. No runtime CDN dependency.
## Acceptance Criteria
Starts only on request; four steps target visible elements; navigation, cancellation and restart work; focus returns to launcher; mobile popovers fit viewport; cleanup restores page interaction.
## Validation Expectations
Browser tests for complete/cancel/restart/keyboard/resize/mobile and resources; visual checks and layout regression.
## Assumptions and Open Questions
A neutral Learn more footer link replaces the commercial upgrade target. No blocking questions.
