import React from "react";
import Conatiner from "../Conatiner";
import Button from "../Button";
import { FaArrowRightLong } from "react-icons/fa6";

const AboutSec = () => {
  return (
    <div className="">
      <Conatiner
        title={"About us"}
        h2={
          "We are committed to revolutionizing energy through innovative solar solutions that make sustainability accessible for everyone."
        }
        h1={
          <span>
            Our Mission - Powering a{" "}
            <span className="text-green">Greener Future</span>
          </span>
        }
      />
      <ul className="list-disc mb-4 list-inside  mt-3">
        <li>
          At BDV, we aim to reduce carbon footprints, empower energy
          independence, and create a brighter future through sustainable
          technology
        </li>
        <li>
          With over 2 years of experience, we’ve installed 100+ solar panels
          across various locations, saving tons of CO₂ emissions annually
        </li>
        <li>
          Our team of experts is dedicated to providing the best solar energy
          solutions tailored to your needs
        </li>
      </ul>
      <Button
        text={"More about us"}
        icon={
          <FaArrowRightLong className="text-white inline-flex ml-2 size-5" />
        }
      />
    </div>
  );
};

export default AboutSec;
