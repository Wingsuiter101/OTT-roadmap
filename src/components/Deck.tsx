'use client';

import { useState, useEffect, ReactNode, Children, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DeckProps {
  children: ReactNode;
}

export const Deck = ({ children }: DeckProps) => {
  const slides = Children.toArray(children);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Initialize from hash on mount
  useEffect(() => {
    const hash = window.location.hash.replace('#slide', '');
    const slideIndex = parseInt(hash, 10);
    if (!isNaN(slideIndex) && slideIndex >= 1 && slideIndex <= slides.length) {
      setCurrentSlide(slideIndex - 1);
    }
  }, [slides.length]);

  // Update hash when slide changes
  useEffect(() => {
    window.location.hash = `slide${currentSlide + 1}`;
  }, [currentSlide]);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    setIsSidebarOpen(false);
  }, [currentSlide]);

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide, slides.length]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'm') {
        setIsSidebarOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black text-white font-sans">
      {/* Click Navigation Zones */}
      <div className="absolute inset-y-0 left-0 w-[10%] z-20 cursor-w-resize" onClick={prevSlide} title="Previous Slide" />
      <div className="absolute inset-y-0 right-0 w-[10%] z-20 cursor-e-resize" onClick={nextSlide} title="Next Slide" />

      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute w-full h-full"
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>
      
      {/* Progress Indicator (Centered) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-50 overflow-x-auto max-w-[80vw] px-4 py-2 scrollbar-hide">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 hover:bg-white ${
              idx === currentSlide ? 'w-8 bg-primary' : 'w-2 bg-gray-700'
            }`}
          />
        ))}
      </div>
      
      {/* Sidebar Toggle & Counter */}
      <button 
        onClick={() => setIsSidebarOpen(true)}
        className="absolute bottom-8 left-8 text-gray-500 font-mono text-sm z-50 hover:text-white transition-colors flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        {currentSlide + 1} / {slides.length}
      </button>

      {/* Sidebar Navigation */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm z-60"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              className="absolute top-0 left-0 bottom-0 w-80 bg-neutral-900 border-r border-neutral-800 z-70 p-6 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-white">Jump to Slide</h2>
                <button onClick={() => setIsSidebarOpen(false)} className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`aspect-square rounded-lg font-mono text-sm font-bold flex items-center justify-center transition-all ${
                      idx === currentSlide 
                        ? 'bg-primary text-white' 
                        : 'bg-neutral-800 text-gray-400 hover:bg-neutral-700 hover:text-white'
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
