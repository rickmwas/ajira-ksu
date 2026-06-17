import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Ajira Digital Club, Kisii University",
  description: "Guides, tutorials, and success stories on online transcription, writing, and digital work.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
