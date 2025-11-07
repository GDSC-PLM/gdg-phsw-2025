'use client';

import React from 'react';

interface AirplaneProps {
  className?: string;
  width?: number;
  height?: number;
  rotation?: number;
}

export default function Airplane({
  className = '',
  width = 244.121,
  height = 452.641,
  rotation = 45,
}: AirplaneProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 420 336"
      fill="none"
      className={`airplane ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        flexShrink: 0,
      }}
    >
      {/* Light blue top surface */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M419.872 3.44043e-05L1.71233e-05 169.567L116.173 213.162L419.872 3.44043e-05ZM186.193 246.396L277.164 314.877L419.872 3.44043e-05L186.193 246.396Z"
        fill="#87CEEB"
      />
      {/* Darker blue underside and edges */}
      <path
        d="M419.872 3.44043e-05L116.173 213.162L147.417 335.488L186.193 246.396L419.872 3.44043e-05Z"
        fill="#4682B4"
      />
      {/* Sparkle on right wing */}
      <circle cx="350" cy="80" r="3" fill="#FFFFFF" opacity="0.9" />
    </svg>
  );
}

