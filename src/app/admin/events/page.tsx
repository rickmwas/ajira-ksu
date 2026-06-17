"use client";

import { useState } from "react";
import { Calendar, Plus, Trash2, MapPin, Users, Sparkles } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { toast } from "sonner";

interface EventCMSItem {
  id: string;
  title: string;
  loc: string;
  date: string;
  capacity: number;
}

const mockEventsList: EventCMSItem[] = [
  {
    id: "evt-1",
    title: "Transcription & Captioning Intensive",
    loc: "ICT Lab 2, Main Campus",
    date: "2026-07-12",
    capacity: 50,
  },
  {
    id: "evt-2",
    title: "Virtual Assistant Operations",
    loc: "ICT Lab 1, Main Campus",
    date: "2026-08-03",
    capacity: 35,
  },
];

export default function EventCMS() {
  const [events, setEvents] = useState<EventCMSItem[]>(mockEventsList);

  const handleAddEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const loc = formData.get("loc") as string;
    const date = formData.get("date") as string;
    const capacity = parseInt(formData.get("capacity") as string, 10);

    const newEvt: EventCMSItem = {
      id: `evt-${Date.now()}`,
      title,
      loc,
      date,
      capacity,
    };

    setEvents((prev) => [newEvt, ...prev]);
    toast.success("Workshop event published successfully!");
    e.currentTarget.reset();
  };

  const handleDelete = (id: string, title: string) => {
    setEvents((prev) => prev.filter((evt) => evt.id !== id));
    toast.success(`Removed workshop: ${title}`);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto font-sans">
      <Reveal>
        <div className="border-b border-border pb-3 mb-6">
          <h2 className="font-display text-base font-bold uppercase tracking-wider text-ink">Workshop CMS Manager</h2>
          <p className="text-xs text-muted-foreground mt-1">Schedule campus events and audit registrations.</p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Create Event inputs */}
        <div className="lg:col-span-5 bg-white border border-border p-5 rounded-sm shadow-card">
          <Reveal>
            <form onSubmit={handleAddEvent} className="grid gap-4">
              <h3 className="font-display text-xs font-bold uppercase tracking-wider text-ink border-b border-border pb-2.5 mb-2">
                Schedule New Workshop
              </h3>

              <label className="block">
                <span className="block mb-1.5 text-xs font-semibold text-foreground/75">Workshop Title</span>
                <input required name="title" className={inputCls} placeholder="e.g. Content & SEO Writing" />
              </label>

              <label className="block">
                <span className="block mb-1.5 text-xs font-semibold text-foreground/75">Location Room</span>
                <input required name="loc" className={inputCls} placeholder="e.g. ICT Lab 1, Main Campus" />
              </label>

              <div className="grid grid-cols-2 gap-4">
                <label className="block">
                  <span className="block mb-1.5 text-xs font-semibold text-foreground/75">Target Date</span>
                  <input required name="date" type="date" className={inputCls} />
                </label>
                <label className="block">
                  <span className="block mb-1.5 text-xs font-semibold text-foreground/75">Seats Capacity</span>
                  <input required name="capacity" type="number" min="5" className={inputCls} defaultValue="40" />
                </label>
              </div>

              <button
                type="submit"
                className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-sm bg-brand-blue hover:bg-brand-blue-dark px-5 py-3 text-xs font-bold text-white uppercase tracking-wider transition-colors"
              >
                Publish Workshop <Plus size={13} />
              </button>
            </form>
          </Reveal>
        </div>

        {/* Right Side: Active Events List */}
        <div className="lg:col-span-7 space-y-4">
          <Reveal delay={40}>
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-ink border-b border-border pb-2 mb-3">
              Currently Active Schedules ({events.length})
            </h3>
          </Reveal>

          <div className="space-y-3">
            {events.map((e, idx) => (
              <Reveal key={e.id} delay={idx * 30}>
                <div className="bg-white border border-border p-4.5 rounded-sm flex items-center justify-between gap-4 shadow-card">
                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-xs text-ink leading-tight">{e.title}</h4>
                    <div className="flex flex-wrap items-center gap-4 text-[10px] font-mono text-muted-foreground pt-1">
                      <span className="flex items-center gap-1">
                        <Calendar size={11} /> {e.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={11} className="text-brand-blue" /> {e.loc}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users size={11} className="text-brand-gold" /> Capacity: {e.capacity}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDelete(e.id, e.title)}
                    className="h-8 w-8 rounded-sm border border-border bg-surface text-brand-blue hover:bg-brand-blue/5 hover:text-brand-blue-dark grid place-items-center transition-colors shrink-0"
                    aria-label={`Remove workshop ${e.title}`}
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const inputCls =
  "w-full rounded-sm border border-input bg-surface px-3 py-2 text-xs outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 transition placeholder:text-muted-foreground/45";
