import React from 'react';
import type { TagProps } from '../../types';

export const Tag: React.FC<TagProps> = ({
  label,
  variant = 'light',
  mono = true,
  className = '',
}) => {
  const variantStyles = {
    light:
      'bg-[#121212] text-[#dedad4] border border-[rgba(241,238,232,0.1)] hover:border-[#ff8c59]',
    dark:
      'bg-[#0d0d0d] text-[#f1eee8] border border-[rgba(241,238,232,0.12)] hover:border-[#ff8c59]',
    accent:
      'bg-[#ff8c59]/15 text-[#ff8c59] border border-[#ff8c59]/35',
  };

  const fontStyle = mono ? 'font-mono text-[11px]' : 'font-sans text-xs';

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded transition-colors duration-150 select-none ${fontStyle} ${variantStyles[variant]} ${className}`}
    >
      {label}
    </span>
  );
};
