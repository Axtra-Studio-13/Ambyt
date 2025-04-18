"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextReveal = ({ lines = [], className }) => {
  const containerRef = useRef();

  useEffect(() => {
    const chars = containerRef.current.querySelectorAll("span");

    gsap.set(chars, { opacity: 0, y: 30 });

    gsap.to(chars, {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      duration: 0.6,
      ease: "power4.out",
      scrollTrigger: {
        scrub: true,
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
        // markers: true,
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className={`w-full max-sm:text-3xl max-md:text-5xl
         max-md:w-full font-bold flex flex-col gap-y-20 text-7xl ${
           className || ""
         }`}
    >
      {lines.map((line, i) => (
        <div key={i} className="flex flex-wrap justify-center">
          {line.split("").map((char, index) => (
            <span key={index} className="inline-block whitespace-pre">
              {char}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TextReveal;
