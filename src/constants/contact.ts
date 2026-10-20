export interface ContactChannel {
  label: string;
  value: string;
  detail: string;
}

export interface ContactMethodItem {
  id: 'email' | 'linkedin' | 'github' | 'phone' | 'resume';
  index: string;
  label: string;
  actionText: string;
  valueText: string;
  href: string;
  isExternal: boolean;
  isConfigured: boolean;
  category: string;
  description: string;
  statusNote: string;
}

export interface ContactData {
  eyebrow: string;
  headline: string;
  supportingText: string;
  primaryCta: {
    label: string;
    sublabel: string;
    emailAddress?: string;
    isConfigured: boolean;
    subject: string;
    body: string;
    statusNote: string;
  };
  contactMethods: ContactMethodItem[];
  channels: ContactChannel[];
  monogram: {
    letters: string;
    caption: string;
    location: string;
    status: string;
  };
}

export const CONTACT_DATA: ContactData = {
  eyebrow: 'CONTACT / DIRECT COMMUNICATION',
  headline: 'Have a meaningful problem to solve? Let’s talk.',
  supportingText:
    'I’m always open to discussing software engineering roles, full-stack opportunities, system architecture challenges, and technical collaborations.',
  primaryCta: {
    label: 'Send Email Directly',
    sublabel: 'Reaches my personal inbox directly',
    emailAddress: 'gyanendra2005gs@gmail.com',
    isConfigured: true,
    subject: 'Inquiry / Engineering Opportunity — Gyanendra Singh',
    body: 'Hello Gyanendra,\n\nI reviewed your portfolio and would like to discuss an engineering opportunity or collaboration with you.\n\nBest regards,',
    statusNote: 'Active and monitored daily',
  },
  contactMethods: [
    {
      id: 'email',
      index: '01',
      label: 'Direct Email',
      actionText: 'gyanendra2005gs@gmail.com',
      valueText: 'gyanendra2005gs@gmail.com',
      href: 'mailto:gyanendra2005gs@gmail.com',
      isExternal: false,
      isConfigured: true,
      category: 'Primary Channel',
      description: 'Best channel for formal discussions, interview invitations, and project inquiries.',
      statusNote: 'Monitored daily with fast response time',
    },
    {
      id: 'linkedin',
      index: '02',
      label: 'LinkedIn Profile',
      actionText: 'gyanendra-singh-844518294 ↗',
      valueText: 'linkedin.com/in/gyanendra-singh-844518294',
      href: 'https://linkedin.com/in/gyanendra-singh-844518294',
      isExternal: true,
      isConfigured: true,
      category: 'Professional Network',
      description: 'Professional experience, updates, and collegiate community connections.',
      statusNote: 'Verified public profile',
    },
    {
      id: 'github',
      index: '03',
      label: 'GitHub Repositories',
      actionText: 'gyanendrasingh2005 ↗',
      valueText: 'github.com/gyanendrasingh2005',
      href: 'https://github.com/gyanendrasingh2005',
      isExternal: true,
      isConfigured: true,
      category: 'Open Source & Code',
      description: 'Source code, Docker architectures, and algorithmic repositories.',
      statusNote: 'Actively maintained projects',
    },
    {
      id: 'phone',
      index: '04',
      label: 'Phone Contact',
      actionText: '+91-9555694252 ↗',
      valueText: '+91-9555694252',
      href: 'tel:+919555694252',
      isExternal: false,
      isConfigured: true,
      category: 'Telephone',
      description: 'Direct telephone line for urgent communications and recruiter outreach.',
      statusNote: 'Available during working hours',
    },
    {
      id: 'resume',
      index: '05',
      label: 'Curriculum Vitae',
      actionText: 'Download PDF Resume ↗',
      valueText: 'Verified PDF Document',
      href: '/resume.pdf',
      isExternal: true,
      isConfigured: true,
      category: 'Credentials',
      description: 'Complete one-page technical resume including education, projects, ratings, and certifications.',
      statusNote: 'Verified & Up to Date',
    },
  ],
  channels: [
    {
      label: 'Location',
      value: 'Ghaziabad, Uttar Pradesh, India',
      detail: 'Delhi NCR region',
    },
    {
      label: 'Education',
      value: 'KIET Group of Institutions',
      detail: 'B.Tech IT (2023–2027) · CGPA: 8.1',
    },
    {
      label: 'Phone',
      value: '+91-9555694252',
      detail: 'Direct calling line',
    },
  ],
  monogram: {
    letters: 'GS.',
    caption: 'Gyanendra Singh',
    location: 'Ghaziabad, Uttar Pradesh, India',
    status: 'Available for Software Roles (2026–2027)',
  },
};
