import React from 'react';
import { EDUCATION_DATA } from '../../constants/education';
import { Tag } from '../ui/Tag';
import { EditorialLink } from '../ui/EditorialLink';

export const Education: React.FC = () => {
  const {
    supportingText,
    education,
    certifications,
    learningByBuilding,
  } = EDUCATION_DATA;

  return (
    <div className="space-y-20 md:space-y-28 select-none">
      {/* 1. Sarthak-Style Chapter Header */}
      <div className="section-label">
        <span>06 / ACADEMIC FOUNDATION</span>
        <span>A STRONG FOUNDATION</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
        <div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#f1eee8] leading-[1.05] tracking-[-0.04em]">
            Academic foundation.<br />
            <em className="text-[#ff8c59] italic">Continuous learning.</em>
          </h2>
        </div>
        <p className="font-sans text-sm sm:text-base text-[#aaa9a4] max-w-md leading-relaxed">
          {supportingText}
        </p>
      </div>

      {/* 2. Grid: Academic Foundation (Left) + Certifications & Practical Depth (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* LEFT COLUMN: Academic Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 bg-[#080808] border border-[rgba(241,238,232,0.12)] rounded-xl space-y-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-[rgba(241,238,232,0.08)]">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#aaa9a4]">
                UNDERGRADUATE DEGREE
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[10px] text-[#ff8c59]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff8c59]" />
                {education.period}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-3xl text-[#f1eee8] font-normal">
                {education.degree}
              </h3>
              <p className="font-sans text-sm text-[#dedad4] font-medium">
                {education.institution}
              </p>
              <p className="font-sans text-xs text-[#aaa9a4]">
                {education.location}
              </p>
            </div>

            {/* Verified CGPA Callout */}
            <div className="p-4 bg-[#0d0d0d] border border-[rgba(241,238,232,0.08)] rounded flex items-center justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#aaa9a4] block">
                  CUMULATIVE GPA
                </span>
                <span className="font-serif text-3xl text-[#ff8c59]">
                  {education.cgpa}
                </span>
                <span className="text-xs text-[#787570] font-mono ml-1">/ {education.cgpaScale}</span>
              </div>
              <span className="font-mono text-[10px] text-[#aaa9a4]">
                {education.cgpaNote}
              </span>
            </div>

            {/* Relevant Coursework */}
            <div className="space-y-2 pt-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#ff8c59] block">
                RELEVANT COURSEWORK
              </span>
              <div className="flex flex-wrap gap-1.5">
                {education.coursework.map((course) => (
                  <Tag key={course} label={course} variant="dark" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Certifications & Continuous Learning */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#aaa9a4] block">
              VERIFIED CERTIFICATIONS & SPECIALIZATIONS
            </span>

            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="p-6 bg-[#080808] border border-[rgba(241,238,232,0.1)] rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[rgba(241,238,232,0.25)] transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-serif text-xl sm:text-2xl text-[#f1eee8] font-normal">
                      {cert.title}
                    </h4>
                  </div>
                  <p className="font-mono text-xs text-[#ff8c59]">
                    {cert.issuer} {cert.issueDate ? `· ${cert.issueDate}` : ''}
                  </p>
                  <p className="font-sans text-xs text-[#aaa9a4] leading-relaxed pt-1">
                    {cert.description}
                  </p>
                </div>

                <div>
                  <EditorialLink
                    href={cert.credentialUrl || '#'}
                    variant="dark"
                    showArrow
                    external={Boolean(cert.credentialUrl)}
                  >
                    Credential
                  </EditorialLink>
                </div>
              </div>
            ))}
          </div>

          {/* Learning by Building Philosophy */}
          <div className="p-6 bg-[#080808] border border-[rgba(241,238,232,0.1)] rounded-lg space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#ff8c59] block">
              {learningByBuilding.title}
            </span>
            <p className="font-sans text-xs text-[#aaa9a4]">
              {learningByBuilding.subtitle}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {learningByBuilding.areas.map((area) => (
                <div key={area.id} className="p-3 bg-[#0d0d0d] rounded space-y-1">
                  <div className="font-serif text-sm text-[#f1eee8]">
                    {area.title}
                  </div>
                  <p className="font-sans text-[11px] text-[#aaa9a4] leading-relaxed">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
