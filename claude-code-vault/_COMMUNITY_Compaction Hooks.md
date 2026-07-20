---
type: community
cohesion: 1.00
members: 2
---

# Compaction Hooks

**Cohesion:** 1.00 - tightly connected
**Members:** 2 nodes

## Members
- [[PostCompact Hook]] - document - hooks.md
- [[PreCompact Hook]] - document - hooks.md

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Compaction_Hooks
SORT file.name ASC
```
