# Task: Replicate Materio Drag & Drop showcase
**Task ID:** 20261110_materio_drag_drop

## Context
The user requests https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/extended-ui-drag-and-drop.html and authorizes task-create → task-ba → task-analyze → task-implement.
Reference markup/source identifies sortable metric cards, two connected image lists, two connected task lists, two cloning lists and two handle-only lists. Source uses SortableJS:normal cross-list movement for images/tasks/handles;pull clone and revertClone for both cloning lists;handle restriction for handle lists. Counts and rendered behavior require verification. Repository contains standalone showcases,shared shell,local Font Awesome,neutral avatar PNGs and tests. Preserve unrelated edits.

## Objective
Deliver a directly viewable,reusable Drag & Drop showcase with working reorder,transfer,clone and handle-only behavior plus accessible non-drag alternatives.

## Scope
### In scope
Five verified families,nine sortable containers,reference-like card/image/task structures;local library if justified;keyboard/touch alternative;safe state announcements,responsive/reduced motion and shell coexistence.
### Out of scope / Non-goals
Real task management,profile loading,backend persistence,uploads,global card refactor or proprietary portrait copying. No code/tests during task-create.

## Requirements
1. Provide standalone drag-drop.html with all five families and verified item/container inventory.
2. Sortable cards reorder within their own grid;images and task rows move within/between their respective paired lists. Groups must not accept items from unrelated examples.
3. Cloning lists preserve source item on cross-list drag and create an independent target copy. Verify intra-list behavior and both transfer directions. Clones require unique identifiers/associations without duplicate HTML IDs or accidental linked state.
4. Handle example starts dragging only from its designated handle;ordinary item content and unrelated controls must not initiate a drag. Reordering/transfer still available without pointer dragging.
5. Provide keyboard and non-drag touch operation for reorder and cross-list move/copy,with clear item/destination selection,valid boundary behavior and accessible order/list announcements. Preserve focus after operations;do not require obsolete drag ARIA roles.
6. Support empty lists,repeated/rapid movement/cloning,drag cancellation and failed cross-group drops without item loss,unintended duplication or stale ghosts. Define reset/persistence policy during BA;no server persistence implied.
7. Match reference drag feedback,spacing,group layout,handle appearance and animation after rendered verification. Respect reduced motion,allow ordinary touch scrolling,and avoid drag hijacking form controls or sidebar gestures.
8. Reuse lawful local neutral avatars or other suitable assets rather than assuming commercial portraits may be copied. Use local Font Awesome instead of SVG icons. Record any library version/license and adapters;avoid unnecessary dependencies.
9. Use semantic lists/groups,named controls,visible focus and understandable text alternatives. Dynamic messages rendered safely;no real request,navigation or business mutation.
10. Mobile,short landscape,resize,text enlargement,long labels and image dimensions must remain usable without unintended page overflow or unreachable empty dropzones. Shared shell/sidebar remains functional;drag lifecycle must clean up on cancellation/teardown as appropriate.
11. Compare representative reference renders and actual interactions;report asset/style/accessibility differences,executed tests and limitations.

## Constraints
Static HTML/CSS/JS,no backend/framework migration. Original brief immutable;later skills own BA/source/tests/assets/backups. Initial source observations do not establish full counts,keyboard/touch/cancellation behavior.

## Acceptance Criteria
Five families/nine containers and verified items are present. Reorder,paired transfer,source-preserving cloning andhandle-only dragging work with group isolation. Non-drag keyboard/touch alternatives preserve focus andannounce order. Empty lists,repeated operations,cancellation andinvalid drops retain valid unique state. Responsive/reduced motion/resources/drawer behavior passes actual checks,no real data operation. Report substitutions/tests/limits accurately.

## Validation Expectations
Inspect live reference counts/layout and Sortable options. Test actual pointer reorder/move/clone/handle restrictions,empty targets,invalid groups,cancellation andunique clone identity. Exercise all non-drag alternatives with keyboard/touch,boundaries,focus andannouncements. Check resize/mobile/short landscape/longtext/enlargement/reduced motion/normal scrolling/drawer,HTTP/file,resources/runtime errors and relevant regressions. No tests during task-create.

## Assumptions and Open Questions
Assume rootdrag-drop.html,Englishdemo/light shell,local-only state restored by reload. Q001 verify exact counts/content. Q002 evaluate pinnedSortableJS and accessible adapter. Q003 define cloning/selection/reset/cancel policy andtouch support. No business question blocks brief creation;resolve material ambiguity before implementation.