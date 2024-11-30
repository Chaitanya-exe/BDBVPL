import React from "react";
import Conatiner from "../Conatiner";
import Image from "next/image";
import { services } from "@/constants/dummy";
import Button from "../Button";
import { FaArrowRightLong } from "react-icons/fa6";

const ServicesSec = () => {
  return (
    <div className="relative bg-deepTeal py-12 md:py-20">
      <Conatiner
        textAllign={"text-center text-white md:px-24 mx-auto"}
        title={"Our services"}
        h1={
          "Affordable, Reliable, and Sustainable Solar Solutions Tailored for You"
        }
        h2={
          "From consultation to installation and maintenance, we provide comprehensive solar energy solutions designed to meet your unique needs."
        }
      />
      <Image
        src={"/images/homeimg.png"}
        width={172}
        height={110}
        alt="illus"
        className="absolute -right-5 md:hidden -top-16"
      />
      <div className="mt-5 md:grid md:grid-cols-3 lg:gap-4 lg:px-12">
        {services.slice(0, 3).map((service) => (
          <Card service={service} />
        ))}
        <Image
          src={"/images/homeimg.png"}
          width={500}
          height={250}
          alt="illus"
          className="md:block hidden"
        />
        {services.slice(3).map((service) => (
          <Card service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesSec;

const Card = ({ service }) => {
  return (
    <div className="bg-white flex flex-col items-start mt-2 pb-1 w-[345px] lg:w-[380px]">
      <Image src={service.src} width={345} height={215} alt="s1" className="w-full" />
      <p className="pText flex-1 lg:pTextLg text-wrap px-3 mt-2">{service.desc}</p>

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
