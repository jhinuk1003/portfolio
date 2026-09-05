"use client";

import React, { useState } from "react";
import { soundEngine } from "./SoundEngine";
import { Trophy, Star, ShieldCheck, Sparkles, ExternalLink, Code2, Flame, Layers, Eye } from "lucide-react";

function GithubIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={`${className} fill-current`} viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

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
  githubUrl?: string;
  liveUrl?: string;
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
      githubUrl: "https://github.com/jhinuk1003/momiq_",
      liveUrl: "https://momiq.itsmejhinuk.in/",
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
      githubUrl: "https://github.com/jhinuk1003/Mineguard",
      liveUrl: "https://mineguard.itsmejhinuk.in/",
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
      githubUrl: "https://github.com/jhinuk1003/logbook_anomaly_detection",
      liveUrl: "https://logbook.itsmejhinuk.in/",
    },
    {
      id: "bloomeda",
      title: "BloomEDA",
      subtitle: "Bohemian Botanical Automated EDA & ML Artifact Inspector",
      bossName: "BOSS: UNTRUSTED DESERIALIZATION & BLACK-BOX ML ARTIFACTS",
      clearedBadge: "VICTORY // BOTANICAL DATA LABORATORY",
      accolades: [
        "🌸 Production-Grade Next.js 16 + FastAPI + Scikit-Learn Architecture",
        "🛡️ Zero-Trust AST Restricted Sandbox & Subprocess Isolation",
        "🌿 Handcrafted Bohemian Botanical Theme & Blooming Garden Animations",
      ],
      description:
        "An elegant botanical laboratory for exploring serialized machine-learning artifacts and tabular datasets. Users upload Python .pkl / .pickle files to securely uncover their structure, statistics, anomalies, and ML pipelines, blooming into an interactive botanical data garden dashboard with zero-trust sandboxed execution.",
      architecture: [
        "Next.js 16 and React frontend with custom Bohemian Botanical styling, Framer Motion blooming garden loading states, and interactive Recharts visualizations.",
        "FastAPI backend gateway orchestrating file upload validation, background worker scheduling, and progressive status polling.",
        "Isolated Python analysis subprocess with RestrictedUnpickler AST module whitelisting, actively blocking arbitrary code execution attacks (os.system, subprocess, eval).",
        "Deep exploratory data analysis engine calculating continuous histograms, Tukey 1.5×IQR outlier bounds, Pearson correlation heatmaps, and an explainable 0–100 data quality ledger.",
        "Safe ML introspection engine extracting hyperparameters, fitted schema attributes, and rendering interactive multi-stage pipeline flowcharts.",
      ],
      techStack: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Python",
        "FastAPI",
        "Pandas",
        "Scikit-Learn",
        "NumPy",
        "Recharts",
        "Framer Motion",
        "Tailwind CSS",
        "EDA",
      ],
      keyFeatures: [
        "Zero-Trust Sandboxed Deserialization with RestrictedUnpickler AST Whitelist",
        "Interactive Blooming Flower Loading Screen with 8 Live Analytical Milestones",
        "Deep Tabular Profiling with Continuous Histograms, Quartiles, Skewness & Kurtosis",
        "Interactive Scikit-Learn Pipeline Flowchart & ColumnTransformer Visualizer",
        "Explainable Botanical Data Quality Score (0–100) with Transparent Deduction Ledger",
        "Server-Side Paginated, Searchable, and Sortable Data Preview Table",
        "One-Click Multi-Format Export (Structured JSON, CSV Summary, and Printable Report)",
      ],
      themeColor: "#c86d51",
      githubUrl: "https://github.com/jhinuk1003/BloomEDA",
      liveUrl: "https://bloomeda.itsmejhinuk.in/",
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
              <div className="flex flex-wrap gap-1.5 mb-4">
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

              {/* Action Links */}
              <div className="grid grid-cols-2 gap-2 mb-2.5">
                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundEngine.playSelect()}
                    className="pixel-btn text-[9px] py-2 flex items-center justify-center gap-1.5 text-slate-200 hover:text-[#00f0ff] hover:border-[#00f0ff]"
                    title="View Source Code on GitHub"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-[#00f0ff]" /> CODE
                  </a>
                )}
                {proj.liveUrl && (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundEngine.playSelect()}
                    className="pixel-btn text-[9px] py-2 flex items-center justify-center gap-1.5 text-[#facc15] border-[#facc15]/60 hover:bg-[#facc15]/10"
                    title="Open Live Preview"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> DEMO
                  </a>
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

            {/* Project Quick Links Bar */}
            <div className="p-3.5 bg-[#141935] border-2 border-[#2f3a68] flex flex-wrap items-center justify-between gap-3 mb-6">
              <span className="font-pixel text-[9px] text-[#00f0ff] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#facc15]" /> PROJECT TELEMETRY CHANNELS:
              </span>
              <div className="flex items-center gap-2.5">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundEngine.playSelect()}
                    className="pixel-btn text-[9px] px-3 py-2 flex items-center gap-1.5 text-white hover:text-[#00f0ff] hover:border-[#00f0ff]"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-[#00f0ff]" /> [VIEW REPOSITORY]
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundEngine.playSelect()}
                    className="pixel-btn text-[9px] px-3 py-2 flex items-center gap-1.5 text-[#facc15] border-[#facc15] hover:bg-[#facc15]/10"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> [LIVE DEPLOYMENT]
                  </a>
                )}
              </div>
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
