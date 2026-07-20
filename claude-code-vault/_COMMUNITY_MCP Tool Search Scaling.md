---
type: community
cohesion: 0.67
members: 3
---

# MCP Tool Search Scaling

**Cohesion:** 0.67 - moderately connected
**Members:** 3 nodes

## Members
- [[Exempt a server from deferral (alwaysLoad)]] - document - mcp.md
- [[Scale with MCP tool search]] - document - mcp.md
- [[Tool input schemas with a root-level combinator]] - document - mcp.md

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/MCP_Tool_Search_Scaling
SORT file.name ASC
```
