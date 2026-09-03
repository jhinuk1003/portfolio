"use client";

import React, { useState } from "react";
import Image from "next/image";
import { soundEngine } from "./SoundEngine";
import { Sparkles, Shield, Cpu, Award, Users, Terminal, ArrowRight, Mail } from "lucide-react";

interface HeroSectionProps {
  onNavigateTab?: (tab: string) => void;
}

export default function HeroSection({ onNavigateTab }: HeroSectionProps) {
  const [selectedDialogue, setSelectedDialogue] = useState<number>(0);

  const dialogueOptions = [
    {
      id: 0,
      label: "PROFILE OVERVIEW",
      speaker: "JHINUK ROY",
      text: "Greetings! I'm Jhinuk, an entry level Full•Stack & AI/ML Engineer from Asansol Engineering College. I don't just complete tutorials : I engineer end to end architectures bridging responsive Next.js/React frontends with Python/FastAPI backends and intelligent ML pipelines.",
    },
    {
      id: 1,
      label: "AI / ML CAPABILITY",
      speaker: "JHINUK ROY",
      text: "At IIT Kharagpur, I developed CNN based image classification for TB detection with live test heatmaps and GUI sample selection. At ABP, I built anomaly detection and root cause correlation for real time log streams. I turn raw data into mission critical decisions.",
    },
    {
      id: 2,
      label: "FULL•STACK RIGOR",
      speaker: "JHINUK ROY",
      text: "My stack moves fluidly between TypeScript, React, Next.js on the client, and Python (Django, FastAPI), REST APIs, MySQL, and PostgreSQL on the server. I construct resilient database schemas and snappy reactive UIs.",
    },
    {
      id: 3,
      label: "LEADERSHIP & HACKATHONS",
      speaker: "JHINUK ROY",
      text: "As Vice President of AEC's Robotics Club, I led a 6,000+ member tech guild, organized hackathons, and built award winning solutions like Momiq (1st Prize Design Fusion, SIH Round 2) and Mine Guard (1st Runner Up Electronic Innovation).",
    },
  ];

  const handleSelectDialogue = (idx: number) => {
    soundEngine.playSelect();
    setSelectedDialogue(idx);
  };

  return (
    <section id="about" className="relative pt-4 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Top Banner Notice */}
      <div className="mb-8 p-3 bg-[#13172e] border-2 border-[#3b4268] flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-[#10b981] animate-ping" />
          <span className="font-pixel text-[10px] text-[#10b981]">
            STATUS: READY TO JOIN FULL•TIME / SDE INTERN
          </span>
        </div>
        <div className="font-terminal text-base text-slate-400 tracking-wider">
          CLASS OF 2026 // ASANSOL ENGINEERING COLLEGE // CSBS
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Character Card / Avatar (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="pixel-box p-5 bg-[#0f1224] border-2 border-[#434b75]">
            {/* Header Badge */}
            <div className="flex items-center justify-between border-b-2 border-[#2b3252] pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="font-pixel text-[10px] text-[#facc15]">P1 CHARACTER SHEET</span>
              </div>
              <span className="font-pixel text-[9px] px-2 py-0.5 bg-[#ff3377]/20 border border-[#ff3377] text-[#ff3377]">
                LVL 22
              </span>
            </div>

            {/* Avatar Image Frame */}
            <div className="relative group mx-auto w-full max-w-[340px] aspect-square border-4 border-[#30385c] bg-[#090b14] overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
              {/* Corner Pixel Notches */}
              <div className="absolute top-1 left-1 w-2 h-2 bg-[#00f0ff] z-10" />
              <div className="absolute top-1 right-1 w-2 h-2 bg-[#00f0ff] z-10" />
              <div className="absolute bottom-1 left-1 w-2 h-2 bg-[#00f0ff] z-10" />
              <div className="absolute bottom-1 right-1 w-2 h-2 bg-[#00f0ff] z-10" />

              <Image
                src="/jhinuk_pixel_avatar.jpg"
                alt="Jhinuk Roy • Pixel Art Avatar"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority
              />

              {/* Floating Overlay Badge */}
              <div className="absolute bottom-2 left-2 right-2 p-2 bg-[#090b14]/90 border border-[#00f0ff]/50 backdrop-blur-sm">
                <div className="font-pixel text-[10px] text-[#00f0ff] truncate">JHINUK ROY</div>
                <div className="font-terminal text-sm text-slate-300">FULL•STACK & AI/ML ENGINEER</div>
              </div>
            </div>

            {/* RPG Status Bars */}
            <div className="mt-5 space-y-3 font-pixel text-[9px]">
              {/* HP Bar */}
              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span className="text-[#ff3377] flex items-center gap-1">
                    <Shield className="w-3 h-3 inline" /> HP (ENGINEERING DRIVE)
                  </span>
                  <span>100 / 100</span>
                </div>
                <div className="pixel-bar-container h-4 w-full">
                  <div className="pixel-bar-fill bg-gradient-to-r from-[#ff3377] to-[#ff7597] w-full" />
                </div>
              </div>

              {/* MP Bar */}
              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span className="text-[#00f0ff] flex items-center gap-1">
                    <Cpu className="w-3 h-3 inline" /> MP (AI / ML & LOGIC)
                  </span>
                  <span>999 / 999</span>
                </div>
                <div className="pixel-bar-container h-4 w-full">
                  <div className="pixel-bar-fill bg-gradient-to-r from-[#00b4d8] to-[#00f0ff] w-full" />
                </div>
              </div>

              {/* EXP Bar */}
              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span className="text-[#facc15] flex items-center gap-1">
                    <Sparkles className="w-3 h-3 inline" /> EXP (FULL•STACK MASTERY)
                  </span>
                  <span>95% (CLASS OF 2026)</span>
                </div>
                <div className="pixel-bar-container h-4 w-full">
                  <div className="pixel-bar-fill bg-gradient-to-r from-[#d97706] to-[#facc15] w-[95%]" />
                </div>
              </div>
            </div>

            {/* Core Trait Badges */}
            <div className="mt-5 pt-4 border-t border-[#232a48] grid grid-cols-2 gap-2">
              <div className="p-2 bg-[#14182e] border border-[#2c3558] text-center">
                <div className="font-pixel text-[9px] text-[#facc15]">CGPA</div>
                <div className="font-pixel text-xs text-white mt-1">7.39 / 10</div>
              </div>
              <div className="p-2 bg-[#14182e] border border-[#2c3558] text-center">
                <div className="font-pixel text-[9px] text-[#10b981]">COMMUNITY</div>
                <div className="font-pixel text-xs text-white mt-1">6,000+ GUILD</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Intro & Interactive Dialogue Box (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Main Title & Bio */}
          <div className="pixel-box p-6 sm:p-8 bg-[#0e1224] border-2 border-[#3d4672]">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-pixel text-[10px] text-[#ff3377] px-2 py-1 bg-[#ff3377]/15 border border-[#ff3377]">
                PORTFOLIO v2.6
              </span>
              <span className="font-pixel text-[10px] text-slate-400">
                // SYSTEM ONLINE
              </span>
            </div>

            <h1 className="font-pixel text-xl sm:text-2xl md:text-3xl text-white leading-relaxed mb-4">
              I’m <span className="text-[#00f0ff] drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]">Jhinuk Roy</span>.
              <br />
              <span className="text-base sm:text-xl text-[#facc15]">
                Full•Stack + AI/ML + Data Applications.
              </span>
            </h1>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-6">
              A computer science and business systems graduate positioning herself at the convergence of
              <strong className="text-white"> responsive client interfaces</strong>,
              <strong className="text-white"> high throughput backends</strong>, and
              <strong className="text-white"> intelligent machine learning models</strong>. Not confined to a single silo : built to solve real world problems from database to deployment.
            </p>

            {/* Quick Stat Pill Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <div className="p-3 bg-[#141930] border-l-4 border-[#00f0ff] flex items-center gap-3">
                <Cpu className="w-5 h-5 text-[#00f0ff] shrink-0" />
                <div>
                  <div className="font-pixel text-[10px] text-white">IIT KGP & ABP INTERN</div>
                  <div className="text-xs text-slate-400">CNN models & real time log analytics</div>
                </div>
              </div>

              <div className="p-3 bg-[#141930] border-l-4 border-[#ff3377] flex items-center gap-3">
                <Award className="w-5 h-5 text-[#ff3377] shrink-0" />
                <div>
                  <div className="font-pixel text-[10px] text-white">NATIONAL HACKATHON WINS</div>
                  <div className="text-xs text-slate-400">1st Prize Design Fusion, SIH finalist</div>
                </div>
              </div>

              <div className="p-3 bg-[#141930] border-l-4 border-[#facc15] flex items-center gap-3">
                <Users className="w-5 h-5 text-[#facc15] shrink-0" />
                <div>
                  <div className="font-pixel text-[10px] text-white">VICE PRESIDENT, ROBOTICS</div>
                  <div className="text-xs text-slate-400">Organized HackTropica & 6,000+ tech guild</div>
                </div>
              </div>

              <div className="p-3 bg-[#141930] border-l-4 border-[#10b981] flex items-center gap-3">
                <Terminal className="w-5 h-5 text-[#10b981] shrink-0" />
                <div>
                  <div className="font-pixel text-[10px] text-white">FULL•STACK ARSENAL</div>
                  <div className="text-xs text-slate-400">React, Next.js, Python, Django, FastAPI</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => {
                  soundEngine.playAction();
                  onNavigateTab?.("projects");
                }}
                className="pixel-btn pixel-btn-cyan text-xs"
              >
                VIEW BOSS PROJECTS <ArrowRight className="w-4 h-4 ml-1 inline" />
              </button>
              <button
                onClick={() => {
                  soundEngine.playCoin();
                  onNavigateTab?.("contact");
                }}
                className="pixel-btn pixel-btn-accent text-xs"
              >
                INITIALIZE CONTACT <Mail className="w-4 h-4 ml-1 inline" />
              </button>
              <button
                onClick={() => {
                  soundEngine.playSelect();
                  onNavigateTab?.("experience");
                }}
                className="pixel-btn text-xs"
              >
                QUEST LOG
              </button>
            </div>
          </div>

          {/* Interactive RPG Dialogue Box */}
          <div className="pixel-box p-5 bg-[#090c1a] border-2 border-[#ff3377]">
            <div className="flex items-center justify-between border-b border-[#2b3356] pb-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#ff3377]" />
                <span className="font-pixel text-[10px] text-[#ff3377]">
                  RPG DIALOGUE SYSTEM // QUICK INQUIRIES
                </span>
              </div>
              <span className="font-pixel text-[9px] text-slate-400">CLICK TO INQUIRE</span>
            </div>

            {/* Selectable Dialogue Options */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
              {dialogueOptions.map((opt, i) => (
                <button
                  key={opt.id}
                  onClick={() => handleSelectDialogue(i)}
                  className={`p-2 font-pixel text-[9px] text-left transition-all border ${
                    selectedDialogue === i
                      ? "bg-[#ff3377]/20 border-[#ff3377] text-white shadow-[0_0_10px_rgba(255,51,119,0.3)]"
                      : "bg-[#12162a] border-[#293152] text-slate-400 hover:text-slate-200 hover:border-slate-500"
                  }`}
                >
                  [{i + 1}] {opt.label}
                </button>
              ))}
            </div>

            {/* Dialogue Bubble */}
            <div className="p-4 bg-[#11162d] border-2 border-[#2b3560] relative">
              <div className="font-pixel text-[10px] text-[#00f0ff] mb-2 flex items-center gap-2">
                <span>&gt; {dialogueOptions[selectedDialogue].speaker}:</span>
              </div>
              <p className="font-terminal text-lg sm:text-xl text-slate-200 leading-relaxed min-h-[70px]">
                &ldquo;{dialogueOptions[selectedDialogue].text}&rdquo;
              </p>
              <div className="mt-3 flex justify-end">
                <span className="font-pixel text-[9px] text-[#facc15] animate-bounce">
                  ▼ SELECT ANY TOPIC TO INQUIRE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
