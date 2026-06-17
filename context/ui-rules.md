# UI Interaction Rules - Ajira Club KSU

## Visual Design Aesthetics
* **Minimalist Approach**: Avoid heavy gradients, glowing neon boxes, floating background blobs, or crypto-style elements. Focus on sharp visual alignment, clean borders, crisp typography, and generous spacing.
* **White Space**: Prioritize breathing room between sections (e.g., `py-16` to `py-24` spacing for public landing pages).
* **Partner Branding**: Keep logos of partners (Ajira Digital, Ministry of ICT, KEPSA, eMobilis, Kisii University) clean, grayscale or low-opacity, and aligned in a subtle strip. Do not dominate layouts with partner logos.

## Form Elements & Validation
* **Clarity & Real-time Errors**: Integrate clear labels and inline error tags. Ensure input borders show red on validation failure.
* **Loading States**: Add spinner elements or disable submit buttons during database transitions to block double submissions.
* **Modals**: Keep enrollment and event registration flows inside simple, keyboard-accessible dialog overlays.

## Tables & Data Presentation
* **Interactivity**: Tables in dashboard layouts must support:
  * Pagination for records exceeding 10 items.
  * Column sorting indicators.
  * Quick-search text inputs.

## Authentication & Portal UX
* **Dashboard Layout**: Uses a sticky, collapsable left sidebar for core navigation routes on desktop, collapsing to an overlay drawer on mobile.
* **Auth Experience**: Simple login using email and password. Immediately redirect authenticated users to `/portal/dashboard` (or path base).
* **Certificate Layout**: Portrait certificate is strictly prohibited. Use A4 Landscape formatting that fits print sheets, with clean print CSS rules to hide standard navigation and footer bars.
