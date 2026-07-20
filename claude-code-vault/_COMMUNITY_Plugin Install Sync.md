---
type: community
cohesion: 1.00
members: 2
---

# Plugin Install Sync

**Cohesion:** 1.00 - tightly connected
**Members:** 2 nodes

## Members
- [[CLAUDE_CODE_SYNC_PLUGIN_INSTALL]] - document - env-vars.md
- [[CLAUDE_CODE_SYNC_PLUGIN_INSTALL_TIMEOUT_MS]] - document - env-vars.md

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Plugin_Install_Sync
SORT file.name ASC
```
