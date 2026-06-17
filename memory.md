# Memory — Ajira KSU Next.js Migration and Monorepo Workspace Separation

Last updated: 2026-06-17T13:20:00+03:00

## What was built

- **Monorepo Architecture (npm workspaces)**:
  - Created a physical workspaces monorepo structure containing `apps/website`, `apps/portal`, `apps/admin`, and `packages/shared`.
  - Configured workspace dependencies using standard `*` syntax, allowing the local `@ajira/shared` package to be correctly linked inside `node_modules` across workspaces.
  - Set up script shortcuts in root `package.json` to facilitate building and running each app separately (`npm run build:website`, `npm run dev:portal`, etc.).

- **Shared Package (`@ajira/shared`)**:
  - Moved shared components, constants, hooks, database configurations, assets, and styles into the shared workspace package.
  - Set up `tsconfig.json` path mappings mapping `@ajira/shared/*` to resolve directly to the typescript sources.
  - Run a recursive alias replacement script updating 71 codebase files, moving imports from local `@/` paths to the workspace `@ajira/shared/*` path.
  - Defined `"type": "module"` in all `package.json` files to resolve ESM next.config modules correctly without overhead warnings.

- **Independent Routing & Middlewares**:
  - Configured isolated Next.js middleware layers for each of the three applications:
    - **Website**: Production redirects for `/portal` and `/admin` requests to their subdomains.
    - **Portal**: Validates login and register redirection, refreshes Supabase session, and handles mock cookie fallbacks.
    - **Admin**: Authenticates users and checks role permissions (`Executive` or `Admin`). If unauthorized, it redirects them to the portal app's login URL with redirect callback search params, resolving port mismatches dynamically in development.

- **Build Compilation & Validation**:
  - **`apps/website`**: Compiles successfully (14 static pages generated).
  - **`apps/portal`**: Compiles successfully (12 dynamic and static pages generated).
  - **`apps/admin`**: Compiles successfully (6 static pages generated).

- **GitHub Pushed**:
  - Committed and pushed all monorepo migration and config files to `https://github.com/rickmwas/ajira-ksu.git` branch `main`.

## Decisions made

- **Path Aliases for Workspace Transpilation**: Configured `transpilePackages: ["@ajira/shared"]` in `next.config.js` of all three apps, allowing Next.js to directly compile shared files without needing a separate bundling step for the shared package.
- **Port Mapping for Dev Redirects**: Injected dynamic port detection (`process.env.NEXT_PUBLIC_PORTAL_URL`) in admin middleware to resolve cross-domain logins cleanly on local machines during development.
- **Retaining Route Nesting in Apps**: Maintained portal routing under `/portal` and admin under `/admin` directories within `apps/portal/src/app` and `apps/admin/src/app`. This avoids the need to refactor hundreds of internal Next.js `Link` routes in components.

## Problems solved

- **`workspace:*` protocol error**: Replaced `workspace:*` with `*` inside the apps' `package.json` dependencies to ensure compatibility with standard `npm install` workspaces resolution.
- **PostCSS lock conflicts**: Stopped node background processes lock before moving directories to ensure `git mv` operations execute cleanly without "Permission denied" errors.

## Current state

- All three applications (`website`, `portal`, `admin`) build and compile in complete isolation.
- Shared code resides in a single, dry location in `@ajira/shared`.
- The repository was successfully committed and pushed to main.

## Next session starts with

- Run local dev servers using `npm run dev:website`, `npm run dev:portal`, or `npm run dev:admin`.
- Verify the subdomains logic redirects appropriately under a multi-domain staging or production environment.
- Implement production environment variables (`NEXT_PUBLIC_WEBSITE_DOMAIN`, `NEXT_PUBLIC_PORTAL_DOMAIN`, `NEXT_PUBLIC_ADMIN_DOMAIN`) on hosting platforms.
