---
name: task-implement
description: Implement a task against its brief, BA and technical plan, creating pre-change rollback snapshots even without Git.
---

# Task Implement

## Scope
Read the immutable task brief, BA and technical plan if available. Modify only relevant application source/tests and task-specific `.task-backups/<task-id>/` artifacts. Do not modify task brief, BA or technical plan. Do not silently change business decisions. Stop if a blocking business question affects the requested implementation.

## Mandatory rollback preparation — before first write
1. Resolve task ID. Inspect Git status when Git exists, but do not require Git.
2. Identify all existing files you intend to modify/delete and all paths you intend to create.
3. Before touching an existing file, save its **exact bytes** to `.task-backups/<task-id>/original/<relative-path>`; preserve path and file metadata where practical. Never overwrite an existing original snapshot. For a path that did not exist, record `absent` before creating it.
4. Create/update `.task-backups/<task-id>/manifest.md` with task ID, timestamp, relative paths, original existence, operation, backup location, pre-change SHA-256, and each implementation iteration. Record any backup failure and **stop before modifying that file**.
5. Keep the initial snapshot immutable across subsequent iterations. Before each additional iteration, also capture the current state in an iteration-specific snapshot or record enough exact data to revert that iteration independently.
6. Do not store backup copies of secrets unnecessarily; if a sensitive file must be changed, explain the risk and seek approval for a secure backup approach before editing. Ensure `.task-backups/` is excluded from deployment and Git tracking (without changing project config automatically).
7. Backup files are not guaranteed safe to restore if other work modifies the same file later; rollback must detect divergence.

## Implementation
1. Check requirements and relevant conventions.
2. Implement in small coherent increments according to the plan, or explain any necessary deviation before substantial design changes.
3. Add or update targeted tests; validate security, error handling and compatibility.
4. Record files actually created/modified/deleted and hashes of resulting files in the manifest; include iteration boundaries.
5. Run targeted checks when possible, recording exact commands and actual results.
6. Report changes, deviations, verification, risks and any incomplete work.

Never claim rollback readiness for changes that lack an original snapshot or reliable history. Do not auto-commit or auto-push.
