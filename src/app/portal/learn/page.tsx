"use client";

import Link from "next/link";
import { Award, BookOpen, Settings, Mic, FileText, Code2, ArrowRight } from "lucide-react";
import { usePortal } from "@/hooks/usePortalState";
import { Reveal } from "@/components/site/Reveal";

export default function LearningHub() {
  const { courses, completedLessons, isCourseCompleted } = usePortal();

  const getCourseProgress = (courseId: string) => {
    const course = courses.find((c) => c.id === courseId);
    if (!course) return { count: 0, percent: 0 };
    const completed = completedLessons[courseId]?.length || 0;
    const percent = Math.round((completed / course.lessons.length) * 100);
    return { count: completed, total: course.lessons.length, percent };
  };

  const getCourseIcon = (courseId: string) => {
    switch (courseId) {
      case "virtual-assistant":
        return <Settings className="text-brand-blue" size={20} />;
      case "transcription":
        return <Mic className="text-brand-blue" size={20} />;
      case "copywriting":
        return <FileText className="text-brand-blue" size={20} />;
      case "web-design":
        return <Code2 className="text-brand-blue" size={20} />;
      default:
        return <BookOpen className="text-brand-blue" size={20} />;
    }
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto font-sans">
      <Reveal>
        <div className="border-b border-border pb-3 mb-6">
          <h2 className="font-display text-base font-bold uppercase tracking-wider text-ink">Learning Hub</h2>
          <p className="text-xs text-muted-foreground mt-1">
            Access certified courses and complete modules to earn credentials.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
        {courses.map((course, idx) => {
          const { count, total, percent } = getCourseProgress(course.id);
          const finished = isCourseCompleted(course.id);

          return (
            <Reveal key={course.id} delay={idx * 40}>
              <div className="bg-white border border-border p-6 rounded-sm shadow-card flex flex-col justify-between h-full hover:border-brand-blue/20 transition-all relative group">
                <div>
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <div className="grid h-10 w-10 place-items-center bg-surface rounded-sm border border-border shrink-0">
                      {getCourseIcon(course.id)}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-mono font-bold uppercase text-muted-foreground/70 bg-surface px-2 py-0.5 border border-border/50">
                        {course.badge}
                      </span>
                      {finished && (
                        <span className="text-[9px] font-mono font-bold uppercase text-brand-green bg-brand-green/10 border border-brand-green/15 px-2 py-0.5 rounded-sm">
                          Certified
                        </span>
                      )}
                    </div>
                  </div>

                  <h4 className="font-display text-[15px] font-bold text-ink leading-snug group-hover:text-brand-blue transition-colors mb-2">
                    {course.title}
                  </h4>

                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-6">
                    {course.description}
                  </p>
                </div>

                <div className="border-t border-border pt-4 mt-auto">
                  <div className="flex justify-between text-[10px] font-mono text-muted-foreground mb-2">
                    <span>Progress</span>
                    <span>
                      {count} / {total} lessons ({percent}%)
                    </span>
                  </div>

                  <div className="w-full bg-surface-2 h-1 rounded-full overflow-hidden mb-5">
                    <div className="bg-brand-blue h-full transition-all duration-300" style={{ width: `${percent}%` }} />
                  </div>

                  <div className="flex justify-between items-center gap-3">
                    {finished ? (
                      <>
                        <Link
                          href={`/portal/learn/${course.id}`}
                          className="text-[11px] font-bold text-muted-foreground hover:text-brand-blue transition-colors"
                        >
                          Review Material
                        </Link>

                        <Link
                          href={`/portal/certificate/${course.id}`}
                          className="inline-flex items-center gap-1.5 rounded-sm bg-brand-green hover:bg-brand-green/90 text-white px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors"
                        >
                          <Award size={13} /> Certificate
                        </Link>
                      </>
                    ) : (
                      <>
                        <span className="text-[10px] font-mono text-muted-foreground/80">Lessons: {total}</span>
                        <Link
                          href={`/portal/learn/${course.id}`}
                          className="inline-flex items-center gap-1.5 rounded-sm bg-brand-blue hover:bg-brand-blue-dark text-white px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors"
                        >
                          {count > 0 ? "Resume Learning" : "Start Course"} <ArrowRight size={13} />
                        </Link>
                      </>
                    )}
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
