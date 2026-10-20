import React, { useState } from 'react';
import { JOURNAL_DATA, type TechnicalArticle } from '../../constants/journal';
import { Tag } from '../ui/Tag';
import { ArticleReaderModal } from './ArticleReaderModal';

interface TechnicalJournalProps {
  onOpenCaseStudy?: (caseStudyId: string) => void;
}

export const TechnicalJournal: React.FC<TechnicalJournalProps> = ({
  onOpenCaseStudy,
}) => {
  const { supportingText, featuredArticleId, articles } = JOURNAL_DATA;
  const [selectedArticle, setSelectedArticle] = useState<TechnicalArticle | null>(null);

  const featuredArticle = articles.find((a) => a.id === featuredArticleId) || articles[0];
  const listArticles = articles.filter((a) => a.id !== featuredArticle.id);

  return (
    <div className="space-y-20 md:space-y-28 select-none">
      {/* 1. Sarthak-Style Chapter Header */}
      <div className="section-label">
        <span>07 / ENGINEERING JOURNAL</span>
        <span>NOTES FROM REAL SYSTEMS</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
        <div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#f1eee8] leading-[1.05] tracking-[-0.04em]">
            A developer's journal.<br />
            <em className="text-[#ff8c59] italic">Notes from the bench.</em>
          </h2>
        </div>
        <p className="font-sans text-sm sm:text-base text-[#aaa9a4] max-w-md leading-relaxed">
          {supportingText}
        </p>
      </div>

      {/* 2. Featured Engineering Note */}
      <div className="p-8 sm:p-10 bg-[#080808] border border-[rgba(241,238,232,0.12)] rounded-xl space-y-6 shadow-2xl relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[rgba(241,238,232,0.08)]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-[#ff8c59]">
              [{featuredArticle.index}] // FEATURED MEMO
            </span>
            <span className="text-[rgba(241,238,232,0.2)] font-mono text-xs hidden sm:inline">|</span>
            <span className="font-mono text-xs text-[#aaa9a4] hidden sm:inline uppercase">
              {featuredArticle.category}
            </span>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs text-[#aaa9a4]">
            <span className="text-[#dedad4]">{featuredArticle.estimatedReadTime}</span>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-3xl sm:text-4xl text-[#f1eee8] font-normal tracking-tight">
            {featuredArticle.title}
          </h3>
          <p className="font-sans text-sm sm:text-base text-[#aaa9a4] leading-relaxed max-w-3xl">
            {featuredArticle.summary}
          </p>
        </div>

        {/* Abstract Box */}
        {featuredArticle.fullContent && (
          <div className="p-4 bg-[#0d0d0d] border-l-2 border-[#ff8c59] rounded-r space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#ff8c59] font-bold block">
              Abstract // Lead
            </span>
            <p className="font-sans text-xs sm:text-sm text-[#dedad4] leading-relaxed">
              {featuredArticle.fullContent.lead}
            </p>
          </div>
        )}

        {/* Key takeaways & Action */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {featuredArticle.keyTakeaways.slice(0, 3).map((takeaway, idx) => (
              <Tag key={idx} label={takeaway} variant="dark" />
            ))}
          </div>

          <button
            type="button"
            onClick={() => setSelectedArticle(featuredArticle)}
            className="pill-link group text-xs py-2 px-5"
          >
            <span>Read Complete Note</span>
            <span className="text-[#ff8c59] font-mono" aria-hidden="true">↗</span>
          </button>
        </div>
      </div>

      {/* 3. Secondary Articles List */}
      <div className="space-y-6">
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#aaa9a4] block">
          ARCHIVED FIELD NOTES & ANALYSIS
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {listArticles.map((article) => (
            <div
              key={article.id}
              className="p-6 sm:p-7 bg-[#080808] border border-[rgba(241,238,232,0.1)] rounded-xl flex flex-col justify-between space-y-5 hover:border-[rgba(241,238,232,0.25)] transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-[10px] text-[#aaa9a4]">
                  <span className="text-[#ff8c59]">[{article.index}]</span>
                  <span>{article.estimatedReadTime}</span>
                </div>

                <h4 className="font-serif text-2xl text-[#f1eee8] font-normal leading-snug">
                  {article.title}
                </h4>

                <p className="font-sans text-xs text-[#aaa9a4] leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-[rgba(241,238,232,0.06)] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  <Tag label={article.category} variant="dark" />
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedArticle(article)}
                  className="text-link text-xs"
                >
                  <span>Read note ↗</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      <ArticleReaderModal
        article={selectedArticle}
        isOpen={Boolean(selectedArticle)}
        onClose={() => setSelectedArticle(null)}
        onOpenCaseStudy={onOpenCaseStudy}
      />
    </div>
  );
};
