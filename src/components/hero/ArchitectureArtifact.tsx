import React, { useState } from 'react';

export const ArchitectureArtifact: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  const layers = [
    {
      id: 1,
      code: '01',
      title: 'Interface & Client Runtime',
      tech: 'React · TypeScript · Tailwind · Zustand',
      metric: 'Restrained UX / Sub-100ms UI Rehydration',
    },
    {
      id: 2,
      code: '02',
      title: 'Application & Execution Service',
      tech: 'Node.js · Express · REST APIs · Docker SDK',
      metric: 'Isolated Containers / Deterministic Execution',
    },
    {
      id: 3,
      code: '03',
      title: 'Persistence & Data Store',
      tech: 'PostgreSQL · MongoDB · Redis · Prisma',
      metric: 'ACID Guarantees / Strict Schema Isolation',
    },
    {
      id: 4,
      code: '04',
      title: 'Infrastructure & Algorithmic Rigor',
      tech: 'Linux / Containers · Git CI · 1,400+ Problems',
      metric: 'O(N log N) Bounds / Zero Memory Leaks',
    },
  ];

  return (
    <div
      className="relative w-full bg-[#0a0a0a] border border-[rgba(241,238,232,0.12)] rounded-lg p-5 sm:p-6 transition-colors duration-200 hover:border-[rgba(241,238,232,0.25)] select-none shadow-2xl backdrop-blur-md"
      role="region"
      aria-label="System architecture specification"
    >
      {/* Editorial Header Bar */}
      <div className="flex items-center justify-between pb-3.5 border-b border-[rgba(241,238,232,0.1)] mb-4 font-mono text-[11px]">
        <div className="flex items-center gap-2.5">
          <span className="font-serif font-bold text-sm tracking-tight text-[#f1eee8]">
            GS<span className="text-[#ff8c59]">.</span>
          </span>
          <span className="text-[rgba(241,238,232,0.3)]">/</span>
          <span className="uppercase tracking-wider text-[#aaa9a4]">
            ARCH-SPEC-01
          </span>
        </div>
        <div className="flex items-center gap-2 text-[#ff8c59]">
          <span className="live-dot" />
          <span className="uppercase tracking-widest text-[10px]">FULL-STACK TOPOLOGY</span>
        </div>
      </div>

      {/* Architectural Stack Layers */}
      <div className="space-y-2.5 relative">
        {layers.map((layer, index) => {
          const isHovered = activeLayer === layer.id;
          return (
            <div key={layer.id} className="relative">
              {/* Connecting Conduit Line between layers */}
              {index > 0 && (
                <div
                  className="w-[1px] h-2 bg-[rgba(241,238,232,0.12)] mx-auto -my-0.5"
                  aria-hidden="true"
                />
              )}

              {/* Layer Card */}
              <div
                onMouseEnter={() => setActiveLayer(layer.id)}
                onMouseLeave={() => setActiveLayer(null)}
                className={`p-3 sm:p-3.5 rounded border transition-all duration-200 cursor-pointer ${
                  isHovered
                    ? 'bg-[#151515] border-[#ff8c59] -translate-y-0.5 shadow-lg'
                    : 'bg-[#0e0e0e] border-[rgba(241,238,232,0.08)] hover:border-[rgba(241,238,232,0.2)]'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-1">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`font-mono text-xs font-semibold ${
                        isHovered ? 'text-[#ff8c59]' : 'text-[#787570]'
                      }`}
                    >
                      [{layer.code}]
                    </span>
                    <h4 className="font-sans text-xs sm:text-sm font-medium text-[#f1eee8]">
                      {layer.title}
                    </h4>
                  </div>
                  <span className="font-mono text-[10px] text-[#aaa9a4] hidden sm:inline-block">
                    {layer.tech}
                  </span>
                </div>

                <div className="flex items-center justify-between font-mono text-[10px] text-[#888888] pt-1.5 border-t border-[rgba(241,238,232,0.06)]">
                  <span className="truncate">{layer.metric}</span>
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      isHovered ? 'bg-[#ff8c59]' : 'bg-[rgba(241,238,232,0.2)]'
                    }`}
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Editorial Footer Metadata */}
      <div className="mt-4 pt-3 border-t border-[rgba(241,238,232,0.08)] flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] text-[#aaa9a4]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff8c59]" aria-hidden="true" />
          <span>KIET IT · 28.6692° N, 77.4538° E</span>
        </div>
        <div className="uppercase tracking-wider text-[#dedad4]">
          Ghaziabad / Delhi NCR, India
        </div>
      </div>
    </div>
  );
};
