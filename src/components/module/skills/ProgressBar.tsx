'use client';

import { motion } from 'framer-motion';

const ProgressBar = () => {
  const skills = [
    {
      name: 'NestJS',
      percentage: 95,
      color: 'from-red-500 to-pink-600',
    },
    {
      name: 'LangChain',
      percentage: 90,
      color: 'from-cyan-400 to-blue-500',
    },
    {
      name: 'Pinecone',
      percentage: 88,
      color: 'from-violet-500 to-purple-600',
    },
    {
      name: 'AWS',
      percentage: 60,
      color: 'from-orange-400 to-amber-500',
    },
    {
      name: 'Python',
      percentage: 35,
      color: 'from-blue-500 to-yellow-400',
    },
  ];

  return (
    <div className="w-full space-y-8 p-6 bg-gray-900/40 backdrop-blur-md border border-white/5 rounded-2xl shadow-2xl">
      <h2 className="text-2xl font-bold text-cyan-400">Recent Activity</h2>
      {skills.map((skill, idx) => (
        <div key={idx} className="space-y-3">
          <div className="flex justify-between items-end">
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-sm md:text-base font-bold  tracking-widest uppercase"
            >
              {skill.name}
            </motion.p>
            <span className="text-xs font-mono text-cyan-400">
              {skill.percentage}%
            </span>
          </div>

          <div className="relative h-1.5 w-full bg-gray-800 rounded-full overflow-visible">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.percentage}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut', delay: idx * 0.1 }}
              className={`absolute top-0 left-0 h-full rounded-full bg-linear-to-r ${skill.color} z-10`}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-4  blur-xs rounded-full opacity-50" />
            </motion.div>

            <div className="absolute inset-0 w-full h-full bg-cyan-500/5 blur-sm rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
