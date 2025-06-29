"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { getLetterPosition } from "@/utils/getLetterPosition";

interface INavCircleProps {
  index: number;
  title: string;
  totalItems: number;
}

function NavCircle({ index, title, totalItems }: INavCircleProps) {
  const letters = title.toUpperCase().split("");
  const diameter = 100 + 50 * index;
  const letterPosition = getLetterPosition(letters, index);

  return (
    <div
      style={{
        width: `${diameter}px`,
        height: `${diameter}px`,
        zIndex: (totalItems - index) * 10,
        boxShadow: "0 0 15px -10px #000",
      }}
      className={`bg-indigo-${index * 100} circle flex items-end relative`}
    >
      {letterPosition.map((letter, idx) => (
        <span
          key={idx}
          className="flex items-end absolute text-indigo-950 text-xs"
          style={{
            height: `${diameter / 2}px`,
            transform: `rotate(${letter.rotation}deg)`,
            transformOrigin: "6px 0px 0",
          }}
        >
          {letter.content}
        </span>
      ))}
    </div>
  );
}

export function DiscNav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navItems = ["home", "my self", "experience", "my work", "reviews"];
  const navSize = navItems.length * 50 + 100;

  useGSAP(() => {
    // Animation placeholder
  }, []);

  return (
    <div className="screen-container bg-indigo-950">
      <div
        style={{ width: `${navSize}px`, height: `${navSize}px` }}
        className="absolute flex justify-center items-center"
      >
        <div
          style={{ zIndex: (navItems.length + 1) * 10 }}
          className="w-[100] h-[100] flex justify-center items-center top-[15%] right-[15%]"
        >
          <Menu
            className={`${
              isNavOpen ? "text-indigo-950" : "text-indigo-50"
            } z-30 menu-icon cursor-pointer`}
            onClick={() => setIsNavOpen(!isNavOpen)}
          />
        </div>

        {isNavOpen &&
          navItems.map((item, index) => (
            <div
              key={index}
              style={{
                width: `${100 + 50 * index}px`,
                height: `${100 + 50 * index}px`,
              }}
              className="absolute"
            >
              <NavCircle
                title={item}
                index={index}
                totalItems={navItems.length}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
