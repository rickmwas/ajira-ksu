# Migration & Build Plan - Ajira Club KSU

## MVP Phases & Milestones

### Phase 1 — Foundation
* **Goal**: Establish the Next.js App Router environment and verify clean compilation.
* **Steps**:
  1. Initialize Next.js 15/16 App Router boilerplate.
  2. Setup `@/components` paths, Tailwind configuration with Ajira Blue (`#0056A6`) and Gold (`#F4B400`) tokens, and Sora/Plus Jakarta Sans typography settings.
  3. Integrate Supabase Client (`@supabase/supabase-js` & `@supabase/ssr`).
  4. Create Next.js Middleware (`middleware.ts`) for RBAC route protection.
  5. Setup main `RootLayout` with metadata.

### Phase 2 — Public Website
* **Goal**: Rebuild the public brand presence under the `(website)` route group.
* **Routes to Build**:
  * `/` (Home) with sections: Hero, Partners Strip, What We Do, Programs, Events Preview, Leadership, Testimonials, Gallery Grid, CTA.
  * `/about` (Mission & History)
  * `/programs` (Course syllabus list)
  * `/events` (Workshop listings and detail drawers)
  * `/leadership` (Profiles of Executive members)
  * `/blog` (Public CMS articles list)
  * `/gallery` (Student activities photo masonry)
  * `/contact` (Feedback form)

### Phase 3 — Portal Core
* **Goal**: Establish the student portal base, registration, and user profiles.
* **Routes to Build**:
  * `/portal/login` (Simple sign in form)
  * `/portal/register` (Registration form with fields matching Supabase `users` schema)
  * `/portal/dashboard` (Portal overview: active courses, announcements, upcoming RSVP events)
  * `/portal/profile` (Student bio, skills tags, and course progress)

### Phase 4 — Learning System (LMS)
* **Goal**: Enable students to read course content and complete lessons with progress updates.
* **Routes to Build**:
  * `/portal/learn` (Tracks display)
  * `/portal/learn/[courseId]` (LMS Course reader workspace)
* **Features**:
  * Markdown rendering engine for course files.
  * Completion checkboxes synced to Supabase `progress` table.
  * Lesson duration counters and next/back navigation.

### Phase 5 — Certificates Engine
* **Goal**: Vette student qualifications and render print-ready credentials.
* **Routes to Build**:
  * `/portal/certificate/[courseId]` (Landscape A4 print layout)
* **Features**:
  * Deterministic serial verification ID generation (`KSU-AJR-[course]-[id]`).
  * Signatures of Patron Dr. Douglas Bosire and Chapter President.
  * CSS Print block styles hiding standard header navigation during browser print.

### Phase 6 — Opportunities & Events Interaction
* **Goal**: Active student interaction board.
* **Routes to Build**:
  * `/portal/opportunities` (Internships, freelance bids, hackathons list)
  * `/portal/events` (Student dashboard RSVPs)

### Phase 7 — Admin System
* **Goal**: High-level panel for administrators and leaders.
* **Routes to Build**:
  * `/admin/users` (User management, role assignation)
  * `/admin/events` (Create/edit/delete events, record attendance)
  * `/admin/announcements` (Post updates)
  * `/admin/analytics` (Dashboard displaying completions and RSVPs)

### Phase 8 — Polish & Optimization
* **Goal**: Clean layouts, production builds, and SEO setup.
* **Steps**:
  * Global SEO parameters mapping (meta titles, description, OpenGraph tags).
  * Build optimization & bundle size check.
