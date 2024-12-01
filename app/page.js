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

export default function Home() {
  return (
    <section className="my- py-2 relative overflow-hidden">
      <div className="absolute -top-6 -z-20">
        <Image
          src={"/images/herobgl.png"}
          width={900}
          height={800}
          alt="rect"
          className="w-full block min-h-[380px] max-h-[640px] lg:w-screen"
        />
      </div>
      <div className="text-white max-w-[650px] my-20 md:my-36 mx-8 md:mx-20 lg:mx-32 border-l-4 pl-2 md:pl-5 border-solarYellow">
        <h1 className="h1Text md:h1TextLg">
          <span className="text-solarYellow">Power </span>
          Your Home,
          <span className="text-solarYellow"> Empower </span>
          the planet.
        </h1>
        <h2 className="h2Text md:h2TextLg mt-1">
          Switch to solar panels and start saving the planet and your wallet
        </h2>
        <div className="flex items-center gap-3 md:gap-5 my-4">
          <Button text={"let's talk"} />
          <button className="text-solarYellow hover:animate-pulse border border-solarYellow rounded-full p-2.5">
            <FaPlay />
          </button>
        </div>
      </div>
      <div className="md:flex my-28 py-10 lg:pt-24 items-center gap-10">
      <div className="aboutImgContainer lg:w-[350px] lg:h-[400px]  mx-10 relative">
        <Image
          src={"/images/aboutsectionimg.png"}
          width={240}
          height={263}
          alt="img"
          className="w-full h-fit"
        />
        <div className="absolute -bottom-12 -right-8  bg-[#FAFAFA] rounded-full w-30 h-30 p-1 *:pt-4 capitalize text-wrap shadow text-center text-white">
          <div className="bg-solarYellow rounded-full w-28 h-28">
            <p className="font-bold text-4xl">3+</p>
            <p className="text-sm">years experience</p>
          </div>
        </div>
        <div className="absolute -bottom-12 -left-20 w-[296px] lg:w-[400px] lg:h-[300px] h-[233px] bg-deepTeal/60 -z-10" />
      </div>
        <AboutSec />
        
      </div>


      <div className=" *:my-20 *:px-6 *:lg:px-24">
        <ServicesSec />
        <WorkFlow />
        <Testimonials />
        <Projects />
      </div>
        <QuerySec />
    </section>
  );
}