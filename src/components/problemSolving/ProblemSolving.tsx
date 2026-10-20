import React from 'react';
import { PROBLEM_SOLVING_DATA } from '../../constants/problemSolving';
import { Tag } from '../ui/Tag';
import { EditorialLink } from '../ui/EditorialLink';

export const ProblemSolving: React.FC = () => {
  const {
    supportingText,
    primaryMetric,
    narrative,
    approachTitle,
    principles,
    platforms,
  } = PROBLEM_SOLVING_DATA;

  return (
    <div className="space-y-20 md:space-y-28 select-none">
      {/* 1. Sarthak-Style Chapter Header */}
      <div className="section-label">
        <span>04 / ALGORITHMIC RIGOR</span>
        <span>PROBLEM SOLVER</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
        <div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#f1eee8] leading-[1.05] tracking-[-0.04em]">
            Better at solving problems,<br />
            <em className="text-[#ff8c59] italic">one problem at a time.</em>
          </h2>
        </div>
        <p className="font-sans text-sm sm:text-base text-[#aaa9a4] max-w-md leading-relaxed">
          {supportingText}
        </p>
      </div>

      {/* 2. Asymmetric Grid: Verified Milestone (Left) + Platforms & Methodology (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* LEFT COLUMN: Large Verified Milestone Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 bg-[#080808] border border-[rgba(241,238,232,0.12)] rounded-xl space-y-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-[rgba(241,238,232,0.08)]">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#aaa9a4]">
                VERIFIED MILESTONE
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[10px] text-[#ff8c59]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff8c59]" />
                ACTIVE DISCIPLINE
              </span>
            </div>

            <div>
              <div className="font-serif text-6xl sm:text-7xl text-[#f1eee8] font-normal tracking-[-0.04em] leading-none">
                {primaryMetric.value.replace('+', '')}
                <span className="text-[#ff8c59]">+</span>
              </div>
              <p className="font-sans text-sm text-[#dedad4] font-medium mt-3">
                {primaryMetric.label}
              </p>
              <p className="font-sans text-xs text-[#aaa9a4] mt-1 leading-relaxed">
                {primaryMetric.sublabel}
              </p>
            </div>

            <div className="pt-4 border-t border-[rgba(241,238,232,0.08)] text-xs font-sans text-[#aaa9a4] leading-relaxed space-y-2">
              <p className="text-[#dedad4] font-medium">{narrative.lead}</p>
              {narrative.body.map((par, i) => (
                <p key={i}>{par}</p>
              ))}
            </div>

            {/* Core DSA Topics */}
            <div className="pt-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#ff8c59] block mb-2">
                CORE DOMAINS
              </span>
              <div className="flex flex-wrap gap-1.5">
                {['Dynamic Programming', 'Graph Theory', 'Trees & BSTs', 'Arrays & Two Pointers', 'Backtracking'].map((topic) => (
                  <Tag key={topic} label={topic} variant="dark" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Coding Profiles Cards */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#aaa9a4] block">
              VERIFIED PROFILES // PLATFORMS
            </span>

            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="p-6 bg-[#080808] border border-[rgba(241,238,232,0.1)] rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[rgba(241,238,232,0.25)] transition-colors"
              >
                <div className="space-y-1">
                  <h3 className="font-serif text-2xl text-[#f1eee8] font-normal">
                    {platform.name}
                  </h3>
                  <p className="font-sans text-xs text-[#aaa9a4]">
                    {platform.description}
                  </p>
                  {platform.verifiedMetric && (
                    <p className="font-mono text-[11px] text-[#dedad4] pt-1">
                      {platform.verifiedMetric.label}: {platform.verifiedMetric.value}
                    </p>
                  )}
                </div>

                <div>
                  {platform.profileUrl ? (
                    <EditorialLink
                      href={platform.profileUrl}
                      variant="dark"
                      showArrow
                      external
                    >
                      View Profile
                    </EditorialLink>
                  ) : (
                    <span className="font-mono text-[10px] text-[#787570]">
                      {platform.statusNote}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Problem-Solving Principles */}
          <div className="p-6 bg-[#080808] border border-[rgba(241,238,232,0.1)] rounded-lg space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#ff8c59] block">
              {approachTitle}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-sans text-xs">
              {principles.map((pr) => (
                <div key={pr.title} className="p-3 bg-[#0d0d0d] rounded space-y-1">
                  <div className="font-mono text-[11px] text-[#f1eee8] font-medium">
                    {pr.title}
                  </div>
                  <div className="text-[11px] text-[#aaa9a4] leading-relaxed">
                    {pr.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
