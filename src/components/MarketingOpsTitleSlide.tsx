'use client';

import { motion } from 'framer-motion';

export const MarketingOpsTitleSlide = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background with Grid and Data Flow Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>

      <div className="relative z-20 text-center max-w-6xl mx-auto px-4">
         <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
         >
            <div className="flex items-center justify-center gap-6 mb-8">
                <div className="h-px w-16 md:w-32 bg-gray-700"></div>
                <span className="block text-[var(--color-primary)] font-mono text-lg md:text-xl uppercase tracking-[0.3em]">Strategy & Execution</span>
                <div className="h-px w-16 md:w-32 bg-gray-700"></div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-tight uppercase mb-6">
              Marketing<span className="text-gray-700">.</span> <br className="hidden md:block" />
              Operations<span className="text-gray-700">.</span> <br className="hidden md:block" />
              Financials<span className="text-[var(--color-primary)]">.</span>
            </h1>
         </motion.div>
      </div>
    </div>
  );
};


