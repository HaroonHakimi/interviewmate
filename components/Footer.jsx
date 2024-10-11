import Image from "next/image";
import Link from "next/link";
import React from "react";

const links = [
  { src: "/linkedin.svg", alt: "Apex", link: 'https://linkedin.com/in/haroonhakimi' },
  { src: "/github.svg", alt: "Acme", link: 'https://github.com/HaroonHakimi' },
];

const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="text-white container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex gap-2 items-center lg:flex-1">
            <Image src={"/logo.svg"} alt="logo" width={50} height={50} />
            <div className="font-medium">InterviewMate</div>
          </div>
          <nav className="flex flex-col lg:flex-row lg:gap-7 gap-5 lg_flex-1 lg:justify-center">
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Company
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Changelog
            </a>
          </nav>
          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            {links.map((link, index) => (
              <a  href={link.link}>
                <Image
                  className="invert cursor-pointer"
                  key={index}
                  src={link.src}
                  alt={link.alt}
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
