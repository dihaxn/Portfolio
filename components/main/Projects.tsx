// components/Projects.tsx
import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
    return (
        <section className="py-24 px-4 md:px-8 bg-[#050017]" id="projects">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-center mb-20">
                    Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ProjectCard
                        src="/NextWebsite.png"
                        title="Little Lanka Outlet Management System"
                        description="Comprehensive POS solution with real-time analytics and inventory management, designed for retail chains and food establishments."
                        technologies={["React TS", "Spring Boot", "Node.js", "AWS", "Docker", "Jenkins", "MySQL", "Redis", "JWT"]}
                    />

                    <ProjectCard
                        src="/NextWebsite.png"
                        title="Little Lanka Web site"
                        description="Comprehensive POS solution with real-time analytics and inventory management, designed for retail chains and food establishments."
                        technologies={["React TS", "Spring Boot", "Node.js", "AWS", "Docker", "Jenkins", "MySQL", "Redis", "JWT"]}
                    />

                    <ProjectCard
                        src="/CardImage.png"
                        title="Hunting Resource Management System"
                        description="Digital solution for wildlife departments to manage permits and equipment tracking with geofencing capabilities."
                        technologies={["Java", "JavaFX"," MySQL", "Git"]}
                    />

                    <ProjectCard
                        src="/SpaceWebsite.png"
                        title="E-Learning Platform"
                        description="Developed an LMS platform for managing educational content delivery."
                        technologies={["React", "Spring Boot", "Tailwind CSS", "Docker", "AWS", "Jenkins", "Git"]}
                    />
                </div>
            </div>
        </section>
    );
};

export default Projects;