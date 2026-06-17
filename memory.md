# Memory — Next.js 15 Monorepo Refactoring & Visual Optimization

Last updated: 2026-06-17T13:50:00+03:00

## What was built

- **Monorepo Workspaces Layout**:
  - Refactored the unified codebase into a physical npm workspaces monorepo with `apps/website`, `apps/portal`, `apps/admin`, and `packages/shared`.
  - Set up build/dev scripts shortcuts in the root `package.json`.
- **Shared Library (`@ajira/shared`)**:
  - Established a shared package to centralize components, hooks, constants, supabase helpers, global styles, and graphic assets.
  - Configured `@ajira/shared/*` paths mappings in each app's `tsconfig.json` and set `transpilePackages: ["@ajira/shared"]` in `next.config.js`.
  - Performed recursive path alias replacement updating 71 import statements from `@/` to `@ajira/shared/`.
- **Isolated Routing & Middlewares**:
  - Built three isolated middlewares for the apps (Website redirects public paths; Portal guards user access; Admin checks roles and handles local/production login port redirects).
- **Responsive Navigation Fix**:
  - Configured Tailwind CSS v4 `@source` directives in the global CSS file targeting all app source folders, resolving the squished inline nav menu layout bug.
- **Hero Image Alignment**:
  - Integrated the new `heroimg.png` asset onto the homepage hero section, rendering it as a free-standing, drop-shadowed, responsive image.
- **Documentation & Database Schema**:
  - Overwrote the root `README.md` to document the workspaces hierarchy, local script shortcuts, and Vercel multi-app setup.
  - Created `supabase_schema.sql` containing production table schemas (profiles, lessons_progress, events), row-level security (RLS) policies, and automated signup triggers.

## Decisions made

- **Path Nesting Preservation**: Kept `/portal` and `/admin` routes nested under folder routes inside `apps/portal/src/app` and `apps/admin/src/app` respectively, preserving internal Next.js `Link` routes without code breaks.
- **Workspaces Notation**: Used standard `*` syntax for `@ajira/shared` dependencies in the apps to resolve workspace linking correctly under standard npm installs.
- **Styles Scanning**: Configured wildcard `@source` directives relative to the shared CSS file location to force Tailwind's compiler to scan directories outside the package tree.

## Problems solved

- **Missing styles compilation**: Fixed squished navigation text layouts by adding `@source` paths, instructing Tailwind v4 to parse styles used in the app directories.
- **`workspace:*` installation failure**: Resolved npm protocol unsupported warnings by changing dependency syntax to `*`.
- **Permission Denied folder locks**: Closed standard Node dev processes to release file locks during the folders migration.

## Current state

- All three apps (`website`, `portal`, `admin`) build successfully in isolation with zero compile errors.
- The workspaces are linked and the changes are pushed to GitHub (`main` branch).

## Next session starts with

- Run dev servers using `npm run dev:website`, `npm run dev:portal`, or `npm run dev:admin` to run local layout checks.
- Configure production domain environment variables on hosting dashboards (Vercel).

## Open questions

- None. The migration, styling fixes, and asset integrations are complete.
