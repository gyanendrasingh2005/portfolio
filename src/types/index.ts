export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'dark' | 'dark-outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isFullWidth?: boolean;
}

export interface EditorialLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  variant?: 'inline' | 'standalone' | 'nav' | 'dark';
  external?: boolean;
  showArrow?: boolean;
  className?: string;
}

export interface MicroLabelProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'dark' | 'outline';
  dot?: boolean;
  dotColor?: 'accent' | 'primary' | 'muted';
  className?: string;
}

export interface TagProps {
  label: string;
  variant?: 'light' | 'dark' | 'accent';
  mono?: boolean;
  className?: string;
}

export interface DividerProps {
  label?: string;
  index?: string | number;
  variant?: 'light' | 'dark';
  spacing?: 'sm' | 'md' | 'lg' | 'none';
  className?: string;
}

export interface SectionWrapperProps {
  id?: string;
  variant?: 'light' | 'dark';
  className?: string;
  children: React.ReactNode;
  noBorder?: boolean;
  fullWidth?: boolean;
  py?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

export interface Grid12Props {
  children: React.ReactNode;
  className?: string;
  gap?: 'sm' | 'md' | 'lg';
}
