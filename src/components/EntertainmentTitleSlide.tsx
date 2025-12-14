'use client';

import { motion } from 'framer-motion';

export const EntertainmentTitleSlide = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-neutral-900">
         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
         {/* Placeholder text for user to replace with image */}
         <div className="w-full h-full flex items-center justify-center opacity-10">
            <span className="text-9xl font-black text-white uppercase tracking-tighter">Cinema BG</span>
         </div>
      </div>

      <div className="relative z-20 text-center">
         <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
         >
            <span className="block text-[var(--color-primary)] font-mono text-xl md:text-2xl uppercase tracking-[0.5em] mb-4">Pillar 02 (Retention)</span>
            <h1 className="text-8xl md:text-[10rem] font-black text-white tracking-tighter leading-none uppercase italic">
              Entertainment
            </h1>
         </motion.div>
      </div>
    </div>
  );
};


