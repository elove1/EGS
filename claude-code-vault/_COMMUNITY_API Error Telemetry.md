---
type: community
cohesion: 1.00
members: 2
---

# API Error Telemetry

**Cohesion:** 1.00 - tightly connected
**Members:** 2 nodes

## Members
- [[API Error Event]] - document - monitoring-usage.md
- [[API Retries Exhausted Event]] - document - monitoring-usage.md

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/API_Error_Telemetry
SORT file.name ASC
```
