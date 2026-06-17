# UI Component Registry

This registry tracks the reusable components created and migrated during the Next.js transition.

| Component Name | Path | Description | Visual Pattern / Token Usage | Client/Server |
| :--- | :--- | :--- | :--- | :--- |
| `Navbar` | `src/components/site/Navbar.tsx` | Site-wide public navigation header with dropdown profile actions and login toggles. | Brand Blue layout borders, scroll triggers, custom initials resolver. | Client |
| `Footer` | `src/components/site/Footer.tsx` | Site-wide public navigation footer showing affiliation strings and coordinates. | Dark background, slate links, custom brand icon sizing. | Client |
| `Sidebar` | `src/components/shared/Sidebar.tsx` | Sticky desktop sidebar navigation and mobile drawer panels. | Sora font displays, active tab accent lines, role check guards. | Client |
| `RegisterModal` | `src/components/site/RegisterModal.tsx` | Dialog screen displaying student registry inputs. | Standard 12px borders, validated input borders, modal checkmarks. | Client |
| `Reveal` | `src/components/site/Reveal.tsx` | IntersectionObserver scroll animation wrapper. | Keyframe animations (`animate-fade-up`), subtle entry offsets. | Client |
