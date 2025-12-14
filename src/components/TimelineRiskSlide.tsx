'use client';

import { motion } from 'framer-motion';

export const TimelineRiskSlide = () => {
  const quarters = [
    {
      id: "Q1",
      title: "Foundation & Rebrand",
      focus: "Acquisition",
      items: [
        "DHGO Rebrand & App 2.0",
        "Slice-of-Life Drama Launch",
        "T20 World Cup (Traffic Spike)"
      ],
      color: "from-blue-500 to-blue-600",
      accent: "bg-blue-500"
    },
    {
      id: "Q2",
      title: "Expansion & Habits",
      focus: "Retention",
      items: [
        "Sports Kickoff (CAN/Football)",
        "Regional Series (Maithili)",
        "Esports League Start"
      ],
      color: "from-green-500 to-green-600",
      accent: "bg-green-500"
    },
    {
      id: "Q3",
      title: "Viral & Retention",
      focus: "Engagement",
      items: [
        "Kids Zone (Junior) Launch",
        "DH Studio & Music Launch",
        "Reality TV Premiere"
      ],
      color: "from-purple-500 to-purple-600",
      accent: "bg-purple-500"
    },
    {
      id: "Q4",
      title: "The Anchor & Profit",
      focus: "Monetization",
      items: [
        "Flagship Crime Thriller",
        "Fight League Major PPV",
        "Break-Even Target Hit"
      ],
      color: "from-red-500 to-red-600",
      accent: "bg-red-500"
    }
  ];

  const risks = [
    { title: "Rights Inflation", control: "Owned IP & Long Deals", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
    { title: "Production Delays", control: "Showrunner Model", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
    { title: "High Churn", control: "Kids + Weekly Habits", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
    { title: "Piracy", control: "Live Windowing", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" }
  ];

  return (
    <div className="w-full h-full flex flex-col">
       <div className="flex justify-between items-baseline mb-8 border-b border-neutral-800 pb-6 shrink-0">
          <div>
             <h2 className="text-4xl font-bold tracking-tight mb-2">2026 Strategic Roadmap</h2>
             <p className="text-gray-400 text-sm font-mono uppercase tracking-wide">Execution Timeline • Risk Mitigation</p>
          </div>
          <span className="text-gray-500 font-mono text-sm">38</span>
       </div>
       
       <div className="flex-1 flex flex-col gap-8 min-h-0">
          
          {/* Timeline Section */}
          <div className="relative flex-1 grid grid-cols-4 gap-4">
             {/* Connecting Line */}
             <div className="absolute top-12 left-0 right-0 h-0.5 bg-neutral-800 z-0"></div>
             
             {quarters.map((q, idx) => (
                <div key={idx} className="relative z-10 flex flex-col h-full group">
                   {/* Node */}
                   <div className={`w-6 h-6 rounded-full border-4 border-neutral-900 ${q.accent} mb-6 mx-auto relative shadow-[0_0_20px_-5px_currentColor] text-${q.color.split('-')[1]}`}></div>
                   
                   {/* Card */}
                   <div className="flex-1 bg-neutral-900/80 border border-neutral-800 rounded-2xl p-5 hover:border-neutral-600 transition-colors flex flex-col">
                      <div className="flex justify-between items-center mb-3">
                         <h3 className="text-2xl font-black text-white">{q.id}</h3>
                         <span className={`text-[10px] font-bold px-2 py-1 rounded bg-neutral-800 text-gray-300 uppercase`}>{q.focus}</span>
                      </div>
                      <h4 className="text-sm font-bold text-white mb-4 min-h-[40px]">{q.title}</h4>
                      
                      <ul className="space-y-2 mt-auto">
                         {q.items.map((item, i) => (
                            <li key={i} className="text-xs text-gray-400 flex items-start gap-2 leading-snug">
                               <span className={`w-1 h-1 rounded-full ${q.accent} mt-1.5 shrink-0`}></span>
                               {item}
                            </li>
                         ))}
                      </ul>
                   </div>
                </div>
             ))}
          </div>

          {/* Risk Controls Section */}
          <div className="h-1/3 shrink-0">
             <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-4">Risk Controls</h3>
             <div className="grid grid-cols-4 gap-4 h-full">
                {risks.map((risk, idx) => (
                   <div key={idx} className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl flex flex-col justify-center group hover:border-[var(--color-primary)] transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                         <div className="p-2 rounded-lg bg-neutral-800 text-gray-400 group-hover:text-white transition-colors">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={risk.icon} /></svg>
                         </div>
                         <h4 className="text-sm font-bold text-gray-300">{risk.title}</h4>
                      </div>
                      <div className="flex items-center gap-2">
                         <svg className="w-4 h-4 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                         <span className="text-sm font-bold text-white">{risk.control}</span>
                      </div>
                   </div>
                ))}
             </div>
          </div>

       </div>
    </div>
  );
};


