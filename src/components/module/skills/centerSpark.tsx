'use client';

import { motion } from 'framer-motion';

const CenterSparks = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {Array.from({ length: 18 }).map((_, i) => {
        const angle = Math.random() * Math.PI * 2;

        const distance = 220 + Math.random() * 180;

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        return (
          <motion.div
            key={i}
            className="absolute"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 3.2,
              delay: Math.random() * 4,
              repeat: Infinity,
              repeatDelay: Math.random() * 2,
              ease: 'easeOut',
            }}
          >
            <motion.div
              initial={{ x: 0, y: 0, scale: 0 }}
              animate={{
                x,
                y,
                scale: [0, 1.4, 0.6], // 🔥 BIG SCALE
              }}
              transition={{
                duration: 3,
                ease: 'easeOut',
              }}
              className="relative"
            >
              {/* 🔥 COMET HEAD (BIG) */}
              <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_25px_rgba(34,211,238,1)]" />

              <div className="absolute inset-0 rounded-full blur-xl bg-cyan-400/60" />

              <div
                className="absolute top-1/2 left-1/2 -translate-y-1/2 origin-left"
                style={{
                  width: 80,
                  height: 4,
                  transform: 'rotate(180deg)',
                }}
              >
                <div className="w-full h-full bg-linear-to-r from-cyan-400/90 via-cyan-400/40 to-transparent blur-sm" />
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default CenterSparks;
