"use client";

import Image from "next/image";
import logoMinistryICT from "../../assets/logo-ministry-ict.svg";
import logoMastercard from "../../assets/logo-mastercard-foundation.svg";
import logoEmobilis from "../../assets/logo-emobilis.svg";
import ksuLogo from "../../assets/ksu-logo.png";

export function TopPartnerBar() {
  return (
    <div className="bg-[#0B192C] text-white border-b border-white/10 py-1.5 text-[11px] font-sans">
      <div className="container-x flex flex-col sm:flex-row items-center justify-between gap-2.5">
        {/* Left Side: National & Donor Co-Branding Badges */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-[10px] font-mono uppercase tracking-wider text-slate-300">
          <div className="flex items-center gap-2">
            <Image
              src={logoMinistryICT}
              alt="Ministry of ICT Kenya"
              width={20}
              height={20}
              className="h-4 w-auto object-contain brightness-0 invert opacity-90"
            />
            <span className="font-bold text-white">REPUBLIC OF KENYA</span>
            <span className="hidden md:inline text-slate-400">· MINISTRY OF ICT</span>
          </div>

          <span className="hidden sm:inline text-slate-600">|</span>

          <div className="flex items-center gap-1.5">
            <Image
              src={logoMastercard}
              alt="Mastercard Foundation"
              width={18}
              height={18}
              className="h-4 w-auto object-contain opacity-90"
            />
            <span className="font-semibold text-slate-200">MASTERCARD FOUNDATION</span>
          </div>

          <span className="hidden md:inline text-slate-600">|</span>

          <div className="hidden md:flex items-center gap-1.5">
            <Image
              src={logoEmobilis}
              alt="eMobilis"
              width={18}
              height={18}
              className="h-3.5 w-auto object-contain brightness-0 invert opacity-90"
            />
            <span className="font-semibold text-slate-300">EMOBILIS</span>
          </div>
        </div>

        {/* Right Side: University Chapter Tag */}
        <div className="flex items-center gap-2 shrink-0">
          <Image
            src={ksuLogo}
            alt="Kisii University Crest"
            width={18}
            height={18}
            className="h-4 w-auto object-contain"
          />
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#FFB800]">
            KISII UNIVERSITY CHAPTER
          </span>
        </div>
      </div>
    </div>
  );
}
