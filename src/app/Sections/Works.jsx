"use client";
import { TextAnimate } from "@/components/magicui/text-animate";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
const Works = ({
  headline = "How It Works User Journey",
  src = "/Group 15.svg",
  text,
}) => {
  const headlineRef = useRef();
  const LogoRef = useRef();
  const parentRef = useRef();
  const paraRef = useRef();
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parentRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.from(headlineRef.current, {
      opacity: 0,
      // display:'none',
      duration: 0.5,
      stagger: 0.6,
      ease: "power4.out",
    })
      .from(LogoRef.current, {
        opacity: 0,
        duration: 0.5,
        stagger: 0.6,
        y: -20,
        ease: "power4.out",
      })
      .from(paraRef.current, {
        // display:'none',
        opacity: 0,
        duration: 0.5,
        stagger: 0.6,
        ease: "power4.out",
      });
  });

  return (
    <>
      <div
        ref={parentRef}
        className="grid grid-cols-2 max-sm:grid-cols-1
        max-sm:justify-between max-sm:items-center
        justify-between items-center ml-6
         max-md:mx-3 max-sm:gap-8 max-md:gap-8"
      >
        <div
          ref={headlineRef}
          className=" w-[45%] max-sm:w-[100%] max-md:w-full justify-center items-center"
        >
          <TextAnimate
            animation="slideLeft"
            by="character"
            className="text-4xl max-sm:text-2xl max-xs:text-lg max-sm:text-center font-semibold text-left"
          >
            {headline}
          </TextAnimate>

        </div>
        <div className="relative flex flex-row justify-center items-center">
          <Image
            src={src}
            alt="icons"
            ref={LogoRef}
            width={100}
            height={100}
            className="rotate-[-22deg] max-md:w-[70%]
             max-sm:w-[100%]"
          />
          <div
            ref={paraRef}

          >
            <TextAnimate animation="slideLeft" by="character"
              className="w-[60%] max-md:w-[70%] max-sm:w-[90%]
              text max-sm:text-xs text-right text-wrap">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
              quaerat at quas nemo sapiente voluptatem recusandae maiores error,
              explicabo asperiores nam atque iusto dignissimos facere nesciunt
              libero obcaecati dicta unde.
            </TextAnimate>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
