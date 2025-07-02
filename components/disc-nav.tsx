"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { getLetterPosition } from "@/utils/getLetterPosition";
import { NAV_CIRCLE_GROWTH } from "@/constants";

interface INavCircleProps {
  index: number;
  title: string;
  totalItems: number;
  rotate: number;
}

function NavCircle({ index, title, totalItems, rotate }: INavCircleProps) {
  const bgColors = [
    "#FFFFFF",
    "#EDE6F3",
    "#DBCCE6",
    "#C9B3DA",
    "#B799CD",
    "#A580C1",
    "#9366B4",
    "#814DA8",
    "#6F339B",
    "#5D1A8F",
    "#B0082",
  ];

  const letters = title.toUpperCase().split("");
  const diameter = 100 + NAV_CIRCLE_GROWTH * index;
  const letterPosition = getLetterPosition(letters, index);

  return (
    <div
      style={{
        width: `${diameter}px`,
        height: `${diameter}px`,
        zIndex: (totalItems - index) * 10,
        boxShadow: "0 0 15px -10px #000",
        rotate: `${rotate}deg`,
        backgroundColor: `${bgColors[index]}`,
      }}
      className={`circle flex items-end relative cursor-pointer text-indigo-950 hover:text-sky-500`}
    >
      {letterPosition.map((letter, idx) => (
        <span
          key={idx}
          className="flex items-end absolute  hover:text-sky-300"
          style={{
            height: `${diameter / 2}px`,
            transform: `rotate(${letter.rotation}deg)`,
            transformOrigin: "6px 0px 0",
            color: "inherit",
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
  const navItems = [
    "home",
    "my self",
    "experience",
    "my work",
    "reviews",
    "certification",
    "my youtube",
    "contact",
  ];

  useGSAP(() => {
    const navTimeline = gsap.timeline();
    navTimeline.to(".menu-icon", {
      rotate: 360,
    });
  }, []);

  return (
    <div className="relative">
      <div className="flex justify-center items-center">
        <div
          style={{ zIndex: (navItems.length + 1) * 10 }}
          className="w-[50px] h-[50px] flex justify-center items-center top-[15%] right-[15%]"
        >
          <Menu
            size={25}
            className={`${
              isNavOpen ? "text-indigo-950" : "text-indigo-50"
            } z-30 menu-icon cursor-pointer`}
            onClick={() => {
              setIsNavOpen(!isNavOpen);
              // navTimeline.play();
            }}
          />
        </div>

        {isNavOpen &&
          navItems.map((item, index) => (
            <div
              key={index}
              style={{
                width: `${100 + NAV_CIRCLE_GROWTH * index}px`,
                height: `${100 + NAV_CIRCLE_GROWTH * index}px`,
              }}
              className="absolute"
            >
              <NavCircle
                title={item}
                index={index}
                totalItems={navItems.length}
                rotate={45}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
