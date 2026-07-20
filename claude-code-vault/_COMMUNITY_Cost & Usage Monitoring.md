---
type: community
cohesion: 0.25
members: 8
---

# Cost & Usage Monitoring

**Cohesion:** 0.25 - loosely connected
**Members:** 8 nodes

## Members
- [[Claude Apps Gateway (external doc)]] - document - claude-apps-gateway.md
- [[Claude Apps Gateway Spend Limits]] - document - claude-apps-gateway-spend-limits.md
- [[Discover Plugins (external doc)]] - document - discover-plugins.md
- [[Get Plugin into Official Marketplace]] - document - plugin-hints.md
- [[Manage Costs Effectively]] - document - costs.md
- [[Monitoring Usage (OpenTelemetry)]] - document - monitoring-usage.md
- [[Permission Modes]] - document - permission-modes.md
- [[Plugin Hint Protocol]] - document - plugin-hints.md

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Cost__Usage_Monitoring
SORT file.name ASC
```

## Connections to other communities
- 5 edges to [[_COMMUNITY_Plugin Marketplaces & Dependencies]]
- 3 edges to [[_COMMUNITY_Desktop App Overview]]
- 3 edges to [[_COMMUNITY_Prompt Caching]]
- 2 edges to [[_COMMUNITY_Agent SDK Overview]]
- 2 edges to [[_COMMUNITY_AWS Platform Setup]]
- 1 edge to [[_COMMUNITY_Error Reference]]
- 1 edge to [[_COMMUNITY_Hooks & Permissions Overview]]
- 1 edge to [[_COMMUNITY_Code Review Setup]]
- 1 edge to [[_COMMUNITY_Claude Code Surfaces Overview]]
- 1 edge to [[_COMMUNITY_Security Event Logging]]

## Top bridge nodes
- [[Manage Costs Effectively]] - degree 16, connects to 8 communities
- [[Permission Modes]] - degree 3, connects to 2 communities
- [[Discover Plugins (external doc)]] - degree 6, connects to 1 community
- [[Plugin Hint Protocol]] - degree 3, connects to 1 community
- [[Claude Apps Gateway (external doc)]] - degree 2, connects to 1 community