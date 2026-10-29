# Multi-Tenant Lead Management CRM Core (TypeScript / Node.js)

![CI Status](https://github.com/sohail-sharif-official/lead-management-crm/actions/workflows/verify.yml/badge.svg)
![Compliance](https://img.shields.io/badge/Enterprise_NDA-Clean--Room_Reference-10B981?style=flat-square)
**Stack:** `TypeScript · Node.js · Multi-Tenant RBAC · Assignment Engine`

> [!IMPORTANT]
> **🔒 Enterprise Confidentiality & Clean-Room Reference Notice (For HR & Technical Reviewers)**
> Due to strict **Non-Disclosure Agreements (NDAs)**, SOC2/PCI-DSS security compliance, and proprietary Intellectual Property (IP) governance across enterprise production systems, the full commercial source code, internal infrastructure manifests (Terraform state, Helm charts, internal VPC/IAM topologies), and proprietary third-party adapters cannot be published to public GitHub.
>
> **What is included in this repository:**
> This repository provides a **clean-room, zero-dependency architectural reference core** written from scratch to demonstrate the underlying **domain invariants, state machines, concurrency models, and automated verification suites** without exposing proprietary business logic or client infrastructure. Full architectural walkthroughs and production trade-off discussions are available during technical interviews.

---

## Overview
A multi-tenant CRM domain engine providing tenant-isolated lead indexing, rule-based sales representative assignment, role-based access enforcement, and immutable activity timelines.

## Architecture & Execution Flow
```mermaid
flowchart LR
  Intake["Lead Intake"] --> Tenant["Tenant Isolation Filter"]
  Tenant --> Assign["Assignment Rule Engine"]
  Assign --> RBAC["RBAC Permission Check"]
  RBAC --> Timeline["Audit Activity Log"]
```

## Key Engineering Capabilities
- **Tenant-Scoped Data Isolation:** Ensures lead queries, assignments, and updates never cross tenant boundaries.
- **Rule-Based Lead Assignment:** Routes incoming leads deterministically based on territory and workload rules.
- **Chronological Audit Timeline:** Appends immutable activity records for every status change and note.
- **Automated Test Suite:** Verified with `node --test` on Node.js 24.

## Why a Clean-Room Domain Core?
In enterprise microservices, 80% of production incidents stem from broken domain invariants (race conditions, non-idempotent retries, cross-tenant data leakage, or unbalanced state transitions) rather than HTTP/ORM boilerplate. By isolating the **pure domain engine** from proprietary cloud adapters:
1. **Confidentiality & IP Safety:** Zero proprietary client schemas, credentials, or internal endpoints are exposed.
2. **Deterministic Verification:** Reviewers can clone and execute the full invariant test suite in under 2 seconds (`node --test`) with zero external database or cloud setup required.
3. **Clear Architectural Boundaries:** Demonstrates strict separation between domain rules and infrastructure delivery.

## Local Verification
Run the self-contained verification suite locally:

```bash
node --test
```

## Documentation
- [Architectural Decisions & Trade-offs](docs/DECISIONS.md)
- [Security, NDA & Isolation Model](docs/SECURITY.md)
