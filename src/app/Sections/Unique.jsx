"use client";
import { TextAnimate } from "@/components/magicui/text-animate";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
// import RoundedDiv from './RoundedDiv'; // Make sure path is correct

gsap.registerPlugin(ScrollTrigger);

import React, { forwardRef } from "react";
import Image from "next/image";
import TextReveal from "@/components/TextReveal";
import TextRevealSticky from "@/components/TextReveal";

const RoundedDiv = forwardRef(({ icon, heading, p, color, position }, ref) => {
  return (
    <div
      ref={ref}
      className={`flex flex-row w-[20%] max-md:w-[35%] max-sm:w-[55%] rounded-full py-3 px-4 gap-4 items-center justify-start ${position}`}
      style={{
        backgroundColor: color,
        position: "absolute",
      }}
    >
      <Image
        src={icon}
        alt="icons"
        width={50}
        height={50}
        className="max-sm:w-8"
      />
      <div className="flex flex-col w-full max-sm:w-full">
        <h4 className="font-semibold max-md:text-sm max-sm:text-xs">
          {heading}
        </h4>
        <p className="text-xs text-left font-semibold max-sm:text-[9px]">{p}</p>
      </div>
    </div>
  );
});

const Unique = () => {
  const headlineRef = useRef();
  const bubblesRefs = useRef([]);

  useGSAP(() => {
    // Headline Animation
    gsap.fromTo(
      headlineRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        delay: 0.5,
        stagger: 0.5,
        scrollTrigger: {
          trigger: headlineRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );

    // Animate each bubble
    bubblesRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, y: -100 },
        {
          opacity: 1,
          // scale: 1,
          y: 0,
          duration: 0.5,
          ease: "bounce",
          delay: i * 0.2,
          stagger: 0.5,

          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        },
      );
    });
  }, []);

  const bubblesData = [
    {
      color: "#2a8d42",
      icon: "Group 28.svg",
      heading: "My Places",
      position:
        "-mt-[22%] -ml-[32%] max-md:-mt-[40%] max-sm:-mt-[60%] rotate-16 -z-10",
      p: "Save & customize your favorite locations",
    },
    {
      color: "#f8872c",
      icon: "Group 29.svg",
      heading: "Actions",
      position:
        "mt-[0%] ml-[50%] max-sm:mt-[90%] max-sm:-ml-[15%] max-md:mt-[15%] max-md:ml-[50%] -rotate-3 -z-10",
      p: "Organize and join events at different places.",
    },
    {
      color: "#766e69",
      icon: "Group 30.svg",
      heading: "AI-Powered Suggestions",
      position:
        "-mt-[17%] ml-[20%] max-sm:-mt-[80%] max-sm:rotate-16 max-sm:ml-[20%] max-md:-mt-[35%] max-md:ml-[50%] -z-10",
      p: "Save & customize your favorite locations",
    },
    {
      color: "#1966c0",
      icon: "Group 31.svg",
      heading: "Place to Visit",
      position:
        "-mt-[1%] -ml-[5%] max-md:-ml-[15%] max-sm:-ml-[0%] -rotate-2 -z-10",
      p: "Plan and track new places you want to explore.",
    },
    {
      color: "#dedcd6",
      icon: "Shape Copy.svg",
      heading: "Real-Time Chat",
      position:
        "mt-[22%] ml-[10%] max-sm:-ml-[30%] max-sm:mt-[55%] max-sm:rotate-6 max-md:mt-[42%] rotate-18 -z-10 text-black",
      p: "Connect with people around your locations.",
    },
  ];

  return (
    <div
      className="flex justify-center
      items-center relative h-[180vh] mt-[20%] z-40"
    >
      <div
        ref={headlineRef}
        className="sticky top-0 -mt-[35%] pt-[10%] mb-[10%] text-7xl max-md:text-6xl
        max-md:w-[60%] max-sm:text-4xl max-sm:w-[70%]
        font-semibold w-[40%] text-center rotate-4 leading-30"
      >
        <TextRevealSticky
          text={"What Makes Ambyt Unique?"}
          lines={["What Makes", "Ambyt Unique?"]}
        />
        {/* <TextAnimate animation="blurIn" as="h1"></TextAnimate> */}
      </div>

      {bubblesData.map((bubble, index) => (
        <RoundedDiv
          key={index}
          ref={(el) => (bubblesRefs.current[index] = el)}
          {...bubble}
        />
      ))}
    </div>
  );
};

export default Unique;
