"use client";

import React, { useState } from "react";
import { soundEngine } from "./SoundEngine";
import { BookOpen, Calendar, Clock, ArrowRight, X, Sparkles, Code2, Tag } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
  tags: string[];
}

export default function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const posts: BlogPost[] = [
    {
      id: "abp-anomaly-detection",
      title: "Real Time Anomaly Detection in High Velocity Log Streams",
      subtitle: "Engineering scalable diagnostic pipelines during my internship at ABP",
      category: "DISTRIBUTED LOGIC & AI",
      readTime: "5 MIN READ",
      date: "OCTOBER 2025",
      summary:
        "Enterprise media and publishing infrastructure generates millions of discrete event logs per minute. Here is how we formulated machine learning anomaly detection and root cause correlation algorithms to isolate latent failures before service disruption occurred.",
      content: [
        "High velocity event streams present a dual challenge: high ingest throughput and subtle multi-variate variance. Standard regex rules often generate alarm fatigue or overlook nuanced latency degradations.",
        "During my internship at ABP, our team tackled this by constructing an end to end pipeline utilizing Python and FastAPI microservices. We parsed unstructured log strings into vectorized feature vectors incorporating timestamp delta, HTTP status clusters, and resource exhaustion signatures.",
        "We implemented statistical rolling window outlier detection alongside classification heuristics. By correlating disparate log events across microservice boundaries, we created automated incident grouping, cutting triage latency by over 60 percent.",
        "A critical engineering lesson was that predictive accuracy is useless without explainability. Diagnostic engineers needed to see exactly which feature triggered the score, reinforcing the importance of interpretable models in operational reliability.",
      ],
      keyTakeaways: [
        "Pre-filtering log streams at the edge eliminates 80 percent of noisy telemetry.",
        "Root cause correlation requires multi-server dependency graph mapping.",
        "FastAPI async workers easily sustain thousands of concurrent telemetry webhooks.",
      ],
      tags: ["Python", "FastAPI", "Anomaly Detection", "Distributed Systems", "EDA"],
    },
    {
      id: "iit-kgp-tb-detection",
      title: "Colourimetric TB Detection via CNN and LAMP Reactions",
      subtitle: "Deep learning computer vision for biomedical diagnostics at IIT Kharagpur",
      category: "COMPUTER VISION & AI",
      readTime: "6 MIN READ",
      date: "DECEMBER 2025",
      summary:
        "Tuberculosis remains a critical global health crisis where rapid point of care diagnostics save lives. At IIT Kharagpur, I developed Convolutional Neural Network models to classify subtle color shifts in isothermal LAMP reactions with automated report generation.",
      content: [
        "Loop Mediated Isothermal Amplification (LAMP) is an affordable alternative to PCR that amplifies DNA at a constant temperature. The outcome is indicated by subtle colorimetric dye transitions, which can be difficult for non-specialist field workers to interpret consistently under varied ambient lighting.",
        "To eliminate human error, I trained a custom Convolutional Neural Network (CNN) in Keras to categorize camera frames of test samples into positive, negative, or inconclusive states.",
        "To make the model resilient against field illumination shifts, we implemented rigorous data augmentation pipelines including color jitter, HSV thresholding, and lighting normalization.",
        "We paired the model with Class Activation Mapping (CAM) and heatmaps so pathologists could visually verify which tube sector influenced the neural decision. Finally, I built an interactive desktop GUI for sample acquisition and automated PDF report generation.",
      ],
      keyTakeaways: [
        "HSV color space separation outperforms standard RGB for chemical dye reaction analysis.",
        "Model interpretability heatmaps build clinical trust in automated diagnostics.",
        "Point of care AI must operate smoothly on low resource local compute hardware.",
      ],
      tags: ["Keras", "CNN", "Computer Vision", "Biomedical AI", "Python", "NumPy"],
    },
    {
      id: "momiq-sih-architecture",
      title: "From SIH Prototype to National Winner: Engineering Momiq",
      subtitle: "Architectural decisions behind our award winning maternal health platform",
      category: "FULL-STACK ARCHITECTURE",
      readTime: "4 MIN READ",
      date: "JANUARY 2026",
      summary:
        "Momiq won 1st Prize at National Level Design Fusion 2025 and qualified for Round 2 of Smart India Hackathon. Here is the full-stack architecture that made our pre and post maternal monitoring system stand out.",
      content: [
        "Maternal healthcare in rural and semi-urban communities suffers from delayed symptom reporting and fragmented prenatal logs. When conceiving Momiq, our goal was to engineer a responsive, compassionate interface backed by robust clinical triaging logic.",
        "On the frontend, we leveraged React and React Native to ensure cross-platform accessibility across budget smartphones. We prioritized low latency inputs, offline caching, and intuitive localized visual iconography.",
        "The backend utilizes Python REST APIs connected to an ACID compliant PostgreSQL database. We designed deterministic rule based diagnostic engines that track blood pressure trends, fetal kick counts, and maternal glucose spikes.",
        "Winning 1st Prize reinforced that user centered product design matters as much as technical rigor. Presenting clean live architectures to hackathon juries requires articulating trade-offs clearly.",
      ],
      keyTakeaways: [
        "Offline first data persistence is non-negotiable for rural health applications.",
        "Deterministic triaging paired with anomaly thresholds delivers safe clinical alerts.",
        "Clear architectural presentation wins national hackathon podiums.",
      ],
      tags: ["React", "React Native", "PostgreSQL", "Hackathons", "Product Design"],
    },
    {
      id: "robotics-leadership-guild",
      title: "Leading a 6000+ Member Engineering Guild: Lessons as VP",
      subtitle: "Organizing HackTropica and building student tech culture at Asansol Engineering College",
      category: "LEADERSHIP & CULTURE",
      readTime: "5 MIN READ",
      date: "FEBRUARY 2026",
      summary:
        "Serving as Vice President of the Robotics Club at Asansol Engineering College meant leading 6,000+ aspiring engineers. Here are key insights on community building, organizing flagship hackathons, and empowering rookie coders.",
      content: [
        "Leading a collegiate society of over 6,000 members taught me that leadership is fundamentally an engineering problem: you need clear communication protocols, decentralized team ownership, and consistent feedback loops.",
        "When organizing HackTropica 2025 and 2026, we coordinated cross-functional student committees handling problem statement design, corporate sponsorship, technical infrastructure, and mentorship pipelines.",
        "We instituted hands-on workshops covering embedded microcontrollers, computer vision basics, and full-stack prototyping. Rather than lecturing from slides, we forced teams to deploy real working applications before the session ended.",
        "This experience directly shaped my approach as an engineer: code is only half the battle; bringing people together to build with purpose is what drives genuine impact.",
      ],
      keyTakeaways: [
        "Empower junior team members with ownership over dedicated subsystems.",
        "A culture of rapid prototyping builds confidence faster than theoretical courses.",
        "Great leaders actively clear blockers so their team can build without friction.",
      ],
      tags: ["Leadership", "Community", "HackTropica", "Mentorship", "Robotics Club"],
    },
  ];

  const handleOpenPost = (post: BlogPost) => {
    soundEngine.playLevelUp();
    setSelectedPost(post);
  };

  return (
    <section id="blog" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-block px-3 py-1 bg-[#1a1738] border-2 border-[#00f0ff] font-pixel text-[10px] text-[#00f0ff] mb-3">
          [QUEST CHRONICLES // TECH SCROLLS]
        </div>
        <h2 className="font-pixel text-xl sm:text-2xl md:text-3xl text-white">
          TECHNICAL BLOG & ESSAYS
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto mt-3 text-sm sm:text-base">
          Reflections on real-world machine learning deployments, biomedical computer vision, full-stack architectures, and engineering leadership.
        </p>
      </div>

      {/* Grid of Blog Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <article
            key={post.id}
            onClick={() => handleOpenPost(post)}
            onMouseEnter={() => soundEngine.playBlip(750, 0.02)}
            className="pixel-box p-6 bg-[#0f1225] border-2 border-[#333c69] flex flex-col justify-between hover:border-[#00f0ff] cursor-pointer transition-all group"
          >
            <div>
              {/* Meta Top Bar */}
              <div className="flex items-center justify-between border-b border-[#232a48] pb-3 mb-4">
                <span className="font-pixel text-[9px] text-[#00f0ff] px-2 py-0.5 bg-[#00f0ff]/10 border border-[#00f0ff]/40">
                  {post.category}
                </span>
                <div className="flex items-center gap-3 font-terminal text-sm text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#facc15]" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#ff3377]" /> {post.readTime}
                  </span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="font-pixel text-base sm:text-lg text-white mb-2 group-hover:text-[#00f0ff] transition-colors leading-relaxed">
                {post.title}
              </h3>
              <p className="font-terminal text-base text-[#facc15] mb-3">
                {post.subtitle}
              </p>

              {/* Summary */}
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                {post.summary}
              </p>
            </div>

            <div>
              {/* Tag Badges */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-pixel text-[8px] px-2 py-0.5 bg-[#141830] border border-[#2b3560] text-slate-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Read Scroll Action */}
              <div className="flex items-center justify-between font-pixel text-[10px] text-[#00f0ff] pt-3 border-t border-[#202744]">
                <span>READ COMPLETE SCROLL</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="pixel-box w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 bg-[#0d1021] border-4 border-[#00f0ff] shadow-[0_0_35px_rgba(0,240,255,0.4)]">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b-2 border-[#2b3560] pb-4 mb-6">
              <div>
                <span className="font-pixel text-[9px] text-[#00f0ff] px-2 py-0.5 bg-[#00f0ff]/15 border border-[#00f0ff]/50 mb-2 inline-block">
                  {selectedPost.category}
                </span>
                <h3 className="font-pixel text-lg sm:text-xl text-white leading-relaxed">
                  {selectedPost.title}
                </h3>
                <div className="font-terminal text-base text-[#facc15] mt-1">
                  {selectedPost.subtitle}
                </div>
              </div>
              <button
                onClick={() => {
                  soundEngine.playBlip();
                  setSelectedPost(null);
                }}
                className="pixel-btn text-[9px] px-3 py-1.5 border-red-500 text-red-400 hover:bg-red-950/40 shrink-0 ml-4"
              >
                [X] CLOSE
              </button>
            </div>

            {/* Author Byline */}
            <div className="flex items-center gap-3 p-3 bg-[#13172e] border border-[#2b3560] mb-6">
              <div className="w-8 h-8 bg-[#ff3377] flex items-center justify-center font-pixel text-xs text-white">
                JR
              </div>
              <div className="font-terminal text-sm text-slate-300">
                BY <strong className="text-white">JHINUK ROY</strong> • {selectedPost.date} • {selectedPost.readTime}
              </div>
            </div>

            {/* Article Content Paragraphs */}
            <div className="space-y-4 text-slate-200 text-sm leading-relaxed mb-8">
              {selectedPost.content.map((para, i) => (
                <p key={i} className="bg-[#101428] p-4 border-l-2 border-[#333d6b]">
                  {para}
                </p>
              ))}
            </div>

            {/* Key Engineering Takeaways */}
            <div className="p-4 bg-[#141830] border-2 border-dashed border-[#facc15]/60 mb-6">
              <h4 className="font-pixel text-xs text-[#facc15] mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#facc15]" /> KEY ARCHITECTURAL TAKEAWAYS:
              </h4>
              <ul className="space-y-2">
                {selectedPost.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                    <span className="font-pixel text-[9px] text-[#00f0ff] mt-1 shrink-0">
                      [&gt;]
                    </span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-[#232a48]">
              {selectedPost.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-pixel text-[9px] px-2.5 py-1 bg-[#141933] border border-[#00f0ff]/40 text-[#00f0ff]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
