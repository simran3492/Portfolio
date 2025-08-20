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
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 auto-rows-fr">
        {projects.map((project, index) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="group relative bg-gray-800/40 backdrop-blur-sm border border-gray-700/30 rounded-[1.25rem] overflow-hidden cursor-pointer transition-all duration-500 ease-out hover:bg-gray-800/60 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 animate-fadeIn h-[400px] max-h-[400px] flex flex-col"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Project Image - Fixed 16:9 aspect ratio */}
            <div className="relative overflow-hidden rounded-t-[1.25rem] flex-shrink-0 h-[180px]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* View Project Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View Project
                </button>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-1 p-5 min-h-0">
              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300 leading-tight line-clamp-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="relative text-gray-300 text-sm leading-[1.5] mb-4 flex-1 group-hover:text-gray-200 transition-colors duration-300 line-clamp-4 overflow-hidden">
                {project.description}

                {/* Fade Overlay */}
                <span className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-gray-900 to-transparent"></span>
              </p>



<div className="flex-shrink-0 mt-auto">
  <div className="flex flex-wrap gap-1.5">
    {/* Show only first 6 tags */}
    {project.tags && project.tags.slice(0, 6).map((tag, tagIndex) => (
      <span
        key={`${project.id}-tag-${tagIndex}`}
        className="inline-flex items-center bg-gradient-to-r from-purple-600/20 to-purple-700/20 text-purple-200 text-xs font-medium rounded-full px-2.5 py-1 border border-purple-500/20 backdrop-blur-sm transition-all duration-300 hover:from-purple-600/30 hover:to-purple-700/30 hover:text-purple-100 hover:scale-105 whitespace-nowrap"
      >
        {tag}
      </span>
    ))}

    {/* If more than 6 tags → show +X */}
    {project.tags && project.tags.length > 6 && (
      <span 
        key={`${project.id}-more`}
        className="inline-flex items-center text-purple-300 text-xs font-medium px-2 py-1 bg-purple-600/10 rounded-full border border-purple-500/20"
      >
        +{project.tags.length - 6}
      </span>
    )}
  </div>
</div>


            </div>

            {/* Glow Border Effect */}
            <div className="absolute inset-0 rounded-[1.25rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 rounded-[1.25rem] bg-gradient-to-r from-purple-500/20 via-purple-600/20 to-purple-700/20 blur-sm"></div>
            </div>

            {/* Corner Accent */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
          </div>



        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden relative flex flex-col">
            {/* Close Button - Fixed at top */}
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={handleCloseModal}
                className="bg-gray-800/80 backdrop-blur-sm text-white w-10 h-10 rounded-full hover:bg-purple-600 transition-all duration-300 flex items-center justify-center text-xl font-bold shadow-lg"
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
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-gray-900/20"></div>
              </div>

              {/* Content Section */}
              <div className="p-6 lg:p-8">
                {/* Project Title */}
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 pr-12">
                  {selectedProject.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-300 mb-6 text-sm lg:text-base leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-purple-600/20 to-purple-700/20 text-purple-200 text-xs lg:text-sm font-medium rounded-full px-3 py-1.5 border border-purple-500/20 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl text-sm lg:text-base font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2"
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
                    className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-3 rounded-xl text-sm lg:text-base font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2"
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
    </section>
  );
};

export default Work;
