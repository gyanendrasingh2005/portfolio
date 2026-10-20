import React from 'react';
import type { DividerProps } from '../../types';

export const Divider: React.FC<DividerProps> = ({
  label,
  index,
  variant = 'light',
  spacing = 'md',
  className = '',
}) => {
  const borderColor = variant === 'light' ? 'border-[#DDD9D1]' : 'border-[#333431]';
  const textColor = variant === 'light' ? 'text-[#66645F]' : 'text-[#B8B5AD]';
  const bgColor = variant === 'light' ? 'bg-[#F7F5F0]' : 'bg-[#20211F]';

  const spacingStyles = {
    none: 'my-0',
    sm: 'my-6',
    md: 'my-12 md:my-16',
    lg: 'my-16 md:my-24',
  };

  if (!label && index === undefined) {
    return <hr className={`w-full border-t ${borderColor} ${spacingStyles[spacing]} ${className}`} />;
  }

  return (
    <div className={`relative flex items-center justify-between w-full ${spacingStyles[spacing]} ${className}`}>
      <div className={`absolute inset-0 flex items-center`} aria-hidden="true">
        <div className={`w-full border-t ${borderColor}`} />
      </div>
      <div className={`relative flex items-center justify-between w-full ${bgColor} px-2 md:px-4`}>
        {index !== undefined && (
          <span className={`font-mono text-[11px] tracking-wider uppercase ${textColor}`}>
            [{typeof index === 'number' ? String(index).padStart(2, '0') : index}]
          </span>
        )}
        {label && (
          <span className={`font-mono text-[11px] tracking-widest uppercase font-medium ${textColor}`}>
            {label}
          </span>
        )}
      </div>
    </div>
  );
};
