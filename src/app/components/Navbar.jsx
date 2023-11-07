"use client";
import Image from "next/image";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";


const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <nav className="fixed flex lg:px-28 2xl:px-72 justify-between mx-auto border border-none top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 py-10 px-6">
        <Image src="/logo.svg" 
            width={250}
            height={250}
            className="xl:w-[280px]"
            alt="logo"/>
        <ul className="hidden md:flex items-center gap-10 xl:gap-[48px]">
          <Link href="/" className="hover:bg-[#CEF62E] hover:text-[#131313] p-2">SERVICE</Link>
          <Link href="/about" className="hover:bg-[#CEF62E] hover:text-[#131313] p-2">ABOUT US</Link>
          <Link href="/product" className="hover:bg-[#CEF62E] hover:text-[#131313] p-2">PRODUCTS</Link>
          <Link href="/project" className="hover:bg-[#CEF62E] hover:text-[#131313] p-2">START A PROJECT</Link>
        </ul>
        <HiMenuAlt3
          size={30}
          
          className="block md:hidden cursor-pointer text-white"
          onClick={() => setShowMobileMenu((prev) => !prev)}
        />

        <div
          className={`block md:hidden w-full fixed ${
            !showMobileMenu ? "-top-[410px]" : "top-0"
          } left-0 bg-[#151515] text-white h-[310px] transition-all duration-[800ms] shadow-xl z-10 py-8 px-12 rounded-b-xl`}
        >
          <AiOutlineClose
            size={25}
            className="absolute top-5 right-5 cursor-pointer"
            onClick={() => setShowMobileMenu(false)}
          />

          <ul className="pt-2 items-center flex flex-col gap-8">
            <Link href="/" className="hover:bg-[#CEF62E] hover:text-[#131313] p-2" mobileMenu>
            SERVICE
            </Link>
            <Link href="/about" className="hover:bg-[#CEF62E] hover:text-[#131313] p-2" mobileMenu>
            ABOUT US
            </Link>
            <Link href="/product" className="hover:bg-[#CEF62E] hover:text-[#131313] p-2" mobileMenu>
            PRODUCTS
            </Link>
            <Link href="/project" className="hover:bg-[#CEF62E] hover:text-[#131313] p-2" mobileMenu>
            START A PROJECT
            </Link>
          </ul>
        </div>
    </nav>
  );
};

export default Navbar;