# Backup operations and security

Suggested project `.gitignore` entry (add manually after checking your repo):

```gitignore
.task-backups/
```

Exclude `.task-backups/` from deployment artifacts and protect it with suitable filesystem permissions. Backups are task-specific and can be large; periodically archive or remove only after reviewing whether rollback is still needed. Never assume a snapshot can overwrite a file that has since received unrelated edits.

For the current already-failed implementation, absent a pre-change snapshot or reliable Git history, `task-rollback` can only make an evidence-based partial recovery. The skill cannot recover unknown original bytes.
