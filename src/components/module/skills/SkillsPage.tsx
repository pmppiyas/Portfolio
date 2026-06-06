/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import assets from '@/assets/assets';
import ProgressBar from '@/components/module/skills/ProgressBar';
import { CustomHeading } from '../shared/Heading';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUp } from '@/lib/utils';
import SkillForceGraph from '@/components/module/skills/SkillForceGraph';

const { skills } = assets;

function SkillsPage() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const yRightBlob = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div
      ref={containerRef}
      id="skills"
      className="relative min-h-screen py-20 overflow-hidden"
    >
      <motion.div className="absolute top-40 left-0 w-72 h-72 bg-blue-600/5 rounded-full blur-[100px] -z-10" />
      <motion.div
        style={{ y: yRightBlob }}
        className="absolute bottom-20 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[120px] -z-10"
      />

      <CustomHeading heading={'I Know'} />

      <motion.div
        {...fadeInUp}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="flex flex-col lg:flex-row gap-12 lg:gap-20 mx-auto max-w-7xl items-center justify-between px-6 mt-16"
      >
        <motion.div className="lg:w-1/2 w-full flex justify-center items-center  ">
          <SkillForceGraph
            skills={{
              frontend: skills.frontend?.map((img) => img.src),
              backend: skills.backend?.map((img) => img.src),
              database: skills.database?.map((img) => img.src),
              ai: skills.ai?.map((img) => img.src),
            }}
          />
        </motion.div>

        <motion.div className="lg:w-1/2 w-full space-y-4">
          <ProgressBar />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default SkillsPage;
