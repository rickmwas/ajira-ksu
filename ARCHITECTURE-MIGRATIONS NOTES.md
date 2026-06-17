---

📘 AJIRA CLUB KSU DIGITAL PLATFORM

NEXT.JS MIGRATION & SYSTEM ARCHITECTURE DOCUMENT (v2.0)


---

1. PROJECT OVERVIEW

This document defines the migration and reconstruction of the Ajira Club Kisii University Digital Platform from a TanStack Start prototype into a production-grade Next.js 16 full-stack system.

The platform consists of two independent applications:


---

🌐 1. Public Website

Domain:

ajiraksu.org

Purpose:

Public-facing brand identity

Information hub

Marketing + recruitment

Events + announcements

Leadership + community visibility



---

🔐 2. Member Portal

Subdomain:

portal.ajiraksu.org

Purpose:

Student authentication system

Learning management system (LMS)

Certification engine

Opportunities + events

Member dashboards

Admin control system



---

2. MIGRATION STRATEGY

❌ DO NOT

Do NOT incrementally patch TanStack Start

Do NOT preserve current routing system

Do NOT reuse Vite-based structure



---

✅ DO

Perform a full structured migration to Next.js App Router

Preserve:

Business logic

Learning content

Certificate logic

Database schema ideas


Rebuild:

Routing system

UI architecture

Component system

State management

Auth flow



---

3. TARGET TECHNOLOGY STACK

Frontend

Next.js 16 (App Router)

TypeScript

Tailwind CSS

shadcn/ui

Framer Motion

Lucide Icons



---

Backend

Node.js (Next.js Server Actions + API routes)

Supabase PostgreSQL

Supabase Auth

Supabase Storage



---

Services

Resend (email system)

Vercel (deployment)



---

4. ARCHITECTURE OVERVIEW

Monorepo Structure (Recommended)

ajira-ksu-platform/

apps/
  website/        → Next.js Public Site
  portal/         → Next.js LMS + Dashboard
  api/            → Optional service layer (if needed)

packages/
  ui/             → Shared UI components (shadcn wrapper)
  lib/            → Helpers + utilities
  types/          → Shared TypeScript types
  config/         → Shared configs (auth, env, etc)

docs/
  architecture/
  prd/
  branding/
  api/


---

5. APPLICATION ARCHITECTURE


---

🌐 WEBSITE (ajiraksu.org)

Route Map

/                 → Home
/about            → About Ajira Club
/programs         → Training Tracks
/events           → Events listing
/leadership       → Executive team
/blog             → Articles
/gallery          → Media
/contact          → Contact page


---

Home Page Sections

1. Hero Section


2. Partner Logos (Ajira Digital, ICT Ministry, etc.)


3. What We Do


4. Programs Overview


5. Upcoming Events


6. Leadership Preview


7. Success Stories


8. Gallery Preview


9. Call to Action (Join Club)




---

Design Rules

Minimal animations only

Strong typography hierarchy

Clean spacing system

Trust-first design

No visual noise



---

🔐 PORTAL (portal.ajiraksu.org)

Route Map

/portal
  /dashboard
  /profile
  /learn
    /[courseId]
  /events
  /resources
  /opportunities
  /certificates
  /announcements
  /settings


---

Authentication Rules

All /portal/* routes are protected

Guest redirect → /portal/login

Role-based access control (RBAC)


Roles

Member

Executive

Admin



---

6. CORE SYSTEM MODULES


---

🎓 LEARNING SYSTEM

Courses:

1. Virtual Assistant & Data Entry


2. Transcription & Subtitling


3. SEO Content Writing


4. Web Design & Digital Commerce




---

Learning Features

Progress tracking

Lesson checklist system

Markdown-based lessons

Completion state persistence



---

📜 CERTIFICATION ENGINE

Features

Full-page printable certificate

Landscape A4 format

Unique verification ID


Example:

KSU-AJR-VA-1842-12

Certificate includes:

Student name

Course name

Completion date

Club signatures:

Patron: Mdm Teresa Abuya

President: Chapter President


Ajira branding



---

📅 EVENTS SYSTEM

Event listings

Registration

Attendance tracking

Capacity limits

Status control (upcoming, active, past)



---

📚 RESOURCE HUB

PDFs

Slides

Videos

External links

Categorized learning materials



---

💼 OPPORTUNITIES BOARD

Internships

Freelance gigs

Scholarships

Hackathons



---

📢 ANNOUNCEMENTS

Club updates

Event reminders

Training notices



---

7. DATABASE DESIGN (SUPABASE)

USERS

id
name
email
role
course
year
registration_number
skills
bio
avatar
created_at


---

COURSES

id
title
description
slug
content_type
created_at


---

PROGRESS

id
user_id
course_id
completed_lessons
progress_percentage
updated_at


---

EVENTS

id
title
description
location
start_date
end_date
capacity
status


---

REGISTRATIONS

id
user_id
event_id
status
attendance


---

CERTIFICATES

id
user_id
course_id
certificate_url
verification_code
issued_at


---

RESOURCES

id
title
category
file_url
uploaded_by


---

OPPORTUNITIES

id
title
type
company
deadline
link
description


---

8. UI/UX DESIGN SYSTEM

Typography

Headings: Sora

Body: Plus Jakarta Sans

Mono: JetBrains Mono



---

Colors

Primary Blue: #0056A6

Accent Gold: #F4B400

Dark: #0F172A

Background: #FFFFFF



---

UI Principles

Spacious layout

Strong hierarchy

Minimal gradients

Subtle motion only

Component consistency



---

Component System (shadcn/ui)

Use:

Button

Card

Dialog

Tabs

Table

Dropdown

Toast

Form


Custom components:

EventCard

CourseCard

CertificatePreview

ProgressTracker

DashboardSidebar



---

9. SECURITY MODEL

Supabase Auth

JWT sessions

Row Level Security (RLS)

Role-based access control

Rate limiting (API routes)

Input validation (Zod)



---

10. PERFORMANCE REQUIREMENTS

First Load < 2s

Lazy load portal modules

Image optimization via Next.js Image

Server Components where possible

Minimal client-side JS



---

11. MIGRATION PLAN

Phase 1 — Foundation

Next.js setup

App Router structure

Tailwind + shadcn setup

Auth system



---

Phase 2 — Website Rebuild

Home

About

Programs

Events

Leadership



---

Phase 3 — Portal Core

Dashboard

Profile

Auth protection

Navigation system



---

Phase 4 — Learning System

Course pages

Progress tracking

Lesson rendering



---

Phase 5 — Certificates

Generator

Print layout

Verification system



---

Phase 6 — Admin System

User management

Event management

Content control



---

Phase 7 — Polish

SEO

Performance tuning

UI consistency

Deployment



---

12. KEY PRINCIPLE

This is NOT:

a student project

a hackathon demo

a UI experiment


This IS:

> A scalable digital ecosystem for a university tech community.




---
