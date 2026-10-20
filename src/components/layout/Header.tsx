import React, { useState, useEffect } from 'react';
import { RESUME_CONFIG } from '../../constants/navigation';
import { ResumeModal } from '../ui/ResumeModal';

export const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [showResumeModal, setShowResumeModal] = useState<boolean>(false);

  // IntersectionObserver to sync navigation destination highlights
  useEffect(() => {
    const sectionIds = ['about', 'work', 'experience', 'leadership', 'contact'];
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Keyboard Escape listener for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Smooth scroll handler
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (targetId === 'top' || targetId === 'about') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('about');
      history.pushState(null, '', '#about');
      return;
    }

    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const headerOffset = 90;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(targetId);
      history.pushState(null, '', `#${targetId}`);
    }
  };

  const handleResumeClick = () => {
    if (RESUME_CONFIG.isAvailable) {
      window.open(RESUME_CONFIG.filePath, '_blank', 'noopener,noreferrer');
    } else {
      setShowResumeModal(true);
    }
  };

  const navLinks = [
    { id: 'work', label: 'Work', href: '#work' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'experience', label: 'Profiles', href: '#experience' },
  ];

  return (
    <>
      <header
        role="banner"
        className="fixed top-4 left-4 right-4 md:left-8 md:right-8 z-50 max-w-[1120px] h-[64px] md:h-[68px] mx-auto px-5 md:px-7 flex items-center justify-between rounded-[20px] md:rounded-[22px] border border-[rgba(231,225,213,0.17)] bg-[linear-gradient(115deg,rgba(238,228,215,0.06),rgba(238,228,215,0.01)_44%,rgba(194,201,214,0.04)),rgba(17,16,15,0.85)] backdrop-blur-xl shadow-[inset_0_1px_rgba(255,255,255,0.1),0_12px_36px_rgba(0,0,0,0.3)] transition-all select-none"
      >
        {/* Brand Identity / Wordmark */}
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, 'top')}
          aria-label="Gyanendra Singh — Homepage"
          className="flex items-center gap-2 text-[#f1eee8] hover:text-[#ff8c59] transition-colors focus-visible:outline-2 focus-visible:outline-[#ff8c59] rounded"
        >
          <span className="font-serif text-[22px] md:text-[25px] tracking-[-0.6px] font-normal">
            Gyanendra Singh
          </span>
        </a>

        {/* Center Desktop Navigation Destinations */}
        <nav
          role="navigation"
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-2"
        >
          {navLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative px-4 py-2 rounded-xl text-xs font-sans tracking-[0.1px] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#ff8c59] ${
                  isActive
                    ? 'text-[#fff5e5] bg-[rgba(233,227,213,0.1)] shadow-[inset_0_1px_rgba(255,255,255,0.08)]'
                    : 'text-[#c9c2b8] hover:text-[#f1eee8] hover:bg-[rgba(233,227,213,0.06)]'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#ff8c59]"
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action: CV & Let's talk */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={handleResumeClick}
            aria-label="Inspect verified resume"
            className="text-xs font-mono tracking-wider text-[#b0aaa2] hover:text-[#ff8c59] transition-colors py-1.5 px-3 rounded-lg focus-visible:outline-2 focus-visible:outline-[#ff8c59]"
          >
            CV ↗
          </button>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="flex items-center gap-2.5 px-4 py-2 rounded-xl border border-[rgba(241,231,213,0.28)] bg-[linear-gradient(140deg,rgba(246,238,227,0.18),rgba(203,191,170,0.07))] hover:bg-[linear-gradient(140deg,rgba(246,238,227,0.28),rgba(203,191,170,0.14))] text-xs font-sans text-[#f4e8d5] hover:text-[#ffffff] shadow-[inset_0_1px_rgba(255,255,255,0.2),0_2px_8px_rgba(0,0,0,0.2)] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#ff8c59]"
          >
            <span>Let's talk</span>
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

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="flex items-center gap-2 px-3 py-1.5 border border-[rgba(241,238,232,0.18)] rounded-lg text-xs font-mono text-[#f1eee8] hover:text-[#ff8c59] hover:border-[#ff8c59] transition-colors"
          >
            <span>{mobileMenuOpen ? 'CLOSE' : 'MENU'}</span>
            <span className="text-[#ff8c59]" aria-hidden="true">{mobileMenuOpen ? '×' : '—'}</span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[80px] z-40 bg-[#080808fa] backdrop-blur-2xl border-b border-[rgba(241,238,232,0.12)] px-6 py-6 md:hidden shadow-2xl transition-all">
          <nav className="flex flex-col space-y-3 font-sans text-sm">
            {navLinks.map((item, idx) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.id)}
                className="flex items-center justify-between py-2 border-b border-[rgba(241,238,232,0.06)] text-[#dedad4] hover:text-[#ff8c59] transition-colors"
              >
                <span className="font-medium">{item.label}</span>
                <span className="font-mono text-xs text-[#787570]">0{idx + 1} ↗</span>
              </a>
            ))}

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="flex items-center justify-between py-2 border-b border-[rgba(241,238,232,0.06)] text-[#ff8c59] font-medium"
            >
              <span>Let's talk</span>
              <span className="font-mono text-xs">04 ↗</span>
            </a>

            <div className="pt-4 flex items-center justify-between">
              <span className="font-mono text-xs text-[#aaa9a4]">Resume & Credentials</span>
              <button
                type="button"
                onClick={handleResumeClick}
                className="px-4 py-1.5 border border-[#ff8c59] text-xs font-mono text-[#ff8c59] rounded hover:bg-[#ff8c59] hover:text-[#030303] transition-colors"
              >
                Inspect CV ↗
              </button>
            </div>
          </nav>
        </div>
      )}

      {/* Resume Modal */}
      <ResumeModal
        isOpen={showResumeModal}
        onClose={() => setShowResumeModal(false)}
      />
    </>
  );
};
