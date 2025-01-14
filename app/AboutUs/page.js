import Image from "next/image";
import Button from "@/components/Button";

export default function AboutUs() {
  return (
    <div className="my- py-2 relative overflow-hidden">
      <div className="absolute -top-[60px] -left-6 right-0 -z-10">
        <Image
          src={"/images/toprect.png"}
          width={900}
          height={150}
          alt="rect"
          className="w-full"
        />
      </div>
      <div className="absolute -top-6 -z-20">
        <Image
          src={"/images/herobg.png"}
          width={550}
          height={300}
          alt="rect"
          className=""
        />
      </div>
      <div className="text-white  my-20 mx-8 pl-2">
        <h1 className="flex h1Text justify-center  text-solarYellow">
          About Us
        </h1>

        <h2 className="h2Text mt-1">
          Switch to solar panels and start saving the planet and your wallet
        </h2>
        <div className="flex items-center gap-3 my-4">
          <Button text={"let's talk"} />
        </div>
      </div>
    </div>
  );
}
