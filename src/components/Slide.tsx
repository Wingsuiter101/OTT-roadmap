'use client';

import { ReactNode } from 'react';

interface SlideProps {
  children: ReactNode;
  className?: string;
}

export const Slide = ({ children, className = '' }: SlideProps) => {
  return (
    <div className={`w-full h-full flex flex-col items-center justify-center mx-auto px-4 py-4 md:px-8 md:py-8 ${className}`}>
      {children}
    </div>
  );
};

