"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const Header = () => {
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, []);

  return (
    <div className="flex p-4 items-center justify-between shadow-sm">
      <Image src={"/logo.svg"} width={50} height={50} alt="logo" />
      <ul className=" hidden sm:flex gap-6">
        <Link href={"/dashboard"}>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
            path === "/dashboard" && "font-bold text-primary"
          } `}
        >
          Dashboard
        </li>
        </Link>

        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-not-allowed ${
            path === "/dashboard/upgrade" && "font-bold text-primary"
          }}`}
        >
          Upgrade
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-not-allowed ${
            path === "/dashboard/how-it-works" && "font-bold text-primary"
          }}`}
        >
          How it works
        </li>
      </ul>
      <UserButton />
    </div>
  );
};

export default Header;
