"use client";

import React, { useState, useEffect } from "react";
import { soundEngine } from "./SoundEngine";
import { Terminal, Sparkles, Gamepad2 } from "lucide-react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const messages = [
    "BOOTING 16-BIT RETRO ARCHITECTURE...",
    "INITIALIZING AI & NEURAL VISION DRIVERS...",
    "LOADING FULL-STACK ARSENAL & FASTAPI MODULES...",
    "FETCHING IIT KHARAGPUR & ABP QUEST LOGS...",
    "UNPACKING MOMIQ & MINE GUARD TROPHIES...",
    "WELCOME TO JHINUK ROY'S REALM • READY FOR PLAYER 1",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsReady(true);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 8) + 4;
        const capped = next > 100 ? 100 : next;
        const idx = Math.min(
          Math.floor((capped / 100) * (messages.length - 1)),
          messages.length - 1
        );
        setMessageIndex(idx);
        return capped;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [messages.length]);

  const handleEnter = () => {
    soundEngine.playLevelUp();
    onComplete();
  };

  return (
    <div className="fixed inset-0 z-[100] bg-[#070913] flex flex-col items-center justify-center p-4 select-none">
      {/* Background CRT Lines */}
      <div className="crt-overlay opacity-90 pointer-events-none" />

      <div className="max-w-md w-full pixel-box p-6 sm:p-8 bg-[#0e1124] border-4 border-[#00f0ff] shadow-[0_0_40px_rgba(0,240,255,0.4)] text-center relative z-10">
        {/* Top Header */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <Gamepad2 className="w-6 h-6 text-[#ff3377] animate-bounce" />
          <h1 className="font-pixel text-sm sm:text-base text-[#00f0ff] tracking-wider">
            JHINUK ROY • SYSTEM BOOT
          </h1>
        </div>

        {/* Pixel Icon / Mini Sprite */}
        <div className="w-16 h-16 mx-auto mb-6 bg-[#161a36] border-2 border-[#facc15] flex items-center justify-center shadow-[inset_0_0_12px_rgba(250,204,21,0.3)]">
          <span className="font-pixel text-2xl text-[#facc15] animate-pulse">
            ★
          </span>
        </div>

        {/* Animated Status Message */}
        <div className="min-h-[44px] flex items-center justify-center mb-5 px-2">
          <p className="font-pixel text-[9px] sm:text-[10px] text-slate-200 leading-relaxed">
            &gt; {messages[messageIndex]}
          </p>
        </div>

        {/* 8-bit Progress Bar */}
        <div className="pixel-bar-container h-6 w-full mb-3 bg-[#080912]">
          <div
            className="pixel-bar-fill bg-gradient-to-r from-[#00f0ff] via-[#facc15] to-[#ff3377] transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage Counter */}
        <div className="flex justify-between items-center font-terminal text-lg text-slate-400 mb-6">
          <span>STATUS: {progress < 100 ? "SYNCING..." : "ONLINE"}</span>
          <span className="font-pixel text-xs text-[#00f0ff]">{progress}%</span>
        </div>

        {/* Enter Button or Instruction */}
        {isReady ? (
          <button
            onClick={handleEnter}
            className="w-full pixel-btn pixel-btn-accent text-xs py-3.5 animate-pulse cursor-pointer shadow-[0_0_20px_rgba(255,51,119,0.7)]"
          >
            ▶ PRESS START TO ENTER
          </button>
        ) : (
          <div className="font-pixel text-[9px] text-[#facc15] animate-pixel-blink">
            LOADING PORTFOLIO MODULES...
          </div>
        )}

        {/* Bottom Subtext */}
        <div className="mt-6 pt-3 border-t border-[#232a48] font-pixel text-[8px] text-slate-500">
          FULL-STACK • PYTHON • AI/ML • CLASS OF 2026
        </div>
      </div>
    </div>
  );
}
