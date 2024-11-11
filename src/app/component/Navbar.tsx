"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/images/Logo.png";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#043873]">
      <div className="md:w-[1920px] md:h-[92px] mx-auto py-4 px-6 md:px-[140px]  sm:py-0 flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link href="/">
            {/* Logo with responsive size */}
            <div className="w-[120px] md:w-[191px] md:h-[34px]">
              <Image src={logo} alt="logo" />
            </div>
          </Link>

          {/* Hamburger Icon for mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl md:hidden focus:outline-none"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Nav links and login button container */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center w-full md:w-[737.5px] justify-between mt-4 md:mt-0 text-white`}
        >
          {/* Nav links */}
          <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-8 font-medium text-base">
            <li className="hover:border-b hover:border-white transition duration-300 ">
              <Link href="#">Products</Link>
            </li>
            <li className="hover:border-b hover:border-white transition duration-300">
              <Link href="#">Solutions</Link>
            </li>
            <li className="hover:border-b hover:border-white transition duration-300">
              <Link href="#">Resources</Link>
            </li>
            <li className="hover:border-b hover:border-white transition duration-300">
              <Link href="#">Pricing</Link>
            </li>
          </ul>

          {/* Login button */}
          <div className="mt-4 md:mt-0">
            <button className="w-full md:w-auto rounded-lg px-6 py-2 text-[#043873] bg-[#FFE492] border border-[#FFE492] hover:text-black hover:bg-white transition duration-300">
              <p className="font-bold text-lg tracking-[-2%]">Login</p>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
