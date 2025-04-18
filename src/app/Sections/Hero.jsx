"use client";
import { HeroIcons } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextAnimate } from "@/components/magicui/text-animate";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  const headline = useRef();
  const mobileMockup = useRef();
  const mobileNotifications = useRef();
  const Icons = useRef();
  const para = useRef();

  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .to(
        headline.current,

        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 2,
          yoyo: true,
          ease: "power4.out",
        },
      )
      .fromTo(
        mobileMockup.current,
        {
          opacity: 0,
          scale: 0,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power4.inOut",
        },
      )
      .fromTo(
        mobileNotifications.current.children,
        {
          opacity: 0,
          y: -100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 2,
          ease: "power4.inOut",
        },
      );

    gsap.to(
      Icons.current.children,
      //   {
      //   opacity: 0,
      // },
      {
        opacity: 1,
        duration: 1,
        stagger: 0.4,
        ease: "power4.out",
        rotate: () => gsap.utils.random(-30, 30), // random rotation
        repeat: -1, // infinite loop
        yoyo: true, // animate back to original state
        repeatRefresh: true,
      },
    );

    gsap.fromTo(
      para.current,
      { opacity: 0, y: -100 },
      {
        opacity: 1,
        y: 0,
        stagger: 5,
        duration: 1,
        ease: "power3.in",
        scrollTrigger: {
          trigger: para.current,
          start: "top 100%",
          screenY: "90%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5 mt-20">
        <div
          ref={headline}
          className="text-8xl max-sm:text-4xl max-sm:w-fit font-semibold text-center"
        >
          <TextAnimate animation="slideUp" by="word">
            Socializing Meets Maps – Explore, Plan, Connect!
          </TextAnimate>
        </div>
        <div className="flex flex-col justify-center items-center scale-120 max-sm:scale-100">
          <div
            className="relative flex
         justify-center items-center flex-col mt-[10%] "
          >
            {/* icons */}
            <div className="grid grid-cols-2 gap-x-[30vw] gap-y-15" ref={Icons}>
              {HeroIcons.map((items, index) => (
                <Image
                  src={items}
                  key={index}
                  className="max-sm:w-8"
                  width={70}
                  height={70}
                  quality={10}
                  alt="hero icons"
                />
              ))}
            </div>
            {/* mockup */}
            <div
              className="absolute justify-center
          items-center z-40 w-[60%] max-sm:w-[90%] max-sm:mt-[40%]"
            >
              <Image
                src={"Union.svg"}
                width={100}
                height={100}
                quality={80}
                alt="mockup"
                className="absolute max-sm:mt-12 -mt-10 max-md:-mt-30 w-full"
              />
              <Image
                ref={mobileMockup}
                // img={Mockup.src}
                src={"Group 1.svg"}
                // className='w-[50vw] h-[50vh] -ml-[18%] object-contain absolute z-40'
                className="-mt-10 max-md:-mt-30 w-[50vw] h-[50vh]"
                // base64={Mockup.blurDataURL}
                width={30}
                height={30}
              />
            </div>

            {/* notification */}
            <div
              className="flex flex-col justify-between items-center
             absolute z-40 max-sm:w-[60%] max-md:w-[50%]"
              ref={mobileNotifications}
            >
              <Image
                src={"Frame 44.svg"}
                width={200}
                height={100}
                quality={10}
                alt=""
                className="-translate-x-[90%] -translate-y-[50%]
                max-sm:-translate-y-[90%] w-full max-sm:-translate-x-[70%]"
              />
              <Image
                src={"Frame 45.svg"}
                width={200}
                height={100}
                quality={10}
                alt=""
                className="translate-x-[90%] translate-y-[60%]
                 max-sm:translate-y-[60%] max-sm:translate-x-[70%] w-full"
              />
            </div>
          </div>
          <p
            ref={para}
            className="text-center font-medium max-sm:text-sm
        z-30 text-lg w-[70%] mt-[10%]"
          >
            Mark Places, plan activities, and meet like-minded people in your
            city
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
