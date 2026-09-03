"use client";

import React, { useState } from "react";
import { soundEngine } from "./SoundEngine";
import { Trophy, Star, ShieldCheck, Sparkles, ExternalLink, Code2, Flame, Layers, Eye } from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  bossName: string;
  clearedBadge: string;
  accolades: string[];
  description: string;
  architecture: string[];
  techStack: string[];
  keyFeatures: string[];
  themeColor: string;
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "momiq",
      title: "Momiq",
      subtitle: "Pre/Post Maternal Monitoring & Health Intelligence Platform",
      bossName: "BOSS: MATERNAL CARE HEALTHCARE BOTTLENECK",
      clearedBadge: "VICTORY // 1ST PRIZE NATIONAL",
      accolades: [
        "🏆 1st Prize • National Level Design Fusion 2025",
        "🎖️ Qualified 2nd Round • Smart India Hackathon (SIH)",
      ],
      description:
        "An end to end maternal healthcare ecosystem designed for proactive monitoring during pre and post natal phases. Bridges vulnerable expecting mothers with healthcare professionals through automated symptom tracking, vital metrics anomaly detection, and emergency alerting.",
      architecture: [
        "Cross platform client interface built with React / React Native for frictionless clinical data logging.",
        "Secure backend REST API layer with PostgreSQL storage enforcing strict patient confidentiality.",
        "Rule based & statistical diagnostic triage logic alerting supervisors upon detecting dangerous maternal vitals trends.",
        "Automated diet, medication scheduling, and pediatric immunization reminders.",
      ],
      techStack: ["React", "React Native", "Python", "FastAPI / Django", "PostgreSQL", "REST APIs", "Data Analysis"],
      keyFeatures: [
        "Real time Maternal Vitals Monitoring & Triaging",
        "Automated Risk Escalation to Nearest Hospital Nodes",
        "Localized Multi Lingual Guidance for Rural Demographics",
        "Encrypted Health Records with Exportable Diagnostic PDFs",
      ],
      themeColor: "#ff3377",
    },
    {
      id: "mineguard",
      title: "Mine Guard",
      subtitle: "Digital Shift Handover Log & Underground Mining Safety System",
      bossName: "BOSS: INDUSTRIAL HAZARD & SHIFT MISCOMMUNICATION",
      clearedBadge: "VICTORY // DUAL HACKATHON WIN",
      accolades: [
        "🥈 1st Runner Up • Electronic Innovation 8.0 (2025)",
        "🥉 3rd Prize • SIH 2025 Internal Round",
      ],
      description:
        "A digitized, audit compliant shift handover and safety management platform engineered specifically for harsh underground mining operations where miscommunication directly endangers lives.",
      architecture: [
        "Interactive shift handover checklist with cryptographic officer sign offs and biometric verification.",
        "Hazard escalation pipeline linking underground sensor telemetry with above ground emergency command centers.",
        "Offline first sync capabilities ensuring shift logs persist during underground connectivity outages.",
        "Interactive dashboard for shift supervisors to inspect gas levels, tunnel structural safety, and equipment status.",
      ],
      techStack: ["React.js", "Python", "Django", "MySQL", "REST APIs", "Data Logging", "WebSockets"],
      keyFeatures: [
        "Tamper proof Digital Shift Handover Logs",
        "Real Time Hazard & Toxic Gas Alert Escalation",
        "Equipment Maintenance & Machinery Status Tracker",
        "Zero Loss Offline Data Synchronization for Underground Shafts",
      ],
      themeColor: "#00f0ff",
    },
    {
      id: "logbook",
      title: "LogBook Anomaly Detection",
      subtitle: "Intelligent Network & System Log Telemetry Diagnostic Engine",
      bossName: "BOSS: DISTRIBUTED INFRASTRUCTURE CRASHES",
      clearedBadge: "VICTORY // SYSTEM GUARDIAN",
      accolades: [
        "⚡ Built with React + Next.js + Python ML Pipeline",
        "🔍 Enterprise Log Pattern Recognition & Threat Prevention",
      ],
      description:
        "High performance log analysis and anomaly detection suite designed to parse, index, and monitor massive distributed network and server log streams. Detects abnormal access patterns, security breaches, and latent failure precursors before catastrophic downtimes occur.",
      architecture: [
        "Next.js and React frontend dashboard rendering real time streaming charts and interactive incident timelines.",
        "Python data processing engine executing statistical time series outlier detection and clustering on unstructured log entries.",
        "Dynamic severity scoring algorithm categorizing warnings, errors, memory leaks, and malicious intrusion patterns.",
        "Webhook notification dispatcher alerting DevOps on Slack/Email with root cause diagnostic context.",
      ],
      techStack: ["React.js", "Next.js", "Python", "FastAPI", "Pandas", "NumPy", "EDA", "REST APIs"],
      keyFeatures: [
        "Automated Unstructured Log Parsing & Vectorization",
        "Sub Second Real Time Anomaly Scoring & Alerts",
        "Interactive Root Cause Heatmaps & Timeline Scrubber",
        "Custom Regex Filter Rule Engine & Threshold Tuning",
      ],
      themeColor: "#facc15",
    },
  ];

  const handleOpenModal = (project: Project) => {
    soundEngine.playLevelUp();
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block px-3 py-1 bg-[#1a1738] border-2 border-[#facc15] font-pixel text-[10px] text-[#facc15] mb-3">
          [DUNGEON CLEARED // ARTIFACTS]
        </div>
        <h2 className="font-pixel text-xl sm:text-2xl md:text-3xl text-white">
          BOSS TIER PROJECTS & TROPHIES
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto mt-3 text-sm sm:text-base">
          Award winning systems built from scratch. Not toy tutorial clones : high stakes hackathon victors and production architectures.
        </p>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="pixel-box p-6 bg-[#0f1326] border-2 border-[#333d6b] flex flex-col justify-between hover:border-[#00f0ff] transition-all group relative"
          >
            {/* Boss Fight Cleared Header */}
            <div>
              <div className="flex items-center justify-between border-b border-[#242c50] pb-3 mb-4">
                <span className="font-pixel text-[8px] text-[#facc15] flex items-center gap-1">
                  <Star className="w-3 h-3 text-[#facc15] fill-[#facc15]" />
                  {proj.clearedBadge}
                </span>
                <span className="font-pixel text-[8px] text-slate-400">
                  RANK: S
                </span>
              </div>

              {/* Title & Boss Tag */}
              <div className="font-terminal text-xs text-red-400 mb-1">
                {proj.bossName}
              </div>
              <h3 className="font-pixel text-lg text-white mb-2 group-hover:text-[#00f0ff] transition-colors">
                {proj.title}
              </h3>
              <p className="font-terminal text-sm text-[#00f0ff] mb-4">
                {proj.subtitle}
              </p>

              {/* Accolades */}
              <div className="space-y-1.5 mb-5 bg-[#141830] p-3 border border-[#273056]">
                {proj.accolades.map((acc, i) => (
                  <div key={i} className="font-pixel text-[9px] text-[#facc15] flex items-center gap-1.5">
                    <span>{acc}</span>
                  </div>
                ))}
              </div>

              {/* Brief Description */}
              <p className="text-slate-300 text-xs leading-relaxed mb-5 line-clamp-3">
                {proj.description}
              </p>
            </div>

            {/* Bottom Stack & Button */}
            <div>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {proj.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="font-pixel text-[8px] px-2 py-0.5 bg-[#090b16] border border-[#2b3354] text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
                {proj.techStack.length > 4 && (
                  <span className="font-pixel text-[8px] px-1.5 py-0.5 text-[#00f0ff]">
                    +{proj.techStack.length - 4}
                  </span>
                )}
              </div>

              <button
                onClick={() => handleOpenModal(proj)}
                className="w-full pixel-btn text-[10px] py-2.5 flex items-center justify-center gap-2 group-hover:border-[#00f0ff]"
              >
                <Eye className="w-4 h-4" /> INSPECT BLUEPRINT
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Blueprint Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="pixel-box w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 bg-[#0e1224] border-4 border-[#00f0ff] shadow-[0_0_35px_rgba(0,240,255,0.4)]">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b-2 border-[#2b3560] pb-4 mb-6">
              <div>
                <div className="font-terminal text-sm text-red-400 mb-1">
                  {selectedProject.bossName}
                </div>
                <h3 className="font-pixel text-xl sm:text-2xl text-white">
                  {selectedProject.title}
                </h3>
                <div className="font-pixel text-[10px] text-[#00f0ff] mt-1">
                  {selectedProject.subtitle}
                </div>
              </div>
              <button
                onClick={() => {
                  soundEngine.playBlip();
                  setSelectedProject(null);
                }}
                className="pixel-btn text-[10px] px-3 py-1.5 border-red-500 text-red-400 hover:bg-red-950/40"
              >
                [X] CLOSE
              </button>
            </div>

            {/* Awards Pill */}
            <div className="p-3 bg-[#171c38] border-2 border-[#facc15] mb-6">
              <div className="font-pixel text-[10px] text-[#facc15] mb-1">
                ★ CERTIFIED HACKATHON ACCOLADES:
              </div>
              <div className="space-y-1">
                {selectedProject.accolades.map((acc, i) => (
                  <div key={i} className="font-pixel text-[9px] text-white">
                    {acc}
                  </div>
                ))}
              </div>
            </div>

            {/* In-depth Overview */}
            <div className="mb-6">
              <h4 className="font-pixel text-xs text-[#00f0ff] mb-2">SYSTEM OVERVIEW:</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            {/* Architecture Highlights */}
            <div className="mb-6">
              <h4 className="font-pixel text-xs text-[#facc15] mb-3">
                SYSTEM ARCHITECTURE & LOGIC:
              </h4>
              <ul className="space-y-2">
                {selectedProject.architecture.map((arch, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="font-pixel text-[10px] text-[#ff3377] mt-1 shrink-0">
                      [&gt;]
                    </span>
                    <span>{arch}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Features */}
            <div className="mb-6">
              <h4 className="font-pixel text-xs text-[#10b981] mb-3">KEY CAPABILITIES:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedProject.keyFeatures.map((feat, i) => (
                  <div
                    key={i}
                    className="p-2.5 bg-[#12162d] border border-[#2b3560] text-xs text-slate-200 flex items-center gap-2"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#10b981] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Full Tech Stack */}
            <div className="pt-4 border-t border-[#252c4c]">
              <div className="font-pixel text-[10px] text-slate-400 mb-2">
                ENGINEERED WITH:
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-pixel text-[9px] px-2.5 py-1 bg-[#141933] border border-[#00f0ff]/40 text-[#00f0ff]"
                  >
                    #{tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
