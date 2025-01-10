"use client"
import Image from "next/image";
import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathName = usePathname();
  const excludedPages = ['/admin'];
  const isExcluded = excludedPages.some((path)=> pathName.startsWith(path))
  if(isExcluded){
    return (<div></div>)
  }
  return (
    <div className="text-white *:max-w-[390px] md:flex-row md:justify-between flex-col flex gap-7  bg-deepTeal py-8 px-14 lg:p-24 relative overflow-hidden">
      <Image
        src={"/icons/footerillus.svg"}
        width={112}
        height={105}
        alt="illus"
        className="absolute -top-5 -right-2 md:w-[200px] -rotate-[135deg] md:top-56 md:rotate-0 "
      />
      <div className="">
        <h1 className="h1Text md:pb-2">About us</h1>
        <p className="pText md:pTextLg border-b border-white/30 py-2 text-white/80">
          Annual savings of ₹18,000 on electricity costs. Boosted company’s
          green credentials with a 35% reduction in carbon footprint
        </p>
        <p className="pt-3 text-white/80">
          Copyright © 2024 BDBVPL All rights reserved.
        </p>
        <p className="pt-3 text-white/80 opacity-50">
          Website developed by{" "}
          <Link href={"http://www.itsolutionconsultancy.com/"}>
            IT Solutions & Consultancy
          </Link>
          .
        </p>
        <p className="pt-3 text-white/80 opacity-50">
          Copyright © 2024{" "}
          <Link href={"http://www.itsolutionconsultancy.com/"}>
            IT Solutions & Consultancy
          </Link>{" "}
          All Rights Reserved
        </p>
      </div>
      <div>
        <h1 className="h1Text md:pb-2">Company links</h1>
        <ul className=" *:text-white/80 space-y-2 py-2 *:cursor-pointer">
          <Link href={"/"}>
            <li className="pText md:pTextLg hover:text-white">Home</li>
          </Link>
          <Link href={"/aboutus"}>
            <li className="pText md:pTextLg hover:text-white">About Us</li>
          </Link>
          <Link href={"/#Services"}>
            <li className="pText md:pTextLg hover:text-white">Services</li>
          </Link>
          <Link href={"/#Client"}>
            <li className="pText md:pTextLg hover:text-white">
              Client Companies
            </li>
          </Link>
          <Link href={"/#Broshure"}>
            <li className="pText md:pTextLg hover:text-white">Catalogue</li>
          </Link>
          <Link href={"/gallery"}>
            <li className="pText md:pTextLg hover:text-white">Gallery</li>
          </Link>
          <Link href={"/contactus"}>
            <li className="pText md:pTextLg hover:text-white">Contact us</li>
          </Link>
        </ul>
      </div>
      <div>
        <h1 className="h1Text md:pb-2">Contact informaiton</h1>
        <p className="pText md:pTextLg pt-2 text-white/80">
          Company Regd. Add -
        </p>
        <p className="pText md:pTextLg pt-2 text-white/80">
          F-12 Ground floorviswakarma colony,new delhi 110044(India){" "}
        </p>
        <p className=" pt-2 lowercase pText md:pTextLg text-white/80 flex items-center">
          <MdEmail className="inline-flex size-6 mr-1" />
          <span className="lowercase"> contactbdbvpl@gmail.com </span>
        </p>
        <p className="pText md:pTextLg pt-2 text-white/80 flex items-center">
          <FaPhone className="inline-flex size-5 mr-2" />
          <span>9312644140 </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
