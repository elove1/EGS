---
type: community
cohesion: 0.67
members: 3
---

# Team & Worktree Hooks

**Cohesion:** 0.67 - moderately connected
**Members:** 3 nodes

## Members
- [[Hooks reference (external)]] - document - agent-teams.md
- [[TeammateIdleTaskCreatedTaskCompleted hooks]] - concept - agent-teams.md
- [[WorktreeCreate hook]] - concept - agent-view.md

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Team__Worktree_Hooks
SORT file.name ASC
```

## Connections to other communities
- 1 edge to [[_COMMUNITY_Agent Teams]]
- 1 edge to [[_COMMUNITY_Background Agent Management]]

## Top bridge nodes
- [[TeammateIdleTaskCreatedTaskCompleted hooks]] - degree 2, connects to 1 community
- [[WorktreeCreate hook]] - degree 2, connects to 1 community