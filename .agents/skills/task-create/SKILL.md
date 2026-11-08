---
name: task-create
description: Create a new immutable task brief from the user's description, scoped to one coherent capability.
---

# Task Create

## Mission
Turn the user's request into a clear, verifiable task brief. Do not perform BA, technical design or implementation. If a request covers multiple independent capabilities, propose a split and seek the user's choice before creating multiple briefs.

## Procedure
1. Inspect relevant project context and existing task IDs as needed.
2. Identify objective, scope, boundaries, actors, constraints and measurable acceptance criteria; distinguish facts from assumptions.
3. Use `YYYYMMDD_short_description` as the task ID unless user supplies a valid ID.
4. Confirm `tasks/<task-id>.md` does not exist. Never overwrite or revise an existing brief; choose another ID or ask.
5. Create only the new brief with the structure below.
6. Report the path, scope, acceptance criteria and open questions.

## Task brief template
```markdown
# Task: <title>
**Task ID:** <id>

## Context
## Objective
## Scope
### In scope
### Out of scope / Non-goals
## Requirements
## Constraints
## Acceptance Criteria
## Validation Expectations
## Assumptions and Open Questions
```

Preserve the user's actual intent and avoid inventing business rules. Do not create BA, technical plan, source code or tests.
