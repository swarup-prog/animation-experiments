"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export function Loader() {
  const loaderContainer = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(
        [
          "#container-1",
          "#container-2",
          "#container-3",
          "#container-4",
          "#container-5",
        ],
        {
          opacity: 0,
          delay: 0.3,
        }
      )
        .from("#load-1", {
          opacity: 0,
          delay: 0.3,
        })
        .to("#load-1", {
          width: "100%",
          delay: 0.3,
        })
        .from(["#load-2", "#load-3", "#load-4", "#load-5"], {
          width: 0,
          delay: 0.6,
          stagger: 0.5,
        })
        .to(["#container-2", "#load-2", "#container-4", "#load-4"], {
          width: 60,
          delay: 0.1,
        })
        .to(
          [
            "#container-1",
            "#container-2",
            "#container-3",
            "#container-4",
            "#container-5",
            "#load-1",
            "#load-2",
            "#load-3",
            "#load-4",
            "#load-5",
          ],
          {
            height: 10,
            delay: 0.1,
          }
        )
        .to("#bend-1", {
          rotate: -90,
          y: 5,
          delay: 0.1,
        })
        .to("#bend-2", {
          rotate: -90,
          x: -5,
          delay: 0.1,
        })
        .to("#bend-3", {
          rotate: 90,
          y: -5,
          delay: 0.1,
        })
        .to("#container-5", {
          rotate: 90,
          x: -5,
          delay: 0.1,
        })
        .to("#main", {
          x: 200, // or whatever amount needed
          y: 80,
          duration: 0.5,
        });
    }, loaderContainer);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="bg-gray-950 h-screen flex justify-center items-center"
      ref={loaderContainer}
    >
      <div id="main" className="flex justify-center items-center">
        <div id="container-1" className="w-20 h-5 bg-gray-800">
          <div id="load-1" className="w-1 h-5 bg-gray-50" />
        </div>
        <div id="bend-1" className="flex origin-left">
          <div id="container-2" className="w-20 h-5 bg-gray-800">
            <div id="load-2" className="w-full h-5 bg-gray-50" />
          </div>
          <div id="bend-2" className="flex origin-left">
            <div id="container-3" className="w-20 h-5 bg-gray-800">
              <div id="load-3" className="w-full h-5 bg-gray-50" />
            </div>
            <div id="bend-3" className="flex origin-left">
              <div id="container-4" className="w-20 h-5 bg-gray-800">
                <div id="load-4" className="w-full h-5 bg-gray-50" />
              </div>
              <div
                id="container-5"
                className="w-20 h-5 bg-gray-800 origin-left"
              >
                <div id="load-5" className="w-full h-5 bg-gray-50" />
              </div>
            </div>
          </div>
        </div>
        1{" "}
      </div>
    </div>
  );
}
