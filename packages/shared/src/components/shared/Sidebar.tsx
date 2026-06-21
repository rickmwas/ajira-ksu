"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { usePortal } from "@ajira/shared/hooks/usePortalState";
import {
  LayoutDashboard,
  User,
  BookOpen,
  Briefcase,
  Calendar,
  Bell,
  Settings,
  ShieldAlert,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Menu,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import ajiraClubLogo from "@ajira/shared/assets/ajiraLOGO.png";
import ajiraClubMark from "@ajira/shared/assets/ajira-club-logo-mark.svg";

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export function Sidebar({ collapsed, setCollapsed }: SidebarProps) {
  const { user, logout } = usePortal();
  const pathname = usePathname();
  const router = useRouter();

  if (!user) return null;

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  const menuItems = [
    { href: "/portal/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/portal/profile", label: "Profile", icon: User },
    { href: "/portal/learn", label: "Learning Hub", icon: BookOpen },
    { href: "/portal/opportunities", label: "Opportunities", icon: Briefcase },
    { href: "/portal/events", label: "Events", icon: Calendar },
    { href: "/portal/announcements", label: "Announcements", icon: Bell },
    { href: "/portal/settings", label: "Settings", icon: Settings },
  ];

  const isAdmin = user.role === "Executive" || user.role === "Admin";

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  return (
    <aside
      className={`fixed top-0 bottom-0 left-0 z-30 flex flex-col justify-between border-r border-border bg-white transition-all duration-300 font-sans ${
        collapsed ? "w-[72px]" : "w-[240px]"
      }`}
    >
      {/* Header Logotype block */}
      <div>
        <div className="flex h-[80px] items-center justify-between px-4 border-b border-border">
          {!collapsed && (
            <Link href="/" className="flex items-center gap-1.5 group shrink-0">
              <Image src={ajiraClubLogo} alt="Ajira Club Kisii University" width={220} height={44} className="h-11 w-auto object-contain" />
            </Link>
          )}
          {collapsed && (
            <div className="mx-auto text-center shrink-0">
              <Image src={ajiraClubMark} alt="Ajira Club Mark" width={36} height={36} className="h-9 w-auto" />
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden md:grid h-7 w-7 place-items-center rounded-sm border border-border bg-surface text-muted-foreground hover:bg-surface-2 transition-colors shrink-0"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <ChevronRight size={13} /> : <ChevronLeft size={13} />}
          </button>
        </div>

        {/* User Card snapshot */}
        <div className={`p-4 border-b border-border bg-surface/50 ${collapsed ? "text-center" : ""}`}>
          <div className={`flex items-center ${collapsed ? "justify-center" : "gap-3"}`}>
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-sm bg-brand-black text-white text-xs font-bold font-display">
              {getInitials(user.name)}
            </div>
            {!collapsed && (
              <div className="min-w-0">
                <div className="font-display font-bold text-xs text-ink truncate leading-tight">{user.name}</div>
                <div className="text-[9px] font-mono text-muted-foreground truncate mt-0.5">{user.regId}</div>
                <span className="inline-block text-[8px] font-mono font-bold uppercase tracking-wider text-brand-blue mt-1">
                  [{user.role || "Member"}]
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Nav list */}
        <nav className="p-3 space-y-1" aria-label="Portal Navigation">
          {menuItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                title={collapsed ? item.label : undefined}
                className={`flex items-center gap-3 rounded-sm px-3 py-2.5 text-xs transition-all ${
                  isActive
                    ? "bg-brand-blue/5 border border-brand-blue/15 font-semibold text-brand-blue"
                    : "border border-transparent hover:bg-surface text-foreground/75 hover:text-brand-blue"
                }`}
              >
                <Icon size={16} className="shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </Link>
            );
          })}

          {/* Admin routes section */}
          {isAdmin && (
            <div className="pt-4 mt-4 border-t border-border">
              {!collapsed && (
                <div className="px-3 mb-2 text-[9px] font-mono font-bold uppercase tracking-wider text-muted-foreground/60">
                  Leadership Panels
                </div>
              )}
              <Link
                href="/admin/users"
                title={collapsed ? "Admin Panels" : undefined}
                className={`flex items-center gap-3 rounded-sm px-3 py-2.5 text-xs transition-all ${
                  pathname.startsWith("/admin")
                    ? "bg-brand-gold/10 border border-brand-gold/30 font-semibold text-brand-black"
                    : "border border-transparent hover:bg-surface text-foreground/75 hover:text-brand-gold"
                }`}
              >
                <ShieldAlert size={16} className="shrink-0 text-brand-gold" />
                {!collapsed && <span>Advisory Board</span>}
              </Link>
            </div>
          )}
        </nav>
      </div>

      {/* Footer sign out */}
      <div className="p-3 border-t border-border">
        <button
          onClick={handleLogout}
          title={collapsed ? "Sign Out" : undefined}
          className="flex w-full items-center gap-3 rounded-sm px-3 py-2.5 text-xs text-brand-blue hover:bg-brand-blue/5 font-semibold transition-colors"
        >
          <LogOut size={16} className="shrink-0" />
          {!collapsed && <span>Sign Out</span>}
        </button>
      </div>
    </aside>
  );
}
