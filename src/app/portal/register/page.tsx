"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePortal } from "@/hooks/usePortalState";
import { UserPlus, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

const interests = ["Virtual Assistant", "Transcription", "Content Writing", "Web Design"];

export default function RegisterPage() {
  const { register } = usePortal();
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const course = formData.get("course") as string;
    const year = formData.get("year") as string;
    const interest = formData.get("interest") as string;
    const bio = formData.get("bio") as string;

    register({ name, email, phone, course, year, interest, bio });
    setSubmitted(true);
    toast.success("Account created successfully!");
  };

  const handleProceed = () => {
    router.push("/portal/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-surface w-full">
      <div className="max-w-xl w-full border border-border bg-white p-6 sm:p-8 shadow-card rounded-sm font-sans animate-fade-in">
      <div className="text-center mb-6">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-sm bg-brand-blue/10 text-brand-blue mb-4">
          <UserPlus size={20} />
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-ink">Register Student Account</h2>
        <p className="mt-1.5 text-xs text-muted-foreground">Join the Kisii University Ajira digital training chapter.</p>
      </div>

      {submitted ? (
        <div className="py-8 text-center animate-scale-in">
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-green/10 text-brand-green mb-4">
            <CheckCircle2 size={24} />
          </div>
          <h4 className="font-display text-lg font-bold text-ink">Registration Completed!</h4>
          <p className="mt-2 text-xs text-muted-foreground max-w-sm mx-auto leading-relaxed">
            Welcome to Ajira Digital Club. Your student learning profile is active. You are registered as an active
            member.
          </p>
          <button
            onClick={handleProceed}
            className="mt-6 inline-flex rounded-sm bg-brand-blue hover:bg-brand-blue-dark px-6 py-3 text-xs font-bold text-white uppercase tracking-wider transition-colors"
          >
            Enter Student Portal
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="block mb-1.5 text-xs font-semibold text-foreground/70">Full Name</span>
              <input required name="fullName" className={inputCls} placeholder="e.g. Onyango Michael" />
            </label>
            <label className="block">
              <span className="block mb-1.5 text-xs font-semibold text-foreground/70">Email Address</span>
              <input
                required
                name="email"
                type="email"
                className={inputCls}
                placeholder="username@kisiiuniversity.ac.ke"
              />
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="block mb-1.5 text-xs font-semibold text-foreground/70">Phone Number</span>
              <input required name="phone" className={inputCls} placeholder="e.g. 0741 145 911" />
            </label>
            <label className="block">
              <span className="block mb-1.5 text-xs font-semibold text-foreground/70">Course / Department</span>
              <input required name="course" className={inputCls} placeholder="e.g. BSc Computer Science" />
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="block mb-1.5 text-xs font-semibold text-foreground/70">Year of Study</span>
              <select required name="year" className={inputCls} defaultValue="">
                <option value="" disabled>
                  Select Year
                </option>
                {["1st Year", "2nd Year", "3rd Year", "4th Year", "5th Year", "Postgraduate"].map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="block mb-1.5 text-xs font-semibold text-foreground/70">Primary Track Focus</span>
              <select required name="interest" className={inputCls} defaultValue="">
                <option value="" disabled>
                  Select Track
                </option>
                {interests.map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="block">
            <span className="block mb-1.5 text-xs font-semibold text-foreground/70">Short Bio / Core Goals</span>
            <textarea
              required
              name="bio"
              rows={2}
              className={inputCls}
              placeholder="Tell us what you want to learn or achieve..."
            />
          </label>

          <button
            type="submit"
            className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-sm bg-brand-blue hover:bg-brand-blue-dark px-6 py-3.5 text-xs font-bold text-white uppercase tracking-wider transition-colors"
          >
            Create Account <ArrowRight size={13} />
          </button>
        </form>
      )}

      {!submitted && (
        <div className="mt-6 border-t border-border pt-4 text-center">
          <p className="text-[11px] text-muted-foreground">
            Already registered?{" "}
            <Link href="/portal/login" className="text-brand-blue font-bold hover:underline">
              Sign In here
            </Link>
          </p>
        </div>
      )}
      </div>
    </div>
  );
}

const inputCls =
  "w-full rounded-sm border border-input bg-surface px-3 py-2.5 text-xs outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 transition placeholder:text-muted-foreground/45";
