'use client';

import { motion } from 'framer-motion';

const flywheelItems = [
  {
    title: "Sports",
    subtitle: "Acquisition",
    desc: "Tentpoles create massive install spikes",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    position: "top"
  },
  {
    title: "Entertainment",
    subtitle: "Retention",
    desc: "Weekly habits & daily active users",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    position: "right"
  },
  {
    title: "Specials",
    subtitle: "Virality",
    desc: "Viral moments + TVOD revenue spikes",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    position: "bottom-right"
  },
  {
    title: "Cinema",
    subtitle: "Value",
    desc: "Always-on library depth",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
    ),
    position: "bottom-left"
  },
  {
    title: "Kids",
    subtitle: "Churn Killer",
    desc: "Household habit reduces churn",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    position: "left"
  }
];

export const FlywheelSlide = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-8">
       {/* Central Hub */}
       <div className="absolute z-20 w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-neutral-800 to-black border border-neutral-700 flex flex-col items-center justify-center shadow-2xl">
          <div className="text-[var(--color-primary)] font-black text-4xl md:text-5xl tracking-tighter mb-2">DHGO</div>
          <div className="text-gray-500 font-mono text-xs md:text-sm uppercase tracking-widest">Ecosystem</div>
          {/* Animated rings */}
          <div className="absolute inset-0 rounded-full border border-[var(--color-primary)] opacity-20 animate-ping"></div>
          <div className="absolute -inset-4 rounded-full border border-white opacity-5 animate-pulse"></div>
       </div>

       {/* Orbit Path (Visual Only) */}
       <div className="absolute w-[600px] h-[600px] rounded-full border border-neutral-800 border-dashed opacity-50 pointer-events-none"></div>

       {/* Items arranged in a circle */}
       <div className="relative w-full h-full max-w-5xl max-h-[800px]">
          {flywheelItems.map((item, i) => {
            // Calculate position on a circle
            const angle = (i * (360 / flywheelItems.length)) - 90; // Start from top
            const radius = 320; // Distance from center
            // Simple positioning styles based on index for a roughly circular layout
            // For a robust circle, we'd use absolute positioning with transform: rotate(...) translate(...) rotate(-...)
            // But let's use a simpler grid/flex approach or explicit coordinates if we want specific placements
            
            // Using explicit transform for circular layout
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
                animate={{ opacity: 1, scale: 1, x, y }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 60, damping: 20 }}
                className="absolute top-1/2 left-1/2 w-80 -ml-40 -mt-24 z-10"
              >
                <div className="relative group bg-neutral-900/80 backdrop-blur-md border border-neutral-800 p-6 rounded-2xl hover:border-[var(--color-primary)] hover:scale-105 transition-all duration-300 shadow-xl">
                   <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] border border-[var(--color-primary)]/20 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                        {item.icon}
                      </div>
                      <div>
                         <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[var(--color-primary)] transition-colors">{item.title}</h3>
                         <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">{item.subtitle}</div>
                         <p className="text-sm text-gray-400 leading-snug">{item.desc}</p>
                      </div>
                   </div>
                   
                   {/* Connector Line to Center */}
                   <div 
                      className="absolute top-1/2 left-1/2 w-40 h-[1px] bg-gradient-to-r from-[var(--color-primary)] to-transparent opacity-0 group-hover:opacity-50 transition-opacity -z-10 origin-left"
                      style={{
                        transform: `rotate(${angle + 180}deg)`,
                        width: '320px', // Match radius
                        left: '50%',
                        top: '50%'
                      }}
                   ></div>
                </div>
              </motion.div>
            );
          })}
       </div>
    </div>
  );
};

