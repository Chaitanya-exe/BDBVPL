import Image from "next/image";
import React from "react";
import Button from "./Button";
import { FaPlay } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="capitalize">
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
        <Button text={"Let's Talk"} />
        <button className="bg-deepTeal text-white p-2.5 rounded">
          <Image src={"/icons/menu.svg"} width={24} height={24} alt="menu" />
        </button>
      </div>

    </div>
  );
};

export default Header;
