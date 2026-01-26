'use client';

import assets from '@/assets/assets';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { CustomHeading } from '../shared/Heading';

import { motion } from 'framer-motion';

const { myWorks } = assets;

function ProjectPage() {
  return (
    <div
      id="portfolio"
      className="relative w-full py-4  px-4 sm:px-6 lg:px-8 overflow-hidden mt-5 md:mt-0"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <CustomHeading heading={'Portfolio'} />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full lg:max-w-6xl mx-auto px-6 mt-4">
        {myWorks.map((work, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-gray-950/40 backdrop-blur-md border border-white/10 p-4 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
          >
            {/* Project Image Container */}
            <div className="relative h-64 w-full overflow-hidden rounded-xl bg-gray-900">
              <Image
                src={work?.photo}
                fill
                alt={work?.name || 'Project'}
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100"
              />
              {/* Overlay Glow */}
              <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-transparent to-transparent opacity-60" />
            </div>

            {/* Title & Info */}
            <div className="mt-6 space-y-2 text-center md:text-left px-2 pb-2">
              <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                {work.name}
              </h3>
              <div className="h-1 w-12 bg-cyan-500 rounded-full group-hover:w-24 transition-all duration-500" />

              <p className="text-gray-400 text-sm line-clamp-2 mt-3 font-light">
                Modern web application built with premium user experience and
                high performance.
              </p>
            </div>

            {/* Hover Sci-fi corner accents */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-all duration-500" />
          </motion.div>
        ))}
      </div>

      <div className="flex items-center justify-center pt-8">
        <Link href={'/projects'}>
          <Button
            variant="outline"
            className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all duration-300 px-8 py-6 text-lg rounded-full shadow-neon"
          >
            See All Projects
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectPage;
