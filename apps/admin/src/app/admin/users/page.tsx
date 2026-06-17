"use client";

import { useState } from "react";
import { UserCheck, Shield, Search, UserMinus } from "lucide-react";
import { Reveal } from "@ajira/shared/components/site/Reveal";
import { toast } from "sonner";

interface MemberRecord {
  id: string;
  name: string;
  email: string;
  role: "Member" | "Executive" | "Admin";
  course: string;
  year: string;
  regId: string;
}

const mockMembers: MemberRecord[] = [
  {
    id: "mem-1",
    name: "Onyango Michael",
    email: "onyango@kisiiuniversity.ac.ke",
    role: "Member",
    course: "BSc Computer Science",
    year: "3rd Year",
    regId: "KSU/AJR/2026/1842",
  },
  {
    id: "mem-2",
    name: "Denis Kiplagat",
    email: "executive@kisiiuniversity.ac.ke",
    role: "Executive",
    course: "BSc IT Department",
    year: "4th Year",
    regId: "KSU/AJR/2026/8944",
  },
  {
    id: "mem-3",
    name: "Dr. Teresa Abuya",
    email: "admin@kisiiuniversity.ac.ke",
    role: "Admin",
    course: "ICT Department Patron",
    year: "Postgraduate Advisory",
    regId: "KSU/AJR/2020/0001",
  },
];

export default function UserManagement() {
  const [members, setMembers] = useState<MemberRecord[]>(mockMembers);
  const [search, setSearch] = useState("");

  const handleRoleChange = (memberId: string, name: string, nextRole: "Member" | "Executive" | "Admin") => {
    setMembers((prev) =>
      prev.map((m) => (m.id === memberId ? { ...m, role: nextRole } : m))
    );
    toast.success(`Updated role for ${name} to ${nextRole}!`);
  };

  const filtered = members.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.email.toLowerCase().includes(search.toLowerCase()) ||
      m.regId.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8 max-w-5xl mx-auto font-sans">
      <Reveal>
        <div className="border-b border-border pb-3 mb-6">
          <h2 className="font-display text-base font-bold uppercase tracking-wider text-ink">User Role Management</h2>
          <p className="text-xs text-muted-foreground mt-1">Audit active student profiles and assign chapter roles.</p>
        </div>
      </Reveal>

      {/* Filter and Search Box */}
      <Reveal>
        <div className="flex items-center gap-3 bg-white border border-border px-3.5 py-2 rounded-sm max-w-md shadow-card">
          <Search size={16} className="text-muted-foreground/60" />
          <input
            type="text"
            className="w-full bg-transparent outline-none text-xs text-ink placeholder:text-muted-foreground/45"
            placeholder="Search by name, email, or registration number..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </Reveal>

      {/* Members Directory Grid */}
      <Reveal delay={40}>
        <div className="bg-white border border-border rounded-sm shadow-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-surface text-[10px] font-mono uppercase tracking-wider text-muted-foreground/75 border-b border-border">
                <tr>
                  <th className="p-4 font-semibold">Student / ID</th>
                  <th className="p-4 font-semibold">Department & Year</th>
                  <th className="p-4 font-semibold">Current Role</th>
                  <th className="p-4 font-semibold text-right">Assign Next Role</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {filtered.map((m) => (
                  <tr key={m.id} className="hover:bg-surface/30 transition-colors">
                    <td className="p-4 space-y-1">
                      <div className="font-bold text-ink">{m.name}</div>
                      <div className="text-[10px] text-muted-foreground truncate">{m.email}</div>
                      <div className="text-[9px] font-mono text-muted-foreground/50">{m.regId}</div>
                    </td>
                    <td className="p-4 space-y-1">
                      <div className="text-ink">{m.course}</div>
                      <div className="text-[10px] text-muted-foreground font-mono">{m.year}</div>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center gap-1 rounded-sm px-2 py-0.5 text-[9px] font-mono font-bold uppercase border ${
                        m.role === "Admin"
                          ? "bg-brand-gold/10 border-brand-gold/20 text-brand-gold"
                          : m.role === "Executive"
                          ? "bg-brand-blue/10 border-brand-blue/20 text-brand-blue"
                          : "bg-surface border-border text-muted-foreground"
                      }`}>
                        {m.role}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <select
                        className="rounded-sm border border-input bg-surface px-2.5 py-1.5 text-[11px] font-semibold text-ink outline-none focus:border-brand-blue transition"
                        value={m.role}
                        onChange={(e) => handleRoleChange(m.id, m.name, e.target.value as any)}
                        aria-label={`Change role for ${m.name}`}
                      >
                        <option value="Member">Member</option>
                        <option value="Executive">Executive</option>
                        <option value="Admin">Admin</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
const inputCls =
  "rounded-sm border border-input bg-surface px-3 py-2 text-xs outline-none focus:border-brand-blue transition";
