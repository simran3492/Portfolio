// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans min-h-screen relative overflow-hidden"
    style={{
      background: 'linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)'
    }}
  >
    {/* Dynamic Background Elements */}
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-cyan-400/20 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-purple-500/15 to-pink-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-emerald-400/20 to-cyan-300/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      {/* Geometric Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 w-24 h-24 border border-cyan-300 rounded-lg rotate-45"></div>
        <div className="absolute top-32 right-32 w-16 h-16 border-2 border-purple-400 rounded-full"></div>
        <div className="absolute bottom-32 left-32 w-20 h-20 border border-emerald-300 rounded-lg rotate-12"></div>
        <div className="absolute bottom-16 right-16 w-28 h-28 border border-pink-300 rounded-full"></div>
      </div>
    </div>

    <div className="relative z-10">
      {/* Section Title */}
      <div className="text-center mb-12">
        <div className="mb-6 relative">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-100 mb-2 leading-tight relative">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              SKILLS
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-400/50"></div>
          </h2>
        </div>
        
        <div className="p-6 rounded-xl shadow-2xl backdrop-blur-sm border border-slate-700/50 relative overflow-hidden max-w-3xl mx-auto" style={{
          background: 'linear-gradient(135deg, rgba(15, 32, 39, 0.9) 0%, rgba(32, 58, 67, 0.7) 50%, rgba(44, 83, 100, 0.5) 100%)'
        }}>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400"></div>
          <p className="text-slate-300 text-lg font-medium leading-relaxed relative z-10">
            A collection of my technical skills and expertise honed through various projects and experiences
          </p>
        </div>
      </div>

      {/* Skill Categories */}
      <div className="flex flex-wrap gap-6 lg:gap-8 justify-between">
        {SkillsInfo.map((category, index) => (
          <div
            key={category.title}
            className="w-full sm:w-[48%] mb-8 relative"
          >
            <div className="p-8 rounded-2xl shadow-2xl backdrop-blur-sm border border-slate-700/50 relative overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group" style={{
              background: 'linear-gradient(135deg, rgba(15, 32, 39, 0.8) 0%, rgba(32, 58, 67, 0.6) 50%, rgba(44, 83, 100, 0.4) 100%)'
            }}>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-center relative z-10">
                <span className="bg-gradient-to-r from-slate-100 via-cyan-200 to-slate-100 bg-clip-text text-transparent">
                  {category.title}
                </span>
              </h3>

              {/* Skill Items - 3 per row on larger screens */}
              <Tilt
                key={category.title}
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                perspective={1000}
                scale={1.05}
                transitionSpeed={1000}
                gyroscope={true}
                className="relative z-10"
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex cursor-pointer items-center justify-start gap-2 bg-gradient-to-r from-slate-800/50 to-slate-700/30 border border-slate-600/50 hover:border-cyan-400/50 rounded-2xl py-3 px-3 sm:px-4 text-center overflow-hidden transition-all duration-300 hover:scale-105 group relative backdrop-blur-sm"
                      title={skill.name} // 👈 Shows full name on hover
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="w-6 h-6 sm:w-7 sm:h-7 object-contain flex-shrink-0 relative z-10"
                      />
                      <span className="text-xs sm:text-sm text-slate-300 group-hover:text-cyan-200 truncate max-w-[80px] sm:max-w-[100px] relative z-10 transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </Tilt>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;