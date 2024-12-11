import React from "react";
import Conatiner from "../Conatiner";
import Button from "../Button";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const AboutSec = () => {
  return (
    <div id="About" className="mt-20 px-6 lg:px-20 max-w-[920px]">
      <Conatiner
        title={"About us"}
        h2={
          <span>
            At <Link href={"/aboutus"}>BDB Ventures Pvt. Ltd.</Link>, our mission is to make{" "}
            <a
              target="_blank"
              href="https://en.wikipedia.org/wiki/Solar_energy"
            >
              renewable solar energy
            </a>{" "}
            the standard for homes and businesses. We transform energy
            consumption with innovative and affordable solar solutions
            tailored to your needs.
          </span>
        }
        h1={
          <span>
            Powering a <span className="text-green">Greener, </span>
            Brighter Tomorrow
          </span>
        }
        textAllign={"text-center md:text-start"}
      />
      <ul className="list-disc pText md:pTextLg space-y-2 mb-6 lg:mb-10 list-inside  mt-3 lg:mt-5">
        <li>
          Significantly reduce carbon footprints and contribute to a more
          sustainable and eco-friendly environment for future generations.
        </li>
        <li>
          Enable individuals and businesses to achieve energy independence by
          harnessing the limitless power of solar energy.
        </li>
        <li>
          Provide cutting-edge, customized solar solutions designed to meet the
          unique energy needs of our clients, ensuring optimal efficiency,
          savings, and long-term reliability.
        </li>
      </ul>
      <Link href={"/aboutus"}>
        <Button
          text={"More about us"}
          icon={
            <FaArrowRightLong className="text-white inline-flex ml-2 size-5" />
          }
        />
      </Link>
    </div>
  );
};

export default AboutSec;
