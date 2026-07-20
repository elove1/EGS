---
type: community
cohesion: 1.00
members: 2
---

# OTel Prompt Logging

**Cohesion:** 1.00 - tightly connected
**Members:** 2 nodes

## Members
- [[OTEL_LOG_ASSISTANT_RESPONSES]] - document - env-vars.md
- [[OTEL_LOG_USER_PROMPTS]] - document - env-vars.md

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/OTel_Prompt_Logging
SORT file.name ASC
```
