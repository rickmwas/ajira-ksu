import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "@ajira/shared/styles/globals.css";
import { PortalProvider } from "@ajira/shared/hooks/usePortalState";
import { RegisterProvider } from "@ajira/shared/components/site/RegisterContext";
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
  title: "Admin Panel — Ajira Club Kisii University",
  description: "Manage users, events, and club analytics.",
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
