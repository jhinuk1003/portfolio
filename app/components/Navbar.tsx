"use client";

import React, { useState, useEffect } from "react";
import { Volume2, VolumeX, Monitor, Menu, X, Terminal, Layers } from "lucide-react";
import { soundEngine } from "./SoundEngine";

export interface NavTab {
  id: string;
  label: string;
}

interface NavbarProps {
  crtActive: boolean;
  onToggleCrt: () => void;
  activeTab: string;
  onSelectTab: (tabId: string) => void;
  isAllSections: boolean;
  onToggleAllSections: () => void;
}

export default function Navbar({
  crtActive,
  onToggleCrt,
  activeTab,
  onSelectTab,
  isAllSections,
  onToggleAllSections,
}: NavbarProps) {
  const [muted, setMuted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMuted(soundEngine.getMuted());

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleMute = () => {
    const isNowMuted = soundEngine.toggleMute();
    setMuted(isNowMuted);
  };

  const navTabs: NavTab[] = [
    { id: "about", label: "ABOUT" },
    { id: "pacman", label: "PACMAN" },
    { id: "skills", label: "ARMORY" },
    { id: "experience", label: "QUESTS" },
    { id: "projects", label: "PROJECTS" },
    { id: "leadership", label: "GUILD" },
    { id: "blog", label: "BLOG" },
    { id: "education", label: "ACADEMY" },
    { id: "contact", label: "CONTACT" },
  ];

  const handleTabClick = (tabId: string) => {
    soundEngine.playSelect();
    onSelectTab(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#0c0e1a]/95 backdrop-blur-md border-b-2 border-[#2b3252] shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
          : "bg-[#090b14]/80 border-b border-[#1c223a]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo & Level */}
        <div
          onClick={() => {
            soundEngine.playCoin();
            onSelectTab("about");
          }}
          className="flex items-center gap-2 group cursor-pointer select-none"
        >
          <div className="w-8 h-8 bg-[#ff3377] border-2 border-white flex items-center justify-center shadow-[2px_2px_0_#000]">
            <Terminal className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="font-pixel text-xs sm:text-sm text-white tracking-wider group-hover:text-[#00f0ff] transition-colors flex items-center gap-1">
              JHINUK.DEV
              <span className="w-2 h-3 bg-[#00f0ff] inline-block animate-pixel-blink" />
            </div>
            <div className="font-pixel text-[9px] text-[#00f0ff]/80 hidden sm:block">
              LVL.22 • AI & FULL•STACK
            </div>
          </div>
        </div>

        {/* Desktop Tab Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navTabs.map((tab) => {
            const isActive = !isAllSections && activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                onMouseEnter={() => soundEngine.playBlip(750, 0.03)}
                className={`px-2.5 py-1.5 font-pixel text-[9px] transition-all cursor-pointer border ${
                  isActive
                    ? "bg-[#00f0ff] text-black border-white shadow-[0_0_10px_rgba(0,240,255,0.7)] font-bold"
                    : "text-slate-300 hover:text-[#00f0ff] hover:bg-[#1a2038] border-transparent hover:border-[#00f0ff]/40"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>

        {/* Utility Controls (All Sections Toggle, Sound, CRT) */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Dual Mode: View All Sections / Single Tab */}
          <button
            onClick={() => {
              soundEngine.playAction();
              onToggleAllSections();
            }}
            className={`px-2 py-1.5 border-2 transition-all cursor-pointer flex items-center gap-1 font-pixel text-[8px] sm:text-[9px] ${
              isAllSections
                ? "border-[#ff3377] bg-[#ff3377]/20 text-[#ff3377] shadow-[0_0_10px_rgba(255,51,119,0.4)]"
                : "border-slate-700 bg-slate-800/40 text-slate-300 hover:border-slate-500"
            }`}
            title="Toggle between Single Tab View and All Sections View"
          >
            <Layers className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">
              {isAllSections ? "VIEW: ALL" : "VIEW: TABS"}
            </span>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={handleToggleMute}
            className={`p-2 border-2 transition-all cursor-pointer flex items-center gap-1 font-pixel text-[9px] ${
              muted
                ? "border-red-500/60 bg-red-950/30 text-red-400"
                : "border-[#00f0ff]/60 bg-[#00f0ff]/10 text-[#00f0ff] shadow-[0_0_10px_rgba(0,240,255,0.3)]"
            }`}
            title={muted ? "Unmute 8-Bit Audio" : "Mute Audio"}
            aria-label="Toggle retro audio"
          >
            {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            <span className="hidden md:inline">{muted ? "OFF" : "SFX"}</span>
          </button>

          {/* CRT Scanline Toggle */}
          <button
            onClick={() => {
              soundEngine.playAction();
              onToggleCrt();
            }}
            className={`p-2 border-2 transition-all cursor-pointer flex items-center gap-1 font-pixel text-[9px] ${
              crtActive
                ? "border-[#facc15] bg-[#facc15]/15 text-[#facc15] shadow-[0_0_10px_rgba(250,204,21,0.3)]"
                : "border-slate-700 bg-slate-800/50 text-slate-400"
            }`}
            title="Toggle CRT Retro Scanline Filter"
            aria-label="Toggle CRT Scanlines"
          >
            <Monitor className="w-4 h-4" />
            <span className="hidden md:inline">{crtActive ? "CRT" : "FLAT"}</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => {
              soundEngine.playBlip();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 border-2 border-[#3b4268] bg-[#161a2e] text-white hover:border-[#00f0ff]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e1122] border-b-4 border-[#ff3377] px-4 py-4 space-y-2">
          {navTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`w-full text-left block px-3 py-2 font-pixel text-xs border-l-4 transition-all ${
                !isAllSections && activeTab === tab.id
                  ? "bg-[#00f0ff]/20 text-[#00f0ff] border-[#00f0ff]"
                  : "text-slate-200 hover:text-[#00f0ff] hover:bg-[#1c2340] border-transparent"
              }`}
            >
              &gt; {tab.label}
            </button>
          ))}
          <div className="pt-2 border-t border-[#232a48] flex gap-2">
            <button
              onClick={() => {
                onToggleAllSections();
                setMobileMenuOpen(false);
              }}
              className="w-full text-center pixel-btn pixel-btn-accent text-[10px] py-2"
            >
              {isAllSections ? "SWITCH TO TAB VIEW" : "VIEW ALL SECTIONS"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
