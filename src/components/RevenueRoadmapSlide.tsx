'use client';

import { motion } from 'framer-motion';

export const RevenueRoadmapSlide = () => {
  return (
    <div className="w-full h-full flex flex-col">
       <div className="flex justify-between items-baseline mb-8 border-b border-neutral-800 pb-6 shrink-0">
          <div>
             <h2 className="text-4xl font-bold tracking-tight mb-2">Revenue Roadmap</h2>
             <p className="text-gray-400 text-sm font-mono uppercase tracking-wide">Path to Profitability</p>
          </div>
          <span className="text-gray-500 font-mono text-sm">39</span>
       </div>
       
       <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Revenue Target Block */}
          <div className="flex flex-col justify-center h-full space-y-8">
             <div className="bg-neutral-900/80 p-10 rounded-3xl border border-neutral-800 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                   <svg className="w-40 h-40 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                
                <h3 className="text-gray-400 font-mono text-sm uppercase tracking-widest mb-4">FY 2026 Target</h3>
                <div className="flex items-baseline gap-4">
                   <span className="text-7xl font-black text-white tracking-tighter">73 Cr</span>
                   <span className="text-green-500 font-bold text-xl flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                      +10% Margin
                   </span>
                </div>
                <p className="text-gray-500 mt-4 text-lg">Projected Net Profit: <span className="text-white font-bold">7 Cr</span></p>

                <div className="mt-8 pt-8 border-t border-neutral-800">
                   <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">Projected Burn</span>
                      <span className="text-white font-mono">66 Cr</span>
                   </div>
                   <div className="w-full bg-neutral-800 h-2 mt-2 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500 w-[94%]"></div>
                   </div>
                </div>
             </div>

             <div className="grid grid-cols-2 gap-4">
                <div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800">
                   <span className="text-gray-500 text-xs uppercase tracking-wide block mb-2">Break-even</span>
                   <span className="text-2xl font-bold text-white">Q4 2026</span>
                </div>
                <div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800">
                   <span className="text-gray-500 text-xs uppercase tracking-wide block mb-2">Gross Margin</span>
                   <span className="text-2xl font-bold text-white">~15%</span>
                </div>
             </div>
          </div>

          {/* Revenue Mix */}
          <div className="space-y-6">
             <h3 className="text-xl font-bold text-white mb-6">Revenue Mix Targets</h3>
             
             {/* Subscriptions */}
             <div className="group">
                <div className="flex justify-between items-baseline mb-2">
                   <h4 className="text-lg font-bold text-white">Subscriptions</h4>
                   <span className="text-2xl font-mono text-[var(--color-primary)]">32 Cr</span>
                </div>
                <div className="w-full bg-neutral-800 h-4 rounded-full overflow-hidden relative">
                   <div className="absolute inset-y-0 left-0 bg-[var(--color-primary)] w-[44%]"></div>
                </div>
                <p className="text-xs text-gray-500 mt-2 group-hover:text-gray-300 transition-colors">Recurring revenue from annual & monthly plans. Driven by Sports & Originals.</p>
             </div>

             {/* Ads */}
             <div className="group">
                <div className="flex justify-between items-baseline mb-2">
                   <h4 className="text-lg font-bold text-white">Ad Sales</h4>
                   <span className="text-2xl font-mono text-blue-500">27 Cr</span>
                </div>
                <div className="w-full bg-neutral-800 h-4 rounded-full overflow-hidden relative">
                   <div className="absolute inset-y-0 left-0 bg-blue-500 w-[37%]"></div>
                </div>
                <p className="text-xs text-gray-500 mt-2 group-hover:text-gray-300 transition-colors">Programmatic + Direct Sponsorships (Title Sponsors, Powered By).</p>
             </div>

             {/* TVOD */}
             <div className="group">
                <div className="flex justify-between items-baseline mb-2">
                   <h4 className="text-lg font-bold text-white">TVOD / PPV</h4>
                   <span className="text-2xl font-mono text-purple-500">14 Cr</span>
                </div>
                <div className="w-full bg-neutral-800 h-4 rounded-full overflow-hidden relative">
                   <div className="absolute inset-y-0 left-0 bg-purple-500 w-[19%]"></div>
                </div>
                <p className="text-xs text-gray-500 mt-2 group-hover:text-gray-300 transition-colors">High-margin transactional revenue from Fight League & Movie Premieres.</p>
             </div>

          </div>

       </div>
    </div>
  );
};
