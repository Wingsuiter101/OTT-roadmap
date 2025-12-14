'use client';

import { motion } from 'framer-motion';

export const PrestigeCinemaSlide = () => {
  const films = [
    { title: "Shambala", subtitle: "Festival Selection", color: "from-neutral-800 to-neutral-900" },
    { title: "Pooja Sir", subtitle: "Critically Acclaimed", color: "from-neutral-800 to-neutral-900" },
    { title: "The Red Suitcase", subtitle: "Award Winner", color: "from-neutral-800 to-neutral-900" },
  ];

  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden p-8 md:p-12">
       {/* Cinematic Background Gradient */}
       <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black z-0"></div>
       
       <div className="flex justify-between items-baseline mb-8 border-b border-white/10 pb-6 shrink-0 relative z-10">
          <div>
             <h2 className="text-4xl font-bold tracking-tight mb-2 text-white">Prestige Cinema</h2>
             <p className="text-gray-400 text-sm font-mono uppercase tracking-wide">The "Criterion Strategy"</p>
          </div>
          <span className="text-gray-500 font-mono text-sm">30</span>
       </div>
       
       <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 items-center">
          {/* Strategy Text */}
          <div className="lg:col-span-4 space-y-8">
             <div className="space-y-6">
                <div className="border-l-4 border-white pl-6 py-2">
                   <h3 className="text-3xl font-serif italic text-white leading-tight">"Curating the best of Nepalese Cinema."</h3>
                </div>
                
                <p className="text-xl text-gray-400 font-light leading-relaxed">
                   Acquiring festival-grade films that lack wide distribution. Building brand prestige and justifying premium tier pricing.
                </p>
             </div>

             <div className="flex items-center gap-4 text-sm font-mono text-gray-500 uppercase tracking-widest pt-8 border-t border-white/5">
                <span className="w-2 h-2 bg-[var(--color-primary)] rounded-full"></span>
                <span>Targets</span>
             </div>
          </div>

          {/* Film Posters Gallery */}
          <div className="lg:col-span-8 h-full flex items-center justify-center">
             <div className="grid grid-cols-3 gap-6 w-full">
                {films.map((film, idx) => (
                   <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.2, duration: 0.8 }}
                      className="group relative aspect-[2/3] w-full rounded-sm overflow-hidden cursor-pointer shadow-2xl"
                   >
                      {/* Poster Container - Scales on Hover */}
                      <div className="absolute inset-0 bg-neutral-900 transition-transform duration-700 group-hover:scale-105">
                         {/* Placeholder Graphic */}
                         <div className="w-full h-full flex flex-col items-center justify-center opacity-20 group-hover:opacity-10 transition-opacity">
                            <span className="text-6xl font-serif text-white font-black italic">{idx + 1}</span>
                         </div>
                      </div>

                      {/* Static Gradient Overlay - Sits on top of image, does not scale */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 pointer-events-none"></div>

                      {/* Content Overlay */}
                      <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col items-center text-center z-10">
                         <div className="w-px h-12 bg-white/20 mb-4 group-hover:h-24 group-hover:bg-[var(--color-primary)] transition-all duration-500"></div>
                         <h3 className="text-2xl font-bold text-white mb-1 uppercase tracking-wider">{film.title}</h3>
                         <p className="text-xs font-mono text-gray-400 uppercase tracking-widest">{film.subtitle}</p>
                      </div>

                      {/* Laurel Wreath Effect (Cinematic Touch) */}
                      <div className="absolute top-6 inset-x-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform translate-y-2 group-hover:translate-y-0 z-10">
                         <div className="flex items-center gap-2 text-[var(--color-primary)]">
                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                         </div>
                      </div>
                   </motion.div>
                ))}
             </div>
          </div>
       </div>
    </div>
  );
};

