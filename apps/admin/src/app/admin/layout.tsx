"use client";

import { useState } from "react";
import { Sidebar } from "@ajira/shared/components/shared/Sidebar";
import { Menu, X } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface">
      {/* Sidebar - Desktop */}
      <div className="hidden md:block">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      </div>

      {/* Mobile Drawer Sidebar */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex">
          <div className="fixed inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
          <div className="relative flex-1 flex flex-col max-w-[260px] w-full bg-white animate-fade-in">
            <Sidebar collapsed={false} setCollapsed={() => {}} />
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-sm bg-surface border border-border text-ink hover:bg-surface-2 transition-colors z-50"
              aria-label="Close menu"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Main workspace container */}
      <div className={`transition-all duration-300 min-h-screen flex flex-col ${collapsed ? "md:pl-[72px]" : "md:pl-[240px]"}`}>
        {/* Mobile Header Bar */}
        <header className="md:hidden flex h-[80px] items-center justify-between px-4 border-b border-border bg-white sticky top-0 z-20 shrink-0">
          <span className="font-display font-black text-xs text-brand-gold uppercase tracking-wider">
            Advisory Board
          </span>
          <button
            onClick={() => setMobileOpen(true)}
            className="p-2 border border-border bg-surface text-ink hover:bg-surface-2 transition-colors rounded-sm"
            aria-label="Open menu"
          >
            <Menu size={18} />
          </button>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
