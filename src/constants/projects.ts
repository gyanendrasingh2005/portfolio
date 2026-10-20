export interface Project {
  id: string;
  index: string;
  title: string;
  name: string;
  type: string;
  timeline: string;
  summary: string;
  description: string[];
  techStack: string[];
  architectureHighlights: {
    title: string;
    detail: string;
  }[];
  contribution: string;
  githubUrl: string;
  liveUrl?: string;
  isFlagship?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 'joborbit',
    index: '01',
    name: 'JobOrbit',
    title: 'JobOrbit — MERN Stack Job Portal & Hiring Platform',
    type: 'Full-Stack MERN Application',
    timeline: '2026',
    summary:
      'A full-stack MERN job portal serving 2 user roles (recruiters and candidates), enabling recruiters to manage listings and candidates to search, filter, bookmark, and apply for jobs with cloud resume parsing.',
    description: [
      'Developed a full-stack MERN job portal serving recruiters and candidates with dual role-based access control (RBAC). Recruiters can post, update, and manage job listings, while candidates search, filter, bookmark, and track application pipelines.',
      'Built 15+ REST API endpoints using Node.js, Express.js, and MongoDB (Mongoose) for authentication, job management, company profiles, and application tracking.',
      'Integrated MongoDB Atlas and Cloudinary for cloud data storage and resume uploads; added centralized API error handling and form validation across 10+ routes to improve reliability of job posting and application workflows.',
    ],
    techStack: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'JWT Auth',
      'Cloudinary',
      'REST APIs',
    ],
    architectureHighlights: [
      {
        title: 'Dual-Role RBAC & JWT Authentication',
        detail:
          'Enforces strict authorization boundaries between recruiter administration and candidate application workflows.',
      },
      {
        title: '15+ RESTful API Endpoints',
        detail:
          'Centralized controller and middleware routes handling job filtering, bookmarking, and multi-status application states.',
      },
      {
        title: 'Cloudinary Cloud Resume Storage',
        detail:
          'Streamlined candidate resume uploads integrated with MongoDB Atlas for persistent profile document storage.',
      },
    ],
    contribution:
      'Engineered the complete backend REST API endpoints, JWT authentication middleware, Cloudinary integration, and multi-criteria candidate search pipeline.',
    githubUrl: 'https://github.com/gyanendrasingh2005',
    liveUrl: 'https://github.com/gyanendrasingh2005',
    isFlagship: true,
  },
  {
    id: 'codecore',
    index: '02',
    name: 'CodeCore',
    title: 'CodeCore — Docker-Based Online Code Compiler',
    type: 'Execution Engine & Distributed System',
    timeline: '2026',
    summary:
      'A Docker-based online code execution platform using TypeScript, Node.js, and Express.js to handle code submission, compilation, execution, and runtime error management for 3+ programming languages.',
    description: [
      'Developed a Docker-based online code execution platform to safely compile and run untrusted user code with isolated process sandboxing.',
      'Modeled relational tables in PostgreSQL to store users, code submissions, and execution metadata, persisting source code with structured schemas.',
      'Configured Redis caching for temporary execution data with TTL-based expiration, and containerized services (backend, PostgreSQL, Redis) using Docker.',
    ],
    techStack: [
      'TypeScript',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Redis',
      'Docker',
      'Linux cgroups',
    ],
    architectureHighlights: [
      {
        title: 'Containerized Sandbox Isolation',
        detail:
          'Isolates multi-language code inside ephemeral Docker containers with strict memory limits, non-root user execution, and hard timeouts.',
      },
      {
        title: 'PostgreSQL Relational Schema',
        detail:
          'Persists source code submissions, execution metrics (runtime ms, memory usage), and historical test results.',
      },
      {
        title: 'Redis TTL Caching',
        detail:
          'Caches repetitive compilation requests and temporary execution outputs with TTL expiration to minimize container churn.',
      },
    ],
    contribution:
      'Architected the ephemeral Docker container harness, PostgreSQL relational schema, Redis caching layer, and runtime error classification engine.',
    githubUrl: 'https://github.com/gyanendrasingh2005',
    liveUrl: 'https://github.com/gyanendrasingh2005',
    isFlagship: true,
  },
  {
    id: 'thriviefy',
    index: '03',
    name: 'Thriviefy',
    title: 'Thriviefy — Medical Services & Emergency Healthcare Platform',
    type: 'Healthcare Web Platform & Geolocation System',
    timeline: '2025',
    summary:
      'A full-stack healthcare platform using Node.js, Express.js, MongoDB, and EJS featuring hospital directories, doctor availability, medicine information, and proximity-based emergency ambulance tracking.',
    description: [
      'Built a full-stack healthcare platform using Node.js, Express.js, MongoDB, and server-side rendered EJS interfaces for hospital directory, doctor availability, medicine inventory, and emergency assistance.',
      'Constructed geolocation-based healthcare discovery and ambulance tracking using proximity calculations to rank nearby hospitals and emergency services by distance, backed by REST APIs and location services.',
      'Designed REST APIs, MongoDB schemas, user authentication, and server-side rendered interfaces to manage data entities across users, hospitals, doctors, medicines, and emergency services.',
    ],
    techStack: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'EJS',
      'REST APIs',
      'Geolocation APIs',
      'User Authentication',
    ],
    architectureHighlights: [
      {
        title: 'Proximity Distance Calculation',
        detail:
          'Calculates real-time geolocation distance matrices to immediately surface nearest emergency hospitals and dispatch ambulances.',
      },
      {
        title: 'Comprehensive Healthcare Directory',
        detail:
          'Structured schemas managing doctors on call, medicine inventory, hospital beds, and 24/7 emergency response contacts.',
      },
      {
        title: 'Server-Side Rendered EJS Interfaces',
        detail:
          'High-performance, lightweight server-side rendering ensuring instant critical information delivery even under unstable network conditions.',
      },
    ],
    contribution:
      'Designed the MongoDB entity schemas, proximity calculation algorithms for nearby hospitals, and server-side emergency response coordination routes.',
    githubUrl: 'https://github.com/gyanendrasingh2005',
    liveUrl: 'https://github.com/gyanendrasingh2005',
    isFlagship: false,
  },
];
