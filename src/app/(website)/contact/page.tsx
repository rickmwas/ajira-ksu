"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { toast } from "sonner";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Mock API request delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success("Message sent successfully!");
    }, 1200);
  };

  return (
    <>
      {/* ── PAGE HEADER ───────────────────────────────────── */}
      <section className="bg-brand-black text-white pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="container-x">
          <Reveal>
            <span className="overline text-brand-gold block mb-4 sm:mb-5 font-mono">Feedback Channels</span>
            <h1 className="font-display text-[2rem] leading-[1.07] sm:text-5xl lg:text-6xl font-bold max-w-2xl">
              Get in touch with us.
            </h1>
            <p className="mt-5 max-w-xl text-white/60 leading-relaxed text-[0.9375rem] sm:text-base">
              Have questions about our peer learning cohorts, lab schedules, or certificate verifications? Send us a
              message or visit our campus offices.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── CONTACT GRID ──────────────────────────────────── */}
      <section className="container-x py-14 sm:py-20 font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <Reveal>
              <h3 className="font-display text-lg sm:text-xl font-bold text-ink leading-tight">
                Our Office Location
              </h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                We are based at the main campus of Kisii University. Feel free to drop by during our training cohorts
                or peer-led typing sprints.
              </p>
            </Reveal>

            <Reveal delay={40}>
              <div className="space-y-5 text-sm">
                <div className="flex gap-4 p-4 border border-border bg-surface rounded-sm">
                  <MapPin size={18} className="text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-ink text-xs uppercase tracking-wider font-mono">Location</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Kisii University, Main Campus
                      <br />
                      ICT Lab 1 & 2 Access
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 border border-border bg-surface rounded-sm">
                  <Mail size={18} className="text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-ink text-xs uppercase tracking-wider font-mono">Email Address</h4>
                    <p className="text-xs text-muted-foreground mt-1 break-all">ajira@kisiiuniversity.ac.ke</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 border border-border bg-surface rounded-sm">
                  <Phone size={18} className="text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-ink text-xs uppercase tracking-wider font-mono">Phone Helpline</h4>
                    <p className="text-xs text-muted-foreground mt-1">0741 145 911 (Mon - Fri, 8AM - 5PM)</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-white border border-border p-6 sm:p-8 shadow-card rounded-sm">
            <Reveal delay={60}>
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-green/10 text-brand-green mb-4">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="font-display text-lg font-bold text-ink">Thank You for Reaching Out!</h4>
                  <p className="mt-2 text-xs text-muted-foreground max-w-xs mx-auto leading-relaxed">
                    Your query has been successfully transmitted to the club executive team. We will review your notes
                    and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 inline-flex rounded-sm bg-brand-blue hover:bg-brand-blue-dark px-6 py-2.5 text-xs font-bold text-white uppercase tracking-wider transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-4.5">
                  <h3 className="font-display text-base font-bold text-ink border-b border-border pb-3 mb-2">
                    Send a Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="block mb-1.5 text-xs font-semibold text-foreground/75">Full Name</span>
                      <input required type="text" className={inputCls} placeholder="e.g. Onyango Michael" />
                    </label>
                    <label className="block">
                      <span className="block mb-1.5 text-xs font-semibold text-foreground/75">Email Address</span>
                      <input required type="email" className={inputCls} placeholder="name@domain.com" />
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="block mb-1.5 text-xs font-semibold text-foreground/75">Registration Number</span>
                      <input type="text" className={inputCls} placeholder="e.g. MPS/123/2023 (Optional)" />
                    </label>
                    <label className="block">
                      <span className="block mb-1.5 text-xs font-semibold text-foreground/75">Subject Target</span>
                      <select required className={inputCls} defaultValue="">
                        <option value="" disabled>
                          Select Subject
                        </option>
                        <option value="Training Modules">Cohort Training Modules</option>
                        <option value="Events Registration">Events Registration Support</option>
                        <option value="Certificate Verification">Certificate Verification</option>
                        <option value="Partnership Details">Sponsorship & Partnership</option>
                        <option value="General Query">General Inquiry</option>
                      </select>
                    </label>
                  </div>

                  <label className="block">
                    <span className="block mb-1.5 text-xs font-semibold text-foreground/75">Message Content</span>
                    <textarea
                      required
                      rows={4}
                      className={inputCls}
                      placeholder="Detail your request or comments..."
                    />
                  </label>

                  <button
                    disabled={loading}
                    type="submit"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-sm bg-brand-blue hover:bg-brand-blue-dark disabled:bg-muted disabled:cursor-not-allowed px-6 py-3.5 text-xs font-bold text-white uppercase tracking-wider transition-colors mt-2"
                  >
                    {loading ? (
                      "Transmitting..."
                    ) : (
                      <>
                        Send Message <Send size={13} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

const inputCls =
  "w-full rounded-sm border border-input bg-surface px-3 py-2.5 text-xs outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 transition placeholder:text-muted-foreground/45";
