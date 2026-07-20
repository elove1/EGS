---
type: community
cohesion: 0.67
members: 3
---

# API Body Logging

**Cohesion:** 0.67 - moderately connected
**Members:** 3 nodes

## Members
- [[API Request Body Event]] - document - monitoring-usage.md
- [[API Response Body Event]] - document - monitoring-usage.md
- [[OTEL_LOG_RAW_API_BODIES_1]] - document - monitoring-usage.md

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/API_Body_Logging
SORT file.name ASC
```
