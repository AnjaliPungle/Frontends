import logo from "../../assets/logo.png";


import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-16 h-16" />

  
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-black font-medium">
          <a href="#" className="hover:text-blue-600 transition">Home</a>
          <a href="#" className="hover:text-blue-600 transition">About</a>
          <a href="#" className="hover:text-blue-600 transition">Services</a>
          <a href="#" className="hover:text-blue-600 transition">Contact</a>
        </div>

        {/* Hamburger for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black text-2xl">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg flex flex-col text-center">
          <a href="#" className="py-2 hover:bg-gray-100">Home</a>
          <a href="#" className="py-2 hover:bg-gray-100">About</a>
          <a href="#" className="py-2 hover:bg-gray-100">Services</a>
          <a href="#" className="py-2 hover:bg-gray-100">Contact</a>
        </div>
      )}
    </nav>
  );
}
