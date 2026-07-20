---
type: community
cohesion: 1.00
members: 2
---

# Cost and Usage Monitoring

**Cohesion:** 1.00 - tightly connected
**Members:** 2 nodes

## Members
- [[Cost Monitoring]] - document - monitoring-usage.md
- [[Usage Monitoring]] - document - monitoring-usage.md

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Cost_and_Usage_Monitoring
SORT file.name ASC
```
