"use client";
import React, { useRef, RefObject, useEffect } from "react";
import PurpleButton from "./PurpleButton";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";

const useRelativeMousePosition = (ref) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePosition = (event) => {
    if (ref.current) {
      const { top, left } = ref.current.getBoundingClientRect();
      mouseX.set(event.clientX - left);
      mouseY.set(event.clientY - top);
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [ref]);

  return [mouseX, mouseY];
};

const CallToAction = () => {
  const sectionRef = useRef(null);
  const borderedDivRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  }); 
  const [mouseX, mouseY] = useRelativeMousePosition(borderedDivRef);

  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`;

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );
  return (
    <motion.section ref={sectionRef} className="py-20 text-white md:py-24 ">
      <div className="container  bg-overlay-dark">
        <motion.div
          ref={borderedDivRef}
          animate={{
            backgroundPositionX: ["0%", "100%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
          style={{
            backgroundPositionY,
            backgroundImage: `url('stars3.svg')`,
          }}
          className=" py-24 rounded-xl overflow-hidden relative group"
        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-custom-svg  bg-blend-overlay
          [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]
          group-hover:opacity-0 transition duration-700"
          ></div>
          <motion.div
          style={{
            maskImage
          }}
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-custom-svg  bg-blend-overlay
          
          opacity-0 group-hover:opacity-100 transition duration-700"
          ></motion.div>
          <div className="relative ">
            <h2 className="text-5xl md:text-6xl max-w-sm  mx-auto tracking-tighter font-medium text-center ">
              AI Mockup Interviews for everyone.
            </h2>
            <p
              className="text-center tracking-tight px-4 mt-5 text-lg text-white/70
            md:text-xl max-w-xs mx-auto"
            >
              Achieve clear, impactful results, faster.
            </p>
            <div className="flex justify-center mt-8">
             <Link href="/dashboard">
              <PurpleButton>Get Started</PurpleButton>
             </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CallToAction;
