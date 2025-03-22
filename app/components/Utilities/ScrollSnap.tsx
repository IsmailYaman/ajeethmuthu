"use client";

import React from 'react';

interface ScrollSnapContainerProps {
  children: React.ReactNode;
  direction?: 'y' | 'x';
  snapAlign?: 'start' | 'center' | 'end';
}

const ScrollSnapContainer: React.FC<ScrollSnapContainerProps> = ({
  children,
  direction = 'y',
  snapAlign = 'start',
}) => {
  return (
    <div
      className={`
        h-screen w-full
        overflow-${direction === 'y' ? 'y' : 'x'}-auto
        scroll-smooth
        ${direction === 'y' ? 'snap-y' : 'snap-x'}
        snap-mandatory
      `}
    >
      {React.Children.map(children, (child) => (
        <div
          className={`
            ${snapAlign === 'start' ? 'snap-start' : snapAlign === 'center' ? 'snap-center' : 'snap-end'}
            ${direction === 'y' ? 'h-screen' : 'w-screen inline-block'}
          `}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default ScrollSnapContainer;