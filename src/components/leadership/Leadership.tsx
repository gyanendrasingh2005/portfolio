import React from 'react';
import { LEADERSHIP_DATA } from '../../constants/leadership';
import { Tag } from '../ui/Tag';

export const Leadership: React.FC = () => {
  const {
    supportingText,
    featuredOrganization,
    contestHighlight,
    narrative,
    supportingActivities,
  } = LEADERSHIP_DATA;

  return (
    <div className="space-y-20 md:space-y-28 select-none">
      {/* 1. Sarthak-Style Chapter Header */}
      <div className="section-label">
        <span>05 / LEADERSHIP & COMMUNITY</span>
        <span>BRINGING PEOPLE FORWARD</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
        <div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#f1eee8] leading-[1.05] tracking-[-0.04em]">
            Building community.<br />
            <em className="text-[#ff8c59] italic">Mentoring peers.</em>
          </h2>
        </div>
        <p className="font-sans text-sm sm:text-base text-[#aaa9a4] max-w-md leading-relaxed">
          {supportingText}
        </p>
      </div>

      {/* 2. Grid: K3 Feature & CodeHurdle Contest */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* LEFT COLUMN: Featured Role at K3 */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 bg-[#080808] border border-[rgba(241,238,232,0.12)] rounded-xl space-y-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-[rgba(241,238,232,0.08)]">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#aaa9a4]">
                COMMUNITY PRESIDENCY
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[10px] text-[#ff8c59]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff8c59]" />
                {featuredOrganization.acronym}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-3xl text-[#f1eee8] font-normal">
                {featuredOrganization.name}
              </h3>
              <p className="font-mono text-xs text-[#ff8c59] font-medium uppercase tracking-wider">
                {featuredOrganization.role}
              </p>
              <p className="font-sans text-xs text-[#aaa9a4]">
                {featuredOrganization.institution}
              </p>
            </div>

            <p className="font-sans text-xs sm:text-sm text-[#dedad4] leading-relaxed pt-2 border-t border-[rgba(241,238,232,0.08)]">
              {featuredOrganization.summary}
            </p>

            <div className="space-y-2 pt-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#ff8c59] block">
                CORE RESPONSIBILITIES
              </span>
              <ul className="space-y-1.5 font-sans text-xs text-[#aaa9a4]">
                {featuredOrganization.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#ff8c59] font-mono">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: CodeHurdle Contest Showcase & Activities */}
        <div className="lg:col-span-7 space-y-6">
          {/* Flagship Contest Card */}
          <div className="p-8 bg-[#080808] border border-[rgba(241,238,232,0.12)] rounded-xl space-y-5 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-[rgba(241,238,232,0.08)]">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-semibold text-[#ff8c59]">
                  01
                </span>
                <span className="font-serif text-xl text-[#f1eee8]">
                  {contestHighlight.title}
                </span>
              </div>
              <Tag label="Flagship Event" variant="accent" />
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs py-2">
              {contestHighlight.metrics.map((m, idx) => (
                <div key={idx} className="p-3 bg-[#0d0d0d] rounded space-y-0.5">
                  <span className="text-[#aaa9a4] text-[10px] block uppercase">{m.label}</span>
                  <span className="text-xl sm:text-2xl font-serif text-[#f1eee8] block">
                    {m.value}
                  </span>
                  <span className="text-[10px] text-[#787570] block truncate">{m.detail}</span>
                </div>
              ))}
            </div>

            <p className="font-sans text-xs sm:text-sm text-[#aaa9a4] leading-relaxed">
              {contestHighlight.overview}
            </p>

            <div className="pt-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#ff8c59] block mb-2">
                PROBLEM SETTING CONTRIBUTIONS
              </span>
              <ul className="space-y-1 font-sans text-xs text-[#dedad4]">
                {contestHighlight.problemSettingContributions.map((contrib, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#ff8c59] font-mono">•</span>
                    <span>{contrib}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Supporting Leadership Activities */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {supportingActivities.map((act) => (
              <div
                key={act.id}
                className="p-5 bg-[#080808] border border-[rgba(241,238,232,0.08)] rounded-lg space-y-2 hover:border-[rgba(241,238,232,0.2)] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#ff8c59] uppercase tracking-wider">
                    {act.role}
                  </span>
                  {act.period && (
                    <span className="font-mono text-[10px] text-[#787570]">
                      {act.period}
                    </span>
                  )}
                </div>
                <h4 className="font-serif text-xl text-[#f1eee8] font-normal">
                  {act.title}
                </h4>
                <p className="font-sans text-xs text-[#aaa9a4] leading-relaxed">
                  {act.description}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 bg-[#080808] border-l-2 border-[#ff8c59] rounded-r text-xs font-sans text-[#aaa9a4] leading-relaxed">
            <span className="text-[#f1eee8] font-medium block mb-1">{narrative.lead}</span>
            {narrative.quote && (
              <p className="italic text-[#787570] mt-1">&ldquo;{narrative.quote}&rdquo; — {narrative.quoteAuthor}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
