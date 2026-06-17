import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, Calendar, User, Clock, Share2, ShieldCheck, Check } from "lucide-react";
import { MOCK_POSTS } from "@ajira/shared/constants/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = MOCK_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — Ajira Club KSU`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = MOCK_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container-x py-10 font-sans max-w-3xl">
      <div className="mb-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-brand-blue font-semibold"
        >
          <ChevronLeft size={14} /> Back to Blog
        </Link>
      </div>

      <article className="bg-white border border-border p-6 sm:p-10 rounded-sm shadow-card">
        <header className="border-b border-border pb-6 mb-8 font-sans">
          <div className="flex items-center gap-2.5 text-[10px] font-mono uppercase text-brand-blue mb-3 font-bold">
            <span>{post.category}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="font-display text-2xl sm:text-3xl font-black text-ink mb-4 leading-tight">{post.title}</h1>

          <div className="flex flex-wrap items-center justify-between gap-4 text-[10px] font-mono text-muted-foreground">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <User size={11} className="text-brand-gold" /> {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={11} /> {post.date}
              </span>
            </div>
            <button className="flex items-center gap-1 hover:text-brand-blue" aria-label="Share article">
              <Share2 size={11} /> Share Guide
            </button>
          </div>
        </header>

        <div className="space-y-6 text-xs sm:text-sm text-muted-foreground leading-relaxed">
          <p className="font-semibold text-ink italic bg-surface p-4 border-l-2 border-brand-blue rounded-sm my-4">
            "{post.excerpt}"
          </p>

          {post.slug === "pass-transcribeme-2026" ? (
            <div className="space-y-4">
              <h3 className="font-display text-base font-bold text-ink mt-6">The Onboarding Barrier</h3>
              <p>
                To get paid on global transcription portals, you must pass a strict formatting exam. Most students fail
                due to minor formatting errors, not spelling mistakes.
              </p>

              <h4 className="font-display text-sm font-bold text-ink mt-4">1. Clean Verbatim vs. Full Verbatim</h4>
              <p>
                Most platforms split work into clean and full verbatim styles. Standard tests are typically clean verbatim.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-ink">Clean Verbatim:</strong> Transcribe speech by removing filler words
                  (like "uh", "um", "like", "you know"), stutters, and false starts.
                </li>
                <li>
                  <strong className="text-ink">Full Verbatim:</strong> Transcribe every stutter, repetition, and filler
                  word exactly as spoken.
                </li>
              </ul>

              <h4 className="font-display text-sm font-bold text-ink mt-4">2. Time-Stamping Rules</h4>
              <p>
                Timestamps align text with audio tracks. Insert timestamps at regular 2-minute intervals or when the speaker changes.
                The syntax is strictly <code className="bg-surface px-1.5 py-0.5 rounded border border-border font-mono text-xs">[HH:MM:SS]</code>.
              </p>

              <h4 className="font-display text-sm font-bold text-ink mt-4">3. Common Gotchas</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Double check rules for writing numbers zero through nine.</li>
                <li>Pay close attention to capitalized brand names (e.g. Safaricom).</li>
                <li>Ensure emotional tags like [laughter] are spelled exactly as specified.</li>
              </ul>
            </div>
          ) : post.slug === "chrome-extensions-va" ? (
            <div className="space-y-4">
              <h3 className="font-display text-base font-bold text-ink mt-6">Virtual Assistant Workflows</h3>
              <p>
                Remote clients hire virtual assistants (VAs) to run their daily logistics, scheduling, customer emails, and inventory updates.
              </p>

              <h4 className="font-display text-sm font-bold text-ink mt-4">1. Text Expansion Tools</h4>
              <p>
                Extensions like <strong className="text-ink">Text Blaze</strong> or <strong className="text-ink">Magical</strong> let you create shortcuts for repetitive text blocks (e.g., typing a shortcut expands to a full personalized customer welcome email).
              </p>

              <h4 className="font-display text-sm font-bold text-ink mt-4">2. Tab Management</h4>
              <p>
                Running client research can lead to 50 open tabs. Use <strong className="text-ink">OneTab</strong> or <strong className="text-ink">Toby</strong> to group tabs into workspaces and save system memory.
              </p>

              <h4 className="font-display text-sm font-bold text-ink mt-4">3. Grammar & Proofing</h4>
              <p>
                Having flawless English is essential. Tools like <strong className="text-ink">Grammarly</strong> or <strong className="text-ink">Hemingway Editor</strong> help verify that your customer support templates have no typos.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <h3 className="font-display text-base font-bold text-ink mt-6">Payment Escrow Systems</h3>
              <p>
                Global freelancing platforms like Upwork and Fiverr use Escrow systems to protect both freelancer and client. Escrow is a third-party account where the client deposits contract funds before work begins.
              </p>

              <h4 className="font-display text-sm font-bold text-ink mt-4">1. Funded Milestones</h4>
              <p>
                Before starting any writing or design work, verify that the milestone is fully funded on the dashboard. Do not work on drafts if the status shows "Draft" or "Unfunded".
              </p>

              <h4 className="font-display text-sm font-bold text-ink mt-4">2. Secure Client Profiles</h4>
              <p>
                Check client ratings, past reviews, hire rate, and payment method verification. Avoid clients who request off-platform communications or payment transfers.
              </p>

              <h4 className="font-display text-sm font-bold text-ink mt-4">3. Payment Methods in Kenya</h4>
              <p>
                Once funds release from escrow, you can withdraw to M-Pesa or local banks through:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Direct Upwork M-Pesa withdrawal.</li>
                <li>PayPal linked to Equity Bank or M-Pesa.</li>
                <li>Payoneer for corporate accounts.</li>
              </ul>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
export const dynamic = "force-static";
export async function generateStaticParams() {
  return MOCK_POSTS.map((post) => ({
    slug: post.slug,
  }));
}
