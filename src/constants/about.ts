export const ABOUT_CONTENT = {
  eyebrow: "ABOUT ME / THE PERSON BEHIND THE CODE",
  headline: {
    line1: "I like turning complex problems",
    line2: "into useful products",
  },
  paragraphs: [
    "I'm Gyanendra Singh, an Information Technology student at KIET Group of Institutions who enjoys building web applications and understanding how software works beyond the interface.",
    "My work spans frontend development, backend engineering, databases, and deployment workflows. I enjoy taking an idea from its initial structure to a working product, understanding the trade-offs involved, and improving the details that make software reliable and useful.",
    "Alongside development, I spend time solving data structures and algorithms problems and learning how to design systems that are easier to maintain and extend.",
  ],
  concludingStatement:
    "I believe good software is built through patience, clear communication, and an honest respect for the user's time and device resources.",
  focusAreas: [
    {
      index: "01",
      title: "Building useful web products",
      description:
        "Developing responsive, accessible web interfaces that prioritize clarity, fast render times, and thoughtful user interaction.",
      tag: "FRONTEND & UX",
    },
    {
      index: "02",
      title: "Engineering dependable backend systems",
      description:
        "Designing structured RESTful APIs, relational schemas, validation pipelines, and server logic built to withstand real-world edge cases.",
      tag: "BACKEND & DATA",
    },
    {
      index: "03",
      title: "Problem-solving and continuous learning",
      description:
        "Practicing algorithmic reasoning, analyzing computational complexity, and continuously studying patterns in distributed software.",
      tag: "ALGORITHMS",
    },
  ],
  principles: [
    {
      index: "01",
      title: "Clarity before complexity",
      description:
        "Prefer understandable implementations and deliberate abstractions over unnecessary complexity.",
      subtext: "Code is read far more often than it is written.",
    },
    {
      index: "02",
      title: "Build for the complete workflow",
      description:
        "Think beyond the visible interface, considering validation, APIs, data storage, failure states, and deployment.",
      subtext: "Resilience lives at system boundaries.",
    },
    {
      index: "03",
      title: "Improve through iteration",
      description:
        "Test assumptions, investigate bugs, learn from implementation trade-offs, and refine the product.",
      subtext: "Small, consistent iterations compound over time.",
    },
  ],
  metadata: {
    degree: "B.Tech in Information Technology",
    institution: "KIET Group of Institutions",
    period: "2023–2027",
    location: "Ghaziabad, India",
    status: "Active Undergraduate",
  },
} as const;
