import React from "react";
import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
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
        <div className="text-center mb-16">
          <div className="mb-6 relative">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-100 mb-2 leading-tight relative">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                EXPERIENCE
              </span>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-400/50"></div>
            </h2>
          </div>
          
          <div className="p-6 rounded-xl shadow-2xl backdrop-blur-sm border border-slate-700/50 relative overflow-hidden max-w-3xl mx-auto" style={{
            background: 'linear-gradient(135deg, rgba(15, 32, 39, 0.9) 0%, rgba(32, 58, 67, 0.7) 50%, rgba(44, 83, 100, 0.5) 100%)'
          }}>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400"></div>
            <p className="text-slate-300 text-lg font-medium leading-relaxed relative z-10">
              My professional journey and experiences that have shaped my development career
            </p>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="flex flex-col items-center space-y-12">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className="w-full max-w-2xl group relative"
            >
              {/* Timeline Connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full w-px h-12 bg-gradient-to-b from-cyan-400/50 to-transparent"></div>
              )}
              
              <div className="p-8 rounded-2xl shadow-2xl backdrop-blur-sm border border-slate-700/50 relative overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:scale-105" style={{
                background: 'linear-gradient(135deg, rgba(15, 32, 39, 0.8) 0%, rgba(32, 58, 67, 0.6) 50%, rgba(44, 83, 100, 0.4) 100%)'
              }}>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Top: Logo + Role */}
                <div className="flex items-start space-x-6 mb-6 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/10 rounded-xl overflow-hidden border-2 border-slate-600/50 shadow-lg relative">
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-transparent"></div>
                  </div>
                  
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">
                      <span className="bg-gradient-to-r from-slate-100 via-cyan-200 to-slate-100 bg-clip-text text-transparent">
                        {experience.role}
                      </span>
                    </h3>
                    <h4 className="text-lg text-slate-300 font-semibold mb-1">{experience.company}</h4>
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm border border-slate-600/50" style={{
                      background: 'linear-gradient(135deg, rgba(15, 32, 39, 0.6) 0%, rgba(32, 58, 67, 0.4) 100%)'
                    }}>
                      <span className="text-cyan-400">{experience.date}</span>
                    </div>
                  </div>
                </div>

                {/* Middle: Description */}
                <div className="mb-6 relative z-10">
                  <div className="p-4 rounded-xl backdrop-blur-sm border border-slate-700/50" style={{
                    background: 'linear-gradient(135deg, rgba(15, 32, 39, 0.6) 0%, rgba(32, 58, 67, 0.4) 100%)'
                  }}>
                    <p className="text-slate-300 text-base leading-relaxed">{experience.desc}</p>
                  </div>
                </div>

                {/* Bottom: Skills */}
                <div className="relative z-10">
                  <h5 className="font-semibold text-slate-200 text-lg mb-3 flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mr-2"></span>
                    Technologies & Skills
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="group/skill relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 cursor-default border border-slate-600/50 backdrop-blur-sm"
                        style={{
                          background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.1) 0%, rgba(0, 212, 255, 0.05) 50%, rgba(0, 153, 204, 0.1) 100%)'
                        }}
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-purple-500/20 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 rounded-full"></span>
                        <span className="relative z-10 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent font-semibold">
                          {skill}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;