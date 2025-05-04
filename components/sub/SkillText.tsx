"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const SkillText = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center px-4'>
            <motion.div
                variants={slideInFromTop}
                className="Welcome-box py-[6px] md:py-[8px] px-[6px] md:px-[7px] border border-[#7042f88b] opacity-[0.9]"
            >
                <SparklesIcon className="text-[#b49bff] mr-2 md:mr-[10px] h-4 w-4 md:h-5 md:w-5" />
                <h1 className="Welcome-text text-xs md:text-[13px]">
                    Building the future with cutting-edge tech
                </h1>
            </motion.div>
            <br/>
            <motion.h1
                variants={slideInFromLeft(0.5)}
                className='text-4xl md:text-5xl lg:text-6xl font-extrabold mt-2 md:mt-[10px] text-center mb-3 md:mb-[15px] tech-arsenal-gradient tech-arsenal-heading neon-skill-glow'
            >
                ⚡ Tech Arsenal
            </motion.h1>
            <motion.div
                variants={slideInFromRight(0.5)}
                className='cursive text-base md:text-lg lg:text-[20px] text-gray-200 mb-6 md:mb-10 mt-2 md:mt-[10px] text-center'
            >
                On time. On point. On trend
            </motion.div>
        </div>
    );
};

export default SkillText;