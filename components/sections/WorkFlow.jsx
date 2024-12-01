import React from "react";
import Conatiner from "../Conatiner";
import { workFlowStep } from "@/constants/dummy";
import Image from "next/image";

const WorkFlow = () => {
  return (
    <div className="">
      <Conatiner
        title={"How we work"}
        h1 ={"Our Solar Panel Installation Work Flow."}
        h2={
          "From consultation to installation and maintenance, we provide comprehensive solar energy solutions designed to meet your unique needs."
        }
        textAllign={"text-center md:px-24 mx-auto"}
      />

      <div className="mt-9 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12">
        <div className="flex flex-col justify-center lg:gap-28 gap-10  ">
          {workFlowStep.slice(0, 2).map((step) => (
            <div key={step.id} className="group motion-scale-in-[0.79] motion-translate-x-in-[-59%] motion-translate-y-in-[-39%] motion-opacity-in-[0%] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-ease-spring-bouncier hover:shadow-lg hover:shadow-text/100 hover:bg-gradient-to-r hover:from-deepTeal hover:to-solarYellow hover:text-white rounded-xl p-3 flex items-start gap-3.5 md:gap-5">
              <span className="text-solarYellow border border-solarYellow rounded-xl px-[16px] py-3 text-3xl font-semibold">
                0{step.id}
              </span>
              <div className="flex flex-col md:gap-2.5">
                <h1 className="h1Text md:text-[28px]">{step.label}</h1>
                <p className="pText md:pTextLg text-text/85 group-hover:text-white">{step.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex my-4 items-center justify-center">
          <Image
            src={"/images/services.png"}
            width={285}
            height={400}
            alt="Workflow"
            className="h-full w-full md:hidden object-cover motion-preset-slide-left"
          />
          <Image
            src={"/images/servicesLg.png"}
            width={355}
            height={390}
            alt="Workflow"
            className="md:block -mt-24 hidden object-cover motion-scale-in-[0.79] motion-translate-x-in-[0%] motion-translate-y-in-[1%] motion-opacity-in-[0%] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-ease-spring-bounciest"
          />
        </div>

        <div className="flex flex-col lg:gap-28 justify-center gap-10">
          {workFlowStep.slice(2).map((step) => (
            <div key={step.id} className="group motion-scale-in-[0.79] motion-translate-x-in-[56%] motion-translate-y-in-[-39%] motion-opacity-in-[0%] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-ease-spring-bouncier hover:shadow-lg hover:shadow-text/100 hover:bg-gradient-to-r hover:from-deepTeal hover:to-solarYellow hover:text-white rounded-xl p-3 flex items-start gap-3.5 md:gap-5">
              <span className="text-solarYellow border border-solarYellow rounded-xl px-[16px] py-3 text-3xl font-semibold">
                0{step.id}
              </span>
              <div className="flex flex-col md:gap-2.5">
                <h1 className="h1Text md:text-[28px]">{step.label}</h1>
                <p className="pText md:pTextLg text-text/85 group-hover:text-white">{step.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-4">
        {workFlowStep.slice(0, 2).map((step) => (
          <div key={step.id} className="flex items-start gap-3.5">
            <span className="text-solarYellow border border-solarYellow rounded-full px-[16px] py-3 text-xl font-semibold">
              0{step.id}
            </span>
            <div className="flex flex-col">
              <h1 className="h1Text">{step.label}</h1>
              <p className="pText">{step.content}</p>
            </div>
          </div>
        ))}

        <div className="h-ful">
          <Image
            src={"/images/services.png"}
            width={285}
            height={400}
            alt="Workflow"
            className="h-full w-full md:hidden object-cover"
          />
          <Image
            src={"/images/servicesLg.png"}
            width={345}
            height={590}
            alt="Workflow"
            className="h-full w-full md:block hidden object-cover"
          />
        </div>

        {workFlowStep.slice(2).map((step) => (
          <div key={step.id} className="flex items-start gap-3.5">
            <span className="text-solarYellow border border-solarYellow rounded-full px-[16px] py-3 text-xl font-semibold">
              0{step.id}
            </span>
            <div className="flex flex-col">
              <h1 className="h1Text">{step.label}</h1>
              <p className="pText">{step.content}</p>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default WorkFlow;
