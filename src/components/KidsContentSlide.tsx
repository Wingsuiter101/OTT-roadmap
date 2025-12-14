'use client';

import { motion } from 'framer-motion';

export const KidsContentSlide = () => {
  return (
    <div className="w-full h-full flex flex-col">
       <div className="flex justify-between items-baseline mb-8 border-b border-neutral-800 pb-6 shrink-0">
          <div>
             <h2 className="text-4xl font-bold tracking-tight mb-2">DHGO Junior</h2>
             <p className="text-gray-400 text-sm font-mono uppercase tracking-wide">Edutainment • Safety • Discovery</p>
          </div>
          <span className="text-gray-500 font-mono text-sm">32</span>
       </div>
       
       <div className="flex-1 grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-full min-h-0">
          
          {/* Feature 1: The Localized "Ms. Rachel" - Large Card */}
          <div className="md:col-span-2 md:row-span-2 bg-neutral-900 border border-neutral-800 rounded-3xl p-8 relative overflow-hidden group hover:border-yellow-500/50 transition-colors">
             <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                <svg className="w-64 h-64 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
             </div>
             
             <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-yellow-500/20 text-yellow-500 flex items-center justify-center mb-6">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4">The "Nepali Ms. Rachel"</h3>
                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                   Original live-action IP focused on <span className="text-white font-semibold">Nepali phonics & manners</span>. 
                   Bridging the gap for digital-first toddlers.
                </p>

                <div className="mt-auto">
                   <div className="aspect-video bg-neutral-800 rounded-xl border border-neutral-700 flex items-center justify-center relative group-hover:scale-[1.02] transition-transform duration-500">
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center pl-1">
                         <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /></svg>
                      </div>
                      <div className="absolute bottom-4 left-4 bg-black/50 px-2 py-1 rounded text-xs font-mono text-white">EPISODE 1: NAMASTE</div>
                   </div>
                </div>
             </div>
          </div>

          {/* Feature 2: Nostalgia / Restored Classics */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 flex flex-col justify-between group hover:border-blue-500/50 transition-colors">
             <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-500 flex items-center justify-center mb-4">
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
             </div>
             <div>
                <h3 className="text-xl font-bold text-white mb-2">Nostalgia Resurrected</h3>
                <p className="text-sm text-gray-400">Bringing back <span className="text-white font-semibold">Moomin</span> & <span className="text-white font-semibold">Mina</span>.</p>
             </div>
             <div className="flex gap-2 mt-4">
                <span className="px-2 py-1 bg-neutral-800 border border-white/10 rounded text-[10px] text-blue-400 font-mono uppercase">4K Upscale</span>
                <span className="px-2 py-1 bg-neutral-800 border border-white/10 rounded text-[10px] text-blue-400 font-mono uppercase">Redub</span>
             </div>
          </div>

          {/* Feature 3: Gen-AI Studio */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 flex flex-col justify-between group hover:border-purple-500/50 transition-colors">
             <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-500 flex items-center justify-center mb-4">
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
             </div>
             <div>
                <h3 className="text-xl font-bold text-white mb-2">Gen-AI Studio</h3>
                <p className="text-sm text-gray-400">Safe, generative animation & dialogue. Endless localized storytelling on demand.</p>
             </div>
             <div className="mt-2 text-[10px] text-purple-400 font-mono uppercase tracking-wide">
                Infinite Library
             </div>
          </div>

          {/* Feature 4: Safety & Security */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 flex items-center gap-6 group hover:border-green-500/50 transition-colors">
             <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
                 <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
             </div>
             <div>
                <h3 className="text-lg font-bold text-white mb-1">Walled Garden</h3>
                <p className="text-sm text-gray-400">Ad-free environment. PIN-protected exit. 100% Kid-Safe.</p>
             </div>
          </div>

          {/* Feature 5: Parental Insights (Added) */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 flex flex-col justify-center group hover:border-[var(--color-primary)]/50 transition-colors">
             <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-white">Parental Dashboard</h3>
                <span className="text-[10px] font-mono bg-neutral-800 px-2 py-1 rounded text-gray-400">NEW</span>
             </div>
             <div className="space-y-3">
                 <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full w-[70%] bg-blue-500 rounded-full"></div>
                 </div>
                 <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full w-[45%] bg-yellow-500 rounded-full"></div>
                 </div>
                 <p className="text-xs text-gray-500 mt-2">Track watch time and learning progress.</p>
             </div>
          </div>

       </div>
    </div>
  );
};

