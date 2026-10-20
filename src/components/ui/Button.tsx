import React from 'react';
import type { ButtonProps } from '../../types';

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  isFullWidth = false,
  className = '',
  disabled = false,
  type = 'button',
  ...props
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center font-sans transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#ff8c59] focus-visible:outline-offset-2 disabled:opacity-40 disabled:cursor-not-allowed select-none rounded-full tracking-normal';

  const variantStyles = {
    primary:
      'bg-[#ff8c59] text-[#030303] hover:bg-[#ff7738] border border-transparent font-medium shadow-md',
    secondary:
      'bg-[#0d0d0d] text-[#f1eee8] border border-[rgba(241,238,232,0.18)] hover:border-[#ff8c59] hover:text-[#ff8c59]',
    ghost:
      'bg-transparent text-[#dedad4] hover:text-[#ff8c59] border border-transparent',
    dark:
      'bg-[#ff8c59] text-[#030303] hover:bg-[#ff7738] border border-transparent font-medium',
    'dark-outline':
      'bg-transparent text-[#f1eee8] border border-[rgba(241,238,232,0.2)] hover:border-[#ff8c59] hover:text-[#ff8c59]',
  };

  const sizeStyles = {
    sm: 'text-xs px-4 py-1.5 gap-1.5',
    md: 'text-xs md:text-sm px-5 py-2.5 gap-2',
    lg: 'text-sm md:text-base px-6 py-3.5 gap-2.5',
  };

  const widthStyle = isFullWidth ? 'w-full' : '';

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="inline-flex shrink-0 transition-transform duration-180 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="inline-flex shrink-0 transition-transform duration-180 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </button>
  );
};
