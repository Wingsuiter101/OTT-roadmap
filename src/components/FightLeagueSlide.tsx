'use client';

import { motion } from 'framer-motion';

export const FightLeagueSlide = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
      {/* Column 1: The Concept (6 cols) */}
      <div className="lg:col-span-6 flex flex-col h-full bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden relative group">
         {/* Background Image Placeholder */}
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale mix-blend-luminosity group-hover:opacity-30 transition-opacity duration-700"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

         <div className="relative z-10 p-10 flex flex-col h-full justify-end">
            <div className="mb-auto">
               <span className="inline-block px-3 py-1 rounded bg-[var(--color-primary)] text-white text-xs font-bold uppercase tracking-wider mb-4">Owned IP</span>
               <h3 className="text-5xl md:text-6xl font-black text-white italic tracking-tighter leading-none mb-2">
                  THE FIGHT <br/><span className="text-[var(--color-primary)]">LEAGUE</span>
               </h3>
               <p className="text-gray-400 text-lg">Nepal's Premier MMA Promotion</p>
            </div>

            <div className="grid grid-cols-1 gap-4">
               <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                     <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                     </svg>
                  </div>
                  <div>
                     <h4 className="text-white font-bold text-sm uppercase">Monthly "Fight Nights"</h4>
                     <p className="text-gray-500 text-xs">Regular cadence to build fighter narratives.</p>
                  </div>
               </div>
               <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                     <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                  </div>
                  <div>
                     <h4 className="text-white font-bold text-sm uppercase">High-Margin TVOD</h4>
                     <p className="text-gray-500 text-xs">Pay-Per-View transactional revenue.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Column 2: Financials (6 cols) */}
      <div className="lg:col-span-6 flex flex-col h-full bg-neutral-900 border border-neutral-800 rounded-3xl p-10 relative">
         <div className="flex items-center justify-between mb-8 pb-6 border-b border-neutral-800">
            <div>
               <h3 className="text-2xl font-bold text-white mb-1">Season Financials</h3>
               <p className="text-gray-500 text-xs uppercase tracking-wide">Unit Economics per Season</p>
            </div>
            <div className="text-right bg-white/5 px-4 py-2 rounded-xl border border-white/10">
               <span className="block text-[10px] text-gray-400 uppercase tracking-wider">ROI</span>
               <span className="text-2xl font-black text-white">1.8x</span>
            </div>
         </div>

         {/* P&L Table */}
         <div className="flex-1 flex flex-col gap-6">
            
            {/* Cost Block */}
            <div className="bg-neutral-800/30 p-6 rounded-2xl border border-neutral-800 flex justify-between items-center">
               <div>
                  <span className="text-red-400/80 font-mono text-xs uppercase block mb-1">Total Cost</span>
                  <span className="text-3xl font-bold text-white">80 Lakhs</span>
               </div>
               <div className="text-right">
                  <span className="text-gray-500 text-xs block">Production & Operations</span>
               </div>
            </div>

            {/* Revenue Breakdown */}
            <div className="flex-1 bg-neutral-800/30 p-6 rounded-2xl border border-neutral-800 flex flex-col">
               <div className="flex justify-between items-end mb-6">
                  <div>
                     <span className="text-green-400/80 font-mono text-xs uppercase block mb-1">Total Revenue</span>
                     <span className="text-3xl font-bold text-white">1.5 Cr</span>
                  </div>
               </div>

               <div className="flex-1 flex flex-col justify-center gap-4">
                  {/* Gate */}
                  <div>
                     <div className="flex justify-between text-xs text-gray-400 mb-1">
                        <span>Gate Receipts</span>
                        <span>30 Lakhs</span>
                     </div>
                     <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-white h-full w-[20%]"></div>
                     </div>
                  </div>
                  
                  {/* TVOD */}
                  <div>
                     <div className="flex justify-between text-xs text-gray-400 mb-1">
                        <span>PPV / TVOD (High Margin)</span>
                        <span className="text-[var(--color-primary)]">70 Lakhs</span>
                     </div>
                     <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-[var(--color-primary)] h-full w-[47%]"></div>
                     </div>
                  </div>

                  {/* Sponsors */}
                  <div>
                     <div className="flex justify-between text-xs text-gray-400 mb-1">
                        <span>Sponsors (Betting Partner)</span>
                        <span>50 Lakhs</span>
                     </div>
                     <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-neutral-600 h-full w-[33%]"></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

