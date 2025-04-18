"use client";
import React, { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQItems } from "@/lib/utils";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
const FAQ = () => {
  const itemRef = useRef([]);

  useGSAP(() => {
    itemRef.current.forEach((el, i) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: -100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              // trigger: el,
              start: "top 80%",
              end: "top 40%",
              scrub: true, // ✅ now works per item
            },
          },
        );
      }
    });
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center max-sm:text-center mt-40 gap-3">
        <h4 className="text-4xl font-semibold">Frequently Asked Questions</h4>
        <p className="text-xs w-[40%] max-sm:w-[80%] max-sm:text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
          ducimus velit sit culpa numquam animi! Dolore qui vitae saepe, ipsa
          similique fugiat soluta adipisci quam! Eos vitae asperiores voluptas
          unde!
        </p>
        <Accordion type="single" collapsible
         className={"gap-2 flex flex-col max-sm:max-w-[80%]"}>
          {FAQItems.map((items, index) => (
            <AccordionItem
              ref={(el) => (itemRef.current[index] = el)}
              value={`item-${index + 1}`}
              key={index}
              className={"gap-3 flex flex-col decoration-0"}
            >
              <AccordionTrigger
                className={
                  "bg-orange-600/10 px-9 py-3 decoration-0 max-sm:text-xs"
                }
              >
                {items}
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default FAQ;
