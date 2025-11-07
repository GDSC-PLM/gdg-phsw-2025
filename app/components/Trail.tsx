'use client';

interface TrailProps {
  variant?: 'trail1' | 'trail2';
  className?: string;
  width?: number;
  height?: number;
}

export default function Trail({
  variant = 'trail1',
  className = '',
  width,
  height,
}: TrailProps) {
  if (variant === 'trail1') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width || 808}
        height={height || 395}
        viewBox="0 0 808 395"
        fill="none"
        className={`trail trail-1 ${className}`}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="paint0_linear_trail1"
            x1="780.504"
            y1="84.3803"
            x2="616.805"
            y2="749.73"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFE5B4" stopOpacity="1" />
            <stop offset="0.5" stopColor="#FFD700" stopOpacity="0.9" />
            <stop offset="0.79" stopColor="#E0F2FE" stopOpacity="0.95" />
            <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        <path
          d="M-261 455.357L713.138 0L808 30.7497H789.682L134.805 562L-261 455.357Z"
          fill="url(#paint0_linear_trail1)"
        />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 704}
      height={height || 308}
      viewBox="0 0 704 308"
      fill="none"
      className={`trail trail-2 ${className}`}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient
          id="paint0_linear_trail2"
          x1="722.424"
          y1="51.1609"
          x2="908.593"
          y2="710.475"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFE5B4" stopOpacity="1" />
          <stop offset="0.4" stopColor="#FFD700" stopOpacity="0.9" />
          <stop offset="0.596154" stopColor="#E0F2FE" stopOpacity="0.95" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <path
        d="M-0.000657132 887.935L622.19 11.0567L703.926 1.72576e-05L396.8 785.234L-0.000657132 887.935Z"
        fill="url(#paint0_linear_trail2)"
      />
    </svg>
  );
}

