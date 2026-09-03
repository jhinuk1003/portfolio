# 👾 JHINUK ROY // RETRO ARCADE PORTFOLIO 🕹️

<div align="center">

![Pixel Banner](https://img.shields.io/badge/STATUS-READY_TO_DEPLOY-10b981?style=for-the-badge&logo=statuspage&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript_5-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

<p align="center">
  <b>An interactive, 8-bit retro arcade-themed portfolio showcasing full-stack engineering, AI/ML research, leadership quests, and playable retro mini-games.</b>
</p>

[🎮 Live Demo](#-live-demo) • [⚡ Features](#-features) • [🛠️ Tech Stack](#️-tech-stack) • [🕹️ Local Setup](#️-getting-started) • [📬 Contact](#-contact--connect)

</div>

---

## 🌟 Overview

Welcome to the character sheet and arcade command deck of **Jhinuk Roy** — an entry-level **Full-Stack & AI/ML Engineer** (Class of 2026, Computer Science & Business Systems at Asansol Engineering College).

Bridging responsive modern client interfaces with resilient Python/FastAPI backends and mission-critical machine learning pipelines, this portfolio gamifies the developer experience with pixel art aesthetics, procedural 8-bit sound effects, and interactive boss battles.

---

## 🎮 Features & Highlights

### 🕹️ 1. Retro Arcade Visuals & CRT Aesthetics
- **Scanline Overlays & CRT Flicker**: Authentic retro CRT monitor effects with authentic scanline styling.
- **Dynamic Pixel Starfield**: Animated particle matrix generating a retro space arcade ambiance.
- **NES / GameBoy Palettes**: Curated cyberpunk neon and retro arcade color harmony.

### 🔊 2. Procedural Web Audio Sound Engine
- Zero external audio assets! Uses the browser's native **Web Audio API** (`AudioContext`) to procedurally synthesize 8-bit square and sawtooth waves.
- Realistic retro sound effects for clicks, tab switches, menu selects, game actions, and error alerts.
- Global sound toggle with persistent preference state.

### 👾 3. Built-in Playable Retro Pacman Game
- Authentic canvas-based arcade Pacman mini-game embedded right inside the portfolio.
- Includes tile grid pathfinding, ghost AI, collectible pellets, power-ups, score counters, sound effects, and victory celebrations via `canvas-confetti`.

### 💬 4. P1 Character Sheet & Dialogue System
- Interactive RPG character overview featuring stats (HP, MP, Attack, Defense), badges, and selectable dialogue trees detailing background, AI/ML capability, and full-stack rigor.

### ⚔️ 5. Skills Armory
- Categorized weapon racks detailing masteries across **Frontend**, **Backend**, **AI / Machine Learning**, **Databases & DevOps**, and **Core CS Foundations**.

### 🏆 6. Boss Battle Projects Showcase
- **Momiq**: Pre/Post Maternal Monitoring & Health Intelligence Platform
  - 🏆 *1st Prize • National Level Design Fusion 2025*
  - 🎖️ *Qualified 2nd Round • Smart India Hackathon (SIH)*
- **Mine Guard**: Digital Shift Handover Log & Underground Mining Safety System
  - 🥈 *1st Runner Up • Electronic Innovation 8.0 (2025)*
  - 🥉 *3rd Prize • SIH 2025 Internal Round*

### 📜 7. Quest Log (Experience) & Guild Hall (Leadership)
- **IIT Kharagpur**: Machine Learning Research Intern (CNN-based TB detection & GUI heatmaps).
- **ABP (Ananda Bazar Patrika)**: Full Stack & Log Intelligence Intern (Anomaly detection & root cause correlation).
- **Robotics Club, AEC**: Vice President leading a 6,000+ member technology guild.

### 📟 8. Interactive Contact Terminal
- Command-line style contact module allowing visitors to execute simulated commands (`help`, `clear`, `contact`, `socials`, `status`) and dispatch messages directly.

---

## 🛠️ Tech Stack

| Domain | Technologies & Libraries |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| **Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/), Custom CRT Scanline & Pixel CSS |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Audio** | Native Web Audio API (`AudioContext` Synthesizer) |
| **FX & Animation** | [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti), CSS Keyframe Animations |

---

## 📁 Project Structure

```text
portfolio/
├── app/
│   ├── components/
│   │   ├── BlogSection.tsx       # Tech articles & knowledge logs
│   │   ├── ContactTerminal.tsx   # Interactive CLI contact interface
│   │   ├── EducationSection.tsx  # Academic background & coursework
│   │   ├── ExperienceLog.tsx     # Quest timeline (IIT KGP, ABP, etc.)
│   │   ├── Footer.tsx            # Arcade footer & status credits
│   │   ├── HeroSection.tsx       # Character sheet & dialogue trees
│   │   ├── LeadershipSection.tsx # Guild Hall & club leadership
│   │   ├── LoadingScreen.tsx     # 8-bit booting & cartridge load screen
│   │   ├── Navbar.tsx            # Retro HUD & tab navigation
│   │   ├── PacmanGame.tsx        # Canvas-based playable Pacman game
│   │   ├── PacmanTab.tsx         # Arcade cabinet wrapper
│   │   ├── PixelBackground.tsx   # Dynamic animated starfield canvas
│   │   ├── ProjectsSection.tsx   # Boss battle project displays
│   │   ├── SkillsArmory.tsx      # Inventory of tools & proficiencies
│   │   └── SoundEngine.ts        # Procedural Web Audio sound generator
│   ├── globals.css               # Pixel fonts, CRT scanlines, arcade utilities
│   ├── layout.tsx                # Root metadata & font initialization
│   └── page.tsx                  # Main arcade hub & tab orchestration
├── public/
│   ├── favicon.svg               # Pixel arcade icon
│   └── jhinuk_pixel_avatar.jpg   # 8-bit hero portrait
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🕹️ Getting Started

### Prerequisites

Ensure you have installed:
- [Node.js](https://nodejs.org/) (version 18.18 or higher recommended)
- [npm](https://www.npmjs.com/) or any compatible package manager (`pnpm`, `yarn`, `bun`)

### 1. Clone the Repository

```bash
git clone https://github.com/jhinuk1003/portfolio.git
cd portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Launch Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to start playing and exploring the portfolio!

### 4. Build for Production

```bash
npm run build
npm run start
```

---

## 🚀 Deployment

The portfolio is optimized for zero-configuration deployment on [Vercel](https://vercel.com/):

1. Push your code to GitHub.
2. Import the repository in [Vercel](https://vercel.com/new).
3. The framework preset will automatically detect **Next.js**.
4. Click **Deploy**.

Alternatively, it can be deployed on platforms such as Cloudflare Pages, Netlify, or AWS Amplify.

---

## 📬 Contact & Connect

- **Developer**: Jhinuk Roy
- **Role**: SDE / AI & ML Engineer
- **GitHub**: [@jhinuk1003](https://github.com/jhinuk1003)
- **Repository**: [jhinuk1003/portfolio](https://github.com/jhinuk1003/portfolio)

---

<div align="center">
  <sub>Designed & engineered with 💛 and 8-bit nostalgia by Jhinuk Roy. Powered by Next.js & React.</sub>
</div>
