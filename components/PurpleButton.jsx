"use client";
import React from "react";

const PurpleButton = (props) => {
  return (
    <div>
      <button className="relative rounded-lg border-white/15 py-2 px-3 bg-gradient-to-b from-[#190d2e] to-[#41208a] shadow-[0px_0px_12px_#8c45ff] mr-2 md:m-0">
        <div className="absolute inset-0 ">
          <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom, black, transparent)]"></div>
          <div className="rounded-lg absolute inset-0  border-white/40 [mask_image:linear-gradient(to_top, black, transparent)]"></div>
          <div className="absolute rounded-lg inset-0 shadow-[0_0_10px_rgb(140,69,255,..7)_inset]"></div>
        </div>
        <span>{props.children}</span>
      </button>
    </div>
  );
};

export default PurpleButton;
