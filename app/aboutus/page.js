import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContactUs from "../contactus/page";
import Conatiner from "@/components/Conatiner";

const AboutUs = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Image
        src={"/images/herobg2.png"}
        width={720}
        height={400}
        alt="img"
        className="-z-30 absolute -top-7 h-[230px]"
      />
      <div className="w-[420px] h-14 bg-[#FAFAFA] absolute -left-2 z-20 top-44 -rotate-[4deg]" />
      <div className="flex flex-col pt-14 justify-center items-center gap-2">
        <h1 className="h1Text text-solarYellow">About us</h1>
        <div className="flex divide-x-4 divide-solarYellow *:px-3 h2Text">
          <Link href={"/"} className="text-white">
            Home
          </Link>
          <button className="text-solarYellow">About</button>
        </div>
      </div>
      <div className="my-24 *:py-6 relative">
        <Image
          src={"/images/bgspot.png"}
          width={533}
          height={430}
          alt="img"
          className="-z-30 absolute bottom-10 right-8"
        />
        <Conatiner
          title={"About us"}
          h1={
            <span>
              Your <span className="text-green">Trusted</span> Partner in{" "}
              <span className="text-solarYellow">Solar Energy</span>
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

export default AboutUs;
