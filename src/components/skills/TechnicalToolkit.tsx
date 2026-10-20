import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../../constants/skills';
import { Tag } from '../ui/Tag';

export const TechnicalToolkit: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const accordions = [
    {
      index: '01',
      kicker: '01 / SYSTEMS ARCHITECTURE',
      title: 'Isolate execution boundaries.',
      body: 'In systems like CodeCore, executing arbitrary user code demands hard guarantees. I build containerized runtimes using Docker APIs with strict memory limits, non-root users, network disables, and sub-second execution timeouts.',
      strengths: 'Docker · Linux cgroups · Node.js Worker Threads · Ephemeral sandboxes',
    },
    {
      index: '02',
      kicker: '02 / FULL-STACK ENGINEERING',
      title: 'Design for real-world user workflows.',
      body: 'Whether engineering dual role-based access control and Cloudinary resume pipelines in JobOrbit or managing proximity queries in Thriviefy, I prioritize predictable schemas, clean RESTful contracts, and robust error handling.',
      strengths: 'React.js · Node.js · Express.js · MongoDB · PostgreSQL · Redis · Docker',
    },
    {
      index: '03',
      kicker: '03 / ALGORITHMIC RIGOR',
      title: 'Reason from time and space complexity.',
      body: 'Solving 1,400+ problems across LeetCode (1875+), Codeforces (1215), and GeeksforGeeks isn’t about memorizing tricks—it is the mental muscle to recognize bottlenecks, analyze amortized complexity, and pick optimal data structures before writing a single line of code.',
      strengths: 'Data Structures · Dynamic Programming · Graph Theory · Algorithmic Optimization',
    },
  ];

  return (
    <div className="space-y-20 md:space-y-28 select-none">
      {/* 1. Sarthak-Style Chapter Header */}
      <div className="section-label">
        <span>03 / HOW I THINK & WORK</span>
        <span>DEPTH MEETS PERSPECTIVE</span>
      </div>

      {/* 2. Sarthak Expertise Studio Grid: Thinking Path (Left) + Accordion (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* LEFT COLUMN: Thinking Path */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#f1eee8] leading-[1.05] tracking-[-0.04em]">
              How I work.<br />
              <em className="text-[#ff8c59] italic">From constraint to system.</em>
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#aaa9a4] mt-4 leading-relaxed">
              Clear mental models determine how code behaves in production. Follow the thinking:
            </p>
          </div>

          {/* Thinking Path Ordered List */}
          <div className="p-6 bg-[#080808] border border-[rgba(241,238,232,0.12)] rounded-lg space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#ff8c59] block">
              SYSTEMS THINKING PATH
            </span>
            <ol className="space-y-3 font-sans text-sm">
              <li className="flex items-baseline gap-3 p-2 rounded hover:bg-[#121212] transition-colors">
                <span className="font-mono text-xs font-semibold text-[#ff8c59]">01</span>
                <span className="text-[#dedad4]">Understand constraints & edge cases</span>
              </li>
              <li className="flex items-baseline gap-3 p-2 rounded hover:bg-[#121212] transition-colors">
                <span className="font-mono text-xs font-semibold text-[#ff8c59]">02</span>
                <span className="text-[#dedad4]">Architect boundaries & state flow</span>
              </li>
              <li className="flex items-baseline gap-3 p-2 rounded hover:bg-[#121212] transition-colors">
                <span className="font-mono text-xs font-semibold text-[#ff8c59]">03</span>
                <span className="text-[#dedad4]">Build, benchmark & optimize</span>
              </li>
            </ol>
          </div>
        </div>

        {/* RIGHT COLUMN: Accordion Items */}
        <div className="lg:col-span-7 space-y-4">
          {accordions.map((item, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <article
                key={item.index}
                className="border-b border-[rgba(241,238,232,0.12)] pb-4 transition-colors"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                    aria-expanded={isExpanded}
                    className="w-full py-5 flex items-start justify-between text-left group focus-visible:outline-2 focus-visible:outline-[#ff8c59]"
                  >
                    <div>
                      <span className="font-mono text-[10px] tracking-wider uppercase text-[#aaa9a4] group-hover:text-[#ff8c59] transition-colors block mb-1">
                        {item.kicker}
                      </span>
                      <span className="font-serif text-2xl sm:text-3xl text-[#f1eee8] font-normal tracking-tight group-hover:text-[#ff8c59] transition-colors">
                        {item.title}
                      </span>
                    </div>
                    <span className="font-mono text-xl text-[#ff8c59] ml-4 mt-1">
                      {isExpanded ? '—' : '+'}
                    </span>
                  </button>
                </h3>

                {isExpanded && (
                  <div className="pt-2 pb-5 space-y-3 font-sans text-sm text-[#aaa9a4] leading-relaxed">
                    <p>{item.body}</p>
                    <p className="font-mono text-xs text-[#dedad4] pt-2">
                      <span className="text-[#ff8c59]">Focus:</span> {item.strengths}
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>

      {/* 3. Comprehensive Technical Toolkit Grid */}
      <div className="space-y-8 pt-12 border-t border-[rgba(241,238,232,0.12)]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#ff8c59] block mb-2">
              TECHNICAL INVENTORY
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#f1eee8] font-normal tracking-tight">
              Tools & Technologies<em className="text-[#ff8c59]">.</em>
            </h3>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#aaa9a4] max-w-sm">
            Technologies I have actively used to build, benchmark, and deploy software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="p-6 bg-[#080808] border border-[rgba(241,238,232,0.1)] rounded-lg space-y-4 hover:border-[rgba(241,238,232,0.25)] transition-colors"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[rgba(241,238,232,0.08)]">
                <span className="font-mono text-xs font-semibold text-[#ff8c59]">
                  [{cat.index}]
                </span>
                <span className="font-serif text-lg text-[#f1eee8]">
                  {cat.title}
                </span>
              </div>
              <p className="font-sans text-xs text-[#aaa9a4] leading-relaxed">
                {cat.summary}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {cat.skills.map((skill) => (
                  <Tag key={skill.name} label={skill.name} variant="dark" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
