"use client";

import React, { useState } from "react";
import { soundEngine } from "./SoundEngine";
import { Terminal, Send, Mail, Copy, Check, MapPin, Sparkles, Globe, Share2 } from "lucide-react";

export default function ContactTerminal() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [transmitted, setTransmitted] = useState(false);

  const emailAddress = "jhinukr64@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    soundEngine.playCoin();
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    soundEngine.playLevelUp();
    setTransmitted(true);
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block px-3 py-1 bg-[#1d1633] border-2 border-[#ff3377] font-pixel text-[10px] text-[#ff3377] mb-3">
          [SUBSPACE COMMUNICATIONS]
        </div>
        <h2 className="font-pixel text-xl sm:text-2xl md:text-3xl text-white">
          INITIALIZE CONTACT // TRANSMISSION
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto mt-3 text-sm sm:text-base">
          Seeking an impactful full stack or AI/ML role? Beam your transmission directly into my terminal.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Comms & Portal Coordinates (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="pixel-box p-6 bg-[#0f1225] border-2 border-[#3d4773]">
            <div className="flex items-center gap-2 border-b border-[#232a48] pb-3 mb-5">
              <Terminal className="w-5 h-5 text-[#00f0ff]" />
              <span className="font-pixel text-xs text-white">COORDINATES & FREQUENCIES</span>
            </div>

            <div className="space-y-4 font-terminal text-base sm:text-lg">
              {/* Email Card */}
              <div className="p-3 bg-[#151a33] border border-[#2b3560] flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-slate-200 truncate">
                  <Mail className="w-4 h-4 text-[#ff3377] shrink-0" />
                  <span className="truncate">{emailAddress}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="pixel-btn text-[9px] px-2 py-1 ml-2 shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Location */}
              <div className="p-3 bg-[#151a33] border border-[#2b3560] flex items-center gap-2.5 text-slate-200">
                <MapPin className="w-4 h-4 text-[#facc15] shrink-0" />
                <span>Asansol / Kolkata, India (Open to Relocation & Remote)</span>
              </div>

              {/* Social Channels */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href="https://github.com/jhinuk1003"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEngine.playSelect()}
                  className="pixel-btn text-[9px] py-3 flex items-center justify-center gap-2 hover:text-[#00f0ff]"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GITHUB
                </a>

                <a
                  href="https://www.linkedin.com/in/jhinukroy0310"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEngine.playSelect()}
                  className="pixel-btn text-[9px] py-3 flex items-center justify-center gap-2 hover:text-[#ff3377]"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  LINKEDIN
                </a>
              </div>
            </div>

            {/* Recruiter Quick Guarantee Box */}
            <div className="mt-6 p-4 bg-[#181d3a] border-l-4 border-[#10b981]">
              <div className="font-pixel text-[10px] text-[#10b981] mb-1">
                FAST RESPONSE PROTOCOL:
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                I reply within 24 hours to prospective opportunities, technical discussions, and hackathon inquiries.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Terminal Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="pixel-box p-6 sm:p-8 bg-[#0a0d1d] border-2 border-[#ff3377] relative">
            {/* Terminal Top Frame */}
            <div className="flex items-center justify-between border-b-2 border-[#242b50] pb-3 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-none inline-block border border-black" />
                <span className="w-3 h-3 bg-yellow-500 rounded-none inline-block border border-black" />
                <span className="w-3 h-3 bg-green-500 rounded-none inline-block border border-black" />
                <span className="font-pixel text-[10px] text-slate-300 ml-2">
                  TRANSMISSION_TERMINAL_v1.0
                </span>
              </div>
              <span className="font-pixel text-[9px] text-[#00f0ff] animate-pulse">
                [READY FOR INPUT]
              </span>
            </div>

            {transmitted ? (
              <div className="p-8 bg-[#111736] border-2 border-[#10b981] text-center space-y-4">
                <div className="text-4xl">🚀</div>
                <h3 className="font-pixel text-lg text-[#10b981]">
                  TRANSMISSION TRANSMITTED SUCCESSFULLY!
                </h3>
                <p className="font-terminal text-lg text-slate-200">
                  Thank you, traveler! Your message has been logged in Jhinuk&apos;s queue. Expect a prompt response.
                </p>
                <button
                  onClick={() => {
                    soundEngine.playBlip();
                    setTransmitted(false);
                    setFormState({ name: "", email: "", message: "" });
                  }}
                  className="pixel-btn pixel-btn-accent text-[9px]"
                >
                  SEND ANOTHER TRANSMISSION
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-pixel text-[9px] text-slate-300 mb-1.5">
                    &gt; INPUT YOUR NAME / RECRUITER CODENAME:
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Alex (Engineering Lead @ Tech Corp)"
                    className="w-full bg-[#11152d] border-2 border-[#2c3661] p-3 text-white font-mono text-sm focus:border-[#00f0ff] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-pixel text-[9px] text-slate-300 mb-1.5">
                    &gt; RETURN FREQUENCY / EMAIL ADDRESS:
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="e.g. me@domain.com"
                    className="w-full bg-[#11152d] border-2 border-[#2c3661] p-3 text-white font-mono text-sm focus:border-[#00f0ff] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-pixel text-[9px] text-slate-300 mb-1.5">
                    &gt; MISSION BRIEF / MESSAGE:
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="We loved your work on Momiq & IIT KGP. Let's discuss a Full-Stack / AI-ML engineering role..."
                    className="w-full bg-[#11152d] border-2 border-[#2c3661] p-3 text-white font-mono text-sm focus:border-[#ff3377] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full pixel-btn pixel-btn-cyan text-xs py-3 mt-4 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> TRANSMIT MESSAGE TO JHINUK ROY
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
