import React from 'react';

export const AchievementsStrip: React.FC = () => {
  const metrics = [
    {
      value: '1,400',
      suffix: '+',
      label: 'algorithmic problems solved',
      sublabel: 'Across LeetCode, Codeforces & GeeksforGeeks',
    },
    {
      value: '1875',
      suffix: '+',
      label: 'LeetCode contest rating',
      sublabel: 'Codeforces 1215 · Top algorithmic consistency',
    },
    {
      value: '500',
      suffix: '+',
      label: 'contest participants lead',
      sublabel: 'K3 CodeHuddle & 10+ DSA workshops',
    },
    {
      value: '8.1',
      suffix: '',
      label: 'academic CGPA in IT',
      sublabel: 'KIET Group of Institutions (2023–2027)',
    },
  ];

  return (
    <section
      aria-label="Engineering metrics and verified milestones"
      className="w-full border-y border-[rgba(241,238,232,0.12)] bg-[#080808] select-none"
    >
      <div className="layout-container py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 divide-y sm:divide-y-0 sm:divide-x divide-[rgba(241,238,232,0.1)]">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between pt-6 sm:pt-0 ${
                idx > 0 ? 'sm:pl-8 lg:pl-10' : ''
              }`}
            >
              <div>
                <strong className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-normal tracking-[-0.04em] text-[#f1eee8] leading-none block">
                  {item.value}
                  {item.suffix && <span className="text-[#ff8c59]">{item.suffix}</span>}
                </strong>

                <p className="font-sans text-xs sm:text-sm text-[#dedad4] font-medium mt-3 leading-snug">
                  {item.label}
                </p>

                <p className="font-sans text-[11px] text-[#aaa9a4] leading-relaxed mt-1">
                  {item.sublabel}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[rgba(241,238,232,0.06)] flex items-center justify-between font-mono text-[9px] uppercase tracking-wider text-[#787570]">
                <span>VERIFIED METRIC</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff8c59]" aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
