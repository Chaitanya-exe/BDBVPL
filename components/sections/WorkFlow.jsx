import React from "react";
import Conatiner from "../Conatiner";
import { workFlowStep } from "@/constants/dummy";
import Image from "next/image";

const WorkFlow = () => {
  return (
    <div>
      <Conatiner
        title={"How we work"}
        h1={"Our Solar Panel Installation Work Flow."}
        h2={
          "From consultation to installation and maintenance, we provide comprehensive solar energy solutions designed to meet your unique needs."
        }
        textAllign={"text-center"}
      />
      {/* <div className="mt-7 *:my-4 grid sm:grid-cols-1 md:grid-cols-3">
        {workFlowStep.map((step) => (
          <div key={step.id} className="flex items-start gap-3.5">
            <span className="text-solarYellow border border-solarYellow rounded-full px-[16px] py-3 text-xl font-semibold">0{step.id}</span>
            <div className="flex flex-col">
              <h1 className="h1Text">{step.label}</h1>
              <p className="pText">{step.content}</p>
            </div>
          </div>
        ))}
      </div> */}

      <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-4">
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

        <div className="h-full">
          <Image
            src={"/images/services.png"}
            width={285}
            height={400}
            alt="Workflow"
            className="h-full w-full object-cover"
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
      </div>
    </div>
  );
};

export default WorkFlow;
