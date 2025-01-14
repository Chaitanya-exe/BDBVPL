"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContactUs from "../contactus/page";
import Conatiner from "@/components/Conatiner";

const AboutUs = () => {
  return (
    <div className="min-h-screen w-screen relative overflow-hidden">
      {/* Hero Section */}
      <Image
        src={"/images/herobg2.png"}
        width={720}
        height={400}
        alt="img"
        className="-z-30 absolute w-full -top-4 h-[380px] md:min-h-[550px]"
      />

      {/* upper divs */}
      <div className="absolute lg:-top-[78px] -top-[140px]  -left-6 -right-5 z-10">
        <div className="bg-[#FAFAFA] relative h-52 -rotate-[3deg] min-w-[500px]">
          <div className="bg-[#FAFAFA] absolute lg:bottom-0 lg:left-24 bottom-1 rotate-[42deg] h-28 lg:w-56 w-36 rounded-xl -z-10" />
        </div>
      </div>

      <div className="h-28 bg-[#FAFAFA] absolute -left-2 -right-5 z-10 top-[290px] md:top-[475px] -rotate-[4deg]" />
      <div className="flex flex-col pt-32 md:pt-56 justify-center items-center gap-4 md:gap-8">
        <h1 className="h1Text md:h1TextLg text-solarYellow">About Us</h1>
        <div className="flex divide-x-4 divide-solarYellow *:px-3 md:h2TextLg h2Text">
          <Link href={"/"} className="text-white">
            Home
          </Link>
          <button className="text-solarYellow">About</button>
        </div>
      </div>

      {/* About Information Section */}
      <div className="my-24 mt-32 md:mt-44 mb-20 mx-8 md:mx-20 lg:mx-32 z-20 *:py-6 relative">
        <Image
          src={"/images/bgspot.png"}
          width={533}
          height={430}
          alt="img"
          className="-z-30 absolute w-full max-h-[780px] md:-top-10 bottom-0  right-8"
        />
        <Conatiner
          title={"About us"}
          h1={
            <span>
              Switch to <span className="text-solarYellow"> Solar</span> Save
              the
              <span className="text-green"> Planet</span>
            </span>
          }
          h2={
            "Learn about our journey and how we bring solar solutions to life."
          }
          textAllign={"text-center"}
        />
        <div className="flex flex-col items-center bg-[/images/bgspot.png]">
          <div className="grid grid-cols-2 gap-1">
            <Image
              src={"/images/apic1.png"}
              width={175}
              height={220}
              alt="img"
              className="row-span-2 w-full"
            />
            <Image
              src={"/images/apic2.png"}
              width={175}
              height={110}
              alt="img"
              className="h-full"
            />
            <Image
              src={"/images/apic3.png"}
              width={175}
              height={110}
              alt="img"
              className=" h-full"
            />
          </div>
          <div className="mx-14 -mt-16 pText p-2 border-4 border-white bg-deepTeal text-white">
            <p>
              Focus on who you are, what you do, and why you do it in 2-3
              sentences. Example:"At [Your Company Name], we’re passionate
              about harnessing the power of the sun to create sustainable energy
              solutions. With years of expertise in solar technology, we’re
              dedicated to helping homes and businesses reduce their carbon
              footprint and save on energy costs. We strive to make renewable
              energy accessible, affordable, and impactful for everyone,
              contributing to a brighter and greener tomorrow
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

const AnimatedDiv = ({
  width,
  duration = 1.5,
  delay = 0.3,
  bgColor = "bg-deepTeal",
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start({
        width,
        transition: { duration, delay },
      });
    }
  }, [inView, controls, width, duration, delay]);

  return (
    <div className="md:min-w-[400px] w-[250px] relative block h-4 md:h-9 rounded-sm bg-text/5 overflow-hidden">
      <motion.div
        ref={ref}
        className={`absolute left-0 h-full ${bgColor}`}
        initial={{ width: "0%" }}
        animate={controls}
      />
    </div>
  );
};
