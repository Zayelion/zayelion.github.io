import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import '../styles/global.css'

function LandingPage() {
  const navLinks = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Services", href: "/services" },
    { text: "Contact", href: "/contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  

  return (
    <header className="bg-white shadow-md px-4 py-3 flex items-center justify-between">   
    
       {/* Desktop Nav */}
    <nav className="hidden md:flex space-x-6 items-center">
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-gray-700 hover:text-blue-600"
        >
          {link.text}
        </a>
      ))}
    </nav>
      {/* Logo */}
      <div className="text-xl font-bold">
        <a href="/"></a>
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex flex-1 mx-6">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring"
        />
      </div>



      {/* Hamburger Button */}
      <button
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-t shadow-md md:hidden">
          <div className="px-4 py-2">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border rounded-lg mb-4"
            />
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default LandingPage;
