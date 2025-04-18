import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, MoveRight } from "lucide-react";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center
       bg-blue-500/80 py-6 gap-6 mt-6">
        <div className="grid grid-cols-3 max-md:grid-cols-2
         max-sm:flex max-sm:flex-col max-sm:justify-start
         max-sm:items-start max-sm:grid-flow-row
        justify-center items-center px-3 max-md:gap-5">
          <div className="flex flex-col justify-start
          items-start gap-3 max-sm:w-full">
            <h2 className="text-4xl max-md:text-2xl font-semibold">Ambyt</h2>
            <p className="text-sm max-md:text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto dolorum doloremque harum eaque possimus assumenda, esse
              non voluptates voluptatibus illum dolores ducimus quas in commodi
              temporibus officiis praesentium hic magnam.
            </p>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </p>
          </div>
          <div className=" max-sm:w-full
           justify-start items-start">
            <div className="flex flex-col justify-start items-start">
              <h3 className="font-semibold">Address</h3>
              <p className="text-sm">123 Bbbb Street, Hhhh City, XY 98765</p>
            </div>
            <div className="flex flex-col justify-start items-start">
              <h3 className="font-semibold">Contact Us</h3>
              <p className="text-sm">support@gmail.com</p>
              <p className="text-sm">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="flex flex-col max-md:col-span-3 max-md:gap-3
          max-md:justify-center max-md:items-center justify-start items-start">
            <div className="flex flex-row max-sm:flex-col justify-center items-center">
              <h3 className="font-semibold">Keep in touch</h3> -
              <p>Stay updated on new features</p>
            </div>
            <div className="border border-gray-700 flex items-center justify-between rounded-full px-3 py-1 max-w-md w-full">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-transparent outline-none text-sm text-white placeholder-gray-400"
              />
              <button
                // variant="outline"
                // size="icon"
                className="flex items-center gap-2 bg-yellow-600 text-white rounded-3xl px-4 py-2 hover:bg-yellow-500 transition"
              >
                <p>Join</p> <MoveRight />
              </button>
            </div>

            {/* r3 */}
            <div className="flex flex-col justify-start items-start">
              <h3 className="font-semibold text-2xl">Connect</h3>
              <div className="flex flex-row justify-center items-center gap-3">
                <Button variant="outline" size="icon">
                  <Instagram />
                </Button>
                <Button variant="outline" size="icon">
                  <Linkedin />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-sm w-[40%] max-md:w-[80%]">
          We are committed to protecting your privacy. Your personal information
          is securely stored and never shared without your consent. For more
          details, visit our Privacy Policy.
        </p>
      </div>
    </>
  );
};

export default Footer;
