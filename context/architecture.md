# System Architecture - Ajira Club KSU

## Core Framework
* **Next.js (App Router)**: Utilizing Server Components by default for fast initial loading, SEO optimization, and streaming rendering. Client Components (`"use client"`) are used selectively for interactive features.
* **Separation of Domains**: Website (`ajiraksu.org`) and Portal (`portal.ajiraksu.org`) are separated via Route Groups in a unified Next.js repository to simplify deployment and shared components:
  * `app/(website)/*` -> Governs the public brand pages.
  * `app/portal/*` -> Governs the authenticated student workspace and LMS.
  * `app/admin/*` -> Governs administrative access panels.

## Backend & Database Layer
* **Supabase Database (PostgreSQL)**: Main data repository.
* **Supabase Authentication**: Handles password logins, email verification, and session persistence.
* **Supabase Storage**: Stores assets, user avatars, gallery images, course materials, and certificates.
* **Server Actions**: Node.js execution layer for forms, registration, course checkpoints, and administrative state changes.

## Security & Authentication Flow
* **Middleware Route Protection**: Next.js middleware intercepts requests to `/portal/*` and `/admin/*`:
  * If unauthenticated, redirect to `/portal/login`.
  * If authenticated as a standard Member, block access to `/admin/*` routes.
* **Row Level Security (RLS)**: Enforced on Supabase to ensure users can only modify their own profiles and progress logs.
* **Validation**: Zod schema validation on both Client (React Hook Form) and Server Actions.

## Subdomain and Data Isolation Rules
* **Local State Fallbacks**: Locally stored state matches the offline-friendly caching for course progress tracking before Supabase sync.
* **RBAC Controls**:
  1. `Member`: Can access dashboard, courses, update profile, register for events, download certificates.
  2. `Executive`: Can view registered members, track event attendance, post blog articles and announcements.
  3. `Admin`: Full write-access on all entities, CMS, user roles management, system logs.
