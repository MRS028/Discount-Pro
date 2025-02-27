import React from "react";
import logo from "/public/Images/Loogo3.png";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col place-items-center md:flex-row justify-center md:justify-between items-center">
          {/* Logo and Description */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <img className="w-20 h-16 mx-32 md:mx-8" src={logo} alt="" />
            <Link to="/">
              <h2
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-3xl font-bold"
              >
                Discount Pro
              </h2>
            </Link>
            <p className="text-xl text-base-200 opacity-75">
              Building solutions that empower your digital presence.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://github.com/mrs028"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/md-rifat-sheikh-426ab0294/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Discount Pro. All rights reserved.
          </p>
          <p className="text-sm">
            Designed by{" "}
            <a
              href="https://github.com/mrs028"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Md. Rifat sheikh
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
