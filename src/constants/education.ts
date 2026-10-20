export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  cgpa: string;
  cgpaScale: string;
  cgpaNote: string;
  coursework: string[];
  summary: string;
  previousEducation?: {
    school: string;
    board: string;
    percentage: string;
    period: string;
    location: string;
  }[];
}

export interface CertificationItem {
  id: string;
  index: string;
  title: string;
  issuer: string;
  issueDate?: string;
  expirationDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  isConfigured: boolean;
  statusText: string;
  description: string;
  skills: string[];
}

export interface TechnicalLearningArea {
  id: string;
  index: string;
  title: string;
  connectedProject?: string;
  description: string;
  keyPractices: string[];
}

export interface EducationData {
  eyebrow: string;
  headline: string;
  supportingText: string;
  education: EducationItem;
  certifications: CertificationItem[];
  learningByBuilding: {
    title: string;
    subtitle: string;
    areas: TechnicalLearningArea[];
  };
}

export const EDUCATION_DATA: EducationData = {
  eyebrow: 'BACKGROUND / EDUCATION / CONTINUOUS LEARNING',
  headline: 'Building a strong foundation.',
  supportingText:
    'Academic rigor paired with continuous self-driven learning, verified industry certifications, and hands-on systems engineering.',
  education: {
    degree: 'B.Tech in Information Technology',
    institution: 'KIET Group of Institutions',
    location: 'Ghaziabad, Uttar Pradesh',
    period: '2023 – 2027',
    status: 'In Progress (Active Undergraduate)',
    cgpa: '8.1',
    cgpaScale: '10.0',
    cgpaNote: 'Verified Cumulative GPA',
    coursework: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (OOP)',
      'Database Management Systems (DBMS)',
      'Operating Systems',
      'Computer Networks',
    ],
    summary:
      'Pursuing an engineering degree grounded in foundational computer science, distributed web systems, and competitive problem solving.',
    previousEducation: [
      {
        school: 'Academy Global School',
        board: 'Intermediate (CBSE)',
        percentage: '85%',
        period: '2021 – 2022',
        location: 'Gorakhpur, Uttar Pradesh',
      },
      {
        school: 'Sacred Heart Academy',
        board: 'High School (ICSE)',
        percentage: '93%',
        period: '2019 – 2020',
        location: 'Gorakhpur, Uttar Pradesh',
      },
    ],
  },
  certifications: [
    {
      id: 'aws-cloud-foundations',
      index: '01',
      title: 'AWS Academy Graduate – Cloud Foundations',
      issuer: 'AWS Academy',
      issueDate: 'September 2025',
      isConfigured: true,
      credentialUrl: 'https://www.credly.com',
      statusText: 'Verified Industry Credential',
      description:
        'Foundational knowledge of AWS cloud compute, storage, security, VPC networking, and cloud architectural best practices.',
      skills: ['AWS Cloud', 'EC2', 'S3', 'IAM', 'Cloud Security'],
    },
    {
      id: 'mongodb-intro',
      index: '02',
      title: 'Introduction to MongoDB',
      issuer: 'MongoDB University',
      issueDate: 'January 2025',
      isConfigured: true,
      credentialUrl: 'https://learn.mongodb.com',
      statusText: 'Verified Industry Credential',
      description:
        'Document modeling, aggregation pipelines, schema indexing, and cloud database administration with MongoDB Atlas.',
      skills: ['MongoDB', 'NoSQL', 'Aggregation', 'Atlas', 'Schema Design'],
    },
    {
      id: 'infosys-database',
      index: '03',
      title: 'Database Application Development Training',
      issuer: 'Infosys Springboard',
      issueDate: 'November 2025',
      isConfigured: true,
      credentialUrl: 'https://infyspringboard.onwingspan.com',
      statusText: 'Verified Corporate Training',
      description:
        'Relational schema design, SQL optimization, ACID transaction guarantees, and persistent database application architecture.',
      skills: ['Relational SQL', 'DBMS', 'Transaction Safety', 'Data Modeling'],
    },
    {
      id: 'aws-ai-practitioner',
      index: '04',
      title: 'AWS Certified AI Practitioner',
      issuer: 'AWS Certification',
      issueDate: '2026',
      isConfigured: true,
      credentialUrl: 'https://aws.amazon.com/certification',
      statusText: 'Certified AI / ML Foundations',
      description:
        'Artificial intelligence concepts, machine learning fundamentals, and generative AI services on AWS infrastructure.',
      skills: ['AI/ML Concepts', 'AWS AI Services', 'Prompt Engineering', 'Responsible AI'],
    },
  ],
  learningByBuilding: {
    title: 'PRACTICE-DRIVEN LEARNING',
    subtitle: 'Connecting foundational university coursework directly to production engineering systems.',
    areas: [
      {
        id: 'runtime-isolation',
        index: '01',
        title: 'Operating Systems & Process Isolation',
        connectedProject: 'CodeCore',
        description:
          'Applied Operating Systems concepts (POSIX signals, cgroups, stdout/stderr streams, virtual memory limits) to engineer Docker code execution sandboxes.',
        keyPractices: ['Containerization', 'Resource Clamping', 'Stream I/O'],
      },
      {
        id: 'database-normalization',
        index: '02',
        title: 'Database Design & Relational Indexing',
        connectedProject: 'JobOrbit / CodeCore',
        description:
          'Structured PostgreSQL and MongoDB schemas with foreign keys, compound indexes, and ACID transactions for multi-tenant candidate applications.',
        keyPractices: ['Relational Schema Design', 'MongoDB Atlas', 'Indexing'],
      },
      {
        id: 'algorithmic-rigor',
        index: '03',
        title: 'Data Structures & Algorithms in Practice',
        connectedProject: 'K3 CodeHuddle',
        description:
          'Transformed 1400+ problems worth of graph algorithms and dynamic programming into authoring competitive programming problems for national contests.',
        keyPractices: ['Graph Theory', 'Dynamic Programming', 'Complexity Bounds'],
      },
      {
        id: 'network-protocols',
        index: '04',
        title: 'Computer Networks & RESTful Architecture',
        connectedProject: 'JobOrbit / Thriviefy',
        description:
          'Engineered 15+ REST endpoints with JWT authorization middleware, Cloudinary integration, and proximity distance queries.',
        keyPractices: ['REST APIs', 'JWT RBAC', 'Geolocation Calculations'],
      },
    ],
  },
};
