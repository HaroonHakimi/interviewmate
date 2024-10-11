import Image from "next/image";
import React from "react";
import PurpleButton from "./PurpleButton";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <div>
      <header className="p-6 border-b border-white/15 md:border-none">
        <div className="">
          <div className="flex justify-between items-center md:border border-white/20 md:p-2.5 rounded-xl max-w-2xl mx-auto">
            <div className="">
              <Image src={"/logo.svg"} alt="logo" width={50} height={50} />
            </div>
            <div className="hidden md:block">
              <nav className="flex gap-8 text-sm">
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition "
                >
                  Features
                </a>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition "
                >
                  Developers
                </a>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition "
                >
                  Pricing
                </a>
              </nav>
            </div>
            <div className="text-white flex gap-2 items-center">
              <PurpleButton>Login</PurpleButton>
              <MenuIcon className="md:hidden" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
