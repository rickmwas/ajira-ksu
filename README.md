# 📘 Kisii University Ajira Digital Club Portal & Learning System

A high-fidelity, production-grade digital ecosystem built for the **Ajira Digital Club Chapter at Kisii University (KSU), Kenya**. This platform empowers students by providing digital skills training, certification, event coordination, and access to gig-economy opportunities.

The codebase is structured as an **npm workspaces monorepo** separating the public website, student portal, and admin dashboard into isolated applications that share a common design system and helper package.

---

## 🚀 Key Monorepo Architecture

The platform is split into three independent Next.js applications and a shared workspace package:

1. **Public Website ([`apps/website`](file:///c:/Users/rickm/Downloads/ajira-next-door-mainzip%20(1)/ajira-next-door-mainzip/apps/website))**: Handles public brand presence, recruitment, leadership profiles, events display, blog post CMS, and contact pages. Bounces subdomain traffic in production.
2. **Student Portal ([`apps/portal`](file:///c:/Users/rickm/Downloads/ajira-next-door-mainzip%20(1)/ajira-next-door-mainzip/apps/portal))**: Secure console where authenticated student members register, track milestones, complete LMS modules, RSVP to events, browse opportunities, and print verified landscape A4 certificates.
3. **Club Admin Panel ([`apps/admin`](file:///c:/Users/rickm/Downloads/ajira-next-door-mainzip%20(1)/ajira-next-door-mainzip/apps/admin))**: Console for club leadership (Executives & Admins) to track member growth (via SVG line charts), analyze program registrations (via SVG donut charts), manage events, and verify certified members.
4. **Shared Package ([`packages/shared`](file:///c:/Users/rickm/Downloads/ajira-next-door-mainzip%20(1)/ajira-next-door-mainzip/packages/shared))**: Houses shared components (Navbar, Footer, Sidebar, Reveal, RegisterModal, UI components), constants, hooks, Supabase configurations, and global stylesheets (Tailwind CSS v4).

---

## 🛠️ Technology Stack

* **Core Framework**: Next.js 15 (App Router)
* **Monorepo Manager**: Npm Workspaces
* **Styling**: Tailwind CSS v4 + PostCSS (integrated with workspace-wide `@source` tracking)
* **Database & Auth**: Supabase SSR (with mock cookie fallbacks for offline-friendly local testing)
* **Icons**: [Lucide React](https://lucide.dev/)
* **State Management**: React Context (`PortalProvider`, `RegisterProvider`)
* **Utilities**: Framer Motion (micro-animations), Zod (form schema validation), Resend (notification triggers)

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
│           ├── styles/     # globals.css (Tailwind CSS v4 & custom background noise utility)
│           └── assets/     # Brand logos, icons, and gallery image assets
```

---

## 📐 Design System & UI Guidelines

To maintain a premium, cohesive user experience, developers must follow these design tokens and sizing rules:

### Color Palette & Tokens
* **Primary Blue**: `#0056A6` (Ajira Blue representation)
* **Accent Gold**: `#F4B400` (Ajira Gold representation)
* **Dark Base**: `#0F172A` (Slate 900)
* **Background Utilities**: Radial gradients, glassmorphism, and a custom SVG noise texture utility (`.bg-noise`).

### Layout Metrics
* **Header Heights**: Standardized to `80px` for all layout views.
* **Scroll Offsets**: Ensure scroll margins (`pt-[80px]` or `scroll-mt-[80px]`) match the header height to avoid layout displacement when navigating anchors.
* **Typography**: Headings use the **Sora** font family, body copy uses **Plus Jakarta Sans**, and monospaced text uses **JetBrains Mono**.

---

## 💾 Database Setup (Supabase)

The system relies on a PostgreSQL schema configured in Supabase. You can find the SQL script at [`supabase_schema.sql`](file:///c:/Users/rickm/Downloads/ajira-next-door-mainzip%20(1)/ajira-next-door-mainzip/supabase_schema.sql).

### Key Features of the Schema:
1. **Profiles Table**: Extends Supabase auth system, tracking student bio details, registration data, roles, and experience points.
2. **LMS Progress**: Tracks lesson completion (`lessons_progress` table) per user with composite primary keys (`profile_id`, `course_id`, `lesson_id`).
3. **Automated Profiles Trigger**: Automatically inserts a profile into `public.profiles` on new auth signups, generating:
   * A unique KSU Registration ID format: `KSU/AJR/2026/XXXX`
   * Administrative role assignment based on signup email patterns (`*admin*` / `*pres*` mapping to `Admin`, `*exec*` / `*board*` mapping to `Executive`, and default as `Member`).
4. **Row-Level Security (RLS)**: Policies are established on all tables to ensure student privacy and control access privileges.

---

## ⚙️ Environment Configuration

Copy the example environment file at the root to create your local variables:

```bash
cp .env.example .env.local
```

Configure the following variables inside `.env.local`:

```env
# Supabase settings (Obtain from your Supabase Dashboard under Settings -> API)
NEXT_PUBLIC_SUPABASE_URL=https://your-supabase-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

# Production domains
NEXT_PUBLIC_WEBSITE_DOMAIN=ajiraksu.org
NEXT_PUBLIC_PORTAL_DOMAIN=portal.ajiraksu.org
NEXT_PUBLIC_ADMIN_DOMAIN=admin.ajiraksu.org

# Local Development ports
NEXT_PUBLIC_WEBSITE_URL=http://localhost:3000
NEXT_PUBLIC_PORTAL_URL=http://localhost:3001
NEXT_PUBLIC_ADMIN_URL=http://localhost:3002
```

---

## 💻 Local Development

### Prerequisites
* **Node.js**: v18.0.0 or newer
* **Npm**: v7.0.0 or newer (for monorepo workspaces support)

### 1. Install Dependencies
Run the install command at the monorepo root directory:
```bash
npm install
```

### 2. Start Development Servers
You can run all three applications concurrently or work on them individually.

* **Run All Workspaces Concurrently**:
  ```bash
  npm run dev
  ```
  This command uses `concurrently` to run the website, student portal, and admin panel side-by-side with color-coded console logs.

* **Run Individual Applications**:
  * **Public Website** (Port 3000):
    ```bash
    npm run dev:website
    ```
  * **Student Portal** (Port 3001):
    ```bash
    npm run dev:portal
    ```
  * **Club Admin Panel** (Port 3002):
    ```bash
    npm run dev:admin
    ```

### 3. Verification & Formatting
* **Format codebase**: `npm run format` (Runs Prettier across all directories)
* **Linting**: `npm run lint` (Checks Next.js and ESLint code standards)

---

## 📄 Production Builds & Deployment

### Compilation
Compile each application to generate optimized production builds:
* **Website**: `npm run build:website`
* **Portal**: `npm run build:portal`
* **Admin**: `npm run build:admin`

### Vercel Deployment
To deploy as independent subdomains on Vercel:
1. Connect your repository to Vercel.
2. Create three separate projects on your Vercel Dashboard (e.g. `ajira-website`, `ajira-portal`, `ajira-admin`).
3. For each project, set the **Root Directory** settings to point to:
   * Website: `apps/website`
   * Portal: `apps/portal`
   * Admin: `apps/admin`
4. Vercel automatically honors root-level workspaces and dependencies, building only the chosen project directory and mapping it to the respective subdomain (e.g., `ajiraksu.org`, `portal.ajiraksu.org`, `admin.ajiraksu.org`).
