import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
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
  { src: g1, caption: "Coding workshop",       category: "Training",   },
  { src: g2, caption: "Annual hackathon",       category: "Hackathon",  tall: true },
  { src: g3, caption: "Cybersecurity lab",      category: "Training",   },
  { src: g4, caption: "Freelance bootcamp",     category: "Bootcamp",   tall: true },
  { src: g5, caption: "Cohort graduation",      category: "Milestone",  },
  { src: g6, caption: "Tech keynote session",   category: "Event",      },
];

function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────── */}
      <section className="bg-brand-black text-white pt-32 pb-20">
        <div className="container-x">
          <Reveal>
            <span className="overline text-brand-red block mb-5">Gallery</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold max-w-2xl leading-[1.06]">
              Moments that built the community.
            </h1>
            <p className="mt-6 max-w-lg text-white/60 leading-relaxed">
              A look inside our workshops, hackathons, and the wins we celebrate together.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── MASONRY GRID ─────────────────────────────────── */}
      <section className="container-x py-16 sm:py-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {images.map((img, i) => (
            <Reveal key={i} delay={i * 50}>
              <button
                onClick={() => setLightbox(i)}
                className="mb-4 block w-full overflow-hidden border border-border group relative bg-surface"
                aria-label={`View: ${img.caption}`}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  loading="lazy"
                  className={`w-full ${img.tall ? "aspect-[4/5]" : "aspect-[4/3]"} object-cover transition-transform duration-500 group-hover:scale-105`}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-brand-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-left">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-red mb-1">
                      {img.category}
                    </div>
                    <div className="text-white text-sm font-medium">{img.caption}</div>
                  </div>
                  <ZoomIn size={18} className="text-white/60 absolute top-4 right-4" />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── LIGHTBOX ─────────────────────────────────────── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 grid place-items-center p-4 bg-brand-black/95 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 grid h-10 w-10 place-items-center border border-white/20 text-white hover:bg-white/10 transition-colors"
            aria-label="Close lightbox"
          >
            <X size={18} />
          </button>

          <div className="text-center animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[lightbox].src}
              alt={images[lightbox].caption}
              className="max-h-[80vh] max-w-[90vw] object-contain"
            />
            <div className="mt-4 flex items-center justify-center gap-3">
              <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-red">
                {images[lightbox].category}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span className="text-sm text-white/70">{images[lightbox].caption}</span>
            </div>
          </div>

          {/* Prev / Next */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                className={`h-1.5 rounded-full transition-all ${
                  i === lightbox ? "w-6 bg-brand-red" : "w-1.5 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`View image ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
