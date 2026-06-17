import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs — Ajira Digital Club, Kisii University",
  description:
    "Explore our training tracks: Virtual Assistant & Data Entry, Transcription & Subtitling, Content & SEO Copywriting, and Web Design.",
};

export default function ProgramsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
