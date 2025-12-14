'use client';

import { motion } from 'framer-motion';

export const ExpenseRoadmapSlide = () => {
  return (
    <div className="w-full h-full flex flex-col">
       <div className="flex justify-between items-baseline mb-8 border-b border-neutral-800 pb-6 shrink-0">
          <div>
             <h2 className="text-4xl font-bold tracking-tight mb-2">Expense Roadmap 2026</h2>
             <p className="text-gray-400 text-sm font-mono uppercase tracking-wide">Investment Allocation</p>
          </div>
          <span className="text-gray-500 font-mono text-sm">38</span>
       </div>
       
       <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Donut Chart Visual */}
          <div className="relative aspect-square max-h-[400px] flex items-center justify-center">
             {/* Chart Rings */}
             <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                {/* Sports (64%) */}
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#FF2E2E" strokeWidth="10" strokeDasharray="201 314" strokeDashoffset="0" className="drop-shadow-[0_0_15px_rgba(255,46,46,0.3)]" />
                
                {/* Originals (15%) */}
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#3B82F6" strokeWidth="10" strokeDasharray="47 314" strokeDashoffset="-201" />
                
                {/* Tech (12%) */}
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#A855F7" strokeWidth="10" strokeDasharray="38 314" strokeDashoffset="-248" />
                
                {/* Marketing (9%) */}
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#EAB308" strokeWidth="10" strokeDasharray="28 314" strokeDashoffset="-286" />
             </svg>
             
             {/* Center Text */}
             <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-gray-400 font-mono text-xs uppercase tracking-widest mb-1">Total Burn</span>
                <span className="text-5xl font-black text-white tracking-tighter">66 Cr</span>
                <span className="text-gray-500 text-xs mt-2">FY 2026</span>
             </div>
          </div>

          {/* Legend / Details */}
          <div className="space-y-6">
             
             <div className="bg-neutral-900/50 p-4 rounded-xl border border-neutral-800 flex items-center justify-between group hover:border-[var(--color-primary)] transition-colors">
                <div className="flex items-center gap-4">
                   <div className="w-4 h-4 rounded-full bg-[var(--color-primary)] shadow-[0_0_10px_var(--color-primary)]"></div>
                   <div>
                      <h3 className="text-white font-bold">Sports Portfolio</h3>
                      <p className="text-gray-500 text-xs">Cricket (30) + Football (11.4) + Combat</p>
                   </div>
                </div>
                <div className="text-right">
                   <div className="text-2xl font-mono text-white">42.2 Cr</div>
                   <div className="text-xs text-gray-500">64%</div>
                </div>
             </div>

             <div className="bg-neutral-900/50 p-4 rounded-xl border border-neutral-800 flex items-center justify-between group hover:border-blue-500 transition-colors">
                <div className="flex items-center gap-4">
                   <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                   <div>
                      <h3 className="text-white font-bold">Original Production</h3>
                      <p className="text-gray-500 text-xs">Flagship, Reality, Slice-of-Life</p>
                   </div>
                </div>
                <div className="text-right">
                   <div className="text-2xl font-mono text-white">10 Cr</div>
                   <div className="text-xs text-gray-500">15%</div>
                </div>
             </div>

             <div className="bg-neutral-900/50 p-4 rounded-xl border border-neutral-800 flex items-center justify-between group hover:border-purple-500 transition-colors">
                <div className="flex items-center gap-4">
                   <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                   <div>
                      <h3 className="text-white font-bold">Tech Infrastructure</h3>
                      <p className="text-gray-500 text-xs">CDN, App Dev, Operations</p>
                   </div>
                </div>
                <div className="text-right">
                   <div className="text-2xl font-mono text-white">8 Cr</div>
                   <div className="text-xs text-gray-500">12%</div>
                </div>
             </div>

             <div className="bg-neutral-900/50 p-4 rounded-xl border border-neutral-800 flex items-center justify-between group hover:border-yellow-500 transition-colors">
                <div className="flex items-center gap-4">
                   <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                   <div>
                      <h3 className="text-white font-bold">Marketing & UA</h3>
                      <p className="text-gray-500 text-xs">Brand, Performance, Launch</p>
                   </div>
                </div>
                <div className="text-right">
                   <div className="text-2xl font-mono text-white">6 Cr</div>
                   <div className="text-xs text-gray-500">9%</div>
                </div>
             </div>

          </div>
       </div>
    </div>
  );
};
