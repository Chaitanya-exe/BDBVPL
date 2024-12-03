import Conatiner from "@/components/Conatiner";
import QueryForm from "@/components/QueryForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";

const ContactUs = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero sectioin */}
      <Image
        src={"/images/herobg2.png"}
        width={720}
        height={400}
        alt="img"
        className="-z-30 absolute w-full -top-4 h-[380px] md:min-h-[490px]"
      />
      <div className="h-28 bg-[#FAFAFA] absolute -left-2 -right-5 z-10 top-[290px] md:top-[415px] -rotate-[4deg]" />
      <div className="flex flex-col pt-32 md:pt-36 justify-center items-center gap-4 md:gap-8">
        <h1 className="h1Text md:h1TextLg text-solarYellow">Contact Us</h1>
        <div className="flex divide-x-4 divide-solarYellow *:px-3 md:h2TextLg h2Text">
          <Link href={"/"} className="text-white">
            Home
          </Link>
          <button className="text-solarYellow">Contact</button>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="mt-32 md:mt-44 mb-20 mx-8 md:mx-20 lg:mx-32 z-20 *:py-6 relative">
        <FiPhoneCall className="absolute -right-5 md:right-36 -rotate-12 size-32 md:size-48 text-deepTeal/20 -top-10 md:-top-12" />
        <Conatiner
          title={"Contact Us"}
          h1={"Let’s Power Your Future Together."}
          h2={
            "Have questions? Want to start your solar journey? We’re here to help."
          }
          textAllign={"text-center md:mx-40"}
        />

        <div className="flex flex-col text-white md:grid md:grid-cols-2  md:gap-6 gap-3 *:flex *:flex-col *:gap-2 *:items-center *:justify-center px-16 md:px-36 w-fit mx-auto *:md:w-[400px] text-center *:p-5 *:h-[220px]">
          <span className="bg-deepTeal">
            <Image
              src={"/icons/addresssvg.svg"}
              width={40}
              height={40}
              alt="add"
              className=""
            />
            <h1 className="h1Text mt-2">Address</h1>
            <p className="pText">Company Regd. Add</p>
            <span className="pText">
              F-12 Ground floorviswakarma colony,new delhi 110044(India)
            </span>
          </span>
          <span className="bg-green">
            <Image
              src={"/icons/Phone.svg"}
              width={40}
              height={40}
              alt="add"
              className=""
            />
            <h1 className="h1Text mt-2">Phone Number</h1>
            <p className="pText">9312644140</p>
          </span>
          <span className="bg-deepTeal md:bg-green">
            <Image
              src={"/icons/emailsvg.svg"}
              width={40}
              height={40}
              alt="add"
              className=""
            />
            <h1 className="h1Text mt-2">Email</h1>
            <p className="pText">contactbdbvpl@gmail.com</p>
          </span>
          <span className="bg-green md:bg-deepTeal">
            <Image
              src={"/icons/timingsvg.svg"}
              width={50}
              height={50}
              alt="add"
              className=""
            />
            <h1 className="h1Text">Timings</h1>
            <p className="pText">Monday to Friday: 9 AM - 6 PM.</p>
          </span>
        </div>
      </div>

    {/* Query Form Section */}
      <QueryForm />
    </div>
  );
};

export default ContactUs;
