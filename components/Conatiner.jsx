import React from "react";

const Conatiner = ({ title, h1, h2,textAllign }) => {
  return (
    <div className={`flex flex-col capitalize ${textAllign} `}>
      <div className="flex mb-2 items-center gap-2 justify-center">
        <span className="w-20 h-1 bg-solarYellow rounded-sm " />{" "}
        <h3 className="text-solarYellow font-semibold">{title}</h3>
      </div>
      <h1 className="h1Text">{h1}</h1>
      <h2 className="h2Text text-opacity-80">{h2}</h2>

    </div>
  );
};

export default Conatiner;
