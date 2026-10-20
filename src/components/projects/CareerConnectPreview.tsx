import React from 'react';

export const CareerConnectPreview: React.FC = () => {
  return (
    <div
      className="w-full bg-[#F7F5F0] border border-[#DDD9D1] rounded-sm p-5 sm:p-6 space-y-4 shadow-subtle select-none font-mono text-xs"
      role="region"
      aria-label="Career Connect Portal UI Preview"
    >
      {/* Top Application Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-[#DDD9D1]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DDD9D1]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#DDD9D1]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#C65D36]" />
          </div>
          <span className="font-heading font-bold text-xs text-[#191919] tracking-tight ml-1">
            Career Connect
          </span>
          <span className="text-[#DDD9D1]">/</span>
          <span className="text-[10px] text-[#66645F] uppercase tracking-wider">
            Placement Portal
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C65D36] animate-pulse" />
          <span className="text-[10px] uppercase tracking-wider text-[#C65D36] font-semibold">
            Drive Active
          </span>
        </div>
      </div>

      {/* Quick Drive Metrics */}
      <div className="grid grid-cols-3 gap-2 py-1">
        <div className="p-2.5 bg-[#F2EFE9] border border-[#DDD9D1] rounded-xs space-y-0.5">
          <span className="text-[9px] uppercase tracking-wider text-[#66645F] block">Registered</span>
          <span className="font-heading text-lg font-bold text-[#191919]">48 Candidates</span>
        </div>
        <div className="p-2.5 bg-[#F2EFE9] border border-[#DDD9D1] rounded-xs space-y-0.5">
          <span className="text-[9px] uppercase tracking-wider text-[#66645F] block">Criteria Cutoff</span>
          <span className="font-heading text-lg font-bold text-[#C65D36]">≥ 8.0 CGPA</span>
        </div>
        <div className="p-2.5 bg-[#F2EFE9] border border-[#DDD9D1] rounded-xs space-y-0.5">
          <span className="text-[9px] uppercase tracking-wider text-[#66645F] block">Eligible</span>
          <span className="font-heading text-lg font-bold text-[#191919]">34 Verified</span>
        </div>
      </div>

      {/* Live Application Pipeline */}
      <div className="space-y-2 pt-1">
        <div className="flex items-center justify-between text-[10px] text-[#66645F] uppercase tracking-wider">
          <span>Recruitment Pipeline Stage</span>
          <span>Role: Software Engineer</span>
        </div>

        <div className="grid grid-cols-4 gap-1.5 text-center">
          <div className="p-2 bg-[#F2EFE9] border border-[#C65D36] rounded-xs">
            <span className="text-[10px] text-[#66645F] block">Applied</span>
            <span className="font-bold text-[#C65D36]">48</span>
          </div>
          <div className="p-2 bg-[#F2EFE9] border border-[#DDD9D1] rounded-xs">
            <span className="text-[10px] text-[#66645F] block">Screened</span>
            <span className="font-bold text-[#191919]">34</span>
          </div>
          <div className="p-2 bg-[#F2EFE9] border border-[#DDD9D1] rounded-xs">
            <span className="text-[10px] text-[#66645F] block">Interview</span>
            <span className="font-bold text-[#191919]">12</span>
          </div>
          <div className="p-2 bg-[#F2EFE9] border border-[#DDD9D1] rounded-xs">
            <span className="text-[10px] text-[#66645F] block">Selected</span>
            <span className="font-bold text-[#C65D36]">4</span>
          </div>
        </div>
      </div>

      {/* Query Filter Simulator */}
      <div className="p-3 bg-[#191919] text-[#F5F2EB] rounded-xs space-y-1.5 font-mono text-[11px]">
        <div className="flex items-center justify-between text-[10px] text-[#B8B5AD] border-b border-[#333431] pb-1">
          <span>// Database Eligibility Query Hook</span>
          <span className="text-[#C65D36]">Indexed Scan: 1.2ms</span>
        </div>
        <p className="text-[#B8B5AD]">
          <span className="text-[#C65D36]">SELECT</span> student_id, name, cgpa <span className="text-[#C65D36]">FROM</span> applicants
        </p>
        <p className="text-[#B8B5AD]">
          <span className="text-[#C65D36]">WHERE</span> cgpa &gt;= 8.0 <span className="text-[#C65D36]">AND</span> active_backlogs = 0;
        </p>
      </div>

      {/* Bottom RBAC Security Boundary */}
      <div className="pt-2 border-t border-[#DDD9D1] flex items-center justify-between text-[10px] text-[#66645F]">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#191919]" />
          <span>RBAC: Student • Coordinator • Recruiter</span>
        </div>
        <span className="font-semibold text-[#191919]">Express + MongoDB + JWT</span>
      </div>
    </div>
  );
};
