import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events — Ajira Digital Club, Kisii University",
  description: "Upcoming workshops, hackathons, and trainings hosted by Ajira Digital Club at Kisii University.",
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
