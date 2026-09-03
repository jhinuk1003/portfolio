"use client";

import React, { useEffect, useRef } from "react";

export default function PixelBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Create 8-bit pixel stars
    const starCount = Math.floor((width * height) / 10000);
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height),
      size: Math.random() > 0.8 ? 3 : Math.random() > 0.5 ? 2 : 1,
      color:
        Math.random() > 0.85
          ? "#00f0ff"
          : Math.random() > 0.7
          ? "#ff3377"
          : Math.random() > 0.5
          ? "#facc15"
          : "#ffffff",
      speed: 0.15 + Math.random() * 0.35,
      twinkle: Math.random() * Math.PI * 2,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw pixel stars
      for (const s of stars) {
        s.y -= s.speed;
        if (s.y < 0) {
          s.y = height;
          s.x = Math.floor(Math.random() * width);
        }
        s.twinkle += 0.04;
        const opacity = 0.4 + Math.sin(s.twinkle) * 0.4;

        ctx.fillStyle = s.color;
        ctx.globalAlpha = Math.max(0.1, opacity);
        // Draw crisp pixel squares
        ctx.fillRect(Math.floor(s.x), Math.floor(s.y), s.size, s.size);
      }
      ctx.globalAlpha = 1.0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
    />
  );
}
