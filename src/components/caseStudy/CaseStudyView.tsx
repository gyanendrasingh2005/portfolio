import React, { useEffect } from 'react';
import type { CaseStudyData } from '../../constants/caseStudies';
import { Tag } from '../ui/Tag';
import { Button } from '../ui/Button';
import { EditorialLink } from '../ui/EditorialLink';
import { ArchitectureDiagram } from './ArchitectureDiagram';

interface CaseStudyViewProps {
  project: CaseStudyData;
  onBack: () => void;
  onSelectProject: (projectId: string) => void;
}

export const CaseStudyView: React.FC<CaseStudyViewProps> = ({
  project,
  onBack,
  onSelectProject,
}) => {
  // Update document title for SEO & history
  useEffect(() => {
    const originalTitle = document.title;
    document.title = `${project.name} Case Study — Gyanendra Singh`;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => {
      document.title = originalTitle;
    };
  }, [project]);

  return (
    <article className="min-h-screen bg-[#030303] text-[#f1eee8] selection:bg-[#ff8c59] selection:text-[#030303] select-none">
      {/* Sticky Top Case-Study Bar */}
      <nav
        aria-label="Case Study Navigation"
        className="sticky top-0 z-40 w-full bg-[#030303dc] backdrop-blur-xl border-b border-[rgba(241,238,232,0.12)] transition-colors"
      >
        <div className="layout-container flex items-center justify-between h-16 md:h-20">
          <button
            type="button"
            onClick={onBack}
            className="group font-mono text-xs uppercase tracking-wider text-[#dedad4] hover:text-[#ff8c59] flex items-center gap-2 p-1.5 focus-visible:outline-2 focus-visible:outline-[#ff8c59] rounded"
          >
            <span className="transition-transform duration-180 group-hover:-translate-x-1">
              ←
            </span>
            <span>Back to Portfolio</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline font-mono text-xs text-[#aaa9a4]">
              Case Study {project.index} // 03
            </span>
            <span className="font-serif text-lg text-[#f1eee8]">
              {project.name}
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="border-b border-[rgba(241,238,232,0.12)] bg-[#050505] py-16 md:py-24">
        <div className="layout-container space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="live-dot" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#ff8c59]">
              CASE STUDY [{project.index}]
            </span>
            <span className="text-[rgba(241,238,232,0.2)] font-mono text-xs">/</span>
            <span className="font-mono text-xs text-[#aaa9a4] uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#f1eee8] leading-[1.02] tracking-tight">
            {project.title}
          </h1>

          <p className="font-sans text-lg sm:text-xl text-[#dedad4] max-w-3xl leading-relaxed">
            {project.tagline}
          </p>

          {/* Metadata Grid Bar */}
          <div className="pt-8 border-t border-[rgba(241,238,232,0.1)] grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono text-xs">
            <div>
              <span className="text-[10px] uppercase text-[#787570] block mb-1">
                Role & Focus
              </span>
              <span className="font-semibold text-[#f1eee8]">{project.role}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-[#787570] block mb-1">
                Timeline
              </span>
              <span className="font-semibold text-[#f1eee8]">{project.timeline}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-[#787570] block mb-1">
                Status
              </span>
              <span className="font-semibold text-[#ff8c59]">{project.status}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-[#787570] block mb-1">
                Repository
              </span>
              <EditorialLink href={project.githubUrl} showArrow external variant="dark">
                Source Code
              </EditorialLink>
            </div>
          </div>
        </div>
      </header>

      {/* Main Case Study Body with Table of Contents Layout */}
      <div className="layout-container py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Table of Contents (Sticky on Desktop) */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-28 space-y-4 font-mono text-xs border-l border-[rgba(241,238,232,0.12)] pl-5">
            <span className="text-[11px] uppercase tracking-wider text-[#dedad4] font-bold block mb-2">
              Case Index //
            </span>
            <nav className="flex flex-col space-y-2 text-[#aaa9a4]">
              <a href="#overview" className="hover:text-[#ff8c59] transition-colors">
                01. The Problem
              </a>
              <a href="#solution" className="hover:text-[#ff8c59] transition-colors">
                02. Implemented Solution
              </a>
              <a href="#architecture" className="hover:text-[#ff8c59] transition-colors">
                03. Technical Architecture
              </a>
              <a href="#decisions" className="hover:text-[#ff8c59] transition-colors">
                04. Engineering Decisions
              </a>
              <a href="#challenges" className="hover:text-[#ff8c59] transition-colors">
                05. Challenges & Debugging
              </a>
              {project.codeSnippet && (
                <a href="#code" className="hover:text-[#ff8c59] transition-colors">
                  06. Implementation Snippet
                </a>
              )}
              <a href="#outcomes" className="hover:text-[#ff8c59] transition-colors">
                07. Outcomes & Learnings
              </a>
            </nav>
          </aside>

          {/* Main Case Study Content Sections */}
          <div className="lg:col-span-9 space-y-16 md:space-y-24">
            {/* SECTION B: The Problem */}
            <section id="overview" className="space-y-6 scroll-mt-28">
              <div className="flex items-center gap-2 pb-2 border-b border-[rgba(241,238,232,0.1)]">
                <span className="font-mono text-xs font-bold text-[#ff8c59]">01 //</span>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#f1eee8]">
                  The Problem & Engineering Context
                </h2>
              </div>

              <div className="space-y-4 font-sans text-base sm:text-lg text-[#dedad4] leading-relaxed max-w-reading">
                <p>{project.problem.context}</p>
                <p>
                  <strong className="text-[#f1eee8]">Intended Users:</strong>{' '}
                  {project.problem.intendedUsers}
                </p>
              </div>

              {/* Pain Points Callout */}
              <div className="bg-[#080808] border border-[rgba(241,238,232,0.1)] rounded-lg p-6 space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-[#dedad4] font-bold block">
                  Core Architectural Bottlenecks:
                </span>
                <ul className="space-y-2 font-mono text-xs text-[#aaa9a4]">
                  {project.problem.painPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#ff8c59] font-bold">✕</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-3 border-t border-[rgba(241,238,232,0.06)] font-sans text-xs sm:text-sm text-[#dedad4] italic">
                  Critical workflow failure: {project.problem.workflowIssue}
                </div>
              </div>
            </section>

            {/* SECTION C: The Solution */}
            <section id="solution" className="space-y-6 scroll-mt-28">
              <div className="flex items-center gap-2 pb-2 border-b border-[rgba(241,238,232,0.1)]">
                <span className="font-mono text-xs font-bold text-[#ff8c59]">02 //</span>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#f1eee8]">
                  The Implemented Solution
                </h2>
              </div>

              <p className="font-sans text-base sm:text-lg text-[#dedad4] leading-relaxed max-w-reading">
                {project.solution.overview}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                {project.solution.coreCapabilities.map((cap, i) => (
                  <div
                    key={i}
                    className="p-5 bg-[#080808] border border-[rgba(241,238,232,0.1)] rounded-lg space-y-2"
                  >
                    <span className="font-mono text-xs font-bold text-[#ff8c59]">
                      FEATURE [0{i + 1}]
                    </span>
                    <h3 className="font-serif text-lg text-[#f1eee8] font-normal">
                      {cap.title}
                    </h3>
                    <p className="font-sans text-xs text-[#aaa9a4] leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION D: Technical Architecture */}
            <section id="architecture" className="space-y-6 scroll-mt-28">
              <div className="flex items-center gap-2 pb-2 border-b border-[rgba(241,238,232,0.1)]">
                <span className="font-mono text-xs font-bold text-[#ff8c59]">03 //</span>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#f1eee8]">
                  Technical Architecture
                </h2>
              </div>

              <p className="font-sans text-base text-[#aaa9a4] leading-relaxed max-w-reading">
                {project.architecture.summary}
              </p>

              {/* Architecture Topology Component */}
              <ArchitectureDiagram
                nodes={project.architecture.nodes}
                dataFlow={project.architecture.dataFlow}
              />
            </section>

            {/* SECTION E: Engineering Decisions */}
            <section id="decisions" className="space-y-6 scroll-mt-28">
              <div className="flex items-center gap-2 pb-2 border-b border-[rgba(241,238,232,0.1)]">
                <span className="font-mono text-xs font-bold text-[#ff8c59]">04 //</span>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#f1eee8]">
                  Engineering Decisions & Trade-offs
                </h2>
              </div>

              <div className="space-y-4">
                {project.decisions.map((dec, i) => (
                  <div
                    key={i}
                    className="p-6 bg-[#080808] border border-[rgba(241,238,232,0.1)] rounded-lg space-y-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                      <span className="text-[#ff8c59] font-bold">
                        DECISION [0{i + 1}] // {dec.topic}
                      </span>
                      <Tag label="Design Choice" variant="dark" />
                    </div>

                    <h4 className="font-serif text-xl text-[#f1eee8] font-normal">
                      {dec.choice}
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 font-sans text-xs sm:text-sm">
                      <div className="p-3 bg-[#0d0d0d] border border-[rgba(241,238,232,0.08)] rounded space-y-1">
                        <span className="font-mono text-[11px] font-bold text-[#f1eee8] uppercase block">
                          Rationale
                        </span>
                        <p className="text-[#aaa9a4] leading-relaxed">
                          {dec.rationale}
                        </p>
                      </div>

                      <div className="p-3 bg-[#0d0d0d] border border-[rgba(241,238,232,0.08)] rounded space-y-1">
                        <span className="font-mono text-[11px] font-bold text-[#ff8c59] uppercase block">
                          Accepted Trade-off
                        </span>
                        <p className="text-[#aaa9a4] leading-relaxed">
                          {dec.tradeoff}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION F: Challenges and Debugging */}
            <section id="challenges" className="space-y-6 scroll-mt-28">
              <div className="flex items-center gap-2 pb-2 border-b border-[rgba(241,238,232,0.1)]">
                <span className="font-mono text-xs font-bold text-[#ff8c59]">05 //</span>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#f1eee8]">
                  Real Development Challenges & Debugging
                </h2>
              </div>

              <div className="space-y-6">
                {project.challenges.map((ch, i) => (
                  <div
                    key={i}
                    className="p-6 bg-[#080808] border border-[rgba(241,238,232,0.1)] rounded-lg space-y-4"
                  >
                    <div className="flex items-center justify-between font-mono text-xs pb-2 border-b border-[rgba(241,238,232,0.08)]">
                      <span className="text-[#ff8c59] font-bold">
                        CHALLENGE [0{i + 1}]
                      </span>
                      <span className="text-[#aaa9a4]">Resolved & Documented</span>
                    </div>

                    <h3 className="font-serif text-xl text-[#f1eee8] font-normal">
                      {ch.title}
                    </h3>

                    <div className="space-y-3 font-mono text-xs text-[#aaa9a4]">
                      <div>
                        <span className="text-[#f1eee8] font-bold">The Issue: </span>
                        <span>{ch.issue}</span>
                      </div>
                      <div>
                        <span className="text-[#f1eee8] font-bold">Debugging Approach: </span>
                        <span>{ch.debugging}</span>
                      </div>
                      <div>
                        <span className="text-[#ff8c59] font-bold">The Resolution: </span>
                        <span className="text-[#dedad4]">{ch.resolution}</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[rgba(241,238,232,0.06)] font-sans text-xs text-[#787570] italic">
                      Key Takeaway: {ch.lesson}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION Code Snippet */}
            {project.codeSnippet && (
              <section id="code" className="space-y-6 scroll-mt-28">
                <div className="flex items-center gap-2 pb-2 border-b border-[rgba(241,238,232,0.1)]">
                  <span className="font-mono text-xs font-bold text-[#ff8c59]">06 //</span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#f1eee8]">
                    Implementation Snippet & Logic
                  </h2>
                </div>

                <div className="bg-[#050505] border border-[rgba(241,238,232,0.12)] rounded-lg overflow-hidden text-left font-mono text-xs">
                  <div className="bg-[#0e0e0e] px-4 py-3 border-b border-[rgba(241,238,232,0.1)] flex items-center justify-between text-[#aaa9a4] text-[11px]">
                    <span>File: {project.codeSnippet.filename}</span>
                    <span className="text-[#ff8c59]">
                      {project.codeSnippet.language.toUpperCase()}
                    </span>
                  </div>

                  <pre className="p-4 sm:p-5 text-[#f1eee8] leading-relaxed overflow-x-auto">
                    <code>{project.codeSnippet.code}</code>
                  </pre>

                  <div className="bg-[#0a0a0a] p-4 border-t border-[rgba(241,238,232,0.08)] font-sans text-xs text-[#aaa9a4] leading-relaxed">
                    {project.codeSnippet.explanation}
                  </div>
                </div>
              </section>
            )}

            {/* SECTION G: Outcome and Learnings */}
            <section id="outcomes" className="space-y-6 scroll-mt-28">
              <div className="flex items-center gap-2 pb-2 border-b border-[rgba(241,238,232,0.1)]">
                <span className="font-mono text-xs font-bold text-[#ff8c59]">07 //</span>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#f1eee8]">
                  Outcome & Honest Learnings
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Completed Features */}
                <div className="p-6 bg-[#080808] border border-[rgba(241,238,232,0.1)] rounded-lg space-y-3">
                  <span className="font-mono text-xs font-bold text-[#f1eee8] uppercase block">
                    Completed & Verified Deliverables
                  </span>
                  <ul className="space-y-2 font-mono text-xs text-[#aaa9a4]">
                    {project.outcomes.completedFeatures.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#ff8c59]">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Honest Limitations */}
                <div className="p-6 bg-[#080808] border border-[rgba(241,238,232,0.1)] rounded-lg space-y-3">
                  <span className="font-mono text-xs font-bold text-[#787570] uppercase block">
                    Acknowledged Limitations & Scope
                  </span>
                  <ul className="space-y-2 font-mono text-xs text-[#aaa9a4]">
                    {project.outcomes.limitations.map((lim, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#787570]">•</span>
                        <span>{lim}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-6 bg-[#080808] text-[#f1eee8] border border-[rgba(241,238,232,0.1)] rounded-lg space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-[#ff8c59] block">
                  Core Engineering Takeaways //
                </span>
                <div className="space-y-2 font-sans text-xs sm:text-sm text-[#aaa9a4] leading-relaxed">
                  {project.outcomes.technicalLearnings.map((l, i) => (
                    <p key={i}>• {l}</p>
                  ))}
                </div>
              </div>
            </section>

            {/* Bottom Project Switcher & Back Action */}
            <div className="pt-12 border-t border-[rgba(241,238,232,0.12)] flex flex-col sm:flex-row items-center justify-between gap-6">
              <Button variant="secondary" size="md" onClick={onBack}>
                ← Return to Selected Work
              </Button>

              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#aaa9a4]">
                  Explore other cases:
                </span>
                {['joborbit', 'codecore', 'thriviefy']
                  .filter((id) => id !== project.id)
                  .map((id) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => onSelectProject(id)}
                      className="font-mono text-xs px-2.5 py-1 bg-[#0d0d0d] hover:bg-[#151515] border border-[rgba(241,238,232,0.15)] text-[#f1eee8] rounded transition-colors"
                    >
                      {id === 'joborbit'
                        ? 'JobOrbit'
                        : id === 'codecore'
                        ? 'CodeCore'
                        : 'Thriviefy'}
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
