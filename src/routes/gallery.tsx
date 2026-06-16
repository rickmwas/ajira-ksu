import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Ajira Digital Club, Kisii University" },
      { name: "description", content: "Photos from Ajira Digital Club workshops, hackathons, training sessions, and events at Kisii University." },
    ],
  }),
  component: Gallery,
});

const images: { src: string; caption: string; category: string; tall?: boolean }[] = [
  { src: g1, caption: "Coding workshop",      category: "Training"  },
  { src: g2, caption: "Annual hackathon",     category: "Hackathon", tall: true },
  { src: g3, caption: "Cybersecurity lab",    category: "Training"  },
  { src: g4, caption: "Freelance bootcamp",   category: "Bootcamp",  tall: true },
  { src: g5, caption: "Cohort graduation",    category: "Milestone" },
  { src: g6, caption: "Tech keynote session", category: "Event"     },
];

function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox(i => i !== null ? (i - 1 + images.length) % images.length : null);
  const next = () => setLightbox(i => i !== null ? (i + 1) % images.length : null);

  return (
    <>
      {/* ── PAGE HEADER ────────────────────────────────────── */}
      <section className="bg-brand-black text-white pt-[88px] pb-20">
        <div className="container-x pt-12">
          <Reveal>
            <span className="overline text-brand-red mb-5">Gallery</span>
            <h1 className="font-serif text-[2.6rem] sm:text-5xl lg:text-6xl font-normal max-w-2xl leading-[1.06] text-white mt-4">
              Moments that built the community.
            </h1>
            <p className="mt-7 max-w-lg text-white/55 leading-relaxed font-light">
              A look inside our workshops, hackathons, and the wins we celebrate together.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── CATEGORY FILTER ROW ────────────────────────────── */}
      <section className="border-b border-border bg-surface">
        <div className="container-x py-4 flex items-center gap-2 overflow-x-auto">
          <span className="text-[10px] font-display font-semibold uppercase tracking-[0.15em] text-muted-foreground shrink-0 mr-2">
            Filter
          </span>
          {["All", "Training", "Hackathon", "Bootcamp", "Milestone", "Event"].map((cat) => (
            <button
              key={cat}
              className="shrink-0 px-3 py-1.5 text-[11px] font-display font-semibold uppercase tracking-[0.12em] rounded-sm border border-border hover:border-brand-red hover:text-brand-red transition-colors text-muted-foreground"
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── MASONRY GRID ───────────────────────────────────── */}
      <section className="container-x py-14 sm:py-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 [column-fill:_balance]">
          {images.map((img, i) => (
            <Reveal key={i} delay={i * 50}>
              <button
                onClick={() => setLightbox(i)}
                className="mb-3 block w-full overflow-hidden border border-border group relative"
                aria-label={`View: ${img.caption}`}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  loading="lazy"
                  className={`w-full ${img.tall ? "aspect-[4/5]" : "aspect-[4/3]"} object-cover transition-transform duration-500 group-hover:scale-[1.04]`}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-brand-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-left">
                    <div className="text-[10px] font-display font-semibold uppercase tracking-[0.15em] text-brand-red mb-1">
                      {img.category}
                    </div>
                    <div className="font-serif text-base text-white">{img.caption}</div>
                  </div>
                  <ZoomIn size={16} className="text-white/50 absolute top-4 right-4" />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── LIGHTBOX ───────────────────────────────────────── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-brand-black/96 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 grid h-10 w-10 place-items-center border border-white/15 text-white hover:bg-white/10 transition-colors"
            aria-label="Close"
            onClick={() => setLightbox(null)}
          >
            <X size={18} />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center border border-white/15 text-white hover:bg-white/10 transition-colors"
            aria-label="Previous"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft size={18} />
          </button>

          {/* Next */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center border border-white/15 text-white hover:bg-white/10 transition-colors"
            aria-label="Next"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight size={18} />
          </button>

          <div className="text-center animate-scale-in px-16" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[lightbox].src}
              alt={images[lightbox].caption}
              className="max-h-[78vh] max-w-[88vw] object-contain"
            />
            <div className="mt-5 flex items-center justify-center gap-3">
              <span className="text-[10px] font-display font-semibold uppercase tracking-[0.15em] text-brand-red">
                {images[lightbox].category}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="font-serif text-base text-white/70">{images[lightbox].caption}</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-[10px] font-display text-white/30">{lightbox + 1} / {images.length}</span>
            </div>
          </div>

          {/* Dot nav */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                className={`h-1.5 rounded-full transition-all ${
                  i === lightbox ? "w-5 bg-brand-red" : "w-1.5 bg-white/25 hover:bg-white/50"
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
