# Agent Mastery and Execution Protocol - Ajira Club KSU

## 📖 Reading Order Requirement
Before performing ANY code updates, implementation tasks, or design decisions, the agent MUST read the following context intelligence files in this exact order:
1. [project-overview.md](file:///c:/Users/rickm/Downloads/ajira-next-door-mainzip%20(1)/ajira-next-door-mainzip/context/project-overview.md)
2. [architecture.md](file:///c:/Users/rickm/Downloads/ajira-next-door-mainzip%20(1)/ajira-next-door-mainzip/context/architecture.md)
3. [ui-tokens.md](file:///c:/Users/rickm/Downloads/ajira-next-door-mainzip%20(1)/ajira-next-door-mainzip/context/ui-tokens.md)
4. [ui-rules.md](file:///c:/Users/rickm/Downloads/ajira-next-door-mainzip%20(1)/ajira-next-door-mainzip/context/ui-rules.md)
5. [code-standards.md](file:///c:/Users/rickm/Downloads/ajira-next-door-mainzip%20(1)/ajira-next-door-mainzip/context/code-standards.md)
6. [library-docs.md](file:///c:/Users/rickm/Downloads/ajira-next-door-mainzip%20(1)/ajira-next-door-mainzip/context/library-docs.md)
7. [ui-registry.md](file:///c:/Users/rickm/Downloads/ajira-next-door-mainzip%20(1)/ajira-next-door-mainzip/context/ui-registry.md)
8. [progress-tracker.md](file:///c:/Users/rickm/Downloads/ajira-next-door-mainzip%20(1)/ajira-next-door-mainzip/context/progress-tracker.md)
9. [build-plan.md](file:///c:/Users/rickm/Downloads/ajira-next-door-mainzip%20(1)/ajira-next-door-mainzip/context/build-plan.md)

## ⚡ Execution Rules
* **NEVER Guess Architecture**: Do not invent directory patterns, subdomains, or databases out of context. Rely on the structured documents.
* **NEVER Invent APIs**: Do not write random services, REST endpoints, or server action interfaces that are not validated against Supabase schemas.
* **NEVER Code without Build Plan Reference**: Always align with the current active phase in `build-plan.md`.
* **ALWAYS Update Progress**: When a feature completes, update [progress-tracker.md](file:///c:/Users/rickm/Downloads/ajira-next-door-mainzip%20(1)/ajira-next-door-mainzip/context/progress-tracker.md).
* **ALWAYS Register Components**: Any new reusable UI component must immediately be added to [ui-registry.md](file:///c:/Users/rickm/Downloads/ajira-next-door-mainzip%20(1)/ajira-next-door-mainzip/context/ui-registry.md) with details on tokens and reactivity.

## 🛠️ Skill Usage Protocol
* **architect**: Run to confirm design patterns, database schemas, or layout choices BEFORE implementing complex files.
* **review**: Use to perform self-auditing on newly migrated pages to ensure TypeScript safety and Next.js optimization criteria are met.
* **recover**: Invoke if compiler errors, route failures, or package mismatches arise.
* **imprint**: Run after component design validation to extract patterns and verify they fit within the design principles.
* **remember**: Use to store decisions across active agent context loops.
