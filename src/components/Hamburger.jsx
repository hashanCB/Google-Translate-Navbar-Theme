import React, { useState } from "react";

const Hamburger = () => {
  const [isopen, SetIsopen] = useState(false);

  const ChangeHanurger = () => {
    SetIsopen(flase);
  };

  const hamburger = "space-y-[3px] cursor-pointer";
  const cross = "space-y-[3px] cursor-pointer ";
  const line = "w-5 h-[2px] bg-[#5f6368] transition-transform  duration-300  ";

  return (
    <div>
      <div
        className={`  ${isopen ? cross : hamburger} `}
        onClick={ChangeHanurger}
      >
        <div
          className={`${line}  ${
            isopen ? "rotate-45 translate-y-[4px]   " : ""
          }`}
        ></div>
        <div className={`${line} ${isopen ? "opacity-0" : ""}`}></div>
        <div
          className={`${line} ${
            isopen ? "-rotate-45 -translate-y-[6px] " : ""
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Hamburger;
