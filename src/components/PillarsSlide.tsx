'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';

const pillars = [
  {
    id: 1,
    title: "Sports",
    role: "Acquisition Engine",
    details: ["Cricket", "Football", "MMA", "Esports"],
    description: "High-octane live events drive massive top-of-funnel traffic.",
    image: "/Sports.png"
  },
  {
    id: 2,
    title: "Entertainment",
    role: "Retention Engine",
    details: ["Flagship Crime Thriller", "Regional Comedy", "Slice-of-Life Drama"],
    description: "Weekly habits are built here. Consistent, high-quality engagement.",
    image: "/Entertainment.png"
  },
  {
    id: 3,
    title: "Specials",
    role: "Viral Engine",
    details: ["Stand-Up Specials", "Music Launchpad", "Concert Films"],
    description: "Cultural moments that dominate social conversation.",
    image: "/Specials.png"
  },
  {
    id: 4,
    title: "Cinema",
    role: "Prestige & Mainstream",
    details: ["Festival Films", "Movie Windowing", "TVOD → SVOD"],
    description: "The premium movie theater experience, at home.",
    image: "/Cinema.png"
  },
  {
    id: 5,
    title: "Kids",
    role: "Churn Killer",
    details: ["Nepali Ms. Rachel", "Nostalgia Classics", "Gen-AI Studio"],
    description: "Parents stay subscribed when the kids are happy.",
    image: "/Kids.png"
  }
];

export const PillarsSlide = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="w-full h-full flex gap-2 md:gap-4 p-4 items-stretch justify-center">
      {pillars.map((pillar) => (
        <motion.div
          key={pillar.id}
          onHoverStart={() => setHovered(pillar.id)}
          onHoverEnd={() => setHovered(null)}
          className={`relative flex flex-col justify-end p-8 rounded-3xl border border-neutral-800 transition-colors duration-500 overflow-hidden cursor-pointer ${
            hovered === pillar.id 
              ? 'bg-neutral-900 border-[var(--color-primary)]' 
              : 'bg-neutral-900/40 hover:bg-neutral-900/80'
          }`}
          initial={{ flex: 1 }}
          animate={{ 
            flex: hovered === pillar.id ? 3 : 1,
            opacity: hovered !== null && hovered !== pillar.id ? 0.5 : 1
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={getAssetPath(pillar.image)}
              alt={pillar.title}
              fill
              className="object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          </div>

          {/* Background Gradient for active state */}
          <div 
            className={`absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/20 to-transparent opacity-0 transition-opacity duration-500 z-[1] ${
              hovered === pillar.id ? 'opacity-100' : ''
            }`} 
          />

          {/* Content Container */}
          <div className="relative z-10 flex flex-col h-full justify-between">
            
            {/* Number */}
            <div className="text-right">
              <span className={`font-mono text-xl transition-colors duration-300 ${
                hovered === pillar.id ? 'text-[var(--color-primary)]' : 'text-neutral-700'
              }`}>
                0{pillar.id}
              </span>
            </div>

            {/* Main Info */}
            <div className="space-y-4 w-full">
               
               <div className="relative">
                  <motion.h3 
                    layout="position"
                    className={`text-2xl md:text-3xl font-bold uppercase tracking-tighter leading-none transition-colors duration-300 whitespace-nowrap ${
                      hovered === pillar.id ? 'text-white' : 'text-neutral-400'
                    }`}
                  >
                    {pillar.title}
                  </motion.h3>
                  
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: hovered === pillar.id ? 1 : 0,
                      height: hovered === pillar.id ? 'auto' : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-2">
                      <span className="text-[var(--color-primary)] font-mono text-sm uppercase tracking-widest block mb-4">
                        {pillar.role}
                      </span>
                      
                      <ul className="space-y-2 mb-6">
                        {pillar.details.map((item, idx) => (
                          <motion.li 
                            key={idx} 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + (idx * 0.05) }}
                            className="flex items-center gap-3 text-sm md:text-base text-gray-300"
                          >
                            <div className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full shrink-0" />
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                      <p className="text-sm text-gray-500 leading-relaxed max-w-md">
                        {pillar.description}
                      </p>
                    </div>
                  </motion.div>
               </div>

            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

