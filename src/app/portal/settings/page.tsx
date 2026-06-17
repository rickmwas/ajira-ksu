"use client";

import { usePortal } from "@/hooks/usePortalState";
import { Settings, Shield, User, Trash2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function PortalSettings() {
  const { user, logout } = usePortal();
  const router = useRouter();

  if (!user) return null;

  const handleResetProgress = () => {
    localStorage.removeItem("ajira_ksu_lessons");
    toast.success("Lessons progress cache reset successfully!");
    window.location.reload();
  };

  const handleLogout = () => {
    logout();
    router.push("/");
    toast.success("Logged out successfully.");
  };

  return (
    <div className="space-y-8 max-w-3xl mx-auto font-sans">
      <Reveal>
        <div className="border-b border-border pb-3 mb-6">
          <h2 className="font-display text-base font-bold uppercase tracking-wider text-ink">Account Settings</h2>
          <p className="text-xs text-muted-foreground mt-1">Configure security keys and storage preferences.</p>
        </div>
      </Reveal>

      <div className="space-y-5">
        {/* Profile Info block */}
        <Reveal>
          <div className="bg-white border border-border p-5 sm:p-6 rounded-sm shadow-card space-y-4">
            <h3 className="font-display font-bold text-sm text-ink flex items-center gap-2">
              <User size={15} className="text-brand-blue" /> Student Access Details
            </h3>
            <div className="grid grid-cols-2 gap-4 text-xs font-mono text-muted-foreground">
              <div>
                <span className="block text-[10px] font-semibold text-ink/40 uppercase mb-1">Registration ID</span>
                <span className="text-ink font-bold">{user.regId}</span>
              </div>
              <div>
                <span className="block text-[10px] font-semibold text-ink/40 uppercase mb-1">Role Assigned</span>
                <span className="text-brand-blue font-bold">[{user.role || "Member"}]</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Security Controls */}
        <Reveal>
          <div className="bg-white border border-border p-5 sm:p-6 rounded-sm shadow-card space-y-5">
            <h3 className="font-display font-bold text-sm text-ink flex items-center gap-2">
              <Shield size={15} className="text-brand-gold" /> System Actions
            </h3>

            <div className="space-y-4 text-xs">
              {/* Action 1 */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
                <div>
                  <h4 className="font-semibold text-ink">Reset Learning Progress</h4>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    Clear local storage checklist completion progress logs.
                  </p>
                </div>
                <button
                  onClick={handleResetProgress}
                  className="inline-flex rounded-sm border border-border bg-white hover:bg-surface-2 px-4 py-2 font-semibold text-ink transition-colors"
                >
                  Reset Progress
                </button>
              </div>

              {/* Action 2 */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-semibold text-brand-blue">Sign Out from Session</h4>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    Clear browser cookies and end the active dashboard session.
                  </p>
                </div>
                <button
                  onClick={handleLogout}
                  className="inline-flex rounded-sm bg-brand-blue hover:bg-brand-blue-dark text-white px-5 py-2 font-bold uppercase tracking-wider transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
