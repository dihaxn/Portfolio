import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
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
  return (
      <div className={`w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 transition-all duration-300 hover:shadow-[#2A0E61]/80 ${orbitron.variable} ${rajdhani.variable}`}>
        <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
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

            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent ml-2 transition-all duration-300 group-hover:from-cyan-400 group-hover:to-purple-400 font-orbitron">
              DIHAN LAKNUKA
            </h3>
          </a>

          <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
            <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 transition-all duration-300 hover:border-[#7042f8] hover:bg-[#030014] font-orbitron">
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
        </div>
      </div>
  );
};

export default Navbar;