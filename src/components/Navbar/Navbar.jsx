import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled 
          ? "backdrop-blur-md shadow-2xl border-b border-slate-700/50" 
          : "backdrop-blur-sm"
      }`}
      style={{
        background: isScrolled 
          ? 'linear-gradient(135deg, rgba(15, 32, 39, 0.95) 0%, rgba(32, 58, 67, 0.85) 50%, rgba(44, 83, 100, 0.75) 100%)'
          : 'linear-gradient(135deg, rgba(15, 32, 39, 0.8) 0%, rgba(32, 58, 67, 0.6) 50%, rgba(44, 83, 100, 0.4) 100%)'
      }}
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-2 left-10 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-blue-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-2 right-10 w-40 h-40 bg-gradient-to-tl from-purple-500/10 to-pink-400/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="text-white py-5 flex justify-between items-center relative z-10">
        {/* Logo */}
        <div className="text-xl font-bold cursor-pointer group relative">
          <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">&lt;</span>
          <span className="bg-gradient-to-r from-slate-100 via-cyan-200 to-slate-100 bg-clip-text text-transparent group-hover:from-cyan-200 group-hover:via-slate-100 group-hover:to-cyan-200 transition-all duration-300">
            Simran
          </span>
          <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">&gt;</span>
          
          {/* Subtle glow effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/0 via-cyan-400/20 to-cyan-500/0 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300 -z-10"></div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <li key={item.id} className="relative">
              <button 
                onClick={() => handleMenuItemClick(item.id)}
                className={`cursor-pointer px-3 py-2 rounded-lg transition-all duration-300 relative overflow-hidden group ${
                  activeSection === item.id 
                    ? "text-cyan-300" 
                    : "text-slate-300 hover:text-cyan-200"
                }`}
              >
                {/* Background hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-400/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                
                <span className="relative z-10 font-medium">
                  {item.label}
                </span>
                
                {/* Active indicator */}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full shadow-sm shadow-cyan-400/50"></div>
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/simran3492"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-300 hover:text-cyan-300 transition-all duration-300 relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            <FaGithub size={20} className="relative z-10" />
          </a>
          
          <a
            href="https://www.linkedin.com/in/simran-nayak-008639290/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-300 hover:text-cyan-300 transition-all duration-300 relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            <FaLinkedin size={20} className="relative z-10" />
          </a>
          
          <a
            href="https://leetcode.com/u/Simran_Nayak/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:scale-110 transition-all duration-300 relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            <img
              src="https://assets.leetcode.com/static_assets/public/images/LeetCode_logo_rvs.png"
              alt="LeetCode"
              className="w-5 h-5 relative z-10 filter brightness-90 group-hover:brightness-110 transition-all duration-300"
            />
          </a>
          
          <a
            href="https://www.geeksforgeeks.org/user/simrannapnw6/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:scale-110 transition-all duration-300 relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/GeeksForGeeks_logo.png/1280px-GeeksForGeeks_logo.png"
              alt="GFG"
              className="w-4 h-4 relative z-10 filter brightness-90 group-hover:brightness-110 transition-all duration-300"
            />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <div className="p-2 rounded-lg relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-100 rounded-lg"></div>
              <FiX
                className="text-2xl text-cyan-300 cursor-pointer relative z-10"
                onClick={() => setIsOpen(false)}
              />
            </div>
          ) : (
            <div className="p-2 rounded-lg relative group hover:scale-110 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              <FiMenu
                className="text-2xl text-cyan-400 cursor-pointer relative z-10"
                onClick={() => setIsOpen(true)}
              />
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div 
          className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 backdrop-blur-md z-50 rounded-2xl shadow-2xl md:hidden border border-slate-700/50 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(15, 32, 39, 0.95) 0%, rgba(32, 58, 67, 0.85) 50%, rgba(44, 83, 100, 0.75) 100%)'
          }}
        >
          {/* Top gradient line */}
          <div className="w-full h-0.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400"></div>
          
          {/* Background effects */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute top-2 left-4 w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-2 right-4 w-20 h-20 bg-gradient-to-tl from-purple-500/20 to-pink-400/10 rounded-full blur-xl"></div>
          </div>
          
          <ul className="flex flex-col items-center space-y-3 py-6 text-slate-300 relative z-10">
            {menuItems.map((item) => (
              <li key={item.id} className="w-full px-4">
                <button 
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`w-full py-3 px-4 rounded-xl transition-all duration-300 relative overflow-hidden group ${
                    activeSection === item.id 
                      ? "text-cyan-300" 
                      : "text-slate-300 hover:text-cyan-200"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-400/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  <span className="relative z-10 font-medium">
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
            
            {/* Social Icons for Mobile */}
            <div className="flex space-x-6 pt-4 border-t border-slate-700/50 mt-4">
              <a
                href="https://github.com/simran3492"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg text-slate-300 hover:text-cyan-300 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                <FaGithub size={20} className="relative z-10" />
              </a>
              
              <a
                href="https://www.linkedin.com/in/simran-nayak-008639290/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg text-slate-300 hover:text-cyan-300 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                <FaLinkedin size={20} className="relative z-10" />
              </a>
              
              <a
                href="https://leetcode.com/u/Simran_Nayak/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg hover:scale-110 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                <img
                  src="https://assets.leetcode.com/static_assets/public/images/LeetCode_logo_rvs.png"
                  alt="LeetCode"
                  className="w-5 h-5 relative z-10 filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                />
              </a>
              
              <a
                href="https://www.geeksforgeeks.org/user/simrannapnw6/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg hover:scale-110 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/GeeksForGeeks_logo.png/1280px-GeeksForGeeks_logo.png"
                  alt="GFG"
                  className="w-4 h-4 relative z-10 filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;