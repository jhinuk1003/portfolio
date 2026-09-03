"use client";

import React, { useState } from "react";
import { soundEngine } from "./SoundEngine";
import { Briefcase, Award, CheckCircle, Flame, ExternalLink, Calendar, MapPin, Zap } from "lucide-react";

interface Quest {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  rank: "S RANK QUEST" | "A RANK QUEST";
  summary: string;
  highlights: string[];
  techStack: string[];
  rewards: string[];
  color: string;
}

export default function ExperienceLog() {
  const [activeQuest, setActiveQuest] = useState<string>("iitkgp");

  const quests: Quest[] = [
    {
      id: "iitkgp",
      role: "AI/ML Project Intern",
      organization: "IIT Kharagpur",
      location: "Kharagpur, India",
      period: "Technical Internship",
      rank: "S RANK QUEST",
      color: "#00f0ff",
      summary:
        "Engineered an AI/ML driven automated diagnostic system for Colourimetric Tuberculosis (TB) Detection leveraging isothermal LAMP reactions, drastically reducing diagnostic latency and manual error.",
      highlights: [
        "Architected and trained deep Convolutional Neural Networks (CNNs) for precise image classification of colourimetric reactions.",
        "Engineered heatmaps, saliency maps, and visual gradient overlays for clinical interpretability and validation.",
        "Built a responsive desktop GUI for live biological sample selection, camera frame acquisition, and instant analysis.",
        "Automated PDF and structured report generation, expediting clinical workflow from hours to seconds.",
        "Conducted extensive live testing and cross validation against lab ground truth benchmarks.",
      ],
      techStack: ["Python", "Keras / CNN", "OpenCV", "NumPy", "Matplotlib", "Seaborn", "Tkinter/PyQt GUI", "LAMP Reaction"],
      rewards: [
        "+3,500 EXP IN COMPUTER VISION",
        "TITLE: BIOMEDICAL AI RESEARCHER",
        "MASTERY IN CNN CLASSIFICATION & INTERPRETABILITY",
      ],
    },
    {
      id: "abp",
      role: "Trainee Intern",
      organization: "ABP (Ananda Bazar Patrika Group)",
      location: "Kolkata, India",
      period: "Technical Internship",
      rank: "S RANK QUEST",
      color: "#ff3377",
      summary:
        "Engineered real time log ingestion and anomaly detection systems on enterprise diagnostic platforms to safeguard mission critical publishing and media infrastructure.",
      highlights: [
        "Designed and deployed real time log analytics pipelines processing high velocity event streams across multi server environments.",
        "Implemented AI/ML anomaly detection models to identify subtle pattern shifts, latency spikes, and security vulnerabilities before escalation.",
        "Formulated root cause correlation algorithms linking isolated server alerts to systemic root issues.",
        "Significantly enhanced event processing throughput and operational reliability across production instances.",
        "Collaborated with senior DevOps and infrastructure teams to integrate alerts into active operational dashboards.",
      ],
      techStack: ["Python", "Pandas", "FastAPI", "Anomaly Detection", "REST APIs", "Event Processing", "EDA", "Linux"],
      rewards: [
        "+3,000 EXP IN DISTRIBUTED LOGIC",
        "TITLE: RELIABILITY & ANOMALY SPECIALIST",
        "REAL TIME LOG STREAMING PROFICIENCY",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block px-3 py-1 bg-[#161d36] border-2 border-[#ff3377] font-pixel text-[10px] text-[#ff3377] mb-3">
          [CAMPAIGN TIMELINE]
        </div>
        <h2 className="font-pixel text-xl sm:text-2xl md:text-3xl text-white">
          MAJOR QUEST LOG // EXPERIENCE
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto mt-3 text-sm sm:text-base">
          Real production deployments and elite research internships where software engineering met deep machine intelligence.
        </p>
      </div>

      {/* Quest Switcher Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {quests.map((quest) => (
          <button
            key={quest.id}
            onClick={() => {
              soundEngine.playSelect();
              setActiveQuest(quest.id);
            }}
            className={`pixel-btn text-xs px-5 py-3 ${
              activeQuest === quest.id
                ? "pixel-btn-accent shadow-[0_0_16px_rgba(255,51,119,0.5)]"
                : "text-slate-300"
            }`}
          >
            ⚔️ {quest.organization.toUpperCase()} // {quest.role.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Active Quest Card */}
      {quests.map((quest) => {
        if (quest.id !== activeQuest) return null;

        return (
          <div
            key={quest.id}
            className="pixel-box p-6 sm:p-8 bg-[#0d1021] border-2 border-[#3d4773] relative overflow-hidden"
          >
            {/* Top Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#222948] pb-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-pixel text-[10px] px-2 py-0.5 bg-[#facc15]/20 border border-[#facc15] text-[#facc15]">
                    {quest.rank}
                  </span>
                  <span className="font-pixel text-[10px] text-[#10b981] flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> QUEST STATUS: COMPLETED
                  </span>
                </div>
                <h3 className="font-pixel text-lg sm:text-2xl text-white">
                  {quest.role} @ <span className="text-[#00f0ff]">{quest.organization}</span>
                </h3>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-400 font-terminal">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-[#ff3377]" /> {quest.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-[#facc15]" /> {quest.period}
                </span>
              </div>
            </div>

            {/* Summary */}
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6 bg-[#13172e] p-4 border-l-4 border-[#00f0ff]">
              {quest.summary}
            </p>

            {/* Key Accomplishments & Bullet Points */}
            <div className="mb-6">
              <h4 className="font-pixel text-xs text-[#facc15] mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#facc15]" /> MISSION OBJECTIVES & DELIVERABLES:
              </h4>
              <ul className="space-y-2.5">
                {quest.highlights.map((hl, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm text-slate-300 leading-relaxed"
                  >
                    <span className="font-pixel text-[10px] text-[#00f0ff] mt-0.5 shrink-0">
                      [&gt;]
                    </span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className="font-pixel text-xs text-slate-400 mb-2">SPELLS & STACK EMPLOYED:</h4>
              <div className="flex flex-wrap gap-2">
                {quest.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-pixel text-[9px] px-2.5 py-1 bg-[#141930] border border-[#2e375c] text-[#00f0ff]"
                  >
                    #{tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Quest Loot / Rewards */}
            <div className="p-4 bg-[#141830] border-2 border-dashed border-[#facc15]/50">
              <div className="font-pixel text-[10px] text-[#facc15] mb-2 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#facc15]" /> QUEST REWARDS & PERMANENT BUFFS:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {quest.rewards.map((rew, i) => (
                  <div
                    key={i}
                    className="p-2 bg-[#0d1021] border border-[#2b3354] font-pixel text-[9px] text-slate-200 flex items-center gap-1.5"
                  >
                    <span className="text-[#facc15]">★</span> {rew}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
