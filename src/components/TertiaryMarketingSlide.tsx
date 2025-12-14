'use client';

import { motion } from 'framer-motion';

export const TertiaryMarketingSlide = () => {
  return (
    <div className="w-full h-full flex flex-col">
       <div className="flex justify-between items-baseline mb-8 border-b border-neutral-800 pb-6 shrink-0">
          <div>
             <h2 className="text-4xl font-bold tracking-tight mb-2">Tertiary Marketing</h2>
             <p className="text-gray-400 text-sm font-mono uppercase tracking-wide">The YouTube Funnel</p>
          </div>
          <span className="text-gray-500 font-mono text-sm">33</span>
       </div>
       
       <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Visual Funnel Strategy */}
          <div className="relative h-full flex flex-col justify-center items-center p-8 bg-neutral-900/50 rounded-3xl border border-neutral-800">
             {/* YouTube Top */}
             <div className="w-full max-w-sm bg-[#FF0000]/10 border border-[#FF0000]/20 p-6 rounded-2xl flex items-center gap-4 mb-4 relative z-10">
                <div className="w-12 h-12 bg-[#FF0000] rounded-lg flex items-center justify-center text-white">
                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                </div>
                <div>
                   <h3 className="font-bold text-white text-lg">YouTube</h3>
                   <p className="text-xs text-gray-400 uppercase tracking-wide">The Funnel (Discovery)</p>
                </div>
             </div>

             {/* Arrow Down */}
             <div className="h-16 w-px bg-gradient-to-b from-gray-700 to-[var(--color-primary)] relative z-0">
                <motion.div 
                   animate={{ y: [0, 64] }}
                   transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                   className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"
                />
             </div>

             {/* DHGO Bottom */}
             <div className="w-full max-w-sm bg-[var(--color-primary)]/10 border border-[var(--color-primary)] p-6 rounded-2xl flex items-center gap-4 mt-4 relative z-10 shadow-[0_0_40px_-10px_var(--color-primary)]">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-black font-black tracking-tighter">
                   DH
                </div>
                <div>
                   <h3 className="font-bold text-white text-lg">DHGO</h3>
                   <p className="text-xs text-[var(--color-primary)] uppercase tracking-wide">The Destination (Monetization)</p>
                </div>
             </div>

             {/* Background Glow */}
             <div className="absolute inset-0 bg-gradient-to-b from-red-900/5 via-transparent to-[var(--color-primary)]/5 rounded-3xl pointer-events-none"></div>
          </div>

          {/* Content Points */}
          <div className="space-y-4">
             {/* Point 1 */}
             <div className="group bg-neutral-900 border border-neutral-800 hover:border-red-500/50 p-5 rounded-2xl transition-colors">
                <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-red-500 shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                   </div>
                   <div>
                      <h3 className="text-lg font-bold text-white mb-1">Podcasts & Interviews</h3>
                      <p className="text-gray-400 text-sm">Long-form with <span className="text-white font-semibold">Cricketers, Athletes</span>, Fighters & Stars. Sits on YouTube to drive app traffic.</p>
                   </div>
                </div>
             </div>

             {/* Point 2: Game Shows */}
             <div className="group bg-neutral-900 border border-neutral-800 hover:border-blue-500/50 p-5 rounded-2xl transition-colors">
                <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-blue-500 shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                   </div>
                   <div>
                      <h3 className="text-lg font-bold text-white mb-1">YouTube Game Shows</h3>
                      <p className="text-gray-400 text-sm">Casual formats: food tasting, challenges, quizzes. Simple viral fodder.</p>
                   </div>
                </div>
             </div>

             {/* Point 3: Clips & Highlights */}
             <div className="group bg-neutral-900 border border-neutral-800 hover:border-yellow-500/50 p-5 rounded-2xl transition-colors">
                <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-yellow-500 shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                   </div>
                   <div>
                      <h3 className="text-lg font-bold text-white mb-1">Highlights & Clips</h3>
                      <p className="text-gray-400 text-sm">High-frequency sports highlights + reality/drama clips designed for Shorts/Reels dominance.</p>
                   </div>
                </div>
             </div>

             {/* Point 4: AI Engine */}
             <div className="group bg-neutral-900 border border-neutral-800 hover:border-purple-500/50 p-5 rounded-2xl transition-colors relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 opacity-20">
                    <svg className="w-16 h-16 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div className="flex items-start gap-4 relative z-10">
                   <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-purple-500 shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                   </div>
                   <div>
                      <h3 className="text-lg font-bold text-white mb-1">AI Promo Engine</h3>
                      <p className="text-gray-400 text-sm">Incredible production value that scales to a <span className="text-white font-semibold italic">peanuts budget</span>.</p>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};

