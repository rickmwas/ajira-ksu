"use client";

import { Bell, Calendar, User, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

interface Announcement {
  id: string;
  title: string;
  date: string;
  author: string;
  content: string;
  important?: boolean;
}

const mockAnnouncements: Announcement[] = [
  {
    id: "ann-lab-hours",
    title: "Extended ICT Lab 2 Lab Typing Hours",
    date: "Jun 14, 2026",
    author: "Denis Kiplagat (SecGen)",
    content: "To support students completing the transcription and copywriting tracks, ICT Lab 2 will remain open on Saturdays from 9:00 AM to 4:00 PM starting this week. Ensure you bring your headphones.",
    important: true,
  },
  {
    id: "ann-cert-drive",
    title: "Verification Drive for Vetted Members",
    date: "Jun 02, 2026",
    author: "Dr. Teresa Abuya (Patron)",
    content: "Our upcoming certification drive will take place at Senate Hall. Vetted members who have completed the transcription and virtual assistant tracks are requested to verify their profile details before the registration deadline.",
  },
];

export default function Announcements() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto font-sans">
      <Reveal>
        <div className="border-b border-border pb-3 mb-6">
          <h2 className="font-display text-base font-bold uppercase tracking-wider text-ink">Announcements</h2>
          <p className="text-xs text-muted-foreground mt-1">
            Stay updated with club events, training notifications, and lab updates.
          </p>
        </div>
      </Reveal>

      <div className="space-y-4">
        {mockAnnouncements.map((a, idx) => (
          <Reveal key={a.id} delay={idx * 40}>
            <div className={`bg-white border p-5 sm:p-6 rounded-sm shadow-card flex gap-4 ${
              a.important ? "border-brand-blue/30 bg-brand-blue/[0.01]" : "border-border"
            }`}>
              <div className={`h-8 w-8 rounded-sm flex items-center justify-center shrink-0 ${
                a.important ? "bg-brand-blue/10 text-brand-blue" : "bg-surface text-muted-foreground"
              }`}>
                <Bell size={15} />
              </div>
              <div className="space-y-2.5">
                <div className="flex items-center gap-2.5">
                  <h3 className="font-display font-bold text-sm text-ink">{a.title}</h3>
                  {a.important && (
                    <span className="text-[8px] font-mono font-bold uppercase tracking-wider text-brand-gold bg-brand-gold/10 border border-brand-gold/15 px-2 py-0.5 rounded-sm">
                      Urgent
                    </span>
                  )}
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">{a.content}</p>

                <div className="flex items-center gap-4 text-[10px] font-mono text-muted-foreground/80 border-t border-border/60 pt-3">
                  <span className="flex items-center gap-1.5"><User size={11} className="text-brand-gold" /> By: {a.author}</span>
                  <span className="flex items-center gap-1.5"><Calendar size={11} /> Published: {a.date}</span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
