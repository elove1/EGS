---
type: community
cohesion: 1.00
members: 2
---

# OTel Resource Attributes

**Cohesion:** 1.00 - tightly connected
**Members:** 2 nodes

## Members
- [[OTEL_METRICS_INCLUDE_RESOURCE_ATTRIBUTES]] - document - env-vars.md
- [[OTEL_RESOURCE_ATTRIBUTES]] - document - env-vars.md

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/OTel_Resource_Attributes
SORT file.name ASC
```
