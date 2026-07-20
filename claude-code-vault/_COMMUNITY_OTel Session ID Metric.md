---
type: community
cohesion: 1.00
members: 1
---

# OTel Session ID Metric

**Cohesion:** 1.00 - tightly connected
**Members:** 1 nodes

## Members
- [[OTEL_METRICS_INCLUDE_SESSION_ID]] - document - env-vars.md

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/OTel_Session_ID_Metric
SORT file.name ASC
```
