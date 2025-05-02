import React from "react";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
    RxEnvelopeClosed,
    RxMobile,
    RxGlobe
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    const socialLinks = {
        youtube: "https://youtube.com/@your-channel",
        github: "https://github.com/dihaxn",
        discord: "https://discord.gg/your-server",
        instagram: "https://instagram.com/your-profile",
        twitter: "https://twitter.com/your-profile",
        linkedin: "https://linkedin.com/in/dihan-laknuka125374269"
    };

    return (
        <footer className="w-full bg-gradient-to-b from-purple-900/20 to-indigo-900/30 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Embedded CSS Animations */}
            <style dangerouslySetInnerHTML={{
                __html: `
                    @keyframes border-width {
                        0% { background-size: 0% 100%; }
                        50% { background-size: 100% 100%; }
                        100% { background-size: 0% 100%; }
                    }
                    @keyframes line-expand {
                        0% { transform: scaleX(0); opacity: 0; }
                        100% { transform: scaleX(1); opacity: 1; }
                    }
                    .animate-border-width {
                        background: linear-gradient(90deg, transparent, #a855f7, transparent);
                        background-size: 0% 100%;
                        animation: border-width 3s linear infinite;
                    }
                    .animate-line-expand {
                        animation: line-expand 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                    }
                `
            }} />

            {/* Animated top border */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-border-width" />

            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8 relative">
                    {/* Profile Section */}
                    <div className="space-y-3 sm:space-y-4 relative p-6 rounded-xl border border-transparent bg-gradient-to-br from-purple-900/30 to-cyan-900/20 bg-origin-border">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-400/10 rounded-xl -z-10" />
                        <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                            DIHAN LAKNUKA
                        </h3>
                        <p className="text-sm text-white/90 leading-relaxed">

                            University of Ruhuna (BCS Undergraduate)
                        </p>
                        <p className="text-sm italic text-white/70">
                            Shaping knowledge to build career
                        </p>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
                    </div>

                    {/* Community Links */}
                    <div className="space-y-3 sm:space-y-4 relative md:before:content-[''] md:before:absolute md:before:left-0 md:before:top-1/2 md:before:-translate-y-1/2 md:before:w-px md:before:h-3/4 md:before:bg-gradient-to-b md:before:from-transparent md:before:via-purple-400/30 md:before:to-transparent">
                        <h4 className="text-base sm:text-lg font-semibold text-cyan-300/90 relative inline-block pb-2">
                            Community
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 animate-line-expand" />
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {[
                                { icon: FaYoutube, color: "text-red-400", href: socialLinks.youtube, text: "YouTube" },
                                { icon: RxGithubLogo, color: "text-gray-300", href: socialLinks.github, text: "GitHub" },
                                { icon: RxDiscordLogo, color: "text-blue-400", href: socialLinks.discord, text: "Discord" },
                            ].map((item, index) => (
                                <li key={index} className="group relative">
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center w-full p-2 rounded-lg transition-all duration-300 ease-out hover:bg-white/5 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:-translate-y-0.5"
                                    >
                                        <item.icon className={`mr-2 text-xl ${item.color} transition-transform duration-300 group-hover:scale-110`} />
                                        <span className="text-sm sm:text-base text-white/90">{item.text}</span>
                                        <span className="absolute inset-0 z-10" aria-hidden="true" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="space-y-3 sm:space-y-4 relative md:before:content-[''] md:before:absolute md:before:left-0 md:before:top-1/2 md:before:-translate-y-1/2 md:before:w-px md:before:h-3/4 md:before:bg-gradient-to-b md:before:from-transparent md:before:via-cyan-400/30 md:before:to-transparent">
                        <h4 className="text-base sm:text-lg font-semibold text-cyan-300/90 relative inline-block pb-2">
                            Social Media
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 animate-line-expand" />
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {[
                                { icon: RxInstagramLogo, color: "text-pink-400", href: socialLinks.instagram, text: "Instagram" },
                                { icon: RxTwitterLogo, color: "text-blue-300", href: socialLinks.twitter, text: "Twitter" },
                                { icon: RxLinkedinLogo, color: "text-blue-500", href: socialLinks.linkedin, text: "LinkedIn" },
                            ].map((item, index) => (
                                <li key={index} className="group relative">
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center w-full p-2 rounded-lg transition-all duration-300 ease-out hover:bg-white/5 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:-translate-y-0.5"
                                    >
                                        <item.icon className={`mr-2 text-xl ${item.color} transition-transform duration-300 group-hover:scale-110`} />
                                        <span className="text-sm sm:text-base text-white/90">{item.text}</span>
                                        <span className="absolute inset-0 z-10" aria-hidden="true" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-3 sm:space-y-4 relative md:before:content-[''] md:before:absolute md:before:left-0 md:before:top-1/2 md:before:-translate-y-1/2 md:before:w-px md:before:h-3/4 md:before:bg-gradient-to-b md:before:from-transparent md:before:via-purple-400/30 md:before:to-transparent">
                        <h4 className="text-base sm:text-lg font-semibold text-cyan-300/90 relative inline-block pb-2">
                            Contact
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 animate-line-expand" />
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {[
                                {
                                    icon: RxEnvelopeClosed,
                                    color: "text-purple-400",
                                    href: "mailto:ihanlaknuka@gmail.com",
                                    text: "ihanlaknuka@gmail.com"
                                },
                                {
                                    icon: RxMobile,
                                    color: "text-green-400",
                                    href: "tel:+94701410595",
                                    text: "+94 701410595"
                                },
                                {
                                    icon: RxGlobe,
                                    color: "text-yellow-400",
                                    text: "Kiribathgoda",
                                    isLink: false
                                },
                            ].map((item, index) => (
                                <li key={index} className="group relative">
                                    {item.isLink !== false ? (
                                        <a
                                            href={item.href}
                                            className="flex items-center w-full p-2 rounded-lg transition-all duration-300 ease-out hover:bg-white/5 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:-translate-y-0.5"
                                        >
                                            <item.icon className={`mr-2 text-xl ${item.color} transition-transform duration-300 group-hover:scale-110`} />
                                            <span className="text-sm sm:text-base text-white/90">{item.text}</span>
                                            <span className="absolute inset-0 z-10" aria-hidden="true" />
                                        </a>
                                    ) : (
                                        <div className="flex items-center p-2 group">
                                            <item.icon className={`mr-2 text-xl ${item.color} transition-transform duration-300 group-hover:scale-110`} />
                                            <span className="text-sm sm:text-base text-white/90">{item.text}</span>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-transparent pt-6 text-center relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
                    <p className="text-sm text-white/80">
                        © {new Date().getFullYear()} Moon. All rights reserved.
                        <br />
                        <span className="text-xs sm:text-sm mt-1 block text-white/60">
                            Follow me for more! ❤️</span>
                    </p>
                </div>
            </div>

            {/* Background glow effects */}
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[80px] -z-10" />
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[80px] -z-10" />
        </footer>
    );
};

export default Footer;