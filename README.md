# Kisii University Ajira Digital Club Portal & Learning System

A high-fidelity, production-grade digital ecosystem built for the **Ajira Digital Club Chapter at Kisii University (KSU), Kenya**. 

The codebase is structured as a physical **npm workspaces monorepo** separating the public website, student portal, and admin dashboard into isolated applications sharing a common library package.

---

## 🚀 Key Monorepo Architecture

The platform is split into three independent Next.js 15 applications and a single shared workspace package:

1. **Public Website (`apps/website`)**: Handles all public-facing information: Home, About, Programs, Events, Blog, Gallery, and Contact pages. Bounces portal and admin traffic in production to their subdomains.
2. **Student Portal (`apps/portal`)**: Secure console where students register, generate their unique KSU registration ID (`KSU/AJR/2026/XXXX`), track milestones, learn from split-pane interactive syllabi, and print landscape A4 certificates of completion.
3. **Club Admin Panel (`apps/admin`)**: Advisory board console to track member growth (using SVG line charts), analyze member distribution across programs (using SVG donut charts), and manage active events.
4. **Shared Package (`packages/shared`)**: Houses all shared components (Navbar, Footer, Sidebar, Reveal, RegisterModal, UI components), constants, hooks, Supabase configurations, and assets/styles (Tailwind CSS v4).

---

## 🛠️ Technology Stack

* **Core Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
* **Monorepo Manager**: Npm Workspaces
* **Styling**: Tailwind CSS v4 (with PostCSS and `@source` tracking configured workspace-wide)
* **Database & Auth**: Supabase SSR (with mock cookie fallbacks for offline-friendly local testing)
* **Icons**: [Lucide React](https://lucide.dev/)
* **State Management**: React Context (PortalProvider, RegisterProvider)

---

## 📁 Directory Structure

```text
├── apps/
│   ├── website/            # Public Website application
│   │   ├── src/app/        # Home, About, Blog, Contact, Events, Gallery, Programs
│   │   ├── next.config.js
│   │   └── tsconfig.json
│   │
│   ├── portal/             # Student Portal application
│   │   ├── src/app/        # Learn courses, Dashboard, Profile, settings, Certificates
│   │   ├── next.config.js
│   │   └── tsconfig.json
│   │
│   └── admin/              # Club Admin Console application
│       ├── src/app/        # Analytics, Users list, Events management
│       ├── next.config.js
│       └── tsconfig.json
│
├── packages/
│   └── shared/             # Shared workspace package (@ajira/shared)
│       ├── package.json
│       ├── tsconfig.json
│       └── src/
│           ├── components/ # Shared site components and shadcn UI library
│           ├── constants/  # Courses lists, blog posts
│           ├── hooks/      # usePortalState, use-mobile
│           ├── lib/        # Supabase configs, middleware helpers, and cn utils
│           ├── styles/     # globals.css (Tailwind CSS v4)
│           └── assets/     # Brand logos, icons, and gallery image assets
```

---

## 💻 Local Installation & Development

### Prerequisites
* **Node.js** (v18 or newer)
* **Npm** (v7 or newer for workspaces support)

### 1. Install Dependencies
Run the install command at the monorepo root directory to resolve workspaces dependencies:
```bash
npm install
```

### 2. Start the Development Servers
Launch the hot-reloading development server for any of the workspaces using the root command shortcuts:
* **Run Public Website**:
  ```bash
  npm run dev:website
  ```
  Open [http://localhost:3000](http://localhost:3000) to view the website.
* **Run Student Portal**:
  ```bash
  npm run dev:portal
  ```
  Open [http://localhost:3001](http://localhost:3001) to view the portal.
* **Run Club Admin Panel**:
  ```bash
  npm run dev:admin
  ```
  Open [http://localhost:3002](http://localhost:3002) to view the admin dashboard.

---

## 📄 Production Builds & Deployment

### Production Compilation
Compile the applications separately to generate optimized production assets:
* **Build Website**: `npm run build:website`
* **Build Portal**: `npm run build:portal`
* **Build Admin**: `npm run build:admin`

### Vercel Deployment
To deploy as three independent projects on Vercel:
1. Link your GitHub repository to Vercel.
2. Create three separate projects on Vercel, pointing each to the repository.
3. In the project settings for each, configure the **Root Directory** field to:
   * Website: `apps/website`
   * Portal: `apps/portal`
   * Admin: `apps/admin`
4. Vercel will automatically discover the workspace configurations at the repository root, compile only the targeted application, and assign it to its designated production domain/subdomain (e.g. `ajiraksu.org`, `portal.ajiraksu.org`, `admin.ajiraksu.org`).
