import React from 'react';
import { PROBLEM_SOLVING_DATA } from '../../constants/problemSolving';
import { Tag } from '../ui/Tag';
import { EditorialLink } from '../ui/EditorialLink';

const LeetCodeLogo: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.386.038-1.901l-2.697-2.606c-1.505-1.506-3.582-2.333-5.759-2.333s-4.254.827-5.759 2.333l-4.32 4.38c-1.551 1.552-1.551 4.072 0 5.624l4.333 4.363c1.505 1.506 3.582 2.334 5.759 2.334s4.254-.828 5.759-2.334l2.697-2.606c.535-.535.517-1.385-.038-1.9-.535-.536-1.386-.554-1.9-.039z"
      fill="#FFA116"
    />
    <path
      d="M20.975 6.014h-7.618c-.753 0-1.365.612-1.365 1.365s.612 1.365 1.365 1.365h7.618c.753 0 1.365-.612 1.365-1.365s-.612-1.365-1.365-1.365z"
      fill="#F89F1B"
    />
  </svg>
);

const CodeforcesLogo: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h3z"
      fill="#FFD43B"
    />
    <path
      d="M13.5 3C14.328 3 15 3.672 15 4.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5v-15c0-.828.673-1.5 1.5-1.5h3z"
      fill="#1F8ACB"
    />
    <path
      d="M22.5 10.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z"
      fill="#E63946"
    />
  </svg>
);

const GeeksforGeeksLogo: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="#2F8D46"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078 3.571 3.571 0 0 1-.13-.353h7.418a4.26 4.26 0 0 1-.368 1.008zm-11.99-.654a3.793 3.793 0 0 1-2.134 2.078 4.51 4.51 0 0 1-3.117.016 3.7 3.7 0 0 1-1.104-.695 2.652 2.652 0 0 1-.564-.745 4.221 4.221 0 0 1-.368-1.006H9.59c-.038.12-.08.238-.13.352zm14.501-1.758a3.849 3.849 0 0 0-.082-.475l-9.634-.008a3.932 3.932 0 0 1 1.143-2.348c.363-.35.79-.625 1.26-.809a3.97 3.97 0 0 1 4.484.957l1.521-1.49a5.7 5.7 0 0 0-1.922-1.357 6.283 6.283 0 0 0-2.544-.49 6.35 6.35 0 0 0-2.405.457 6.007 6.007 0 0 0-1.963 1.276 6.142 6.142 0 0 0-1.325 1.94 5.862 5.862 0 0 0-.466 1.864h-.063a5.857 5.857 0 0 0-.467-1.865 6.13 6.13 0 0 0-1.325-1.939A6 6 0 0 0 8.21 6.34a6.698 6.698 0 0 0-4.949.031A5.708 5.708 0 0 0 1.34 7.73l1.52 1.49a4.166 4.166 0 0 1 4.484-.958c.47.184.898.46 1.26.81.368.36.66.792.859 1.268.146.344.242.708.285 1.08l-9.635.008A4.714 4.714 0 0 0 0 12.457a6.493 6.493 0 0 0 .345 2.127 4.927 4.927 0 0 0 1.08 1.783c.528.56 1.17 1 1.88 1.293a6.454 6.454 0 0 0 2.504.457c.824.005 1.64-.15 2.404-.457a5.986 5.986 0 0 0 1.964-1.277 6.116 6.116 0 0 0 1.686-3.076h.273a6.13 6.13 0 0 0 1.686 3.077 5.99 5.99 0 0 0 1.964 1.276 6.345 6.345 0 0 0 2.405.457 6.45 6.45 0 0 0 2.502-.457 5.42 5.42 0 0 0 1.882-1.293 4.928 4.928 0 0 0 1.08-1.783A6.52 6.52 0 0 0 24 12.457a4.757 4.757 0 0 0-.039-.554z" />
  </svg>
);

const renderPlatformIcon = (id: string) => {
  switch (id) {
    case 'leetcode':
      return <LeetCodeLogo className="w-5 h-5 shrink-0" />;
    case 'codeforces':
      return <CodeforcesLogo className="w-5 h-5 shrink-0" />;
    case 'geeksforgeeks':
      return <GeeksforGeeksLogo className="w-5 h-5 shrink-0" />;
    default:
      return null;
  }
};

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
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[#111111] border border-[rgba(241,238,232,0.12)] flex items-center justify-center p-1.5 shrink-0 shadow-inner">
                      {renderPlatformIcon(platform.id)}
                    </span>
                    <h3 className="font-serif text-2xl text-[#f1eee8] font-normal">
                      {platform.name}
                    </h3>
                  </div>
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
