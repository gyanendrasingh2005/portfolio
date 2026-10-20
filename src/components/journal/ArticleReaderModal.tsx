import React, { useEffect } from 'react';
import type { TechnicalArticle } from '../../constants/journal';

interface ArticleReaderModalProps {
  article: TechnicalArticle | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenCaseStudy?: (caseStudyId: string) => void;
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({
  article,
  isOpen,
  onClose,
  onOpenCaseStudy,
}) => {
  // Handle keyboard Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !article) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="reader-article-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#030303]/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        className="w-full max-w-4xl max-h-[90vh] bg-[#080808] border border-[rgba(241,238,232,0.15)] rounded-xl shadow-2xl flex flex-col overflow-hidden text-[#f1eee8]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* TOP EDITORIAL STATUS BAR */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[rgba(241,238,232,0.1)] bg-[#0d0d0d] shrink-0">
          <div className="flex items-center gap-3">
            <span className="live-dot" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#ff8c59]">
              {article.statusLabel}
            </span>
            <span className="text-[rgba(241,238,232,0.2)] font-mono text-xs hidden sm:inline">/</span>
            <span className="font-mono text-xs text-[#aaa9a4] hidden sm:inline uppercase">
              {article.category}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close article reader"
            className="font-mono text-xs text-[#dedad4] hover:text-[#ff8c59] px-3 py-1 border border-[rgba(241,238,232,0.2)] rounded transition-colors focus-visible:outline-2 focus-visible:outline-[#ff8c59]"
          >
            ESC / CLOSE ✕
          </button>
        </div>

        {/* SCROLLABLE ARTICLE BODY */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 text-left">
          {/* Article Header */}
          <div className="space-y-4 pb-6 border-b border-[rgba(241,238,232,0.1)]">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[#aaa9a4]">
              <span className="text-[#ff8c59] font-semibold">[{article.index}]</span>
              <span>{article.estimatedReadTime}</span>
              <span>•</span>
              <span className="uppercase">{article.category}</span>
            </div>

            <h2
              id="reader-article-title"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#f1eee8] leading-tight tracking-tight"
            >
              {article.title}
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#dedad4] leading-relaxed italic">
              &ldquo;{article.summary}&rdquo;
            </p>
          </div>

          {/* Full Markdown/Structured Article Content */}
          <div className="space-y-6 font-sans text-sm sm:text-base text-[#dedad4] leading-relaxed">
            {article.fullContent && (
              <div className="p-4 bg-[#111111] border-l-2 border-[#ff8c59] rounded-r space-y-1">
                <span className="font-mono text-xs uppercase tracking-wider text-[#ff8c59] font-bold block">
                  Lead Summary //
                </span>
                <p className="text-xs sm:text-sm text-[#aaa9a4]">
                  {article.fullContent.lead}
                </p>
              </div>
            )}

            {article.fullContent?.sections.map((section, sIdx) => (
              <div key={sIdx} className="space-y-3">
                <h3 className="font-serif text-2xl text-[#f1eee8] font-normal">
                  {section.heading}
                </h3>
                {section.body.map((par, pIdx) => (
                  <p key={pIdx} className="text-[#aaa9a4] text-sm">
                    {par}
                  </p>
                ))}

                {section.codeSnippet && (
                  <div className="p-4 bg-[#050505] border border-[rgba(241,238,232,0.1)] rounded-md font-mono text-xs text-[#dedad4] overflow-x-auto my-3">
                    <div className="text-[10px] text-[#ff8c59] uppercase mb-2">
                      // {section.codeSnippet.filename || section.codeSnippet.language}
                    </div>
                    <pre>{section.codeSnippet.code}</pre>
                    <div className="text-[11px] text-[#787570] mt-2">
                      {section.codeSnippet.explanation}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div className="space-y-3 pt-4 border-t border-[rgba(241,238,232,0.08)]">
              <h3 className="font-serif text-2xl text-[#f1eee8] font-normal">
                Key Engineering Takeaways
              </h3>
              <ul className="space-y-2 text-sm text-[#aaa9a4]">
                {article.keyTakeaways.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#ff8c59] font-mono">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Connected Case Study Link if available */}
          {article.connectedProject?.caseStudyId && (
            <div className="pt-6 border-t border-[rgba(241,238,232,0.1)] flex items-center justify-between">
              <span className="font-mono text-xs text-[#aaa9a4]">Related Project: {article.connectedProject.name}</span>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenCaseStudy?.(article.connectedProject!.caseStudyId!);
                }}
                className="pill-link text-xs py-2 px-4"
              >
                <span>Open Project Deep Dive</span>
                <span>→</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
