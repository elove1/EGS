---
type: community
cohesion: 1.00
members: 2
---

# Usage Limit Errors

**Cohesion:** 1.00 - tightly connected
**Members:** 2 nodes

## Members
- [[Credit balance is too low]] - document - errors.md
- [[You've hit your session limit]] - document - errors.md

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Usage_Limit_Errors
SORT file.name ASC
```
