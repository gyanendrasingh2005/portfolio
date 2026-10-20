import React from 'react';
import { PROJECTS } from '../../constants/projects';
import { Tag } from '../ui/Tag';
import { EditorialLink } from '../ui/EditorialLink';
import { JobOrbitPreview } from './JobOrbitPreview';
import { CodeCoreTerminal } from './CodeCoreTerminal';
import { ThriviefyPreview } from './ThriviefyPreview';

interface ProjectsProps {
  onOpenCaseStudy?: (projectId: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenCaseStudy }) => {
  const jobOrbit = PROJECTS[0];
  const codeCore = PROJECTS[1];
  const thriviefy = PROJECTS[2];

  return (
    <div className="space-y-20 md:space-y-28 select-none">
      {/* 1. Sarthak-Style Chapter Header */}
      <div className="section-label">
        <span>02 / SELECTED WORK</span>
        <span>BUILT. BENCHMARKED. PUT INTO THE WORLD.</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
        <div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#f1eee8] leading-[1.05] tracking-[-0.04em]">
            Ideas are a start.<br />
            <em className="text-[#ff8c59] italic">This is the work.</em>
          </h2>
        </div>
        <p className="font-sans text-sm sm:text-base text-[#aaa9a4] max-w-md leading-relaxed">
          From full-stack recruitment portals to containerized compiler execution engines and emergency healthcare platforms. Verified engineering shipped with intent.
        </p>
      </div>

      {/* 2. PROJECT GALLERY */}
      <div className="space-y-16 lg:space-y-24">
        {/* PROJECT 01: JobOrbit */}
        <article className="border border-[rgba(241,238,232,0.12)] bg-[#080808] rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-[rgba(241,238,232,0.25)]">
          {/* Sarthak-Style Browser Bar */}
          <div className="work-browser-bar">
            <div className="work-browser-dots">
              <span />
              <span />
              <span />
            </div>
            <span className="text-[#aaa9a4]">joborbit.dev</span>
            <span className="text-[#ff8c59]">↗</span>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Narrative & Specifications (Left) */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-semibold text-[#ff8c59]">
                    01
                  </span>
                  <span className="text-[rgba(241,238,232,0.2)]">/</span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#aaa9a4]">
                    FULL-STACK MERN · DUAL RBAC · CLOUDINARY
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#f1eee8] font-normal tracking-tight">
                    {jobOrbit.name} — MERN Job Portal
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#aaa9a4] leading-relaxed mt-3">
                    {jobOrbit.summary}
                  </p>
                </div>

                {/* Contribution note */}
                <div className="p-4 bg-[#0d0d0d] border-l-2 border-[#ff8c59] rounded-r text-xs font-sans text-[#dedad4] leading-relaxed">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#ff8c59] font-bold block mb-1">
                    Key Contribution //
                  </span>
                  {jobOrbit.contribution}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {jobOrbit.techStack.map((tech) => (
                    <Tag key={tech} label={tech} variant="dark" />
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-2 flex flex-wrap items-center gap-6">
                  <button
                    type="button"
                    onClick={() => onOpenCaseStudy?.('joborbit')}
                    className="pill-link group text-xs py-2.5 px-5"
                  >
                    <span>Explore the story</span>
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
                      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </button>

                  <EditorialLink
                    href={jobOrbit.githubUrl}
                    variant="dark"
                    showArrow
                    external
                  >
                    GitHub Repo
                  </EditorialLink>
                </div>
              </div>

              {/* UI Preview (Right) */}
              <div className="lg:col-span-6">
                <JobOrbitPreview />
              </div>
            </div>
          </div>
        </article>

        {/* PROJECT 02: CodeCore */}
        <article className="border border-[rgba(241,238,232,0.12)] bg-[#080808] rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-[rgba(241,238,232,0.25)]">
          {/* Sarthak-Style Browser Bar */}
          <div className="work-browser-bar">
            <div className="work-browser-dots">
              <span />
              <span />
              <span />
            </div>
            <span className="text-[#aaa9a4]">codecore.dev</span>
            <span className="text-[#ff8c59]">↗</span>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Narrative & Specifications (Left) */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-semibold text-[#ff8c59]">
                    02
                  </span>
                  <span className="text-[rgba(241,238,232,0.2)]">/</span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#aaa9a4]">
                    PRODUCT &amp; SYSTEMS ARCHITECTURE · DOCKER SANDBOX
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#f1eee8] font-normal tracking-tight">
                    {codeCore.name} — Online Code Compiler
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#aaa9a4] leading-relaxed mt-3">
                    {codeCore.summary}
                  </p>
                </div>

                {/* Contribution note */}
                <div className="p-4 bg-[#0d0d0d] border-l-2 border-[#ff8c59] rounded-r text-xs font-sans text-[#dedad4] leading-relaxed">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#ff8c59] font-bold block mb-1">
                    Key Contribution //
                  </span>
                  {codeCore.contribution}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {codeCore.techStack.map((tech) => (
                    <Tag key={tech} label={tech} variant="dark" />
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-2 flex flex-wrap items-center gap-6">
                  <button
                    type="button"
                    onClick={() => onOpenCaseStudy?.('codecore')}
                    className="pill-link group text-xs py-2.5 px-5"
                  >
                    <span>Explore the story</span>
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
                      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </button>

                  <EditorialLink
                    href={codeCore.githubUrl}
                    variant="dark"
                    showArrow
                    external
                  >
                    GitHub Repo
                  </EditorialLink>
                </div>
              </div>

              {/* Interactive Terminal (Right) */}
              <div className="lg:col-span-6">
                <CodeCoreTerminal />
              </div>
            </div>
          </div>
        </article>

        {/* PROJECT 03: Thriviefy */}
        <article className="border border-[rgba(241,238,232,0.12)] bg-[#080808] rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-[rgba(241,238,232,0.25)]">
          {/* Browser Bar */}
          <div className="work-browser-bar">
            <div className="work-browser-dots">
              <span />
              <span />
              <span />
            </div>
            <span className="text-[#aaa9a4]">thriviefy.health</span>
            <span className="text-[#ff8c59]">↗</span>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Narrative & Specifications (Left) */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-semibold text-[#ff8c59]">
                    03
                  </span>
                  <span className="text-[rgba(241,238,232,0.2)]">/</span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#aaa9a4]">
                    HEALTHCARE &amp; EMERGENCY · GEOLOCATION DISCOVERY
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#f1eee8] font-normal tracking-tight">
                    {thriviefy.name} — Medical Services Platform
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#aaa9a4] leading-relaxed mt-3">
                    {thriviefy.summary}
                  </p>
                </div>

                {/* Contribution note */}
                <div className="p-4 bg-[#0d0d0d] border-l-2 border-[#ff8c59] rounded-r text-xs font-sans text-[#dedad4] leading-relaxed">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#ff8c59] font-bold block mb-1">
                    Key Contribution //
                  </span>
                  {thriviefy.contribution}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {thriviefy.techStack.map((tech) => (
                    <Tag key={tech} label={tech} variant="dark" />
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-2 flex flex-wrap items-center gap-6">
                  <button
                    type="button"
                    onClick={() => onOpenCaseStudy?.('thriviefy')}
                    className="pill-link group text-xs py-2.5 px-5"
                  >
                    <span>Explore the story</span>
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
                      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </button>

                  <EditorialLink
                    href={thriviefy.githubUrl}
                    variant="dark"
                    showArrow
                    external
                  >
                    GitHub Repo
                  </EditorialLink>
                </div>
              </div>

              {/* UI Preview (Right) */}
              <div className="lg:col-span-6">
                <ThriviefyPreview />
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};
