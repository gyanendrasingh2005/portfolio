export interface ContestHighlight {
  title: string;
  partner: string;
  category: string;
  metrics: {
    label: string;
    value: string;
    detail: string;
  }[];
  overview: string;
  problemSettingContributions: string[];
}

export interface SupportingActivity {
  id: string;
  index: string;
  title: string;
  organization: string;
  role: string;
  period?: string;
  description: string;
  tags: string[];
}

export interface LeadershipData {
  eyebrow: string;
  headline: string;
  supportingText: string;
  featuredOrganization: {
    name: string;
    acronym: string;
    institution: string;
    role: string;
    type: string;
    summary: string;
    responsibilities: string[];
  };
  contestHighlight: ContestHighlight;
  narrative: {
    title: string;
    lead: string;
    paragraphs: string[];
    quote: string;
    quoteAuthor: string;
  };
  supportingActivities: SupportingActivity[];
}

/**
 * LEADERSHIP & COMMUNITY BUILDING DATA
 * 
 * Verified Resume Data:
 * - Problem Setter, KIET Koders Korner (K3) | Aug 2024 – Present | Ghaziabad, UP
 * - Mentored 50+ students through 10+ DSA/C++ workshops covering data structures, algorithms, competitive programming, and interview preparation.
 * - Authored coding problems for K3 CodeHuddle, organized an ICPC-style national-level contest with 500+ participants, and coordinated monthly programming contests.
 */
export const LEADERSHIP_DATA: LeadershipData = {
  eyebrow: 'LEADERSHIP / COMMUNITY / INITIATIVE',
  headline: 'Building more than software.',
  supportingText:
    'Technical communities grow when people share knowledge, create opportunities, and make problem-solving a collective effort.',
  featuredOrganization: {
    name: "KIET Koders Korner",
    acronym: 'K3',
    institution: 'KIET Group of Institutions, Ghaziabad',
    role: 'Problem Setter & Student Mentor',
    type: 'Collegiate Competitive Programming & Technical Community',
    summary:
      'Directing collegiate algorithmic culture, orchestrating national ICPC-style coding contests, and mentoring peer engineers through structured competitive programming roadmaps.',
    responsibilities: [
      'Mentored 50+ students through 10+ DSA/C++ workshops covering data structures, algorithms, competitive programming, and interview preparation.',
      'Authored coding problems for K3 CodeHuddle, an ICPC-style national-level contest with 500+ participants.',
      'Coordinated monthly programming contests with formal constraint bounds and automated test case evaluation.',
      'Authored and validated original algorithmic problem suites with rigorous constraint bounds and formal edge cases.',
      'Fostered peer mentoring circles to break down complex data structure concepts into intuitive, step-by-step techniques.',
    ],
  },
  contestHighlight: {
    title: "K3 CodeHuddle National Contest",
    partner: 'K3 CodeHuddle',
    category: 'ICPC-Style National-Level Programming Contest',
    metrics: [
      {
        label: 'Participants',
        value: '500+',
        detail: 'Undergraduate competitors in ICPC-style contest',
      },
      {
        label: 'Workshops',
        value: '10+',
        detail: 'DSA/C++ sessions covering core structures & algorithms',
      },
      {
        label: 'Mentored',
        value: '50+',
        detail: 'Students guided in interview preparation & competitive coding',
      },
    ],
    overview:
      'An ICPC-style timed, national-scope competitive programming contest organized by KIET Koders Korner (K3) to test algorithmic reasoning, mathematical problem reduction, and edge-case resilience under timed conditions.',
    problemSettingContributions: [
      'Authored original problem statements with unambiguous formal specifications, input/output limits, and sample test explanations.',
      'Engineered multi-tier test case suites including boundary minimums, maximum input thresholds, and randomized stress data to prevent incorrect Big-O heuristics.',
      'Calibrated strict execution constraints (1.0s CPU runtime limits and 256MB memory ceilings) to ensure optimal asymptotic solutions were cleanly distinguished.',
    ],
  },
  narrative: {
    title: 'Leadership through contribution',
    lead:
      'True technical leadership is not about title or authority—it is about creating an environment where peers feel equipped to tackle difficult engineering problems.',
    paragraphs: [
      'In a university setting, the steepest barrier to competitive programming is often intimidation: students encounter complex graph or dynamic programming challenges and assume algorithmic mastery is out of reach.',
      'By designing problems that bridge conceptual intuition with rigorous implementation, and by breaking down contest problems into step-by-step editorial writeups, I focused on making algorithmic thinking accessible.',
      'Mentoring 50+ students through 10+ DSA workshops continually sharpens my own engineering discipline: you only truly master an algorithm when you can construct edge cases that expose its subtlest failure modes.',
    ],
    quote:
      'Community leadership in engineering means lowering the barrier to entry while raising the standard of understanding.',
    quoteAuthor: 'Gyanendra Singh // Leadership Principle',
  },
  supportingActivities: [
    {
      id: 'mentorship',
      index: '01',
      title: 'DSA & C++ Workshops',
      organization: 'KIET Koders Korner (K3)',
      role: 'Problem Setter & Lead Mentor',
      period: 'Aug 2024 – Present',
      description:
        'Conducted 10+ structured workshops for 50+ students covering data structures, algorithmic complexity, competitive programming, and technical interview preparation.',
      tags: ['Data Structures', 'Algorithms', 'C++ Workshops', 'Interview Prep'],
    },
    {
      id: 'contests',
      index: '02',
      title: 'Monthly Programming Contests',
      organization: 'KIET Koders Korner (K3)',
      role: 'Contest Coordinator',
      period: 'Aug 2024 – Present',
      description:
        'Coordinated monthly competitive programming contests, validating edge-case suites and providing post-contest editorial discussions.',
      tags: ['Contest Coordination', 'Problem Setting', 'Editorial Review'],
    },
  ],
};
