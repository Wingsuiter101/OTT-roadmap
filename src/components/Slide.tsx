'use client';

import { ReactNode } from 'react';

interface SlideProps {
  children: ReactNode;
  className?: string;
}

export const Slide = ({ children, className = '' }: SlideProps) => {
  return (
    <div className={`w-full h-full flex flex-col items-center justify-center mx-auto px-6 py-6 md:px-24 md:py-16 overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

