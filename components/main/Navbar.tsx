"use client";

import { useState } from "react";
import { Socials } from "@/constants";
import Image from "next/image";
import { Orbitron, Rajdhani } from 'next/font/google';

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron'
});

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-rajdhani'
});

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
      <div className={`w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 md:px-10 transition-all duration-300 hover:shadow-[#2A0E61]/80 ${orbitron.variable} ${rajdhani.variable}`}>
        <div className="w-full h-full flex flex-row items-center justify-between m-auto">
          <a
              href="#about-me"
              className="h-auto w-auto flex flex-row items-center group"
          >
            <Image
                src="/NavLogo.png"
                alt="logo"
                width={70}
                height={70}
                className="cursor-pointer hover:animate-slowspin transition-transform duration-300 hover:scale-110"
            />

            <h3 className="hidden sm:block text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent ml-2 transition-all duration-300 group-hover:from-cyan-400 group-hover:to-purple-400 font-orbitron">
              DIHAN LAKNUKA
            </h3>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between mr-5">
            <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200 transition-all duration-300 hover:border-[#7042f8] hover:bg-[#030014] font-orbitron">
              <a
                  href="#about-me"
                  className="cursor-pointer relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-gradient-to-r before:from-purple-400 before:to-cyan-400 before:transition-all before:duration-300 hover:before:w-full"
              >
              <span className="hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 text-sm tracking-wider">
                ABOUT ME
              </span>
              </a>

              <a
                  href="#skills"
                  className="cursor-pointer relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-gradient-to-r before:from-purple-400 before:to-cyan-400 before:transition-all before:duration-300 hover:before:w-full"
              >
              <span className="hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 text-sm tracking-wider">
                SKILLS
              </span>
              </a>

              <a
                  href="#projects"
                  className="cursor-pointer relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-gradient-to-r before:from-purple-400 before:to-cyan-400 before:transition-all before:duration-300 hover:before:w-full"
              >
              <span className="hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 text-sm tracking-wider">
                PROJECTS
              </span>
              </a>

              <a
                  href="#contact"
                  className="px-5 py-2 bg-gradient-to-r from-[#2A0E61] to-[#6F3BD8] text-white font-semibold rounded-full hover:from-[#6F3BD8] hover:to-[#2A0E61] hover:shadow-lg hover:shadow-[#6F3BD8]/40 transition-all duration-300 transform hover:scale-105 font-rajdhani"
              >
                Contact me
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-200 hover:text-white focus:outline-none"
          >
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Mobile Menu */}
          {isMenuOpen && (
              <div className="absolute top-[65px] left-0 w-full bg-[#030014] backdrop-blur-md z-50 md:hidden">
                <div className="flex flex-col items-center py-4 space-y-4 border border-[#7042f861] bg-[#0300145e] mx-4 rounded-lg">
                  <a
                      href="#about-me"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-gray-200 hover:text-white transition-colors duration-300 text-sm font-orbitron"
                  >
                    ABOUT ME
                  </a>
                  <a
                      href="#skills"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-gray-200 hover:text-white transition-colors duration-300 text-sm font-orbitron"
                  >
                    SKILLS
                  </a>
                  <a
                      href="#projects"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-gray-200 hover:text-white transition-colors duration-300 text-sm font-orbitron"
                  >
                    PROJECTS
                  </a>
                  <a
                      href="#contact"
                      onClick={() => setIsMenuOpen(false)}
                      className="px-5 py-2 bg-gradient-to-r from-[#2A0E61] to-[#6F3BD8] text-white font-semibold rounded-full hover:from-[#6F3BD8] hover:to-[#2A0E61] transition-all duration-300 font-rajdhani"
                  >
                    Contact me
                  </a>
                </div>
              </div>
          )}
        </div>
      </div>
  );
};

export default Navbar;