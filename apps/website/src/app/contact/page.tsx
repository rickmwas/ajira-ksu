"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { Reveal } from "@ajira/shared/components/site/Reveal";
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
      <section className="bg-[#0B192C] text-white pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="container-x">
          <Reveal>
            <span className="overline text-amber-400 block mb-3 font-display">Contact & Location</span>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold max-w-2xl tracking-tight">
              Get in touch with us.
            </h1>
            <p className="mt-5 max-w-xl text-slate-300 leading-relaxed text-base sm:text-lg">
              Have questions about our training cohorts, lab schedules, or certificate verifications? Send us a message or visit our campus office.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── CONTACT GRID ──────────────────────────────────── */}
      <section className="container-x py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <h3 className="font-display text-2xl font-bold text-slate-900 leading-tight">
                Our Campus Office
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                We are based at the main campus of Kisii University. Feel free to drop by during our weekly practical sessions in ICT Lab 2.
              </p>
            </Reveal>

            <Reveal delay={40}>
              <div className="space-y-4 text-sm">
                <div className="flex gap-4 p-5 border border-slate-200 bg-slate-50 rounded-xl">
                  <MapPin size={20} className="text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider font-display">Location</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Kisii University, Main Campus
                      <br />
                      ICT Lab 2 Access
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 border border-slate-200 bg-slate-50 rounded-xl">
                  <Mail size={20} className="text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider font-display">Email Address</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 break-all">ajira@kisiiuniversity.ac.ke</p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 border border-slate-200 bg-slate-50 rounded-xl">
                  <Phone size={20} className="text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider font-display">Phone Helpline</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">+254 741 145 911 (Mon - Fri, 8AM - 5PM)</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-white border border-slate-200 p-8 shadow-card rounded-xl">
            <Reveal delay={60}>
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="font-display text-xl font-bold text-slate-900">Thank You for Reaching Out!</h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-xs mx-auto leading-relaxed">
                    Your inquiry has been transmitted to the executive council. We will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 inline-flex rounded-md bg-brand-blue hover:bg-brand-blue-dark px-6 py-2.5 text-xs font-bold text-white transition-all shadow-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-5">
                  <h3 className="font-display text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                    Send a Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="block mb-1.5 text-xs font-bold text-slate-700">Full Name</span>
                      <input required type="text" className={inputCls} placeholder="e.g. Onyango Michael" />
                    </label>
                    <label className="block">
                      <span className="block mb-1.5 text-xs font-bold text-slate-700">Email Address</span>
                      <input required type="email" className={inputCls} placeholder="name@domain.com" />
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="block mb-1.5 text-xs font-bold text-slate-700">Registration Number</span>
                      <input type="text" className={inputCls} placeholder="e.g. MPS/123/2023 (Optional)" />
                    </label>
                    <label className="block">
                      <span className="block mb-1.5 text-xs font-bold text-slate-700">Subject Category</span>
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
                    <span className="block mb-1.5 text-xs font-bold text-slate-700">Message Content</span>
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
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-brand-blue hover:bg-brand-blue-dark disabled:bg-slate-200 disabled:cursor-not-allowed px-7 py-3.5 text-xs font-bold text-white transition-all shadow-sm mt-2"
                  >
                    {loading ? (
                      "Transmitting..."
                    ) : (
                      <>
                        <span>Send Message</span> <Send size={14} />
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
  "w-full rounded-md border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 outline-none focus:border-brand-blue focus:bg-white focus:ring-2 focus:ring-brand-blue/15 transition placeholder:text-slate-400 font-sans";

