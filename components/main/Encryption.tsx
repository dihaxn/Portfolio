// 1. Encryption Component
"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
    return (
        <div className="flex flex-col md:flex-row relative items-center justify-center min-h-screen w-full h-full">
            <div className="w-auto h-auto top-0 z-[5] md:absolute">
                <motion.div
                    variants={slideInFromTop}
                    className="text-3xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-600 to-pink-500 neon-encryption-glow"
                >
                    Performance & Certificates
                </motion.div>
            </div>

            <div className="flex flex-col items-center justify-center translate-y-[-30px] md:translate-y-[-50px] relative md:absolute z-[20] w-auto h-auto mt-8 md:mt-0">
                <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
                    <Image
                        src="/LockTop.png"
                        alt="Lock top"
                        width={50}
                        height={50}
                        className="w-[40px] md:w-[50px] translate-y-4 md:translate-y-5 transition-all duration-200 group-hover:translate-y-8 md:group-hover:translate-y-11"
                    />
                    <Image
                        src="/LockMain.png"
                        alt="Lock Main"
                        width={70}
                        height={70}
                        className="w-[60px] md:w-[70px] z-10"
                    />
                </div>

                <div className="Welcome-box px-[12px] md:px-[15px] py-[3px] md:py-[4px] z-[20] border my-[15px] md:my-[20px] border-[#7042f88b] opacity-[0.9]">
                    <h1 className="Welcome-text text-[10px] md:text-[12px]">Encryption</h1>
                </div>
            </div>

            <div className="absolute z-[20] bottom-[20px] md:bottom-[10px] px-[5px]">
                <div className="cursive text-[16px] md:text-[20px] font-medium text-center text-gray-300 px-4">
                    Secure your data with end-to-end encryption
                </div>
            </div>

            <div className="w-full flex items-start justify-center absolute">
                <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    preload="false"
                    className="w-full h-auto max-w-[1000px]"
                    src="/encryption.webm/"
                />
            </div>
        </div>
    );
};

export default Encryption;