import React from 'react';
import type { SectionWrapperProps } from '../../types';

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  variant = 'light',
  className = '',
  children,
  noBorder = false,
  fullWidth = false,
  py = 'lg',
}) => {
  // Luxury Dark Editorial palette mapping
  const bgStyle = variant === 'dark' ? 'bg-[#080808] text-[#f1eee8]' : 'bg-[#030303] text-[#f1eee8]';
  const borderStyle = noBorder ? '' : 'border-t border-[rgba(241,238,232,0.1)]';

  const pyStyles = {
    none: 'py-0',
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-24',
    xl: 'py-20 md:py-32',
  };

  return (
    <section
      id={id}
      className={`relative w-full ${bgStyle} ${borderStyle} ${pyStyles[py]} transition-colors duration-200 ${className}`}
    >
      <div className={fullWidth ? 'w-full' : 'layout-container'}>
        {children}
      </div>
    </section>
  );
};
