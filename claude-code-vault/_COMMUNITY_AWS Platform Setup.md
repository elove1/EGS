---
type: community
cohesion: 0.29
members: 7
---

# AWS Platform Setup

**Cohesion:** 0.29 - loosely connected
**Members:** 7 nodes

## Members
- [[AWS Credential and Workspace Setup]] - document - claude-platform-on-aws.md
- [[Claude Code on Claude Platform on AWS]] - document - claude-platform-on-aws.md
- [[Corporate Proxy Routing]] - document - claude-platform-on-aws.md
- [[LLM Gateway]] - document - llm-gateway.md
- [[Model Configuration]] - document - model-config.md
- [[Run Prompts on a Schedule (loop)]] - document - scheduled-tasks.md
- [[awsAuthRefresh Credential Refresh]] - document - claude-platform-on-aws.md

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/AWS_Platform_Setup
SORT file.name ASC
```

## Connections to other communities
- 2 edges to [[_COMMUNITY_Cost & Usage Monitoring]]
- 2 edges to [[_COMMUNITY_Desktop App Overview]]
- 2 edges to [[_COMMUNITY_Prompt Caching]]
- 1 edge to [[_COMMUNITY_Claude Code Surfaces Overview]]
- 1 edge to [[_COMMUNITY_CLI Overview & Setup]]
- 1 edge to [[_COMMUNITY_Fast Mode & Features]]
- 1 edge to [[_COMMUNITY_Agent SDK Overview]]

## Top bridge nodes
- [[Model Configuration]] - degree 5, connects to 4 communities
- [[Claude Code on Claude Platform on AWS]] - degree 6, connects to 2 communities
- [[LLM Gateway]] - degree 3, connects to 2 communities
- [[awsAuthRefresh Credential Refresh]] - degree 2, connects to 1 community
- [[Run Prompts on a Schedule (loop)]] - degree 2, connects to 1 community