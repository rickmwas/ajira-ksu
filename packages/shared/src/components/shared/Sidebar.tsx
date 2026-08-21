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
} from "lucide-react";
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
      className={`fixed top-0 bottom-0 left-0 z-30 flex flex-col justify-between border-r border-slate-200 bg-white transition-all duration-300 font-sans ${
        collapsed ? "w-[72px]" : "w-[240px]"
      }`}
    >
      {/* Header Logotype block */}
      <div>
        <div className="flex h-[90px] items-center justify-between px-4 border-b border-slate-200">
          {!collapsed && (
            <Link href="/" className="flex items-center gap-1.5 group shrink-0">
              <Image src={ajiraClubLogo} alt="Ajira Club Kisii University" width={220} height={44} className="h-[44px] w-auto object-contain" />
            </Link>
          )}
          {collapsed && (
            <div className="mx-auto text-center shrink-0">
              <Image src={ajiraClubMark} alt="Ajira Club Mark" width={32} height={32} className="h-8 w-auto" />
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden md:grid h-7 w-7 place-items-center rounded-md border border-slate-200 bg-slate-50 text-slate-500 hover:bg-slate-100 transition-colors shrink-0"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
          </button>
        </div>

        {/* User Card snapshot */}
        <div className={`p-4 border-b border-slate-200 bg-slate-50/70 ${collapsed ? "text-center" : ""}`}>
          <div className={`flex items-center ${collapsed ? "justify-center" : "gap-3"}`}>
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-[#0B192C] text-amber-400 text-xs font-bold font-display shadow-sm">
              {getInitials(user.name)}
            </div>
            {!collapsed && (
              <div className="min-w-0">
                <div className="font-display font-bold text-xs text-slate-900 truncate leading-tight">{user.name}</div>
                <div className="text-[11px] text-slate-500 truncate mt-0.5 font-medium">{user.regId}</div>
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-brand-blue bg-blue-50 px-2 py-0.5 rounded mt-1">
                  {user.role || "Member"}
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
                className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-brand-blue text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <Icon size={16} className="shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </Link>
            );
          })}

          {/* Admin routes section */}
          {isAdmin && (
            <div className="pt-4 mt-4 border-t border-slate-200">
              {!collapsed && (
                <div className="px-3 mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 font-display">
                  Leadership Panels
                </div>
              )}
              <Link
                href="/admin/users"
                title={collapsed ? "Admin Panels" : undefined}
                className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-xs font-semibold transition-all ${
                  pathname.startsWith("/admin")
                    ? "bg-amber-500 text-white shadow-sm"
                    : "text-slate-600 hover:bg-amber-50 hover:text-amber-700"
                }`}
              >
                <ShieldAlert size={16} className="shrink-0" />
                {!collapsed && <span>Advisory Board</span>}
              </Link>
            </div>
          )}
        </nav>
      </div>

      {/* Footer sign out */}
      <div className="p-3 border-t border-slate-200">
        <button
          onClick={handleLogout}
          title={collapsed ? "Sign Out" : undefined}
          className="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-xs text-rose-600 hover:bg-rose-50 font-bold transition-colors"
        >
          <LogOut size={16} className="shrink-0" />
          {!collapsed && <span>Sign Out</span>}
        </button>
      </div>
    </aside>
  );
}

