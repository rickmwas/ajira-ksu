# UI Design Tokens - Ajira Club KSU

## Color Palette
* **Primary (Ajira Blue)**: `#0056A6` (Conveys trust, national branding, and professional authority)
* **Accent (Ajira Gold)**: `#F4B400` (Conveys optimism, premium certification achievement, and secondary elements)
* **Dark (Ink Black)**: `#0F172A` (Standard body text and headers in light mode; background for hero panels)
* **White (Base Background)**: `#FFFFFF` (Ensures clarity, contrast, and clean layout whitespace)
* **Neutral Grays**: Tailwind `slate` color palette (`slate-100`, `slate-200`, `slate-400`, `slate-500`, etc.) for border separators, subtle status pills, and background surfaces.

## Typography
* **Headings Font**: **Sora** (Premium Sans-Serif font, strong geometric feel for headlines and title displays)
* **Body Font**: **Plus Jakarta Sans** (Highly readable, modern font for paragraphs, checklists, and sidebar menus)
* **Technical labels & Code**: **JetBrains Mono** (Provides a clean, technical monospace style for stats, metadata tags, certificate verification numbers, and code blocks)

## Spacing & Layout Rhythm
* **Base Grid**: **4px incremental grid system** (Tailwind standard spacing e.g., `space-y-4` = 16px, `p-6` = 24px, `gap-8` = 32px).
* **Grid Alignments**: Multi-column grids default to 1fr on mobile and scale to 12-column layout systems on desktop.
* **Margins**: Section layout limits are restricted to `.container-x` matching a max width of `1280px` with uniform outer gutters of `24px` (`px-6` or custom margins).

## Border Radius System
* **Default Buttons & Small Inputs**: `12px` (`rounded-xl` or standard shadcn override)
* **Cards & Layout Blocks**: `16px` (`rounded-2xl`)
* **Inner Controls / Sub-components**: `8px` (`rounded-lg`)
