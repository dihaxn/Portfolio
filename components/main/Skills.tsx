import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Skill_data,
  Other_skill,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
      <section
          id="skills"
          className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-32 md:pb-80 py-8 md:py-20"
          style={{ transform: "scale(0.9)" }}
      >
        <SkillText />

        <div className="flex flex-row justify-center flex-wrap mt-4 gap-3 md:gap-5 items-center">
          {Skill_data.map((image, index) => (
              <SkillDataProvider
                  key={index}
                  src={image.Image}
                  width={image.width}
                  height={image.height}
                  index={index}
              />
          ))}
        </div>

        <div className="flex flex-row justify-center flex-wrap mt-4 gap-3 md:gap-5 items-center">
          {Frontend_skill.map((image, index) => (
              <SkillDataProvider
                  key={index}
                  src={image.Image}
                  width={image.width}
                  height={image.height}
                  index={index}
              />
          ))}
        </div>

        <div className="flex flex-row justify-center flex-wrap mt-4 gap-3 md:gap-5 items-center">
          {Backend_skill.map((image, index) => (
              <SkillDataProvider
                  key={index}
                  src={image.Image}
                  width={image.width}
                  height={image.height}
                  index={index}
              />
          ))}
        </div>

        <div className="flex flex-row justify-center flex-wrap mt-4 gap-3 md:gap-5 items-center">
          {Full_stack.map((image, index) => (
              <SkillDataProvider
                  key={index}
                  src={image.Image}
                  width={image.width}
                  height={image.height}
                  index={index}
              />
          ))}
        </div>
        <div className="flex flex-row justify-center flex-wrap mt-4 gap-3 md:gap-5 items-center">
          {Other_skill.map((image, index) => (
              <SkillDataProvider
                  key={index}
                  src={image.Image}
                  width={image.width}
                  height={image.height}
                  index={index}
              />
          ))}
        </div>

        <div className="w-full h-full absolute">
          <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
            <video
                className="w-full h-auto max-w-full"
                preload="false"
                playsInline
                loop
                muted
                autoPlay
                src="/cards-video.webm"
            />
          </div>
        </div>
      </section>
  );
};

export default Skills;