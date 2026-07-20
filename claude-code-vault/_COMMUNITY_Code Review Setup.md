---
type: community
cohesion: 0.22
members: 10
---

# Code Review Setup

**Cohesion:** 0.22 - loosely connected
**Members:** 10 nodes

## Members
- [[CLAUDE.md Usage in Code Review]] - document - code-review.md
- [[Code Review]] - document - code-review.md
- [[Code Review Pricing]] - document - code-review.md
- [[Code Review Troubleshooting]] - document - code-review.md
- [[Memory  CLAUDE.md (external doc)]] - document - memory.md
- [[Overview CLAUDE.md and Auto Memory]] - document - overview.md
- [[Overview Skills]] - document - overview.md
- [[REVIEW.md Customization]] - document - code-review.md
- [[Set Up Code Review]] - document - code-review.md
- [[Zero Data Retention]] - document - zero-data-retention.md

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Code_Review_Setup
SORT file.name ASC
```

## Connections to other communities
- 2 edges to [[_COMMUNITY_Extending Claude Code]]
- 2 edges to [[_COMMUNITY_Agent SDK Overview]]
- 1 edge to [[_COMMUNITY_Checkpoints & File Storage]]
- 1 edge to [[_COMMUNITY_CLI Commands Reference]]
- 1 edge to [[_COMMUNITY_GitLab CI & Vertex Setup]]
- 1 edge to [[_COMMUNITY_Claude Code Surfaces Overview]]
- 1 edge to [[_COMMUNITY_Cost & Usage Monitoring]]
- 1 edge to [[_COMMUNITY_Hooks & Permissions Overview]]

## Top bridge nodes
- [[Memory  CLAUDE.md (external doc)]] - degree 8, connects to 4 communities
- [[Code Review]] - degree 10, connects to 3 communities
- [[Zero Data Retention]] - degree 2, connects to 1 community