"use client";

import React from "react";
import Conatiner from "../Conatiner";
import Image from "next/image";
import { services } from "@/constants/dummy";
import Button from "../Button";
import { FaArrowRightLong } from "react-icons/fa6";
import {motion} from "framer-motion"

const ServicesSec = () => {
  return (
    <div id="Services" className="relative bg-gradient-to-br from-green  to-deepTeal py-12 md:py-20">
      <Conatiner 
        textAllign={"text-center text-white md:px-24 mx-auto"}
        title={"Our services"}
        h1={
          "Affordable & Reliable Solar Energy Solutions for Homes, Businesses, and Farms"
        }
        h2={
          "From expert consultation to installation and maintenance, we deliver tailored solar solutions that reduce costs, lower carbon footprints, and ensure long-term energy efficiency."
        }
      />
      <Image
        src={"/images/homeimg.png"}
        width={172}
        height={110}
        alt="illus"
        className="absolute -right-0 md:hidden -top-16"
      />
      <div className="mt-8 *:mx-auto md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-10 lg:gap-8 lg:px-16">
        {services.slice(0, 3).map((service) => (
          <Card service={service} key={service.id} />
        ))}
       

      </div>
        <Image
          src={"/images/homeimg.png"}
          width={650}
          height={450}
          alt="illus"
          className="motion-scale-in-[0.5] absolute -right-8 -bottom-14  md:h-[370px] w-[570px]  motion-translate-x-in-[-25%] motion-translate-y-in-[25%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-duration-[0.63s]/rotate md:block hidden"
        />
    </div>
  );
};

export default ServicesSec;

const Card = ({ service,key }) => {
  return (
    <div
      key={key}
      className="group relative overflow-hidden bg-white flex flex-col items-start mt-2 pb-1 w-[345px] lg:w-[380px] lg:h-[350px] hover:shadow-md hover:shadow-text/70 "
    >
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 0.2 } }}
          className="absolute hidden group-hover:flex -top-20 -left-5 -right-5 h-[190px] bg-gradient-to-b from-green to-deepTeal px-14 text-center items-center justify-center pt-12 h2Text rounded-b-full text-solarYellow"
        >
          {" "}
          {service.name}
        </motion.div>
      <Image
        src={service.src}
        width={345}
        height={215}
        alt="s1"
        className="w-full"
      />
      <p className="pText flex-1 lg:pTextLg text-wrap px-3 mt-2">
        {service.desc}
      </p>

      <Button
        variant={"sec"}
        text={"Learn More"}
        icon={
          <FaArrowRightLong className="text-solarYellow inline-flex ml-2 size-5" />
        }
      />
    </div>
  );
};
