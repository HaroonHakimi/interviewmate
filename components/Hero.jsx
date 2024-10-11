"use client";
import React from "react";
import PurpleButton from "./PurpleButton";
import ecosystem from "../../public/ecosystem.svg";

const Hero = () => {
  return (
    <div>
      <section
        className="h-[492px] flex items-center overflow-hidden relative"
        style={{
          backgroundImage: `url('${ecosystem.src}')`,
        }}
      >
        <div className="absolute inset-0"></div>
        <div
          className="absolute h-64 w-64 bg-purple-500 rounded-full border border-white/20
        top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))]
        shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"
        ></div>
        <div className="absolute w-[344px] h-[344px] border border-whote opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute h-2 w-2 top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full"></div>
          <div className="absolute h-2 w-2 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full"></div>
          <div className="absolute border border-white h-5 w-5 top-1/2 left-full -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full">
            <div className="h-2 w-2 bg-white rounded-full"></div>
          </div>
        </div>
        <div>
          <div
            className="absolute h-[410px] w-[410px] rounded-full border border-dashed border-white/20
          top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          ></div>
        </div>
        <div className="absolute h-[544px] w-[544px] opacity-20 rounded-full border border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute h-2 w-2 top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full"></div>
          <div className="absolute h-2 w-2 top-1/2 left-full -translate-x-1/2 -translate-y-1/2 bg-white rounded-full"></div>
        </div>
        <div className="container mt-16 flex justify-center flex-col items-center relative text-white">
          <h1 className="text-6xl md:text-8xl font-semibold bg-white tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
            InterviewMate
          </h1>
          <p className="text-md w-3/4 md:text-lg text-white/70 mt-5 text-center">
            Enhance your interview skills and boost your confidence with
            AI-powered mock interviews tailored to your job search.
          </p>
          <div className="flex justify-center mt-5">
            <PurpleButton>Get Started</PurpleButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
