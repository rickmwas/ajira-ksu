import Link from "next/link";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import { Reveal } from "@ajira/shared/components/site/Reveal";
import { MOCK_POSTS } from "@ajira/shared/constants/blog";

export default function Blog() {
  return (
    <>
      {/* ── PAGE HEADER ───────────────────────────────────── */}
      <section className="bg-brand-black text-white pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="container-x">
          <Reveal>
            <span className="overline text-brand-gold block mb-4 sm:mb-5 font-mono">Resource Center</span>
            <h1 className="font-display text-[2rem] leading-[1.07] sm:text-5xl lg:text-6xl font-bold max-w-2xl">
              Knowledge for the gig economy.
            </h1>
            <p className="mt-5 max-w-xl text-white/60 leading-relaxed text-[0.9375rem] sm:text-base">
              Peer-authored guides, freelancing guides, and tech newsletters. Read tutorials prepared by Kisii
              University leaders and alumni.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── BLOG POSTS LIST ────────────────────────────────── */}
      <section className="container-x py-14 sm:py-20 font-sans">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MOCK_POSTS.map((post, idx) => (
            <Reveal key={post.slug} delay={idx * 50}>
              <div className="bg-white border border-border p-6 rounded-sm shadow-card flex flex-col justify-between h-full hover:border-brand-blue/20 transition-colors group">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[9px] font-mono font-bold uppercase text-brand-blue bg-brand-blue/10 border border-brand-blue/15 px-2 py-0.5 rounded-sm">
                      {post.category}
                    </span>
                    <span className="text-[9px] text-muted-foreground font-mono flex items-center gap-1">
                      <Clock size={11} /> {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-display text-base font-bold text-ink leading-snug mb-3 group-hover:text-brand-blue transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-6">{post.excerpt}</p>
                </div>

                <div className="border-t border-border pt-4 mt-auto">
                  <div className="flex items-center justify-between text-[10px] text-muted-foreground mb-3 font-mono">
                    <span className="flex items-center gap-1.5">
                      <User size={11} className="text-brand-gold" /> {post.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={11} /> {post.date}
                    </span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 font-bold text-brand-blue hover:gap-1.5 transition-all text-xs font-mono uppercase"
                  >
                    READ ARTICLE <ArrowRight size={11} />
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
