'use client';

import { motion } from 'framer-motion';

export const RegionalRealitySlide = () => {
  const realityShows = [
    { title: "Roadies Nepal", subtitle: "Adventure Reality", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" },
    { title: "Blind Date: Elevated", subtitle: "Dating / Drama Format", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
    { title: "Rajatpat Revamped", subtitle: "Film & Gossip", icon: "M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" },
    { title: "Kathghara", subtitle: "Courtroom Drama", icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" },
    { title: "Podcast to Talkshows", subtitle: "Conversion Format", icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" },
  ];

  return (
    <div className="w-full h-full flex flex-col">
       <div className="flex justify-between items-baseline mb-8 border-b border-neutral-800 pb-6 shrink-0">
          <div>
             <h2 className="text-4xl font-bold tracking-tight mb-2">Regional + Reality</h2>
             <p className="text-gray-400 text-sm font-mono uppercase tracking-wide">YouTube → OTT Migration Strategy</p>
          </div>
          <span className="text-gray-500 font-mono text-sm">26</span>
       </div>
       
       <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Regional Narrative */}
          <div className="flex flex-col gap-6">
              <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 rounded-3xl border border-neutral-700 h-full flex flex-col justify-between group hover:border-[var(--color-primary)]/50 transition-colors">
                 <div>
                    <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary)]/20 flex items-center justify-center mb-6 text-[var(--color-primary)]">
                       <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Regional Narrative</h3>
                    <p className="text-xl text-gray-300">
                       Comedy web series in <span className="text-white font-semibold">Bhojpuri/Maithili</span>.
                    </p>
                    <p className="mt-4 text-gray-400">Targeting the Terai belt for mass market capture.</p>
                 </div>
                 <div className="w-full bg-neutral-950/50 rounded-xl p-4 mt-8">
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-wide block mb-2">Strategy</span>
                    <span className="text-white font-medium">Hyper-local content to drive adoption outside Kathmandu valley.</span>
                 </div>
              </div>
          </div>

          {/* Right Column: Reality List */}
          <div className="flex flex-col gap-4">
             <h3 className="text-xl font-mono text-gray-400 uppercase tracking-widest mb-2">Reality Pipeline</h3>
             <div className="space-y-3">
                {realityShows.map((show, idx) => (
                   <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl flex items-center gap-4 hover:bg-neutral-800 transition-colors group cursor-default"
                   >
                      <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-neutral-700 transition-all">
                         <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={show.icon} /></svg>
                      </div>
                      <div>
                         <div className="font-bold text-white group-hover:text-[var(--color-primary)] transition-colors">{show.title}</div>
                         <div className="text-xs text-gray-500 font-mono">{show.subtitle}</div>
                      </div>
                   </motion.div>
                ))}
             </div>
          </div>
       </div>
    </div>
  );
};


