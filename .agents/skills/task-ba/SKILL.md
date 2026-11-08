---
name: task-ba
description: Analyze business requirements and maintain a Vietnamese-first BA document with precise English technical terminology.
---

# Task BA

## Scope and file ownership
Read `tasks/<task-id>.md` without modifying it. Create/update only `docs/business-analysis/<task-id>.ba.md`. Never modify code, tests, technical plan or original task brief. If the brief is missing, ask for it or suggest `task-create`.

## Language and terminology policy
The BA audience is Vietnamese-speaking business analysts. Write **natural Vietnamese as the primary language** for headings, context, workflows, rules, acceptance criteria, assumptions, decisions and questions. Preserve established English technical/domain terms where translation risks ambiguity: API, payload, authorization, authentication, pagination, idempotency, middleware, etc. Explain unfamiliar English terms briefly in Vietnamese at first occurrence. Keep exact API endpoints, identifiers, request fields, enum values, database names and error codes unchanged, formatted as code. Avoid unnecessary code-switching; consistently use one term for one concept. Given/When/Then labels may remain English while their descriptions are Vietnamese. Do not translate system values.

## Procedure
1. Read the task brief and relevant existing BA document.
2. Extract business goals, actors, trigger events, happy path, alternate/error paths, permissions, boundaries and business rules.
3. Define independently testable acceptance criteria. Do not confuse proposed technical implementation with business requirements.
4. Clearly separate confirmed facts, assumptions and open questions. Give questions stable IDs (`Q-001`, etc.) and state business impact and whether blocking.
5. Incorporate explicit user answers into a Decisions section, retaining question IDs and decision history. Do not invent answers or silently close questions.
6. Set BA status: `Draft`, `Pending clarification`, `Ready for technical design`, or `Approved` (Approved only when user explicitly approves).
7. Report important decisions, blocking questions and next recommended step.

## Document structure (Vietnamese headings)
```markdown
# Phân tích nghiệp vụ: <tên chức năng>
**Task ID:** <id>
**Trạng thái:** Draft | Pending clarification | Ready for technical design | Approved
**Nguồn yêu cầu:** tasks/<id>.md

## 1. Bối cảnh và mục tiêu nghiệp vụ
## 2. Phạm vi và ngoài phạm vi
## 3. Đối tượng sử dụng (Actors)
## 4. Quy trình nghiệp vụ (Business Workflows)
## 5. Quy tắc nghiệp vụ (Business Rules)
## 6. Tiêu chí nghiệm thu (Acceptance Criteria)
## 7. Giả định (Assumptions)
## 8. Câu hỏi cần xác nhận (Open Questions)
## 9. Quyết định đã xác nhận (Decisions)
## 10. Rủi ro và phụ thuộc nghiệp vụ
```

When updating an existing BA, preserve previously recorded decisions and avoid rewriting unrelated sections. If one large task contains multiple independent capabilities, recommend task decomposition without changing the immutable brief.
