export interface ArchitectureNode {
  id: string;
  name: string;
  type: 'client' | 'gateway' | 'service' | 'database' | 'sandbox' | 'queue';
  role: string;
  tech: string;
}

export interface CaseStudyData {
  id: string;
  index: string;
  name: string;
  title: string;
  tagline: string;
  category: string;
  role: string;
  timeline: string;
  status: string;
  githubUrl: string;
  liveUrl?: string;
  techStack: string[];
  
  // Section B: The Problem
  problem: {
    context: string;
    intendedUsers: string;
    painPoints: string[];
    workflowIssue: string;
  };

  // Section C: The Solution
  solution: {
    overview: string;
    coreCapabilities: {
      title: string;
      description: string;
    }[];
  };

  // Section D: Technical Architecture
  architecture: {
    summary: string;
    nodes: ArchitectureNode[];
    dataFlow: string[];
  };

  // Section E: Engineering Decisions
  decisions: {
    topic: string;
    choice: string;
    rationale: string;
    tradeoff: string;
  }[];

  // Section F: Challenges and Debugging
  challenges: {
    title: string;
    issue: string;
    debugging: string;
    resolution: string;
    lesson: string;
  }[];

  // Section G: Outcome and Learnings
  outcomes: {
    completedFeatures: string[];
    limitations: string[];
    technicalLearnings: string[];
  };

  // Relevant Code Excerpt
  codeSnippet?: {
    filename: string;
    language: string;
    caption: string;
    code: string;
    explanation: string;
  };
}

const jobOrbitCaseStudy: CaseStudyData = {
  id: 'joborbit',
  index: '01',
  name: 'JobOrbit',
  title: 'JobOrbit — MERN Stack Job Portal & Hiring Platform',
  tagline: 'Dual-role recruitment workflow, Cloudinary resume pipeline, and multi-criteria application tracking',
  category: 'Full-Stack MERN Application',
  role: 'Lead Full-Stack Developer & Database Architect',
  timeline: '2026',
  status: 'Live Demo Verified / Production Architecture',
  githubUrl: 'https://github.com/gyanendrasingh2005',
  liveUrl: 'https://github.com/gyanendrasingh2005',
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
  problem: {
    context:
      'Contemporary recruitment pipelines struggle with disjointed workflows between candidates seeking roles and recruiters managing listings. Manual resume collection and unstructured applicant data create severe bottlenecks.',
    intendedUsers:
      'Recruiters creating and managing job vacancies, and candidates searching, bookmarking, and tracking applications.',
    painPoints: [
      'Unstructured resume attachments and local file storage degrade database performance and create server storage bottlenecks.',
      'Lack of granular role-based authorization (RBAC) allows candidates to tamper with job postings or access unauthorized application data.',
      'Slow and unindexed multi-criteria queries create high latency when searching by location, company, salary, and job requirements.',
    ],
    workflowIssue:
      'Handling multi-part resume uploads alongside transactional application records across 10+ endpoints frequently led to orphaned documents and silent route crashes without centralized validation.',
  },
  solution: {
    overview:
      'JobOrbit introduces a full-stack MERN job portal serving 2 distinct user roles (recruiters and candidates). Recruiters post and manage job listings with full applicant oversight, while candidates search, filter, bookmark, and upload cloud-stored resumes.',
    coreCapabilities: [
      {
        title: 'Dual-Role RBAC & JWT Authentication',
        description:
          'Enforces strict authorization boundaries between recruiter management panels and candidate application workflows using signed JWTs.',
      },
      {
        title: '15+ RESTful API Endpoints',
        description:
          'Constructed comprehensive Node.js and Express.js REST routes for authentication, job management, company profiles, and multi-stage application pipelines.',
      },
      {
        title: 'Cloudinary Cloud Resume Integration',
        description:
          'Streamlined candidate PDF resume uploads directly to Cloudinary cloud storage, persisting references in MongoDB Atlas with centralized error handling.',
      },
    ],
  },
  architecture: {
    summary:
      'A layered MERN architecture with JWT middleware security, MongoDB Atlas persistence, and Cloudinary media processing pipelines.',
    nodes: [
      {
        id: 'client',
        name: 'React.js Client Application',
        type: 'client',
        role: 'Recruiter dashboard, candidate job catalog, resume upload & bookmarking',
        tech: 'React.js, Tailwind CSS, Context API',
      },
      {
        id: 'gateway',
        name: 'Express Auth & API Gateway',
        type: 'gateway',
        role: 'JWT authentication, RBAC authorization middleware, 15+ REST endpoints',
        tech: 'Node.js, Express.js, JWT, Multer',
      },
      {
        id: 'service',
        name: 'Cloud Media & Storage Pipeline',
        type: 'service',
        role: 'Cloudinary CDN resume asset handling and secure upload transformations',
        tech: 'Cloudinary SDK, Cloud Storage',
      },
      {
        id: 'database',
        name: 'MongoDB Atlas Cluster',
        type: 'database',
        role: 'Candidate profiles, job catalogs, bookmarks, and application tracking records',
        tech: 'MongoDB, Mongoose ODM',
      },
    ],
    dataFlow: [
      '1. Recruiter or candidate authenticates; Express API verifies credentials and signs role-embedded JWT.',
      '2. Candidate searches and filters jobs by location, role, and salary with indexed MongoDB queries.',
      '3. Candidate attaches resume; stream is passed directly to Cloudinary and cloud URI stored in MongoDB.',
      '4. Application state is updated atomically with centralized validation across all 10+ routes.',
    ],
  },
  decisions: [
    {
      topic: 'Resume File Storage Strategy',
      choice: 'Cloudinary cloud storage over local server filesystem writes',
      rationale:
        'Local disk storage causes server scaling bottlenecks and file loss during redeployments. Cloudinary provides high-availability CDN delivery.',
      tradeoff:
        'Requires managing cloud API credentials and asynchronous upload response latency.',
    },
    {
      topic: 'Role-Based Access Control Design',
      choice: 'Embedded role claim inside signed JWTs verified via modular Express middleware',
      rationale:
        'Prevents extra database roundtrips on every protected route while guaranteeing strict role segregation.',
      tradeoff:
        'Role updates require token re-issuance upon profile permission changes.',
    },
  ],
  challenges: [
    {
      title: 'Centralized Error Handling Across 10+ Routes',
      issue:
        'Asynchronous controller failures previously triggered unhandled promise rejections, leaving clients hanging.',
      debugging:
        'Monitored API logs and identified inconsistent try-catch blocks across multiple controller files.',
      resolution:
        'Implemented an async error wrapper alongside a global Express error-handling middleware that formats uniform error envelopes.',
      lesson:
        'Consistent error telemetry and schema validation across all endpoints is mandatory for system reliability.',
    },
  ],
  outcomes: {
    completedFeatures: [
      'Dual-role authentication with JWT and RBAC enforcement (Recruiter vs Candidate)',
      '15+ RESTful API endpoints for jobs, profiles, and application stages',
      'Cloudinary cloud storage integration for PDF resume uploads',
      'Multi-criteria job search, filtering, and bookmarking engine',
    ],
    limitations: [
      'Real-time chat between recruiters and candidates is scheduled for subsequent versions.',
      'Automated applicant ranking based on resume keyword matching is planned next.',
    ],
    technicalLearnings: [
      'Architected comprehensive RESTful APIs with defensive error handling and role-based security.',
      'Integrated third-party cloud media storage (Cloudinary) with MongoDB document relationships.',
    ],
  },
  codeSnippet: {
    filename: 'authMiddleware.js (Role-Based JWT Authorization)',
    language: 'javascript',
    caption: 'Role-based access control middleware guarding recruiter and candidate routes',
    code: `// Role-based access control middleware for Express
export const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: \`Role (\${req.user?.role || 'Guest'}) is not permitted to access this resource\`
      });
    }
    next();
  };
};`,
    explanation:
      'This middleware enforces strict operational security boundaries, verifying role claims decoded from verified JWT headers before allowing controllers to execute mutations.',
  },
};

const codeCoreCaseStudy: CaseStudyData = {
  id: 'codecore',
  index: '02',
  name: 'CodeCore',
  title: 'CodeCore — Docker-Based Online Code Compiler & Execution Engine',
  tagline: 'Deterministic real-time code evaluation and sandboxed multi-language runtime',
  category: 'Execution Engine & Distributed System',
  role: 'Lead Full-Stack Engineer & System Architect',
  timeline: '2026',
  status: 'Functional Prototype / Execution Sandbox Verified',
  githubUrl: 'https://github.com/gyanendrasingh2005',
  liveUrl: 'https://github.com/gyanendrasingh2005',
  techStack: [
    'TypeScript',
    'Node.js',
    'Express.js',
    'PostgreSQL',
    'Redis',
    'Docker',
    'Linux cgroups',
  ],
  problem: {
    context:
      'When practicing competitive programming or learning data structures, students frequently struggle with incompatible local compiler setups (GCC/Clang version mismatches, runtime path errors, OS-specific libraries).',
    intendedUsers:
      'Computer Science and IT undergraduates, competitive programming students, and algorithmic learners.',
    painPoints: [
      'Local environment discrepancies cause "it works on my machine" failures during campus coding tests.',
      'Executing untrusted user submissions on a standard web server introduces severe security risks: infinite loops, memory leaks, fork bombs, and system command execution.',
      'Unstructured compiler outputs lack execution telemetry (runtime milliseconds, peak memory footprint, standard diffs).',
    ],
    workflowIssue:
      'A single non-terminating while-loop (`while(true)`) in submitted C++ code can consume 100% CPU on an unprotected server, crashing the service for all users.',
  },
  solution: {
    overview:
      'CodeCore introduces a deterministic code execution platform pairing a distraction-free client editor with a sandboxed containerized worker. Code submissions are validated against structured test suites with strict timeout and memory limits.',
    coreCapabilities: [
      {
        title: 'Isolated Execution Containers',
        description:
          'Each submission triggers an ephemeral execution environment with clamped memory (512MB) and hard CPU time limits (2.0s), preventing runaway resource starvation.',
      },
      {
        title: 'PostgreSQL Relational Persistence',
        description:
          'Modeled relational tables in PostgreSQL to store users, code submissions, execution metadata, and verdicts with structured schemas.',
      },
      {
        title: 'Redis TTL Caching Layer',
        description:
          'Configured Redis caching for temporary execution data with TTL-based expiration to minimize container churn on repeated executions.',
      },
    ],
  },
  architecture: {
    summary:
      'The architecture decouples the browser interface from the compilation runtime using an asynchronous job queue and ephemeral Docker execution workers.',
    nodes: [
      {
        id: 'client',
        name: 'TypeScript Client Editor',
        type: 'client',
        role: 'Editor interface, code state management & telemetry viewer',
        tech: 'React, TypeScript, Monaco/CodeMirror',
      },
      {
        id: 'gateway',
        name: 'Express API Gateway',
        type: 'gateway',
        role: 'Request sanitization, submission dispatch & rate limiting',
        tech: 'Node.js, Express.js, TypeScript',
      },
      {
        id: 'queue',
        name: 'Redis Cache & Queue',
        type: 'queue',
        role: 'TTL-based execution caching & job dispatch',
        tech: 'Redis, In-Memory TTL Store',
      },
      {
        id: 'sandbox',
        name: 'Dockerized Sandbox Worker',
        type: 'sandbox',
        role: 'Isolated ephemeral execution with memory/CPU cgroups',
        tech: 'Docker CLI, Linux Cgroups, Ephemeral Volumes',
      },
      {
        id: 'database',
        name: 'PostgreSQL Database',
        type: 'database',
        role: 'Stores user accounts, code submissions, and execution metadata',
        tech: 'PostgreSQL, Relational Schemas',
      },
    ],
    dataFlow: [
      '1. User writes solution in client editor and triggers "Run Solution" action.',
      '2. Express API verifies token, validates language payload, and assigns a submission UUID.',
      '3. Redis cache checked for identical prior compilations to bypass redundant container spin-up.',
      '4. Worker spawns ephemeral Docker container with read-only rootfs and memory cap (512MB).',
      '5. Process outputs captured, compared against expected outputs, and persisted in PostgreSQL.',
    ],
  },
  decisions: [
    {
      topic: 'Language Execution Isolation',
      choice: 'Ephemeral Docker containers with Linux cgroups over bare child-processes',
      rationale:
        'Running `child_process.exec()` on the host directly exposes the host OS to malicious system calls like `system("rm -rf /")` or infinite forks.',
      tradeoff:
        'Docker container spin-up introduces ~150-250ms of overhead per run, mitigated by pooling pre-warmed runner images.',
    },
    {
      topic: 'Database Schema Strategy',
      choice: 'Relational PostgreSQL schema over document store',
      rationale:
        'Execution metrics, language types, and user submission logs have strict relational integrity constraints.',
      tradeoff:
        'Requires database migrations when altering submission telemetry schemas.',
    },
  ],
  challenges: [
    {
      title: 'Preventing Server Freeze from Infinite Loops',
      issue:
        'Submissions containing non-terminating loops (e.g., `while(true)`) hung the Node.js execution worker indefinitely.',
      debugging:
        'Traced worker pool starvation when multiple students submitted unoptimized recursive code during tests.',
      resolution:
        'Wrapped runner processes in a strict POSIX `timeout 2s` watchdog combined with Node.js `AbortController` signal handling to force-kill processes exceeding the limit.',
      lesson:
        'Never rely on user code voluntarily exiting; all external execution pipelines must enforce non-negotiable hard timeouts.',
    },
  ],
  outcomes: {
    completedFeatures: [
      'Multi-language code execution harness for C++, Java, and Python',
      'Sandboxed runner execution script with 2-second timeout safeguards',
      'PostgreSQL relational schema storing users, submissions, and verdicts',
      'Redis TTL-based caching layer for compiler execution results',
    ],
    limitations: [
      'Currently configured for single-node deployment rather than a distributed Kubernetes cluster.',
      'Test case inputs are currently capped at 10MB to maintain low container memory usage.',
    ],
    technicalLearnings: [
      'Deepened understanding of Linux process sandboxing, standard I/O streams, and cgroup resource limits.',
      'Refined backend error propagation and asynchronous worker lifecycle management in Node.js and TypeScript.',
    ],
  },
  codeSnippet: {
    filename: 'runner.ts (Worker Execution Watchdog)',
    language: 'typescript',
    caption: 'Illustrative Docker sandbox execution harness with timeout and memory enforcement',
    code: `// Ephemeral container dispatch with strict resource clamping
export async function executeSubmission(
  submissionId: string,
  sourceCode: string,
  language: 'cpp' | 'python' | 'java',
  testInput: string
): Promise<ExecutionTelemetry> {
  const startTime = performance.now();
  
  // Enforce 512MB RAM cap and 2.0s hard CPU limit
  const dockerArgs = [
    'run', '--rm',
    '--network', 'none',            // Block external network access
    '--memory', '512m',             // Cap memory ceiling
    '--cpus', '1.0',                // Limit CPU cores
    '--volume', \`\${tempDir}:/sandbox:ro\`, // Mount source code as read-only
    'codecore-runner:v1',
    'timeout', '2s',                // POSIX watchdog termination
    \`./run_\${language}.sh\`
  ];

  const result = await spawnProcess('docker', dockerArgs, { input: testInput });
  const durationMs = Math.round(performance.now() - startTime);

  return {
    verdict: result.timedOut ? 'TIME_LIMIT_EXCEEDED' : result.verdict,
    executionTimeMs: durationMs,
    memoryMb: result.peakMemoryMb,
    stdout: result.stdout,
    stderr: result.stderr
  };
}`,
    explanation:
      'This worker module demonstrates defense-in-depth: network isolation (`--network none`), memory clamping (`--memory 512m`), read-only filesystem mounts, and hard POSIX timeout bounds.',
  },
};

const thriviefyCaseStudy: CaseStudyData = {
  id: 'thriviefy',
  index: '03',
  name: 'Thriviefy',
  title: 'Thriviefy — Medical Services & Emergency Healthcare Platform',
  tagline: 'Geolocation healthcare discovery, ambulance proximity tracking, and emergency facility directory',
  category: 'Healthcare Web Platform & Geolocation System',
  role: 'Full-Stack Developer & Backend Architect',
  timeline: '2025',
  status: 'System Prototype / Architecture Verified',
  githubUrl: 'https://github.com/gyanendrasingh2005',
  liveUrl: 'https://github.com/gyanendrasingh2005',
  techStack: [
    'Node.js',
    'Express.js',
    'MongoDB',
    'EJS',
    'REST APIs',
    'Geolocation APIs',
  ],
  problem: {
    context:
      'During medical emergencies, finding verified hospitals, on-call doctors, critical medicines, and immediate ambulance assistance is severely hindered by scattered directories and slow network connectivity.',
    intendedUsers:
      'Patients, caregivers, and community members needing urgent healthcare discovery and emergency ambulance dispatch.',
    painPoints: [
      'Commercial search engines return outdated clinic hours and sponsored advertisements during critical moments.',
      'Lack of proximity-based calculation prevents users from identifying which verified hospital is physically closest in transit.',
      'Unreliable mobile networks render heavy client-side SPAs unresponsive during transit.',
    ],
    workflowIssue:
      'Locating nearest emergency facilities and checking live ambulance availability traditionally required making multiple phone calls during high-stress situations.',
  },
  solution: {
    overview:
      'Thriviefy delivers a full-stack healthcare platform using Node.js, Express.js, MongoDB, and server-side rendered EJS interfaces for hospital directories, doctor availability, medicine inventory, and proximity-based emergency ambulance tracking.',
    coreCapabilities: [
      {
        title: 'Geolocation Proximity Calculations',
        description:
          'Constructed proximity calculation algorithms using location services and coordinates to rank nearby hospitals and ambulances by distance.',
      },
      {
        title: 'Comprehensive Healthcare Directory',
        description:
          'Structured MongoDB schemas managing hospital directories, doctor availability schedules, and critical medicine inventories.',
      },
      {
        title: 'Server-Side Rendered EJS Interfaces',
        description:
          'Lightweight server-side rendered interfaces ensuring sub-second page loads even under unstable 2G/3G mobile networks.',
      },
    ],
  },
  architecture: {
    summary:
      'A server-side rendered Node.js and Express architecture backed by MongoDB schemas, geospatial proximity queries, and REST location services.',
    nodes: [
      {
        id: 'client',
        name: 'EJS Server-Rendered Interface',
        type: 'client',
        role: 'Fast, lightweight hospital directory, emergency assistance triage, and ambulance dispatch views',
        tech: 'EJS Templates, CSS3, Geolocation Client API',
      },
      {
        id: 'gateway',
        name: 'Express Directory & Proximity API',
        type: 'gateway',
        role: 'Distance ranking, doctor schedule routes, medicine queries & auth middleware',
        tech: 'Node.js, Express.js, REST APIs',
      },
      {
        id: 'database',
        name: 'MongoDB Healthcare Store',
        type: 'database',
        role: 'Stores hospitals, doctors, medicine catalog, emergency coordinates, and user accounts',
        tech: 'MongoDB, Geospatial Indexes',
      },
    ],
    dataFlow: [
      '1. User requests emergency discovery; browser transmits latitude and longitude coordinates.',
      '2. Express API executes proximity distance calculation querying MongoDB geospatial dataset.',
      '3. Ranked list of nearest hospitals and active ambulances rendered server-side via EJS.',
      '4. User triggers 1-tap ambulance coordinate dispatch with direct telephonic and SMS routing.',
    ],
  },
  decisions: [
    {
      topic: 'Rendering Paradigm Selection',
      choice: 'Server-side rendered EJS templates over heavy client JavaScript bundle',
      rationale:
        'In emergency medical scenarios, initial render must occur in <200ms on low-bandwidth mobile networks without downloading heavy JavaScript bundles.',
      tradeoff:
        'Requires full-page navigation on major view transitions instead of client-side routing.',
    },
    {
      topic: 'Proximity Calculation Architecture',
      choice: 'Server-side mathematical distance calculation with MongoDB geospatial indexing',
      rationale:
        'Ensures accurate distance ranking without relying on costly external mapping APIs for simple proximity ranking.',
      tradeoff:
        'Calculates planar or spherical distance rather than full turn-by-turn road traffic routing.',
    },
  ],
  challenges: [
    {
      title: 'Ensuring Reliable Emergency Response Under Low Bandwidth',
      issue:
        'Initial prototypes with heavy assets stalled when tested in weak cellular connectivity conditions.',
      debugging:
        'Profiled network waterfalls under simulated 2G mobile connectivity; identified render-blocking script dependencies.',
      resolution:
        'Refactored the core views into server-rendered EJS templates with zero client script dependencies for the emergency directory.',
      lesson:
        'In life-critical software domains, resilience and fast time-to-first-byte are paramount.',
    },
  ],
  outcomes: {
    completedFeatures: [
      'Geolocation-based hospital discovery ranking facilities by physical proximity',
      'Doctor availability directory and critical medicine inventory queries',
      'Emergency ambulance tracking and 1-tap dispatch coordination',
      'Server-side rendered EJS interfaces for lightning-fast emergency access',
    ],
    limitations: [
      'Currently relies on facility-reported status rather than automated hospital IoT telemetry.',
      'Direct integration with national emergency dispatch (112) is slated for future phases.',
    ],
    technicalLearnings: [
      'Designed efficient geospatial distance queries and normalized schemas in MongoDB.',
      'Mastered lightweight server-side rendering for critical high-reliability workflows.',
    ],
  },
};

export const CASE_STUDIES: Record<string, CaseStudyData> = {
  joborbit: jobOrbitCaseStudy,
  codecore: codeCoreCaseStudy,
  thriviefy: thriviefyCaseStudy,
  // Alias for backward compatibility
  'career-connect': jobOrbitCaseStudy,
};
