"use client";

import { useState } from "react";
import { usePortal } from "@/hooks/usePortalState";
import { User, Save, RefreshCw } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { toast } from "sonner";

export default function StudentProfile() {
  const { user, register } = usePortal();
  const [loading, setLoading] = useState(false);

  if (!user) return null;

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const course = formData.get("course") as string;
    const year = formData.get("year") as string;
    const interest = formData.get("interest") as string;
    const bio = formData.get("bio") as string;

    setTimeout(() => {
      register({
        name,
        email,
        phone,
        course,
        year,
        interest,
        bio,
      });
      setLoading(false);
      toast.success("Profile saved successfully!");
    }, 1000);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 font-sans">
      <Reveal>
        <div className="border-b border-border pb-3 mb-6">
          <h2 className="font-display text-base font-bold uppercase tracking-wider text-ink">Student Profile</h2>
          <p className="text-xs text-muted-foreground mt-1">Manage your academic details and career track focus.</p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Avatar/Details Panel */}
        <div className="lg:col-span-4 bg-white border border-border p-6 rounded-sm text-center shadow-card">
          <Reveal>
            <div className="mx-auto grid h-20 w-20 place-items-center rounded-sm bg-brand-black text-white text-3xl font-bold font-display mb-4">
              {user.name
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")
                .toUpperCase()}
            </div>
            <h3 className="font-display text-base font-bold text-ink leading-tight">{user.name}</h3>
            <p className="text-[10px] font-mono text-muted-foreground mt-1 truncate">{user.email}</p>
            <div className="mt-4 pt-4 border-t border-border flex flex-col items-center gap-1">
              <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-brand-blue bg-brand-blue/5 border border-brand-blue/15 px-2.5 py-0.5 rounded-sm">
                Role: {user.role || "Member"}
              </span>
              <span className="text-[9px] font-mono text-muted-foreground/60 mt-1">Reg ID: {user.regId}</span>
            </div>
          </Reveal>
        </div>

        {/* Right Side: Update Profile inputs */}
        <div className="lg:col-span-8 bg-white border border-border p-6 rounded-sm shadow-card">
          <Reveal delay={40}>
            <form onSubmit={handleUpdate} className="grid gap-4.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="block mb-1.5 text-xs font-semibold text-foreground/70">Full Name</span>
                  <input required name="fullName" className={inputCls} defaultValue={user.name} />
                </label>
                <label className="block">
                  <span className="block mb-1.5 text-xs font-semibold text-foreground/70">Email Address</span>
                  <input required readOnly name="email" className={`${inputCls} bg-surface-2 cursor-not-allowed`} defaultValue={user.email} />
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="block mb-1.5 text-xs font-semibold text-foreground/70">Phone Number</span>
                  <input required name="phone" className={inputCls} defaultValue={user.phone} />
                </label>
                <label className="block">
                  <span className="block mb-1.5 text-xs font-semibold text-foreground/70">Course Track Focus</span>
                  <select required name="interest" className={inputCls} defaultValue={user.interest}>
                    {["Virtual Assistant", "Transcription", "Content Writing", "Web Design"].map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="block mb-1.5 text-xs font-semibold text-foreground/70">Department/Course</span>
                  <input required name="course" className={inputCls} defaultValue={user.course} />
                </label>
                <label className="block">
                  <span className="block mb-1.5 text-xs font-semibold text-foreground/70">Year of Study</span>
                  <select required name="year" className={inputCls} defaultValue={user.year}>
                    {["1st Year", "2nd Year", "3rd Year", "4th Year", "5th Year", "Postgraduate"].map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="block">
                <span className="block mb-1.5 text-xs font-semibold text-foreground/70">Short Bio / Core Goals</span>
                <textarea required name="bio" rows={3} className={inputCls} defaultValue={user.bio} />
              </label>

              <button
                disabled={loading}
                type="submit"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-sm bg-brand-blue hover:bg-brand-blue-dark disabled:bg-muted disabled:cursor-not-allowed px-6 py-3.5 text-xs font-bold text-white uppercase tracking-wider transition-colors mt-2"
              >
                {loading ? (
                  <>
                    <RefreshCw size={13} className="animate-spin" /> Saving Changes
                  </>
                ) : (
                  <>
                    Save Settings <Save size={13} />
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

const inputCls =
  "w-full rounded-sm border border-input bg-surface px-3 py-2.5 text-xs outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 transition placeholder:text-muted-foreground/45";
