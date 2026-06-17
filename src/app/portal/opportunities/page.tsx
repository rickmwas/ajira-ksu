"use client";

import { useState } from "react";
import { Briefcase, Calendar, MapPin, ExternalLink, Filter } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

interface Opportunity {
  id: string;
  title: string;
  company: string;
  type: "Internship" | "Freelance" | "Scholarship" | "Hackathon";
  loc: string;
  deadline: string;
  desc: string;
  link: string;
  budget?: string;
}

const oppsData: Opportunity[] = [
  {
    id: "e-mobilis-intern",
    title: "Digital Assistant Intern",
    company: "eMobilis Mobile Technologies",
    type: "Internship",
    loc: "Nairobi (Remote friendly)",
    deadline: "Jul 24, 2026",
    desc: "Coordinate administrative schedules, assist with customer operations, and manage social media calendar checks for client accounts.",
    link: "https://ajiradigital.go.ke",
  },
  {
    id: "upwork-writing",
    title: "SEO Writer Contract",
    company: "SaaS Marketing Ltd",
    type: "Freelance",
    loc: "Remote Gig",
    deadline: "Jul 15, 2026",
    desc: "Draft 5 technical articles about Shopify variant adjustments. Escrow funded, payment released per milestone completed.",
    link: "https://ajiradigital.go.ke",
    budget: "KSh 15,000 / article",
  },
  {
    id: "ict-authority-scholar",
    title: "Huawei Certified ICT Training Scholar",
    company: "Ministry of ICT / Huawei",
    type: "Scholarship",
    loc: "Online Bootcamp",
    deadline: "Aug 10, 2026",
    desc: "Sponsored vouchers for Kisii University students to obtain professional cloud computing or network certifications.",
    link: "https://ajiradigital.go.ke",
  },
  {
    id: "lake-hub-hack",
    title: "Lake Basin Digital Solutions Hackathon",
    company: "LakeHub Kisumu",
    type: "Hackathon",
    loc: "Kisumu City (Physical)",
    deadline: "Sep 05, 2026",
    desc: "Pitch a digital system that helps local agricultural co-operatives track supply credit. Cash prizes and cloud credits.",
    link: "https://ajiradigital.go.ke",
    budget: "KSh 100,000 Pool",
  },
];

export default function Opportunities() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Internship", "Freelance", "Scholarship", "Hackathon"];

  const filteredOpps = oppsData.filter((o) => filter === "All" || o.type === filter);

  return (
    <div className="space-y-8 max-w-5xl mx-auto font-sans">
      <Reveal>
        <div className="border-b border-border pb-3 mb-6">
          <h2 className="font-display text-base font-bold uppercase tracking-wider text-ink">Opportunities Board</h2>
          <p className="text-xs text-muted-foreground mt-1">
            Apply to vetted internships, freelance projects, hackathons, and scholarships.
          </p>
        </div>
      </Reveal>

      {/* Categories filter */}
      <div className="flex flex-wrap gap-1.5 font-mono">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-sm transition-all ${
              filter === c
                ? "bg-brand-blue text-white"
                : "bg-white border border-border text-foreground/75 hover:bg-surface-2"
            }`}
          >
            {c.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Opps List */}
      <div className="grid gap-4.5">
        {filteredOpps.length > 0 ? (
          filteredOpps.map((o, idx) => (
            <Reveal key={o.id} delay={idx * 40}>
              <div className="bg-white border border-border p-5 rounded-sm shadow-card hover:border-brand-blue/20 transition-all flex flex-col md:flex-row md:items-center justify-between gap-5">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-mono font-bold uppercase text-brand-blue bg-brand-blue/10 border border-brand-blue/15 px-2 py-0.5 rounded-sm">
                      {o.type}
                    </span>
                    {o.budget && (
                      <span className="text-[9px] font-mono font-bold uppercase text-brand-green bg-brand-green/10 border border-brand-green/15 px-2 py-0.5 rounded-sm">
                        {o.budget}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-sm text-ink">{o.title}</h3>
                    <p className="text-[11px] text-muted-foreground/90 font-mono mt-0.5">{o.company}</p>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl">{o.desc}</p>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end justify-between md:justify-center gap-4 shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-border/80 text-xs">
                  <div className="space-y-1.5 text-[11px] font-mono text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={12} className="text-brand-blue shrink-0" />
                      <span>{o.loc}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={12} className="text-brand-gold shrink-0" />
                      <span>Deadline: {o.deadline}</span>
                    </div>
                  </div>

                  <a
                    href={o.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 bg-surface hover:bg-surface-2 border border-border px-4 py-2 rounded-sm text-[11px] font-bold text-ink uppercase tracking-wider transition-colors"
                  >
                    Apply Now <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            </Reveal>
          ))
        ) : (
          <div className="bg-white border border-border p-12 text-center rounded-sm shadow-card">
            <p className="text-xs text-muted-foreground">No opportunities listed in this category currently.</p>
          </div>
        )}
      </div>
    </div>
  );
}
