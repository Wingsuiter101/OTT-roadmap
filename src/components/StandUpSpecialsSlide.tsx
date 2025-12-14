'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';

export const StandUpSpecialsSlide = () => {
  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden">
       {/* Ambient Background Spotlights */}
       <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[var(--color-primary)]/10 blur-[150px] rounded-full pointer-events-none"></div>
       <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-900/20 blur-[150px] rounded-full pointer-events-none"></div>

       <div className="flex justify-between items-baseline mb-8 border-b border-neutral-800 pb-6 shrink-0 relative z-10">
          <div>
             <h2 className="text-4xl font-bold tracking-tight mb-2">Stand-Up Specials</h2>
             <p className="text-gray-400 text-sm font-mono uppercase tracking-wide">New Vertical • High Viral Potential</p>
          </div>
          <span className="text-gray-500 font-mono text-sm">28</span>
       </div>
       
       <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
          {/* Strategy Section - Floating Cards */}
          <div className="lg:col-span-4 flex flex-col gap-4 justify-center">
             <div className="bg-neutral-900/60 backdrop-blur-md border border-neutral-800 p-6 rounded-2xl">
                <div className="text-[var(--color-primary)] font-black text-4xl mb-2">01</div>
                <h3 className="text-xl font-bold text-white mb-1">1-Hour Specials</h3>
                <p className="text-gray-400 text-sm">Exclusive comedy events produced specifically for DHGO. The "Netflix is a Joke" of Nepal.</p>
             </div>

             <div className="bg-neutral-900/60 backdrop-blur-md border border-neutral-800 p-6 rounded-2xl">
                <div className="text-green-500 font-black text-4xl mb-2">TVOD</div>
                <h3 className="text-xl font-bold text-white mb-1">Commercial Model</h3>
                <p className="text-gray-400 text-sm">High-tier exclusive content sold as ticketed digital events.</p>
             </div>

             <div className="bg-neutral-900/60 backdrop-blur-md border border-neutral-800 p-6 rounded-2xl">
                <div className="text-purple-500 font-black text-4xl mb-2">70/30</div>
                <h3 className="text-xl font-bold text-white mb-1">Artist Split</h3>
                <p className="text-gray-400 text-sm">Generous rev-share model to aggressively acquire top-tier talent.</p>
             </div>
          </div>

          {/* Talent Placeholders - Grand Posters */}
          <div className="lg:col-span-8 grid grid-cols-3 gap-4 h-full">
                {/* Talent 1 - Aayush Shrestha */}
                <div className="relative group rounded-2xl overflow-hidden bg-neutral-800 border border-neutral-700 hover:border-[var(--color-primary)] transition-all duration-500 h-full">
                   <Image
                     src={getAssetPath("/Aayus.jpg")}
                     alt="Aayush Shrestha"
                     fill
                     className="object-cover group-hover:scale-105 transition-transform duration-700"
                   />
                   <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>
                   <div className="absolute bottom-0 inset-x-0 p-6 z-20">
                      <h4 className="text-white font-black text-2xl leading-none mb-2 group-hover:text-[var(--color-primary)] transition-colors">AAYUSH<br/>SHRESTHA</h4>
                      <div className="h-1 w-12 bg-[var(--color-primary)] rounded-full"></div>
                   </div>
                </div>

                {/* Talent 2 - Apoorwa Kshitiz */}
                <div className="relative group rounded-2xl overflow-hidden bg-neutral-800 border border-neutral-700 hover:border-[var(--color-primary)] transition-all duration-500 h-full mt-8 mb-0 lg:mt-0 lg:-translate-y-4 shadow-2xl z-10">
                   <Image
                     src={getAssetPath("/apoorva.jpeg")}
                     alt="Apoorwa Kshitiz"
                     fill
                     className="object-cover group-hover:scale-105 transition-transform duration-700"
                   />
                   <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>
                   <div className="absolute bottom-0 inset-x-0 p-6 z-20">
                      <h4 className="text-white font-black text-2xl leading-none mb-2 group-hover:text-[var(--color-primary)] transition-colors">APOORWA<br/>KSHITIZ</h4>
                      <div className="h-1 w-12 bg-[var(--color-primary)] rounded-full"></div>
                   </div>
                </div>

                {/* Talent 3 - Sita Neupane */}
                <div className="relative group rounded-2xl overflow-hidden bg-neutral-800 border border-neutral-700 hover:border-[var(--color-primary)] transition-all duration-500 h-full">
                   <Image
                     src={getAssetPath("/sita.png")}
                     alt="Sita Neupane"
                     fill
                     className="object-cover group-hover:scale-105 transition-transform duration-700"
                   />
                   <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>
                   <div className="absolute bottom-0 inset-x-0 p-6 z-20">
                      <h4 className="text-white font-black text-2xl leading-none mb-2 group-hover:text-[var(--color-primary)] transition-colors">SITA<br/>NEUPANE</h4>
                      <div className="h-1 w-12 bg-[var(--color-primary)] rounded-full"></div>
                   </div>
                </div>
          </div>
       </div>
    </div>
  );
};
