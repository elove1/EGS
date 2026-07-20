---
type: community
cohesion: 0.40
members: 6
---

# API Timeouts & Retries

**Cohesion:** 0.40 - moderately connected
**Members:** 6 nodes

## Members
- [[API Error 500 Internal server error]] - document - errors.md
- [[API_TIMEOUT_MS]] - document - errors.md
- [[Automatic retries]] - document - errors.md
- [[CLAUDE_CODE_MAX_RETRIES]] - document - errors.md
- [[CLAUDE_CODE_RETRY_WATCHDOG]] - document - env-vars.md
- [[Request timed out]] - document - errors.md

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/API_Timeouts__Retries
SORT file.name ASC
```
