import { guideTopics } from "./guide-topics";

export const profile = {
  fullName: "Mmasechaba Francesca Seopa",
  firstName: "Mmasechaba",
  rest: "Francesca Seopa",
  nickname: "Chabi",
  role: "Technical Systems Analyst",
  location: "Johannesburg, South Africa",
  email: "chabi.seopa@gmail.com",
  linkedin: "https://linkedin.com/in/chabi-seopa",
  github: "https://github.com/charbileigh",
};

export type FeaturedProject = {
  name: string;
  category: string;
  blurb: string;
  demo: string;
  code: string;
  cover: "trace" | "query";
  tags: string[];
};

export const featuredProjects: FeaturedProject[] = [
  {
    name: "Petal Trace",
    category: "Requirements & testing",
    blurb:
      "When a requirement changes, which tests need another look? I built Petal Trace to connect requirements, test cases and defects so I can see the gaps in coverage.",
    demo: "https://charbileigh.github.io/Petal-trace-traceability-board/",
    code: "https://github.com/charbileigh/Petal-trace-traceability-board",
    cover: "trace",
    tags: ["Traceability", "Coverage", "JavaScript"],
  },
  {
    name: "Rose Query",
    category: "SQL & data",
    blurb:
      "I built Rose Query as a place to practise SQL with a small shop database. You can inspect the tables, try a join and see exactly which rows your query returns.",
    demo: "https://charbileigh.github.io/Rose-query-sql-playground/",
    code: "https://github.com/charbileigh/Rose-query-sql-playground",
    cover: "query",
    tags: ["SQLite", "Joins", "In-browser"],
  },
];

export const projectCategories = ["All", "Testing", "Tools", "Web", "Play"] as const;
export type ProjectCategory = Exclude<(typeof projectCategories)[number], "All">;

export type IndexProject = {
  name: string;
  blurb: string;
  category: ProjectCategory;
  links: { label: string; href: string }[];
};

export const indexProjects: IndexProject[] = [
  {
    name: "Petal Cases",
    blurb: "Design test cases and export them to CSV.",
    category: "Testing",
    links: [
      { label: "Demo", href: "https://charbileigh.github.io/Petal-cases-case-creation/" },
      { label: "Code", href: "https://github.com/charbileigh/Petal-cases-case-creation" },
    ],
  },
  {
    name: "PINK LOOP E2E",
    blurb: "Playwright tests for an online shop, from catalogue to checkout.",
    category: "Testing",
    links: [
      {
        label: "Code",
        href: "https://github.com/charbileigh/Pink-loop-end-2-end-e-commerce-test-solution",
      },
    ],
  },
  {
    name: "Bunny Burrow",
    blurb: "An offline Pomodoro timer that remembers a session.",
    category: "Tools",
    links: [
      { label: "Demo", href: "https://charbileigh.github.io/Bunny-burrow/" },
      { label: "Code", href: "https://github.com/charbileigh/Bunny-burrow" },
    ],
  },
  {
    name: "Petal Pause",
    blurb: "A mood journal with calendar views and local backups.",
    category: "Tools",
    links: [
      { label: "Demo", href: "https://charbileigh.github.io/Pink-mood-tracker/" },
      { label: "Code", href: "https://github.com/charbileigh/Pink-mood-tracker" },
    ],
  },
  {
    name: "Petal Studio",
    blurb: "A browser drawing app with layers and PNG export.",
    category: "Tools",
    links: [
      { label: "Demo", href: "https://charbileigh.github.io/Petal-studio-sketch-app/" },
      { label: "Code", href: "https://github.com/charbileigh/Petal-studio-sketch-app" },
    ],
  },
  {
    name: "chabi.lol · original edition",
    blurb: "The earlier edition of this portfolio, including its interactive diagnostic.",
    category: "Web",
    links: [
      { label: "Visit", href: "https://chabi.lol/" },
      { label: "Code", href: "https://github.com/charbileigh/chabi.lol" },
    ],
  },
  {
    name: "Pink Margins",
    blurb: "A responsive magazine about philosophy and literature.",
    category: "Web",
    links: [
      { label: "Demo", href: "https://charbileigh.github.io/Responsive-magazine-layout/" },
      { label: "Code", href: "https://github.com/charbileigh/Responsive-magazine-layout" },
    ],
  },
  {
    name: "Coming Soon",
    blurb: "A countdown landing page.",
    category: "Web",
    links: [
      { label: "Demo", href: "https://charbileigh.github.io/pink-themed-coming-soon-page/" },
      { label: "Code", href: "https://github.com/charbileigh/pink-themed-coming-soon-page" },
    ],
  },
  {
    name: "Petal Pops",
    blurb: "Two-player tic-tac-toe with score tracking.",
    category: "Play",
    links: [
      { label: "Demo", href: "https://charbileigh.github.io/Petal-pops-tick-tac-toe/" },
      { label: "Code", href: "https://github.com/charbileigh/Petal-pops-tick-tac-toe" },
    ],
  },
  {
    name: "CSS Bear Art",
    blurb: "A blinking bear drawn with HTML and CSS.",
    category: "Play",
    links: [{ label: "CodePen", href: "https://codepen.io/Francesca4/pen/yyePLEB" }],
  },
  {
    name: "Control room",
    blurb: "An interactive robot and control room built for CodePen.",
    category: "Play",
    links: [{ label: "CodePen", href: "https://codepen.io/Francesca4/pen/QwpKwdE" }],
  },
];

export const toolbox: { group: string; items: string[] }[] = [
  {
    group: "Analysis",
    items: ["Requirements", "Process mapping", "Data flows", "Functional specs", "Acceptance criteria"],
  },
  {
    group: "Development & data",
    items: ["SQL", "PostgreSQL", "MariaDB", "Python", "JavaScript", "Bash", "REST APIs", "DevExpress", "Git", "UML / BPMN", "Agile Scrum"],
  },
  {
    group: "Quality & support",
    items: [
      "Robot Framework",
      "Integration testing",
      "Regression testing",
      "UAT",
      "Log investigation",
      "Incident triage",
      "Release verification",
    ],
  },
  {
    group: "AI delivery",
    items: ["Client use cases", "Proofs of concept", "Platform agents", "Reusable prompts", "Output evaluation"],
  },
];

export const credentials = [
  "ISTQB Certified Tester (Foundation Level)",
  "ECSA Candidate Engineer in Computer Engineering",
];

export const expertise: { area: string; items: string[] }[] = [
  {
    area: "Solution consulting",
    items: ["Requirements analysis", "Stakeholder discovery", "Solution design", "Scope definition", "Functional specifications", "Technical documentation"],
  },
  {
    area: "Platform & process design",
    items: ["Workflow configuration", "Business-process analysis", "Data-flow design", "Implementation support", "Operational readiness", "Continuous improvement"],
  },
  {
    area: "Data & integration",
    items: ["SQL and databases", "REST API integration", "Systems integration", "Data-quality checks", "Migration validation", "High-volume platform data"],
  },
  {
    area: "Quality & delivery",
    items: ["Quality assurance", "UAT and acceptance testing", "Test automation", "Agile and SDLC", "Release validation", "Cross-functional delivery"],
  },
];

export const currentRole = {
  company: "Digitata Networks",
  title: "Technical Systems Analyst",
  period: "Mar 2026 – present",
  summary:
    "I work with clients, developers, QA and operations teams to agree on scope and follow changes through configuration, testing, deployment and post-release validation.",
  scope: [
    {
      title: "Requirements and solution design",
      body: "I translate business and technical requirements for telecoms and IoT platforms into functional specifications and system changes. I map workflows, integrations and data flows to find gaps and define dependencies before we design the solution.",
    },
    {
      title: "AI product delivery",
      body: "I help clients identify use cases, define requirements and coordinate proofs of concept. I work with developers on AI agents built for the client’s platform.",
    },
    {
      title: "Testing and release quality",
      body: "I validate system behaviour, data and integrations with PostgreSQL, REST API checks, functional tests and regression tests. I investigate defects and verify fixes against the original business requirements.",
    },
    {
      title: "Production support and automation",
      body: "When an application issue is escalated, I use SQL, system logs and API checks to trace the root cause and help resolve it. I also write scripts, automate repeatable checks and improve processes to reduce manual work and make systems more reliable.",
    },
    {
      title: "Reusable AI prompts and skills",
      body: "I create and refine prompts and skills for structured analysis, writing and review. I check their outputs for accuracy, consistency and whether they suit the task.",
    },
  ],
};

export const previousRoles = [
  {
    title: "Technical Support & Quality Assurance Analyst",
    company: "Digitata Networks",
    period: "Jan 2023 – Mar 2026",
    body: "I supported telecoms and IoT platforms through investigation, solution validation, deployment and operational maintenance.",
    highlights: [
      "Used SQL, PostgreSQL and MariaDB to validate data, investigate backend behaviour and run data-quality and migration checks.",
      "Validated REST API integrations and end-to-end behaviour across connected applications and platform components.",
      "Wrote test cases from business and functional requirements; ran functional, integration, regression, system and acceptance testing.",
      "Built Robot Framework suites and Python and Bash scripts to automate repeatable checks, improve coverage and cut manual effort.",
      "Documented defects and findings clearly and worked with cross-functional teams to deliver stable releases.",
    ],
  },
  {
    title: "Junior Software Developer",
    company: "Digitata Networks",
    period: "Nov 2022 – Jan 2023",
    body: "Developed and maintained enterprise application functionality with JavaScript, SQL, PostgreSQL and Git, turning requirements into queries and enhancements alongside QA and business teams.",
  },
  {
    title: "Graduate Engineer — IoT/M2M Platforms & Cybersecurity",
    company: "MTN South Africa",
    period: "2022",
    body: "Supported enterprise IoT and machine-to-machine platform operations, troubleshooting, monitoring and service assurance, with exposure to telecoms architecture and cybersecurity operations.",
  },
  {
    title: "Junior Full Stack Developer",
    company: "MethodData",
    period: "Dec 2021 – May 2022",
    body: "Built and maintained web applications across frontend, backend, REST API and database components, and supported integrations, debugging, QA and deployment in an Agile team.",
  },
  {
    title: "New Venture Support Intern",
    company: "UCT Research Contracts & Innovation",
    period: "Jul – Nov 2021",
  },
  { title: "Asset Care Engineering Intern", company: "Pragma Global", period: "Jun – Jul 2019" },
] as { title: string; company: string; period: string; body?: string; highlights?: string[] }[];

export const caseStudies = [
  {
    title: "From a request to a workflow",
    body: "I clarified the business rules, exceptions and data needs with the people involved, then mapped the workflow and wrote acceptance criteria the team could use to build and test it.",
  },
  {
    title: "Tracing a production issue",
    body: "I reproduced the reported behaviour, followed the API request to the database and compared the stored values with what appeared on screen. That gave the team a specific fault to investigate and a way to check the fix.",
  },
  {
    title: "Checking a release",
    body: "I reviewed the dependencies, tested the configuration and checked the API and database results. After deployment, I verified that the change behaved as expected.",
  },
];

export const suggestedQuestions = [
  "What do you do?",
  "Which testing tools do you use?",
  "What are you researching?",
  "Tell me about your AI work",
  "How can I contact you?",
];

const fallbackAnswer =
  "Try asking about my roles, tools, education or projects. For anything else, you can reach me at chabi.seopa@gmail.com.";

/** Picks the best-matching answer from public portfolio facts. Runs fully in the browser. */
export function answerQuestion(question: string): string {
  const words = question.trim().toLowerCase();
  const tokens = words.split(/[^a-z0-9]+/);
  let bestScore = 0;
  let reply = fallbackAnswer;
  for (const topic of guideTopics) {
    const score = topic.terms.reduce((total, term) => {
      const matches = term.length <= 2 ? tokens.includes(term) : words.includes(term);
      return total + (matches ? term.length : 0);
    }, 0);
    if (score > bestScore) {
      bestScore = score;
      reply = topic.answer;
    }
  }
  return reply;
}
