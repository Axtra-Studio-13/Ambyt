"use client";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Button } from "@/components/ui/button";
import { HeroIcons } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
const Explore = () => {
  const parentRef = useRef([]);
  const headlineRef = useRef();
  const mobileMockup = useRef();
  const iconRef = useRef([]);
  iconRef.current = []; // reset before assigning new refs

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parentRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
    tl.fromTo(
      headlineRef.current.children,
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "elastic",
      },
    ).fromTo(
      mobileMockup.current,
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "power4.out",
        yoyo: true,
      },
    );

    gsap.to(iconRef.current, {
      opacity: 1,
      rotate: () => gsap.utils.random(-30, 30),
      duration: 0.4,
      stagger: 0.05,
      ease: "power4.out",
      repeat: -1,
      yoyo: true,
      repeatRefresh: true,
      zIndex: 20,
    });
  });

  return (
    <div ref={parentRef}
      className="grid grid-cols-2 max-sm:grid-rows-2 max-sm:grid-cols-1
     mt-40 max-sm:gap-y-21">
      <div
        ref={headlineRef}
        className="flex flex-col gap-2 justify-start items-start"
      >
        <div className="text-6xl max-md:text-3xl font-semibold
         max-sm:text-center">
          <TextAnimate>Ready to explore the world in a new way?</TextAnimate>
        </div>
        <div className="max-sm:hidden flex flex-col justify-start items-start">
          <p className="font-semibold text-lg max-md:text-sm">
            Sign Up for Beta Access
          </p>
          <div className="w-fit flex flex-row max-sm:w-full
         max-sm:col-span-2 max-sm:flex-col justify-center
         items-center gap-3">
            <input
              type="email"
              className="outline-none border border-gray-200
             rounded-full pr-12 pl-4 placeholder:text-left py-1 max-w-md w-full"
              placeholder="Email input for early access"
            />
            <Button variant="" className={"bg-blue-500 rounded-full text-white"}>
              <span>SUBMIT </span> <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
      <div className="relative -mt-[30%] max-md:ml-10">
        <Image
          ref={mobileMockup}
          src={"Group 1.svg"}
          alt=""
          width={100}
          height={100}
          className="relative w-[70%] max-sm:w-[80%] rotate-6 z-20 drop-shadow-2xl"
        />
        <div
          className="bg-black/40 blur-lg rounded-full
           w-[20%] h-[20%] absolute -bottom-20 ml-[20%] rotate-0"
        ></div>
        <Image
          src={"Ellipse 1.svg"}
          alt=""
          width={100}
          height={100}
          className="w-[80%] absolute top-[0%] -z-20"
        />
        <div
          className="grid grid-cols-2 gap-x-[20vw]
        gap-y-[30vh] absolute top-20 ml-[7%] z-20
        max-md:top-5 max-md:-ml-2 max-sm:gap-y-[10vh]
        max-md:gap-y-[20vh] max-sm:gap-x-[40vw] max-sm:ml-[10%]"
        >
          {HeroIcons.slice(0, 4).map((items, index) => (
            <Image
              src={items}
              key={index}
              alt=""
              ref={(el) => (iconRef.current[index] = el)}
              className="max-sm:w-8 max-md:w-14 "
              width={70}
              height={70}
              quality={10}
            />
          ))}
        </div>
      </div>
      <div className="hidden max-sm:flex flex-col
       justify-start items-start
       max-sm:justify-center max-sm:items-center max-sm:space-y-5">
        <p className="font-semibold text-lg max-md:text-sm">
          Sign Up for Beta Access
        </p>
        <div className="w-fit flex flex-row max-sm:w-full
         max-sm:col-span-2 max-sm:flex-col justify-center
         items-center gap-3">
          <input
            type="email"
            className="outline-none border border-gray-200
             rounded-full pr-12 pl-4
             placeholder:text-left py-1 max-w-md w-full max-sm:w-fit"
            placeholder="Email input for early access"
          />
          <Button variant=""
            className={"bg-blue-500 rounded-full text-white"}>
            <span>SUBMIT </span> <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
