'use client';

import React from 'react';


// Predefined star positions for consistent layout
const STAR_POSITIONS = [
  { left: '10%', top: '15%' },
  { left: '85%', top: '20%' },
  { left: '20%', top: '60%' },
  { left: '75%', top: '70%' },
  { left: '50%', top: '30%' },
  { left: '30%', top: '80%' },
  { left: '90%', top: '50%' },
  { left: '5%', top: '40%' },
];

interface StarsProps {
  count?: number;
  className?: string;
  skipFirst?: boolean;
}

export default function Stars({ count = 8, className = '', skipFirst = false }: StarsProps) {
  let positions = STAR_POSITIONS.slice(0, count);
  if (skipFirst && positions.length > 0) {
    positions = positions.slice(1);
  }
  
  return (
    <div className={`stars-container ${className}`}>
      {positions.map((pos, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="96"
          height="96"
          viewBox="0 0 96 96"
          fill="none"
          className="star"
          style={{
            opacity: 0.47,
            position: 'absolute',
            left: pos.left,
            top: pos.top,
            animationDelay: `${i * 0.2}s`,
          }}
        >
          <path
            d="M62.791 0.000120521L55.2036 43.7453L95.3101 62.7895L51.5649 55.2022L32.5207 95.3086L40.108 51.5634L0.00158846 32.5192L43.7468 40.1066L62.791 0.000120521Z"
            fill="white"
          />
        </svg>
      ))}
    </div>
  );
}

