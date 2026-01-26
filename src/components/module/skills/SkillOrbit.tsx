'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface SkillsProps {
  skills: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
  };
}

const SkillOrbit = ({ skills }: SkillsProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const processedSkills = useMemo(() => {
    const all = [
      ...(skills?.frontend || []),
      ...(skills?.backend || []),
      ...(skills?.database || []),
    ];
    return all.map((skill) => ({
      src: skill,
      size: [45, 55, 65][Math.floor(Math.random() * 3)],
      speed: 20 + Math.random() * 20,
    }));
  }, [skills]);

  return (
    <div
      className="relative w-full h-100 md:h-125 flex items-center justify-center overflow-visible"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* --- Sci-Fi Background Elements --- */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Central Reactor Core */}
        <div className="absolute w-24 h-24 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-16 h-16 border border-cyan-500/30 rounded-full animate-[ping_3s_linear_infinite]" />

        {/* Orbital Rings with rotation */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute border border-dashed border-cyan-500/10 w-[450px] h-[450px] rounded-full"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute border border-cyan-500/20 w-[300px] h-[300px] rounded-full border-t-transparent border-b-transparent"
        />
      </div>

      {/* --- The Dynamic Skill Orbit --- */}
      <motion.div
        animate={{ rotate: isHovered ? 10 : 360 }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {processedSkills.map((skill, idx) => {
          const angle = (idx / processedSkills.length) * (2 * Math.PI);
          // বড় এবং ছোট স্কিলের জন্য ব্যাসার্ধ কিছুটা ভিন্ন রাখা (Varied Radius)
          const radiusVariation = idx % 2 === 0 ? 20 : -20;
          const baseRadius =
            typeof window !== 'undefined' && window.innerWidth < 768
              ? 130
              : 180;
          const radius = baseRadius + radiusVariation;

          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={idx}
              className="absolute group cursor-pointer z-20"
              style={{ x, y }}
              whileHover={{ scale: 1.4, zIndex: 50 }}
            >
              {/* Icon Container with Sci-Fi Frame */}
              <div className="relative p-1.5">
                {/* Hexagon or Square Frame Effect */}
                <div className="absolute inset-0 bg-cyan-500/5 backdrop-blur-md border border-cyan-500/30 rounded-xl group-hover:border-cyan-400 group-hover:bg-cyan-500/20 transition-all shadow-[0_0_15px_rgba(34,211,238,0.1)]" />

                {/* Counter-Rotation to keep icon steady */}
                <motion.div
                  animate={{ rotate: isHovered ? -10 : -360 }}
                  transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="relative flex items-center justify-center"
                  style={{ width: skill.size, height: skill.size }}
                >
                  <Image
                    src={skill.src}
                    alt="Skill"
                    width={skill.size}
                    height={skill.size}
                    className="object-contain filter grayscale-[0.5] group-hover:grayscale-0 transition-all"
                  />
                </motion.div>

                {/* Corner Accents for Sci-Fi look */}
                <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default SkillOrbit;
