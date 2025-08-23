// components/BlurBlob.jsx
import React from 'react';
import PropTypes from 'prop-types';

const BlurBlob = ({ position, size }) => {
  // Destructure position and size with default values
  const { top, left } = position
  const { width, height } = size
    
  return (
    <div
      className="absolute"
      style={{
        top: top,
        left: left,
        width: width,
        height: height,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className="w-full h-full rounded-full opacity-20 blur-3xl animate-pulse"
        style={{
          background: 'linear-gradient(135deg, #22d3ee 0%, #0ea5e9 30%, #3b82f6 60%, #6366f1 100%)',
          animationDuration: '4s',
          animationDelay: Math.random() * 2 + 's'
        }}
      ></div>
      
      {/* Additional layered blur effect for more depth */}
      <div
        className="absolute inset-0 w-full h-full rounded-full opacity-10 blur-2xl animate-pulse"
        style={{
          background: 'radial-gradient(circle, #06b6d4 0%, #0284c7 40%, #7c3aed 100%)',
          animationDuration: '6s',
          animationDelay: Math.random() * 3 + 's',
          transform: 'scale(0.8)'
        }}
      ></div>
    </div>
  );
};

// Define prop types
BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

export default BlurBlob;