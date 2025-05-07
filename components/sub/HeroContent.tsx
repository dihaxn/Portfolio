'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const HeroContent: React.FC = () => {
  return (
      <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row items-center justify-center px-4 md:px-20 mt-20 md:mt-40 w-full z-[20]"
      >
        {/* Text Content */}
        <div className="h-full w-full flex flex-col gap-3 md:gap-5 justify-center m-auto text-center md:text-start">
          {/* Animated Badge */}
          <motion.div
              variants={slideInFromTop}
              className="Welcome-box py-[6px] md:py-[8px] px-[6px] md:px-[7px] border border-[#7042f88b] opacity-[0.9] inline-flex items-center"
          >
            <SparklesIcon className="text-[#b49bff] mr-2 md:mr-[10px] h-4 w-4 md:h-5 md:w-5" />
            <h1 className="Welcome-text text-xs md:text-[13px]">
              Fullstack Developer | DevOps Geek
              <span className="hidden md:inline"> | Socrates Web3 🇱🇰 Ambassador</span>
            </h1>
          </motion.div>

          {/* Main Heading */}
          <motion.div
              variants={slideInFromLeft(0.5)}
              className="flex flex-col gap-3 md:gap-6 mt-4 md:mt-6 text-2xl md:text-6xl max-w-[600px] w-auto h-auto"
          >
            {/* Mobile Heading */}
            <div className="md:hidden relative">
              <div className="absolute -inset-4 bg-black/90 blur-2xl rounded-3xl" />
              <motion.span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-600 to-pink-500 neon-hero-glow px-4 py-2">
                Providing
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-teal-400 neon-cyan-glow">
                {' '}the best{' '}
              </span>
                project experience
              </motion.span>
            </div>

            {/* Desktop Heading */}
            <div className="hidden md:block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-600 to-pink-500 neon-hero-glow">
              Providing
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-teal-400 neon-cyan-glow">
              {' '}the best{' '}
            </span>
              project experience
            </div>
          </motion.div>

          {/* Description Text */}
          <motion.div
              variants={slideInFromLeft(0.8)}
              className="my-2 md:my-5 max-w-[600px]"
          >
            <div className="relative">
              <div className="md:hidden absolute -inset-4 bg-black/90 blur-2xl rounded-3xl" />
              <motion.p className="relative z-10 text-sm md:text-lg bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-600 [text-shadow:none] px-4 py-2 md:px-0 md:py-0">
                I&apos;m a Full Stack Software Developer with experience in web
                and software development. Check out my projects and skills.
              </motion.p>
            </div>
          </motion.div>

          {/* Download Button */}
          <motion.a
              href="https://drive.google.com/file/d/1DqOb72c6E3QywPYqs3ZeeTBC3uLmnp8h/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              variants={slideInFromLeft(1)}
              className="py-2 md:py-2.5 px-4 md:px-5 button-primary text-center text-white cursor-pointer rounded-full md:rounded-lg glow-button transform transition-all duration-300 hover:scale-105 text-sm md:text-sm relative overflow-hidden w-fit mx-auto md:mx-0"
          >
          <span className="relative z-10">
            Download CV <span className="inline-block animate-bounce">😎</span>
          </span>
            <div className="md:hidden absolute -inset-2 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
          </motion.a>
        </div>

        {/* Image Section */}
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
              priority
          />
        </motion.div>
      </motion.div>
  );
};

export default HeroContent;