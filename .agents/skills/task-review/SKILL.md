---
name: task-review
description: Read-only review of actual implementation against task requirements, BA, technical plan and tests.
---

# Task Review

**Strictly read-only: no modifications, fixes, report files or commits.**

1. Read the immutable task, BA and technical plan if present.
2. Inspect actual implementation and relevant diff/history; do not assume all repository changes belong to the task.
3. Check each acceptance criterion, business rule, architectural decision, security concern, edge case and regression risk.
4. Present actionable findings prioritized `Critical`, `High`, `Medium`, `Low`, with file/line, evidence, impact and recommended correction.
5. Report criteria as satisfied, unsatisfied or not verifiable; distinguish tests actually run from suggested tests.
6. Recommend the appropriate iteration entry point: BA change → `task-ba`; design change → `task-analyze`/`task-plan`; code correction → `task-implement`; new capability → `task-create`.

Do not update BA status, technical plan or implementation files.
