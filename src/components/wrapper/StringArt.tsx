'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';

interface Point {
  x: number;
  y: number;
}

interface StringArtProps {
  children?: React.ReactNode;
  className?: string;
}

const StringArt: React.FC<StringArtProps> = ({ children, className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const anchorPointsRef = useRef<Point[]>([]);
  const animationRef = useRef<number | null>(null);

  // Generate Points based on container size
  const generateAnchorPoints = useCallback((width: number, height: number) => {
    const points: Point[] = [];
    const pointCount = width < 768 ? 40 : 80;
    const radius = Math.min(width, height) * 0.4;
    const centerX = width / 2;
    const centerY = height / 2;

    for (let i = 0; i < pointCount; i++) {
      const angle = (i / pointCount) * Math.PI * 2;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      points.push({ x, y });
    }
    anchorPointsRef.current = points;
  }, []);

  // Handle Resize correctly for Next.js SSR/Hydration
  useEffect(() => {
    const updateDimensions = () => {
      if (!containerRef.current || !canvasRef.current) return;

      const { offsetWidth, offsetHeight } = containerRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const dpr = window.devicePixelRatio || 1;

      canvas.width = offsetWidth * dpr;
      canvas.height = offsetHeight * dpr;
      canvas.style.width = `${offsetWidth}px`;
      canvas.style.height = `${offsetHeight}px`;

      if (ctx) {
        ctx.scale(dpr, dpr);
      }

      setDimensions({ width: offsetWidth, height: offsetHeight });
      generateAnchorPoints(offsetWidth, offsetHeight);
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [generateAnchorPoints]);

  // Mouse move listener
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation Loop
  useEffect(() => {
    if (!dimensions.width || !dimensions.height) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      const anchorPoints = anchorPointsRef.current;

      // Draw Anchor Dots
      ctx.fillStyle = 'rgba(0, 255, 255, 0.3)';
      anchorPoints.forEach((point) => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw Strings
      anchorPoints.forEach((point) => {
        const dx = point.x - mousePosition.x;
        const dy = point.y - mousePosition.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx);

        // Selective drawing for "string" look
        const skipFactor = Math.abs(Math.sin(angle * 5)) < 0.2;
        if (skipFactor) return;

        const maxDistance = Math.max(dimensions.width, dimensions.height) * 0.8;
        const opacity = 0.05 + 0.3 * (1 - Math.min(1, distance / maxDistance));
        const hue = ((angle * 180) / Math.PI + 180) % 360;

        ctx.beginPath();
        ctx.moveTo(point.x, point.y);
        ctx.lineTo(mousePosition.x, mousePosition.y);
        ctx.strokeStyle = `hsla(${hue}, 70%, 50%, ${opacity})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });

      // Mouse Glow
      const grad = ctx.createRadialGradient(
        mousePosition.x,
        mousePosition.y,
        0,
        mousePosition.x,
        mousePosition.y,
        50
      );
      grad.addColorStop(0, 'rgba(0, 255, 255, 0.1)');
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(mousePosition.x, mousePosition.y, 50, 0, Math.PI * 2);
      ctx.fill();

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [dimensions, mousePosition]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};

export default StringArt;
