import React, { useState, useEffect } from 'react';

export const MotionToggle: React.FC = () => {
  const [motionEnabled, setMotionEnabled] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    const saved = localStorage.getItem('gs_portfolio_motion');
    if (saved !== null) {
      return saved === 'true';
    }
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return !prefersReduced;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-motion', motionEnabled ? 'on' : 'off');
  }, [motionEnabled]);

  const toggleMotion = () => {
    const nextState = !motionEnabled;
    setMotionEnabled(nextState);
    localStorage.setItem('gs_portfolio_motion', String(nextState));
  };

  return (
    <button
      type="button"
      onClick={toggleMotion}
      aria-label={motionEnabled ? 'Disable animations (Motion off)' : 'Enable animations (Motion on)'}
      aria-pressed={!motionEnabled}
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 px-3 py-1.5 text-[10px] font-mono tracking-wider uppercase bg-[#0e0e0ee8] backdrop-blur-md border border-[rgba(241,238,232,0.12)] hover:border-[#ff8c59] text-[#c6c6c6] hover:text-[#f1eee8] rounded transition-all duration-200 select-none shadow-lg focus-visible:outline-2 focus-visible:outline-[#ff8c59]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="11"
        height="11"
        viewBox="0 0 24 24"
        fill={motionEnabled ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={motionEnabled ? 'text-[#ff8c59]' : 'text-gray-400'}
        aria-hidden="true"
      >
        {motionEnabled ? (
          <polygon points="6 3 20 12 6 21 6 3" />
        ) : (
          <rect x="6" y="4" width="4" height="16" />
        )}
      </svg>
      <span>MOTION {motionEnabled ? 'ON' : 'OFF'}</span>
    </button>
  );
};
