'use client';

import { motion } from 'framer-motion';

export const RevenueRoadmapSlide = () => {
  return (
    <div className="w-full h-full flex flex-col">
       <div className="flex justify-between items-baseline mb-8 border-b border-neutral-800 pb-6 shrink-0">
          <div>
             <h2 className="text-4xl font-bold tracking-tight mb-2">Revenue Roadmap</h2>
             <p className="text-gray-400 text-sm font-mono uppercase tracking-wide">Mix Target • Profitability</p>
          </div>
          <span className="text-gray-500 font-mono text-sm">35</span>
       </div>
       
       <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Revenue Mix Bars */}
          <div className="space-y-10">
             <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-6">Revenue Mix Target</h3>
             
             {/* Subscriptions */}
             <div className="space-y-3">
                <div className="flex justify-between text-xl font-bold text-white">
                   <span>Subscriptions</span>
                   <span>45%</span>
                </div>
                <div className="h-4 w-full bg-neutral-800 rounded-full overflow-hidden">
                   <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "45%" }}
                      transition={{ duration: 1, ease: "circOut" }}
                      className="h-full bg-white rounded-full"
                   ></motion.div>
                </div>
                <p className="text-sm text-gray-500">Base recurring revenue from core users.</p>
             </div>

             {/* Ads */}
             <div className="space-y-3">
                <div className="flex justify-between text-xl font-bold text-white">
                   <span>Ads (AVOD + Live)</span>
                   <span>35%</span>
                </div>
                <div className="h-4 w-full bg-neutral-800 rounded-full overflow-hidden">
                   <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "35%" }}
                      transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
                      className="h-full bg-gray-400 rounded-full"
                   ></motion.div>
                </div>
                <p className="text-sm text-gray-500">Programmatic fill + Direct sponsorships.</p>
             </div>

             {/* TVOD */}
             <div className="space-y-3">
                <div className="flex justify-between text-xl font-bold text-white">
                   <span>TVOD / PPV</span>
                   <span>20%</span>
                </div>
                <div className="h-4 w-full bg-neutral-800 rounded-full overflow-hidden">
                   <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "20%" }}
                      transition={{ duration: 1, ease: "circOut", delay: 0.4 }}
                      className="h-full bg-[var(--color-primary)] rounded-full"
                   ></motion.div>
                </div>
                <p className="text-sm text-gray-500">High-margin events (Fight League, Cinema).</p>
             </div>
          </div>

          {/* Targets & Break-even */}
          <div className="flex flex-col gap-6">
             <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl flex flex-col items-center text-center justify-center min-h-[250px] relative overflow-hidden group">
                <div className="absolute inset-0 bg-[var(--color-primary)]/5 group-hover:bg-[var(--color-primary)]/10 transition-colors"></div>
                <div className="relative z-10">
                   <div className="text-[var(--color-primary)] font-mono text-sm uppercase tracking-widest mb-4">Break-Even Target</div>
                   <div className="text-6xl font-black text-white mb-2">Q4 2026</div>
                   <div className="h-1 w-24 bg-[var(--color-primary)] mx-auto rounded-full"></div>
                   <p className="text-gray-400 mt-6 max-w-xs mx-auto">Projected profitability post-flagship original launch.</p>
                </div>
             </div>

             {/* Hard Numbers (Inferred/Target) */}
             <div className="grid grid-cols-2 gap-6">
                 <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl text-center">
                    <div className="text-gray-500 text-xs font-mono uppercase tracking-widest mb-2">Revenue Target</div>
                    <div className="text-3xl font-black text-white">50 Cr</div>
                    <div className="text-xs text-gray-600 font-mono mt-1">NPR (EST)</div>
                 </div>
                 <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl text-center">
                    <div className="text-gray-500 text-xs font-mono uppercase tracking-widest mb-2">Net Margin</div>
                    <div className="text-3xl font-black text-green-500">~15%</div>
                    <div className="text-xs text-gray-600 font-mono mt-1">Q4 EXIT</div>
                 </div>
             </div>
          </div>

       </div>
    </div>
  );
};
