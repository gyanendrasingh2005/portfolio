import React from 'react';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const handleBackToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.pushState(null, '', '#top');
  };

  const socials = [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/gyanendra-singh-844518294' },
    { label: 'Twitter', href: 'https://x.com/GyanendraS94971' },
    { label: 'Instagram', href: 'https://www.instagram.com/gyanendra_singh__18/' },
    { label: 'Email', href: 'mailto:gyanendra2005gs@gmail.com' },
    { label: 'GitHub', href: 'https://github.com/gyanendrasingh2005' },
  ];

  return (
    <footer
      role="contentinfo"
      aria-label="Site Footer"
      className="w-full bg-[#030303] text-[#dedad4] border-t border-[rgba(241,238,232,0.12)] pt-16 pb-12 transition-colors select-none"
    >
      <div className="layout-container space-y-12">
        {/* Main Footer Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          {/* Brand Name */}
          <a
            href="#top"
            onClick={handleBackToTop}
            aria-label="Gyanendra Singh — Back to top"
            className="font-serif text-3xl sm:text-4xl text-[#f1eee8] hover:text-[#ff8c59] transition-colors focus-visible:outline-2 focus-visible:outline-[#ff8c59]"
          >
            Gyanendra Singh<span className="text-[#ff8c59]">.</span>
          </a>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-6 font-sans text-xs">
            {socials.map((s) => {
              const isMail = s.href.startsWith('mailto:');
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={isMail ? undefined : '_blank'}
                  rel={isMail ? undefined : 'noopener noreferrer'}
                  className="text-[#aaa9a4] hover:text-[#ff8c59] transition-colors flex items-center gap-1"
                >
                  <span>{s.label}</span>
                  <span className="text-[10px] font-mono" aria-hidden="true">↗</span>
                </a>
              );
            })}
          </div>

          {/* Back to Top Round Button */}
          <button
            type="button"
            onClick={handleBackToTop}
            aria-label="Back to top of page"
            className="w-10 h-10 rounded-full border border-[rgba(241,238,232,0.2)] hover:border-[#ff8c59] text-[#f1eee8] hover:text-[#ff8c59] flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-[#ff8c59]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m5 12 7-7 7 7" />
              <path d="M12 19V5" />
            </svg>
          </button>
        </div>

        {/* Footer Bottom Metadata Strip */}
        <div className="pt-8 border-t border-[rgba(241,238,232,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[9px] sm:text-[10px] text-[#787570] uppercase tracking-wider text-center sm:text-left">
          <span>© {CURRENT_YEAR} GYANENDRA SINGH</span>
          <span className="hidden md:inline">BUILT WITH INTENT. ALWAYS EVOLVING.</span>
          <span className="text-[#aaa9a4]">DELHI NCR, INDIA ↗ THE WORLD</span>
        </div>
      </div>
    </footer>
  );
};
