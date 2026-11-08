# Codex Task Workflow — Laravel/PHP and general coding projects

Seven skills:

1. `$task-create` — new immutable task brief
2. `$task-ba #<task-id>` — Vietnamese-first BA with English technical terms
3. `$task-analyze #<task-id>` — read-only technical analysis
4. `$task-plan #<task-id>` — technical plan
5. `$task-implement #<task-id>` — code/tests, mandatory pre-change snapshots
6. `$task-review #<task-id>` — read-only verification
7. `$task-rollback #<task-id>` — plan-first rollback, with explicit approval

## Install
Copy `AGENTS.md` and `.agents/skills/` to your repository root. Keep the `tasks/` and `docs/` folders. Ensure your Codex environment recognizes repository-local skills; start a fresh session if necessary.

## Workflow
`task-create → task-ba → task-analyze → task-plan → task-implement ↔ task-review`.

For revisions: business change → BA; design change → analyze/plan; code issue → implement/review; new scope → new task.

## Rollback caveats
`task-implement` must run with the snapshot policy **before** modifications. Older tasks without Git or snapshots may only support partial recovery. Rollback never executes destructive operations without showing an exact plan and receiving approval. Snapshots can include sensitive source; protect `.task-backups/`, exclude from deployment and version control. A starter `.gitignore` suggestion is in `ROLLBACK-NOTES.md`.

## Task granularity
One coherent business capability per task; split large modules into multiple tasks, but keep backend/frontend implementation steps together when they form one verifiable outcome.
