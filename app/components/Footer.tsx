"use client";

import React from "react";
import { soundEngine } from "./SoundEngine";
import { ArrowUp, Heart, Terminal } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    soundEngine.playCoin();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t-2 border-[#202744] bg-[#070912] py-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#ff3377] border border-white flex items-center justify-center font-pixel text-xs text-white">
            ★
          </div>
          <div>
            <div className="font-pixel text-xs text-white">
              JHINUK ROY // PORTFOLIO
            </div>
            <div className="font-terminal text-sm text-slate-400">
              FULL•STACK • AI / ML • DATA ARCHITECTURE
            </div>
          </div>
        </div>

        <div className="text-center font-terminal text-base text-slate-400">
          ENGINEERED WITH <span className="text-[#ff3377]">♥</span> BY JHINUK ROY • 2026
        </div>

        <button
          onClick={scrollToTop}
          className="pixel-btn text-[9px] px-3 py-2 flex items-center gap-1.5"
          title="Return to top of page"
        >
          <ArrowUp className="w-3.5 h-3.5" /> TOP OF PAGE
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-6 pt-4 border-t border-[#181d33] text-center font-pixel text-[8px] text-slate-500">
        GAME OVER? NO, JUST LEVEL 1 // ASANSOL ENGINEERING COLLEGE // B.TECH CSBS
      </div>
    </footer>
  );
}
