import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from './components/BlurBlob';

const App = () => {
  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0F2027 0%, #203A43 30%, #2C5364 70%, #0F2027 100%)'
      }}
    >
     /* Multiple BlurBlob components for dynamic background */
      {/* { <BlurBlob position={{ top: '15%', left: '10%' }} size={{ width: '25%', height: '30%' }} /> }
      <BlurBlob position={{ top: '35%', left: '75%' }} size={{ width: '30%', height: '35%' }} /> */}
      {/* <BlurBlob position={{ top: '65%', left: '20%' }} size={{ width: '20%', height: '25%' }} />
      <BlurBlob position={{ top: '85%', left: '80%' }} size={{ width: '35%', height: '40%' }} /> */}
      
      {/* Enhanced grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(34, 211, 238, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(34, 211, 238, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 0%, #000 70%, transparent 100%)'
          }}
        ></div>
      </div>
      
      {/* Additional decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-16 w-20 h-20 border border-cyan-400/20 rounded-lg rotate-45 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-16 h-16 border-2 border-blue-400/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-32 w-24 h-24 border border-purple-400/20 rounded-lg rotate-12 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 right-16 w-28 h-28 border border-cyan-300/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Subtle light rays */}
        <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-cyan-400/40 to-transparent"></div>
        <div className="absolute top-0 right-1/3 w-px h-24 bg-gradient-to-b from-blue-400/30 to-transparent"></div>
        <div className="absolute top-0 left-3/4 w-px h-40 bg-gradient-to-b from-purple-400/20 to-transparent"></div>
      </div>

      {/* Main content wrapper */}
      <div className="relative z-10 pt-20">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>
      
      {/* Bottom gradient overlay for seamless transitions */}
      <div 
        className="fixed bottom-0 left-0 w-full h-32 pointer-events-none z-5"
        style={{
          background: 'linear-gradient(to top, rgba(15, 32, 39, 0.8) 0%, transparent 100%)'
        }}
      ></div>
    </div>
  );
};

export default App;