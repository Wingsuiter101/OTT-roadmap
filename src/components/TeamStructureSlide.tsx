'use client';

import { motion } from 'framer-motion';

export const TeamStructureSlide = () => {
  return (
    <div className="w-full h-full flex flex-col">
       <div className="flex justify-between items-baseline mb-8 border-b border-neutral-800 pb-4 shrink-0">
          <div>
             <h2 className="text-4xl font-bold tracking-tight mb-2">Team Structure (MVP)</h2>
             <p className="text-gray-400 text-sm font-mono uppercase tracking-wide">Lean Operational Model</p>
          </div>
          <div className="text-right">
             <span className="text-gray-500 font-mono text-sm block">37</span>
             <span className="text-[var(--color-primary)] font-bold text-lg">~15-20 FTEs</span>
          </div>
       </div>
       
       <div className="flex-1 flex flex-col justify-center items-center relative p-8">
          
          {/* Executive Layer */}
          <div className="flex gap-24 mb-16 relative z-10">
             {/* Head of OTT */}
             <div className="relative">
                <div className="w-64 bg-blue-900/20 border border-blue-500/50 backdrop-blur-md rounded-xl p-4 text-center">
                   <h3 className="text-white font-bold text-lg">Head of OTT & Content</h3>
                </div>
                {/* Connecting Line Down */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-blue-500/50 to-neutral-700"></div>
             </div>

             {/* Connection Between Heads */}
             <div className="absolute top-1/2 left-[16rem] right-[16rem] h-px bg-neutral-700 border-t border-dashed border-gray-500"></div>

             {/* Head of Sports */}
             <div className="relative">
                <div className="w-72 bg-orange-900/20 border border-orange-500/50 backdrop-blur-md rounded-xl p-4 text-center">
                   <h3 className="text-white font-bold text-lg">Head of Sports & Operations</h3>
                </div>
                {/* Connecting Line Down */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-orange-500/50 to-neutral-700"></div>
             </div>
          </div>

          {/* Operational Layer */}
          <div className="grid grid-cols-2 gap-24 w-full max-w-6xl relative z-10">
             
             {/* OTT Vertical */}
             <div className="flex flex-col gap-8">
                {/* Core Team Container */}
                <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 relative">
                   <div className="absolute -top-3 left-4 bg-neutral-800 text-blue-400 text-xs font-bold px-2 py-1 rounded border border-neutral-700">
                      Core OTT Team (4-6)
                   </div>
                   <div className="grid grid-cols-3 gap-3 pt-2">
                      {["Product Manager", "Content Lead", "Creative Producer", "Motion Designer", "Social Lead"].map((role, i) => (
                         <div key={i} className="bg-neutral-800/80 border border-neutral-700 p-3 rounded-lg text-center flex items-center justify-center hover:border-blue-500/30 transition-colors">
                            <span className="text-xs text-gray-300 font-medium leading-tight">{role}</span>
                         </div>
                      ))}
                   </div>
                </div>

                {/* Revenue Container - Connected via line */}
                <div className="relative">
                   <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-px h-8 bg-neutral-700"></div>
                   <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 relative">
                      <div className="absolute -top-3 left-4 bg-neutral-800 text-green-400 text-xs font-bold px-2 py-1 rounded border border-neutral-700">
                         Revenue (3-4)
                      </div>
                      <div className="flex flex-col gap-3 pt-2">
                         <div className="bg-neutral-800/80 border border-neutral-700 p-3 rounded-lg text-center w-full">
                            <span className="text-xs font-bold text-white">Head of Revenue</span>
                         </div>
                         <div className="grid grid-cols-2 gap-3">
                            <div className="bg-neutral-800/80 border border-neutral-700 p-3 rounded-lg text-center"><span className="text-xs text-gray-300">Sales Lead</span></div>
                            <div className="bg-neutral-800/80 border border-neutral-700 p-3 rounded-lg text-center"><span className="text-xs text-gray-300">Client Servicing</span></div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>

             {/* Sports Vertical */}
             <div className="flex flex-col gap-8">
                {/* Sports Ops Container */}
                <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 relative">
                   <div className="absolute -top-3 left-4 bg-neutral-800 text-orange-400 text-xs font-bold px-2 py-1 rounded border border-neutral-700">
                      Sports Operations (4-5)
                   </div>
                   <div className="grid grid-cols-3 gap-3 pt-2">
                      {["Ops Lead", "Broadcast Coord", "Branding Lead", "Logistics Mgr", "Compliance"].map((role, i) => (
                         <div key={i} className="bg-neutral-800/80 border border-neutral-700 p-3 rounded-lg text-center flex items-center justify-center hover:border-orange-500/30 transition-colors">
                            <span className="text-xs text-gray-300 font-medium leading-tight">{role}</span>
                         </div>
                      ))}
                   </div>
                </div>

                {/* Marketing Container - Connected via line */}
                <div className="relative">
                   <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-px h-8 bg-neutral-700"></div>
                   <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 relative">
                      <div className="absolute -top-3 left-4 bg-neutral-800 text-purple-400 text-xs font-bold px-2 py-1 rounded border border-neutral-700">
                         Marketing (2-3)
                      </div>
                      <div className="flex flex-col gap-3 pt-2">
                         <div className="bg-neutral-800/80 border border-neutral-700 p-3 rounded-lg text-center w-full">
                            <span className="text-xs font-bold text-white">Marketing Manager</span>
                         </div>
                         <div className="grid grid-cols-2 gap-3">
                            <div className="bg-neutral-800/80 border border-neutral-700 p-3 rounded-lg text-center"><span className="text-xs text-gray-300">Performance</span></div>
                            <div className="bg-neutral-800/80 border border-neutral-700 p-3 rounded-lg text-center"><span className="text-xs text-gray-300">Promo Editor</span></div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>

          </div>

          {/* Shared Resource - Floating Center */}
          <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
             <div className="bg-neutral-800 border border-neutral-600 p-4 rounded-xl shadow-2xl text-center w-48 relative group hover:scale-105 transition-transform">
                {/* Connection Lines to Left and Right Verticals */}
                <div className="absolute top-1/2 right-full h-px w-12 bg-neutral-600 border-t border-dashed border-gray-500"></div>
                <div className="absolute top-1/2 left-full h-px w-12 bg-neutral-600 border-t border-dashed border-gray-500"></div>
                
                <span className="text-[10px] text-gray-400 uppercase tracking-wide block mb-1">Shared Resource</span>
                <span className="text-sm font-bold text-white">Data & Insights Analyst</span>
             </div>
          </div>

       </div>
    </div>
  );
};
