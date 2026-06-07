'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const words = [
  'AI Solutions Architect',
  'Full-Stack AI Developer',
  'Backend AI Engineer',
  'Next.js & AI Specialist',
  'Scalable Systems Architect',
];

function RotatingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative inline-flex items-baseline text-inherit leading-none"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 'auto', opacity: 1 }}
          exit={{ width: 0, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="whitespace-nowrap overflow-hidden text-cyan-400 font-semibold drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] border-r-2 border-cyan-400/50 text-[1em] inline-block"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
}

export default RotatingText;
