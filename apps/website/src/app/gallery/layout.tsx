import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery — Ajira Digital Club, Kisii University",
  description:
    "Photos from Ajira Digital Club workshops, hackathons, training sessions, and events at Kisii University.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
