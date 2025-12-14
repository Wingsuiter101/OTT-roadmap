'use client';

import { motion } from 'framer-motion';

export const FootballFinancialsSlide = () => {
  return (
    <div className="flex flex-col h-full gap-6">
      <div className="flex justify-between items-baseline shrink-0">
          <div>
             <h2 className="text-4xl font-bold tracking-tight mb-2">Football Economics</h2>
             <p className="text-gray-400 text-sm font-mono uppercase tracking-wide">Investment Strategy 2026</p>
          </div>
          <span className="text-gray-500 font-mono text-sm">13</span>
       </div>
      
      {/* Top Row: Investment Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full min-h-0">
         
         {/* Total Investment Card */}
         <div className="md:col-span-1 bg-neutral-900 border border-neutral-800 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5">
               <svg className="w-40 h-40" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.21 2.5-1.64-2.5-1.65-7.51-3.21 2.5 1.64 2.5 1.65-2.5 6.42z"/></svg>
            </div>
            
            <div>
               <div className="text-[var(--color-primary)] font-mono text-sm uppercase tracking-widest mb-2">Total Projected Spend</div>
               <div className="text-5xl md:text-6xl font-black text-white tracking-tighter">
                  11.4 Cr
               </div>
               <div className="text-sm text-gray-500 mt-2">FY 2026 Estimated Expenses</div>
            </div>

            <div className="space-y-4 mt-8">
               <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                     <span className="text-gray-400">Rights Fees (44%)</span>
                     <span className="text-white font-mono">5.05 Cr</span>
                  </div>
                  <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                     <div className="h-full bg-[var(--color-primary)] w-[44%]"></div>
                  </div>
               </div>
               
               <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                     <span className="text-gray-400">Tech & Ops (18%)</span>
                     <span className="text-white font-mono">2.05 Cr</span>
                  </div>
                  <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                     <div className="h-full bg-blue-500 w-[18%]"></div>
                  </div>
               </div>

               <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                     <span className="text-gray-400">Production (14%)</span>
                     <span className="text-white font-mono">1.60 Cr</span>
                  </div>
                  <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                     <div className="h-full bg-yellow-500 w-[14%]"></div>
                  </div>
               </div>
               
               <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                     <span className="text-gray-400">Ground/Other (16%)</span>
                     <span className="text-white font-mono">1.85 Cr</span>
                  </div>
                  <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                     <div className="h-full bg-green-500 w-[16%]"></div>
                  </div>
               </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                     <span className="text-gray-400">Marketing (8%)</span>
                     <span className="text-white font-mono">0.85 Cr</span>
                  </div>
                  <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                     <div className="h-full bg-purple-500 w-[8%]"></div>
                  </div>
               </div>
            </div>
         </div>

         {/* Event Breakdown */}
         <div className="md:col-span-2 bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 flex flex-col">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
               <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
               Event-wise Allocation
            </h3>

            <div className="flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar">
               {/* A Division */}
               <div className="flex items-center gap-4 p-4 bg-neutral-800/50 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-[var(--color-primary)]/20 flex items-center justify-center text-[var(--color-primary)] font-black text-xl">01</div>
                  <div className="flex-1">
                     <div className="flex justify-between items-baseline mb-1">
                        <h4 className="text-white font-bold">A Division League</h4>
                        <span className="text-white font-mono font-bold">5.40 Cr</span>
                     </div>
                     <div className="w-full bg-neutral-900 h-1.5 rounded-full overflow-hidden mb-2">
                        <div className="h-full bg-[var(--color-primary)] w-[100%]"></div>
                     </div>
                     <div className="flex gap-4 text-[10px] text-gray-500 font-mono uppercase">
                        <span>Rights: 3.2 Cr</span>
                        <span>Prod: 60L</span>
                        <span>Tech: 50L</span>
                        <span>Ground: 50L</span>
                     </div>
                  </div>
               </div>

               {/* Gold Cups */}
               <div className="flex items-center gap-4 p-4 bg-neutral-800/50 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-500 font-black text-xl">02</div>
                  <div className="flex-1">
                     <div className="flex justify-between items-baseline mb-1">
                        <h4 className="text-white font-bold">4 Major Gold Cups</h4>
                        <span className="text-white font-mono font-bold">3.20 Cr</span>
                     </div>
                     <div className="w-full bg-neutral-900 h-1.5 rounded-full overflow-hidden mb-2">
                        <div className="h-full bg-yellow-500 w-[59%]"></div>
                     </div>
                     <div className="flex gap-4 text-[10px] text-gray-500 font-mono uppercase">
                        <span>Birat / Dharan / Budha Subba / Pokhara</span>
                        <span>~80L each</span>
                     </div>
                  </div>
               </div>

               {/* Martyrs Women */}
               <div className="flex items-center gap-4 p-4 bg-neutral-800/50 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center text-green-500 font-black text-xl">03</div>
                  <div className="flex-1">
                     <div className="flex justify-between items-baseline mb-1">
                        <h4 className="text-white font-bold">Martyrs Women's League</h4>
                        <span className="text-white font-mono font-bold">1.65 Cr</span>
                     </div>
                     <div className="w-full bg-neutral-900 h-1.5 rounded-full overflow-hidden mb-2">
                        <div className="h-full bg-green-500 w-[30%]"></div>
                     </div>
                     <div className="flex gap-4 text-[10px] text-gray-500 font-mono uppercase">
                        <span>Rights: 75L</span>
                        <span>Prod: 20L</span>
                        <span>Tech: 20L</span>
                     </div>
                  </div>
               </div>

               {/* SAFF Women */}
               <div className="flex items-center gap-4 p-4 bg-neutral-800/50 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-500 font-black text-xl">04</div>
                  <div className="flex-1">
                     <div className="flex justify-between items-baseline mb-1">
                        <h4 className="text-white font-bold">SAFF Women's Championship</h4>
                        <span className="text-white font-mono font-bold">1.15 Cr</span>
                     </div>
                     <div className="w-full bg-neutral-900 h-1.5 rounded-full overflow-hidden mb-2">
                        <div className="h-full bg-purple-500 w-[21%]"></div>
                     </div>
                     <div className="flex gap-4 text-[10px] text-gray-500 font-mono uppercase">
                        <span>Rights: 50L</span>
                        <span>Tech: 35L</span>
                        <span>Mktg: 15L</span>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </div>
    </div>
  );
};

