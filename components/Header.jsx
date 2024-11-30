import Image from "next/image";
import React from "react";
import Button from "./Button";
import { FaPlay } from "react-icons/fa6";
import Link from "next/link";

const Header = () => {
  return (
    <div className="capitalize relative">
      <div className="absolute -top-2 -left-6 right-0 -z-10">
        <Image
          src={"/images/toprect.png"}
          width={900}
          height={150}
          alt="rect"
          className="w-full"
        />
      </div>
      <div className="flex py-1.5 px-2 items-center gap-1.5">
        <div className="flex items-center flex-1">
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
        <Link href={"/contactus"}>
          <Button text={"Let's Talk"} />
        </Link>
        <button className="bg-deepTeal text-white p-2.5 rounded">
          <Image src={"/icons/menu.svg"} width={24} height={24} alt="menu" />
        </button>
      </div>
    </div>
  );
};

export default Header;
