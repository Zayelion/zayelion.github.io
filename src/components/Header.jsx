import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import "../styles/global.css";
import lessonList from "../constants/lessonList";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="header">
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          {lessonList.map((link) => (
            <a key={link.href} href={link.href}>
              {link.text}
            </a>
          ))}
        </nav>
        {/* Logo */}
        <div className="logo">
          <img
            src="/z-logo.png" // Ensure you have a logo image in the public folder
            alt="The Angel of Code Logo"
            style={ {
              height: '2em',
              width: '2em',
              filter: 'invert(1)',
              paddingRight: '.5em',
              display: 'inline-block'
          }}
            />
          <a href="/">The Angel of Code</a>
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
    </>
  );
}

export default Header;
