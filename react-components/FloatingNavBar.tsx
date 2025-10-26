"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Menu items object list
  const menuItems = [
    { name: "Home", href: "" },
    { name: "About", href: "about" },
    { name: "Services", href: "services" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-5xl">
      {/* Main Nav Container */}
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full flex items-center justify-between px-6 py-3 md:py-4 shadow-lg">
        {/* Logo */}
        <div className="flex items-center gap-2 text-white font-bold text-xl">
          <Icon icon="mdi:rocket-launch" className="text-white text-2xl" />
          <span>ZIQX</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="hover:text-gray-300 transition">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-white">
          <Hamburger toggled={open} toggle={setOpen} size={22} color="#fff" />
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {open && (
        <div className="md:hidden mt-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 text-center space-y-4 text-white font-medium animate-fadeIn">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block hover:text-gray-300 transition"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
