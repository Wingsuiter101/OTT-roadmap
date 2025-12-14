'use client';

import { motion } from 'framer-motion';

const games = [
  {
    title: "PUBG Mobile",
    subtitle: "Exclusive Stream Rights",
    desc: "National Qualifiers & Pro League",
  },
  {
    title: "Free Fire",
    subtitle: "Lidoma Endless Series",
    desc: "2026 Championship Partner",
  },
  {
    title: "Valorant",
    subtitle: "Regional Challengers",
    desc: "PC Gaming Cafe Circuit",
  },
  {
    title: "eFootball Mobile",
    subtitle: "Campus Cups",
    desc: "Inter-College Tournament",
  }
];

export const EsportsSlide = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
      {/* Column 1: Strategy & Portfolio (7 cols) */}
      <div className="lg:col-span-7 flex flex-col h-full bg-neutral-900/50 border border-neutral-800 rounded-3xl p-10 relative overflow-hidden">
         
         <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center justify-between mb-8">
               <div className="flex items-center gap-4">
                  <div className="w-2 h-10 bg-white rounded-full"></div>
                  <div>
                     <h3 className="text-4xl font-bold text-white uppercase tracking-tight">Esports</h3>
                     <p className="text-gray-400 font-mono text-sm">Target: Gen Z (16-24)</p>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 content-start">
               {games.map((game, i) => (
                  <div key={i} className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group">
                     <h4 className="text-xl font-bold text-white mb-1 group-hover:text-[var(--color-primary)] transition-colors">{game.title}</h4>
                     <p className="text-gray-300 text-sm font-medium mb-2">{game.subtitle}</p>
                     <p className="text-gray-500 text-xs">{game.desc}</p>
                  </div>
               ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
               <h4 className="text-gray-400 font-mono text-xs uppercase tracking-widest mb-4">Monetization Model</h4>
               <div className="flex gap-4">
                  <div className="bg-neutral-800 text-gray-300 px-4 py-2 rounded-lg border border-neutral-700 text-sm">
                     In-Stream Item Drops
                  </div>
                  <div className="bg-neutral-800 text-gray-300 px-4 py-2 rounded-lg border border-neutral-700 text-sm">
                     Telco/Energy Drink Sponsorships
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Column 2: Financials (5 cols) */}
      <div className="lg:col-span-5 flex flex-col h-full gap-6">
         {/* ROI Card */}
         <div className="flex-1 bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute right-0 top-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
               <svg className="w-32 h-32 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
               </svg>
            </div>
            
            <div className="relative z-10">
               <h3 className="text-gray-400 font-mono text-sm uppercase tracking-widest mb-2">Efficiency</h3>
               <div className="text-8xl font-black text-white mb-2 tracking-tighter">2.25x</div>
               <div className="text-[var(--color-primary)] font-bold text-xl uppercase tracking-widest">ROI</div>
            </div>
         </div>

         {/* P&L Details */}
         <div className="flex-[1.5] bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 flex flex-col justify-center">
            <div className="space-y-8">
               <div>
                  <div className="flex justify-between text-sm mb-2">
                     <span className="text-gray-400">Rights & Production Cost</span>
                     <span className="text-white font-mono">40 Lakhs</span>
                  </div>
                  <div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden">
                     <div className="h-full w-[44%] bg-red-500"></div>
                  </div>
               </div>
               
               <div>
                  <div className="flex justify-between text-sm mb-2">
                     <span className="text-gray-400">Projected Revenue</span>
                     <span className="text-green-400 font-mono">90 Lakhs</span>
                  </div>
                  <div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden">
                     <div className="h-full w-full bg-green-500"></div>
                  </div>
               </div>

               <div className="p-4 bg-white/5 rounded-xl border border-white/10 mt-4">
                  <p className="text-gray-400 text-xs leading-relaxed text-center italic">
                     "Low cost rights, high engagement. The most efficient acquisition channel for young demographics."
                  </p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

