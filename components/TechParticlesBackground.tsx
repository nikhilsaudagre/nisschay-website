"use client";

import React, { useEffect, useRef } from "react";

export interface TechParticlesProps {
    className?: string;
    particleCount?: number;
    maxDistance?: number;
    particleColor?: string; // hex or rgb
    lineColor?: string; // hex or rgb
    speed?: number;
    interactive?: boolean;
    opacity?: number;
}

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    baseAlpha: number;
}

export default function TechParticlesBackground({
    className = "",
    particleCount = 55,
    maxDistance = 140,
    particleColor = "0, 87, 254", // Nisschay Electric Blue
    lineColor = "0, 87, 254",
    speed = 0.6,
    interactive = true,
    opacity = 0.22,
}: TechParticlesProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        let animationFrameId: number;
        let width = 0;
        let height = 0;
        let particles: Particle[] = [];

        // Mouse coordinates relative to canvas
        const mouse = {
            x: -9999,
            y: -9999,
            radius: 160,
        };

        const resizeCanvas = () => {
            if (!canvas.parentElement) return;
            const rect = canvas.parentElement.getBoundingClientRect();
            width = rect.width;
            height = rect.height;

            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            ctx.scale(dpr, dpr);
            initParticles();
        };

        const initParticles = () => {
            particles = [];
            // Scale count by screen width (fewer on mobile)
            const count = width < 640 ? Math.floor(particleCount * 0.45) : particleCount;

            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * speed,
                    vy: (Math.random() - 0.5) * speed,
                    radius: Math.random() * 1.6 + 1.2, // 1.2px - 2.8px
                    baseAlpha: Math.random() * 0.4 + 0.6,
                });
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!interactive) return;
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.x = -9999;
            mouse.y = -9999;
        };

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            // Update & draw particles
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                // Movement
                p.x += p.vx;
                p.y += p.vy;

                // Bounce off edges with soft margin
                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                // Mouse interaction: gentle repulsion
                if (interactive && mouse.x > 0) {
                    const dx = p.x - mouse.x;
                    const dy = p.y - mouse.y;
                    const dist = Math.hypot(dx, dy);
                    if (dist < mouse.radius && dist > 0) {
                        const force = (1 - dist / mouse.radius) * 1.5;
                        p.x += (dx / dist) * force;
                        p.y += (dy / dist) * force;
                    }
                }

                // Draw particle node
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${particleColor}, ${p.baseAlpha * opacity * 1.5})`;
                ctx.fill();

                // Connect to mouse if close
                if (interactive && mouse.x > 0) {
                    const dMouse = Math.hypot(p.x - mouse.x, p.y - mouse.y);
                    if (dMouse < mouse.radius) {
                        const alpha = (1 - dMouse / mouse.radius) * opacity * 1.8;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.strokeStyle = `rgba(${lineColor}, ${alpha})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }

                // Connect with nearby particles
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.hypot(dx, dy);

                    if (dist < maxDistance) {
                        const alpha = (1 - dist / maxDistance) * opacity;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(${lineColor}, ${alpha})`;
                        ctx.lineWidth = 0.85;
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        window.addEventListener("resize", resizeCanvas);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);

        resizeCanvas();
        render();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, [particleCount, maxDistance, particleColor, lineColor, speed, interactive, opacity]);

    return (
        <canvas
            ref={canvasRef}
            className={`pointer-events-none absolute inset-0 z-0 select-none ${className}`}
            aria-hidden="true"
        />
    );
}
