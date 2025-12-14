'use client';

import { motion } from 'framer-motion';

export const MovieWindowingSlide = () => {
  return (
    <div className="w-full h-full flex flex-col">
       <div className="flex justify-between items-baseline mb-12 border-b border-neutral-800 pb-6 shrink-0">
          <div>
             <h2 className="text-4xl font-bold tracking-tight mb-2">Mainstream Movie Windowing</h2>
             <p className="text-gray-400 text-sm font-mono uppercase tracking-wide">Lifecycle Revenue Strategy</p>
          </div>
          <span className="text-gray-500 font-mono text-sm">31</span>
       </div>
       
       {/* Timeline Container */}
       <div className="flex-1 flex flex-col justify-center relative">
          
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-neutral-800 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-3 gap-8 relative z-10">
             
             {/* Phase 1: Theatrical */}
             <div className="relative group">
                <div className="aspect-[16/9] bg-neutral-900 rounded-xl border border-neutral-800 overflow-hidden relative mb-6 group-hover:border-white/30 transition-colors">
                   <div className="absolute top-4 left-4 bg-white text-black text-xs font-black px-2 py-1 uppercase">Weeks 1-4</div>
                   <div className="w-full h-full flex items-center justify-center opacity-20">
                      <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" /></svg>
                   </div>
                </div>
                <div className="px-2">
                   <h3 className="text-2xl font-bold text-white mb-2">Theatrical Run</h3>
                   <p className="text-gray-400 text-sm">Traditional cinema release window.</p>
                </div>
                <div className="absolute top-1/2 -right-4 w-8 h-8 bg-neutral-950 border border-neutral-800 rounded-full flex items-center justify-center z-20 -translate-y-1/2 translate-x-1/2">
                   <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
             </div>

             {/* Phase 2: Premiere Access (Highlighted) */}
             <div className="relative group -mt-8">
                <div className="aspect-[16/9] bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-xl border border-[var(--color-primary)] overflow-hidden relative mb-6 shadow-[0_0_50px_-10px_rgba(var(--color-primary-rgb),0.3)] group-hover:shadow-[0_0_80px_-10px_rgba(var(--color-primary-rgb),0.5)] transition-shadow duration-500">
                   <div className="absolute top-4 left-4 bg-[var(--color-primary)] text-white text-xs font-black px-2 py-1 uppercase">Weeks 5-8</div>
                   <div className="absolute top-4 right-4 text-[var(--color-primary)] font-mono text-sm font-bold">NPR 200</div>
                   
                   <div className="w-full h-full flex flex-col items-center justify-center">
                      <h4 className="text-3xl font-black text-white uppercase italic tracking-tighter">Premiere Access</h4>
                      <span className="text-[var(--color-primary)] font-mono text-sm mt-2">TVOD WINDOW</span>
                   </div>
                </div>
                <div className="px-2 text-center">
                   <h3 className="text-2xl font-bold text-white mb-2">Digital Rental</h3>
                   <p className="text-gray-400 text-sm">Capture high-intent viewers immediately post-theatrical.</p>
                </div>
                <div className="absolute top-1/2 -right-4 w-8 h-8 bg-neutral-950 border border-neutral-800 rounded-full flex items-center justify-center z-20 -translate-y-1/2 translate-x-1/2 mt-4">
                   <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
             </div>

             {/* Phase 3: SVOD */}
             <div className="relative group">
                <div className="aspect-[16/9] bg-neutral-900 rounded-xl border border-neutral-800 overflow-hidden relative mb-6 group-hover:border-white/30 transition-colors">
                   <div className="absolute top-4 left-4 bg-neutral-700 text-white text-xs font-black px-2 py-1 uppercase">Week 9+</div>
                   <div className="w-full h-full flex items-center justify-center opacity-20">
                      <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                   </div>
                </div>
                <div className="px-2">
                   <h3 className="text-2xl font-bold text-white mb-2">DHGO Exclusive</h3>
                   <p className="text-gray-400 text-sm">Permanent library addition for subscribers.</p>
                </div>
             </div>

          </div>

          {/* Distributor Partnership */}
          <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center justify-between">
             <div className="flex items-center gap-6">
                 <div className="bg-white/10 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                 </div>
                 <div>
                    <h4 className="text-white font-bold uppercase tracking-wide">Strategic Partnership</h4>
                    <p className="text-gray-400 text-sm">Exclusive digital rights tie-up with <span className="text-white font-semibold">OSR Digital</span> & major distributors.</p>
                 </div>
             </div>
             <div className="text-[var(--color-primary)] font-mono text-sm uppercase tracking-widest border border-[var(--color-primary)]/30 px-4 py-2 rounded-full">
                Revenue Capture
             </div>
          </div>

       </div>
    </div>
  );
};


