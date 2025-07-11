import React from "react";
import {
    RxGithubLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
    RxEnvelopeClosed,
    RxMobile,
    RxGlobe
} from "react-icons/rx";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
    const socialLinks = {
        github: "https://github.com/dihaxn",
        telegram: "https://t.me/dihaxn",
        twitter: "https://x.com/dihaxn",
        linkedin: "https://www.linkedin.com/in/dihanlaknuka/",
        email: "mailto:ihanlaknuka@gmail.com",
        phone: "tel:+94701410595"
    };

    return (
        <footer
            id="contact"
            className="w-full bg-gradient-to-b from-purple-900/20 to-indigo-900/30 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        >
            {/* Embedded CSS Animations */}
            <style
                dangerouslySetInnerHTML={{
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
            .cosmic-link {
              position: relative;
              overflow: hidden;
              z-index: 10;
            }
            .cosmic-link::before {
              content: '';
              position: absolute;
              top: 0;
              left: -100%;
              width: 100%;
              height: 100%;
              background: linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.3), transparent);
              transition: 0.5s;
              z-index: -1;
            }
            .cosmic-link:hover::before {
              left: 100%;
            }
            .star-pulse {
              animation: starPulse 4s infinite;
            }
            @keyframes starPulse {
              0% { opacity: 0.2; transform: scale(1); }
              50% { opacity: 1; transform: scale(1.05); }
              100% { opacity: 0.2; transform: scale(1); }
            }
            .footer-content {
              position: relative;
              z-index: 20;
            }
            .cosmic-stars {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              pointer-events: none;
              z-index: 1;
            }
          `
                }}
            />

            {/* Animated top border */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-border-width z-30" />

            {/* Cosmic Stars */}
            <div className="cosmic-stars">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white/30 pointer-events-none"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 2 + 1}px`,
                            height: `${Math.random() * 2 + 1}px`,
                            animationDelay: `${Math.random() * 4}s`
                        }}
                    />
                ))}
            </div>

            <div className="max-w-6xl mx-auto footer-content">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 relative">
                    {/* Profile Section */}
                    <div className="space-y-2 sm:space-y-4 relative p-4 sm:p-6 rounded-xl border border-transparent bg-gradient-to-br from-purple-900/30 to-cyan-900/20 bg-origin-border">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-400/10 rounded-xl -z-10" />
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                            DIHAN LAKNUKA
                        </h3>
                        <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                            University of Ruhuna (BCS Undergraduate)
                        </p>
                        <p className="text-xs sm:text-sm italic text-white/70">
                            Shaping knowledge to build career
                        </p>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
                    </div>

                    {/* Community Links */}
                    <div className="space-y-2 sm:space-y-4 relative pt-4 md:pt-0 border-t md:border-0 border-purple-400/20 md:before:content-[''] md:before:absolute md:before:left-0 md:before:top-1/2 md:before:-translate-y-1/2 md:before:w-px md:before:h-3/4 md:before:bg-gradient-to-b md:before:from-transparent md:before:via-purple-400/30 md:before:to-transparent">
                        <h4 className="text-sm sm:text-base md:text-lg font-semibold text-cyan-300/90 relative inline-block pb-1 sm:pb-2">
                            Community
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 animate-line-expand" />
                        </h4>
                        <ul className="space-y-1 sm:space-y-2 md:space-y-3">
                            {[
                                { icon: RxGithubLogo, color: "text-gray-300", href: socialLinks.github, text: "GitHub" },
                                { icon: FaTelegramPlane, color: "text-blue-300", href: socialLinks.telegram, text: "Telegram" },
                            ].map((item, index) => (
                                <li key={index} className="group relative">
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cosmic-link flex items-center w-full p-1 sm:p-2 rounded-lg transition-all duration-300 ease-out hover:bg-white/5 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:-translate-y-0.5 cursor-pointer"
                                    >
                                        {React.createElement(item.icon, {
                                            className: `mr-2 text-lg sm:text-xl ${item.color} transition-transform duration-300 group-hover:scale-110 star-pulse`,
                                        })}
                                        <span className="text-xs sm:text-sm md:text-base text-white/90">{item.text}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="space-y-2 sm:space-y-4 relative pt-4 md:pt-0 border-t md:border-0 border-cyan-400/20 md:before:content-[''] md:before:absolute md:before:left-0 md:before:top-1/2 md:before:-translate-y-1/2 md:before:w-px md:before:h-3/4 md:before:bg-gradient-to-b md:before:from-transparent md:before:via-cyan-400/30 md:before:to-transparent">
                        <h4 className="text-sm sm:text-base md:text-lg font-semibold text-cyan-300/90 relative inline-block pb-1 sm:pb-2">
                            Social Media
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 animate-line-expand" />
                        </h4>
                        <ul className="space-y-1 sm:space-y-2 md:space-y-3">
                            {[
                                { icon: RxTwitterLogo, color: "text-blue-300", href: socialLinks.twitter, text: "Twitter" },
                                { icon: RxLinkedinLogo, color: "text-blue-500", href: socialLinks.linkedin, text: "LinkedIn" },
                            ].map((item, index) => (
                                <li key={index} className="group relative">
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cosmic-link flex items-center w-full p-1 sm:p-2 rounded-lg transition-all duration-300 ease-out hover:bg-white/5 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:-translate-y-0.5 cursor-pointer"
                                    >
                                        {React.createElement(item.icon, {
                                            className: `mr-2 text-lg sm:text-xl ${item.color} transition-transform duration-300 group-hover:scale-110 star-pulse`,
                                        })}
                                        <span className="text-xs sm:text-sm md:text-base text-white/90">{item.text}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-2 sm:space-y-4 relative pt-4 md:pt-0 border-t md:border-0 border-purple-400/20 md:before:content-[''] md:before:absolute md:before:left-0 md:before:top-1/2 md:before:-translate-y-1/2 md:before:w-px md:before:h-3/4 md:before:bg-gradient-to-b md:before:from-transparent md:before:via-purple-400/30 md:before:to-transparent">
                        <h4 className="text-sm sm:text-base md:text-lg font-semibold text-cyan-300/90 relative inline-block pb-1 sm:pb-2">
                            Contact
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 animate-line-expand" />
                        </h4>
                        <ul className="space-y-1 sm:space-y-2 md:space-y-3">
                            {[
                                {
                                    icon: RxEnvelopeClosed,
                                    color: "text-purple-400",
                                    href: socialLinks.email,
                                    text: "ihanlaknuka@gmail.com"
                                },
                                {
                                    icon: RxMobile,
                                    color: "text-green-400",
                                    href: socialLinks.phone,
                                    text: "+94 701410595"
                                },
                                {
                                    icon: RxGlobe,
                                    color: "text-yellow-400",
                                    text: "Kiribathgoda",
                                    isStatic: true
                                },
                            ].map((item, index) => (
                                <li key={index} className="group relative">
                                    {!item.isStatic ? (
                                        <a
                                            href={item.href}
                                            className="cosmic-link flex items-center w-full p-1 sm:p-2 rounded-lg transition-all duration-300 ease-out hover:bg-white/5 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:-translate-y-0.5 cursor-pointer"
                                        >
                                            {React.createElement(item.icon, {
                                                className: `mr-2 text-lg sm:text-xl ${item.color} transition-transform duration-300 group-hover:scale-110 star-pulse`,
                                            })}
                                            <span className="text-xs sm:text-sm md:text-base text-white/90 break-all">{item.text}</span>
                                        </a>
                                    ) : (
                                        <div className="flex items-center p-1 sm:p-2 group">
                                            {React.createElement(item.icon, {
                                                className: `mr-2 text-lg sm:text-xl ${item.color} transition-transform duration-300 group-hover:scale-110`,
                                            })}
                                            <span className="text-xs sm:text-sm md:text-base text-white/90">{item.text}</span>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-transparent pt-4 sm:pt-6 text-center relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
                    <p className="text-xs sm:text-sm text-white/80">
                        © {new Date().getFullYear()} Moon. All rights reserved.
                        <br />
                        <span className="text-[0.7rem] sm:text-xs mt-1 block text-white/60">
              Follow me for more! ❤️
            </span>
                    </p>
                </div>
            </div>

            {/* Background glow effects */}
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[80px] -z-10 pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[80px] -z-10 pointer-events-none" />
        </footer>
    );
};

export default Footer;