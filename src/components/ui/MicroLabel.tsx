import React from 'react';
import type { MicroLabelProps } from '../../types';

export const MicroLabel: React.FC<MicroLabelProps> = ({
  children,
  variant = 'default',
  dot = false,
  dotColor = 'accent',
  className = '',
}) => {
  const variantStyles = {
    default: 'text-[#66645F]',
    accent: 'text-[#C65D36]',
    dark: 'text-[#B8B5AD]',
    outline: 'text-[#191919] border border-[#DDD9D1] px-2 py-0.5 rounded-xs bg-[#F2EFE9]',
  };

  const dotColorStyles = {
    accent: 'bg-[#C65D36]',
    primary: 'bg-[#191919]',
    muted: 'bg-[#66645F]',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wider uppercase font-medium select-none ${variantStyles[variant]} ${className}`}
    >
      {dot && (
        <span
          className={`inline-block w-1.5 h-1.5 rounded-full ${dotColorStyles[dotColor]}`}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </span>
  );
};
