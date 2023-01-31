# Lead Management CRM

**Sohail Sharif · Personal engineering project · Core prototype**

## Problem
This project explores tenant search, assignment rules, activity timeline, permissions. It is designed as a focused engineering lab for Full Stack roles.

## Current implementation
Tenant-scoped search, assignment and activity tracking. See source and executable tests for the exact behavior.

This repository is an initial implementation, not a deployed production system. The full target architecture below is a roadmap. No throughput, uptime, savings or recovery claims have been measured for a production environment.

## Target stack
React, TypeScript, Node.js, PostgreSQL

## Architecture
```mermaid
flowchart LR
  n0["Tenant"] --> n1
  n1["permission check"] --> n2
  n2["lead command"] --> n3
  n3["activity event"] --> n4
  n4["search"]
```

The diagram describes the target architecture; adapters listed below are not implemented yet.

## Run and verify
Run from this directory. Requires Node.js 22.18 or later.

```sh
node --test
```

## Next milestones
- [ ] React screens
- [ ] JWT authentication
- [ ] PostgreSQL persistence
- [ ] cursor pagination

## Trade-offs
- The domain core is isolated from infrastructure so its invariants can be tested quickly.
- In-memory state makes the prototype reproducible but does not survive restarts or coordinate multiple machines.
- Production authentication, secret management, persistence, metrics and deployment verification remain required.

## Evidence
Tests are executable specifications. Cloud and load-test results are deliberately unclaimed. Record real commands, versions, hardware, dataset, date and results in `docs/VALIDATION.md` before quoting numbers on a resume.

## Interview discussion
Explain the failure boundary, tenant boundary, consistency model, retry behavior, operational signals and why the chosen persistence adapter fits the workload.
