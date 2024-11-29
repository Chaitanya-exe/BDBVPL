import React from "react";
import Conatiner from "../Conatiner";
import Image from "next/image";
import { services } from "@/constants/dummy";
import Button from "../Button";
import { FaArrowRightLong } from "react-icons/fa6";

const ServicesSec = () => {
  return (
    <div className="relative bg-deepTeal py-12 ">
      <Conatiner
        textAllign={"text-center text-white"}
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
        className="absolute -right-5 -top-16"
      />
      <div className="mt-5">
        {services.map((service) => (
          <Card service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesSec;

const Card = ({ service }) => {
  return (
    <div className="bg-white mt-2 pb-1">
      <Image src={service.src} width={345} height={215} alt="s1" className="w-full" />
      <p className="pText px-3 mt-2">{service.desc}</p>
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
