"use client";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import { FaPlay } from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  // State to manage the menu icon and visibility of the navbar list
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the image source
  // function Menu(e) {
  //   let list = document.querySelector("ul");
  //   e.name === "menu"
  //     ? ((e.name = "close"),
  //       list.classList.add("top-[80px]"),
  //       list.classList.add("opacity-100"))
  //     : ((e.name = "menu"),
  //       list.classList.remove("top-[80px]"),
  //       list.classList.remove("opacity-100"));
  // }
  // Function to toggle the menu state
  const Menu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="capitalize relative ">
      <div className="absolute lg:-top-8 -bottom-4  -left-6 -right-5 -z-10">
        <div className="bg-[#FAFAFA] relative h-44 -rotate-[4deg] min-w-[500px]">
          <div className="bg-[#FAFAFA] absolute lg:bottom-0 lg:left-24 bottom-1 rotate-[42deg] h-28 lg:w-56 w-36 rounded-xl -z-10" />
        </div>
      </div>

      <div className="md:flex py-1.5 px-2 lg:mx-20 md:items-center md:justify-between gap-1.5 md:gap-2.5">
        <div className="flex justify-between items-center ">
          <div className="flex">
            <Image
              src={"/images/logo.jpg"}
              width={40}
              height={40}
              alt="logo"
              className=""
            />
            <div className="">
              <h1 className="logoText uppercase text-green">
                BDV<span className="text-text">VPL</span>
              </h1>
              <h5 className="text-[12px] font-bold text-text/80 font-roboto tracking-wide capitalize">
                solar Solutions
              </h5>
            </div>
          </div>
          <div className="">
            <button
              onClick={Menu}
              className="bg-deepTeal text-white p-2.5 lg:p-3 rounded md:hidden"
            >
              <Image
                src={isMenuOpen ? "/icons/close.svg" : "/icons/menu.svg"}
                width={24}
                height={24}
                alt="menu"
                className="text-white"
              />
            </button>
          </div>
        </div>

        <ul
          className={`*:capitalize md:flex md:items-center md:gap-4 lg:gap-9 z-[1] bg-[#FAFAFA] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-6 py-0 md:pl-0 pl-7 transition-all ease-in duration-500 md:opacity-100 ${
            isMenuOpen ? "opacity-100 top-[55px]" : "opacity-0 top-[-400px]"
          }`}
        >
          <li className="my-6 md:my-0 hover:text-green duration-300 lg:text-[18px]  pTex">
            Home
          </li>
          <li className="my-6 md:my-0 hover:text-green duration-300 lg:text-[18px] hover:font-semibol pTex ">
          <Link href={"aboutus"}>About us</Link>
          </li>
          <li className="my-6 md:my-0 hover:text-green duration-300 lg:text-[18px] hover:font-semibol pTex">
            Pricing
          </li>
          <li className="my-6 md:my-0 hover:text-green duration-300 lg:text-[18px] hover:font-semibol pTex">
            <Link href={"#Services"}>Services</Link>  
          </li>
          <li className="my-6 md:my-0 hover:text-green duration-300 lg:text-[18px] hover:font-semibol pTex">
          <Link href={"#Projects"}>Projects</Link> 
          </li>
          <li className="my-6 md:my-0 hover:text-green duration-300 lg:text-[18px] hover:font-semibol pTex">
          <Link href={"/contactus"}>Contact Us</Link>
          </li>
        </ul>
        <div className="hidden md:flex items-center gap-1.5 md:gap-3">
          <Link href={"/contactus"}>
            <Button text={"Let's Talk"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
