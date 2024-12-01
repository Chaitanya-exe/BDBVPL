import Image from "next/image";
import React from "react";
import Button from "./Button";
import { FaPlay } from "react-icons/fa6";
import Link from "next/link";

const Header = () => {
  return (
    <div className="capitalize relative">
      <div className="absolute -top-2 md:-top-16 sm:-top-10 lg:-top-40 -left-6 right-0 -z-10">
        <Image
          src={"/images/toprect.png"}
          width={900}
          height={150}
          alt="rect"
          className="w-full"
        />
      </div>
      <div className="flex py-1.5 px-2 lg:mx-20 items-center justify-between gap-1.5 md:gap-2.5">
        <div className="flex items-center flex-">
          <Image
            src={"/images/logo.jpg"}
            width={40}
            height={40}
            alt="logo"
            className=""
          />
          <div className="-space-y-1">
            <h1 className="logoText uppercase text-green">
              BDV<span className="text-text">VPL</span>
            </h1>
            <h5 className="text-[12px] font-bold text-text/80 font-roboto tracking-wide capitalize">
              solar Solutions
            </h5>
          </div>
        </div>
        <div className=" *:capitalize hidden md:flex items-center md:gap-4 lg:gap-9">
          <span className="hover:text-green lg:text-[18px]  pTex">Home</span>
          <span className="hover:text-green lg:text-[18px] hover:font-semibol pTex">About us</span>
          <span className="hover:text-green lg:text-[18px] hover:font-semibol pTex">Pricing</span>
          <span className="hover:text-green lg:text-[18px] hover:font-semibol pTex">Services</span>
          <span className="hover:text-green lg:text-[18px] hover:font-semibol pTex">Projects</span>
          <span className="hover:text-green lg:text-[18px] hover:font-semibol pTex">Contact Us</span>
        </div>
        <div className="flex items-center gap-1.5 md:gap-3">
          <Link href={"/contactus"}>
          <Button text={"Let's Talk"} />
        </Link>
        <button className="bg-deepTeal text-white p-2.5 lg:p-3 rounded">
          <Image src={"/icons/menu.svg"} width={24} height={24} alt="menu" />
        </button>
        </div>
      </div>
    </div>
  );
};

export default Header;