"use client";

import React, { useEffect, useRef } from "react";

interface SmokeEffectProps {
  theme: "dark" | "light";
}

export default function SmokeEffect({ theme }: SmokeEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    // Particle pool
    const particles: Particle[] = [];
    const maxParticles = 60;

    class Particle {
      x!: number;
      y!: number;
      vx!: number;
      vy!: number;
      size!: number;
      maxSize!: number;
      opacity!: number;
      maxOpacity!: number;
      spin!: number;
      spinSpeed!: number;

      constructor() {
        this.reset();
        // Distribute initial particles across the height so there is smoke instantly
        this.y = Math.random() * height;
        this.opacity = Math.random() * this.maxOpacity;
      }

      reset() {
        this.x = width / 2 + (Math.random() - 0.5) * (width * 0.6);
        this.y = height + Math.random() * 40;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = -0.5 - Math.random() * 0.8;
        this.size = 15 + Math.random() * 20;
        this.maxSize = 90 + Math.random() * 80;
        this.opacity = 0;
        this.maxOpacity = theme === "dark" ? 0.06 + Math.random() * 0.08 : 0.04 + Math.random() * 0.06;
        this.spin = Math.random() * Math.PI * 2;
        this.spinSpeed = (Math.random() - 0.5) * 0.005;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        // Grow particle size
        if (this.size < this.maxSize) {
          this.size += 0.25;
        }

        // Spin
        this.spin += this.spinSpeed;

        // Fade in / Fade out lifecycle
        if (this.y > height * 0.8) {
          // Fade in near the bottom
          this.opacity = Math.min(this.maxOpacity, this.opacity + 0.002);
        } else if (this.y < height * 0.4) {
          // Fade out near the top
          this.opacity = Math.max(0, this.opacity - 0.0015);
        } else {
          // Stable opacity in middle
          this.opacity = Math.min(this.maxOpacity, this.opacity + 0.001);
        }

        if (this.y < -this.size || this.opacity <= 0) {
          this.reset();
        }
      }

      draw(c: CanvasRenderingContext2D) {
        c.save();
        c.translate(this.x, this.y);
        c.rotate(this.spin);
        
        // Create radial gradient for a soft, volumetric misty puff
        const gradient = c.createRadialGradient(0, 0, 0, 0, 0, this.size);
        const color = theme === "dark" ? "255, 255, 255" : "0, 0, 0";
        gradient.addColorStop(0, `rgba(${color}, ${this.opacity})`);
        gradient.addColorStop(0.5, `rgba(${color}, ${this.opacity * 0.4})`);
        gradient.addColorStop(1, `rgba(${color}, 0)`);
        
        c.fillStyle = gradient;
        c.beginPath();
        c.arc(0, 0, this.size, 0, Math.PI * 2);
        c.fill();
        c.restore();
      }
    }

    // Initialize particles
    for (let i = 0; i < maxParticles; i++) {
      particles.push(new Particle());
    }

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-70"
      style={{ mixBlendMode: theme === "dark" ? "screen" : "multiply" }}
    />
  );
}
