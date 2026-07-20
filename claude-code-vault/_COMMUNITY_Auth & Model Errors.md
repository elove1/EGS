---
type: community
cohesion: 0.50
members: 4
---

# Auth & Model Errors

**Cohesion:** 0.50 - moderately connected
**Members:** 4 nodes

## Members
- [[Login expired]] - document - errors.md
- [[Model is not a recognized model id]] - document - errors.md
- [[OAuth token revoked or expired]] - document - errors.md
- [[There's an issue with the selected model]] - document - errors.md

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Auth__Model_Errors
SORT file.name ASC
```
