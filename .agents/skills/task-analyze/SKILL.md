---
name: task-analyze
description: Read-only technical investigation of a task, its BA, current code, dependencies, risks and tests.
---

# Task Analyze

**Strictly read-only. Do not create, edit or delete any files, including reports.**

1. Resolve task ID and read `tasks/<id>.md`.
2. Read BA and technical plan if present; identify BA status and blocking open questions.
3. Inspect relevant project files, entry points, data flow, dependencies, security and existing tests; inspect git status if available.
4. Distinguish observed behavior from hypotheses. Identify scope, affected components, architecture options, risks, backward compatibility, tests and uncertainties.
5. Present findings **in the conversation**, not a file: scope, BA readiness, relevant files, current behavior, recommended approach, risks, tests, unresolved questions and whether planning/implementation can proceed.

Do not modify the task brief, BA, plan, code, tests or backups. If prior analysis is not visible in a later session, the next skill must inspect the repository independently.
