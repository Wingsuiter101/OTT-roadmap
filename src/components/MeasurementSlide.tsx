'use client';

import { motion } from 'framer-motion';

export const MeasurementSlide = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-baseline mb-8 border-b border-neutral-800 pb-6 shrink-0">
        <div>
           <h2 className="text-5xl font-bold tracking-tight text-white mb-2">Campaign Intelligence</h2>
           <p className="text-gray-400 text-sm font-mono uppercase tracking-wide">Measurement • Reporting • Optimization</p>
        </div>
        <span className="text-gray-500 font-mono text-xl">21</span>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 relative">
         {/* Background Grid Lines */}
         <div className="absolute inset-0 pointer-events-none opacity-10" 
              style={{ 
                backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)',
                backgroundSize: '60px 60px'
              }}>
         </div>

         {/* Left Column: Metrics Grid (7 cols) */}
         <div className="md:col-span-7 flex flex-col justify-center gap-6 relative z-10">
            <div className="grid grid-cols-2 gap-4">
               {/* Metric Card 1 */}
               <div className="bg-neutral-900/80 border border-neutral-800 p-6 rounded-2xl backdrop-blur-sm group hover:border-[var(--color-primary)] transition-colors h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start mb-4">
                     <div className="p-2 bg-neutral-800 rounded-lg text-gray-400 group-hover:text-white transition-colors">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                     </div>
                     <span className="text-xs font-mono text-green-500 bg-green-500/10 px-2 py-1 rounded">Live + VOD</span>
                  </div>
                  <div>
                     <h4 className="text-3xl font-mono text-white font-bold mb-1">Impressions</h4>
                     <p className="text-gray-500 text-sm">Total verified views across all verified endpoints.</p>
                  </div>
               </div>

               {/* Metric Card 2 */}
               <div className="bg-neutral-900/80 border border-neutral-800 p-6 rounded-2xl backdrop-blur-sm group hover:border-[var(--color-primary)] transition-colors h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start mb-4">
                     <div className="p-2 bg-neutral-800 rounded-lg text-gray-400 group-hover:text-white transition-colors">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                     </div>
                     <span className="text-xs font-mono text-blue-500 bg-blue-500/10 px-2 py-1 rounded">Pre/Mid Roll</span>
                  </div>
                  <div>
                     <h4 className="text-3xl font-mono text-white font-bold mb-1">VCR</h4>
                     <p className="text-gray-500 text-sm">Video Completion Rates verifying full ad consumption.</p>
                  </div>
               </div>

               {/* Metric Card 3 */}
               <div className="bg-neutral-900/80 border border-neutral-800 p-6 rounded-2xl backdrop-blur-sm group hover:border-[var(--color-primary)] transition-colors h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start mb-4">
                     <div className="p-2 bg-neutral-800 rounded-lg text-gray-400 group-hover:text-white transition-colors">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                     </div>
                     <span className="text-xs font-mono text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded">Retention</span>
                  </div>
                  <div>
                     <h4 className="text-3xl font-mono text-white font-bold mb-1">Watch Time</h4>
                     <p className="text-gray-500 text-sm">Average duration user stayed engaged during placement.</p>
                  </div>
               </div>

               {/* Metric Card 4 */}
               <div className="bg-neutral-900/80 border border-neutral-800 p-6 rounded-2xl backdrop-blur-sm group hover:border-[var(--color-primary)] transition-colors h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start mb-4">
                     <div className="p-2 bg-neutral-800 rounded-lg text-gray-400 group-hover:text-white transition-colors">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>
                     </div>
                     <span className="text-xs font-mono text-purple-500 bg-purple-500/10 px-2 py-1 rounded">App Only</span>
                  </div>
                  <div>
                     <h4 className="text-3xl font-mono text-white font-bold mb-1">CTR</h4>
                     <p className="text-gray-500 text-sm">Direct click-through attribution on interactive assets.</p>
                  </div>
               </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center justify-between">
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center text-[var(--color-primary)]">
                     <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                  </div>
                  <div>
                     <h4 className="text-white font-bold">Live Dashboard Access</h4>
                     <p className="text-gray-500 text-xs">Sponsors get real-time login to track campaign health.</p>
                  </div>
               </div>
               <div className="text-[var(--color-primary)]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
               </div>
            </div>
         </div>

         {/* Right Column: The Deliverable (5 cols) */}
         <div className="md:col-span-5 relative z-10 flex flex-col h-full">
            <div className="flex-1 bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-5">
                  <svg className="w-40 h-40 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
               </div>

               <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Post-Campaign Deliverable</h3>
                  <ul className="space-y-6">
                     <li className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center text-sm">✓</div>
                        <div>
                           <h4 className="text-white font-medium">Proof of Placement</h4>
                           <p className="text-gray-500 text-sm">Timestamped clips of every integration.</p>
                        </div>
                     </li>
                     <li className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center text-sm">✓</div>
                        <div>
                           <h4 className="text-white font-medium">One-Page Executive Summary</h4>
                           <p className="text-gray-500 text-sm">Consolidated performance metrics.</p>
                        </div>
                     </li>
                     <li className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center text-sm">✓</div>
                        <div>
                           <h4 className="text-white font-medium">Optimization Plan</h4>
                           <p className="text-gray-500 text-sm">Data-backed recommendations for next flight.</p>
                        </div>
                     </li>
                  </ul>
               </div>

               <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-3 text-gray-400 text-xs font-mono">
                     <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                     DATA UPDATED REAL-TIME
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

