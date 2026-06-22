import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "@ajira/shared/styles/globals.css";
import { PortalProvider } from "@ajira/shared/hooks/usePortalState";
import { RegisterProvider } from "@ajira/shared/components/site/RegisterContext";
import { Toaster } from "sonner";
import { Navbar } from "@ajira/shared/components/site/Navbar";
import { Footer } from "@ajira/shared/components/site/Footer";
import { RegisterModal } from "@ajira/shared/components/site/RegisterModal";

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
            <div className="flex flex-col min-h-screen bg-white">
              <Navbar />
              <main className="flex-1 pt-[100px]">{children}</main>
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
