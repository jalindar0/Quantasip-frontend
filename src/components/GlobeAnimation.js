import React from "react";

const GlobeAnimation = ({ size = 220 }) => (
  <div style={{ width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <svg width={size} height={size} viewBox="0 0 220 220" style={{ display: 'block' }}>
      {/* Globe (gradient fill) */}
      <defs>
        <radialGradient id="globeGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e0ffe6" />
          <stop offset="70%" stopColor="#7be495" />
          <stop offset="100%" stopColor="#1ca14b" />
        </radialGradient>
      </defs>
      <circle cx="110" cy="110" r="60" fill="url(#globeGradient)" filter="url(#globeShadow)" />
      {/* Continents (abstract shapes) */}
      <ellipse cx="100" cy="100" rx="28" ry="16" fill="#b2f2bb" opacity="0.7" />
      <ellipse cx="130" cy="120" rx="18" ry="10" fill="#a2e6a6" opacity="0.6" />
      <ellipse cx="115" cy="90" rx="10" ry="6" fill="#7be495" opacity="0.5" />
      {/* Rotating Circles */}
      <g style={{ transformOrigin: '110px 110px' }}>
        <circle
          cx="110"
          cy="110"
          r="80"
          fill="none"
          stroke="#b2f2bb"
          strokeWidth="2.5"
          strokeDasharray="12 10"
          style={{ animation: 'orbit1 5s linear infinite' }}
        />
        <circle
          cx="110"
          cy="110"
          r="95"
          fill="none"
          stroke="#7be495"
          strokeWidth="2"
          strokeDasharray="18 14"
          style={{ animation: 'orbit2 8s linear infinite' }}
        />
      </g>
      <filter id="globeShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#b2f2bb" floodOpacity="0.25" />
      </filter>
    </svg>
    <style>{`
      @keyframes orbit1 {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes orbit2 {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(-360deg); }
      }
    `}</style>
  </div>
);

export default GlobeAnimation; 