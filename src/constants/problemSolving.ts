export interface CodingPlatformProfile {
  id: 'leetcode' | 'hackerrank' | 'codeforces' | 'geeksforgeeks';
  index: string;
  name: string;
  category: string;
  username?: string;
  profileUrl?: string;
  isConfigured: boolean;
  hasPublicAccount: boolean;
  verifiedMetric?: {
    label: string;
    value: string;
  };
  focusAreas: string[];
  statusNote: string;
  description: string;
}

export interface ProblemSolvingPrinciple {
  number: string;
  title: string;
  description: string;
  technicalNote: string;
}

export interface ProblemSolvingData {
  eyebrow: string;
  headline: string;
  supportingText: string;
  primaryMetric: {
    value: string;
    label: string;
    sublabel: string;
    source: string;
    integrityNote: string;
  };
  narrative: {
    lead: string;
    body: string[];
  };
  approachTitle: string;
  approachSubtitle: string;
  principles: ProblemSolvingPrinciple[];
  platforms: CodingPlatformProfile[];
}

/**
 * PROBLEM SOLVING & COMPETITIVE PROGRAMMING DATA
 * 
 * Verified Resume Data:
 * - Solved 1400+ programming problems across LeetCode, Codeforces, and GeeksforGeeks.
 * - LeetCode: 1875+ rating
 * - Codeforces: 1215 rating
 */
export const PROBLEM_SOLVING_DATA: ProblemSolvingData = {
  eyebrow: 'PROBLEM SOLVING / ALGORITHMIC THINKING',
  headline: 'Better at solving problems, one problem at a time.',
  supportingText:
    'Consistent practice with data structures, algorithms, and programming challenges helps me sharpen the way I reason about software.',
  primaryMetric: {
    value: '1,400+',
    label: 'Algorithmic Problems Solved',
    sublabel: 'Across LeetCode, Codeforces, and GeeksforGeeks',
    source: 'Verified algorithmic practice across competitive coding platforms',
    integrityNote: 'Static verified milestone directly from candidate credentials.',
  },
  narrative: {
    lead: 'Algorithmic rigor is not about memorizing patterns—it is about developing systematic mental models to decompose ambiguity into predictable, deterministic operations.',
    body: [
      'Daily work with graph traversals, dynamic programming, segment trees, and binary search directly informs my production engineering. When designing APIs or backend worker queues, understanding asymptotic bounds prevents performance regressions before code reaches production.',
      'From managing memory allocations and pointers in C++ to designing sub-millisecond data indexing in relational databases, algorithmic intuition underpins every technical decision.',
    ],
  },
  approachTitle: 'How I approach a problem',
  approachSubtitle: 'A structured three-step mental discipline applied before writing a single line of code.',
  principles: [
    {
      number: '01',
      title: 'Understand the constraints before selecting an approach.',
      description:
        'Analyze input boundaries, data size limits, and edge conditions first (e.g., N ≤ 10⁵ vs N ≤ 20). Constraints immediately dictate which asymptotic complexity will pass within standard execution time limits.',
      technicalNote: 'Guides choice between O(N log N) sorting, O(N) hash frequency maps, or O(2ⁿ) backtracking.',
    },
    {
      number: '02',
      title: 'Evaluate time and space complexity.',
      description:
        'Derive worst-case and average-case time complexity (Big-O) along with auxiliary memory overhead before implementation. Refuse brute-force shortcuts when tighter mathematical bounds exist.',
      technicalNote: 'Prevents CPU throttling, Time Limit Exceeded (TLE), and memory thrashing in production.',
    },
    {
      number: '03',
      title: 'Test edge cases and refine the implementation.',
      description:
        'Stress test null or empty inputs, single-element collections, duplicate entries, extreme integers, and inverse sequences. Clean up invariant states and modularize for readability.',
      technicalNote: 'Validates off-by-one errors, recursion depth stack overflows, and numerical sign overflows.',
    },
  ],
  platforms: [
    {
      id: 'leetcode',
      index: '01',
      name: 'LeetCode',
      category: 'Data Structures & Algorithmic Patterns',
      username: 'Gyanendra__singh',
      profileUrl: 'https://leetcode.com/u/Gyanendra__singh/',
      isConfigured: true,
      hasPublicAccount: true,
      verifiedMetric: {
        label: 'Contest Rating',
        value: '1875+',
      },
      focusAreas: ['Arrays & Hashing', 'Binary Trees', 'Dynamic Programming', 'Graph BFS/DFS'],
      description:
        'Active practice arena for mastering algorithmic patterns, sliding window mechanics, two-pointer traversals, and optimal tree/graph operations with a peak rating of 1875+.',
      statusNote: 'Active Rating: 1875+ · Verified Profile',
    },
    {
      id: 'codeforces',
      index: '02',
      name: 'Codeforces',
      category: 'Competitive Programming & Time-Constrained Contests',
      username: 'Gyanendra2005gs',
      profileUrl: 'https://codeforces.com/profile/Gyanendra2005gs',
      isConfigured: true,
      hasPublicAccount: true,
      verifiedMetric: {
        label: 'Contest Rating',
        value: '1215',
      },
      focusAreas: ['Constructive Algorithms', 'Mathematical Number Theory', 'Greedy Optimization'],
      description:
        'Fast-paced competitive contests emphasizing mathematical problem reduction, constructive proofs, and high-speed execution under contest timers.',
      statusNote: 'Active Rating: 1215 · Verified Competitor',
    },
    {
      id: 'geeksforgeeks',
      index: '03',
      name: 'GeeksforGeeks',
      category: 'Language Proficiency & Problem Solving',
      username: 'gyanendrsingh',
      profileUrl: 'https://www.geeksforgeeks.org/profile/gyanendrsingh',
      isConfigured: true,
      hasPublicAccount: true,
      verifiedMetric: {
        label: 'Domain Practice',
        value: 'Core DSA & Algorithms',
      },
      focusAreas: ['Problem Solving', 'C++ STL', 'Object-Oriented Concepts', 'Algorithms'],
      description:
        'Comprehensive problem solving validating C++ standard library mechanics, rigorous I/O boundary parsing, and algorithmic problem-solving foundations.',
      statusNote: 'Verified Coding Profile',
    },
  ],
};
