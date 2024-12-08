"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContactUs from "../contactus/page";
import Conatiner from "@/components/Conatiner";
import Footer from "@/components/Footer";
import QueryForm from "@/components/QueryForm";
import { FaFacebook } from "react-icons/fa6";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";


const page = () => {
  return (
    <div className="min-h-screen w-screen relative overflow-hidden">
      {/* <Image
        src={"/images/herobg2.png"}
        width={720}
        height={400}
        alt="img"
        className="-z-30 absolute -top-7 h-[230px] md:min-h-[490px]"
      />
      <div className="w-[420px] h-14 bg-[#FAFAFA] absolute -left-2 z-20 top-44 -rotate-[4deg] md:top-[415px]" />
      <div className="flex flex-col pt-14 justify-center items-center gap-2">
        <h1 className="h1Text text-solarYellow">About us</h1>
        <div className="flex divide-x-4 divide-solarYellow *:px-3 h2Text">
          <Link href={"/"} className="text-white">
            Home
          </Link>
          <button className="text-solarYellow">About</button>
        </div>
      </div> */}

      {/* Hero Section */}
      <Image
        src={"/images/herobg2.png"}
        width={720}
        height={400}
        alt="img"
        className="-z-30 absolute w-full -top-4 h-[380px] md:min-h-[490px]"
      />
      <div className="h-28 bg-[#FAFAFA] absolute -left-2 -right-5 z-10 top-[290px] md:top-[415px] -rotate-[4deg]" />
      <div className="flex flex-col pt-32 md:pt-36 justify-center items-center gap-4 md:gap-8">
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
              Your <span className="text-green">Trusted</span> Partner in{" "}
              <span className="text-solarYellow">Solar Energy</span>
            </span>
          }
          h2={
            "Learn about our journey and how we bring solar solutions to life."
          }
          textAllign={"text-center md:max-w-[700px] mx-auto"}
        />
        <div
          style={{ backgroundImage: "url('/images/bgspot.png')" }}
          className="flex flex-col items-center mx-auto md:-space-y-32 -space-y-12 md:my-2 "
        >
          <div className="flex  gap-1 items-start md:gap-2 relative">
            <div className="absolute -top-5 -left-6 w-[320px] rounded-lg hidden md:block pText p-2 md:p-5 border-8 border-white bg-green text-white">
              <p>
                Founded in [Year]. [Milestone 1]: Installed [X] solar panels in
                the first year. [Milestone 2]: Partnered with [Organization
                Name].
              </p>
            </div>
            <Image
              src={"/images/apic1.png"}
              width={175}
              height={220}
              alt="img"
              className="h-[220px] lg:min-w-[550px] md:h-[400px]"
            />
            <div className="flex flex-col md:gap-2 gap-1">
              <Image
                src={"/images/apic2.png"}
                width={175}
                height={110}
                alt="img"
                className="lg:min-w-[400px] md:h-[200px] h-[110px]"
              />
              <Image
                src={"/images/apic3.png"}
                width={175}
                height={110}
                alt="img"
                className="lg:min-w-[400px] md:h-[200px] h-[110px]"
              />
            </div>
          </div>
          <div className="md:min-w-[630px] z-10  w-[300px] pText p-2 md:p-3 border-4 border-white bg-deepTeal text-white">
            <p>
              Focus on who you are, what you do, and why you do it in 2-3
              sentences. Example:"At [Your Company Name], we’re passionate about
              harnessing the power of the sun to create sustainable energy
              solutions. With years of expertise in solar technology, we’re
              dedicated to helping homes and businesses reduce their carbon
              footprint and save on energy costs. We strive to make renewable
              energy accessible, affordable, and impactful for everyone,
              contributing to a brighter and greener tomorrow
            </p>
          </div>
        </div>
      </div>

      {/* Mission And Values Section */}
      {/* Content */}
      <section
        style={{ backgroundImage: "url('/images/abgimg.png')" }}
        className="relative py-10 sm:py-14 lg:py-20 min-h-[600px] my-[50px] md:my-[100px]  bg-cover bg-center bg-no-repeat  z-10  mx-auto text-center px-4 sm:px-6 lg:px-8 text-white"
      >
        {/* Overlay */}
        <div className="bg-black/50 hidden md:block absolute inset-0"></div>
        {/* image blob */}
        <Image
          src={"/images/visionBlob.png"}
          width={340}
          height={300}
          alt="img"
          className="absolute top-17 hidden md:block right-3 "
        />

        <Conatiner
          title={"Our Mission and Values"}
          h1={<span>Driven By Purpose, Guided By Principles.</span>}
          h2={
            "At The Heart Of Our Work Lies A Commitment To Creating A Sustainable Future Powered By Innovation, Integrity, And A Customer-First Approach."
          }
          textAllign={"text-center"}
        />

        {/* <div className="mb-12">
          <h3 className="text-yellow-400 text-sm sm:text-base lg:text-lg uppercase tracking-widest mb-2">
            Our Mission & Values
          </h3>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
            Driven By Purpose, Guided By Principles.
          </h1>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-200">
            At The Heart Of Our Work Lies A Commitment To Creating A Sustainable
            Future Powered By Innovation, Integrity, And A Customer-First
            Approach.
          </p>
        </div> */}
        {/* Values Section */}
        <div className="flex flex-col md:absolute md:mt-28 md:left-28 z-50  items-center justify-center md:flex-row  gap-4 md:gap-8 mx-auto py-10 my-[60px] *:h-[260px] *:w-[300px] bg-cyan-100 sm:bg-transparent">
          {/* Card 1 */}
          <div className="group lg:motion-preset-oscillate motion-duration-2000   hover:bg-green hover:text-white bg-[#FAFAFA] text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ">
            <div className="flex justify-center mb-4">
              <Image
                src={"/icons/sustainability-icon.svg"}
                width={80}
                height={80}
                alt="Sustainability"
                className="group-hover:hidden"
              />
              <Image
                src={"/icons/sustainabilityWhite-icon.svg"}
                width={80}
                height={80}
                alt="Sustainability"
                className="group-hover:block hidden"
              />
            </div>
            <h3 className="text-base sm:text-2xl font-bold mb-2 h1Text mt-2">
              Sustainability
            </h3>
            <p className=" group-hover:text-white pText">
              Protecting Our Planet Through Renewable Energy Solutions.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group lg:motion-preset-oscillate motion-duration-2000  hover:bg-teal-500 hover:text-white bg-[#FAFAFA] text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ">
            <div className="flex justify-center mb-4">
              <Image
                src={"/icons/innovation-icon.svg"}
                width={80}
                height={80}
                alt="Sustainability"
                className="group-hover:hidden"
              />
              <Image
                src={"/icons/innovationWhite-icon.svg"}
                width={80}
                height={80}
                alt="Sustainability"
                className="group-hover:block hidden"
              />
            </div>
            <h3 className="text-base sm:text-2xl font-bold mb-2 h1Text mt-2">
              Innovation
            </h3>
            <p className="text-sm sm:text-base text-gray-600 group-hover:text-white pText">
              Leveraging Cutting-Edge Technology For Efficient Solar Systems.
            </p>
          </div>

          {/* Card 3 */}
          <div className=" group lg:motion-preset-oscillate motion-duration-2000 hover:bg-green hover:text-white bg-[#FAFAFA] text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ">
            <div className="flex justify-center mb-4">
              <Image
                src={"/icons/customer-centric-icon.svg"}
                width={85}
                height={85}
                alt="Sustainability"
                className="group-hover:hidden"
              />
              <Image
                src={"/icons/customer-centricWhite-icon.svg"}
                width={80}
                height={80}
                alt="Sustainability"
                className="group-hover:block hidden"
              />
            </div>
            <h3 className="text-base sm:text-2xl font-bold mb-2 h1Text mt-2">
              Customer-Centric Approach
            </h3>
            <p className="text-sm sm:text-base text-gray-600 group-hover:text-white pText">
              Focusing On Your Needs Every Step Of The Way.
            </p>
          </div>

          {/* Card 4 */}
          <div className="group lg:motion-preset-oscillate motion-duration-2000  hover:bg-teal-500 hover:text-white bg-[#FAFAFA] text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ">
            <div className="flex justify-center mb-4">
              <Image
                src={"/icons/integrity-icon.svg"}
                width={80}
                height={80}
                alt="Sustainability"
                className="group-hover:hidden"
              />
              <Image
                src={"/icons/integrityWhite-icon.svg"}
                width={80}
                height={80}
                alt="Sustainability"
                className="group-hover:block hidden"
              />
            </div>
            <h3 className="text-base sm:text-2xl font-bold mb-2 h1Text mt-2">
              Integrity
            </h3>
            <p className="text-sm sm:text-base text-gray-600 group-hover:text-white pText">
              Transparent Practices, Delivering What We Promise.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <div className="my-[50px] md:my-48 px-6 md:px-[50px] lg:px-[150px]">
        <Conatiner
          title={"Why Choose Us"}
          h1={
            <span>
              Why We're The Best Choice For Expert Solar Panel Installation
            </span>
          }
          h2={"Discover How We Stand Out In The World Of Renewable Energy"}
          textAllign={"text-center "}
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-10 mx-[50px] lg:px-[50px] min-h-[200px]">
          {/* Card 1 */}
          <div className="border-green border-2 bg-[#FAFAFA] text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[100px] min-h-[150px]">
            <div className="flex justify-center mb-4">
              <Image
                src={"/icons/Group.png"}
                width={100}
                height={100}
                alt="Integrity"
                className="w-[100px] h-[100px] "
              />
            </div>
            <h3 className="text-base sm:text-xl font-bold mb-2">
              100% Customizable Solar Plans
            </h3>
            <p className="text-sm sm:text-base text-gray-600 ">
              Tailored Solutions Designed To Meet Your Energy Needs, Ensuring
              Maximum Efficiency
            </p>
          </div>

          {/* Card 2 */}
          <div className="border-green  border-2 bg-[#FAFAFA] text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <Image
                src={"/icons/Group (1).png"}
                width={100}
                height={100}
                alt="Integrity"
                className="w-[100px] h-[100px] "
              />
            </div>
            <h3 className="text-base sm:text-xl font-bold mb-2">
              Certified Solar Experts
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Our Team Comprises Experienced And Accredited Professionals
              Dedicated To Excellence.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border-green border-2 bg-[#FAFAFA] text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <Image
                src={"/icons/Group (2).png"}
                width={100}
                height={100}
                alt="Integrity"
                className="w-[100px] h-[100px] "
              />
            </div>
            <h3 className="text-base sm:text-xl font-bold mb-2">
              24/7 Customer Support
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              We're Here To Assist You Anytime, Ensuring A smooth And
              Hassle-Free Experience.
            </p>
          </div>
        </div>
      </div>

      {/* leaders section */}
      <section className="md:-mt-20 flex flex-col items-center bg-skyBlue py-8 md:py-20 px-6 md:px-[50px] lg:px-[150px]">
        <Conatiner
          title={"Leaders"}
          h1={"The People Powering Renewable Energy"}
          textAllign={"text-center md:px-36"}
        />
        <div className="flex flex-col md:flex-row items-center justify-center gap-8  md:gap-28 my-16">
          <div className="group flex flex-col justify-center items-center">
            <div className="group-hover:py-4 group-hover:bg-deepTeal items-center flex border rounded-full  border-deepTeal p-1">
              <Image
                src={"/images/persona.png"}
                width={215}
                height={215}
                alt="user"
                className="rounded-full group-hover:w-[185px] group-hover:h-[198px]"
              />
              <div className="space-y-7 text-white pr-1 *:size-6 hidden group-hover:block">
                <FaFacebook className="-ml-1" />
                <FaFacebook className="ml-3" />
                <FaFacebook className="-ml-1" />
              </div>
            </div>
            <div className="text-center mt-2">
              <h5 className="font-semibold">John Smith</h5>
              <h6 className="font-thin">Chief Engineer</h6>
            </div>
          </div>
          <div className="group flex flex-col justify-center items-center">
            <div className="group-hover:py-4 group-hover:bg-deepTeal items-center flex border rounded-full  border-deepTeal p-1">
              <Image
                src={"/images/persona.png"}
                width={215}
                height={215}
                alt="user"
                className="rounded-full group-hover:w-[185px] group-hover:h-[198px]"
              />
              <div className="space-y-7 text-white pr-1 *:size-6 hidden group-hover:block">
                <FaFacebook className="-ml-1" />
                <FaFacebook className="ml-3" />
                <FaFacebook className="-ml-1" />
              </div>
            </div>
            <div className="text-center mt-2">
              <h5 className="font-semibold">John Smith</h5>
              <h6 className="font-thin">Chief Engineer</h6>
            </div>
          </div>
          <div className="group flex flex-col justify-center items-center">
            <div className="group-hover:py-4 group-hover:bg-deepTeal items-center flex border rounded-full border-deepTeal p-1">
              <Image
                src={"/images/persona.png"}
                width={215}
                height={215}
                alt="user"
                className="rounded-full group-hover:w-[185px] group-hover:h-[198px]"
              />
              <div className="space-y-7 text-white pr-1 *:size-6 hidden group-hover:block">
                <FaFacebook className="-ml-1" />
                <FaFacebook className="ml-3" />
                <FaFacebook className="-ml-1" />
              </div>
            </div>
            <div className="text-center mt-2">
              <h5 className="font-semibold">John Smith</h5>
              <h6 className="font-thin">Chief Engineer</h6>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="mt-8 relative flex flex-col gap-6 md:items-end md:flex-row items-center px-8 md:px-28  py-8 md:py-16 ">
        <Image
          src={"/icons/sun-svg.svg"}
          width={480}
          height={400}
          alt="panel"
          className="md:block hidden absolute -top-20 right-20"
        />

        <div className="md:max-w-[700px] space-y-6">
          <Conatiner
            title={"Our Statistics"}
            h1={"Our Impact in Numbers"}
            h2={"Pioneering the future of solar energy with proven results"}
            textAllign={"text-center md:text-start"}
          />
          <Image
            src={"/icons/solarPanel-svg.svg"}
            width={480}
            height={400}
            alt="panel"
            className="md:block hidden"
          />
        </div>
        <div className="flex flex-col md:mt-28 mt-6 gap-4">
          <div>
            <h4 className="md:h2Text  md:mb-3 mb-1 text-lg">
              Projects Completed
            </h4>
            <div className="flex gap-4 items-center text-lg font-semibold">
              <AnimatedDiv
                width="50%"
                duration={1}
                delay={0.2}
                // bgColor="bg-red-500"
              />
              <span>1000+</span>
            </div>
          </div>
          <div>
            <h4 className="md:h2Text  md:mb-3 mb-1 text-lg">Happy Customers</h4>
            <div className="flex gap-4 items-center text-lg font-semibold">
              <AnimatedDiv
                width="75%"
                duration={2}
                delay={0.5}
                bgColor="bg-blue-500"
              />

              <span>1000+</span>
            </div>
          </div>
          <div>
            <h4 className="md:h2Text  md:mb-3 mb-1 text-lg">
              Renewable Energy Generated
            </h4>
            <div className="flex gap-4 items-center text-lg font-semibold">
              <AnimatedDiv
                width="80%"
                duration={1.5}
                delay={0.3}
                bgColor="bg-green"
              />

              <span>1000+</span>
            </div>
          </div>
          <div>
            <h4 className="md:h2Text  md:mb-3 mb-1 text-lg">Global Reach</h4>
            <div className="flex gap-4 items-center text-lg font-semibold">
              <AnimatedDiv
                width="50%"
                duration={1}
                delay={0.2}
                // bgColor="bg-red-500"
              />
              <span>1000+</span>
            </div>
          </div>
          <div>
            <h4 className="md:h2Text  md:mb-3 mb-1 text-lg">Carbon Footprint Reduced</h4>
            <div className="flex gap-4 items-center text-lg font-semibold">
              <AnimatedDiv
                width="50%"
                duration={1}
                delay={0.2}
                // bgColor="bg-red-500"
              />
              <span>1000+</span>
            </div>
          </div>
        </div>
      </section>
      <QueryForm />
    </div>
  );
};

export default page;

const AnimatedDiv = ({ width, duration = 1.5, delay = 0.3, bgColor = "bg-deepTeal" }) => {
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



