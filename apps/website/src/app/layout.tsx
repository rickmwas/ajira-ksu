import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "@ajira/shared/styles/globals.css";
import { PortalProvider } from "@ajira/shared/hooks/usePortalState";
import { RegisterProvider } from "@ajira/shared/components/site/RegisterContext";
import { Toaster } from "sonner";
import { Navbar } from "@ajira/shared/components/site/Navbar";
import { Footer } from "@ajira/shared/components/site/Footer";
import { RegisterModal } from "@ajira/shared/components/site/RegisterModal";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ajira Digital Club — Kisii University Chapter",
  description:
    "Official Ajira Digital Club at Kisii University. Equipping students with practical digital skills, freelancing mentorship, AI annotation, and online work opportunities.",
  keywords: [
    "Ajira Digital Kisii University",
    "KSU Ajira Club",
    "Kisii University digital skills",
    "Online jobs for Kisii University students",
    "Freelancing training Kenya",
    "Swahili audio transcription",
    "Kenya youth empowerment",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Ajira Digital Club - Kisii University Chapter",
  "alternateName": ["KSU Ajira Club", "Kisii University Ajira Club"],
  "url": "https://ajira.kisiiuniversity.ac.ke",
  "description": "Official Ajira Digital Club at Kisii University, training students in digital skills, freelancing, audio transcription, web development, and AI data services.",
  "parentOrganization": {
    "@type": "CollegeOrUniversity",
    "name": "Kisii University",
    "url": "https://kisiiuniversity.ac.ke"
  },
  "memberOf": {
    "@type": "Program",
    "name": "Ajira Digital Program",
    "url": "https://ajiradigital.go.ke"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kisii University Main Campus, ICT Lab 2",
    "addressLocality": "Kisii",
    "addressRegion": "Kisii County",
    "addressCountry": "KE"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-background text-foreground font-sans">
        <PortalProvider>
          <RegisterProvider>
            <div className="flex flex-col min-h-screen bg-white">
              <Navbar />
              <main className="flex-1 pt-24 sm:pt-28">{children}</main>
              <Footer />
              <RegisterModal />
            </div>
            <Toaster position="top-right" richColors />
          </RegisterProvider>
        </PortalProvider>
      </body>
    </html>
  );
}
