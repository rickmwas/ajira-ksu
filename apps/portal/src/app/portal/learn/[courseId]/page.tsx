"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeft, CheckSquare, Square, ArrowRight, ArrowLeft, Award, Clock, BookOpen, Check } from "lucide-react";
import { usePortal } from "@ajira/shared/hooks/usePortalState";
import { Reveal } from "@ajira/shared/components/site/Reveal";

interface Props {
  params: Promise<{ courseId: string }>;
}

function MarkdownRenderer({ content }: { content: string }) {
  const lines = content.split("\n");
  const renderedElements: React.ReactNode[] = [];
  let currentCodeBlock: string[] = [];
  let isInsideCode = false;

  const renderInlineStyles = (text: string) => {
    const tokens: { type: "text" | "bold" | "code"; content: string }[] = [];
    let lastIndex = 0;
    const combinedRegex = /(\*\*.*?\*\*|`.*?`)/g;
    let match;

    while ((match = combinedRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        tokens.push({ type: "text", content: text.substring(lastIndex, match.index) });
      }
      const tokenVal = match[0];
      if (tokenVal.startsWith("**") && tokenVal.endsWith("**")) {
        tokens.push({ type: "bold", content: tokenVal.slice(2, -2) });
      } else if (tokenVal.startsWith("`") && tokenVal.endsWith("`")) {
        tokens.push({ type: "code", content: tokenVal.slice(1, -1) });
      }
      lastIndex = combinedRegex.lastIndex;
    }
    if (lastIndex < text.length) {
      tokens.push({ type: "text", content: text.substring(lastIndex) });
    }

    return tokens.map((t, idx) => {
      if (t.type === "bold") {
        return (
          <strong key={idx} className="font-bold text-ink">
            {t.content}
          </strong>
        );
      }
      if (t.type === "code") {
        return (
          <code
            key={idx}
            className="font-mono bg-surface px-1.5 py-0.5 rounded border border-border text-brand-blue text-[11px] font-semibold"
          >
            {t.content}
          </code>
        );
      }
      return <span key={idx}>{t.content}</span>;
    });
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.trim().startsWith("```")) {
      if (isInsideCode) {
        isInsideCode = false;
        renderedElements.push(
          <pre
            key={`code-${i}`}
            className="font-mono bg-brand-black text-white/90 p-4 rounded-sm border border-border/20 text-xs overflow-x-auto my-4 leading-relaxed"
          >
            <code className="font-mono">{currentCodeBlock.join("\n")}</code>
          </pre>
        );
        currentCodeBlock = [];
      } else {
        isInsideCode = true;
      }
      continue;
    }

    if (isInsideCode) {
      currentCodeBlock.push(line);
      continue;
    }

    if (line.trim().startsWith("### ")) {
      renderedElements.push(
        <h4 key={`h3-${i}`} className="font-display text-sm font-bold uppercase tracking-wider text-ink mt-8 mb-3">
          {line.replace("### ", "").trim()}
        </h4>
      );
    } else if (line.trim().startsWith("## ")) {
      renderedElements.push(
        <h3
          key={`h2-${i}`}
          className="font-display text-base font-bold text-ink mt-10 mb-4 border-b border-border/85 pb-2"
        >
          {line.replace("## ", "").trim()}
        </h3>
      );
    } else if (line.trim().startsWith("# ")) {
      renderedElements.push(
        <h2 key={`h1-${i}`} className="font-display text-lg font-bold text-ink mt-12 mb-6">
          {line.replace("# ", "").trim()}
        </h2>
      );
    } else if (line.trim().startsWith("* ") || line.trim().startsWith("- ")) {
      const content = line.trim().slice(2);
      renderedElements.push(
        <div
          key={`li-${i}`}
          className="flex items-start gap-2.5 text-xs text-muted-foreground my-2.5 pl-2 leading-relaxed"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-blue mt-2 shrink-0" />
          <span className="flex-1">{renderInlineStyles(content)}</span>
        </div>
      );
    } else if (line.trim() === "") {
      renderedElements.push(<div key={`empty-${i}`} className="h-3" />);
    } else {
      renderedElements.push(
        <p key={`p-${i}`} className="text-xs text-muted-foreground leading-relaxed my-3">
          {renderInlineStyles(line)}
        </p>
      );
    }
  }

  return <div className="space-y-1">{renderedElements}</div>;
}

export default function CourseLearn({ params }: Props) {
  const { courseId } = use(params);
  const { courses, completedLessons, toggleLessonComplete, isCourseCompleted, user } = usePortal();
  const router = useRouter();

  const course = courses.find((c) => c.id === courseId);
  const [activeLessonId, setActiveLessonId] = useState<string>("");

  useEffect(() => {
    if (course && course.lessons.length > 0) {
      const completedIds = completedLessons[course.id] || [];
      const firstUncompleted = course.lessons.find((l) => !completedIds.includes(l.id));
      setActiveLessonId(firstUncompleted ? firstUncompleted.id : course.lessons[0].id);
    }
  }, [course]);

  if (!user) return null;

  if (!course) {
    return (
      <div className="container-x py-20 text-center font-sans">
        <h2 className="font-display text-2xl font-bold text-ink">Course Not Found</h2>
        <p className="text-xs text-muted-foreground mt-2">The selected training program does not exist.</p>
        <Link
          href="/portal/dashboard"
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-blue hover:underline mt-6"
        >
          <ChevronLeft size={14} /> Back to Portal
        </Link>
      </div>
    );
  }

  const activeLesson = course.lessons.find((l) => l.id === activeLessonId) || course.lessons[0];
  const completedIds = completedLessons[course.id] || [];
  const isLessonCompleted = activeLesson ? completedIds.includes(activeLesson.id) : false;

  const getActiveIndex = () => course.lessons.findIndex((l) => l.id === activeLesson.id);
  const prevLesson = getActiveIndex() > 0 ? course.lessons[getActiveIndex() - 1] : null;
  const nextLesson = getActiveIndex() < course.lessons.length - 1 ? course.lessons[getActiveIndex() + 1] : null;

  const completedCount = completedIds.length;
  const totalCount = course.lessons.length;
  const completionPercent = Math.round((completedCount / totalCount) * 100);
  const finished = isCourseCompleted(course.id);

  return (
    <div className="max-w-6xl mx-auto font-sans py-4">
      {/* ── BREADCRUMB HEADER ─────────────────────────────── */}
      <Reveal>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-6 mb-8">
          <div className="flex items-start gap-4">
            <Link
              href="/portal/dashboard"
              className="mt-1 flex h-9 w-9 place-items-center rounded-sm border border-border bg-white text-ink hover:bg-surface-2 transition-colors shrink-0"
              title="Back to portal dashboard"
            >
              <ChevronLeft size={16} />
            </Link>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[9px] font-mono font-bold uppercase text-muted-foreground/75 bg-surface-2 px-2 py-0.5 border border-border/50">
                  {course.badge}
                </span>
                {finished && (
                  <span className="text-[9px] font-mono font-bold uppercase text-brand-green bg-brand-green/10 border border-brand-green/15 px-2 py-0.5 rounded-sm flex items-center gap-1">
                    <Check size={9} /> Certified
                  </span>
                )}
              </div>
              <h2 className="font-display text-lg sm:text-xl font-bold text-ink leading-tight">{course.title}</h2>
            </div>
          </div>

          <div className="sm:text-right shrink-0">
            <div className="flex items-center sm:justify-end gap-2 text-[10px] font-mono text-muted-foreground mb-1.5">
              <span>Course Progress</span>
              <span>
                {completedCount} / {totalCount} lessons ({completionPercent}%)
              </span>
            </div>
            <div className="w-full sm:w-48 bg-surface-2 h-1.5 rounded-full overflow-hidden">
              <div className="bg-brand-blue h-full transition-all duration-300" style={{ width: `${completionPercent}%` }} />
            </div>
          </div>
        </div>
      </Reveal>

      {/* ── COURSE WORKSPACE GRID ─────────────────────────── */}
      <div className="grid grid-cols-12 gap-8 items-start">
        {/* Left Lesson Navigation Sidebar */}
        <div className="col-span-12 md:col-span-4 lg:col-span-3 space-y-4">
          <div className="bg-white border border-border p-4 rounded-sm shadow-card">
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-ink border-b border-border pb-2 mb-3">
              Lessons & Modules
            </h3>

            <div className="space-y-1.5">
              {course.lessons.map((lesson, idx) => {
                const isActive = lesson.id === activeLessonId;
                const isCompleted = completedIds.includes(lesson.id);

                return (
                  <button
                    key={lesson.id}
                    onClick={() => setActiveLessonId(lesson.id)}
                    className={`w-full flex items-start text-left gap-3 p-3 rounded-sm border text-xs transition-all ${
                      isActive
                        ? "border-brand-blue/30 bg-brand-blue/5 font-semibold text-brand-blue"
                        : "border-border/60 hover:border-border bg-white text-ink"
                    }`}
                  >
                    <div className="mt-0.5 shrink-0">
                      {isCompleted ? (
                        <CheckSquare size={14} className="text-brand-green fill-brand-green/5" />
                      ) : (
                        <Square size={14} className="text-muted-foreground/60" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="truncate leading-tight font-display text-xs">
                        {idx + 1}. {lesson.title}
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-muted-foreground mt-1">
                        <Clock size={10} /> {lesson.duration}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {finished && (
              <div className="border-t border-border mt-4 pt-4">
                <Link
                  href={`/portal/certificate/${course.id}`}
                  className="w-full flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green/90 text-white font-bold text-[11px] uppercase tracking-wider py-3 px-4 rounded-sm transition-colors"
                >
                  <Award size={14} /> Download Certificate
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Right Active Lesson Content Pane */}
        <div className="col-span-12 md:col-span-8 lg:col-span-9">
          {activeLesson ? (
            <div className="bg-white border border-border p-6 sm:p-8 rounded-sm shadow-card">
              {/* Lesson Info Header */}
              <div className="border-b border-border pb-4 mb-6">
                <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono text-muted-foreground uppercase mb-2">
                  <span className="flex items-center gap-1">
                    <BookOpen size={11} /> Lesson {getActiveIndex() + 1} of {totalCount}
                  </span>
                  <span className="h-3 w-px bg-border" />
                  <span className="flex items-center gap-1">
                    <Clock size={11} /> Estimated: {activeLesson.duration}
                  </span>
                </div>
                <h1 className="font-display text-xl sm:text-2xl font-bold text-ink mb-2">{activeLesson.title}</h1>
                <p className="text-xs text-muted-foreground italic leading-relaxed">{activeLesson.summary}</p>
              </div>

              {/* Lesson Real Course Syllabus Markdown Renderer */}
              <div className="prose prose-sm max-w-none mb-10 border-b border-border/70 pb-8">
                <MarkdownRenderer content={activeLesson.content} />
              </div>

              {/* Complete Module Controls & Page Footer Navigation */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 font-sans">
                {/* Complete checkbox */}
                <div>
                  <button
                    onClick={() => toggleLessonComplete(course.id, activeLesson.id)}
                    className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider border transition-all ${
                      isLessonCompleted
                        ? "bg-brand-green/10 border-brand-green text-brand-green hover:bg-brand-green/15"
                        : "bg-surface hover:bg-surface-2 border-border text-ink"
                    }`}
                  >
                    {isLessonCompleted ? (
                      <>
                        <CheckSquare size={15} /> Lesson Completed
                      </>
                    ) : (
                      <>
                        <Square size={15} /> Mark as Completed
                      </>
                    )}
                  </button>
                </div>

                {/* Left/Right controls */}
                <div className="flex items-center gap-2">
                  {prevLesson ? (
                    <button
                      onClick={() => setActiveLessonId(prevLesson.id)}
                      className="inline-flex items-center gap-1.5 border border-border hover:bg-surface-2 px-3 py-2 text-xs font-semibold text-ink rounded-sm transition-colors"
                      title={prevLesson.title}
                    >
                      <ArrowLeft size={13} /> Back
                    </button>
                  ) : (
                    <div className="w-16" />
                  )}

                  {nextLesson ? (
                    <button
                      onClick={() => {
                        setActiveLessonId(nextLesson.id);
                      }}
                      className="inline-flex items-center gap-1.5 bg-brand-blue hover:bg-brand-blue-dark text-white px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors"
                      title={nextLesson.title}
                    >
                      Next Lesson <ArrowRight size={13} />
                    </button>
                  ) : finished ? (
                    <Link
                      href={`/portal/certificate/${course.id}`}
                      className="inline-flex items-center gap-1.5 bg-brand-green hover:bg-brand-green/90 text-white px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors"
                    >
                      View Certificate <Award size={13} />
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="inline-flex items-center gap-1.5 bg-muted border border-border text-muted-foreground/60 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm cursor-not-allowed"
                    >
                      Course End
                    </button>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white border border-border p-12 text-center rounded-sm shadow-card">
              <p className="text-xs text-muted-foreground">Select a lesson from the sidebar to begin learning.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
