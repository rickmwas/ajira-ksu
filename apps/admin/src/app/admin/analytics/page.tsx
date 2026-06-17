"use client";

import { Award, Users, Calendar, ArrowUpRight, TrendingUp } from "lucide-react";
import { Reveal } from "@ajira/shared/components/site/Reveal";

interface AnalyticsStat {
  label: string;
  value: string | number;
  change: string;
  icon: React.ComponentType<any>;
  colorClass: string;
}

const stats: AnalyticsStat[] = [
  { label: "Total Members", value: "512", change: "↑ 12%", icon: Users, colorClass: "text-[#4285F4] bg-[#4285F4]/10 border-[#4285F4]/15" },
  { label: "Active Members", value: "298", change: "↑ 8%", icon: Users, colorClass: "text-[#34A853] bg-[#34A853]/10 border-[#34A853]/15" },
  { label: "Events Held", value: "18", change: "↑ 20%", icon: Calendar, colorClass: "text-[#FBBC05] bg-[#FBBC05]/10 border-[#FBBC05]/15" },
  { label: "Certificates Issued", value: "156", change: "↑ 15%", icon: Award, colorClass: "text-[#EA4335] bg-[#EA4335]/10 border-[#EA4335]/15" },
];

const recentRegistrations = [
  { name: "Faith Nyaboke", dept: "Computer Science", time: "2 mins ago" },
  { name: "Kevin Otieno", dept: "Information Technology", time: "10 mins ago" },
  { name: "Brenda Moraa", dept: "Software Engineering", time: "25 mins ago" },
];

const upcomingEventsList = [
  { title: "Web Development Bootcamp", date: "May 24, 2026" },
  { title: "AI & Machine Learning Training", date: "Jun 07, 2026" },
  { title: "Ajira Hackathon 2025", date: "Jun 21, 2026" },
];

export default function AnalyticsDashboard() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto font-sans">
      {/* ── HEADER ────────────────────────────────────────── */}
      <Reveal>
        <div className="border-b border-border pb-3 mb-6">
          <h2 className="font-display text-base font-bold uppercase tracking-wider text-ink">Dashboard Overview</h2>
          <p className="text-xs text-muted-foreground mt-1">
            Welcome back, Admin. Real-time statistics and club growth metrics.
          </p>
        </div>
      </Reveal>

      {/* ── STATS GRID ──────────────────────────────────────── */}
      <div className="grid gap-5 grid-cols-2 lg:grid-cols-4">
        {stats.map((s, idx) => {
          const Icon = s.icon;
          return (
            <Reveal key={s.label} delay={idx * 30}>
              <div className="bg-white border border-border p-5 rounded-sm shadow-card hover:shadow-md transition-shadow relative">
                <div className="flex justify-between items-start">
                  <div className={`grid h-8 w-8 place-items-center rounded-sm border ${s.colorClass}`}>
                    <Icon size={16} />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-brand-green bg-brand-green/10 px-1.5 py-0.5 rounded-sm flex items-center gap-0.5">
                    {s.change}
                  </span>
                </div>
                <div className="font-display text-2xl font-black font-mono text-ink leading-none mt-4">{s.value}</div>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mt-2 font-mono">
                  {s.label}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* ── CHARTS SECTION ─────────────────────────────────── */}
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-12">
        {/* Line Chart: Members Growth */}
        <div className="lg:col-span-7 bg-white border border-border p-5 rounded-sm shadow-card space-y-4">
          <Reveal delay={20}>
            <div className="flex justify-between items-center border-b border-border pb-2.5">
              <h3 className="font-display text-xs font-bold uppercase tracking-wider text-ink">
                Members Growth
              </h3>
              <span className="text-[9px] font-mono text-muted-foreground">Last 6 Months</span>
            </div>
            
            {/* SVG Line Graph representation */}
            <div className="pt-4 h-48 relative w-full">
              <svg className="w-full h-full" viewBox="0 0 500 150">
                {/* Horizontal grid lines */}
                <line x1="0" y1="30" x2="500" y2="30" stroke="#f1f5f9" strokeWidth="1" />
                <line x1="0" y1="70" x2="500" y2="70" stroke="#f1f5f9" strokeWidth="1" />
                <line x1="0" y1="110" x2="500" y2="110" stroke="#f1f5f9" strokeWidth="1" />
                <line x1="0" y1="140" x2="500" y2="140" stroke="#e2e8f0" strokeWidth="1.5" />

                {/* Graph line path */}
                <path
                  d="M 20 120 C 100 110, 150 90, 200 80 C 250 72, 300 55, 350 48 C 400 42, 450 35, 480 32"
                  fill="none"
                  stroke="#0056A6"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Dots at key points */}
                <circle cx="20" cy="120" r="4.5" fill="#0056A6" stroke="#ffffff" strokeWidth="1.5" />
                <circle cx="110" cy="108" r="4.5" fill="#0056A6" stroke="#ffffff" strokeWidth="1.5" />
                <circle cx="200" cy="80" r="4.5" fill="#0056A6" stroke="#ffffff" strokeWidth="1.5" />
                <circle cx="290" cy="58" r="4.5" fill="#0056A6" stroke="#ffffff" strokeWidth="1.5" />
                <circle cx="380" cy="45" r="4.5" fill="#0056A6" stroke="#ffffff" strokeWidth="1.5" />
                <circle cx="480" cy="32" r="4.5" fill="#0056A6" stroke="#ffffff" strokeWidth="1.5" />
              </svg>

              {/* Month Labels under chart */}
              <div className="flex justify-between text-[9px] font-mono text-muted-foreground/70 pt-2 px-1">
                <span>Dec</span>
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Donut Chart: Members by Program */}
        <div className="lg:col-span-5 bg-white border border-border p-5 rounded-sm shadow-card space-y-4">
          <Reveal delay={40}>
            <div className="flex justify-between items-center border-b border-border pb-2.5">
              <h3 className="font-display text-xs font-bold uppercase tracking-wider text-ink">
                Members by Program
              </h3>
              <span className="text-[9px] font-mono text-muted-foreground">Distribution</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-3 justify-center min-h-[180px]">
              {/* SVG Donut */}
              <div className="relative h-28 w-28 shrink-0 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  {/* Background track circle */}
                  <circle cx="18" cy="18" r="15.915" fill="none" stroke="#f1f5f9" strokeWidth="3.5" />
                  
                  {/* Donut segment 1: Web Dev 35% */}
                  <circle
                    cx="18"
                    cy="18"
                    r="15.915"
                    fill="none"
                    stroke="#4285F4"
                    strokeWidth="3.5"
                    strokeDasharray="35 65"
                    strokeDashoffset="0"
                  />
                  {/* Donut segment 2: AI & Data Science 20% */}
                  <circle
                    cx="18"
                    cy="18"
                    r="15.915"
                    fill="none"
                    stroke="#FBBC05"
                    strokeWidth="3.5"
                    strokeDasharray="20 80"
                    strokeDashoffset="-35"
                  />
                  {/* Donut segment 3: Cybersecurity 15% */}
                  <circle
                    cx="18"
                    cy="18"
                    r="15.915"
                    fill="none"
                    stroke="#34A853"
                    strokeWidth="3.5"
                    strokeDasharray="15 85"
                    strokeDashoffset="-55"
                  />
                  {/* Donut segment 4: Cloud Computing 10% */}
                  <circle
                    cx="18"
                    cy="18"
                    r="15.915"
                    fill="none"
                    stroke="#a855f7"
                    strokeWidth="3.5"
                    strokeDasharray="10 90"
                    strokeDashoffset="-70"
                  />
                  {/* Donut segment 5: Others 20% */}
                  <circle
                    cx="18"
                    cy="18"
                    r="15.915"
                    fill="none"
                    stroke="#94a3b8"
                    strokeWidth="3.5"
                    strokeDasharray="20 80"
                    strokeDashoffset="-80"
                  />
                </svg>
                {/* Center Badge */}
                <div className="absolute flex flex-col items-center justify-center font-mono leading-none">
                  <span className="text-[10px] font-bold text-ink">Total</span>
                  <span className="text-[11px] font-black text-brand-blue mt-1">100%</span>
                </div>
              </div>

              {/* Legends */}
              <div className="space-y-1.5 text-[10px] font-mono text-muted-foreground w-full">
                {[
                  { label: "Web Development", val: "35%", color: "bg-[#4285F4]" },
                  { label: "AI & Data Science", val: "20%", color: "bg-[#FBBC05]" },
                  { label: "Cybersecurity", val: "15%", color: "bg-[#34A853]" },
                  { label: "Cloud Computing", val: "10%", color: "bg-[#a855f7]" },
                  { label: "Others", val: "20%", color: "bg-[#94a3b8]" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-1.5">
                      <span className={`h-2.5 w-2.5 rounded-full ${item.color} shrink-0`} />
                      <span className="truncate max-w-[100px]">{item.label}</span>
                    </div>
                    <span className="font-bold text-ink">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ── BOTTOM LISTS SECTION ───────────────────────────── */}
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-12 items-start pt-2">
        {/* Recent Registrations list */}
        <div className="lg:col-span-7 bg-white border border-border p-5 rounded-sm shadow-card space-y-4">
          <Reveal>
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-ink border-b border-border pb-2.5 mb-3">
              Recent Registrations
            </h3>
          </Reveal>

          <div className="space-y-3">
            {recentRegistrations.map((reg, idx) => (
              <Reveal key={reg.name} delay={idx * 30}>
                <div className="flex items-center justify-between gap-4 p-3 border border-border/80 bg-surface rounded-sm text-xs">
                  <div className="flex items-center gap-3">
                    <div className="grid h-8 w-8 place-items-center rounded-sm bg-brand-black text-white text-[11px] font-bold font-display shrink-0">
                      {reg.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <div className="font-bold text-ink">{reg.name}</div>
                      <div className="text-[10px] text-muted-foreground mt-0.5">{reg.dept}</div>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-[9px] font-mono text-muted-foreground/60">{reg.time}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Upcoming Events list */}
        <div className="lg:col-span-5 bg-white border border-border p-5 rounded-sm shadow-card space-y-4">
          <Reveal delay={60}>
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-ink border-b border-border pb-2.5 mb-3">
              Upcoming Events
            </h3>

            <div className="space-y-3 font-mono text-xs">
              {upcomingEventsList.map((evt) => (
                <div
                  key={evt.title}
                  className="flex items-center justify-between p-3 border border-border/80 bg-surface rounded-sm hover:border-brand-blue/15 transition-all gap-4"
                >
                  <span className="font-medium text-ink truncate leading-tight">{evt.title}</span>
                  <span className="text-[9px] text-brand-blue font-bold shrink-0">{evt.date}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
