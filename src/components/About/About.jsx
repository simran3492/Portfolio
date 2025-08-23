import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/simran.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="py-8 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32 min-h-screen relative overflow-hidden"
      style={{
        background: 'transparent'
      }}
    >
      {/* Subtle Background Elements - More Transparent */}
      <div className="absolute inset-0 overflow-hidden">
        {/* More Subtle Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-cyan-400/5 to-blue-500/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-purple-500/4 to-pink-400/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-emerald-400/5 to-cyan-300/4 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Very Subtle Geometric Grid Pattern */}
        <div className="absolute inset-0 opacity-2">
          <div className="absolute top-16 left-16 w-24 h-24 border border-cyan-300/20 rounded-lg rotate-45"></div>
          <div className="absolute top-32 right-32 w-16 h-16 border-2 border-purple-400/20 rounded-full"></div>
          <div className="absolute bottom-32 left-32 w-20 h-20 border border-emerald-300/20 rounded-lg rotate-12"></div>
          <div className="absolute bottom-16 right-16 w-28 h-28 border border-pink-300/20 rounded-full"></div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between items-center relative z-10">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <div className="mb-6 relative">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mb-2 leading-tight relative">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Hi, I am
              </span>
              <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-400/50"></div>
            </h1>
          </div>
          
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight relative">
            <span className="bg-gradient-to-r from-slate-100 via-cyan-200 to-slate-100 bg-clip-text text-transparent drop-shadow-lg">
              Simran
            </span>
            <div className="absolute -bottom-3 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent rounded-full"></div>
          </h2>
          
          {/* Skills Heading with Typing Effect */}
          <div className="mb-8 p-6 rounded-2xl border border-slate-700/30 shadow-2xl backdrop-blur-sm relative overflow-hidden" style={{
            background: 'rgba(15, 32, 39, 0.3)'
          }}>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5 rounded-2xl"></div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight relative z-10">
              <span className="text-slate-200">I am a </span>
              <ReactTypingEffect
                text={[
                  'Fullstack Developer',
                  'Gen AI Enthusiast',
                  'Problem Solver',
                  'Coder',
                ]}
                speed={100}
                eraseSpeed={50}
                typingDelay={500}
                eraseDelay={2000}
                cursorRenderer={(cursor) => (
                  <span className="text-cyan-400">{cursor}</span>
                )}
                className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-bold"
              />
            </h3>
          </div>
          
          {/* About Me Paragraph */}
          <div className="mb-10">
            <div className="p-6 rounded-xl shadow-2xl backdrop-blur-sm border border-slate-700/30 relative overflow-hidden" style={{
              background: 'rgba(15, 32, 39, 0.4)'
            }}>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400"></div>
              <p className="text-base sm:text-lg md:text-lg text-slate-300 leading-relaxed relative z-10">
                I'm a full-stack web developer driven by a passion for building dynamic, scalable, and user-friendly applications. Proficient in the MERN stack, I enjoy crafting seamless frontend experiences and robust backend systems. Beyond development, I actively enhance my problem-solving abilities through platforms like LeetCode and GeeksforGeeks, where I practice algorithms and data structures to strengthen my approach to real-world challenges.
              </p>
            </div>
          </div>
          
          {/* Resume Button */}
          <div className="text-center md:text-left mb-10">
            <a
              href="https://drive.google.com/file/d/1V-d41RndqnA8YBwEHUXNoSb6zpRK-8jd/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center text-slate-900 py-4 px-10 rounded-full text-lg font-bold transition-all duration-500 transform hover:scale-105 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #00f5ff 0%, #00d4ff 50%, #0099cc 100%)',
                boxShadow: '0 20px 40px rgba(0, 245, 255, 0.3), 0 0 20px rgba(0, 245, 255, 0.2)',
              }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 transition-all duration-700 translate-x-[-200%] group-hover:translate-x-[200%]"></span>
              <svg className="w-5 h-5 mr-3 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="relative z-10">DOWNLOAD CV</span>
            </a>
          </div>
          
          {/* Professional Stats */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            <div className="group text-center p-6 rounded-xl shadow-xl backdrop-blur-sm border border-slate-700/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 relative overflow-hidden" style={{
              background: 'rgba(15, 32, 39, 0.3)'
            }}>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent relative z-10">MERN</div>
              <div className="text-sm text-slate-400 font-medium relative z-10">Stack</div>
            </div>
            
            <div className="group text-center p-6 rounded-xl shadow-xl backdrop-blur-sm border border-slate-700/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 relative overflow-hidden" style={{
              background: 'rgba(15, 32, 39, 0.3)'
            }}>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative z-10">Gen AI</div>
              <div className="text-sm text-slate-400 font-medium relative z-10">Enthusiast</div>
            </div>
            
            <div className="group text-center p-6 rounded-xl shadow-xl backdrop-blur-sm border border-slate-700/30 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 relative overflow-hidden" style={{
              background: 'rgba(15, 32, 39, 0.3)'
            }}>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent relative z-10">DSA</div>
              <div className="text-sm text-slate-400 font-medium relative z-10">Problem Solver</div>
            </div>
          </div>
        </div>
        
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end relative">
          {/* Subtle Background Elements */}
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-cyan-400/10 to-transparent rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-gradient-to-tl from-purple-500/8 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          
          <div className="relative">
            {/* Professional Badge */}
            <div className="absolute -top-6 -left-6 z-20 px-4 py-2 rounded-full text-sm font-semibold shadow-2xl backdrop-blur-sm border border-cyan-400/30" style={{
              background: 'rgba(15, 32, 39, 0.6)'
            }}>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-bold">
                Full Stack Developer
              </span>
            </div>
            
            <Tilt
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] relative"
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              {/* Professional Frame */}
              <div className="absolute inset-0 rounded-full p-1 shadow-2xl" style={{
                background: 'linear-gradient(135deg, #00f5ff 0%, #00d4ff 25%, #0099cc 50%, #667eea 75%, #764ba2 100%)'
              }}>
                <div className="absolute inset-0 rounded-full blur-md opacity-30" style={{
                  background: 'linear-gradient(135deg, #00f5ff, #00d4ff, #667eea, #764ba2)'
                }}></div>
                <img
                  src={profileImage}
                  alt="Simran"
                  className="w-full h-full rounded-full object-cover relative z-10 border-4 border-slate-800/50 shadow-2xl"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
              <div className="absolute bottom-6 left-6 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/3 right-2 w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-300 rounded-full animate-pulse shadow-lg shadow-emerald-400/50" style={{animationDelay: '2s'}}></div>
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;