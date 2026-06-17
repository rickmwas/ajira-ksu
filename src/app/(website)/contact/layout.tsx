import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Ajira Digital Club, Kisii University",
  description: "Get in touch with the Ajira Digital Club at Kisii University. Submit queries or visit our ICT Labs.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
