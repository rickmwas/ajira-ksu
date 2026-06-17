"use client";

import Link from "next/link";
import {
  Award,
  BookOpen,
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  TrendingUp,
  Briefcase,
  Megaphone,
  CheckCircle2
} from "lucide-react";
import { usePortal } from "@/hooks/usePortalState";
import { Reveal } from "@/components/site/Reveal";

export default function PortalDashboard() {
  const { user, courses, completedLessons, isCourseCompleted } = usePortal();

  if (!user) return null;

  // 1. Calculations for stats
  const completedCoursesCount = courses.filter((c) => isCourseCompleted(c.id)).length;
  
  // Enrolled courses are courses with at least 1 completed lesson, or fallback to all courses
  const enrolledCoursesCount = courses.filter((c) => (completedLessons[c.id]?.length || 0) > 0).length || courses.length;
  
  // Calculate total lessons completed
  const totalCompletedLessons = Object.values(completedLessons).reduce((sum, list) => sum + list.length, 0);
  const userPoints = totalCompletedLessons > 0 ? totalCompletedLessons * 150 : 850;

  // 2. Fetch progress for all courses
  const courseProgressList = courses.map((course) => {
    const completed = completedLessons[course.id]?.length || 0;
    const total = course.lessons.length;
    const percent = Math.round((completed / total) * 100);
    return {
      id: course.id,
      title: course.title,
      percent,
    };
  });

  return (
    <div className="space-y-8 max-w-6xl mx-auto font-sans">
      {/* ── TOP HEADER WELCOME ─────────────────────────────── */}
      <Reveal>
        <div>
          <h2 className="font-display text-2xl font-black text-ink leading-tight">
            Hello, {user.name.split(" ")[0]}! 👋
          </h2>
          <p className="text-xs text-muted-foreground mt-1.5">
            Welcome back to your dashboard. Access training tracks and certified credits.
          </p>
        </div>
      </Reveal>

      {/* ── STATS GRID ──────────────────────────────────────── */}
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Upcoming Events", value: 3, icon: Calendar, color: "text-[#4285F4] bg-[#4285F4]/10 border-[#4285F4]/15" },
          { label: "Certificates", value: completedCoursesCount, icon: Award, color: "text-[#34A853] bg-[#34A853]/10 border-[#34A853]/15" },
          { label: "Skills Enrolled", value: enrolledCoursesCount, icon: BookOpen, color: "text-[#FBBC05] bg-[#FBBC05]/10 border-[#FBBC05]/15" },
          { label: "Points", value: userPoints, icon: TrendingUp, color: "text-[#EA4335] bg-[#EA4335]/10 border-[#EA4335]/15" },
        ].map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <Reveal key={stat.label} delay={idx * 30}>
              <div className="bg-white border border-border p-5 rounded-sm shadow-card flex items-center gap-4">
                <div className={`grid h-10 w-10 place-items-center rounded-sm border ${stat.color} shrink-0`}>
                  <Icon size={18} />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </div>
                  <div className="font-display text-xl sm:text-2xl font-black text-ink font-mono mt-0.5 leading-none">
                    {stat.value}
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* ── MAIN DASHBOARD DOUBLE COLUMN ─────────────────────── */}
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-12 items-start">
        
        {/* Left Side: Upcoming Event & Opportunities */}
        <div className="lg:col-span-6 space-y-6">
          {/* Upcoming Event Widget */}
          <Reveal>
            <div className="bg-white border border-border p-6 rounded-sm shadow-card space-y-5">
              <div className="flex justify-between items-center border-b border-border pb-3">
                <h3 className="font-display text-xs font-bold uppercase tracking-wider text-ink">
                  Upcoming Event
                </h3>
                <Link
                  href="/portal/events"
                  className="text-[10px] font-mono font-bold text-brand-blue hover:underline uppercase"
                >
                  View All Events →
                </Link>
              </div>

              <div className="flex gap-4 items-start">
                {/* Date stamp box */}
                <div className="bg-[#0B1528] text-white p-3.5 rounded-sm flex flex-col items-center justify-center w-14 shrink-0 text-center font-mono shadow-sm">
                  <span className="text-xl font-black leading-none">24</span>
                  <span className="text-[9px] font-bold mt-1 text-brand-gold leading-none">MAY</span>
                </div>

                {/* Event text info */}
                <div className="space-y-1.5">
                  <span className="inline-block text-[8px] font-mono font-bold uppercase tracking-wider text-brand-blue bg-brand-blue/10 border border-brand-blue/15 px-2 py-0.5 rounded-sm">
                    Workshop
                  </span>
                  <h4 className="font-display font-bold text-sm text-ink leading-snug">
                    Web Development Bootcamp
                  </h4>
                  <div className="space-y-1 text-[10px] font-mono text-muted-foreground pt-1.5">
                    <div className="flex items-center gap-1.5">
                      <Clock size={12} className="text-brand-gold shrink-0" />
                      <span>10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={12} className="text-brand-blue shrink-0" />
                      <span>KSU ICT Lab</span>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/portal/events"
                className="w-full inline-flex items-center justify-center gap-2 rounded-sm bg-brand-blue hover:bg-brand-blue-dark px-4 py-2.5 text-xs font-bold text-white uppercase tracking-wider transition-colors"
              >
                Register Now
              </Link>
            </div>
          </Reveal>

          {/* Opportunities Board Preview Widget */}
          <Reveal delay={40}>
            <div className="bg-white border border-border p-6 rounded-sm shadow-card space-y-4">
              <div className="flex justify-between items-center border-b border-border pb-3">
                <h3 className="font-display text-xs font-bold uppercase tracking-wider text-ink">
                  Opportunities For You
                </h3>
                <Link
                  href="/portal/opportunities"
                  className="text-[10px] font-mono font-bold text-brand-blue hover:underline uppercase"
                >
                  View All Opportunities →
                </Link>
              </div>

              {/* Opp list */}
              <div className="space-y-3">
                {[
                  { title: "Frontend Developer Intern", company: "TechNova Solutions", type: "Internship" },
                  { title: "Virtual Assistant", company: "Remote Client", type: "Freelance" },
                  { title: "Data Entry Specialist", company: "Ajira Digital", type: "Part-time" }
                ].map((opp) => (
                  <div
                    key={opp.title}
                    className="flex items-center justify-between p-3 border border-border/80 bg-surface rounded-sm text-xs hover:border-brand-blue/15 transition-all"
                  >
                    <div className="space-y-0.5">
                      <div className="font-bold text-ink">{opp.title}</div>
                      <div className="text-[10px] text-muted-foreground">{opp.company}</div>
                    </div>
                    <span className="text-[9px] font-mono font-bold uppercase text-brand-blue bg-brand-blue/10 border border-brand-blue/15 px-2 py-0.5 rounded-sm shrink-0">
                      {opp.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Side: Learning Progress & Announcements */}
        <div className="lg:col-span-6 space-y-6">
          {/* Learning Progress Widget */}
          <Reveal delay={20}>
            <div className="bg-white border border-border p-6 rounded-sm shadow-card space-y-5">
              <div className="flex justify-between items-center border-b border-border pb-3">
                <h3 className="font-display text-xs font-bold uppercase tracking-wider text-ink">
                  Learning Progress
                </h3>
                <Link
                  href="/portal/learn"
                  className="text-[10px] font-mono font-bold text-brand-blue hover:underline uppercase"
                >
                  View All Courses →
                </Link>
              </div>

              {/* Progress bars list */}
              <div className="space-y-4">
                {courseProgressList.map((cp) => (
                  <div key={cp.id} className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="font-bold text-ink leading-tight">{cp.title}</span>
                      <span className="font-mono font-bold text-brand-blue shrink-0">{cp.percent}%</span>
                    </div>
                    <div className="w-full bg-surface h-2 rounded-full overflow-hidden border border-border/50">
                      <div
                        className="bg-brand-blue h-full transition-all duration-300"
                        style={{ width: `${cp.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Announcements Widget */}
          <Reveal delay={60}>
            <div className="bg-white border border-border p-6 rounded-sm shadow-card space-y-4">
              <div className="flex justify-between items-center border-b border-border pb-3">
                <h3 className="font-display text-xs font-bold uppercase tracking-wider text-ink">
                  Announcements
                </h3>
                <Link
                  href="/portal/announcements"
                  className="text-[10px] font-mono font-bold text-brand-blue hover:underline uppercase"
                >
                  View All Announcements →
                </Link>
              </div>

              {/* Announcement List */}
              <div className="space-y-3">
                {[
                  {
                    title: "Ajira Hackathon 2025 registration is now open!",
                    time: "2 days ago",
                  },
                  {
                    title: "Cybersecurity training this Saturday at ICT Lab",
                    time: "3 days ago",
                  },
                  {
                    title: "New resources added to the Learning Hub",
                    time: "5 days ago",
                  },
                ].map((ann) => (
                  <div
                    key={ann.title}
                    className="p-3 border border-border/80 bg-surface rounded-sm text-xs hover:border-brand-blue/15 transition-all flex gap-3 items-start"
                  >
                    <div className="mt-0.5 text-brand-blue shrink-0">
                      <Megaphone size={14} />
                    </div>
                    <div className="space-y-0.5">
                      <p className="font-medium text-ink leading-snug">{ann.title}</p>
                      <span className="text-[9px] font-mono text-muted-foreground/60 block">{ann.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </div>
  );
}
