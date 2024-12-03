import { IconButton } from "@mui/material";
import React from "react";

const Button = ({ handleClick, text, icon, variant }) => {
  return (
    <button
      className={`${
        variant === "sec"
          ? "text-solarYellow px-3 hover:font-bold active:motion-preset-pop"
          : "bg-gradient-to-r from-green/90 px-5 text-white  to-softgreen shadow shadow-text/20 hover:bg-gradient-to-r hover:from-green hover:to-softgreen/90 hover:shadow-lg hover:shadow-text/30 active:motion-preset-pop "
      } capitalize  py-2 rounded `}
    >
      <span className=" text-[16px] lg:text-[18px] ">
        {text}
      </span>
      {icon && icon}
    </button>
  );
};

export default Button;
