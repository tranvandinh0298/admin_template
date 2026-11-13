# Task: Materio Treeview
**Task ID:** 20261110_materio_treeview

## Context
Reference: https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/extended-ui-treeview.html
## Objective
Provide reusable interactive treeview examples in the existing admin shell.
## Scope
### In scope
Six reference families: Basic, Custom Icons, Context Menu, Drag & Drop, Checkboxes, Ajax. Expand/collapse, selection, context editing, rearrangement, cascading checkboxes and local asynchronous data.
### Out of scope / Non-goals
Real filesystem operations, backend CRUD, authorization rules or cross-page data persistence beyond Ajax demo view state.
## Requirements
Create treeview.html. Match reference structure, local dependencies and Font Awesome icons. Add keyboard/touch-accessible alternatives for context menu and dragging. Show loading/error/retry for Ajax.
## Constraints
No runtime CDN dependency; preserve unrelated edits and prepare rollback metadata. Changes are demo-only and in memory.
## Acceptance Criteria
Six working independent trees; correct expand/select/keyboard navigation; context CRUD/cut/copy/paste work without HTML injection; drag moves hierarchy and rejects cycles; non-drag move works; checkbox ancestors show partial state; Ajax loads local JSON, reports failures and retries; narrow layouts do not overflow.
## Validation Expectations
Targeted browser interaction, keyboard, drag, Ajax failure/retry, responsive and resource checks; desktop/mobile screenshots; layout regression.
## Assumptions and Open Questions
Use jsTree like the reference. Context edits do not modify files. Ajax requires an HTTP server; file URL displays guidance. No blocking questions.
