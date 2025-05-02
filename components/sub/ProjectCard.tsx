import Image from "next/image";
import React from "react";

interface Props {
    src: string;
    title: string;
    description: string;
    technologies?: string[];
}

const ProjectCard = ({ src, title, description, technologies }: Props) => {
    return (
        <div className="rounded-xl p-[2px] bg-gradient-to-r from-purple-500 to-cyan-500 hover:shadow-[0_0_20px_4px_rgba(139,92,246,0.4)] transition-shadow duration-300">
            <div className="relative overflow-hidden rounded-xl group bg-[#0a061d] h-full">
                <div className="relative h-52 overflow-hidden">
                    <Image
                        src={src}
                        alt={title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a061d] via-[#0a061d]/70 to-transparent" />
                </div>

                <div className="p-6 bg-[#0a061d]">
                    <div className="mb-4">
                        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">
                            {title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
                    </div>

                    {technologies && (
                        <div className="border-t border-[#2A0E61] pt-4">
                            <h4 className="text-sm font-semibold text-purple-300 mb-3">Tech Stack</h4>
                            <div className="grid grid-cols-3 gap-2">
                                {technologies.map((tech) => (
                                    <div
                                        key={tech}
                                        className="flex items-center justify-center p-2 text-xs text-center font-medium rounded-md bg-[#1E0B4D] hover:bg-[#2A0E61] transition-colors cursor-default"
                                    >
                                        <span className="text-gradient bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                                            {tech}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="absolute top-4 right-4 flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-purple-500/80"></div>
                    <div className="h-3 w-3 rounded-full bg-cyan-500/80"></div>
                    <div className="h-3 w-3 rounded-full bg-blue-500/80"></div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;