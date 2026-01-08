import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRightIcon, XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import assets from "../assets/assets"; // your logo

const Navbar = () => {
  const logo = assets.logo;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Close sidebar when route changes
  useEffect(() => {
    setSidebarOpen(false);
  }, [location]);

  // Scroll to section if hash exists in URL (for links from other pages)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50">
      {/* Logo */}
      <a href="/"><img src={logo} alt="logo" className="h-10 w-auto" /></a>

      {/* Desktop / Mobile Menu */}
      <div
        className={`text-gray-700 sm:text-sm ${
          !sidebarOpen ? "max-sm:w-0 overflow-hidden" : "max-sm:w-60 max-sm:pl-10"
        } max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all duration-300`}
      >
        {/* Close Button (Mobile) */}
        <button
          className="w-5 absolute top-4 right-4 sm:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <XMarkIcon className="h-6 w-6 text-gray-500 hover:text-gray-800" />
        </button>

        {/* Links */}
        {location.pathname === "/" ? (
          <>
            <a href="/" className="sm:hover:border-b cursor-pointer">Home</a>
            <a href="#about-us" className="sm:hover:border-b cursor-pointer">About</a>
            <a href="#projects" className="sm:hover:border-b cursor-pointer">Projects</a>
            <a href="#services" className="sm:hover:border-b cursor-pointer">Services</a>
            <a href="#contact" className="sm:hover:border-b cursor-pointer">Contact</a>
          </>
        ) : (
          <>
            <Link to="/" className="sm:hover:border-b cursor-pointer">Home</Link>
            <Link to="/#about-us" className="sm:hover:border-b cursor-pointer">About</Link>
            <Link to="/#projects" className="sm:hover:border-b cursor-pointer">Projects</Link>
            <Link to="/#services" className="sm:hover:border-b cursor-pointer">Services</Link>
            <Link to="/contact" className="sm:hover:border-b cursor-pointer">Contact</Link>
          </>
        )}
      </div>

      {/* Right Side: Hamburger / Connect Button */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Hamburger for mobile */}
        <button className="w-8 sm:hidden" onClick={() => setSidebarOpen(true)}>
          <Bars3Icon className="h-6 w-6 text-gray-700" />
        </button>

        {/* Connect Button */}
        <Link
          to="/#contact"
          className="text-sm max-sm:hidden flex items-center gap-2 bg-secondary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-300"
        >
          Connect <ArrowRightIcon className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
