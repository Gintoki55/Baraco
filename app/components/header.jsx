"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import InputJsx from "./Input";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Disable scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <header className="bg-[#184b72] shadow-md" role="navigation">
      <nav className="w-full sm:h-[90px] h-[80px] flex items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-[65px] h-[65px]">
            <a href="/">
              <img
                src="/images/Logo.png"
                alt="Baraco Logo"
                className="object-contain w-full h-full"
              />
            </a>
          </div>
          <span className="text-2xl sm:text-4xl font-semibold text-white tracking-wide">
            Baraco
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-8">
          {["/", "about", "services", "contact"].map((item, index) => (
            <li key={index}>
              <Link
                href={item === "/" ? "/" : `/${item}`}
                className="text-lg font-medium text-[#E0E1DD] capitalize transition hover:text-[#FFFFFF]"
                aria-label={`Go to ${item}`}
              >
                {item === "/" ? "Home" : item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Search + Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <InputJsx
            style="focus:ring-white focus:border-white border-white text-white"
            iconStyle="text-white"
          />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="lg:hidden flex flex-col items-center gap-6 py-6 bg-[#184b72] text-white text-lg font-medium absolute top-[80px] left-0 w-full shadow-md transition-all z-50">
          {["/", "about", "services", "contact"].map((item, index) => (
            <li key={index}>
              <Link
                href={item === "/" ? "/" : `/${item}`}
                className="capitalize transition hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                {item === "/" ? "Home" : item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Header;
