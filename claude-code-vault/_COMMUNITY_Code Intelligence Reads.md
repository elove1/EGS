---
type: community
cohesion: 1.00
members: 2
---

# Code Intelligence Reads

**Cohesion:** 1.00 - tightly connected
**Members:** 2 nodes

## Members
- [[Block Reads of Generated and Vendored Code]] - document - large-codebases.md
- [[Reduce File Reads with Code Intelligence]] - document - large-codebases.md

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Code_Intelligence_Reads
SORT file.name ASC
```
