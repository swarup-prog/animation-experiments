"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface INavCircleProps {
  index: number;
  title: string;
  totalItems: number;
}

function NavCircle({ index, title, totalItems }: INavCircleProps) {
  const letters = title.toUpperCase().split("").reverse();
  // const letters = title.toUpperCase().split("");

  const diameter = 100 + 50 * index;
  const angle = (letters.length * 15) / (letters.length / 4) / letters.length;

  const midLetterIndex = (letters.length / 2).toString();

  // const rotations = letters.map();

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
      {letters.map((letter, index) => {
        let rotationAngle = index * angle;

        // if (index > +midLetterIndex) {
        //   rotationAngle = -rotationAngle;
        // }
        return (
          <span
            key={index}
            className="flex items-end absolute text-indigo-950 text-xs"
            style={{
              height: `${diameter / 2}px`,
              transform: `rotate(${rotationAngle}deg`,
              transformOrigin: "6px 0px 0",
            }}
          >
            {letter}
          </span>
        );
      })}
    </div>
  );
}

export function DiscNav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navItems = ["home", "my self", "experience", "my work", "reviews"];

  const navSize = navItems.length * 50 + 100;

  const letters = "HOME".split("").reverse();
  const angle = 90 / letters.length;

  useGSAP(() => {}, []);

  return (
    <div className="screen-container bg-indigo-950">
      {/* <div className="h-96 w-96 bg-indigo-950 flex relative overflow-hidden"> */}
      <div
        style={{ width: `${navSize}px`, height: `${navSize}px` }}
        className=" absolute flex justify-center items-center"
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
        {isNavOpen && (
          <>
            {navItems.map((item, index) => (
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
            {/* <div className=" absolute w-[200px] h-[200px] bg-indigo-400 circle ">
              <div className="w-[150px] h-[150px] bg-indigo-200 circle z-10">
                <div className="w-[100px] h-[100px] bg-indigo-100 circle z-20 flex items-end relative">
                  {letters.map((letter, index) => {
                    return (
                      <span
                        key={index}
                        className="h-[50px] flex items-end absolute text-indigo-950 text-xs"
                        style={{
                          transform: `rotate(${index * angle}deg`,
                          transformOrigin: "6px 0px 0",
                        }}
                      >
                        {letter}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div> */}
          </>
        )}
      </div>
      {/* </div> */}
    </div>
  );
}
