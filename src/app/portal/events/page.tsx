"use client";

import { useState, useEffect } from "react";
import { Calendar, MapPin, Clock, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { toast } from "sonner";

interface EventItem {
  id: string;
  category: string;
  date: string;
  duration: string;
  title: string;
  desc: string;
  loc: string;
  speaker?: string;
  seats: number;
}

const upcoming: EventItem[] = [
  {
    id: "transcription-ops",
    category: "Bootcamp",
    date: "Jul 12, 2026",
    duration: "2 Days (Weekend)",
    title: "Transcription & Captioning Intensive",
    desc: "An intensive weekend session to prepare students for TranscribeMe and GoTranscript entrance tests. Focuses on spelling rules, audio tagging, and Swahili-to-English translation.",
    loc: "ICT Lab 2, Main Campus",
    speaker: "Denis Kiplagat (Secretary General)",
    seats: 50,
  },
  {
    id: "va-ops",
    category: "Workshop",
    date: "Aug 03, 2026",
    duration: "1 Day (3 Hours)",
    title: "Virtual Assistant Operations",
    desc: "Master administrative online tasks. Learn customer support templates, Shopify order tracking, calendar coordination, and formatting client data logs in Excel.",
    loc: "ICT Lab 1, Main Campus",
    speaker: "Onyango Michael (Chairperson)",
    seats: 35,
  },
  {
    id: "bid-ops",
    category: "Workshop",
    date: "Sep 21, 2026",
    duration: "1 Day (3 Hours)",
    title: "Upwork & Fiverr Bidding Clinic",
    desc: "A hands-on workshop to write proposals, audit online profiles, negotiate hourly rates, and structure escrow milestones for remote online gigs.",
    loc: "ICT Lab 1, Main Campus",
    speaker: "Erik Mwangi (Outreach Lead)",
    seats: 40,
  },
];

export default function StudentEvents() {
  const [rsvps, setRsvps] = useState<string[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("ajira_ksu_rsvps");
      if (stored) setRsvps(JSON.parse(stored));
    } catch {}
  }, []);

  const handleRsvp = (eventId: string, title: string) => {
    let next: string[];
    if (rsvps.includes(eventId)) {
      next = rsvps.filter((id) => id !== eventId);
      toast.success(`Cancelled RSVP for ${title}`);
    } else {
      next = [...rsvps, eventId];
      toast.success(`RSVP Registered for ${title}!`);
    }
    setRsvps(next);
    localStorage.setItem("ajira_ksu_rsvps", JSON.stringify(next));
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto font-sans">
      <Reveal>
        <div className="border-b border-border pb-3 mb-6">
          <h2 className="font-display text-base font-bold uppercase tracking-wider text-ink">Upcoming Workshops</h2>
          <p className="text-xs text-muted-foreground mt-1">
            Reserve your seat at our hands-on labs and bidding clinics.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {upcoming.map((e, i) => {
          const hasRsvp = rsvps.includes(e.id);
          return (
            <Reveal key={e.id} delay={i * 40}>
              <div className="bg-white border border-border p-5 sm:p-6 flex flex-col h-full hover:border-brand-blue/25 transition-colors shadow-card justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-brand-green bg-brand-green/10 px-2 py-0.5 rounded-sm border border-brand-green/15 font-mono">
                      {e.category}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-muted-foreground font-mono shrink-0">
                      <Clock size={11} /> {e.duration}
                    </span>
                  </div>
                  <div className="text-[10px] text-muted-foreground mb-2 font-mono">{e.date}</div>
                  <h3 className="font-display text-base font-bold mb-2.5 leading-snug text-ink">{e.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">{e.desc}</p>
                </div>

                <div className="pt-4 border-t border-border mt-4 space-y-4">
                  {e.speaker && (
                    <div className="text-[10px] text-muted-foreground/85 flex items-center gap-1.5 font-mono">
                      <Users size={11} className="text-brand-blue shrink-0" />
                      <span>
                        Led by: <span className="font-semibold text-foreground/80">{e.speaker}</span>
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between gap-3 text-[10px]">
                    <div className="flex items-center gap-1.5 text-muted-foreground min-w-0 font-mono">
                      <MapPin size={11} className="text-brand-blue shrink-0" />
                      <span className="truncate">{e.loc}</span>
                    </div>
                    <button
                      onClick={() => handleRsvp(e.id, e.title)}
                      className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-[10px] font-bold uppercase tracking-wider transition-colors border ${
                        hasRsvp
                          ? "bg-brand-green/10 border-brand-green text-brand-green hover:bg-brand-green/15"
                          : "bg-brand-blue hover:bg-brand-blue-dark text-white border-transparent"
                      }`}
                    >
                      {hasRsvp ? (
                        <>
                          <CheckCircle2 size={12} /> RSVP Reserved
                        </>
                      ) : (
                        <>
                          RSVP Seat <ArrowRight size={11} />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
