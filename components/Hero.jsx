"use client";
import React from "react";
import PurpleButton from "./PurpleButton";

const Hero = () => {
  return (
    <div>
      <section className="h-[492px] flex items-center " style={{
        backgroundImage: `url('/ecosystem.svg')`,
      }}>
        <div>
            
        </div>
        <div className="container text-white">
          <h1 className="text-6xl md:text-8xl font-semibold bg-white tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
            InterviewMate
          </h1>
          <p className="text-md md:text-lg text-white/70 mt-5 text-center">
            Prepare for success with AI-powered mock interviews tailored to your
            job search.
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
