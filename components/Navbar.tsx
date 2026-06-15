"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavLinks = [
  { name: "Home", link: "#home", id: "home" },
  { name: "Portfolio", link: "#portfolio", id: "portfolio" },
  { name: "Skills", link: "#services", id: "services" },
  { name: "Experience", link: "#experience", id: "experience" },
  { name: "Contact", link: "#contact", id: "contact" },
];

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [active, setActive] = useState("home");

  const toggleNav = () => setNav(!nav);
  const closeNav = () => setNav(false);

  // Scroll spy — highlight the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    NavLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="z-50 fixed flex justify-center w-full text-white font-bold">
      <div className="border border-white/20 mt-8 backdrop-blur-3xl rounded-full hidden md:flex items-center justify-center px-2 py-1 mx-auto">
        <ul className="flex flex-row items-center p-2 space-x-1">
          {NavLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.link}
                className={`block rounded-full px-4 py-1.5 text-sm transition-all duration-300 ease-in-out whitespace-nowrap ${
                  active === link.id
                    ? "bg-purple-600 text-white"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div onClick={toggleNav} className="md:hidden absolute top-5 right-6 border rounded z-50 text-white/70 p-2">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      <div
        className={`fixed left-0 top-0 w-full h-full bg-black/90 transform transition-transform duration-300 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center justify-center space-y-8 h-full">
          {NavLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.link}
                onClick={closeNav}
                className={`text-4xl transition duration-300 ${
                  active === link.id ? "text-purple-500" : "text-white hover:text-gray-400"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
