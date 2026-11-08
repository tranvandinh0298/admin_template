---
name: task-rollback
description: Safely plan and, only after explicit approval, reverse task-specific implementation changes or delete a task even without Git.
---

# Task Rollback

## Modes
- `implementation` (default): revert task implementation; preserve task brief, BA and technical plan.
- `complete-deletion`: revert implementation and remove task-specific brief/BA/plan only with **separate explicit approval**.

## Phase 1 — Read-only investigation (mandatory)
1. Resolve task ID and mode. Inspect task brief, BA, technical plan, `.task-backups/<id>/manifest.md`, snapshots, actual files and Git status/history if available. Never initialize Git automatically.
2. Establish per-file ownership using, in priority order, exact pre-change snapshots and manifest, relevant Git history, documented implementation records, and content inspection. Timestamps alone are not proof.
3. Classify each file as task-created, task-modified, task-deleted, shared, unrelated or uncertain. Identify changes made after task implementation (compare recorded post-change hash against current hash when available).
4. Determine recoverability: exact, partial/needs merge, or unknown. A pre-task snapshot is **not** permission to overwrite later unrelated edits.
5. Produce a table of file, evidence, proposed restore/delete/preserve action, confidence, conflicts and risks. Explain anything not recoverable, including missing original content.
6. **STOP and request explicit user approval** for the exact plan. Do not change files, including backup metadata, before approval. Approval of rollback does not imply approval to delete task documentation.

## Phase 2 — Approved execution only
1. Re-check current file state against the approved plan immediately before writing; if it has changed, stop and seek renewed approval.
2. Preserve a safety copy of current affected files before any destructive operation, using an approved safe location; do not overwrite earlier snapshots.
3. Restore existing files from verified exact originals only when no unrelated edits would be lost. For mixed changes, propose a minimal patch or manual merge, and obtain specific approval before applying it.
4. Delete task-created files only when their origin is established and their current contents have not acquired unrelated work; otherwise preserve and report.
5. Restore task-deleted files only from verified snapshots and without overwriting independently recreated files.
6. For `complete-deletion`, delete task documentation only with separate explicit authorization; preserve shared artifacts. Retain rollback evidence until user separately approves cleanup.
7. Validate affected files, tests where appropriate, and Git diff/status when available. Report exact actions, skipped items, unresolved recovery and `Completed`, `Partially completed` or `Blocked` status.

## Non-Git / no-backup limitation
Without a verified original version, exact restoration of modified or deleted files may be impossible. Do not guess original content, treat an external template as proof of original code, or delete uncertain files. Offer a conservative partial rollback and manual recovery options.

## Prohibitions
No broad `git reset --hard`, `git clean -fd`, `rm -rf` or equivalent destructive shortcut; no auto-commit/push; no removal of unrelated user work; no silent task-document deletion.
