# Task: Replicate Materio Block UI showcase
**Task ID:** 20261110_materio_blockui

## Context
The user requests https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/extended-ui-blockui.html and authorizes task-create → task-ba → task-analyze → task-implement.
Reference HTTP markup/source identifies five groups: Section Blocking, Card Blocking, Page Blocking, Blocking with multiple options, Form Block. Section/card/page/form each offer Default, Overlay Color, Custom Spinner, Custom Message, Multiple Message and remove/unblock. Options offers Default, Hourglass, Circle, Arrows, Dots, Pulse and remove/unblock. Initial inventory:26 start controls/five remove controls,subject to rendered verification. Reference uses Notiflix;no particular library is mandated. Preserve existing shared-layout edits and component artifacts.

## Objective
Provide reusable scoped blocking behavior and a directly viewable showcase reproducing the reference variants, with reliable interaction prevention, accessible feedback and safe cancellation/restoration.

## Scope
### In scope
Five block groups and verified26variants;local simulated loading/multiple-message completion;manual unblock;scope-specific pointer/keyboard prevention;focus/scroll restoration;responsive/reduced-motion behavior.
### Out of scope / Non-goals
Real network jobs,authentication,form transmission,backend work,persistence,global application blocking retrofit or unrelated component fixes. No source/tests during task-create.

## Requirements
1. Deliver standalone blockui.html following repository conventions with all verified groups and controls.
2. Distinguish section/card/page/form blocking boundaries;unrelated regions remain usable for local blocks. Full-page blocking prevents background interaction and preserves an accessible unblock path.
3. Match preferred overlay treatments,loading indicators,custom message andmultiple-message stages after inspecting live reference. Options includes six spinner variants. Use CSS/Font Awesome instead of SVG icons. A suitable existing dependency or focused controller may be selected after analysis;no library requirement is inferred.
4. Blocking must actually prevent keyboard and pointer interaction with the affected content,not merely display a spinner. Expose busy state and understandable loading feedback without redundant announcements. Provide accessible labelled unblock controls;no permanent trap.
5. Manual unblock and Escape must reliably stop the intended block and pending stage/expiry timers. Repeated unblocking when idle must be harmless. Starting/replacing blocks rapidly must not allow an earlier timer to remove a newer overlay or update removed DOM.
6. Multiple-message examples must progress through verified loading/near-completion/success stages and auto-complete locally. Do not imply real server work. Other variants must have a predictable manual dismissal route;define any auto-release policy during BA.
7. Preserve each target's prior inert/busy/disabled state and relevant page overflow. Move focus out of newly blocked content when needed;restore appropriately after release if focus belongs to the block,without stealing focus from unrelated usable regions.
8. Local blocks may coexist independently if supported by design;define replacement/concurrency rules and full-page interaction with local blocks/sidebar. Page blocking must not leave competing focus traps,duplicate backdrops or scroll locks.
9. Form examples must have labels and harmless submit/reset behavior;no data transmission or real mutation. Retain user-entered values across blocking unless reset is deliberately activated.
10. Spinners and stage transitions must respect reduced motion and remain understandable when animation stops. Overlay text/controls must be readable across colored surfaces.
11. Support long content/messages,mobile,short landscape,resize,text enlargement and scrolled target regions. Overlays must cover the intended area without unintended page overflow,clipped messages or unreachable unblock controls.
12. Use scoped styles/local resources and preserve shared shell/sidebar behavior. Verify reusable behavior with different target content rather than hardcoded demo text only. Render messages safely as text.
13. Compare reference boundaries,geometry,colors,spinner families,message timing and lifecycle;report deviations,accessibility improvements,actual tests and limitations.

## Constraints
Static HTML/CSS/JavaScript,no backend/framework migration. Original brief immutable;later skills own BA/source/tests/backups. Markup/source observations do not prove rendered blocking/accessibility behavior. No real operation is authorized.

## Acceptance Criteria
1. Five groups and verified26start/five remove controls are present.
2. Every scope/visual/spinner/message variant works with correct blocking boundaries.
3. Affected content is unavailable to pointer/keyboard;outside local regions remains usable;busy/status/unblock semantics are valid.
4. Unblock/Escape/staged completion/rapid replacement clean up overlays,timers,focus and scroll reliably;idle unblock is harmless.
5. Prior target state and form values are preserved;concurrency/sidebar rules remain predictable without focus traps.
6. Reduced motion,long content,resize,mobile/short landscape/text enlargement remain usable without unintended overflow.
7. Assets load,no form/network operation occurs,shared shell works and actual tests/deviations are reported.

## Validation Expectations
Inspect live reference for counts,targets,spinner/message treatment,timing and actual blocked interaction. Exercise all controls,manual/Escape release,staged completion,cancellation at each stage,repeated/replacement/concurrent blocks and restoration. Verify keyboard/pointer prevention,focus/state/form-value preservation,plain-text safety,reduced motion,viewport/scroll geometry and drawer coexistence. Check HTTP/file resources/runtime errors and relevant regressions. No tests during task-create.

## Assumptions and Open Questions
Assume rootblockui.html,Englishneutraldemo/light shell. Q001 verify exact targets and stage timing. Q002 choose accessible implementation/library and spinner substitutes. Q003 define independent local targets,one page block,replacement cancellation and always reachable unblock. No business question blocks brief creation;resolve material ambiguity before implementation.