'use client';

import { motion } from 'framer-motion';

export const SportsFinancialsSlide = () => {
  return (
    <div className="flex flex-col h-full gap-6">
      
      {/* Top Row: ROI Snapshots */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-1/3 min-h-[200px]">
         {/* Cricket ROI */}
         <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden"
         >
            <div className="absolute right-0 top-0 p-4 opacity-5">
               <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M2 20h20v2H2v-2zm2-8h2v7H4v-7zm5 0h2v7H9v-7zm5 0h2v7h-2v-7zm5 0h2v7h-2v-7zM2 7l10-5 10 5v11H2V7zm10-2.5L4.5 8H19.5L12 4.5z"/></svg>
            </div>
            <div className="flex justify-between items-start mb-4">
               <div>
                  <h3 className="text-gray-400 font-mono text-sm uppercase tracking-widest mb-1">Cricket ROI</h3>
                  <div className="text-xs text-gray-500">CAN / NPL / ICC</div>
               </div>
               <div className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-sm font-bold border border-green-500/20">Profitable</div>
            </div>
            <div className="flex items-baseline gap-4">
               <span className="text-6xl font-black text-white">1.5x</span>
               <span className="text-gray-400 text-sm">Return</span>
            </div>
            <div className="flex gap-8 mt-4 text-sm">
               <div>
                  <span className="block text-gray-500 text-xs">Rights Cost</span>
                  <span className="text-white font-mono">NPR 12 Cr</span>
               </div>
               <div>
                  <span className="block text-gray-500 text-xs">Revenue</span>
                  <span className="text-green-400 font-mono">NPR 18 Cr</span>
               </div>
            </div>
         </motion.div>

         {/* Football ROI */}
         <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden"
         >
            <div className="absolute right-0 top-0 p-4 opacity-5">
               <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.21 2.5-1.64-2.5-1.65-7.51-3.21 2.5 1.64 2.5 1.65-2.5 6.42z"/></svg>
            </div>
             <div className="flex justify-between items-start mb-4">
               <div>
                  <h3 className="text-gray-400 font-mono text-sm uppercase tracking-widest mb-1">Football ROI</h3>
                  <div className="text-xs text-gray-500">Domestic Leagues</div>
               </div>
               <div className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-sm font-bold border border-green-500/20">Sustainable</div>
            </div>
            <div className="flex items-baseline gap-4">
               <span className="text-6xl font-black text-white">1.33x</span>
               <span className="text-gray-400 text-sm">Return</span>
            </div>
             <div className="flex gap-8 mt-4 text-sm">
               <div>
                  <span className="block text-gray-500 text-xs">Rights Cost</span>
                  <span className="text-white font-mono">NPR 3 Cr</span>
               </div>
               <div>
                  <span className="block text-gray-500 text-xs">Revenue</span>
                  <span className="text-green-400 font-mono">NPR 4 Cr</span>
               </div>
            </div>
         </motion.div>
      </div>

      {/* Bottom Row: Cricket P&L Deep Dive */}
      <div className="flex-1 bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 flex flex-col relative overflow-hidden">
         <div className="flex items-center gap-3 mb-8">
             <div className="w-2 h-8 bg-[var(--color-primary)] rounded-full"></div>
             <div>
               <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Cricket P&L Deep Dive</h3>
               <p className="text-sm text-gray-500">Proof of Monetization & Cost Allocation</p>
             </div>
         </div>

         <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Costs */}
            <div className="space-y-6">
               <div className="flex justify-between items-end border-b border-neutral-700 pb-2 mb-4">
                  <h4 className="text-lg text-gray-400">Total Rights Cost</h4>
                  <span className="text-2xl font-mono text-white">12 Cr</span>
               </div>
               
               <div className="space-y-3">
                  <div className="flex items-center gap-4">
                     <div className="w-24 text-xs text-gray-500 text-right">NPL</div>
                     <div className="flex-1 h-8 bg-neutral-800 rounded flex items-center px-3 text-xs font-mono text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-red-900/20 w-[50%]"></div>
                        <span className="relative z-10">6 Cr</span>
                     </div>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="w-24 text-xs text-gray-500 text-right">ICC 2026</div>
                     <div className="flex-1 h-8 bg-neutral-800 rounded flex items-center px-3 text-xs font-mono text-white relative overflow-hidden">
                         <div className="absolute inset-0 bg-red-900/20 w-[33%]"></div>
                         <span className="relative z-10">4 Cr</span>
                     </div>
                  </div>
                   <div className="flex items-center gap-4">
                     <div className="w-24 text-xs text-gray-500 text-right">CAN Series</div>
                     <div className="flex-1 h-8 bg-neutral-800 rounded flex items-center px-3 text-xs font-mono text-white relative overflow-hidden">
                         <div className="absolute inset-0 bg-red-900/20 w-[16%]"></div>
                         <span className="relative z-10">2 Cr</span>
                     </div>
                  </div>
               </div>
               <p className="text-[10px] text-gray-600 italic text-right">*Internal planning allocation</p>
            </div>

            {/* Revenue */}
             <div className="space-y-6">
               <div className="flex justify-between items-end border-b border-neutral-700 pb-2 mb-4">
                  <h4 className="text-lg text-gray-400">Total Revenue</h4>
                  <span className="text-2xl font-mono text-[var(--color-primary)]">18 Cr</span>
               </div>
               
               <div className="space-y-3">
                  <div className="flex items-center gap-4">
                     <div className="flex-1 h-8 bg-neutral-800 rounded flex items-center justify-end px-3 text-xs font-mono text-white relative overflow-hidden">
                        <div className="absolute inset-y-0 right-0 bg-green-900/20 w-[33%]"></div>
                        <span className="relative z-10">6 Cr</span>
                     </div>
                     <div className="w-32 text-xs text-gray-500">Subscription Attr.</div>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="flex-1 h-8 bg-neutral-800 rounded flex items-center justify-end px-3 text-xs font-mono text-white relative overflow-hidden">
                        <div className="absolute inset-y-0 right-0 bg-green-900/20 w-[27%]"></div>
                        <span className="relative z-10">5 Cr</span>
                     </div>
                     <div className="w-32 text-xs text-gray-500">Title Sponsor</div>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="flex-1 h-8 bg-neutral-800 rounded flex items-center justify-end px-3 text-xs font-mono text-white relative overflow-hidden">
                        <div className="absolute inset-y-0 right-0 bg-green-900/20 w-[22%]"></div>
                        <span className="relative z-10">4 Cr</span>
                     </div>
                     <div className="w-32 text-xs text-gray-500">Spot Ads</div>
                  </div>
                   <div className="flex items-center gap-4">
                     <div className="flex-1 h-8 bg-neutral-800 rounded flex items-center justify-end px-3 text-xs font-mono text-white relative overflow-hidden">
                        <div className="absolute inset-y-0 right-0 bg-green-900/20 w-[16%]"></div>
                        <span className="relative z-10">3 Cr</span>
                     </div>
                     <div className="w-32 text-xs text-gray-500">Powered By (x2)</div>
                  </div>
               </div>
            </div>

         </div>
      </div>

    </div>
  );
};


