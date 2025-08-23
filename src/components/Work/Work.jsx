import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans min-h-screen relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)'
      }}
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-cyan-400/20 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-purple-500/15 to-pink-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
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
                PROJECTS
              </span>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-400/50"></div>
            </h2>
          </div>
          
          <div className="p-6 rounded-xl shadow-2xl backdrop-blur-sm border border-slate-700/50 relative overflow-hidden max-w-4xl mx-auto" style={{
            background: 'linear-gradient(135deg, rgba(15, 32, 39, 0.9) 0%, rgba(32, 58, 67, 0.7) 50%, rgba(44, 83, 100, 0.5) 100%)'
          }}>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400"></div>
            <p className="text-slate-300 text-lg font-medium leading-relaxed relative z-10">
              A showcase of the projects I have worked on, highlighting my skills and experience in various technologies
            </p>
          </div>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 auto-rows-fr">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => handleOpenModal(project)}
              className="group relative backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-out hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-400/20 hover:-translate-y-2 animate-fadeIn h-[400px] max-h-[400px] flex flex-col hover:scale-105"
              style={{ 
                animationDelay: `${index * 100}ms`,
                background: 'linear-gradient(135deg, rgba(15, 32, 39, 0.8) 0%, rgba(32, 58, 67, 0.6) 50%, rgba(44, 83, 100, 0.4) 100%)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Project Image - Fixed 16:9 aspect ratio */}
              <div className="relative overflow-hidden rounded-t-2xl flex-shrink-0 h-[180px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full  transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* View Project Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-2xl transform scale-90 group-hover:scale-100 transition-transform duration-300 flex items-center gap-2 border border-cyan-400/30 backdrop-blur-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Project
                  </button>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex flex-col flex-1 p-6 min-h-0 relative z-10">
                {/* Title */}
                <h3 className="text-lg font-bold mb-3 group-hover:text-cyan-300 transition-colors duration-300 leading-tight line-clamp-2">
                  <span className="bg-gradient-to-r from-slate-100 via-cyan-200 to-slate-100 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-blue-300 group-hover:to-cyan-300">
                    {project.title}
                  </span>
                </h3>

                {/* Description */}
                <p className="relative text-slate-300 text-sm leading-[1.6] mb-4 flex-1 group-hover:text-slate-200 transition-colors duration-300 line-clamp-4 overflow-hidden">
                  {project.description}

                  {/* Fade Overlay */}
                  <span className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-slate-800 to-transparent"></span>
                </p>

                <div className="flex-shrink-0 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {/* Show only first 6 tags */}
                    {project.tags && project.tags.slice(0, 6).map((tag, tagIndex) => (
                      <span
                        key={`${project.id}-tag-${tagIndex}`}
                        className="inline-flex items-center text-xs font-semibold rounded-full px-3 py-1.5 border backdrop-blur-sm transition-all duration-300 hover:scale-105 whitespace-nowrap"
                        style={{
                          background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.1) 0%, rgba(0, 212, 255, 0.05) 50%, rgba(0, 153, 204, 0.1) 100%)',
                          borderColor: 'rgba(6, 182, 212, 0.3)',
                          color: '#67e8f9'
                        }}
                      >
                        {tag}
                      </span>
                    ))}

                    {/* If more than 6 tags → show +X */}
                    {project.tags && project.tags.length > 6 && (
                      <span 
                        key={`${project.id}-more`}
                        className="inline-flex items-center text-cyan-300 text-xs font-semibold px-3 py-1.5 rounded-full border border-cyan-400/30 backdrop-blur-sm"
                        style={{
                          background: 'rgba(6, 182, 212, 0.1)'
                        }}
                      >
                        +{project.tags.length - 6}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse shadow-lg shadow-cyan-400/50"></div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
            <div className="rounded-2xl shadow-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden relative flex flex-col border border-slate-700/50" style={{
              background: 'linear-gradient(135deg, rgba(15, 32, 39, 0.95) 0%, rgba(32, 58, 67, 0.9) 50%, rgba(44, 83, 100, 0.95) 100%)'
            }}>
              {/* Close Button - Fixed at top */}
              <div className="absolute top-4 right-4 z-10">
                <button
                  onClick={handleCloseModal}
                  className="backdrop-blur-sm text-white w-10 h-10 rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 flex items-center justify-center text-xl font-bold shadow-lg border border-slate-600/50"
                  style={{
                    background: 'linear-gradient(135deg, rgba(15, 32, 39, 0.8) 0%, rgba(32, 58, 67, 0.6) 100%)'
                  }}
                >
                  ×
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto max-h-[90vh]">
                {/* Project Image Section */}
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                  />
                  {/* Gradient overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/20"></div>
                </div>

                {/* Content Section */}
                <div className="p-6 lg:p-8">
                  {/* Project Title */}
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 pr-12">
                    <span className="bg-gradient-to-r from-slate-100 via-cyan-200 to-slate-100 bg-clip-text text-transparent">
                      {selectedProject.title}
                    </span>
                  </h3>

                  {/* Project Description */}
                  <div className="mb-6">
                    <div className="p-4 rounded-xl backdrop-blur-sm border border-slate-700/50" style={{
                      background: 'linear-gradient(135deg, rgba(15, 32, 39, 0.6) 0%, rgba(32, 58, 67, 0.4) 100%)'
                    }}>
                      <p className="text-slate-300 text-sm lg:text-base leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="mb-6">
                    <h5 className="font-semibold text-slate-200 text-lg mb-3 flex items-center">
                      <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mr-2"></span>
                      Technologies Used
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs lg:text-sm font-semibold rounded-full px-4 py-2 border backdrop-blur-sm transition-all duration-300 hover:scale-105"
                          style={{
                            background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.1) 0%, rgba(0, 212, 255, 0.05) 50%, rgba(0, 153, 204, 0.1) 100%)',
                            borderColor: 'rgba(6, 182, 212, 0.3)',
                            color: '#67e8f9'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 rounded-xl text-sm lg:text-base font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2 border border-slate-600/50 backdrop-blur-sm hover:scale-105 hover:border-slate-500/70"
                      style={{
                        background: 'linear-gradient(135deg, rgba(15, 32, 39, 0.8) 0%, rgba(32, 58, 67, 0.6) 100%)',
                        color: '#e2e8f0'
                      }}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      View Code
                    </a>
                    <a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl text-sm lg:text-base font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 hover:scale-105"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      View Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Work;