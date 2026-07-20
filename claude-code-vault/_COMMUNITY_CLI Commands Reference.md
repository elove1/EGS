---
type: community
cohesion: 0.25
members: 8
---

# CLI Commands Reference

**Cohesion:** 0.25 - loosely connected
**Members:** 8 nodes

## Members
- [[code-review Command Entry]] - document - commands.md
- [[code-review Local Diff Review]] - document - code-review.md
- [[CLI Commands Table]] - document - cli-reference.md
- [[Ultrareview]] - document - ultrareview.md
- [[claude agents CLI Command]] - document - cli-reference.md
- [[claude daemon Commands]] - document - cli-reference.md
- [[claude project purge CLI Entry]] - document - cli-reference.md
- [[claude ultrareview CLI Command]] - document - cli-reference.md

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/CLI_Commands_Reference
SORT file.name ASC
```

## Connections to other communities
- 1 edge to [[_COMMUNITY_Checkpoints & File Storage]]
- 1 edge to [[_COMMUNITY_CLI Overview & Setup]]
- 1 edge to [[_COMMUNITY_Code Review Setup]]
- 1 edge to [[_COMMUNITY_Built-in Slash Commands]]

## Top bridge nodes
- [[CLI Commands Table]] - degree 5, connects to 1 community
- [[code-review Local Diff Review]] - degree 3, connects to 1 community
- [[claude project purge CLI Entry]] - degree 2, connects to 1 community
- [[code-review Command Entry]] - degree 2, connects to 1 community