'use client';

import { motion } from 'framer-motion';

export const SliceOfLifeSlide = () => {
  return (
    <div className="w-full h-full flex flex-col">
       <div className="flex justify-between items-baseline mb-8 border-b border-neutral-800 pb-6 shrink-0">
          <div>
             <h2 className="text-4xl font-bold tracking-tight mb-2">Slice-of-Life Drama</h2>
             <p className="text-gray-400 text-sm font-mono uppercase tracking-wide">The Retention Workhorse</p>
          </div>
          <span className="text-gray-500 font-mono text-sm">27</span>
       </div>
       
       <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Main Concept */}
          <div className="md:col-span-1 bg-neutral-900 border border-neutral-800 p-8 rounded-3xl flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                 <svg className="w-40 h-40 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-6 z-10">TVF-Style</h3>
              <p className="text-xl text-gray-300 z-10 leading-relaxed">
                 Grounded, relatable series. Stories about everyday life that build strong emotional connections.
              </p>
              
              <div className="mt-8 pt-8 border-t border-neutral-800 z-10">
                 <div className="text-xs font-mono text-[var(--color-primary)] uppercase tracking-widest mb-2">Why It Matters</div>
                 <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>Lower Cost</span>
                    <span className="h-px w-8 bg-gray-700 mx-2"></span>
                    <span>High Habit Potential</span>
                 </div>
              </div>
          </div>

          {/* Casting Strategy */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                 <h3 className="text-xl font-mono text-gray-400 uppercase tracking-widest mb-4">Casting Direction</h3>
                 
                 {/* Actor Candidates Placeholders */}
                 <div className="grid grid-cols-6 gap-4 mb-4">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                       <div key={i} className="w-full h-32 bg-neutral-800 rounded-xl border border-neutral-700 flex items-center justify-center relative overflow-hidden group hover:border-[var(--color-primary)] transition-colors cursor-pointer">
                          <div className="absolute inset-0 bg-neutral-900/50 flex items-center justify-center">
                             <svg className="w-8 h-8 text-neutral-600 group-hover:text-[var(--color-primary)] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                          </div>
                          <div className="absolute bottom-2 w-full text-[10px] text-center text-gray-500 group-hover:text-white transition-colors font-mono uppercase tracking-wider">Actor {i}</div>
                       </div>
                    ))}
                 </div>
              </div>

              {/* Lead Actors */}
              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.1 }}
                 className="bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700/50 hover:border-[var(--color-primary)] transition-colors"
              >
                 <div className="text-[var(--color-primary)] font-bold mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    Lead Actors
                 </div>
                 <ul className="space-y-2 text-white">
                    <li>Bijay Baral</li>
                    <li>BT Kancha</li>
                    <li>Nimesh Shrestha</li>
                 </ul>
              </motion.div>

              {/* Female Leads */}
              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.2 }}
                 className="bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700/50 hover:border-[var(--color-primary)] transition-colors"
              >
                 <div className="text-[var(--color-primary)] font-bold mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    Female Leads
                 </div>
                 <ul className="space-y-2 text-white">
                    <li>Reecha Sharma</li>
                    <li>Menuka Pradhan</li>
                    <li>Lhakyila</li>
                    <li className="text-gray-500 italic">+ New Debutant</li>
                 </ul>
              </motion.div>

              {/* Supporting */}
              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.3 }}
                 className="md:col-span-2 bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700/50 hover:border-[var(--color-primary)] transition-colors"
              >
                 <div className="text-[var(--color-primary)] font-bold mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    Supporting Cast
                 </div>
                 <p className="text-white">Handpicked aspiring theater actors and fresh faces.</p>
              </motion.div>
          </div>

       </div>
    </div>
  );
};

