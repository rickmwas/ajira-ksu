# Kisii University Ajira Digital Club Portal & Learning System

A high-fidelity, comprehensive student training, registration, and certification portal designed specifically for the **Ajira Digital Club Chapter at Kisii University (KSU), Kenya**.

This platform equips students with real digital economy competencies (Virtual Assistance, Transcription, SEO Copywriting, and Web Page Design), tracks learning milestones, and generates printable landscape certificates of completion.

---

## 🚀 Key Features

* **Secure Student Portal Console (`/portal`)**:
  * Guest lockouts on `/portal` paths. Students must register to access learning tracks.
  * Unique registration ID generation mapped under `KSU/AJR/2026/XXXX` with enrollment dates.
  * Local state storage persistence for profiles, lesson checklists, and course progress.
* **Interactive Sourced Courses (`/portal/learn/$courseId`)**:
  * Real training tracks:
    1. *Virtual Assistant & Data Entry*: Spreadsheet management, customer helpdesks, and Shopify order logistics.
    2. *Transcription & Subtitling*: Formatting rules, playback playback configurations, and speaker alignment.
    3. *Content & SEO Copywriting*: SEO articles, keyword hierarchy, listicles, and proposal bidding structures.
    4. *Web Design & Digital Commerce*: Dawn Shopify themes, WordPress layouts, and Vercel static deployments.
  * Split-pane workspace: left sidebar navigation checklist and right interactive markdown lesson reader.
  * Active lesson navigation buttons and checkable lesson completion toggles.
* **Print-Ready Landscape Certificate Generator (`/portal/certificate/$courseId`)**:
  * Generates high-fidelity Certificates of Completion for 100% completed courses.
  * Includes a unique serial verification hash (e.g. `KSU-AJR-VA-1842-12`).
  * Dedicated signatures for Club Patron `Dr. Douglas Bosire` and the Chapter President.
  * Localized browser print style bindings (`@media print`) that format a clean landscape document filling an A4 page when **Print Certificate** is clicked.
* **Kenyan Representative Media**:
  * Replaced all generic western/white representation with hand-picked, authentic photography of African tech students collaborating and studying.
* **Premium Typography System**:
  * Display Headings: **Sora** (bold, modern)
  * Body Text: **Plus Jakarta Sans** (clean, high readability)
  * Code & Meta Labels: **JetBrains Mono** (cyber/brutalist technical details)

---

## 🛠️ Technology Stack

* **Meta-Framework**: [TanStack Start](https://tanstack.com/router/v1/docs/start/overview) (React with SSR/hydrate routing)
* **Routing System**: TanStack Router (File-based routes automatically compiled)
* **Styling**: Tailwind CSS v4 (with custom solid brutalist theme parameters)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Development Build**: Vite v8

---

## 📁 Directory Structure

```text
├── src/
│   ├── assets/             # Brand logos (KSU, Ajira) and icons
│   ├── components/
│   │   └── site/           # Layout, Navbars, Footers, and Modals
│   ├── hooks/
│   │   └── usePortalState  # State provider for member profiles & lessons
│   ├── routes/             # TanStack Start Route Files
│   │   ├── __root.tsx      # App wrapper with query client & font loads
│   │   ├── index.tsx       # Aligned main landing page & Portals hub
│   │   ├── portal.tsx      # Secure portal wrapper layout (Guard Lock)
│   │   ├── portal.index.tsx# Student learning dashboard console
│   │   ├── portal.learn.$courseId.tsx       # Split-pane Lesson syllabus reader
│   │   └── portal.certificate.$courseId.tsx  # Print-ready certificate generator
│   ├── router.tsx          # TanStack Router configuration
│   ├── start.ts            # SSR entry point bindings
│   └── styles.css          # Theme configs, fonts, and animation variables
├── vite.config.ts          # Vite and TanStack Router plugin definitions
└── package.json            # Scripts and dependency versions
```

---

## 💻 Local Installation & Run Guide

### Prerequisite
Ensure you have **Node.js** (v18 or newer) or **Bun** installed.

### 1. Install Dependencies
Run the install command inside the directory:
```bash
npm install
```

### 2. Start the Development Server
Launch the compiler and start the hot-reloading dev server:
```bash
npm run dev
```
Open [http://localhost:5000](http://localhost:5000) on your browser to view the application.

### 3. Production Build
Compile the client assets and SSR environment bundles:
```bash
npm run build
```
The output will be bundled inside the `dist/` directory.

### 4. Preview Build
Preview the generated production build locally:
```bash
npm run preview
```

---

## 📄 Deployment Configuration

The application is configured to deploy directly to Vercel. Configuration bindings are present in:
* `vercel.json` (Vercel routes and start configurations)
* `package.json` (`vercel-build` mapped to `npm run build`)
