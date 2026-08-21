import Link from "next/link";
import { Calendar, User, Clock, ArrowRight, ChevronRight } from "lucide-react";
import { Reveal } from "@ajira/shared/components/site/Reveal";
import { MOCK_POSTS } from "@ajira/shared/constants/blog";

export default function Blog() {
  return (
    <>
      {/* ── PAGE HEADER ───────────────────────────────────── */}
      <section className="bg-[#0B192C] text-white pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="container-x">
          <Reveal>
            <span className="overline text-amber-400 block mb-3 font-display">Resource Center</span>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold max-w-2xl tracking-tight">
              Articles & Guides.
            </h1>
            <p className="mt-5 max-w-xl text-slate-300 leading-relaxed text-base sm:text-lg">
              Peer-authored guides, freelancing tutorials, and digital work newsletters written by Kisii University leaders and alumni.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── BLOG POSTS LIST ────────────────────────────────── */}
      <section className="container-x py-16 sm:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MOCK_POSTS.map((post, idx) => (
            <Reveal key={post.slug} delay={idx * 40}>
              <div className="bg-white border border-slate-200 p-7 rounded-xl shadow-card flex flex-col justify-between h-full hover:border-slate-300 hover:shadow-lg transition-all group">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-bold text-brand-blue bg-blue-50 px-2.5 py-1 rounded-md">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                      <Clock size={13} /> {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-slate-900 leading-snug mb-3 group-hover:text-brand-blue transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">{post.excerpt}</p>
                </div>

                <div className="border-t border-slate-100 pt-4 mt-auto">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3 font-medium">
                    <span className="flex items-center gap-1.5">
                      <User size={13} className="text-amber-600" /> {post.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} /> {post.date}
                    </span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 font-bold text-brand-blue hover:text-brand-blue-dark transition-colors text-xs"
                  >
                    <span>Read Article</span>
                    <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

