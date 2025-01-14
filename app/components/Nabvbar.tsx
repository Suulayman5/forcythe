"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 px-8 md:px-28 py-[1.6rem] flex justify-between gap-10 items-center transition-all duration-300 ${
        isScrolled ? "bg-opacity-10 bg-white text-white" : "bg-opacity-10 text-white"
      }`}
    >
      {/* Logo and Nav Links */}
      <div className="flex items-center gap-16">
        <Image
          src="https://forcythe.com/images/forcythe%20logo.svg"
          width={130}
          height={40}
          alt="logo"
        />
        <nav className="hidden md:flex space-x-8">
          <Link href="#about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#services" className="hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="#portfolio" className="hover:text-primary transition-colors">
            Portfolio
          </Link>
          <Link href="#studio" className="hover:text-primary transition-colors">
            Studio
          </Link>
          <Link href="#foundation" className="hover:text-primary transition-colors">
            Foundation
          </Link>
        </nav>
      </div>

      {/* Call-to-Action Button */}
      <div className="hidden md:flex">
            <div className="relative w-fit">
              <button className="w-fit py-[12px] px-5  flex gap-2 items-center justify-center rounded-full bg-white text-base text-black relative z-10 font-semibold hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md">Book a Call <ArrowRight className="w-10 h-10"/></button>
              <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]"></div>
            </div> 
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white flex items-center justify-center"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div className="p-2 rounded-md bg-slate-800">
          <Menu />
        </div>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 right-4 bg-gradient-to-b from-gray-800 to-black text-white rounded-3xl w-64 p-6 space-y-4 z-50 shadow-lg md:hidden">
          <Link href="#about" className="block hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#services" className="block hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="#portfolio" className="block hover:text-primary transition-colors">
            Portfolio
          </Link>
          <Link href="#studio" className="block hover:text-primary transition-colors">
            Studio
          </Link>
          <Link href="#foundation" className="block hover:text-primary transition-colors">
            Foundation
          </Link>
          <Link href="#careers" className="block hover:text-primary transition-colors">
            Careers
          </Link>
          <Link href="#blog" className="block hover:text-primary transition-colors">
            Blog
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
