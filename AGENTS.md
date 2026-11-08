# Codex Task Workflow — Repository Instructions

## Repository discovery
Before proposing or modifying code, inspect the project structure, relevant configuration, dependencies, routes, existing conventions, tests and `git status` when available. For Laravel/PHP projects, inspect `composer.json`, PHP/Laravel versions, middleware, controllers, models, services, repositories, views and frontend tooling as relevant.

## Engineering standards
Follow existing project patterns. Prefer focused changes, avoid unnecessary dependencies and abstraction, preserve API contracts, validation, authorization, CSRF/CORS and data integrity, avoid N+1 queries, and add targeted tests. Never claim a test ran unless it actually ran. Do not overwrite unrelated user work or execute destructive commands casually.

## Artifacts and ownership
- `tasks/<task-id>.md`: immutable original task brief. Only `task-create` may create a *new* brief at an unused path. No skill may overwrite an existing task brief during ordinary work.
- `docs/business-analysis/<task-id>.ba.md`: BA document; `task-ba` owns updates.
- `docs/technical-plans/<task-id>.technical.md`: technical plan; `task-plan` owns updates.
- `.task-backups/<task-id>/`: rollback snapshots and manifest; `task-implement` creates and appends records; `task-rollback` consumes them.

| Skill | Permitted writes |
|---|---|
| task-create | New task brief at unused path only |
| task-ba | Task BA document only |
| task-analyze | None (read-only) |
| task-plan | Task technical plan only |
| task-implement | Relevant application source/tests and task rollback metadata/backups only |
| task-review | None (read-only) |
| task-rollback | Only explicitly approved restorations/deletions and optionally approved task documents |

## Business requirements reference
Read the BA document when present. BA statuses: `Draft`, `Pending clarification`, `Ready for technical design`, `Approved`. Treat unresolved blocking business questions as blockers to design/implementation. For small, unambiguous tasks a BA document may be optional. Never silently reinterpret business decisions or update the BA without authorization.

## Iterative development
Classify feedback before restarting work:
1. Changed business intent: `task-ba` → `task-analyze` → `task-plan` → `task-implement` → `task-review`.
2. Changed technical design: `task-analyze` → `task-plan` → `task-implement` → `task-review`.
3. Implementation defect/refinement with unchanged requirements: `task-implement` → `task-review`.
4. Substantial new capability: `task-create` for a new task.
Never restart earlier stages unnecessarily. Keep original task briefs immutable.

## Task sizing
Prefer one coherent, independently verifiable business capability per task, not an entire module and not each individual coding operation. Decompose larger features into tasks, then technical plans into implementation steps. Use BA to identify sensible boundaries.

## Rollback safety
Never assume all changed files belong to one task. Do not restore, delete, or overwrite without reliable evidence and explicit approval. Never discard pre-existing user edits. In non-Git projects, rely on exact pre-change snapshots and manifests; where absent, report uncertainty rather than inventing original content. Rollback must first produce a read-only plan and wait for approval. Ordinary rollback preserves task documentation; complete deletion requires separate explicit authorization. Do not automatically initialize Git.

## Completion reporting
Report changes, tests actually executed and outcomes, remaining risks, deviations and unresolved questions. Do not claim success for unverified behavior.
