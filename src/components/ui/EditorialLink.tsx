import React from 'react';
import type { EditorialLinkProps } from '../../types';

export const EditorialLink: React.FC<EditorialLinkProps> = ({
  href,
  children,
  variant = 'standalone',
  external = false,
  showArrow = false,
  className = '',
  ...props
}) => {
  const baseStyles =
    'group inline-flex items-center gap-1 transition-colors duration-180 ease-out focus-visible:outline-2 focus-visible:outline-[#C65D36] focus-visible:outline-offset-2 rounded-xs select-none';

  const variantStyles = {
    inline:
      'text-[#191919] underline decoration-[#DDD9D1] underline-offset-4 hover:decoration-[#C65D36] hover:text-[#C65D36]',
    standalone:
      'font-mono text-xs md:text-sm text-[#191919] hover:text-[#C65D36] tracking-wide',
    nav:
      'font-mono text-xs tracking-wider uppercase text-[#66645F] hover:text-[#191919] py-1',
    dark:
      'font-mono text-xs md:text-sm text-[#F5F2EB] hover:text-[#C65D36] tracking-wide',
  };

  const isExternal = external || href.startsWith('http') || href.startsWith('mailto:');

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      <span className="relative">
        {children}
        <span className="block h-[1px] w-0 bg-[#C65D36] transition-all duration-200 group-hover:w-full" />
      </span>

      {showArrow && (
        <span
          aria-hidden="true"
          className="inline-block transition-transform duration-180 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#C65D36]"
        >
          ↗
        </span>
      )}
    </a>
  );
};
