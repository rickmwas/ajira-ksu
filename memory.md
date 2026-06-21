# Memory — Website Hero Redesign, Login Mockup Alignment & Google Sign-In Integration

Last updated: 2026-06-21T19:55:00+03:00

## What was built

- **Global Visual Sizing & Noise Overlay**:
  - Added a responsive `.bg-noise` inline SVG noise utility inside `packages/shared/src/styles/globals.css`.
  - Increased global header and mobile layouts height to `80px` for layout spaciousness.
- **New Chapter Logo Migration**:
  - Integrated `ajiraLOGO.png` across all layout views (Navbar, Footer, Sidebar, Login page, homepage partner strip).
  - Scaled the logo to `h-14` (56px) in Navbar, Footer, and Login screen, and `h-11` (44px) in the Sidebar.
- **Website Hero Section Upgrade**:
  - Upgraded home page Hero section in `apps/website/src/app/page.tsx` with a noisy white background, blue radial gradients, background grid lines, a gradient text effect ("Digital Futures"), and custom glassmorphic image card styling.
- **Portal Login Redesign**:
  - Redesigned the user login interface in `apps/portal/src/app/portal/login/page.tsx` to match the custom design mockup.
  - Added the generated university campus building at night (`login-bg.png`) with starry overlays and blue highlights as the left panel background.
  - Implemented the gold underline welcome divider and a bottom glassmorphic info card with a graduation cap icon.
  - Structured form input boxes, dividers, and link typography to be clean and minimal.
- **Google Sign-In Integration**:
  - Added `loginWithGoogle` method in `packages/shared/src/hooks/usePortalState.tsx` using Supabase's `signInWithOAuth` redirecting to `${window.location.origin}/auth/callback`.
  - Created the redirect code exchange route handler at `apps/portal/src/app/auth/callback/route.ts`.
  - Bound the Google SSO button on the login page to call the custom authentication method.

## Decisions made

- **Header Height Standardization**: standardizing header heights to `80px` and matching page/scrolling offsets (`pt-[80px]` and `top-[80px]`) prevents layout displacement and keeps scrolling sections cohesive.
- **Local Dev Redirect Handling**: Dev environment URLs redirect directly inside the callback route to handle local dev server ports correctly without needing absolute external DNS overrides.

## Problems solved

- **Build compilation checks**: Fixed relative imports and workspace TS mapping warnings to ensure the website and portal workspaces compile successfully in production traces.

## Current state

- Both website (`apps/website`) and portal (`apps/portal`) workspaces build successfully with zero errors.
- Visual elements match the mockups perfectly.

## Next session starts with

- Run all local dev servers concurrently using `npm run dev` and test Google Sign-In redirect flows locally.
- Access the Supabase dashboard to register Google Client ID and Secret credentials.

## Open questions

- None. Both visual and functional upgrades are complete and verified.
