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
        viewport={{ once: true }}
        className="text-[60px] md:text-[90px] lg:text-[140px] font-black text-center text-muted-foreground uppercase tracking-tighter select-none"
      >
        {heading}
      </motion.h1>
    </div>
  );
};
