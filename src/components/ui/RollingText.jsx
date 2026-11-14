import React from 'react';

// Rolling text hover effect (Aaron Iker / Dribbble / Shakuro signature style)
export default function RollingText({ text, className = '' }) {
  if (!text) return null;

  return (
    <span className={`inline-flex items-center overflow-hidden leading-none ${className}`}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="relative inline-block h-[1.15em] overflow-hidden leading-[1.15em]"
        >
          <span
            data-rolling-top
            className="block leading-[1.15em] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full group-hover/btn:-translate-y-full"
            style={{ transitionDelay: `${i * 25}ms` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
          <span
            data-rolling-bottom
            className="absolute top-0 left-0 block leading-[1.15em] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-full group-hover:translate-y-0 group-hover/btn:translate-y-0"
            style={{ transitionDelay: `${i * 25}ms` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        </span>
      ))}
    </span>
  );
}
