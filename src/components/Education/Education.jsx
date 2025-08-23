import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
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
                EDUCATION
              </span>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-400/50"></div>
            </h2>
          </div>
          
          <div className="p-6 rounded-xl shadow-2xl backdrop-blur-sm border border-slate-700/50 relative overflow-hidden max-w-4xl mx-auto" style={{
            background: 'linear-gradient(135deg, rgba(15, 32, 39, 0.9) 0%, rgba(32, 58, 67, 0.7) 50%, rgba(44, 83, 100, 0.5) 100%)'
          }}>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400"></div>
            <p className="text-slate-300 text-lg font-medium leading-relaxed relative z-10">
              My education has been a journey of learning and development. Here are the details of my academic background
            </p>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-gradient-to-b from-cyan-400 via-blue-400 to-purple-400 h-full shadow-lg shadow-cyan-400/30 rounded-full"></div>

          {/* Education Entries */}
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className={`flex flex-col sm:flex-row items-center mb-16 ${
                index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-4 border-slate-800 shadow-lg shadow-cyan-400/50 z-20"></div>
              
              {/* Content Section */}
              <div
                className={`w-full sm:max-w-md p-6 sm:p-8 rounded-2xl shadow-2xl backdrop-blur-sm border border-slate-700/50 relative overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 group ${
                  index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
                } sm:ml-44 sm:mr-44 ml-8`}
                style={{
                  background: 'linear-gradient(135deg, rgba(15, 32, 39, 0.8) 0%, rgba(32, 58, 67, 0.6) 50%, rgba(44, 83, 100, 0.4) 100%)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Flex container for image and text */}
                <div className="flex items-center space-x-6 mb-4 relative z-10">
                  {/* School Logo/Image */}
                  <div className="w-24 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/10 rounded-xl overflow-hidden border-2 border-slate-600/50 shadow-lg relative flex-shrink-0">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-transparent"></div>
                  </div>

                  {/* Degree, School Name, and Date */}
                  <div className="flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-xl sm:text-xl font-bold mb-2">
                        <span className="bg-gradient-to-r from-slate-100 via-cyan-200 to-slate-100 bg-clip-text text-transparent">
                          {edu.degree}
                        </span>
                      </h3>
                      <h4 className="text-md sm:text-sm text-slate-300 font-semibold mb-2">
                        {edu.school}
                      </h4>
                    </div>
                    {/* Date at the bottom */}
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm border border-slate-600/50 w-fit" style={{
                      background: 'linear-gradient(135deg, rgba(15, 32, 39, 0.6) 0%, rgba(32, 58, 67, 0.4) 100%)'
                    }}>
                      <span className="text-cyan-400">{edu.date}</span>
                    </div>
                  </div>
                </div>

                {/* Grade Section */}
                <div className="mb-4 relative z-10">
                  <div className="inline-flex items-center px-4 py-2 rounded-full backdrop-blur-sm border border-slate-600/50" style={{
                    background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.1) 0%, rgba(0, 212, 255, 0.05) 50%, rgba(0, 153, 204, 0.1) 100%)'
                  }}>
                    <span className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mr-2"></span>
                    <span className="text-slate-200 font-semibold text-sm">Grade: </span>
                    <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent font-bold ml-1">{edu.grade}</span>
                  </div>
                </div>

                {/* Description */}
                <div className="relative z-10">
                  <div className="p-4 rounded-xl backdrop-blur-sm border border-slate-700/50" style={{
                    background: 'linear-gradient(135deg, rgba(15, 32, 39, 0.6) 0%, rgba(32, 58, 67, 0.4) 100%)'
                  }}>
                    <p className="text-slate-300 text-base leading-relaxed">{edu.desc}</p>
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

export default Education;