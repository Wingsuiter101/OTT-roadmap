'use client';

import { motion } from 'framer-motion';

export const SportsStrategySlide = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
      {/* Column 1: The Playbook (Takes up 7 cols) */}
      <div className="lg:col-span-7 flex flex-col h-full bg-neutral-900/50 border border-neutral-800 rounded-3xl p-10 relative overflow-hidden group">
         <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
            <svg className="w-96 h-96 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
         </div>

         <div className="flex items-center gap-4 mb-10">
            <div className="w-2 h-10 bg-[var(--color-primary)] rounded-full"></div>
            <h3 className="text-4xl font-bold text-white uppercase tracking-tight">The Playbook</h3>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 flex-1 content-center">
            <div className="flex gap-4 items-start group/item">
               <span className="text-5xl text-[var(--color-primary)] font-black opacity-30 group-hover/item:opacity-100 transition-opacity">01</span>
               <div>
                  <h4 className="text-2xl font-bold text-white mb-2">Create "National Moments"</h4>
                  <p className="text-gray-400 text-lg leading-snug">Buy rights that stop the nation. Leverage cultural peaks for massive acquisition.</p>
               </div>
            </div>
            <div className="flex gap-4 items-start group/item">
               <span className="text-5xl text-[var(--color-primary)] font-black opacity-30 group-hover/item:opacity-100 transition-opacity">02</span>
               <div>
                  <h4 className="text-2xl font-bold text-white mb-2">Stack for Cadence</h4>
                  <p className="text-gray-400 text-lg leading-snug">Layer smaller properties to fill the gaps between tentpoles. Ensure a weekly schedule.</p>
               </div>
            </div>
            <div className="flex gap-4 items-start group/item">
               <span className="text-5xl text-[var(--color-primary)] font-black opacity-30 group-hover/item:opacity-100 transition-opacity">03</span>
               <div>
                  <h4 className="text-2xl font-bold text-white mb-2">3-Way Monetization</h4>
                  <p className="text-gray-400 text-lg leading-snug">Convert viewership into: Sponsorship + Spot Sales + Subscription Attribution.</p>
               </div>
            </div>
            <div className="flex gap-4 items-start group/item">
               <span className="text-5xl text-[var(--color-primary)] font-black opacity-30 group-hover/item:opacity-100 transition-opacity">04</span>
               <div>
                  <h4 className="text-2xl font-bold text-white mb-2">Build Owned IP</h4>
                  <p className="text-gray-400 text-lg leading-snug">Reduce long-term rights risk by owning the asset (e.g., Fight League).</p>
               </div>
            </div>
         </div>
      </div>

      {/* Column 2: The Engine (Football Focus - Takes up 5 cols) */}
      <div className="lg:col-span-5 flex flex-col h-full bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 rounded-3xl p-8 relative overflow-hidden">
         {/* Background pattern */}
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
         
         <div className="relative z-10 flex flex-col h-full min-h-0 justify-center">
            <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center text-3xl mb-6 border border-white/20 shrink-0">
               <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.035M15 6h.01M15 10h.01M15 14h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
            </div>
            
            <h4 className="text-3xl md:text-4xl font-bold text-white mb-4">Domestic Football</h4>
            
            <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed font-light">
               While Cricket brings the spikes, Football provides the baseline. It is the consistent <span className="text-white font-semibold">weekly inventory</span> that keeps the platform alive between peaks.
            </p>

            <div className="space-y-3">
               <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-colors group/card">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] group-hover/card:scale-125 transition-transform shrink-0"></div>
                  <span className="text-gray-300 text-base font-medium leading-tight">Ground Rights + Broadcast Sponsors Model</span>
               </div>
               <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-colors group/card">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] group-hover/card:scale-125 transition-transform shrink-0"></div>
                  <span className="text-gray-300 text-base font-medium leading-tight">Broadens Advertiser Base (Beyond Cricket)</span>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};
