"use client";
import LocomotiveScroll from "locomotive-scroll";
import Image from "next/image";
import { useEffect } from "react";
import Explore from "./Sections/Explore";
import FAQ from "./Sections/FAQ";
import Hero from "./Sections/Hero";
import Media from "./Sections/Media";
import Steps from "./Sections/Steps";
import Unique from "./Sections/Unique";
import Works from "./Sections/Works";

export default function Home() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      lenisOptions: {
        wrapper: window,
        content: document.documentElement,
        lerp: 0.5,
        duration: 1.7,
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        smoothTouch: false,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        normalizeWheel: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      },
    });

    // Optional: clean up on unmount
    return () => locomotiveScroll.destroy();
  }, []);
  return (
    <>
      {/* Hero section with background */}
      <div className="relative w-full h-fit">
        <Image
          src="/Clip-path-group.svg"
          alt="bg"
          width={120}
          height={1200}
          className="w-full absolute -z-10"
        />
        <div className="flex flex-col gap-3">
          <Hero />
        </div>
      </div>

      {/* Unique section without background */}
      <Unique />
      <Works />
      <Steps />
      <Media />
      {/* <Stats /> */}
      <Explore />
      <FAQ />
    </>
  );
}
