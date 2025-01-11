"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react'; 
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white fixed top-0 left-0 bg-opacity-10 text-white px-4 md:px-20 py-[1.8rem] backdrop-blur-md flex justify-between items-center w-full z-30">
      <div className="flex items-center gap-16">
        <Image src="https://forcythe.com/images/forcythe%20logo.svg" width={130} height={40} alt="logo"/>

        <nav className="hidden md:flex space-x-8">
          <Link href="#about" className="hover:text-primary transition-colors">About</Link>
          <Link href="#services" className="hover:text-primary transition-colors">Services</Link>
          <Link href="#portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
          <Link href="#studio" className="hover:text-primary transition-colors">Studio</Link>
          <Link href="#foundation" className="hover:text-primary transition-colors">Foundation</Link>
        </nav>
      </div>
      <div className="hidden md:flex bg-white text-dark rounded-3xl p-2 px-4 font-bold items-center justify-center hover:bg-primary transition-colors">
        Book a Call
      </div>
      <button
        className="md:hidden text-white flex items-center justify-center"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div className="p-2 rounded-md bg-slate-800">
          <Menu />
        </div>
      </button>

      {isMenuOpen && (
        <div className="absolute top-20 right-4 bg-gradient-to-b from-gray-800 to-black text-white rounded-3xl w-64 p-6 space-y-4 z-50 shadow-lg md:hidden">
          <Link href="#about" className="block hover:text-primary transition-colors">About</Link>
          <Link href="#services" className="block hover:text-primary transition-colors">Services</Link>
          <Link href="#portfolio" className="block hover:text-primary transition-colors">Portfolio</Link>
          <Link href="#studio" className="block hover:text-primary transition-colors">Studio</Link>
          <Link href="#foundation" className="block hover:text-primary transition-colors">Foundation</Link>
          <Link href="#careers" className="block hover:text-primary transition-colors">Careers</Link>
          <Link href="#blog" className="block hover:text-primary transition-colors">Blog</Link>
        </div>
      )}
    </header>

  );
};

export default Navbar;
