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
      <div className="absolute -top-[60px] -left-6 right-0 -z-10">
        <Image
          src={"/images/toprect.png"}
          width={900}
          height={150}
          alt="rect"
          className="w-full"
        />
      </div>
      <div className="absolute -top-6 -z-20">
        <Image
          src={"/images/herobg.png"}
          width={550}
          height={300}
          alt="rect"
          className=""
        />
      </div>
      <div className="text-white my-20 mx-8 border-l-4 pl-2 border-solarYellow">
        <h1 className="h1Text">
          <span className="text-solarYellow">Power </span>
          Your Home,
          <span className="text-solarYellow"> Empower </span>
          the planet.
        </h1>
        <h2 className="h2Text mt-1">
          Switch to solar panels and start saving the planet and your wallet
        </h2>
        <div className="flex items-center gap-3 my-4">
          <Button text={"let's talk"} />
          <button className="text-solarYellow hover:animate-pulse border border-solarYellow rounded-full p-2.5">
            <FaPlay />
          </button>
        </div>
      </div>

      <div className="aboutImgContainer mt-36 py-12 mx-10 relative">
        <Image
          src={"/images/aboutsectionimg.png"}
          width={240}
          height={263}
          alt="img"
          className=""
        />
        <div className="absolute top-24 -left-20 w-[293px] h-[233px] bg-deepTeal/60 -z-10" />
      </div>
      <div className="absolute top-[643px] left-56">
        <Image src={"/images/Frame.png"} width={126} height={120} alt="oval" />
      </div>
      <div className=" *:my-20 *:px-6">
        <AboutSec />
        <ServicesSec />
        <WorkFlow />
        <Testimonials />
        <Projects />
        <QuerySec />
      </div>
    </section>
  );
}
