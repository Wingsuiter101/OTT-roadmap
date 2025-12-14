'use client';

import { motion } from 'framer-motion';

export const CinemaTitleSlide = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Image Placeholder with Film Grain Effect */}
      <div className="absolute inset-0 bg-neutral-900">
         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
         {/* Simulated Film Grain/Texture */}
         <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-50 contrast-150 mix-blend-overlay"></div>
         
         {/* Placeholder text for user to replace with image */}
         <div className="w-full h-full flex items-center justify-center opacity-10 scale-110">
            <span className="text-9xl font-black text-white uppercase tracking-tighter">Cinema BG</span>
         </div>
      </div>

      <div className="relative z-20 text-center">
         <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "circOut" }}
         >
            <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-20 bg-[var(--color-primary)]"></div>
                <span className="block text-[var(--color-primary)] font-mono text-xl md:text-2xl uppercase tracking-[0.5em]">Pillar 04</span>
                <div className="h-px w-20 bg-[var(--color-primary)]"></div>
            </div>
            
            <h1 className="text-9xl md:text-[14rem] font-black text-white tracking-tighter leading-none uppercase mix-blend-screen">
              Cinema
            </h1>
         </motion.div>
      </div>
    </div>
  );
};


