---
type: community
cohesion: 0.67
members: 4
---

# Stream Watchdog Settings

**Cohesion:** 0.67 - moderately connected
**Members:** 4 nodes

## Members
- [[CLAUDE_ENABLE_BYTE_WATCHDOG]] - document - env-vars.md
- [[CLAUDE_ENABLE_BYTE_WATCHDOG_BEDROCK]] - document - env-vars.md
- [[CLAUDE_ENABLE_STREAM_WATCHDOG]] - document - env-vars.md
- [[CLAUDE_STREAM_IDLE_TIMEOUT_MS]] - document - env-vars.md

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Stream_Watchdog_Settings
SORT file.name ASC
```
