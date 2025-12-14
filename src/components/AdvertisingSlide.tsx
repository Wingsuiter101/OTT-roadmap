'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface AdSlideProps {
  title: string;
  subtitle: string;
  items: string[];
  placeholderText: string;
  overlayText: string;
  alignment: 'left' | 'right';
  index: string;
}

export const AdvertisingSlide = ({ title, subtitle, items, placeholderText, overlayText, alignment, index }: AdSlideProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row h-full gap-8 relative">
      {/* Text Content */}
      <div className={`flex flex-col justify-center flex-1 ${alignment === 'right' ? 'order-1' : 'order-2'}`}>
         <div className="mb-8">
            <div className="flex justify-between items-baseline border-b border-neutral-800 pb-6 mb-6">
               <div>
                  <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
                  <p className="text-gray-400 text-sm font-mono uppercase tracking-wide">{subtitle}</p>
               </div>
               <span className="text-gray-500 font-mono text-xl">{index}</span>
            </div>
            
            <ul className="space-y-4">
               {items.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 group">
                     <div className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full group-hover:scale-150 transition-transform"></div>
                     <span className="text-xl text-gray-300 group-hover:text-white transition-colors">{item}</span>
                  </li>
               ))}
            </ul>
         </div>
      </div>

      {/* Image / Interactive Area */}
      <div className={`flex-1 relative group cursor-pointer ${alignment === 'right' ? 'order-2' : 'order-1'}`} onClick={() => setModalOpen(true)}>
         <div className="absolute inset-0 bg-neutral-800 rounded-3xl border border-neutral-700 overflow-hidden transition-all duration-500 group-hover:border-[var(--color-primary)] group-hover:shadow-[0_0_30px_-5px_rgba(255,46,46,0.3)]">
            {/* Placeholder Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-black flex items-center justify-center">
               <span className="text-neutral-700 font-black text-6xl uppercase tracking-tighter opacity-50">{placeholderText}</span>
            </div>
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
               <div className="bg-white/10 p-4 rounded-full border border-white/20">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
               </div>
            </div>
         </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
         {modalOpen && (
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-8"
               onClick={(e) => { e.stopPropagation(); setModalOpen(false); }}
            >
               <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="relative max-w-7xl max-h-[90vh] w-full h-full bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden flex items-center justify-center"
                  onClick={(e) => e.stopPropagation()}
               >
                  <button 
                     onClick={() => setModalOpen(false)}
                     className="absolute top-4 right-4 z-50 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-[var(--color-primary)] transition-colors"
                  >
                     ✕
                  </button>
                  
                  {/* Mockup Content inside Modal */}
                  <div className="text-center">
                     <h3 className="text-4xl font-bold text-white mb-4">{overlayText}</h3>
                     <div className="w-[800px] h-[450px] bg-neutral-800 rounded-xl flex items-center justify-center border border-dashed border-neutral-600">
                        <span className="text-gray-500">HI-RES VISUAL MOCKUP GOES HERE</span>
                     </div>
                  </div>
               </motion.div>
            </motion.div>
         )}
      </AnimatePresence>
    </div>
  );
};


