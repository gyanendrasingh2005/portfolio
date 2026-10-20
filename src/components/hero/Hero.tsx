import React, { useState } from 'react';
import { ResumeModal } from '../ui/ResumeModal';

export const Hero: React.FC = () => {
  const [showResumeModal, setShowResumeModal] = useState<boolean>(false);

  const handleExploreWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const workSection = document.getElementById('work');
    if (workSection) {
      const headerOffset = 90;
      const elementPosition = workSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      history.pushState(null, '', '#work');
    }
  };

  return (
    <>
      {/* 1. SCENE BACKDROP WITH EDITORIAL PORTRAIT (MATCHING SARTHAK SHARMA'S EXACT HERO) */}
      <div className="scene-backdrop" aria-hidden="true">
        <div className="artifact-fallback">
          <img
            src="/gyanendra-signal.jpg"
            alt=""
            width={1000}
            height={1250}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>

      {/* 2. HERO FOREGROUND SECTION */}
      <section className="hero-section" id="top">
        {/* Subtle Masked Vertical Lines Grid */}
        <div className="hero-grid" aria-hidden="true" />

        {/* Topline Ticker */}
        <div className="hero-topline">
          <span>
            <i className="live-dot" /> FULL-STACK DEVELOPER · PROBLEM SOLVER
          </span>
          <span className="hidden sm:inline">
            BASED IN DELHI NCR · THINKING BEYOND
          </span>
        </div>

        {/* Center Hero Content (Overlaps Lower Chest of Portrait) */}
        <div className="hero-content">
          <h1 className="hero-title">
            Gyanendra <em>Singh</em>
          </h1>

          <div className="hero-description">
            <p>
              I build products, develop robust systems,<br className="hidden sm:inline" /> and solve complex algorithmic problems.
            </p>

            <div className="hero-actions">
              <a
                className="pill-link"
                href="#work"
                onClick={handleExploreWork}
                aria-label="Explore my work"
              >
                <span>Explore my work</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 5v14" />
                  <path d="m19 12-7 7-7-7" />
                </svg>
              </a>

              <a
                className="text-link"
                href="#contact"
                aria-label="Start a conversation"
              >
                <span>Start a conversation</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </a>

              <a
                className="text-link"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Resume PDF"
              >
                <span>CV (PDF)</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Resume Modal */}
      <ResumeModal
        isOpen={showResumeModal}
        onClose={() => setShowResumeModal(false)}
      />
    </>
  );
};
