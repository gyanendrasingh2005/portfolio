import React, { useState } from 'react';

export const JobOrbitPreview: React.FC = () => {
  const [role, setRole] = useState<'candidate' | 'recruiter'>('candidate');
  const [bookmarked, setBookmarked] = useState<boolean>(false);
  const [applied, setApplied] = useState<boolean>(false);

  return (
    <div
      className="w-full bg-[#080808] border border-[rgba(241,238,232,0.12)] rounded-xl p-5 sm:p-6 space-y-4 shadow-2xl select-none font-mono text-xs text-[#dedad4]"
      role="region"
      aria-label="JobOrbit MERN Portal Interactive UI Preview"
    >
      {/* Top Application Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-[rgba(241,238,232,0.08)]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-[#333]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#444]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff8c59]" />
          </div>
          <span className="font-serif font-bold text-sm text-[#f1eee8] tracking-tight ml-1">
            JobOrbit
          </span>
          <span className="text-[rgba(241,238,232,0.2)]">/</span>
          <span className="text-[10px] text-[#aaa9a4] uppercase tracking-wider">
            MERN Job Portal
          </span>
        </div>

        {/* Dual Role Selector Switcher */}
        <div className="flex items-center gap-1 bg-[#121212] p-1 rounded-md border border-[rgba(241,238,232,0.1)]">
          <button
            type="button"
            onClick={() => setRole('candidate')}
            className={`px-2 py-0.5 rounded text-[10px] font-sans tracking-wide transition-colors ${
              role === 'candidate'
                ? 'bg-[#ff8c59] text-[#030303] font-semibold'
                : 'text-[#aaa9a4] hover:text-[#f1eee8]'
            }`}
          >
            Candidate View
          </button>
          <button
            type="button"
            onClick={() => setRole('recruiter')}
            className={`px-2 py-0.5 rounded text-[10px] font-sans tracking-wide transition-colors ${
              role === 'recruiter'
                ? 'bg-[#ff8c59] text-[#030303] font-semibold'
                : 'text-[#aaa9a4] hover:text-[#f1eee8]'
            }`}
          >
            Recruiter View
          </button>
        </div>
      </div>

      {role === 'candidate' ? (
        /* CANDIDATE VIEW */
        <div className="space-y-3">
          {/* Search & Filter Mockup */}
          <div className="p-3 bg-[#0d0d0d] border border-[rgba(241,238,232,0.08)] rounded-lg space-y-2">
            <div className="flex items-center justify-between text-[11px] text-[#aaa9a4]">
              <span className="flex items-center gap-2">
                <span className="text-[#ff8c59]">🔍</span>
                <span>Role: Full-Stack Engineer (MERN)</span>
              </span>
              <span className="text-[10px] font-mono text-[#22c55e]">18 Matching Jobs</span>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {['Remote / Hybrid', 'React.js', 'Node.js', 'MongoDB', 'Full-Time'].map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 bg-[#171717] text-[10px] text-[#aaa9a4] rounded border border-[rgba(241,238,232,0.06)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Job Card */}
          <div className="p-4 bg-[#0d0d0d] border border-[rgba(255,140,89,0.3)] rounded-lg space-y-3 relative">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#ff8c59] block">
                  FEATURED OPENING
                </span>
                <h4 className="font-serif text-lg text-[#f1eee8] font-normal">
                  Full-Stack MERN Developer
                </h4>
                <p className="font-sans text-xs text-[#aaa9a4]">
                  CloudScale Systems · Ghaziabad / Delhi NCR (Hybrid)
                </p>
              </div>
              <button
                type="button"
                onClick={() => setBookmarked(!bookmarked)}
                className={`p-1.5 rounded border text-xs transition-colors ${
                  bookmarked
                    ? 'border-[#ff8c59] text-[#ff8c59] bg-[#ff8c59]/10'
                    : 'border-[rgba(241,238,232,0.15)] text-[#aaa9a4] hover:text-[#f1eee8]'
                }`}
                title="Bookmark this job"
              >
                {bookmarked ? '★ Saved' : '☆ Bookmark'}
              </button>
            </div>

            <div className="pt-2 border-t border-[rgba(241,238,232,0.06)] flex items-center justify-between text-[11px]">
              <div className="flex items-center gap-2 text-[#aaa9a4]">
                <span className="text-[#22c55e]">●</span>
                <span>Cloudinary Resume Ready (PDF)</span>
              </div>
              <button
                type="button"
                onClick={() => setApplied(true)}
                className={`px-3 py-1 rounded text-xs font-sans transition-all ${
                  applied
                    ? 'bg-[#22c55e] text-[#030303] font-semibold'
                    : 'bg-[#ff8c59] text-[#030303] font-semibold hover:bg-[#ffa073]'
                }`}
              >
                {applied ? '✓ Application Submitted' : '1-Click Apply ↗'}
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* RECRUITER VIEW */
        <div className="space-y-3">
          {/* Recruiter Metrics */}
          <div className="grid grid-cols-3 gap-2">
            <div className="p-2.5 bg-[#0d0d0d] border border-[rgba(241,238,232,0.08)] rounded space-y-0.5">
              <span className="text-[9px] uppercase tracking-wider text-[#aaa9a4] block">Openings</span>
              <span className="font-serif text-lg text-[#f1eee8]">3 Active</span>
            </div>
            <div className="p-2.5 bg-[#0d0d0d] border border-[rgba(241,238,232,0.08)] rounded space-y-0.5">
              <span className="text-[9px] uppercase tracking-wider text-[#aaa9a4] block">Candidates</span>
              <span className="font-serif text-lg text-[#ff8c59]">42 Applied</span>
            </div>
            <div className="p-2.5 bg-[#0d0d0d] border border-[rgba(241,238,232,0.08)] rounded space-y-0.5">
              <span className="text-[9px] uppercase tracking-wider text-[#aaa9a4] block">Resumes</span>
              <span className="font-serif text-lg text-[#22c55e]">100% Cloud</span>
            </div>
          </div>

          {/* Recruiter Pipeline Stage */}
          <div className="p-3 bg-[#0d0d0d] border border-[rgba(241,238,232,0.08)] rounded space-y-2">
            <div className="flex items-center justify-between text-[10px] text-[#aaa9a4] uppercase">
              <span>Recruiter Application Pipeline</span>
              <span>15+ REST Routes</span>
            </div>
            <div className="grid grid-cols-4 gap-1.5 text-center text-[10px]">
              <div className="p-2 bg-[#141414] border border-[#ff8c59] rounded">
                <span className="text-[#aaa9a4] block text-[9px]">Applied</span>
                <span className="font-bold text-[#ff8c59]">42</span>
              </div>
              <div className="p-2 bg-[#141414] border border-[rgba(241,238,232,0.1)] rounded">
                <span className="text-[#aaa9a4] block text-[9px]">Shortlisted</span>
                <span className="font-bold text-[#f1eee8]">16</span>
              </div>
              <div className="p-2 bg-[#141414] border border-[rgba(241,238,232,0.1)] rounded">
                <span className="text-[#aaa9a4] block text-[9px]">Interview</span>
                <span className="font-bold text-[#f1eee8]">6</span>
              </div>
              <div className="p-2 bg-[#141414] border border-[#22c55e] rounded">
                <span className="text-[#aaa9a4] block text-[9px]">Selected</span>
                <span className="font-bold text-[#22c55e]">2</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Query & API Telemetry Bar */}
      <div className="p-2.5 bg-[#030303] text-[#aaa9a4] rounded border border-[rgba(241,238,232,0.06)] font-mono text-[10px] space-y-1">
        <div className="flex items-center justify-between text-[9px] border-b border-[rgba(241,238,232,0.06)] pb-1">
          <span className="text-[#dedad4]">// REST Controller & Cloud Storage Status</span>
          <span className="text-[#22c55e]">Latency: 1.1ms (Indexed)</span>
        </div>
        <p className="truncate">
          <span className="text-[#ff8c59]">POST</span> /api/v1/jobs/apply &rarr; RBAC JWT Verified &rarr; Cloudinary Upload &rarr; MongoDB Atlas
        </p>
      </div>

      {/* Bottom Security / Architecture Boundary */}
      <div className="pt-2 border-t border-[rgba(241,238,232,0.08)] flex items-center justify-between text-[10px] text-[#aaa9a4]">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff8c59]" />
          <span>RBAC: Candidates &amp; Recruiters</span>
        </div>
        <span className="font-mono text-[#dedad4]">React.js + Node + Express + Mongo</span>
      </div>
    </div>
  );
};
