---
type: community
cohesion: 0.38
members: 7
---

# GitLab CI & Vertex Setup

**Cohesion:** 0.38 - loosely connected
**Members:** 7 nodes

## Members
- [[setup-vertex wizard]] - concept - google-vertex-ai.md
- [[Claude Code GitLab CICD]] - document - gitlab-ci-cd.md
- [[Claude Code on Google Cloud's Agent Platform]] - document - google-vertex-ai.md
- [[GitLab CICD Variables]] - concept - gitlab-ci-cd.md
- [[Model pinning (VERTEX_REGION_ vars)]] - concept - google-vertex-ai.md
- [[Vertex env vars (CLAUDE_CODE_USE_VERTEX, CLOUD_ML_REGION, ANTHROPIC_VERTEX_PROJECT_ID)]] - concept - google-vertex-ai.md
- [[gcpAuthRefresh setting]] - concept - google-vertex-ai.md

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/GitLab_CI__Vertex_Setup
SORT file.name ASC
```

## Connections to other communities
- 3 edges to [[_COMMUNITY_Fast Mode & Features]]
- 2 edges to [[_COMMUNITY_Extending Claude Code]]
- 1 edge to [[_COMMUNITY_Code Review Setup]]
- 1 edge to [[_COMMUNITY_Context & Memory Management]]
- 1 edge to [[_COMMUNITY_Glossary of Terms]]

## Top bridge nodes
- [[Claude Code GitLab CICD]] - degree 6, connects to 4 communities
- [[Claude Code on Google Cloud's Agent Platform]] - degree 8, connects to 3 communities
- [[gcpAuthRefresh setting]] - degree 2, connects to 1 community