'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';

export const MusicStrategySlide = () => {
  return (
    <div className="w-full h-full flex flex-col">
       <div className="flex justify-between items-baseline mb-4 shrink-0">
          <div>
             <h2 className="text-4xl font-bold tracking-tight mb-2">Music Strategy</h2>
             <p className="text-gray-400 text-sm font-mono uppercase tracking-wide">Two-Pronged Approach</p>
          </div>
          <span className="text-gray-500 font-mono text-sm">29</span>
       </div>
       
       <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 h-full pb-4">
          {/* Prong 1: Releases & Studio - Full Height Card */}
          <div className="relative rounded-3xl overflow-hidden group border border-neutral-800 hover:border-blue-500/50 transition-all duration-500">
             {/* Background Image */}
             <Image
               src={getAssetPath("/launch-studio.png")}
               alt="Launchpad & Studio"
               fill
               className="object-cover group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
             <div className="absolute top-8 right-8 z-20 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                <span className="text-xs font-mono uppercase tracking-widest text-blue-400">Launchpad & Studio</span>
             </div>
             
             <div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-10">
                <div className="mb-6">
                   <h3 className="text-4xl font-bold text-white mb-2 leading-tight">Exclusive <br/>Releases</h3>
                   <div className="h-1 w-20 bg-blue-500 rounded-full mb-6"></div>
                   
                   <div className="space-y-4 backdrop-blur-sm bg-black/30 p-6 rounded-2xl border border-white/5">
                        <div>
                            <h4 className="text-lg font-bold text-blue-400 mb-1">The Launchpad</h4>
                            <p className="text-gray-300 text-sm">1-week exclusive audio/video window before YouTube.</p>
                        </div>
                        <div className="w-full h-px bg-white/10"></div>
                        <div>
                            <h4 className="text-lg font-bold text-white mb-1">DH Studio</h4>
                            <p className="text-gray-300 text-sm">Visual-first acoustic sessions. Curated quality.</p>
                        </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Prong 2: Concert Films - Full Height Card */}
          <div className="relative rounded-3xl overflow-hidden group border border-neutral-800 hover:border-[var(--color-primary)]/50 transition-all duration-500">
             {/* Background Image */}
             <Image
               src={getAssetPath("/concert-films.png")}
               alt="Concert Films"
               fill
               className="object-cover group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
             <div className="absolute top-8 right-8 z-20 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-primary)]">Premium Events</span>
             </div>

             <div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-10">
                <div className="mb-6">
                   <h3 className="text-4xl font-bold text-white mb-2 leading-tight">Concert <br/>Films</h3>
                   <div className="h-1 w-20 bg-[var(--color-primary)] rounded-full mb-6"></div>
                   
                   <div className="space-y-4 backdrop-blur-sm bg-black/30 p-6 rounded-2xl border border-white/5">
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-2 shrink-0"></span>
                                <span className="text-gray-300">Multi-cam cinematic capture. Not a live stream.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-2 shrink-0"></span>
                                <span className="text-gray-300">Premiere as "Concert Movie" event.</span>
                            </li>
                        </ul>
                        <div className="w-full h-px bg-white/10"></div>
                        <div className="flex items-center gap-3">
                             <div className="bg-[var(--color-primary)] px-2 py-0.5 rounded text-[10px] font-bold text-white uppercase">Strategy</div>
                             <span className="text-white text-sm font-medium">TVOD Weekend → SVOD Library</span>
                        </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};
