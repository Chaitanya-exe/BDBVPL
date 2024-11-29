import { IconButton } from '@mui/material'
import React from 'react'

const Button = ({handleClick,text,icon,variant}) => {
  return (
    <button
      className={`${
        variant === "sec"
          ? "text-solarYellow px-3"
          : "bg-gradient-to-r from-green/90 px-5 text-white  to-softgreen shadow shadow-text/20 hover:bg-gradient-to-r hover:from-green hover:to-softgreen/90 hover:shadow-lg hover:shadow-text/30"
      } capitalize   py-2 rounded `}
    >
      <span className="text-whit text-[16px] ">{text}</span>
      {icon && icon}
    </button>
  );
}

export default Button
