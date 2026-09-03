"use client";

import React from "react";
import { soundEngine } from "./SoundEngine";
import { Users, Crown, Flag, Cpu, Shield, Award, Sparkles, Terminal } from "lucide-react";

export default function LeadershipSection() {
  const guildStats = [
    { label: "GUILD MEMBERS", value: "6,000+", icon: Users, color: "#00f0ff" },
    { label: "FLAGSHIP HACKATHONS", value: "2 EDITIONS", icon: Flag, color: "#ff3377" },
    { label: "WORKSHOPS LED", value: "15+ SESSIONS", icon: Cpu, color: "#facc15" },
    { label: "ROLE", value: "VICE PRESIDENT", icon: Crown, color: "#10b981" },
  ];

  return (
    <section id="leadership" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block px-3 py-1 bg-[#1b1535] border-2 border-[#a855f7] font-pixel text-[10px] text-[#a855f7] mb-3">
          [GUILD LEADERSHIP // HIGH DIFFERENTIATOR]
        </div>
        <h2 className="font-pixel text-xl sm:text-2xl md:text-3xl text-white">
          THE GUILD MASTER // COMMUNITY IMPACT
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto mt-3 text-sm sm:text-base">
          Proven leadership commanding a 6,000+ member engineering ecosystem, organizing tier-1 hackathons, and fostering technology excellence.
        </p>
      </div>

      {/* Main Guild Banner */}
      <div className="pixel-box p-6 sm:p-10 bg-[#0f1225] border-2 border-[#543b8a] relative overflow-hidden">
        {/* Decorative corner crests */}
        <div className="absolute top-0 right-0 p-3 opacity-10 pointer-events-none">
          <Crown className="w-40 h-40 text-[#a855f7]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Role Details */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-3">
              <span className="p-2 bg-[#a855f7]/20 border-2 border-[#a855f7] text-[#a855f7]">
                <Crown className="w-6 h-6" />
              </span>
              <div>
                <span className="font-pixel text-[10px] text-[#facc15]">
                  OFFICIAL EXECUTIVE OFFICE
                </span>
                <h3 className="font-pixel text-lg sm:text-2xl text-white">
                  Vice President • Robotics Club
                </h3>
                <div className="font-terminal text-base text-[#00f0ff]">
                  Asansol Engineering College
                </div>
              </div>
            </div>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Serving as Vice President, I led one of the largest collegiate technical societies in the region with over <strong className="text-white">6,000+ registered members</strong>. My tenure focused on transforming passive students into active builders through hands on hackathons, robotics bootcamps, and cross discipline collaboration.
            </p>

            <div className="space-y-3">
              <div className="p-3 bg-[#161a33] border-l-4 border-[#ff3377] text-xs text-slate-300 leading-relaxed">
                <strong className="text-[#ff3377] font-pixel text-[10px] block mb-1">
                  ⚔️ HACKTROPICA 2025 & 2026 ORGANIZER
                </strong>
                Steered the ideation, technical guidelines, sponsorship outreach, and event execution for HackTropica : mobilizing hundreds of developers to solve real world industry challenges.
              </div>

              <div className="p-3 bg-[#161a33] border-l-4 border-[#00f0ff] text-xs text-slate-300 leading-relaxed">
                <strong className="text-[#00f0ff] font-pixel text-[10px] block mb-1">
                  🤖 TECHNICAL SESSIONS & WORKSHOPS
                </strong>
                Conducted deep dive hands on workshops on microcontrollers, robotics logic, sensors, and basic machine learning integration for aspiring engineers.
              </div>

              <div className="p-3 bg-[#161a33] border-l-4 border-[#facc15] text-xs text-slate-300 leading-relaxed">
                <strong className="text-[#facc15] font-pixel text-[10px] block mb-1">
                  🤝 CROSS FUNCTIONAL MENTORSHIP
                </strong>
                Mentored junior hackathon cohorts in prototyping, UI/UX polish, and pitch readiness : resulting in multiple regional and national podium finishes.
              </div>
            </div>
          </div>

          {/* Right Column: Guild Stat Blocks */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {guildStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="pixel-box p-4 bg-[#141830] border-2 border-[#333d69] text-center hover:border-[#00f0ff] transition-all"
                >
                  <Icon
                    className="w-6 h-6 mx-auto mb-2"
                    style={{ color: stat.color }}
                  />
                  <div
                    className="font-pixel text-base sm:text-lg mb-1"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </div>
                  <div className="font-pixel text-[8px] text-slate-400">
                    {stat.label}
                  </div>
                </div>
              );
            })}

            {/* Guild Mission Quote */}
            <div className="col-span-2 p-4 bg-[#17142b] border border-[#a855f7]/40 text-center">
              <div className="font-terminal text-sm sm:text-base text-slate-300 italic">
                &ldquo;True engineering leadership isn&apos;t just writing code : it&apos;s elevating an entire army of builders to innovate together.&rdquo;
              </div>
              <div className="font-pixel text-[8px] text-[#facc15] mt-2">
                • JHINUK ROY, VP ROBOTICS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
