export interface SkillItem {
  name: string;
  category: 'core' | 'supporting';
  contextNote?: string;
  isAccent?: boolean;
}

export interface SkillCategory {
  id: string;
  index: string;
  title: string;
  summary: string;
  skills: SkillItem[];
}

export interface WorkflowStep {
  index: string;
  title: string;
  description: string;
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    index: '01',
    title: 'Programming Languages',
    summary: 'Core compiled and interpreted languages for systems, algorithms, and web applications.',
    skills: [
      { name: 'C++', category: 'core', contextNote: '1400+ DSA problems, competitive programming', isAccent: true },
      { name: 'C', category: 'core', contextNote: 'Low-level systems programming, memory & pointers' },
      { name: 'TypeScript', category: 'core', contextNote: 'Type-safe full-stack platforms & compilers', isAccent: true },
      { name: 'JavaScript (ES6+)', category: 'core', contextNote: 'Modern web architecture & async runtimes' },
    ],
  },
  {
    id: 'core-cs',
    index: '02',
    title: 'Core Computer Science',
    summary: 'Foundational CS principles applied to system design, database queries, and algorithmic complexity.',
    skills: [
      { name: 'Data Structures & Algorithms', category: 'core', isAccent: true },
      { name: 'Object-Oriented Programming (OOP)', category: 'core' },
      { name: 'Database Management Systems (DBMS)', category: 'core', isAccent: true },
      { name: 'Operating Systems', category: 'core' },
      { name: 'Computer Networks', category: 'core' },
    ],
  },
  {
    id: 'backend-systems',
    index: '03',
    title: 'Backend & System Architecture',
    summary: 'Server-side runtimes, APIs, authentication mechanisms, and real-time event architectures.',
    skills: [
      { name: 'Node.js', category: 'core', isAccent: true },
      { name: 'Express.js', category: 'core', isAccent: true },
      { name: 'REST APIs', category: 'core' },
      { name: 'WebSockets', category: 'core' },
      { name: 'JWT Authentication & RBAC', category: 'core', isAccent: true },
      { name: 'Pub/Sub & Middleware', category: 'supporting' },
    ],
  },
  {
    id: 'databases-orm',
    index: '04',
    title: 'Databases, Caching & Cloud',
    summary: 'Relational databases, document stores, in-memory caching, and media microservices.',
    skills: [
      { name: 'MongoDB', category: 'core', contextNote: 'JobOrbit, Thriviefy, aggregation pipelines', isAccent: true },
      { name: 'PostgreSQL', category: 'core', contextNote: 'CodeCore relational execution metadata' },
      { name: 'Redis', category: 'core', contextNote: 'TTL caching for compiler outputs', isAccent: true },
      { name: 'Prisma ORM', category: 'supporting' },
      { name: 'Cloudinary', category: 'supporting', contextNote: 'Cloud resume & media storage' },
      { name: 'SQL & Database Design', category: 'core' },
    ],
  },
  {
    id: 'frontend-tools',
    index: '05',
    title: 'Frontend & Developer Tooling',
    summary: 'Client interfaces, container isolation, version control, and development workflow.',
    skills: [
      { name: 'React.js', category: 'core', isAccent: true },
      { name: 'HTML & CSS', category: 'core' },
      { name: 'Responsive Design', category: 'core' },
      { name: 'Docker', category: 'core', contextNote: 'Containerized execution sandboxes', isAccent: true },
      { name: 'Git & GitHub', category: 'core' },
      { name: 'Postman & VS Code', category: 'supporting' },
      { name: 'npm', category: 'supporting' },
    ],
  },
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    index: '01',
    title: 'Constraints & Complexity Bounds',
    description: 'Analyze time/space requirements, failure modes, and security perimeter before writing code.',
  },
  {
    index: '02',
    title: 'Modular Architecture & Schemas',
    description: 'Design normalized database tables, type-safe API contracts, and isolated service boundaries.',
  },
  {
    index: '03',
    title: 'Deterministic Execution & Benchmarks',
    description: 'Ship containerized, sub-second responses with defensive error handling and telemetry.',
  },
];
