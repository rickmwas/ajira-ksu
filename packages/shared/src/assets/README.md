# Ajira Club Kisii University — Brand Asset Package

This directory contains the high-quality vector assets for the Ajira Club Kisii University branding, traced and generated directly from the master brand guidelines.

## Assets Included

| Filename | Description | Usage |
| :--- | :--- | :--- |
| [`ajira-club-logo-horizontal.svg`](file:///c:/Users/rickm/Downloads/ajira-next-door-mainzip%20%281%29/ajira-next-door-mainzip/packages/shared/src/assets/ajira-club-logo-horizontal.svg) | Primary horizontal layout logo with text. | Main navigation header, website navbar, landing pages. |
| [`ajira-club-logo-stacked.svg`](file:///c:/Users/rickm/Downloads/ajira-next-door-mainzip%20%281%29/ajira-next-door-mainzip/packages/shared/src/assets/ajira-club-logo-stacked.svg) | Centered stacked layout logo. | Footers, hero sections, certificates, documents, print media. |
| [`ajira-club-logo-reversed.svg`](file:///c:/Users/rickm/Downloads/ajira-next-door-mainzip%20%281%29/ajira-next-door-mainzip/packages/shared/src/assets/ajira-club-logo-reversed.svg) | Horizontal layout with white text. | Dark background sections, dark mode headers/navigation. |
| [`ajira-club-logo-monochrome.svg`](file:///c:/Users/rickm/Downloads/ajira-next-door-mainzip%20%281%29/ajira-next-door-mainzip/packages/shared/src/assets/ajira-club-logo-monochrome.svg) | Adaptable monochrome logo using `currentColor`. | Dynamic theme switching, colored banners, black/white prints. |
| [`ajira-club-logo-mark.svg`](file:///c:/Users/rickm/Downloads/ajira-next-door-mainzip%20%281%29/ajira-next-door-mainzip/packages/shared/src/assets/ajira-club-logo-mark.svg) | Brand mark icon alone (without text). | Profile pics, small screens, subtle decoration, watermarks. |
| [`ajira-club-app-icon.svg`](file:///c:/Users/rickm/Downloads/ajira-next-door-mainzip%20%281%29/ajira-next-door-mainzip/packages/shared/src/assets/ajira-club-app-icon.svg) | Rounded navy square containing "AK" & gold line. | App launcher icons, social media avatars, favicon high-res. |
| [`ajira-club-favicon.svg`](file:///c:/Users/rickm/Downloads/ajira-next-door-mainzip%20%281%29/ajira-next-door-mainzip/packages/shared/src/assets/ajira-club-favicon.svg) | 64x64 micro-optimized version of the app icon. | Browser tab favicon. |

---

## Brand Specs

### 1. Color Palette

*   **Ajira Blue**: `#0056A6` (Primary)
*   **Ajira Gold**: `#F4B400` (Secondary / Accent)
*   **Dark Navy**: `#0F172A` (Text / Dark background)
*   **Light Gray**: `#F8FAFC` (Secondary background)
*   **White**: `#FFFFFF`
*   **Logo Red**: `#D62828` (Used in logo mark node)
*   **Logo Green**: `#16A34A` (Used in logo mark connection line)

### 2. Typography

*   **Headings**: Sora (Bold, 700/800)
*   **Body Text**: Plus Jakarta Sans (Medium/Regular)
*   **Technical / Code**: JetBrains Mono

---

## Developer Integration Tips

### Using with Next.js Image Component
```tsx
import Image from 'next/image';
import ajiraClubLogo from '@ajira/shared/assets/ajira-club-logo-horizontal.svg';

export function Header() {
  return (
    <Image 
      src={ajiraClubLogo} 
      alt="Ajira Club Kisii University" 
      width={220} 
      height={40} 
      priority 
    />
  );
}
```

### Dynamic Styling with the Monochrome SVG
The `ajira-club-logo-monochrome.svg` uses `currentColor` for fill and stroke:
```tsx
// This logo will render in red on hover, and slate-700 by default!
import MonochromeLogo from '@ajira/shared/assets/ajira-club-logo-monochrome.svg';

export function FooterLogo() {
  return (
    <div className="text-slate-700 hover:text-red-600 transition-colors">
      <MonochromeLogo className="w-48 h-auto" />
    </div>
  );
}
```
*(Note: If importing SVG directly as a React component, ensure your bundler supports SVGR, or use standard HTML `<object>` / `<img>` / inline SVG tags.)*
