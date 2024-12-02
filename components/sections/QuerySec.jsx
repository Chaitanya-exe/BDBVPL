"use client";

import React from "react";
import Image from "next/image";
import QueryForm from "../QueryForm";

const QuerySec = () => {
  return (
    <div className="relative flex justify-end lg:px-24  my-4">
      <Image
        src={"/icons/queryillus.svg"}
        width={120}
        height={112}
        alt=""
        className="absolute md:w-[300px] -right-3 md:left-28 md:top-4 -top-14 z-10"
      />
      <Image
        src={"/images/queryimg.png"}
        width={210}
        height={265}
        alt=""
        className="absolute -left-8 md:left-0 lg:-bottom-6 md:w-[580px]  -bottom-6 -z-10"
      />

      
      <QueryForm />


    </div>
  );
};

export default QuerySec;
