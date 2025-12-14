'use client';

import { motion } from 'framer-motion';

const ips = [
  {
    title: "DHGO Premier T10",
    category: "Cricket",
    tagline: "Mobile-First Cricket",
    description: "90 minutes. High octane. Built for the commute.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    )
  },
  {
    title: "The Shakti League",
    category: "Football",
    tagline: "Women's Football League",
    description: "Empowering the next generation. The untapped mass market.",
    color: "text-green-500",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    )
  },
  {
    title: "The Fight League",
    category: "Combat",
    tagline: "MMA Authority",
    description: "Home of Nepali Warriors. Monthly fight nights.",
    color: "text-[var(--color-primary)]",
    bg: "bg-[var(--color-primary)]/10",
    border: "border-[var(--color-primary)]/20",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    )
  },
  {
    title: "National Esports Championship",
    category: "Esports",
    tagline: "PUBG / Free Fire",
    description: "The path to pro. Nepal's official national league.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
    )
  }
];

export const OwnedIPsSlide = () => {
  return (
    <div className="w-full h-full flex flex-col">
       <div className="flex justify-between items-baseline mb-8 border-b border-neutral-800 pb-6 shrink-0">
          <div>
             <h2 className="text-4xl font-bold tracking-tight mb-2">Owned IP Strategy</h2>
             <p className="text-gray-400 text-sm font-mono uppercase tracking-wide">Building Long-Term Asset Value</p>
          </div>
          <span className="text-gray-500 font-mono text-sm">IP</span>
       </div>
       
       <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 h-full min-h-0">
          {ips.map((ip, idx) => (
             <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`group relative p-8 rounded-3xl border ${ip.border} bg-neutral-900/50 hover:bg-neutral-900 transition-all duration-500 flex flex-col justify-between overflow-hidden`}
             >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${ip.bg} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                
                <div className="relative z-10">
                   <div className="flex justify-between items-start mb-6">
                      <span className={`text-xs font-mono uppercase tracking-widest ${ip.color} border border-current px-2 py-1 rounded-md`}>
                         {ip.category}
                      </span>
                      <div className={`w-12 h-12 rounded-xl ${ip.bg} flex items-center justify-center ${ip.color}`}>
                         {ip.icon}
                      </div>
                   </div>
                   
                   <h3 className="text-3xl font-black text-white mb-2 uppercase italic tracking-tight">{ip.title}</h3>
                   <div className="h-1 w-12 bg-white/20 rounded-full mb-4 group-hover:w-24 group-hover:bg-current transition-all duration-500 text-white"></div>
                   
                   <h4 className="text-lg font-bold text-gray-200 mb-2">{ip.tagline}</h4>
                   <p className="text-gray-400 text-sm leading-relaxed max-w-sm">{ip.description}</p>
                </div>

                <div className="relative z-10 mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
                   <span className="text-[10px] text-gray-500 font-mono uppercase">Ownership</span>
                   <span className="text-white font-bold text-sm">100% Equity</span>
                </div>
             </motion.div>
          ))}
       </div>
    </div>
  );
};

