---
type: community
cohesion: 0.19
members: 14
---

# Security Event Logging

**Cohesion:** 0.19 - loosely connected
**Members:** 14 nodes

## Members
- [[Audit Security Events]] - document - monitoring-usage.md
- [[Auth Event]] - document - monitoring-usage.md
- [[Hook Execution Complete Event]] - document - monitoring-usage.md
- [[Hook Execution Start Event]] - document - monitoring-usage.md
- [[Hook Plugin Metrics Event]] - document - monitoring-usage.md
- [[Hook Registered Event]] - document - monitoring-usage.md
- [[MCP Server Connection Event]] - document - monitoring-usage.md
- [[OTEL_LOG_TOOL_DETAILS_1]] - document - monitoring-usage.md
- [[Permission Mode Changed Event]] - document - monitoring-usage.md
- [[Plugin Installed Event]] - document - monitoring-usage.md
- [[Plugin Loaded Event]] - document - monitoring-usage.md
- [[Send Events to a SIEM]] - document - monitoring-usage.md
- [[Skill Activated Event]] - document - monitoring-usage.md
- [[Tool Decision Event]] - document - monitoring-usage.md

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Security_Event_Logging
SORT file.name ASC
```

## Connections to other communities
- 1 edge to [[_COMMUNITY_Permission Modes]]
- 1 edge to [[_COMMUNITY_Cost & Usage Monitoring]]
- 1 edge to [[_COMMUNITY_Claude Code Surfaces Overview]]

## Top bridge nodes
- [[Audit Security Events]] - degree 9, connects to 2 communities
- [[Permission Mode Changed Event]] - degree 2, connects to 1 community