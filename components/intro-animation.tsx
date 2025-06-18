"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export function IntroAnimation() {
  const containerRef = useRef(null);

  /**
   * .from() => animates properties from the value you define to whatever they currently are
   * .to() => animates properties from the value they currently are to whatever you define
   */

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline(); // for sequential animation

      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5, //appear one after the other
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.5,
        });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <div
        id="intro-slider"
        className="h-screen p-10 bg-gray-50 absolute top-0 left-0 z-10 w-full flex flex-col gap-10 tracking-tight"
      >
        <h1 id="title-1" className="text-9xl">
          Software Engineer
        </h1>
        <h1 id="title-2" className="text-9xl">
          Freelancer
        </h1>
        <h1 id="title-3" className="text-9xl">
          Pro Gamer
        </h1>
      </div>
      <div className="h-screen flex bg-gray-950 justify-center items-center">
        <h1 id="welcome" className="text-9xl font-bold text-gray-100">
          Welcome.
        </h1>
      </div>
    </div>
  );
}
