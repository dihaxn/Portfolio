// HeroContent component
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
      <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row items-center justify-center px-4 md:px-20 mt-20 md:mt-40 w-full z-[20]"
      >
        <div className="h-full w-full flex flex-col gap-3 md:gap-5 justify-center m-auto text-center md:text-start">
          <motion.div
              variants={slideInFromTop}
              className="Welcome-box py-[6px] md:py-[8px] px-[6px] md:px-[7px] border border-[#7042f88b] opacity-[0.9]"
          >
            <SparklesIcon className="text-[#b49bff] mr-2 md:mr-[10px] h-4 w-4 md:h-5 md:w-5" />
            <h1 className="Welcome-text text-xs md:text-[13px]">
              Fullstack Developer
              <span className="hidden md:inline"> | DevOps Geek | Socrates Web3 🇱🇰 Ambassador</span>
            </h1>
          </motion.div>

          {/* ... rest of the component remains unchanged ... */}
          <motion.div
              variants={slideInFromLeft(0.5)}
              className="flex flex-col gap-4 md:gap-6 mt-4 md:mt-6 text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
          >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project experience
          </span>
          </motion.div>

          <motion.p
              variants={slideInFromLeft(0.8)}
              className="text-base md:text-lg text-gray-400 my-3 md:my-5 max-w-[600px]"
          >
            I&apos;m a Full Stack Software Developer with experience in Website
            and Software development. Check out my projects and skills.
          </motion.p>
          <motion.a
              href="https://drive.google.com/file/d/116sJERtpI6WiZCa-05nS9oQLEfNXNLpO/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              variants={slideInFromLeft(1)}
              className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] mx-auto md:mx-0"
          >
            Download CV 😎
          </motion.a>
        </div>

        <motion.div
            variants={slideInFromRight(0.8)}
            className="w-full h-full flex justify-center items-center mt-8 md:mt-0"
        >
          <Image
              src="/mainIconsdark.svg"
              alt="work icons"
              height={650}
              width={650}
              className="w-[300px] h-[300px] md:w-[650px] md:h-[650px]"
          />
        </motion.div>
      </motion.div>
  );
};

export default HeroContent;