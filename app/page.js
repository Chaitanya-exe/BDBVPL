import AboutSec from "@/components/sections/AboutSec";
import Button from "@/components/Button";
import Conatiner from "@/components/Conatiner";
import Image from "next/image";
import { FaPlay } from "react-icons/fa6";
import ServicesSec from "@/components/sections/ServicesSec";
import WorkFlow from "@/components/sections/WorkFlow";
import Testimonials from "@/components/sections/Testimonials";
import Projects from "@/components/sections/Projects";
import QuerySec from "@/components/sections/QuerySec";
import Link from "next/link";
import { ClientCarousel } from "@/components/clientCarousel";
import PdfDownload from "@/components/pdfDownload";

export default function Home() {
  return (
    <section className="py-2 relative overflow-hidden">
      <div className="absolute -top-6 -z-20">
        <Image
          src={"/images/herobgl.png"}
          width={900}
          height={800}
          alt="rect"
          className="block min-h-[410px] max-h-[700px] w-screen blur-sm opacity-95"
        />

        {/* try */}

        <div className="absolute md:-top-[57px] -top-[120px]  -left-6 -right-5 z-10">
          <div className="bg-[#FAFAFA] relative h-52 -rotate-[3deg] min-w-[500px]">
            <div className="bg-[#FAFAFA] absolute lg:bottom-0 lg:left-24 bottom-1 rotate-[42deg] h-28 lg:w-56 w-36 rounded-xl -z-10" />
          </div>
        </div>
      </div>

      <div className="text-white max-w-[780px] my-24 md:my-56 mx-8 md:mx-20 lg:mx-32 border-l-4 pl-2 md:pl-5 border-solarYellow">
        <h1 className="h1Text  md:h1TextLg motion-preset-slide-left">
          Harness the Sun, {""}
          <br />
          <span className="text-solarYellow hover:motion-preset-pop motion-duration-2000">
            Power{" "}
          </span>
          Your
          <span className="text-solarYellow hover:motion-preset-pop motion-duration-2000">
            {" "}
            Future!{" "}
          </span>
        </h1>
        <h2 className="h2Text md:h2TextLg mt-1 motion-preset-blur-right motion-duration-2000">
          Let the Sun Work for You <br className="hidden md:block" />
          Sustainable Power, Everyday Savings!{" "}
        </h2>
        <div className="flex items-center gap-3 md:gap-5 my-4">
          <Link href={"/contactus"}>
            <Button text={"let's talk"} />
          </Link>
          <button className=" text-solarYellow hover:animate-pulse border border-solarYellow rounded-full p-2.5">
            <FaPlay />
          </button>
        </div>
      </div>

      <div className="md:flex my-24 items-center gap-10 ">
        <div className="aboutImgContainer lg:w-[350px] lg:h-[400px]  mx-10 relative motion-preset-slide-right ">
          <Image
            src={"/images/aboutsectionimg.png"}
            width={240}
            height={263}
            alt="img"
            className="w-full h-fit transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg  hover:shadow-text/50"
          />
          <div className="absolute -bottom-12 -right-8  bg-[#FAFAFA] rounded-full w-30 h-30 p-1 *:pt-4 capitalize text-wrap shadow text-center text-white">
            <div className="transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg  hover:shadow-text/50 bg-solarYellow rounded-full w-28 h-28">
              <p className="font-bold text-4xl">12+</p>
              <p className="text-sm">years Experience</p>
            </div>
          </div>
          <div className="absolute -bottom-12 -left-20 w-[296px] lg:w-[400px] lg:h-[300px] h-[233px] bg-deepTeal/60 -z-10" />
        </div>
        <AboutSec />
      </div>

      <div className=" *:my-20 *:px-6 *:lg:px-20">
        <Conatiner
          title={"Our Client Companies"}
          h1={"Trusted Solar Solutions Backed by Leading Pump Brands"}
          h2={
            "Powering Sustainability with Top-Tier Solar Panels and Pumps from Industry Giants like Oswal, CRI, Shakti, and Crompton."
          }
          textAllign={"text-center md:mx-40"}
        />
        <ClientCarousel />
        <PdfDownload />
        <ServicesSec />
        <WorkFlow />
        {/* <Testimonials />
        <Projects /> */}
      </div>
      <QuerySec />
    </section>
  );
}
