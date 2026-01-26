'use client';

import { motion } from 'framer-motion';

interface CustomHeadingProps {
  heading: string;
}

export const CustomHeading = ({ heading }: CustomHeadingProps) => {
  return (
    <div className="relative flex items-center justify-center  overflow-hidden ">
      {/* Background Large Text - Animated Fade In */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-[60px] md:text-[90px] lg:text-[140px] font-black text-center text-muted-foreground uppercase tracking-tighter select-none"
      >
        {heading}
      </motion.h1>

      {/* Foreground Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        {/* Main Visible Heading with Glow */}
        <motion.h3
          initial={{ letterSpacing: '0.2em', opacity: 0 }}
          whileInView={{ letterSpacing: '0.05em', opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold uppercase text-white tracking-widest relative"
        >
          {heading}
          {/* Subtle Glow Effect */}
          <span className="absolute inset-0 text-cyan-500 blur-lg opacity-40">
            {heading}
          </span>
        </motion.h3>

        {/* Animated Underline */}
        <div className="flex items-center justify-center mt-4 gap-1">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '4rem' }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="h-[3px] bg-gray-700 rounded-full"
          />
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="h-[6px] w-[6px] bg-cyan-400 rotate-45 rounded-sm shadow-[0_0_10px_#22d3ee]"
          />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '4rem' }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="h-[3px] bg-gray-700 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
