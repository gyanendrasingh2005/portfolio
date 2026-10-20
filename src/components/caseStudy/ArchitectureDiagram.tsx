import React from 'react';
import type { ArchitectureNode } from '../../constants/caseStudies';

interface ArchitectureDiagramProps {
  nodes: ArchitectureNode[];
  dataFlow: string[];
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({
  nodes,
  dataFlow,
}) => {
  return (
    <div className="w-full bg-[#F2EFE9] border border-[#DDD9D1] rounded-sm p-6 sm:p-8 space-y-6 select-none">
      <div className="flex items-center justify-between pb-4 border-b border-[#DDD9D1]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C65D36]" aria-hidden="true" />
          <h4 className="font-heading text-sm sm:text-base font-bold text-[#191919]">
            System Architecture Topology
          </h4>
        </div>
        <span className="font-mono text-[11px] uppercase tracking-wider text-[#66645F]">
          COMPONENT GRAPH
        </span>
      </div>

      {/* Nodes Graph */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {nodes.map((node, i) => (
          <div
            key={node.id}
            className="p-4 bg-[#F7F5F0] border border-[#DDD9D1] rounded-xs space-y-2 hover:border-[#C65D36] transition-colors"
          >
            <div className="flex items-center justify-between font-mono text-[10px] text-[#66645F]">
              <span className="text-[#C65D36] font-bold">NODE [0{i + 1}]</span>
              <span className="uppercase tracking-wider px-1.5 py-0.5 bg-[#EFECE5] rounded-xs">
                {node.type}
              </span>
            </div>
            <h5 className="font-heading text-xs sm:text-sm font-semibold text-[#191919]">
              {node.name}
            </h5>
            <p className="font-sans text-[11px] text-[#66645F] leading-snug">
              {node.role}
            </p>
            <div className="pt-2 border-t border-[#DDD9D1]/50 font-mono text-[10px] text-[#191919] font-medium">
              {node.tech}
            </div>
          </div>
        ))}
      </div>

      {/* Verified Pipeline Flow */}
      <div className="pt-4 border-t border-[#DDD9D1] space-y-3">
        <span className="font-mono text-xs uppercase tracking-wider text-[#191919] font-semibold block">
          End-to-End Data Pipeline //
        </span>
        <div className="space-y-1.5 font-mono text-xs text-[#66645F]">
          {dataFlow.map((step, idx) => (
            <div
              key={idx}
              className="p-2.5 bg-[#F7F5F0] border border-[#DDD9D1]/70 rounded-xs flex items-start gap-2.5"
            >
              <span className="text-[#C65D36] font-bold shrink-0">→</span>
              <span className="leading-relaxed">{step}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
