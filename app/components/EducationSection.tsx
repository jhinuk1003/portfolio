"use client";

import React from "react";
import { GraduationCap, Award, BookOpen, Sparkles, CheckCircle } from "lucide-react";

export default function EducationSection() {
  const academicRecords = [
    {
      degree: "B.Tech • Computer Science and Business System (CSBS)",
      institution: "Asansol Engineering College",
      timeline: "2022 to 2026",
      score: "7.39 CGPA",
      scoreLabel: "CURRENT CGPA",
      badge: "GRADUATION 2026",
      details:
        "Specialized curriculum marrying deep technical Computer Science (Data Structures, Algorithms, DBMS, Operating Systems, OOP, AI/ML) with modern Enterprise Business Systems (Product Management, Financial Analysis, Strategic Decision Making).",
      status: "Final Year / Ready to Deploy",
      color: "#00f0ff",
    },
    {
      degree: "Higher Secondary Certificate (Class XII)",
      institution: "State Board / STEM Curriculum",
      timeline: "Completed 2022",
      score: "87.8%",
      scoreLabel: "FINAL PERCENTAGE",
      badge: "FIRST CLASS DISTINCTION",
      details:
        "Intensive study of Physics, Chemistry, Mathematics, and Computer Science with solid analytical problem solving foundation.",
      status: "Completed with High Honors",
      color: "#ff3377",
    },
    {
      degree: "Secondary School Examination (Class X)",
      institution: "Foundational Board Curriculum",
      timeline: "Completed 2020",
      score: "86.57%",
      scoreLabel: "FINAL PERCENTAGE",
      badge: "EXCELLENCE IN STEM",
      details:
        "Comprehensive groundwork in Mathematics, Science, and Logical Reasoning, cementing a lifelong passion for computing.",
      status: "Completed with Distinction",
      color: "#facc15",
    },
  ];

  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block px-3 py-1 bg-[#1a1738] border-2 border-[#10b981] font-pixel text-[10px] text-[#10b981] mb-3">
          [GRAND ACADEMY ARCHIVES]
        </div>
        <h2 className="font-pixel text-xl sm:text-2xl md:text-3xl text-white">
          EDUCATION & ACADEMICS
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto mt-3 text-sm sm:text-base">
          Formal training and rigorous academic foundation spanning computer systems, business paradigms, and analytical problem solving.
        </p>
      </div>

      {/* Grid of Academic Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {academicRecords.map((rec) => (
          <div
            key={rec.degree}
            className="pixel-box p-6 bg-[#0f1326] border-2 border-[#313b63] flex flex-col justify-between hover:border-[#10b981] transition-all relative group"
          >
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-[#232a48] pb-3 mb-4">
                <span
                  className="font-pixel text-[8px] px-2 py-0.5 border"
                  style={{
                    borderColor: rec.color,
                    color: rec.color,
                    backgroundColor: `${rec.color}15`,
                  }}
                >
                  {rec.badge}
                </span>
                <span className="font-terminal text-sm text-slate-400">
                  {rec.timeline}
                </span>
              </div>

              {/* Title & Institution */}
              <h3 className="font-pixel text-sm sm:text-base text-white mb-1 group-hover:text-[#10b981] transition-colors leading-relaxed">
                {rec.degree}
              </h3>
              <div className="font-terminal text-sm text-[#00f0ff] mb-4">
                {rec.institution}
              </div>

              {/* Score Display */}
              <div className="p-3 bg-[#141933] border border-[#2c3761] mb-4 text-center">
                <div className="font-pixel text-[9px] text-slate-400">
                  {rec.scoreLabel}
                </div>
                <div
                  className="font-pixel text-xl sm:text-2xl mt-1"
                  style={{ color: rec.color }}
                >
                  {rec.score}
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-xs leading-relaxed mb-4">
                {rec.details}
              </p>
            </div>

            {/* Status */}
            <div className="pt-3 border-t border-[#202744] flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 font-terminal text-sm text-[#10b981]">
                <CheckCircle className="w-4 h-4 text-[#10b981]" /> {rec.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
