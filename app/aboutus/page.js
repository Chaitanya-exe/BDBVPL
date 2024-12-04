import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContactUs from "../contactus/page";
import Conatiner from "@/components/Conatiner";
import Footer from "@/components/Footer";
import QueryForm from "@/components/QueryForm";
import Conatiner from '@/components/Conatiner';

const page = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* <Image
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
          <button className="text-solarYellow">Contact</button>
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

      <div className="mt-32 md:mt-44 mb-20 mx-8 md:mx-20 lg:mx-32 z-20 *:py-6 relative">
        <Image
          src={"/images/bgspot.png"}
          width={533}
          height={430}
          alt="img"
          className="-z-30 absolute w-full bottom-10 right-8"
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
              sentences. Example: At [Your Company Name], we're passionate about
              harnessing the power of the sun to create sustainable energy
              solutions. With years of expertise in solar technology, we're
              dedicated to helping homes and businesses reduce their carbon
              footprint and save on energy costs. We strive to make renewable
              energy accessible, affordable, and impactful for everyone,
              contributing to a brighter and greener tomorrow
            </p>
          </div>
        </div>
      </div>

      {/* Mission And Values Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-10 sm:py-14 lg:py-20 min-h-[600px] my-[50px] md:my-[100px]"
        style={{ backgroundImage: "url('/images/abgimg.png')" }}
      >
        {/* Overlay */}
        <div className="bg-black/50 absolute inset-0"></div>
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
          <Conatiner
            title={"Our Mission and Values"}
            h1={<span>Driven By Purpose, Guided By Principles.</span>}
            h2={
              "At The Heart Of Our Work Lies A Commitment To Creating A Sustainable Future Powered By Innovation, Integrity, And A Customer-First Approach."
            }
            textAllign={"text-center"}
          />

          {/* Section Heading */}
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
          <div className="lg:absolute grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10 my-[60px] *:h-[240px] px-[60px] bg-cyan-100 sm:bg-transparent min-w-full">
            {/* Card 1 */}
            <div className="group lg:motion-preset-oscillate motion-duration-2000   hover:bg-green hover:text-white bg-[#FAFAFA] text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ">
              <div className="flex justify-center mb-4">
                <Image
                  src={"/icons/sustainability-icon.svg"}
                  width={80}
                  height={80}
                  alt="Sustainability"
                  className=""
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 h1Text mt-2">
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
                  alt="Innovation"
                  className=""
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 h1Text mt-2">
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
                  width={80}
                  height={80}
                  alt="Customer-Centric Approach"
                  className=""
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 h1Text mt-2">
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
                  alt="Integrity"
                  className="w-[70px] h-[70px] "
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 h1Text mt-2">
                Integrity
              </h3>
              <p className="text-sm sm:text-base text-gray-600 group-hover:text-white pText">
                Transparent Practices, Delivering What We Promise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <div className="my-[50px] sm:my-[100px] px-6 md:px-[50px] lg:px-[150px]">
        <Conatiner
          title={"Why Choose Us"}
          h1={
            <span>
              Why We're The Best Choice For Expert Solar Panel Installation
            </span>
          }
          h2={"Discover How We Stand Out In The World Of Renewable Energy"}
          textAllign={"text-center"}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-10 mx-[50px] lg:px-[50px] min-h-[200px]">
        {/* Card 1 */}
        <div className="border-green rounded-xl border-2 bg-[#FAFAFA] text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[100px] min-h-[150px]">
          <div className="flex justify-center mb-4">
            <Image
              src={"/icons/Group.png"}
              width={100}
              height={100}
              alt="Integrity"
              className="w-[100px] h-[100px] "
            />
          </div>
          <h3 className="text-base sm:text-lg font-bold mb-2">
            100% Customizable Solar Plans
          </h3>
          <p className="text-sm sm:text-base text-gray-600 ">
            Tailored Solutions Designed To Meet Your Energy Needs, Ensuring
            Maximum Efficiency
          </p>
        </div>

        {/* Card 2 */}
        <div className="border-green rounded-xl border-2 bg-[#FAFAFA] text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-center mb-4">
            <Image
              src={"/icons/Group (1).png"}
              width={100}
              height={100}
              alt="Integrity"
              className="w-[100px] h-[100px] "
            />
          </div>
          <h3 className="text-base sm:text-lg font-bold mb-2">
            Certified Solar Experts
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            Our Team Comprises Experienced And Accredited Professionals
            Dedicated To Excellence.
          </p>
        </div>

        {/* Card 3 */}
        <div className="border-green rounded-xl border-2 bg-[#FAFAFA] text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-center mb-4">
            <Image
              src={"/icons/Group (2).png"}
              width={100}
              height={100}
              alt="Integrity"
              className="w-[100px] h-[100px] "
            />
          </div>
          <h3 className="text-base sm:text-lg font-bold mb-2">
            24/7 Customer Support
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            We're Here To Assist You Anytime, Ensuring A smooth And Hassle-Free
            Experience.
          </p>
        </div>
      </div>
      <QueryForm/>
      <Footer />
    </div>
  );
}

export default page
