export interface NavItem {
  label: string;
  href: string;
  id: string;
  description?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about', id: 'about', description: 'Background & Philosophy' },
  { label: 'Work', href: '#work', id: 'work', description: 'Featured Projects & Case Studies' },
  { label: 'Skills', href: '#skills', id: 'skills', description: 'Technical Toolkit & Stack' },
  { label: 'Experience', href: '#experience', id: 'experience', description: 'Problem Solving & Leadership' },
];

export const CONTACT_NAV_ITEM: NavItem = {
  label: 'Contact',
  href: '#contact',
  id: 'contact',
  description: 'Inquiries & Direct Reach',
};

export const AVAILABILITY = {
  status: 'Available for select roles',
  year: '2026–2027',
  isAvailable: true,
} as const;

export const RESUME_CONFIG = {
  filePath: '/resume.pdf',
  label: 'Resume',
  isAvailable: true,
} as const;
