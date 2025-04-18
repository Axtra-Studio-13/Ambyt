"use client";
import { StepsInfo } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { forwardRef, useRef } from "react";
import Testimonals from "./Testimonals";
import dynamic from "next/dynamic";

// const Testimonals = dynamic(() => import('./Testimonals'), { ssr: false })

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Mockup = forwardRef(({ src, text, color, des, className }, ref) => {
  return (
    <div
      ref={ref}
      className={`flex flex-col justify-center items-center ${className}`}
    >
      <h6 className="font-semibold" style={{ color }}>
        Step {text}
      </h6>
      <div className="flex flex-row justify-center items-start">
        <Image
          src={src}
          width={600}
          height={600}
          alt=""
          className="relative max-sm:w-full object-cover"
        />
        <Image
          src={"Union.svg"}
          width={300}
          height={300}
          alt="mobile shadow"
          className="absolute -z-10 max-sm:w-[80%] object-cover"
        />
      </div>
      <p className="text-sm">{des}</p>
    </div>
  );
});

const Steps = () => {
  const parentRef = useRef([]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parentRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
    tl.fromTo(
      parentRef.current.children,
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.5,
        ease: "power4.out",
      },
    );
  });

  // const Testimonals = dynamic(() => import('./Testimonals'), { ssr: false })

  return (
    <>
      {/* <div className='relative h-fit'> */}
      <div
        ref={parentRef}
        className="relative grid grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2
       justify-center items-center text-center gap-5 max-sm:gap-12 mt-12 max-sm:mt-20"
      >
        {StepsInfo.map((items, key) => (
          <Mockup
            ref={(el) => (parentRef.current[key] = el)}
            // ref={parentRef}
            src={items.img}
            text={key + 1}
            key={key}
            color={items.color}
            des={items.des}
            className={
              key % 2 === 0 ? "-mt-10 max-sm:-mt-0" : "mt-10 max-sm:mt-0"
            }
          />
        ))}
      </div>
      <Image
        src={"Group.svg"}
        alt="mobile mockups"
        width={100}
        height={100}
        className="w-full absolute h-fit object-cover top-0 -z-10"
      />
      {/* </div> */}
      <Testimonals />
    </>
  );
};

export default Steps;
