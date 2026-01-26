'use client';

import { useRef, useEffect, useState, ReactNode } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  color: string;
}

interface MousePosition {
  x: number;
  y: number;
}

interface Dimensions {
  width: number;
  height: number;
}

interface StarfieldWarpProps {
  children?: ReactNode;
  starCount?: number;
  className?: string;
}

const StarfieldWarp: React.FC<StarfieldWarpProps> = ({
  children,
  starCount,
  className = '',
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  });
  const starsRef = useRef<Star[]>([]);
  const warpSpeedRef = useRef<number>(0);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      if (!wrapperRef.current) return;

      const rect = wrapperRef.current.getBoundingClientRect();
      const { width, height } = rect;
      const devicePixelRatio = window.devicePixelRatio || 1;

      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(devicePixelRatio, devicePixelRatio);

      setDimensions({ width, height });
      initStars(width, height);
    };

    const initStars = (width: number, height: number) => {
      const count = starCount || (width < 768 ? 300 : 500);
      const stars: Star[] = [];

      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * width - width / 2,
          y: Math.random() * height - height / 2,
          z: Math.random() * 1000,
          size: Math.random() * 2 + 1,
          color: `hsl(${Math.random() * 60 + 200}, 100%, ${Math.random() * 30 + 70}%)`,
        });
      }

      starsRef.current = stars;
      warpSpeedRef.current = 0;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [starCount]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!wrapperRef.current) return;

      const rect = wrapperRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (!dimensions.width || !dimensions.height) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 20, 0.2)';
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);

      const stars = starsRef.current;
      const centerX = dimensions.width / 2;
      const centerY = dimensions.height / 2;

      const dx = mousePosition.x - centerX;
      const dy = mousePosition.y - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);

      const targetWarpSpeed = Math.min(1, distance / maxDistance) * 15;
      warpSpeedRef.current += (targetWarpSpeed - warpSpeedRef.current) * 0.05;

      for (const star of stars) {
        star.z -= warpSpeedRef.current;

        if (star.z <= 0 || star.z > 1000) {
          star.x = Math.random() * dimensions.width - centerX;
          star.y = Math.random() * dimensions.height - centerY;
          star.z = 1000;
          star.size = Math.random() * 2 + 1;
        }

        const projectedX = (star.x / star.z) * 500 + centerX;
        const projectedY = (star.y / star.z) * 500 + centerY;
        const projectedSize = star.size * (1 - star.z / 1000);

        if (
          projectedX < -10 ||
          projectedX > dimensions.width + 10 ||
          projectedY < -10 ||
          projectedY > dimensions.height + 10
        )
          continue;

        if (warpSpeedRef.current > 5 && star.z < 500) {
          const prevX =
            (star.x / (star.z + warpSpeedRef.current * 2)) * 500 + centerX;
          const prevY =
            (star.y / (star.z + warpSpeedRef.current * 2)) * 500 + centerY;

          ctx.beginPath();
          ctx.moveTo(projectedX, projectedY);
          ctx.lineTo(prevX, prevY);
          ctx.strokeStyle = star.color;
          ctx.lineWidth = projectedSize;
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.arc(projectedX, projectedY, projectedSize, 0, Math.PI * 2);
          ctx.fillStyle = star.color;
          ctx.fill();
        }
      }

      if (warpSpeedRef.current > 1) {
        const gradient = ctx.createRadialGradient(
          centerX,
          centerY,
          0,
          centerX,
          centerY,
          100 * warpSpeedRef.current
        );
        gradient.addColorStop(
          0,
          `rgba(100, 200, 255, ${warpSpeedRef.current * 0.05})`
        );
        gradient.addColorStop(1, 'rgba(100, 200, 255, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(centerX, centerY, 100 * warpSpeedRef.current, 0, Math.PI * 2);
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions, mousePosition]);

  return (
    <div
      ref={wrapperRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      />
      <div className="relative" style={{ zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default StarfieldWarp;
