---
type: community
cohesion: 0.27
members: 11
---

# Session Events & Hooks

**Cohesion:** 0.27 - loosely connected
**Members:** 11 nodes

## Members
- [[CwdChanged Hook]] - document - hooks.md
- [[FileChanged Hook]] - document - hooks.md
- [[Persist Environment Variables]] - document - hooks.md
- [[Re-Inject Context After Compaction]] - document - hooks-guide.md
- [[Reload Environment on DirectoryFile Change]] - document - hooks-guide.md
- [[SessionStart Event]] - document - hooks.md
- [[Setup Event]] - document - hooks.md
- [[Stream Responses]] - document - headless.md
- [[systemapi_retry Event]] - document - headless.md
- [[systeminit Event]] - document - headless.md
- [[systemplugin_install Event]] - document - headless.md

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Session_Events__Hooks
SORT file.name ASC
```

## Connections to other communities
- 2 edges to [[_COMMUNITY_Programmatic Claude Code Usage]]
- 2 edges to [[_COMMUNITY_Hook InputOutput Reference]]
- 2 edges to [[_COMMUNITY_Hooks & Permission Control]]
- 1 edge to [[_COMMUNITY_Hook Matchers & Config]]

## Top bridge nodes
- [[SessionStart Event]] - degree 9, connects to 2 communities
- [[Setup Event]] - degree 5, connects to 2 communities
- [[Stream Responses]] - degree 5, connects to 1 community
- [[FileChanged Hook]] - degree 4, connects to 1 community