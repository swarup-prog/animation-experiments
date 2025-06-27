'use client';

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';

gsap.registerPlugin(MorphSVGPlugin);

export function SvgMorph () {
  const pathRef = useRef<SVGPathElement | null>(null);
  const [isTick, setIsTick] = useState<boolean>(true);

  useEffect(() => {
    if (!pathRef.current) return;

    const morphTo = isTick
      ? 'M4 4L20 20M20 4L4 20' // Cross path
      : 'M4 12L9 17L20 7'; // Tick path

    gsap.to(pathRef.current, {
      duration: 1,
      morphSVG: { d: morphTo }, // Explicitly casting morphSVG for compatibility
      ease: 'power2.inOut',
    } as any); // Use `any` to bypass strict typing
  }, [isTick]);

  const toggleIcon = () => setIsTick((prev) => !prev);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="100"
        height="100"
        fill="none"
        stroke={isTick ? 'green' : 'red'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        onClick={toggleIcon}
        style={{ cursor: 'pointer', width: 25, height:25 }}
      >
        <path
          ref={pathRef}
          d="M4 12L9 17L20 7" // Initial tick path
        />
      </svg>
    </div>
  );
};

