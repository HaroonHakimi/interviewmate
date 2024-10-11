"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const LogoTicker = () => {
  const logos = [
    { src: "/apex.png", alt: "Apex" },
    { src: "/acme.png", alt: "Acme" },
    { src: "/celestial.png", alt: "Celestial" },
    { src: "/quantum.png", alt: "Apex" },
    { src: "/pulse.png", alt: "Apex" },
    { src: "/echo.png", alt: "Apex" },
    { src: "/apex.png", alt: "Apex" },
    { src: "/acme.png", alt: "Acme" },
    { src: "/celestial.png", alt: "Celestial" },
    { src: "/quantum.png", alt: "Apex" },
    { src: "/pulse.png", alt: "Apex" },
    { src: "/echo.png", alt: "Apex" },
  ];
  return (
    <section className="py-20 md:py-24">
      <div className="text-white container">
        <div className="flex items-center gap-5">
          <div className="flex-1 md:flex-none">
            <h2>Trusted by top innovative teams</h2>
          </div>
          <div className="flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
            initial={{ translateX: '-50%' }}
            animate={{ translateX: '0' }}
            transition={{ duration: 20, ease: 'linear' }}
            className="flex flex-none gap-14 pr-14 -translate-x-1/2">
              {logos.map((logo, index) => (
                <Image
                  key={index}
                  src={logo.src}
                  alt={logo.alr}
                  height={24}
                  width={24}
                  className="h-6 w-auto"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
