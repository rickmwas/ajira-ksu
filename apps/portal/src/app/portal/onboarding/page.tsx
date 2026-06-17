"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePortal } from "@ajira/shared/hooks/usePortalState";
import { GraduationCap, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const interests = ["Virtual Assistant", "Transcription", "Content Writing", "Web Design"];

export default function OnboardingPage() {
  const { user, completeOnboarding, loading } = usePortal();
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  // If already onboarded, redirect to dashboard
  useEffect(() => {
    if (!loading && user) {
      if (user.onboarded || (user.schoolRegNo && user.phone)) {
        router.push("/portal/dashboard");
      }
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center p-4">
        <div className="max-w-md w-full border border-border bg-white p-6 sm:p-8 shadow-card rounded-sm font-sans flex items-center justify-center min-h-[300px]">
          <div className="text-xs font-mono text-muted-foreground animate-pulse text-center">
            Initializing your student profile...
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center p-4">
        <div className="max-w-md w-full border border-border bg-white p-6 sm:p-8 shadow-card rounded-sm font-sans text-center">
          <p className="text-xs text-muted-foreground">Redirecting to login...</p>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(false);

    const formData = new FormData(e.currentTarget);
    const phone = formData.get("phone") as string;
    const schoolRegNo = formData.get("schoolRegNo") as string;
    const course = formData.get("course") as string;
    const year = formData.get("year") as string;
    const interest = formData.get("interest") as string;
    const bio = formData.get("bio") as string;

    // Client-side validations
    if (!phone.trim() || !schoolRegNo.trim() || !course.trim() || !year || !interest || !bio.trim()) {
      toast.error("Please fill in all details to complete your registration.");
      return;
    }

    setSubmitting(true);
    try {
      await completeOnboarding({
        phone,
        schoolRegNo,
        course,
        year,
        interest,
        bio,
      });
      toast.success("Welcome aboard! Registration completed.");
      router.push("/portal/dashboard");
    } catch (err: any) {
      toast.error(err.message || "Failed to save profile. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-surface w-full">
      <div className="max-w-xl w-full border border-border bg-white p-6 sm:p-8 shadow-card rounded-sm font-sans animate-fade-in">
        <div className="text-center mb-6">
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-sm bg-brand-blue/10 text-brand-blue mb-4">
            <GraduationCap size={22} />
          </div>
          <h2 className="font-display text-xl sm:text-2xl font-bold text-ink">Complete Your Profile</h2>
          <p className="mt-1.5 text-xs text-muted-foreground">
            Hi {user.name}, let's finish setting up your learning profile at Kisii University.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="block mb-1.5 text-xs font-semibold text-foreground/70">School Registration Number</span>
              <input
                required
                name="schoolRegNo"
                className={inputCls}
                placeholder="e.g. K13/12345/24"
              />
            </label>
            <label className="block">
              <span className="block mb-1.5 text-xs font-semibold text-foreground/70">Phone Number</span>
              <input
                required
                name="phone"
                type="tel"
                className={inputCls}
                placeholder="e.g. 0741 145 911"
              />
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="block mb-1.5 text-xs font-semibold text-foreground/70">Course / Department</span>
              <input
                required
                name="course"
                className={inputCls}
                placeholder="e.g. BSc Computer Science"
              />
            </label>
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
          </div>

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

          <label className="block">
            <span className="block mb-1.5 text-xs font-semibold text-foreground/70">Short Bio / Core Goals</span>
            <textarea
              required
              name="bio"
              rows={3}
              className={inputCls}
              placeholder="Tell us what you want to learn, or what skills you want to build (e.g., Virtual Assistant, Freelancing)..."
            />
          </label>

          <button
            type="submit"
            disabled={submitting}
            className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-sm bg-brand-blue hover:bg-brand-blue-dark disabled:bg-muted disabled:cursor-not-allowed px-6 py-3.5 text-xs font-bold text-white uppercase tracking-wider transition-colors shadow-sm"
          >
            {submitting ? "Saving Profile..." : "Complete Registration"} <ArrowRight size={13} />
          </button>
        </form>
      </div>
    </div>
  );
}

const inputCls =
  "w-full rounded-sm border border-input bg-surface px-3 py-2.5 text-xs outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 transition placeholder:text-muted-foreground/45";
