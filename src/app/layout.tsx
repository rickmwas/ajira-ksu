import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "../styles.css";
import { PortalProvider } from "@/hooks/usePortalState";
import { RegisterProvider } from "@/components/site/RegisterContext";
import { Toaster } from "sonner";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ajira Digital Club — Kisii University",
  description:
    "Empowering Kisii University students to access digital and digitally-enabled online work through peer mentorship, training, and ICT resources.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased min-h-screen bg-background text-foreground font-sans">
        <PortalProvider>
          <RegisterProvider>
            {children}
            <Toaster position="top-right" richColors />
          </RegisterProvider>
        </PortalProvider>
      </body>
    </html>
  );
}
