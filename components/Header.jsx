"use client";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import { FaPlay } from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  // State to manage the menu icon and visibility of the navbar list
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();

  const Menu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-[#FAFAFA] z-50 ">
      <section className="capitalize relative">
        <div className="md:flex py-1.5 px-2 lg:mx-20 md:items-center md:justify-between gap-1.5 md:gap-2.5">
          <div className="flex justify-between items-center ">
            <div className="flex flex-1">
              <Image
                src={"/images/logo.jpg"}
                width={50}
                height={45}
                alt="logo"
                className=""
              />
              <div className="">
                <h1 className="logoText uppercase text-green">
                  BDB<span className="text-text">VPL</span>
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
          <div className="flex items-center gap-12">
            <ul
              className={`*:capitalize md:flex md:items-center md:gap-4 lg:gap-9 z-[1] bg-[#FAFAFA] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-6 py-0 md:pl-0 pl-7 transition-all ease-in duration-500 md:opacity-100 ${
                isMenuOpen
                  ? "opacity-100 shadow top-[55px]"
                  : "opacity-0 top-[-400px]"
              }`}
            >
              <li className="my-6 md:my-0 hover:text-green duration-300 lg:text-[18px]  pTex">
                <Link href={"/"}>
                  Home
                </Link>
              </li>
              <li className="my-6 md:my-0 hover:text-green duration-300 lg:text-[18px] hover:font-semibol pTex ">
                <Link href={"aboutus"}>About us</Link>
              </li>
              {pathName === "/" && (
                <>
                  <li className="my-6 md:my-0 hover:text-green duration-300 lg:text-[18px] hover:font-semibol pTex">
                    <Link href={"#Services"}>Services</Link>
                  </li>
                  <li className="my-6 md:my-0 hover:text-green duration-300 lg:text-[18px] hover:font-semibol pTex">
                    <Link href={"#Projects"}>Gallery</Link>
                  </li>
                  <li className="my-6 md:my-0 hover:text-green duration-300 lg:text-[18px] hover:font-semibol pTex">
                    <Link href={"#HomeQuery"}>Query</Link>
                  </li>
                </>
              )}
              {pathName === "/aboutus" && (
                <>
                  <li className="my-6 md:my-0 hover:text-green duration-300 lg:text-[18px] hover:font-semibol pTex">
                    <Link href={"#Mission"}>Our Mission</Link>
                  </li>
                  <li className="my-6 md:my-0 hover:text-green duration-300 lg:text-[18px] hover:font-semibol pTex">
                    <Link href={"#WhyUs"}>Why Us</Link>
                  </li>
                  <li className="my-6 md:my-0 hover:text-green duration-300 lg:text-[18px] hover:font-semibol pTex">
                    <Link href={"#Query"}>Query</Link>
                  </li>
                </>
              )}
              {pathName === "/contactus" && (
                <>
                  <li className="my-6 md:my-0 hover:text-green duration-300 lg:text-[18px] hover:font-semibol pTex">
                    <Link href={"#Query"}>Query</Link>
                  </li>
                </>
              )}
            </ul>
            <div className="hidden md:flex items-center gap-1.5 md:gap-3">
              <Link href={"/contactus"}>
                <Button text={"Let's Talk"} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Header;
