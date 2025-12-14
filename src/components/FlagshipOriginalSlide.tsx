'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';

export const FlagshipOriginalSlide = () => {
  return (
    <div className="w-full h-full flex flex-col">
       <div className="flex justify-between items-baseline mb-8 border-b border-neutral-800 pb-6 shrink-0">
          <div>
             <h2 className="text-4xl font-bold tracking-tight mb-2">Flagship "Anchor" Original</h2>
             <p className="text-gray-400 text-sm font-mono uppercase tracking-wide">Q4 Launch • Brand Definer</p>
          </div>
          <span className="text-gray-500 font-mono text-sm">25</span>
       </div>
       
       <div className="flex-1 flex flex-col md:flex-row gap-8 items-center min-h-0 overflow-hidden">
          {/* Visual Side */}
          <div className="relative h-full aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-800 group shrink-0">
              <Image
                src={getAssetPath("/Kaalchakra.png")}
                alt="Kaalchakra - Flagship Original"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>

          {/* Content Side */}
          <div className="space-y-8 p-4 overflow-y-auto custom-scrollbar flex-1">
             <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="space-y-2"
             >
                <h3 className="text-2xl font-bold text-white">The "Watercooler" Moment</h3>
                <p className="text-xl text-gray-400">Premium show that defines DHGO. A gritty, cinematic crime thriller positioning.</p>
             </motion.div>

             <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-neutral-800/30 p-6 rounded-xl border-l-4 border-[var(--color-primary)]"
             >
                <div className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-1">Co-Production Target</div>
                <div className="text-xl font-semibold text-white">7 Seas Cinema <span className="text-gray-500 font-normal">or</span> Black Horse Pictures</div>
             </motion.div>

             <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
                className="bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30 p-6 rounded-xl"
             >
                <div className="flex items-center gap-3 mb-3">
                   <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                   <h3 className="text-xl font-bold text-white">Pushing Boundaries</h3>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                   Mature themes and bold storytelling that challenges traditional Nepali media norms. 
                   <span className="text-white font-semibold"> No creative compromises.</span> This is premium content that TV networks can't deliver due to censorship constraints.
                </p>
             </motion.div>

             <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-2"
             >
                <h3 className="text-2xl font-bold text-white">Strategic Launch</h3>
                <p className="text-xl text-gray-400">Q4 2026. The biggest brand moment of the year to secure renewals.</p>
             </motion.div>
          </div>
       </div>
    </div>
  );
};


