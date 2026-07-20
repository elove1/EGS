---
type: community
cohesion: 0.40
members: 5
---

# OTel Event Types

**Cohesion:** 0.40 - moderately connected
**Members:** 5 nodes

## Members
- [[Assistant response event]] - document - monitoring-usage.md
- [[Event correlation attributes (prompt.id)]] - document - monitoring-usage.md
- [[Events]] - document - monitoring-usage.md
- [[Tool result event]] - document - monitoring-usage.md
- [[User prompt event]] - document - monitoring-usage.md

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/OTel_Event_Types
SORT file.name ASC
```
