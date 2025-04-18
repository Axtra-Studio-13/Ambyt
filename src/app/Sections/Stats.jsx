import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import React from "react";

const Stats = () => {
  return (
    <>
      <div className="flex flex-row  justify-between items-center">
        <h2 className="text-4xl font-semibold">Stats</h2>
        <p className="w-[40%]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
          veritatis enim assumenda eveniet excepturi quos fuga ipsam ad, neque
          ab cum, mollitia dolor blanditiis fugit minima! Facilis aliquid
          doloremque eum.
        </p>
      </div>
      <div className="grid  grid-rows-2 justify-center items-center overflow-hidden">
        {/* card 1 */}
        <div className="grid grid-flow-col grid-row-2 gap-4 overflow-x-auto">
          <div
            className=" flex row-span-1
        flex-col justify-start items-start gap-4"
          >
            <p className="text-sm">
              <span className="font-semibold text-wrap overflow-ellipsis">
                Lorem ipsum dolor sit amet
              </span>{" "}
              consectetur adipisicing elit. Quisquam, quae.
            </p>
            <AspectRatio ratio={3 / 1} className="w-full">
              <Image
                src="/testimonals-1.jpeg"
                alt="Testimonial"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-lg"
              />
            </AspectRatio>
          </div>
          <div
            className=" flex col-span-1
        flex-col-reverse justify-start items-start gap-4"
          >
            <p className="text-sm">
              <span className="font-semibold text-wrap overflow-ellipsis">
                Lorem ipsum dolor sit amet
              </span>{" "}
              consectetur adipisicing elit. Quisquam, quae.
            </p>
            <AspectRatio ratio={4 / 3} className="w-full h-full object-cover">
              <Image
                src={"/testimonals-1.jpeg"}
                alt=""
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-lg"
              />
            </AspectRatio>
          </div>

          <div
            className=" flex col-span-1 row-span-2
        flex-col-reverse justify-start items-start gap-4"
          >
            <p className="text-sm">
              <span className="font-semibold text-wrap overflow-ellipsis">
                Lorem ipsum dolor sit amet
              </span>{" "}
              consectetur adipisicing elit. Quisquam, quae.
            </p>
            <AspectRatio ratio={1 / 1} className="w-full h-full object-cover">
              <Image
                src={"/testimonals-1.jpeg"}
                alt="stats images"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-lg"
              />
            </AspectRatio>
          </div>
          <div
            className=" flex row-span-1
        flex-col justify-start items-start gap-4"
          >
            <p className="text-sm">
              <span className="font-semibold text-wrap overflow-ellipsis">
                Lorem ipsum dolor sit amet
              </span>{" "}
              consectetur adipisicing elit. Quisquam, quae.
            </p>
            <AspectRatio ratio={4 / 1} className="w-[50%]">
              <Image
                src="/testimonals-1.jpeg"
                alt="Testimonial"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-lg"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
