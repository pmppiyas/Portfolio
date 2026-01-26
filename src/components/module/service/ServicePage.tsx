/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import assets from '@/assets/assets';
import { CustomHeading } from '@/components/module/shared/Heading';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const { services } = assets;

function ServiceCard({ service }: { service: any }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative bg-gray-900/40 backdrop-blur-md p-8 rounded-2xl border border-white/5 shadow-2xl transition-colors duration-500 hover:border-cyan-500/30 group cursor-pointer h-full"
    >
      <div
        style={{ transform: 'translateZ(50px)', transformStyle: 'preserve-3d' }}
        className="flex flex-col items-center"
      >
        {/* Icon with Floating Effect */}
        <div className="flex items-center justify-center mb-6 p-4 bg-cyan-500/10 rounded-2xl border border-cyan-500/20 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50 transition-all duration-500 shadow-lg shadow-cyan-500/5">
          <Image
            src={service.icon}
            height={50}
            width={50}
            alt={service.name}
            className="group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Text Content */}
        <h3 className="text-2xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300 tracking-tight">
          {service.name}
        </h3>

        <p className="text-gray-400 mt-4 leading-relaxed font-light text-sm text-center">
          {service.description}
        </p>

        {/* Decorative Bottom Line */}
        <div className="mt-6 w-0 group-hover:w-16 h-0.5 bg-cyan-500 transition-all duration-500 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
      </div>

      {/* Background Glow Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
    </motion.div>
  );
}

function ServicePage() {
  return (
    <div
      id="service"
      className="relative w-full py-4  px-4 sm:px-6 lg:px-8 overflow-hidden mt-5 md:mt-0"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <CustomHeading heading={'Services'} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-4">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} />
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
    </div>
  );
}

export default ServicePage;
