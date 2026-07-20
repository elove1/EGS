---
type: community
cohesion: 0.67
members: 3
---

# Token Limit Settings

**Cohesion:** 0.67 - moderately connected
**Members:** 3 nodes

## Members
- [[CLAUDE_CODE_MAX_OUTPUT_TOKENS]] - document - errors.md
- [[MAX_THINKING_TOKENS]] - document - env-vars.md
- [[Thinking budget exceeds output limit]] - document - errors.md

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Token_Limit_Settings
SORT file.name ASC
```
