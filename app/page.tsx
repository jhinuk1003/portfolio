"use client";

import React, { useState } from "react";
import PixelBackground from "./components/PixelBackground";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PacmanTab from "./components/PacmanTab";
import SkillsArmory from "./components/SkillsArmory";
import ExperienceLog from "./components/ExperienceLog";
import ProjectsSection from "./components/ProjectsSection";
import LeadershipSection from "./components/LeadershipSection";
import BlogSection from "./components/BlogSection";
import EducationSection from "./components/EducationSection";
import ContactTerminal from "./components/ContactTerminal";
import Footer from "./components/Footer";
import { soundEngine } from "./components/SoundEngine";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [crtActive, setCrtActive] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<string>("about");
  const [isAllSections, setIsAllSections] = useState<boolean>(false);

  const handleSelectTab = (tabId: string) => {
    soundEngine.playSelect();
    setActiveTab(tabId);
    if (isAllSections) {
      setIsAllSections(false);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen relative bg-[#090b14] text-slate-100 selection:bg-[#ff3377] selection:text-white">
      {/* Boot Loading Screen */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Background Pixel Starfield Canvas */}
      <PixelBackground />

      {/* CRT Scanline and Vignette Overlays (Toggleable) */}
      {crtActive && (
        <>
          <div className="crt-overlay" aria-hidden="true" />
          <div className="crt-vignette" aria-hidden="true" />
        </>
      )}

      {/* Main Content Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Single Unified Navigation Menu */}
        <Navbar
          crtActive={crtActive}
          onToggleCrt={() => setCrtActive((prev) => !prev)}
          activeTab={activeTab}
          onSelectTab={handleSelectTab}
          isAllSections={isAllSections}
          onToggleAllSections={() => setIsAllSections((prev) => !prev)}
        />

        {/* Tab Content Display */}
        <div className="flex-1">
          {isAllSections ? (
            /* Continuous All Sections View */
            <div className="space-y-12">
              <HeroSection onNavigateTab={handleSelectTab} />
              <PacmanTab />
              <SkillsArmory />
              <ExperienceLog />
              <ProjectsSection />
              <LeadershipSection />
              <BlogSection />
              <EducationSection />
              <ContactTerminal />
            </div>
          ) : (
            /* Single Dedicated Tab Arcade View */
            <div className="transition-all duration-200">
              {activeTab === "about" && (
                <HeroSection onNavigateTab={handleSelectTab} />
              )}
              {activeTab === "pacman" && <PacmanTab />}
              {activeTab === "skills" && <SkillsArmory />}
              {activeTab === "experience" && <ExperienceLog />}
              {activeTab === "projects" && <ProjectsSection />}
              {activeTab === "leadership" && <LeadershipSection />}
              {activeTab === "blog" && <BlogSection />}
              {activeTab === "education" && <EducationSection />}
              {activeTab === "contact" && <ContactTerminal />}
            </div>
          )}
        </div>

        <Footer />
      </div>
    </main>
  );
}
