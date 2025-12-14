'use client';

import { motion } from 'framer-motion';

export const SportsFinancialsSlide = () => {
  return (
    <div className="flex flex-col h-full gap-6">
      <div className="flex justify-between items-baseline shrink-0">
          <div>
             <h2 className="text-4xl font-bold tracking-tight mb-2">Cricket Economics</h2>
             <p className="text-gray-400 text-sm font-mono uppercase tracking-wide">Investment Strategy 2026</p>
          </div>
          <span className="text-gray-500 font-mono text-sm">12</span>
       </div>
      
      {/* Top Row: Investment Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full min-h-0">
         
         {/* Total Investment Card */}
         <div className="md:col-span-1 bg-neutral-900 border border-neutral-800 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5">
               <svg className="w-40 h-40" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.15-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.58 0-1.62 1.31-2.92 3.12-3.22V4h2.67v1.93c1.71.36 2.94 1.51 3.18 3.11h-1.97c-.25-.91-.82-1.67-2.49-1.67-1.49 0-2.14.73-2.14 1.63 0 .66.27 1.34 2.66 1.9 2.5.58 4.25 1.56 4.25 3.7 0 1.82-1.55 3.01-3.32 3.29z"/></svg>
            </div>
            
            <div>
               <div className="text-[var(--color-primary)] font-mono text-sm uppercase tracking-widest mb-2">Total Projected Spend</div>
               <div className="text-5xl md:text-6xl font-black text-white tracking-tighter">
                  30 Cr
               </div>
               <div className="text-sm text-gray-500 mt-2">FY 2026 Estimated Expenses</div>
            </div>

            <div className="space-y-4 mt-8">
               <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                     <span className="text-gray-400">Rights Fees (61%)</span>
                     <span className="text-white font-mono">18.5 Cr</span>
                  </div>
                  <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                     <div className="h-full bg-[var(--color-primary)] w-[61%]"></div>
                  </div>
               </div>
               
               <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                     <span className="text-gray-400">Tech & Ops (14.5%)</span>
                     <span className="text-white font-mono">4.35 Cr</span>
                  </div>
                  <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                     <div className="h-full bg-blue-500 w-[14.5%]"></div>
                  </div>
               </div>

               <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                     <span className="text-gray-400">Marketing (7%)</span>
                     <span className="text-white font-mono">2.05 Cr</span>
                  </div>
                  <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                     <div className="h-full bg-purple-500 w-[7%]"></div>
                  </div>
               </div>
               
               <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                     <span className="text-gray-400">Production (7.5%)</span>
                     <span className="text-white font-mono">2.25 Cr</span>
                  </div>
                  <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                     <div className="h-full bg-yellow-500 w-[7.5%]"></div>
                  </div>
               </div>
            </div>
         </div>

         {/* Event Breakdown */}
         <div className="md:col-span-2 bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 flex flex-col">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
               <span className="w-2 h-8 bg-green-500 rounded-full"></span>
               Event-wise Allocation
            </h3>

            <div className="flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar">
               {/* NPL */}
               <div className="flex items-center gap-4 p-4 bg-neutral-800/50 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-[var(--color-primary)]/20 flex items-center justify-center text-[var(--color-primary)] font-black text-xl">01</div>
                  <div className="flex-1">
                     <div className="flex justify-between items-baseline mb-1">
                        <h4 className="text-white font-bold">NPL Season 3</h4>
                        <span className="text-white font-mono font-bold">7.8 Cr</span>
                     </div>
                     <div className="w-full bg-neutral-900 h-1.5 rounded-full overflow-hidden mb-2">
                        <div className="h-full bg-[var(--color-primary)] w-[100%]"></div>
                     </div>
                     <div className="flex gap-4 text-[10px] text-gray-500 font-mono uppercase">
                        <span>Rights: 6 Cr</span>
                        <span>Mktg: 50L</span>
                        <span>Tech: 1 Cr</span>
                     </div>
                  </div>
               </div>

               {/* ICC League */}
               <div className="flex items-center gap-4 p-4 bg-neutral-800/50 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-500 font-black text-xl">02</div>
                  <div className="flex-1">
                     <div className="flex justify-between items-baseline mb-1">
                        <h4 className="text-white font-bold">ICC League Games</h4>
                        <span className="text-white font-mono font-bold">6.4 Cr</span>
                     </div>
                     <div className="w-full bg-neutral-900 h-1.5 rounded-full overflow-hidden mb-2">
                        <div className="h-full bg-blue-500 w-[82%]"></div>
                     </div>
                     <div className="flex gap-4 text-[10px] text-gray-500 font-mono uppercase">
                        <span>Rights: 4 Cr</span>
                        <span>Mktg: 40L</span>
                        <span>Tech: 1 Cr</span>
                     </div>
                  </div>
               </div>

               {/* CAN Home Series */}
               <div className="flex items-center gap-4 p-4 bg-neutral-800/50 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center text-green-500 font-black text-xl">03</div>
                  <div className="flex-1">
                     <div className="flex justify-between items-baseline mb-1">
                        <h4 className="text-white font-bold">CAN Home Series</h4>
                        <span className="text-white font-mono font-bold">5.65 Cr</span>
                     </div>
                     <div className="w-full bg-neutral-900 h-1.5 rounded-full overflow-hidden mb-2">
                        <div className="h-full bg-green-500 w-[72%]"></div>
                     </div>
                     <div className="flex gap-4 text-[10px] text-gray-500 font-mono uppercase">
                        <span>Rights: 2 Cr</span>
                        <span>Prod: 1.5 Cr</span>
                        <span>Tech: 1 Cr</span>
                     </div>
                  </div>
               </div>

               {/* ICC World Cup */}
               <div className="flex items-center gap-4 p-4 bg-neutral-800/50 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-500 font-black text-xl">04</div>
                  <div className="flex-1">
                     <div className="flex justify-between items-baseline mb-1">
                        <h4 className="text-white font-bold">ICC World Cup 2026</h4>
                        <span className="text-white font-mono font-bold">4.0 Cr</span>
                     </div>
                     <div className="w-full bg-neutral-900 h-1.5 rounded-full overflow-hidden mb-2">
                        <div className="h-full bg-purple-500 w-[51%]"></div>
                     </div>
                     <div className="flex gap-4 text-[10px] text-gray-500 font-mono uppercase">
                        <span>Rights: 3 Cr</span>
                        <span>Tech: 45L</span>
                        <span>Other: 20L</span>
                     </div>
                  </div>
               </div>

               {/* Smaller Events Grid */}
               <div className="grid grid-cols-3 gap-3">
                  <div className="bg-neutral-800/30 p-3 rounded-lg border border-neutral-800">
                     <div className="text-[10px] text-gray-500 uppercase mb-1">Test Series</div>
                     <div className="text-white font-bold">2.5 Cr</div>
                  </div>
                  <div className="bg-neutral-800/30 p-3 rounded-lg border border-neutral-800">
                     <div className="text-[10px] text-gray-500 uppercase mb-1">Asia Cup</div>
                     <div className="text-white font-bold">2.25 Cr</div>
                  </div>
                  <div className="bg-neutral-800/30 p-3 rounded-lg border border-neutral-800">
                     <div className="text-[10px] text-gray-500 uppercase mb-1">ACC Premier</div>
                     <div className="text-white font-bold">1.45 Cr</div>
                  </div>
               </div>

            </div>
         </div>
      </div>
    </div>
  );
};



