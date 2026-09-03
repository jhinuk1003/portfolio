"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { soundEngine } from "./SoundEngine";
import { Gamepad2, RotateCcw, Trophy, Volume2, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Maximize2 } from "lucide-react";

export default function PacmanGame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [lives, setLives] = useState(3);

  // 15 columns x 13 rows maze grid
  // 1 = Wall, 0 = Dot, 2 = Empty, 3 = Power Pellet, 4 = Ghost House
  const initialMap = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,3,0,0,0,0,1,0,0,0,0,0,0,3,1],
    [1,0,1,1,0,0,1,0,0,1,1,0,1,0,1],
    [1,0,1,1,0,0,0,0,0,1,1,0,1,0,1],
    [1,0,0,0,0,1,1,1,0,0,0,0,0,0,1],
    [1,1,0,1,0,1,4,1,0,1,0,1,1,0,1],
    [2,0,0,1,0,1,4,1,0,1,0,0,0,0,2],
    [1,1,0,1,0,1,1,1,0,1,0,1,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,0,1,1,1,0,1,1,0,1,0,1],
    [1,0,0,1,0,0,1,0,0,1,0,0,1,0,1],
    [1,3,0,0,0,0,0,0,0,0,0,0,0,3,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  ];

  const gameState = useRef({
    grid: JSON.parse(JSON.stringify(initialMap)),
    pacman: { x: 7, y: 8, dx: 0, dy: 0, nextDx: 0, nextDy: 0, mouth: 0, mouthSpeed: 0.15 },
    ghosts: [
      { x: 6, y: 5, dx: 1, dy: 0, color: "#ff3377" }, // Blinky (Pink/Red)
      { x: 8, y: 5, dx: -1, dy: 0, color: "#00f0ff" }, // Inky (Cyan)
      { x: 7, y: 6, dx: 0, dy: -1, color: "#facc15" }, // Clyde (Yellow)
    ],
    tileSize: 24,
    totalDots: 0,
    dotsRemaining: 0,
    lastTime: 0,
    moveDelay: 170, // ms per tile move
    lastMoveTime: 0,
  });

  const resetGame = useCallback(() => {
    const grid = JSON.parse(JSON.stringify(initialMap));
    let dots = 0;
    for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[r].length; c++) {
        if (grid[r][c] === 0 || grid[r][c] === 3) dots++;
      }
    }

    gameState.current.grid = grid;
    gameState.current.totalDots = dots;
    gameState.current.dotsRemaining = dots;
    gameState.current.pacman = {
      x: 7,
      y: 8,
      dx: 0,
      dy: 0,
      nextDx: 0,
      nextDy: 0,
      mouth: 0,
      mouthSpeed: 0.15,
    };
    gameState.current.ghosts = [
      { x: 6, y: 5, dx: 1, dy: 0, color: "#ff3377" },
      { x: 8, y: 5, dx: -1, dy: 0, color: "#00f0ff" },
      { x: 7, y: 6, dx: 0, dy: -1, color: "#facc15" },
    ];
    setScore(0);
    setLives(3);
    setGameOver(false);
    setGameWon(false);
    setIsPlaying(true);
    soundEngine.playLevelUp();
  }, []);

  const handleDirection = useCallback((dx: number, dy: number) => {
    if (!isPlaying && !gameOver && !gameWon) {
      setIsPlaying(true);
    }
    gameState.current.pacman.nextDx = dx;
    gameState.current.pacman.nextDy = dy;
  }, [isPlaying, gameOver, gameWon]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["ArrowUp", "KeyW"].includes(e.code)) {
        e.preventDefault();
        handleDirection(0, -1);
      } else if (["ArrowDown", "KeyS"].includes(e.code)) {
        e.preventDefault();
        handleDirection(0, 1);
      } else if (["ArrowLeft", "KeyA"].includes(e.code)) {
        e.preventDefault();
        handleDirection(-1, 0);
      } else if (["ArrowRight", "KeyD"].includes(e.code)) {
        e.preventDefault();
        handleDirection(1, 0);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleDirection]);

  // Main Game Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const gameLoop = (time: number) => {
      const state = gameState.current;
      const { grid, pacman, ghosts, tileSize } = state;

      // Update positions at throttled interval
      if (isPlaying && !gameOver && !gameWon) {
        if (time - state.lastMoveTime > state.moveDelay) {
          state.lastMoveTime = time;

          // Check if next direction is clear
          const nextX = (pacman.x + pacman.nextDx + grid[0].length) % grid[0].length;
          const nextY = (pacman.y + pacman.nextDy + grid.length) % grid.length;

          if (grid[nextY] && grid[nextY][nextX] !== 1) {
            pacman.dx = pacman.nextDx;
            pacman.dy = pacman.nextDy;
          }

          // Move Pacman
          const targetX = (pacman.x + pacman.dx + grid[0].length) % grid[0].length;
          const targetY = (pacman.y + pacman.dy + grid.length) % grid.length;

          if (grid[targetY] && grid[targetY][targetX] !== 1) {
            pacman.x = targetX;
            pacman.y = targetY;

            // Eat Dot
            if (grid[pacman.y][pacman.x] === 0) {
              grid[pacman.y][pacman.x] = 2;
              state.dotsRemaining--;
              soundEngine.playBlip(750, 0.02);
              setScore((s) => {
                const newScore = s + 10;
                setHighScore((hs) => Math.max(hs, newScore));
                return newScore;
              });
            } else if (grid[pacman.y][pacman.x] === 3) {
              grid[pacman.y][pacman.x] = 2;
              state.dotsRemaining--;
              soundEngine.playCoin();
              setScore((s) => {
                const newScore = s + 50;
                setHighScore((hs) => Math.max(hs, newScore));
                return newScore;
              });
            }

            // Check Win Condition
            if (state.dotsRemaining <= 0) {
              setGameWon(true);
              setIsPlaying(false);
              soundEngine.playLevelUp();
            }
          }

          // Move Ghosts
          ghosts.forEach((g) => {
            const directions = [
              { dx: 1, dy: 0 },
              { dx: -1, dy: 0 },
              { dx: 0, dy: 1 },
              { dx: 0, dy: -1 },
            ];

            // Valid candidate directions
            const valid = directions.filter((d) => {
              const nx = (g.x + d.dx + grid[0].length) % grid[0].length;
              const ny = (g.y + d.dy + grid.length) % grid.length;
              // Avoid turning directly backwards unless stuck
              const isReverse = d.dx === -g.dx && d.dy === -g.dy;
              return grid[ny] && grid[ny][nx] !== 1 && !isReverse;
            });

            const chosen = valid.length > 0 ? valid[Math.floor(Math.random() * valid.length)] : { dx: -g.dx, dy: -g.dy };
            g.dx = chosen.dx;
            g.dy = chosen.dy;

            const nextGx = (g.x + g.dx + grid[0].length) % grid[0].length;
            const nextGy = (g.y + g.dy + grid.length) % grid.length;
            if (grid[nextGy] && grid[nextGy][nextGx] !== 1) {
              g.x = nextGx;
              g.y = nextGy;
            }

            // Check Collision with Pacman
            if (g.x === pacman.x && g.y === pacman.y) {
              soundEngine.playAction();
              setLives((prev) => {
                if (prev <= 1) {
                  setGameOver(true);
                  setIsPlaying(false);
                  return 0;
                }
                // Respawn pacman
                pacman.x = 7;
                pacman.y = 8;
                pacman.dx = 0;
                pacman.dy = 0;
                pacman.nextDx = 0;
                pacman.nextDy = 0;
                return prev - 1;
              });
            }
          });
        }
      }

      // RENDER CANVAS
      ctx.fillStyle = "#070914";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw Grid
      for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
          const cell = grid[r][c];
          const x = c * tileSize;
          const y = r * tileSize;

          if (cell === 1) {
            // Neon blue wall
            ctx.fillStyle = "#162044";
            ctx.fillRect(x, y, tileSize, tileSize);
            ctx.strokeStyle = "#00f0ff";
            ctx.lineWidth = 1.5;
            ctx.strokeRect(x + 1, y + 1, tileSize - 2, tileSize - 2);
          } else if (cell === 0) {
            // Normal dot
            ctx.fillStyle = "#facc15";
            ctx.fillRect(x + tileSize / 2 - 2, y + tileSize / 2 - 2, 4, 4);
          } else if (cell === 3) {
            // Energizer pellet
            const pulse = Math.sin(time / 150) * 2;
            ctx.fillStyle = "#ff3377";
            ctx.fillRect(x + tileSize / 2 - 4 - pulse / 2, y + tileSize / 2 - 4 - pulse / 2, 8 + pulse, 8 + pulse);
          }
        }
      }

      // Draw Pacman
      pacman.mouth += pacman.mouthSpeed;
      if (pacman.mouth > 0.3 || pacman.mouth < 0) {
        pacman.mouthSpeed = -pacman.mouthSpeed;
      }
      const px = pacman.x * tileSize + tileSize / 2;
      const py = pacman.y * tileSize + tileSize / 2;
      const angle =
        pacman.dx === 1 ? 0 : pacman.dx === -1 ? Math.PI : pacman.dy === 1 ? Math.PI / 2 : Math.PI * 1.5;

      ctx.beginPath();
      ctx.fillStyle = "#facc15";
      ctx.arc(px, py, tileSize / 2 - 2, angle + pacman.mouth * Math.PI, angle + (2 - pacman.mouth) * Math.PI);
      ctx.lineTo(px, py);
      ctx.fill();

      // Draw Ghosts
      ghosts.forEach((g) => {
        const gx = g.x * tileSize + 2;
        const gy = g.y * tileSize + 2;
        const gw = tileSize - 4;
        const gh = tileSize - 4;

        ctx.fillStyle = g.color;
        // Head & body
        ctx.beginPath();
        ctx.arc(gx + gw / 2, gy + gh / 2, gw / 2, Math.PI, 0, false);
        ctx.lineTo(gx + gw, gy + gh);
        ctx.lineTo(gx, gy + gh);
        ctx.fill();

        // Eyes
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(gx + gw * 0.2, gy + gh * 0.3, 3, 4);
        ctx.fillRect(gx + gw * 0.6, gy + gh * 0.3, 3, 4);
        ctx.fillStyle = "#090b14";
        ctx.fillRect(gx + gw * 0.25, gy + gh * 0.35, 2, 2);
        ctx.fillRect(gx + gw * 0.65, gy + gh * 0.35, 2, 2);
      });

      animId = requestAnimationFrame(gameLoop);
    };

    animId = requestAnimationFrame(gameLoop);
    return () => cancelAnimationFrame(animId);
  }, [isPlaying, gameOver, gameWon]);

  return (
    <div className="pixel-box p-5 bg-[#090b17] border-2 border-[#facc15] shadow-[0_0_25px_rgba(250,204,21,0.2)]">
      {/* Game Header HUD */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#242c52] pb-3 mb-4">
        <div className="flex items-center gap-2">
          <Gamepad2 className="w-5 h-5 text-[#facc15] animate-bounce" />
          <h3 className="font-pixel text-xs sm:text-sm text-[#facc15]">
            PAC•JHINUK // RETRO ARCADE
          </h3>
        </div>

        <div className="flex items-center gap-4 font-pixel text-[9px] text-slate-300">
          <div>
            SCORE: <span className="text-[#00f0ff]">{score}</span>
          </div>
          <div>
            HIGH: <span className="text-[#ff3377]">{highScore}</span>
          </div>
          <div>
            LIVES: <span className="text-yellow-400">{"♥ ".repeat(lives)}</span>
          </div>
        </div>
      </div>

      {/* Main Play Area */}
      <div className="relative flex flex-col items-center justify-center bg-[#05060d] border-2 border-[#2b3560] p-2 overflow-hidden">
        <canvas
          ref={canvasRef}
          width={360}
          height={312}
          className="max-w-full h-auto cursor-pointer"
          onClick={() => {
            if (!isPlaying && !gameOver && !gameWon) resetGame();
          }}
        />

        {/* Start / Game Over Overlay */}
        {(!isPlaying || gameOver || gameWon) && (
          <div className="absolute inset-0 bg-black/85 flex flex-col items-center justify-center p-4 text-center z-10">
            {gameOver ? (
              <div className="space-y-3">
                <div className="font-pixel text-lg text-[#ff3377] animate-pulse">
                  GAME OVER
                </div>
                <div className="font-terminal text-lg text-slate-300">
                  FINAL SCORE: {score}
                </div>
                <button
                  onClick={resetGame}
                  className="pixel-btn pixel-btn-accent text-xs py-2 px-4"
                >
                  <RotateCcw className="w-3.5 h-3.5 mr-1 inline" /> RESTART GAME
                </button>
              </div>
            ) : gameWon ? (
              <div className="space-y-3">
                <div className="font-pixel text-lg text-[#10b981] animate-bounce">
                  VICTORY! LEVEL CLEARED
                </div>
                <div className="font-terminal text-lg text-[#facc15]">
                  YOU MASTERED THE MAZE! SCORE: {score}
                </div>
                <button
                  onClick={resetGame}
                  className="pixel-btn pixel-btn-cyan text-xs py-2 px-4"
                >
                  <RotateCcw className="w-3.5 h-3.5 mr-1 inline" /> PLAY AGAIN
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="font-pixel text-sm text-[#00f0ff]">
                  READY PLAYER 1?
                </div>
                <p className="font-terminal text-sm text-slate-300 max-w-xs">
                  Guide Pacman with Arrow keys or on-screen D-Pad. Eat dots and dodge the ghosts!
                </p>
                <button
                  onClick={resetGame}
                  className="pixel-btn pixel-btn-cyan text-xs py-2.5 px-5"
                >
                  ▶ START GAME
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* On-screen Retro Arcade D-Pad Controls */}
      <div className="mt-4 pt-3 border-t border-[#1d2342] flex flex-wrap items-center justify-between gap-3">
        <div className="font-terminal text-xs text-slate-400">
          CONTROLS: ARROWS / WASD / D-PAD BELOW
        </div>

        {/* D-Pad Buttons */}
        <div className="flex items-center gap-1.5 mx-auto sm:mx-0">
          <button
            onClick={() => handleDirection(-1, 0)}
            className="p-2 pixel-btn text-slate-200"
            aria-label="Left"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div className="flex flex-col gap-1.5">
            <button
              onClick={() => handleDirection(0, -1)}
              className="p-2 pixel-btn text-slate-200"
              aria-label="Up"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleDirection(0, 1)}
              className="p-2 pixel-btn text-slate-200"
              aria-label="Down"
            >
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>
          <button
            onClick={() => handleDirection(1, 0)}
            className="p-2 pixel-btn text-slate-200"
            aria-label="Right"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <button
          onClick={resetGame}
          className="pixel-btn text-[9px] py-2 px-3 text-slate-300"
          title="Reset"
        >
          <RotateCcw className="w-3.5 h-3.5 inline mr-1" /> RESET
        </button>
      </div>
    </div>
  );
}
