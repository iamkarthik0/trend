"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";

const Navbar = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".main", {
        scale: 0,
        y: 20,
        duration: 1,
        delay: 0.8,
      });

      gsap.fromTo(
        ".link",
        {
          opacity: 0,
          y: 10,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 1.8,
          stagger: 0.2,
        }
      );
    },
    { scope: container }
  );

  return (
    <div ref={container} className=" w-full h-full ">
      <div className="main h-16 bg-[#4B4F3C] rounded-[18px] px-4 flex items-center justify-between">
        <h1 className="link h4 text-[#DBC0A4]">Skiller Dev</h1>
        <AlignJustify className="link w-8 h-8 text-[#DBC0A4]  flex  lg:hidden" />
        <div className=" subtle-text  space-x-6 font-medium hidden lg:flex">
          <Link href="/" className="text-[#DBC0A4] link">
            Home
          </Link>
          <Link href="/" className="text-[#DBC0A4] link">
            About
          </Link>
          <Link href="/" className="text-[#DBC0A4] link">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
