'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const portfolioData = [
  {
    id: 'cricket',
    title: 'Cricket',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    summary: ["CAN Test Series", "NPL Season 3", "ICC World Cups (2026)"],
    details: [
      "CAN Test nation series (pre-World Cup)",
      "2 ICC World Cups (2026)",
      "Rights for Nepal games",
      "NPL-Season 3",
      "ICC league games",
      "Ace Premier Cup",
      "Asia Cup (if Nepal reaches)",
      "CAN Home Series"
    ]
  },
  {
    id: 'football',
    title: 'Football',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.035M15 6h.01M15 10h.01M15 14h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    summary: ["A-Division Martyr’s League", "Women’s League", "Local Gold Cups"],
    details: [
      "A-Division Martyr’s league",
      "Women’s Football League",
      "Martyr’s Women’s League",
      "ANFA National League",
      "ANFA Women's Championship (Sunsari)",
      "Women’s SAFF Championship (Sri Lanka)",
      "Local Gold Cups: Aaha Rara, Biratnagar, Budhasubba, Birat Goldcup"
    ]
  },
  {
    id: 'combat',
    title: 'Combat Sports',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    summary: ["The Fight League (Proprietary MMA IP)"],
    details: [
      "The Fight League - Owned IP",
      "Rabindra Dhat vs International Players",
      "Regional MMA Tournaments",
      "Exclusive PPV Events"
    ]
  },
  {
    id: 'esports',
    title: 'Esports',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ),
    summary: ["Free Fire", "Major PUBG Mobile Tournaments"],
    details: [
      "101lab Partnership",
      "PUBG Major Tournaments",
      "Free Fire National Championship",
      "College & University Leagues"
    ]
  }
];

export const SportsPortfolioSlide = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative w-full h-full flex flex-col">
      <div className="flex justify-between items-baseline mb-8 border-b border-neutral-800 pb-6 shrink-0">
        <h2 className="text-5xl font-bold tracking-tight text-white">Sports IP Portfolio</h2>
        <span className="text-gray-500 font-mono text-xl">09</span>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        {portfolioData.map((item, index) => (
          <div 
            key={item.id}
            className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl flex flex-col justify-between group hover:border-[var(--color-primary)]/50 transition-colors"
          >
            <div>
               <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] border border-[var(--color-primary)]/20">
                    {item.icon}
                 </div>
                 <h3 className="text-3xl font-bold text-white">{item.title}</h3>
               </div>
               
               <ul className="space-y-3">
                 {item.summary.map((point, i) => (
                   <li key={i} className="flex items-start gap-3 text-lg text-gray-400">
                     <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0"></span>
                     <span>{point}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        ))}
        
        {/* Expand Button Overlay */}
        <div className="absolute bottom-0 left-0 w-full flex justify-center pb-8 pointer-events-none">
           <button 
             onClick={() => setExpanded(true)}
             className="pointer-events-auto bg-[var(--color-primary)] text-white px-8 py-3 rounded-full font-bold text-lg shadow-[0_0_30px_-5px_var(--color-primary)] hover:scale-105 transition-transform flex items-center gap-2"
           >
             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
             </svg>
             View Full Portfolio
           </button>
        </div>
      </div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="absolute inset-0 z-50 bg-black/80 flex items-center justify-center p-8 rounded-3xl"
            onClick={() => setExpanded(false)}
          >
            <motion.div 
               initial={{ scale: 0.9, y: 20 }}
               animate={{ scale: 1, y: 0 }}
               exit={{ scale: 0.9, y: 20 }}
               className="bg-neutral-900 border border-neutral-700 w-full h-full max-w-6xl rounded-2xl p-8 overflow-y-auto"
               onClick={(e) => e.stopPropagation()}
            >
               <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl font-bold text-white">Full IP Portfolio</h2>
                  <button 
                    onClick={() => setExpanded(false)}
                    className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 transition-colors"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {portfolioData.map((item) => (
                    <div key={item.id} className="bg-black/40 p-6 rounded-xl border border-neutral-800">
                       <h3 className="text-[var(--color-primary)] font-bold text-xl mb-4 flex items-center gap-2">
                         {item.icon}
                         {item.title}
                       </h3>
                       <ul className="grid grid-cols-1 gap-2">
                         {item.details.map((detail, idx) => (
                           <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                              <span className="mt-1.5 w-1 h-1 bg-gray-500 rounded-full shrink-0"></span>
                              {detail}
                           </li>
                         ))}
                       </ul>
                    </div>
                  ))}
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


