// 2. Projects Component
import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
    return (
        <section className="py-12 md:py-24 px-4 md:px-8 bg-[#050017]" id="projects">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-600 to-pink-500 neon-projects-glow text-center mb-12 md:mb-20">
                    🌟 Cutting-Edge Creations
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
                    <ProjectCard
                        src="/NextWebsite.png"
                        title="Little Lanka Outlet Management System"
                        description="Comprehensive POS solution with real-time analytics and inventory management."
                        technologies={["React TS", "Spring Boot", "AWS", "Docker"]}
                    />
                    <ProjectCard
                        src="/NextWebsite.png"
                        title="Little Lanka Web site"
                        description="E-commerce platform with real-time inventory management."
                        technologies={["React TS", "Node.js", "MySQL", "Redis"]}
                    />
                    <ProjectCard
                        src="/CardImage.png"
                        title="Wildlife Management System"
                        description="Digital solution for wildlife departments with geofencing."
                        technologies={["Java", "JavaFX", "MySQL", "Git"]}
                    />
                    <ProjectCard
                        src="/SpaceWebsite.png"
                        title="E-Learning Platform"
                        description="LMS platform for educational content delivery."
                        technologies={["React", "Spring Boot", "Docker", "AWS"]}
                    />
                </div>
            </div>
        </section>
    );
};

export default Projects;