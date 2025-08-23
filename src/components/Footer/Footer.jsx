import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer 
      className="text-white py-16 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)'
      }}
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-cyan-400/15 to-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-tl from-purple-500/10 to-pink-400/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-emerald-400/15 to-cyan-300/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
        
        {/* Geometric Grid Pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-8 left-8 w-16 h-16 border border-cyan-300 rounded-lg rotate-45"></div>
          <div className="absolute top-16 right-16 w-12 h-12 border border-purple-400 rounded-full"></div>
          <div className="absolute bottom-16 left-16 w-14 h-14 border border-emerald-300 rounded-lg rotate-12"></div>
          <div className="absolute bottom-8 right-8 w-18 h-18 border border-pink-300 rounded-full"></div>
        </div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        {/* Name / Logo */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Simran
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto shadow-lg shadow-cyan-400/50"></div>
          <p className="text-slate-300 mt-3 font-medium">Full Stack Developer & Gen AI Enthusiast</p>
        </div>

        {/* Navigation Links - Responsive */}
        <nav className="mb-8">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {[
              { name: "About", id: "about" },
              { name: "Skills", id: "skills" },
              { name: "Experience", id: "experience" },
              { name: "Projects", id: "work" },
              { name: "Education", id: "education" },
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => handleScroll(item.id)}
                className="group relative px-4 py-2 text-sm sm:text-base font-medium text-slate-300 hover:text-cyan-300 transition-all duration-300 rounded-lg backdrop-blur-sm border border-slate-700/50 hover:border-cyan-400/50 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, rgba(15, 32, 39, 0.6) 0%, rgba(32, 58, 67, 0.4) 100%)'
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
                <span className="relative z-10">{item.name}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">
            <span className="bg-gradient-to-r from-slate-100 via-cyan-200 to-slate-100 bg-clip-text text-transparent">
              Connect With Me
            </span>
          </h3>
          <div className="flex justify-center space-x-6">
            {[
              { icon: <FaTwitter />, link: "https://x.com/@_simran_03", color: "from-blue-400 to-blue-600" },
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/simran-nayak-008639290/", color: "from-blue-500 to-blue-700" },
              { icon: <FaInstagram />, link: "https://www.instagram.com/_simran.0306/", color: "from-pink-400 to-purple-600" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 rounded-full backdrop-blur-sm border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/25 flex items-center justify-center text-xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(15, 32, 39, 0.6) 0%, rgba(32, 58, 67, 0.4) 100%)'
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
                <span className="relative z-10 text-slate-300 group-hover:text-cyan-300 transition-colors duration-300">
                  {item.icon}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mb-6">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
        </div>

        {/* Copyright Text */}
        <div className="space-y-2">
          <p className="text-sm text-slate-400 font-medium">
            © 2025 Simran. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Built with ❤️ using React & Modern Web Technologies
          </p>
        </div>

        {/* Scroll to Top Button */}
        <div className="mt-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group inline-flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-sm border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/25"
            style={{
              background: 'linear-gradient(135deg, rgba(15, 32, 39, 0.6) 0%, rgba(32, 58, 67, 0.4) 100%)'
            }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
            <svg 
              className="w-5 h-5 text-slate-300 group-hover:text-cyan-300 transition-colors duration-300 relative z-10" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
          <p className="text-xs text-slate-500 mt-2">Back to Top</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;