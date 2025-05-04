"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const leftSections = [
        {
            title: "Personal & Skills",
            items: [
                "Project Management",
                "Teamwork & Leadership",
                "Effective Communication",
                "Problem Solving",
                "Time Management"
            ]
        },
        {
            title: "Software Development",
            items: [
                "Full Stack Development",
                "Web Development",
                "UI/UX Design",
                "DevOps Practices",
                "Cloud Integration"
            ]
        }
    ];

    const rightSections = [
        {
            title: "Activities",
            items: [
                "Ruhuna CSSC Society Member",
                "Asoka Vidyalaya Cadet Band (2015-2020)",
                "Interact Club Editor (2019-2020)",
                "School Rugby Team (2014-2015)",
                "Xiphos Esports Association"
            ]
        },
        {
            title: "Achievements",
            items: [
                "3rd Place - Play Expo 2024",
                "Insurgex 1.0 Hackathon Participant",
                "Nebula Esport Showdown 2024",
                "Band Cadet Training (2015-2019)"
            ]
        }
    ];

    return (
        <div className="flex flex-col md:flex-row relative items-center justify-center min-h-screen w-full h-full px-4 overflow-hidden">
            {/* Title Section */}
            <div className="w-auto h-auto top-0 z-[5] md:absolute">
                <motion.div
                    variants={slideInFromTop}
                    className="text-3xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-600 to-pink-500 neon-encryption-glow"
                >
                    Skills & Achievements
                    <br/>
                    <br/>
                    <div className="cursive text-[16px] md:text-[20px] font-medium text-center text-gray-300 px-4">
                        Click the lock to reveal details
                    </div>
                </motion.div>
            </div>


            {/* Centered Lock Section */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[20] w-auto h-auto">
                <div
                    className="flex flex-col items-center group cursor-pointer w-auto h-auto"
                    onClick={toggleMenu}
                    role="button"
                    tabIndex={0}
                >
                    <Image
                        src="/LockTop.png"
                        alt="Lock top"
                        width={60}
                        height={60}
                        className="w-[50px] md:w-[60px] translate-y-4 transition-all duration-200 group-hover:translate-y-8"
                    />
                    <Image
                        src="/LockMain.png"
                        alt="Lock Main"
                        width={90}
                        height={90}
                        className="w-[80px] md:w-[90px] z-10"
                    />
                </div>

                {/* Dropdown Panels */}
                {isMenuOpen && (
                    <>
                        {/* Left Panel */}
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="absolute top-full md:top-1/2 left-0 md:-left-[400px] mt-4 md:mt-0 w-[280px] md:w-[350px] bg-gray-800 rounded-lg shadow-xl z-50 p-4 md:-translate-y-1/2"
                        >
                            <div className="space-y-6">
                                {leftSections.map((section, index) => (
                                    <div key={index}>
                                        <h3 className="text-cyan-400 font-semibold mb-3 text-sm md:text-base border-b border-cyan-500/30 pb-2">
                                            {section.title}
                                        </h3>
                                        <ul className="list-disc list-inside space-y-2">
                                            {section.items.map((item, idx) => (
                                                <li
                                                    key={idx}
                                                    className="text-gray-300 text-xs md:text-sm leading-relaxed"
                                                >
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Panel */}
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="absolute top-full md:top-1/2 right-0 md:-right-[400px] mt-4 md:mt-0 w-[280px] md:w-[350px] bg-gray-800 rounded-lg shadow-xl z-50 p-4 md:-translate-y-1/2"
                        >
                            <div className="space-y-6">
                                {rightSections.map((section, index) => (
                                    <div key={index}>
                                        <h3 className="text-purple-400 font-semibold mb-3 text-sm md:text-base border-b border-purple-500/30 pb-2">
                                            {section.title}
                                        </h3>
                                        <ul className="list-disc list-inside space-y-2">
                                            {section.items.map((item, idx) => (
                                                <li
                                                    key={idx}
                                                    className="text-gray-300 text-xs md:text-sm leading-relaxed"
                                                >
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}

                <div className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#7042f88b] opacity-[0.9]">
                    <h1 className="Welcome-text text-[12px]">Explore Profile</h1>
                </div>
            </div>

            {/* Background Video */}
            <div className="w-full h-full flex items-center justify-center absolute">
                <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    preload="false"
                    className="w-full h-auto max-w-[1200px] scale-125"
                    src="/encryption.webm/"
                />
            </div>
        </div>
    );
};

export default Encryption;