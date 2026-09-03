"use client";

import React from "react";
import PacmanGame from "./PacmanGame";
import { Gamepad2, Sparkles, Trophy, Flame } from "lucide-react";

export default function PacmanTab() {
  return (
    <section id="pacman" className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-block px-3 py-1 bg-[#1a1835] border-2 border-[#facc15] font-pixel text-[10px] text-[#facc15] mb-3">
          [RETRO ARCADE MACHINE • LEVEL 1]
        </div>
        <h2 className="font-pixel text-xl sm:text-2xl md:text-3xl text-white flex items-center justify-center gap-2">
          <Gamepad2 className="w-7 h-7 text-[#facc15] animate-bounce" />
          PAC•JHINUK RETRO ARCADE
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto mt-2 text-sm sm:text-base">
          Take a gaming break! Play an authentic 8•bit Pacman arcade game. Eat pellets, dodge the ghosts, and aim for the high score.
        </p>
      </div>

      {/* Arcade Cabinet Container */}
      <div className="max-w-xl mx-auto">
        <PacmanGame />
      </div>

      {/* Arcade Instructions & Lore */}
      <div className="max-w-xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-terminal">
        <div className="p-3 bg-[#11162e] border border-[#263158] text-slate-300">
          <div className="font-pixel text-[9px] text-[#00f0ff] mb-1">
            KEYBOARD SHORTCUTS
          </div>
          <div>Arrow Keys or W / A / S / D to navigate.</div>
          <div>Click the canvas or Start button to spawn.</div>
        </div>

        <div className="p-3 bg-[#11162e] border border-[#263158] text-slate-300">
          <div className="font-pixel text-[9px] text-[#ff3377] mb-1">
            POINTS & REWARDS
          </div>
          <div>Gold Pellets : +10 Points</div>
          <div>Pink Power Pellets : +50 Points</div>
        </div>
      </div>
    </section>
  );
}
