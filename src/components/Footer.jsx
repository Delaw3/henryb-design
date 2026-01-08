import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 px-4">
        <p className="text-center sm:text-left text-sm">
          © {new Date().getFullYear()} HenryB Designs Ltd. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition transform hover:scale-110"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition transform hover:scale-110"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
