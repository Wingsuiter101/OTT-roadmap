'use client';

import { motion } from 'framer-motion';

export const ExpenseRoadmapSlide = () => {
  const expenses = [
    { label: "Sports Rights", value: 35, amount: "15 Cr", color: "bg-red-500", stroke: "#EF4444" },
    { label: "Original Production", value: 22, amount: "9.5 Cr", color: "bg-blue-500", stroke: "#3B82F6" },
    { label: "Tech/Infra/CDN", value: 18, amount: "7.5 Cr", color: "bg-purple-500", stroke: "#A855F7" },
    { label: "Talent & Operations", value: 13, amount: "5.5 Cr", color: "bg-green-500", stroke: "#22C55E" },
    { label: "Marketing & UA", value: 12, amount: "5 Cr", color: "bg-yellow-500", stroke: "#EAB308" },
  ];

  // Calculations for Donut Chart
  // Circumference = 2 * pi * 40 ≈ 251.2
  // Offsets calculated based on cumulative percentage
  // Total Burn ~42.5 Cr

  return (
    <div className="w-full h-full flex flex-col">
       <div className="flex justify-between items-baseline mb-8 border-b border-neutral-800 pb-6 shrink-0">
          <div>
             <h2 className="text-4xl font-bold tracking-tight mb-2">Expense Roadmap</h2>
             <p className="text-gray-400 text-sm font-mono uppercase tracking-wide">2026 Estimated Burn</p>
          </div>
          <span className="text-gray-500 font-mono text-sm">34</span>
       </div>
       
       <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Visual Breakdown (Donut Chart representation) */}
          <div className="relative flex items-center justify-center h-full min-h-[400px]">
             {/* Chart Circle Container */}
             <div className="relative w-80 h-80 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full max-w-[500px] -rotate-90">
                  {/* Sports 35% -> 87.92 dash */}
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#EF4444" strokeWidth="12" 
                          strokeDasharray="251.2" strokeDashoffset="163.28" className="opacity-90" />
                  
                  {/* Originals 22% -> 55.26 dash. Start at 35% (126 deg) */}
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#3B82F6" strokeWidth="12" 
                          strokeDasharray="251.2" strokeDashoffset="195.94" className="opacity-90" transform="rotate(126 50 50)" />
                  
                  {/* Tech 18% -> 45.22 dash. Start at 57% (205.2 deg) */}
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#A855F7" strokeWidth="12" 
                          strokeDasharray="251.2" strokeDashoffset="205.98" className="opacity-90" transform="rotate(205.2 50 50)" />

                  {/* Ops 13% -> 32.66 dash. Start at 75% (270 deg) */}
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#22C55E" strokeWidth="12" 
                          strokeDasharray="251.2" strokeDashoffset="218.54" className="opacity-90" transform="rotate(270 50 50)" />

                   {/* Marketing 12% -> 30.14 dash. Start at 88% (316.8 deg) */}
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#EAB308" strokeWidth="12" 
                          strokeDasharray="251.2" strokeDashoffset="221.06" className="opacity-90" transform="rotate(316.8 50 50)" />
                </svg>
                
                {/* Center Total */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-gray-500 text-xs font-mono uppercase tracking-widest mb-1">Total Burn</span>
                    <span className="text-4xl font-black text-white">~42.5 Cr</span>
                    <span className="text-gray-500 text-sm font-mono mt-1">NPR</span>
                </div>
             </div>
          </div>

          {/* Detailed List */}
          <div className="space-y-4">
             {expenses.map((item, idx) => (
                <motion.div 
                   key={idx}
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ delay: idx * 0.1 }}
                   className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl flex items-center justify-between group hover:border-neutral-700 transition-colors"
                >
                   <div className="flex items-center gap-4">
                      <div className={`w-2 h-8 rounded-full ${item.color}`}></div>
                      <div>
                         <h3 className="text-lg font-bold text-white">{item.label}</h3>
                         <div className="text-xs text-gray-400 font-mono mt-0.5">{item.value}% Allocation</div>
                      </div>
                   </div>
                   <div className="text-right">
                      <div className="text-xl font-black text-white">{item.amount}</div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-wide">NPR</div>
                   </div>
                </motion.div>
             ))}
             
             <div className="mt-4 p-4 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 rounded-xl">
                 <p className="text-xs text-gray-300 flex items-start gap-3">
                    <svg className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Strategic emphasis on content (57%) & operations. Lean marketing spend relies on organic viral loops.</span>
                 </p>
             </div>
          </div>

       </div>
    </div>
  );
};
