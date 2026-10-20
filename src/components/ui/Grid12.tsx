import React from 'react';
import type { Grid12Props } from '../../types';

export const Grid12: React.FC<Grid12Props> = ({
  children,
  className = '',
  gap = 'md',
}) => {
  const gapStyles = {
    sm: 'gap-4 md:gap-5',
    md: 'gap-6 md:gap-8',
    lg: 'gap-8 md:gap-12',
  };

  return (
    <div className={`grid grid-cols-1 md:grid-cols-12 ${gapStyles[gap]} ${className}`}>
      {children}
    </div>
  );
};
