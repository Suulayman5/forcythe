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
    <header className="bg-dark text-white px-4 md:px-20 py-8 flex justify-between items-center ">
        <div className="flex gap-28">
       <Image src='https://forcythe.com/images/forcythe%20logo.svg' width={130} height={2} alt='logo'/>         
      <nav className="hidden md:flex space-x-4 ">
        <Link href="#about" className="hover:text-primary">About</Link>
        <Link href="#services" className="hover:text-primary">Services</Link>
        <Link href="#portfolio" className="hover:text-primary">Portfolio</Link>
        <Link href="#studio" className="hover:text-primary">Studio</Link>
        <Link href="#foundation" className="hover:text-primary">Foundation</Link>
      </nav>
        </div>
      <div className="hidden bg-white text-dark rounded-3xl p-2 px-4 font-bold md:flex justify-end hover:bg-primary">
        Book a Call
      </div>
      <button
        className="md:hidden text-white"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div className="p-2 rounded-md bg-slate-800" >

        <Menu />
        </div>
      </button>
      {isMenuOpen && (
        <div className="absolute top-16 right-6 bg-gradient-to-b from-gray-800 to-black text-white rounded-3xl min-h-[350px] w-[250px] p-8  space-y-6 z-50 mt-10 md:hidden">
            <Link href="#about" className="block hover:text-primary">About</Link>
            <Link href="#services" className="block  hover:text-primary">Services</Link>
            <Link href="#portfolio" className="block hover:text-primary">Portfolio</Link>
            <Link href="#studio" className="block hover:text-primary">Studio</Link>
            <Link href="#foundation" className="block hover:text-primary">Foundation</Link>
            <Link href="#careers" className="block hover:text-primary">Careers</Link>
            <Link href="#blog" className="block hover:text-primary">Blog</Link>
        </div>
        )}

    </header>
  );
};

export default Navbar;
