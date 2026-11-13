# Task: Materio File Upload
**Task ID:** 20261111_materio_file_upload

## Context
Reference: https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/forms-file-upload.html
## Objective
Add Basic and Multiple file selection dropzones to Form Elements.
## Scope
### In scope
Picker, drag/drop, filename, size, image preview, removal and selection feedback.
### Out of scope / Non-goals
Server storage or upload endpoint.
## Requirements
Basic accepts one file. Multiple accepts several. Limit each file to 5 MiB as the reference's five-megabyte setting. Provide accessible controls and local previews.
## Constraints
Prepare rollback metadata and preserve existing form pages.
## Acceptance Criteria
Picker and drop work. Excess and oversized files produce feedback. Removal permits reselection. File names render as text. Navigation and narrow layouts work.
## Validation Expectations
Verify selection, limits, previews, removal, keyboard and responsive layouts.
## Assumptions and Open Questions
Use native browser file APIs for a local demonstration. No blocking questions.
