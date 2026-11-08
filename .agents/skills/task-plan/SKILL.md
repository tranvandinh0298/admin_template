---
name: task-plan
description: Create or refine a technical implementation plan based on the immutable task, BA and current codebase.
---

# Task Plan

## Ownership
Only create/update `docs/technical-plans/<task-id>.technical.md`. Do not modify the original task, BA, source, tests or configuration.

## Procedure
1. Read the immutable task brief, BA (if any), existing technical plan, and relevant code/tests. Re-analyze repository if prior conversational analysis is unavailable.
2. Verify BA status. If blocking questions remain, mark the plan blocked or provisional; do not invent business decisions.
3. Map each business requirement and acceptance criterion to design elements and tests.
4. Define focused implementation steps, expected file changes, data flow, interfaces, validation, security, testing and rollback considerations.
5. Keep technical choices explicit, including alternatives and trade-offs. Preserve decision history when updating.
6. Report plan path, dependencies, unresolved decisions and readiness.

## Technical plan structure
```markdown
# Technical Plan: <title>
**Task ID:** <id>
**Status:** Draft | Blocked | Ready
## References
## Technical Context and Current Behavior
## Requirements / Acceptance Criteria Mapping
## Proposed Approach and Alternatives
## Files and Components
## Implementation Steps
## Testing Strategy
## Risks, Dependencies and Rollback Considerations
## Validation Checklist
## Open Questions / Decisions
```

Plan implementation steps within one coherent task; do not automatically generate separate task briefs for every step.
