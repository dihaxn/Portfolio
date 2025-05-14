"use client";
import { useState } from "react";
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
      <div className={`w-full min-h-[60px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-8 transition-all duration-300 hover:shadow-[#2A0E61]/80 ${orbitron.variable} ${rajdhani.variable}`}>
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
                className="cursor-pointer hidden sm:block w-[30px] md:w-[50px] hover:animate-slowspin transition-transform duration-300 hover:scale-110"
            />

            <h3 className="block text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent ml-2 transition-all duration-300 group-hover:from-cyan-400 group-hover:to-purple-400 font-orbitron">
              DIHAN LAKNUKA
            </h3>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex w-[750px] h-full flex-row items-center justify-between">
            <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-6 py-2 rounded-full text-gray-200 transition-all duration-300 hover:border-[#7042f8] hover:bg-[#030014] font-orbitron space-x-6">
              <a
                  href="#about-me"
                  className="cursor-pointer relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-gradient-to-r before:from-purple-400 before:to-cyan-400 before:transition-all before:duration-300 hover:before:w-full"
              >
              <span className="hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 text-base tracking-wider">
                ABOUT ME
              </span>
              </a>

              <a
                  href="#skills"
                  className="cursor-pointer relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-gradient-to-r before:from-purple-400 before:to-cyan-400 before:transition-all before:duration-300 hover:before:w-full"
              >
              <span className="hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 text-base tracking-wider">
                SKILLS
              </span>
              </a>

              <a
                  href="#achievements"
                  className="cursor-pointer relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-gradient-to-r before:from-purple-400 before:to-cyan-400 before:transition-all before:duration-300 hover:before:w-full"
              >
              <span className="hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 text-base tracking-wider">
              ACHIEVEMENTS
              </span>
              </a>

              <a
                  href="#projects"
                  className="cursor-pointer relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-gradient-to-r before:from-purple-400 before:to-cyan-400 before:transition-all before:duration-300 hover:before:w-full"
              >
              <span className="hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 text-base tracking-wider">
                PROJECTS
              </span>
              </a>

              <a
                  href="#contact"
                  className="px-4 py-1.5 md:px-5 md:py-2 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] text-white font-semibold rounded-full hover:from-[#06B6D4] hover:to-[#8B5CF6] hover:shadow-cyan-violet transition-all duration-300 transform hover:scale-105 font-rajdhani shadow-cyan-violet text-sm md:text-base"
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
              <div className="absolute top-full left-0 w-full bg-[#030014]/95 backdrop-blur-lg z-50 md:hidden border-t border-[#7042f861]">
                <div className="flex flex-col items-center py-4 space-y-4 bg-[#0300145e] mx-4 rounded-b-lg">
                  <a
                      href="#about-me"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-gray-200 hover:text-white transition-colors duration-300 text-base font-orbitron py-2"
                  >
                    ABOUT ME
                  </a>
                  <a
                      href="#skills"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-gray-200 hover:text-white transition-colors duration-300 text-base font-orbitron py-2"
                  >
                    SKILLS
                  </a>
                  <a
                      href="#achievements"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-gray-200 hover:text-white transition-colors duration-300 text-base font-orbitron py-2"
                  >
                    ACHIEVEMENTS
                  </a>
                  <a
                      href="#projects"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-gray-200 hover:text-white transition-colors duration-300 text-base font-orbitron py-2"
                  >
                    PROJECTS
                  </a>
                  <a
                      href="#contact"
                      onClick={() => setIsMenuOpen(false)}
                      className="px-4 py-1.5 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] text-white font-semibold rounded-full hover:from-[#06B6D4] hover:to-[#8B5CF6] transition-all duration-300 font-rajdhani text-sm"
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