export interface AchievementItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  isAccent?: boolean;
  tag?: string;
}

/**
 * Editorial Achievements Strip Data
 * Derived directly from Gyanendra Singh's verified resume:
 * - 1400+ problems solved across LeetCode, Codeforces, and GeeksforGeeks.
 * - LeetCode: 1875+ rating, Codeforces: 1215 rating.
 * - K3 CodeHuddle: 500+ participants national ICPC-style contest.
 * - B.Tech in Information Technology: 8.1 CGPA (KIET Group of Institutions).
 */
export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'problems',
    value: '1,400+',
    label: 'Algorithmic Problems Solved',
    sublabel: 'Across LeetCode, Codeforces & GeeksforGeeks',
    isAccent: true,
    tag: 'RIGOR',
  },
  {
    id: 'ratings',
    value: '1875+',
    label: 'LeetCode Contest Rating',
    sublabel: 'Codeforces 1215 · Top tier algorithmic consistency',
    isAccent: false,
    tag: 'COMPETITIVE',
  },
  {
    id: 'community',
    value: '500+',
    label: 'Contest Participants Lead',
    sublabel: 'Problem Setter at K3 · CodeHuddle & 10+ workshops',
    isAccent: false,
    tag: 'LEADERSHIP',
  },
  {
    id: 'education',
    value: '8.1',
    label: 'Academic CGPA in IT',
    sublabel: 'KIET Group of Institutions, Ghaziabad (2023–2027)',
    isAccent: false,
    tag: 'ACADEMIC',
  },
];
