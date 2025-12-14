'use client';

import { motion } from 'framer-motion';

export const KidsTitleSlide = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-neutral-900">
      {/* Background with Playful Elements (Abstract) */}
      <div className="absolute inset-0">
         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-primary)]/20 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-1000"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[150px] mix-blend-screen"></div>
      </div>

      <div className="relative z-20 text-center">
         <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", bounce: 0.5, duration: 1 }}
         >
            <span className="block text-[var(--color-primary)] font-mono text-xl md:text-2xl uppercase tracking-[0.5em] mb-4">Pillar 05</span>
            <h1 className="text-9xl md:text-[14rem] font-black text-white tracking-tighter leading-none uppercase relative">
              <span className="relative z-10">Kids</span>
              {/* Playful Shadow/Outline Effect */}
              <span className="absolute top-2 left-2 text-transparent stroke-2 text-stroke-white opacity-20 z-0">Kids</span>
            </h1>
            <div className="mt-8 flex justify-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span className="w-3 h-3 rounded-full bg-[var(--color-primary)]"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-purple-500"></span>
            </div>
         </motion.div>
      </div>
    </div>
  );
};


