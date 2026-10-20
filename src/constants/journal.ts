export interface CodeSnippet {
  language: string;
  filename?: string;
  code: string;
  explanation: string;
}

export interface ArticleSection {
  heading: string;
  body: string[];
  codeSnippet?: CodeSnippet;
  bulletPoints?: string[];
}

export interface TechnicalArticle {
  id: string;
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  category: string;
  status: 'draft_note' | 'draft_outline';
  statusLabel: string;
  estimatedReadTime: string;
  connectedProject?: {
    name: string;
    caseStudyId?: string;
  };
  summary: string;
  keyTakeaways: string[];
  fullContent?: {
    lead: string;
    sections: ArticleSection[];
    conclusion: string;
  };
}

export interface JournalData {
  eyebrow: string;
  headline: string;
  supportingText: string;
  featuredArticleId: string;
  articles: TechnicalArticle[];
}

/**
 * ENGINEERING NOTES & TECHNICAL JOURNAL DATA
 * 
 * Data Integrity & Authenticity Rules:
 * - Articles are explicitly identified as working draft notes and technical outlines.
 * - No fabricated publication dates, viewer counts, comments, or clap counters.
 * - Code snippets reflect actual architecture patterns implemented in projects (e.g. CodeCore).
 * - Topics align directly with practical engineering decisions across full-stack systems.
 */
export const JOURNAL_DATA: JournalData = {
  eyebrow: 'ENGINEERING NOTES / IDEAS IN PRACTICE',
  headline: 'Notes from building and learning.',
  supportingText:
    'Technical ideas, implementation decisions, and lessons gathered while working through real engineering problems.',
  featuredArticleId: 'docker-fullstack',
  articles: [
    {
      id: 'docker-fullstack',
      slug: 'why-docker-matters-in-a-fullstack-project',
      index: '01',
      title: 'Why Docker matters in a full-stack project',
      subtitle:
        'Eliminating environment drift and engineering isolated, ephemeral sandboxes for untrusted code execution.',
      category: 'CONTAINER ARCHITECTURE',
      status: 'draft_note',
      statusLabel: 'Draft Note // Working Manuscript',
      estimatedReadTime: '4 min read',
      connectedProject: {
        name: 'CodeCore Execution Sandbox',
        caseStudyId: 'codecore',
      },
      summary:
        'Containerization is often introduced as a deployment convenience, but its greatest value in full-stack engineering is deterministic parity between local development and production runtime sandboxes.',
      keyTakeaways: [
        'Environment drift between local Node/OS versions and production servers produces subtle runtime failures.',
        'Ephemeral container lifecycles allow safe isolation for user-submitted code in compilation engines.',
        'Restricting CPU shares and applying hard memory ceilings prevents resource starvation.',
      ],
      fullContent: {
        lead:
          'When building applications that interact with the host operating system—such as remote code execution in CodeCore—treating dependencies as global system packages quickly leads to fragile architecture. Containerization provides the deterministic boundary necessary for predictable software.',
        sections: [
          {
            heading: '01. The Fallacy of "It Works On My Machine"',
            body: [
              'A common failure in early full-stack projects is implicit dependency coupling. Developers test code with local glibc versions, specific Node.js minor patches, or global system packages that are absent or differently configured on cloud staging servers.',
              'By defining every service—from the React Vite client to the Express API and PostgreSQL database—in declarative Dockerfiles and Compose configurations, runtime environments become immutable and version-controlled alongside code.',
            ],
            bulletPoints: [
              'Pinning base images (e.g., node:20-alpine) prevents breaking upstream updates from destabilizing builds.',
              'Multi-stage builds decouple heavyweight compilation tooling from lightweight production runtime images.',
            ],
          },
          {
            heading: '02. Engineering an Isolated Execution Sandbox',
            body: [
              'In CodeCore, users submit arbitrary C++ and JavaScript code for compilation and execution. Running untrusted code directly on the host server process poses severe security risks: fork bombs, infinite loops, and filesystem tampering.',
              'Using ephemeral Docker containers with read-only filesystems, clamped memory allocations, and dropped Linux capabilities ensures untrusted execution is quarantined.',
            ],
            codeSnippet: {
              language: 'dockerfile',
              filename: 'Dockerfile.sandbox (CodeCore Isolated Runner)',
              code: `# Multi-stage ephemeral execution sandbox
FROM alpine:3.19 AS base
RUN apk add --no-cache g++ libstdc++ bash

# Create unprivileged runner user
RUN addgroup -S runner && adduser -S runner -G runner
WORKDIR /sandbox

# Restrict permissions: read-only workspace
USER runner

# Clamped execution limits applied via Docker daemon at runtime:
# --memory="128m" --cpus="0.5" --pids-limit=32 --read-only
CMD ["./entrypoint.sh"]`,
              explanation:
                'Production sandboxes drop root privileges, enforce unprivileged user execution, and mount ephemeral volumes with hard pids and memory quotas.',
            },
          },
          {
            heading: '03. Practical Trade-offs: Startup Latency vs Isolation',
            body: [
              'While Docker provides strong isolation, container creation overhead can introduce latency (often 200–400ms per run). For real-time developer feedback, pre-warming warm worker pools or container recycling requires balancing cold-start overhead against security guarantees.',
              'Understanding these trade-offs is essential: full virtualization is unnecessary when lightweight Linux cgroups and container namespaces provide adequate defense-in-depth.',
            ],
          },
        ],
        conclusion:
          'Containerization is not merely an operations tool—it is an architectural primitive that enables dependable local parity and secure sandboxing for modern full-stack systems.',
      },
    },
    {
      id: 'backend-workflow',
      slug: 'designing-a-predictable-backend-workflow',
      index: '02',
      title: 'Designing a predictable backend workflow',
      subtitle:
        'Decomposing HTTP requests into defensive layers: validation, authentication, transactional logic, and envelope responses.',
      category: 'BACKEND ARCHITECTURE',
      status: 'draft_outline',
      statusLabel: 'Draft Outline // In Progress',
      estimatedReadTime: '3 min read',
      connectedProject: {
        name: 'JobOrbit & Thriviefy',
        caseStudyId: 'joborbit',
      },
      summary:
        'A systematic decomposition of request pipelines ensuring data boundary safety with Zod schemas, stateless JWT token verification, and uniform JSON response envelopes.',
      keyTakeaways: [
        'Boundary validation must reject invalid payloads before hitting controller business logic.',
        'Middleware chains should maintain single responsibilities: Auth -> Validation -> Service -> Persistence.',
        'Consistent HTTP status code discipline prevents ambiguous client error handling.',
      ],
    },
    {
      id: 'postgres-vs-mongo',
      slug: 'choosing-between-postgresql-and-mongodb',
      index: '03',
      title: 'Choosing between PostgreSQL and MongoDB',
      subtitle:
        'Analyzing ACID relational integrity versus hierarchical document nesting based on real access patterns.',
      category: 'PERSISTENCE & DATA MODELING',
      status: 'draft_outline',
      statusLabel: 'Draft Outline // In Progress',
      estimatedReadTime: '4 min read',
      connectedProject: {
        name: 'Career Connect & Thriviefy',
        caseStudyId: 'thriviefy',
      },
      summary:
        'Comparing structured relational joins with foreign-key constraints (PostgreSQL via Prisma) against dynamic JSON document stores (MongoDB) for evolving product schemas.',
      keyTakeaways: [
        'Relational foreign-key constraints enforce domain invariant rules at the persistence tier.',
        'Document databases excel when read access patterns map 1:1 with single-document aggregations.',
        'Schema migrations in relational systems prevent silent runtime data corruption.',
      ],
    },
    {
      id: 'debugging-deployments',
      slug: 'debugging-runtime-and-deployment-issues',
      index: '04',
      title: 'Debugging runtime and deployment connectivity',
      subtitle:
        'A methodical troubleshooting sequence for environment variables, connection pools, and cold-start failures.',
      category: 'INFRASTRUCTURE & DEV PRACTICES',
      status: 'draft_outline',
      statusLabel: 'Draft Outline // In Progress',
      estimatedReadTime: '3 min read',
      summary:
        'A structured checklist for diagnosing database pool exhaustion, CORS origin header mismatches, SSL certificate negotiation, and container health check timeouts.',
      keyTakeaways: [
        'Separate configuration debugging from network reachability and application code errors.',
        'Log structured error boundaries with correlation IDs rather than swallowing exception traces.',
        'Verify database connection exhaustion limits against concurrent serverless worker counts.',
      ],
    },
    {
      id: 'dsa-intuition',
      slug: 'algorithmic-intuition-in-software-engineering',
      index: '05',
      title: 'Algorithmic intuition in real-world engineering',
      subtitle:
        'How constraint analysis, Big-O derivations, and edge cases inform backend performance and reliable API design.',
      category: 'PROBLEM SOLVING & COMPLEXITY',
      status: 'draft_outline',
      statusLabel: 'Draft Outline // In Progress',
      estimatedReadTime: '4 min read',
      connectedProject: {
        name: '1,400+ Solved Problems & K3 Contests',
      },
      summary:
        'Exploring how daily competitive programming practice with memory boundaries and algorithmic trade-offs translates directly into performant full-stack software.',
      keyTakeaways: [
        'Evaluating theoretical time complexity before coding prevents severe O(N^2) production regressions.',
        'Edge case discipline (empty sets, singletons, boundary bounds) produces defensive production code.',
        'Memory locality and cache lines matter even when writing in high-level managed languages.',
      ],
    },
  ],
};
