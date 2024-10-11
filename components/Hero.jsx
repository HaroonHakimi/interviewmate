"use client";
import React, { useRef } from "react";
import PurpleButton from "./PurpleButton";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  return (
    <div>
      <motion.section
        ref={sectionRef}
        style={{
          backgroundPositionY: backgroundPositionY,
          backgroundImage: `url('stars3.svg')`,
        }}
        className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative 
        [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]
         "
      >
        <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>
        <div
          className="absolute h-64 w-64 md:h-96 md:w-96 bg-purple-500 rounded-full border border-white/20
        top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))]
        shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"
        ></div>
        <motion.div
          style={{
            translateY: "-50%",
            translateX: "-50%",
          }}
          animate={{
            rotate: "1turn",
          }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
          className="absolute w-[344px] h-[344px] md:h-[580px] md:w-[580px] border border-whote opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="absolute h-2 w-2 top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full"></div>
          <div className="absolute h-2 w-2 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full"></div>
          <div className="absolute border border-white h-5 w-5 top-1/2 left-full -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full">
            <div className="h-2 w-2 bg-white rounded-full"></div>
          </div>
        </motion.div>
        {/* <div> */}
        <motion.div
          style={{
            translateY: "-50%",
            translateX: "-50%",
          }}
          animate={{
            rotate: "-1turn",
          }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
          className="absolute h-[410px] md:h-[780px] md:w-[780px] w-[410px] rounded-full border border-dashed border-white/20
          top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        ></motion.div>
        {/* </div> */}
        <motion.div
          style={{
            translateY: "-50%",
            translateX: "-50%",
          }}
          animate={{
            rotate: "1turn",
          }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
          className="absolute h-[544px] md:h-[980px] md:w-[980px] w-[544px] opacity-20 rounded-full border border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="absolute h-2 w-2 top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full"></div>
          <div className="absolute h-2 w-2 top-1/2 left-full -translate-x-1/2 -translate-y-1/2 bg-white rounded-full"></div>
        </motion.div>
        <div className="container mt-16 flex justify-center flex-col items-center relative text-white">
          <h1 className="text-8xl md:[168px] md:leading-none font-semibold bg-white tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
            InterviewMate
          </h1>
          <p className="text-md w-3/4 md:text-xl text-white/70 mt-5 text-center max-w-xl mx-auto">
            Enhance your interview skills and boost your confidence with
            AI-powered mock interviews tailored to your job search.
          </p>
          <div className="flex justify-center mt-5">
            <Link href="/dashboard">
              <PurpleButton>Get Started</PurpleButton>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Hero;
