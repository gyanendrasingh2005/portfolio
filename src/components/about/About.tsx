import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="space-y-16 md:space-y-20 select-none">
      {/* 1. Sarthak-Style Chapter Header */}
      <div className="section-label">
        <span>01 / THE PERSON BEHIND THE WORK</span>
        <span>A CONNECTED PERSPECTIVE</span>
      </div>

      {/* 2. Asymmetric About Grid: Portrait Card (Left) + Editorial Narrative (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* LEFT COLUMN: Editorial Portrait Card */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative group">
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#ff8c59]/20 via-transparent to-[#f1eee8]/10 blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />

            <div className="relative overflow-hidden rounded-xl border border-[rgba(241,238,232,0.15)] bg-[#080808] shadow-2xl transition-all duration-300 group-hover:border-[rgba(255,140,89,0.4)]">
              {/* Portrait Photo Container */}
              <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] w-full overflow-hidden bg-[#0d0d0d]">
                <img
                  src="/profile.jpg"
                  alt="Gyanendra Singh — Full-Stack Developer & Software Engineer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="eager"
                />
              </div>
            </div>
          </div>

          {/* Quick Credential Highlights Strip */}
          <div className="grid grid-cols-2 gap-2 font-mono text-[11px]">
            <div className="p-2.5 bg-[#080808] border border-[rgba(241,238,232,0.08)] rounded text-center">
              <span className="text-[#ff8c59] block font-semibold">1,400+ Problems</span>
              <span className="text-[9px] text-[#aaa9a4] uppercase">LeetCode / CF / GfG</span>
            </div>
            <div className="p-2.5 bg-[#080808] border border-[rgba(241,238,232,0.08)] rounded text-center">
              <span className="text-[#ff8c59] block font-semibold">1875+ Rating</span>
              <span className="text-[9px] text-[#aaa9a4] uppercase">LeetCode Top 5%</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Editorial Narrative */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#f1eee8] leading-[1.05] tracking-[-0.04em]">
            Technology is<br />
            the starting point.<br />
            <em className="text-[#ff8c59] italic">People are the point.</em>
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#dedad4] font-medium leading-relaxed pt-2">
            I connect full-stack engineering, algorithmic rigor, and technical community leadership.
          </p>

          <p className="font-sans text-sm sm:text-base text-[#aaa9a4] leading-relaxed max-w-xl">
            Currently pursuing my B.Tech in Information Technology at <strong className="text-[#f1eee8] font-medium">KIET Group of Institutions</strong> (2023–2027, CGPA 8.1). I build full-stack systems like <strong className="text-[#f1eee8] font-medium">JobOrbit</strong> (MERN hiring platform with dual RBAC &amp; Cloudinary storage), isolated execution runtimes like <strong className="text-[#f1eee8] font-medium">CodeCore</strong> (Docker-based compiler), and emergency platforms like <strong className="text-[#f1eee8] font-medium">Thriviefy</strong>.
          </p>

          <p className="font-sans text-sm sm:text-base text-[#aaa9a4] leading-relaxed max-w-xl">
            As a Problem Setter at <strong className="text-[#f1eee8] font-medium">KIET Koders Korner (K3)</strong>, I have mentored 50+ students across 10+ DSA workshops, authored problem sets for <strong className="text-[#f1eee8] font-medium">K3 CodeHuddle</strong> (500+ participants), and solved 1,400+ algorithmic challenges. For me, clean code is the discipline needed to build dependable software.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-6">
            <a href="#work" className="text-link">
              <span>Explore my work</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
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
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link text-[#dedad4]"
            >
              <span>View full resume (PDF)</span>
              <span className="text-[#ff8c59] font-mono text-sm" aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Identity Notes */}
          <div className="pt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[9px] md:text-[10px] tracking-[1.4px] text-[#787570] uppercase border-t border-[rgba(241,238,232,0.08)]">
            <span>ENGINEERING RIGOR.</span>
            <span>ARCHITECTURAL CLARITY.</span>
            <span>STUDENT LEADERSHIP.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
