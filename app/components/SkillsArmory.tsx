"use client";

import React, { useState } from "react";
import { soundEngine } from "./SoundEngine";
import { 
  Code2, Database, Brain, Wrench, ShieldAlert, Sparkles, CheckCircle2,
  Terminal, Layers, Cpu, Server, FileCode, Box
} from "lucide-react";

interface SkillItem {
  name: string;
  category: "frontend" | "backend" | "aiml" | "tools";
  level: number;
  rarity: "LEGENDARY" | "EPIC" | "RARE";
  description: string;
  equippedIn: string[];
  icon: string;
}

export default function SkillsArmory() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  const skills: SkillItem[] = [
    // Frontend
    {
      name: "React.js",
      category: "frontend",
      level: 94,
      rarity: "LEGENDARY",
      description: "Component lifecycle, state primitives, hooks, context API, and modular architecture.",
      equippedIn: ["LogBook Anomaly Detection", "Momiq App", "Personal Portfolio"],
      icon: "⚛️",
    },
    {
      name: "Next.js",
      category: "frontend",
      level: 92,
      rarity: "LEGENDARY",
      description: "App router, SSR, SSG, server actions, metadata API, and fast full-stack rendering.",
      equippedIn: ["LogBook Anomaly Detection", "Web Dashboards"],
      icon: "▲",
    },
    {
      name: "TypeScript",
      category: "frontend",
      level: 88,
      rarity: "EPIC",
      description: "Strict static typing, interfaces, generics, and defensive front-end design.",
      equippedIn: ["Enterprise Web Platforms", "Next.js Codebases"],
      icon: "TS",
    },
    {
      name: "JavaScript",
      category: "frontend",
      level: 95,
      rarity: "LEGENDARY",
      description: "ES6+, asynchronous event loop, promises, closures, and DOM manipulation.",
      equippedIn: ["All Web Applications", "Interactive Visualizers"],
      icon: "JS",
    },
    {
      name: "React Native",
      category: "frontend",
      level: 82,
      rarity: "EPIC",
      description: "Cross-platform mobile UI development for Android and iOS systems.",
      equippedIn: ["Momiq Maternal Health App"],
      icon: "📱",
    },
    {
      name: "HTML5 / CSS3",
      category: "frontend",
      level: 98,
      rarity: "LEGENDARY",
      description: "Semantic web structure, responsive layouts, CSS Grid, Flexbox, and pixel perfection.",
      equippedIn: ["Every Web Experience"],
      icon: "🎨",
    },

    // Backend
    {
      name: "Python",
      category: "backend",
      level: 96,
      rarity: "LEGENDARY",
      description: "Core backend architecture, scripting, data manipulation, and machine learning pipelines.",
      equippedIn: ["IIT Kharagpur TB Detection", "ABP Diagnostics", "LogBook Engine"],
      icon: "🐍",
    },
    {
      name: "FastAPI",
      category: "backend",
      level: 90,
      rarity: "LEGENDARY",
      description: "High-concurrency asynchronous microservices, Pydantic validation, and OpenAPI documentation.",
      equippedIn: ["Real-time Inference APIs", "LogBook Backend"],
      icon: "⚡",
    },
    {
      name: "Django",
      category: "backend",
      level: 86,
      rarity: "EPIC",
      description: "Robust MVC architecture, ORM query optimization, and administrative dashboards.",
      equippedIn: ["Mine Guard Shift Management", "Enterprise Portals"],
      icon: "🛡️",
    },
    {
      name: "REST APIs",
      category: "backend",
      level: 94,
      rarity: "LEGENDARY",
      description: "Idempotent HTTP verbs, rate limiting, JWT token authentication, and JSON contracts.",
      equippedIn: ["ABP Log Stream", "Mine Guard Safety Logs"],
      icon: "🔌",
    },
    {
      name: "PostgreSQL",
      category: "backend",
      level: 89,
      rarity: "EPIC",
      description: "Relational database modeling, complex joins, indexing, and transactional ACID consistency.",
      equippedIn: ["LogBook Storage", "Momiq Clinical Records"],
      icon: "🐘",
    },
    {
      name: "MySQL",
      category: "backend",
      level: 87,
      rarity: "EPIC",
      description: "Relational table schemas, foreign key constraints, stored queries, and optimization.",
      equippedIn: ["Mine Guard Handover Records"],
      icon: "🐬",
    },

    // AI / ML / Data
    {
      name: "Keras & CNNs",
      category: "aiml",
      level: 91,
      rarity: "LEGENDARY",
      description: "Deep convolutional neural networks, transfer learning, feature maps, and image classification.",
      equippedIn: ["IIT Kharagpur TB Detection LAMP System"],
      icon: "🧠",
    },
    {
      name: "Hugging Face",
      category: "aiml",
      level: 84,
      rarity: "EPIC",
      description: "Transformer models, tokenizers, pipelines, and pretrained NLP/classification integration.",
      equippedIn: ["NLP Experiments", "Log Classification"],
      icon: "🤗",
    },
    {
      name: "Pandas",
      category: "aiml",
      level: 95,
      rarity: "LEGENDARY",
      description: "High-performance dataframes, aggregation, cleaning, time-series, and missing data imputation.",
      equippedIn: ["ABP Anomaly Detection", "IIT KGP Data Analysis"],
      icon: "🐼",
    },
    {
      name: "NumPy",
      category: "aiml",
      level: 93,
      rarity: "LEGENDARY",
      description: "N-dimensional array vectorization, linear algebra, broadcasting, and matrix math.",
      equippedIn: ["IIT KGP Image Preprocessing", "Statistical Models"],
      icon: "🔢",
    },
    {
      name: "EDA & Data Analysis",
      category: "aiml",
      level: 94,
      rarity: "LEGENDARY",
      description: "Exploratory data analysis, hypothesis testing, anomaly spotting, and feature engineering.",
      equippedIn: ["ABP Root Cause Analysis", "Mine Guard Audit Records"],
      icon: "📊",
    },
    {
      name: "Matplotlib & Seaborn",
      category: "aiml",
      level: 90,
      rarity: "EPIC",
      description: "Statistical distributions, confusion matrices, correlation heatmaps, and publication charts.",
      equippedIn: ["IIT KGP TB Reaction Heatmaps", "ABP Diagnostic Visuals"],
      icon: "📈",
    },

    // Tools & Engineering
    {
      name: "Git & GitHub",
      category: "tools",
      level: 92,
      rarity: "LEGENDARY",
      description: "Version control branching, merge workflows, PR code reviews, and CI/CD pipelines.",
      equippedIn: ["All Production Repositories"],
      icon: "🐙",
    },
    {
      name: "OOP & Architecture",
      category: "tools",
      level: 93,
      rarity: "LEGENDARY",
      description: "Object-oriented design patterns, SOLID principles, clean modular abstractions.",
      equippedIn: ["System Architecture Design"],
      icon: "🏛️",
    },
    {
      name: "C Programming",
      category: "tools",
      level: 85,
      rarity: "EPIC",
      description: "Low-level memory management, pointers, data structures, and foundational algorithms.",
      equippedIn: ["Academic CSBS Core", "Embedded Robotics"],
      icon: "⚙️",
    },
    {
      name: "Problem Solving",
      category: "tools",
      level: 95,
      rarity: "LEGENDARY",
      description: "Troubleshooting distributed bugs, root cause correlation, and edge case resolution.",
      equippedIn: ["ABP Diagnostic Platform", "Hackathons"],
      icon: "🧩",
    },
    {
      name: "Advanced Excel",
      category: "tools",
      level: 90,
      rarity: "EPIC",
      description: "Pivot tables, VLOOKUP/XLOOKUP, statistical macros, and business financial modeling.",
      equippedIn: ["Business Systems & Operations"],
      icon: "📑",
    },
    {
      name: "Notion & PowerPoint",
      category: "tools",
      level: 91,
      rarity: "RARE",
      description: "Sprint documentation, project roadmaps, investor pitch decks, and hackathon presentations.",
      equippedIn: ["SIH Presentations", "Robotics Club Operations"],
      icon: "📝",
    },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  const handleItemClick = (skill: SkillItem) => {
    soundEngine.playCoin();
    setSelectedSkill(skill);
  };

  const categories = [
    { id: "all", label: "ALL INVENTORY" },
    { id: "frontend", label: "FRONTEND WEAPONS" },
    { id: "backend", label: "BACKEND GRIMOIRE" },
    { id: "aiml", label: "AI / ML RELICS" },
    { id: "tools", label: "SYSTEM UTILITIES" },
  ];

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block px-3 py-1 bg-[#161d36] border-2 border-[#00f0ff] font-pixel text-[10px] text-[#00f0ff] mb-3">
          [EQUIPMENT & ATTRIBUTES]
        </div>
        <h2 className="font-pixel text-xl sm:text-2xl md:text-3xl text-white">
          THE TECH ARMORY
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto mt-3 text-sm sm:text-base">
          Battle tested toolkits across the full product spectrum. Click any item slot to inspect power stats and production deployments.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              soundEngine.playSelect();
              setActiveCategory(cat.id);
            }}
            className={`px-3 py-2 font-pixel text-[9px] sm:text-[10px] transition-all border-2 cursor-pointer ${
              activeCategory === cat.id
                ? "bg-[#00f0ff] text-black border-white shadow-[0_0_12px_rgba(0,240,255,0.6)]"
                : "bg-[#121528] text-slate-400 border-[#283256] hover:text-white hover:border-[#3e4d82]"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid of Inventory Slots */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {filteredSkills.map((skill) => {
          const isSelected = selectedSkill?.name === skill.name;
          const rarityColor =
            skill.rarity === "LEGENDARY"
              ? "border-[#facc15] text-[#facc15]"
              : skill.rarity === "EPIC"
              ? "border-[#ff3377] text-[#ff3377]"
              : "border-[#00f0ff] text-[#00f0ff]";

          return (
            <div
              key={skill.name}
              onClick={() => handleItemClick(skill)}
              onMouseEnter={() => soundEngine.playBlip(800, 0.02)}
              className={`pixel-box p-3 bg-[#101428] cursor-pointer transition-all duration-150 relative group ${
                isSelected
                  ? "border-[#00f0ff] bg-[#161c3b] scale-105 shadow-[0_0_16px_rgba(0,240,255,0.5)] z-10"
                  : "hover:border-slate-400 hover:bg-[#141a33]"
              }`}
            >
              {/* Rarity Corner Dot */}
              <div
                className={`absolute top-1 right-1 w-2 h-2 ${
                  skill.rarity === "LEGENDARY"
                    ? "bg-[#facc15]"
                    : skill.rarity === "EPIC"
                    ? "bg-[#ff3377]"
                    : "bg-[#00f0ff]"
                }`}
              />

              <div className="text-2xl sm:text-3xl mb-2 text-center group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>

              <div className="font-pixel text-[9px] text-white text-center truncate mb-1">
                {skill.name}
              </div>

              <div className="font-pixel text-[8px] text-slate-400 text-center">
                LVL {skill.level}
              </div>

              {/* Mini progress bar */}
              <div className="w-full bg-[#090b14] h-1.5 mt-2 border border-[#2b3354] overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#00f0ff] to-[#ff3377]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Item Inspector Panel */}
      {selectedSkill && (
        <div className="mt-8 pixel-box p-6 bg-[#0e1224] border-2 border-[#00f0ff] shadow-[0_0_24px_rgba(0,240,255,0.2)]">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#262f52] pb-4 mb-4">
            <div className="flex items-center gap-3">
              <span className="text-4xl">{selectedSkill.icon}</span>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-pixel text-base sm:text-lg text-white">
                    {selectedSkill.name}
                  </h3>
                  <span
                    className={`font-pixel text-[8px] px-2 py-0.5 border ${
                      selectedSkill.rarity === "LEGENDARY"
                        ? "border-[#facc15] text-[#facc15] bg-[#facc15]/10"
                        : selectedSkill.rarity === "EPIC"
                        ? "border-[#ff3377] text-[#ff3377] bg-[#ff3377]/10"
                        : "border-[#00f0ff] text-[#00f0ff] bg-[#00f0ff]/10"
                    }`}
                  >
                    [{selectedSkill.rarity}]
                  </span>
                </div>
                <div className="font-terminal text-sm sm:text-base text-[#00f0ff]">
                  PROFICIENCY LEVEL: {selectedSkill.level} / 100
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                soundEngine.playBlip();
                setSelectedSkill(null);
              }}
              className="font-pixel text-[9px] text-slate-400 hover:text-white border border-slate-600 px-2 py-1"
            >
              [CLOSE INSPECTOR ✕]
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="font-pixel text-[10px] text-[#facc15] mb-2 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> ITEM LORE & USAGE
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {selectedSkill.description}
              </p>
            </div>

            <div>
              <div className="font-pixel text-[10px] text-[#10b981] mb-2 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> EQUIPPED IN MISSIONS / PROJECTS
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedSkill.equippedIn.map((proj) => (
                  <span
                    key={proj}
                    className="font-pixel text-[9px] px-2.5 py-1.5 bg-[#141933] border border-[#2b3560] text-slate-200"
                  >
                    ⚔️ {proj}
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
