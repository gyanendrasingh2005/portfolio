import React, { useEffect } from 'react';
import { Button } from './Button';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#030303]/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-[#080808] border border-[rgba(241,238,232,0.15)] rounded-xl p-6 md:p-8 shadow-2xl relative text-left text-[#f1eee8]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[rgba(241,238,232,0.1)] mb-6 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="live-dot" />
            <span className="text-[#ff8c59] uppercase tracking-wider">RESUME ARCHIVE</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close resume dialog"
            className="text-[#aaa9a4] hover:text-[#ff8c59] p-1 transition-colors focus-visible:outline-2 focus-visible:outline-[#ff8c59] rounded"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3
            id="resume-modal-title"
            className="font-serif text-2xl md:text-3xl font-normal text-[#f1eee8] leading-tight"
          >
            Resume Verification & Document Request
          </h3>

          <p className="font-sans text-xs sm:text-sm text-[#aaa9a4] leading-relaxed">
            The verified PDF resume is available upon direct inquiry. All credentials and collegiate milestones on this site are verified and up-to-date.
          </p>

          <div className="p-4 bg-[#0d0d0d] border-l-2 border-[#ff8c59] rounded-r space-y-1 font-mono text-xs">
            <span className="text-[10px] uppercase text-[#ff8c59] block font-semibold">
              Primary Verified Information:
            </span>
            <p className="text-[#dedad4]">
              Gyanendra Singh • B.Tech IT (2023–2027) • KIET Group of Institutions
            </p>
          </div>

          {/* Action */}
          <div className="pt-4 flex flex-wrap items-center justify-end gap-3">
            <Button variant="secondary" size="sm" onClick={onClose}>
              Dismiss
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                window.open('mailto:gyanendra2005gs@gmail.com?subject=Resume%20Inquiry%20%E2%80%94%20Gyanendra%20Singh', '_blank');
              }}
              icon={<span className="text-xs font-mono">✉</span>}
              iconPosition="right"
            >
              Email Directly
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                window.open('/resume.pdf', '_blank', 'noopener,noreferrer');
                onClose();
              }}
              icon={<span className="text-xs font-mono">↗</span>}
              iconPosition="right"
            >
              Open PDF Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
