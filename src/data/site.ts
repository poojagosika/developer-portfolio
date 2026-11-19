// All the words on the site live here. Edit this file to change content.

export const person = {
  name: "Pooja Gosika",
  role: "Lead Software Engineer",
  company: "Upivot",
  location: "Hyderabad, India",
  openTo: "Open to remote & US roles",
  email: "pooja0xdev@gmail.com",
  // Hyderabad: used by the visitor map and the local clock.
  home: { lat: 17.385, lon: 78.4867, timeZone: "Asia/Kolkata" },
  links: {
    github: "https://github.com/poojagosika",
    linkedin: "https://www.linkedin.com/in/poojagosika/",
    x: "https://x.com/0xPoojaDev",
  },
};

export type Project = {
  name: string;
  // A logo file in /public/logos, or an emoji when there is no logo.
  logo?: string;
  // Set when the logo fills its file edge to edge and needs room around it.
  logoPadded?: boolean;
  emoji?: string;
  kind: string;
  blurb: string;
  detail: string;
  tech: string[];
  image?: string;
  live?: string;
  code?: string;
};

export const projects: Project[] = [
  {
    name: "InterviewPrepUp",
    logo: "/logos/upivot.png",
    kind: "AI interview practice",
    blurb: "An AI mock interviewer for product manager roles.",
    detail:
      "Real-time voice sessions over WebSockets, LLM follow-up questions and 5-dimension scoring with OpenAI + LangChain, resume parsing, and downloadable PDF reports.",
    tech: ["React", "Node.js", "OpenAI", "LangChain", "WebSockets", "AWS"],
    image: "/work/interviewprepup.png",
    live: "https://www.interviewprepup.com",
  },
  {
    name: "Upivot",
    logo: "/logos/upivot.png",
    kind: "PM mentorship platform",
    blurb: "The full platform behind a PM career program.",
    detail:
      "The full platform behind a PM career program (37% placement rate). Video lessons with HLS streaming, Whisper transcription, Razorpay payments, S3 uploads, SES email and an admin CMS.",
    tech: ["React", "Node.js", "MongoDB", "AWS", "FFmpeg", "Razorpay"],
    image: "/work/upivot.png",
    live: "https://www.upivot.in",
  },
  {
    name: "Deliver Website",
    logo: "/logos/deliver.png",
    logoPadded: true,
    kind: "Web design and development studio",
    blurb: "High-converting websites for startups.",
    detail:
      "We design and develop high-performance websites and web apps that turn visitors into customers. Fast turnaround, pixel-perfect execution.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Motion", "Cloudflare"],
    image: "/work/deliver.jpg",
    live: "https://deliverwebsite.com",
  },
  {
    name: "Deliver Website UI",
    logo: "/logos/deliver.png",
    logoPadded: true,
    kind: "React component library",
    blurb: "Free React components and landing pages.",
    detail:
      "A free React component library: copy-paste landing page templates, heroes, navbars and login pages, built with Tailwind and Motion.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Motion", "shadcn/ui"],
    image: "/work/deliver-ui.jpg",
    live: "https://ui.deliverwebsite.com",
  },
  {
    name: "Drive My Portfolio",
    emoji: "🏎️",
    kind: "3D portfolio",
    blurb: "A portfolio you explore by driving an F1 car.",
    detail:
      "A 3D portfolio you explore by driving an F1 car through an open world, built with Three.js and React.",
    tech: ["JavaScript", "Three.js", "React", "Shadcn UI", "Tailwind CSS"],
    image: "/work/drive-my-portfolio.png",
    live: "https://poojagosika.github.io/drive-my-portfolio/",
    code: "https://github.com/poojagosika/drive-my-portfolio",
  },
  {
    name: "CodeRoutine",
    logo: "/logos/coderoutine.png",
    kind: "Open source",
    blurb: "Core contributor with 180+ commits.",
    detail:
      "Core contributor with 180+ commits. Redesigned the hiring and onboarding pages and resolved layout and spacing issues across shared components.",
    tech: ["MERN", "MUI v5", "Redux Toolkit"],
    code: "https://github.com/aakash416/CodeRoutine",
  },
];

export const openSource = {
  intro:
    "I read unfamiliar production codebases, find the bug, and ship a small, focused fix.",
  // From GitHub, Nov 19 2026. Newest first; add new ones at the top.
  merged: [
    {
      project: "TraceRoot",
      repo: "traceroot-ai/traceroot",
      title: "Price Claude Opus 4.1",
      date: "Nov 19, 2026",
      url: "https://github.com/traceroot-ai/traceroot/pull/3096",
    },
    {
      project: "Okteto",
      repo: "okteto/okteto",
      title:
        "Keep https curl healthchecks instead of probing them over plain HTTP",
      date: "Nov 18, 2026",
      url: "https://github.com/okteto/okteto/pull/5262",
    },
    {
      project: "Modelence",
      repo: "modelence/modelence",
      title:
        "Stop rebuilding indexes declared with unique: false, hidden: false or a simple collation",
      date: "Nov 16, 2026",
      url: "https://github.com/modelence/modelence/pull/470",
    },
    {
      project: "Okteto",
      repo: "okteto/okteto",
      title: "Accept restart: on-failure:<max-retries>",
      date: "Nov 13, 2026",
      url: "https://github.com/okteto/okteto/pull/5244",
    },
    {
      project: "Okteto",
      repo: "okteto/okteto",
      title:
        "Read compose memory units in mem_limit, mem_reservation and deploy resources",
      date: "Nov 11, 2026",
      url: "https://github.com/okteto/okteto/pull/5252",
    },
    {
      project: "BuildBuddy",
      repo: "buildbuddy-io/buildbuddy",
      title:
        "Show durations that round up to the next unit without exponent notation",
      date: "Nov 9, 2026",
      url: "https://github.com/buildbuddy-io/buildbuddy/pull/14094",
    },
    {
      project: "Modelence",
      repo: "modelence/modelence",
      title: "Stop rebuilding text and 2dsphere indexes on every startup",
      date: "Nov 9, 2026",
      url: "https://github.com/modelence/modelence/pull/450",
    },
    {
      project: "Modelence",
      repo: "modelence/modelence",
      title: "Keep the redirect status instead of always sending 302",
      date: "Nov 9, 2026",
      url: "https://github.com/modelence/modelence/pull/448",
    },
    {
      project: "Okteto",
      repo: "okteto/okteto",
      title: "Rename endpoint rule services along with sanitized service names",
      date: "Nov 6, 2026",
      url: "https://github.com/okteto/okteto/pull/5238",
    },
    {
      project: "TraceRoot",
      repo: "traceroot-ai/traceroot",
      title: "Show score deltas in the scale of the scores compared",
      date: "Nov 5, 2026",
      url: "https://github.com/traceroot-ai/traceroot/pull/2794",
    },
    {
      project: "Okteto",
      repo: "okteto/okteto",
      title: "Keep service resources when a deploy block is set",
      date: "Nov 3, 2026",
      url: "https://github.com/okteto/okteto/pull/5220",
    },
    {
      project: "Okteto",
      repo: "okteto/okteto",
      title: "Merge override volumes/endpoints per key instead of replacing",
      date: "Nov 3, 2026",
      url: "https://github.com/okteto/okteto/pull/5234",
    },
    {
      project: "Modelence",
      repo: "modelence/modelence",
      title: "Answer wrong login credentials with a 401 AuthError",
      date: "Nov 2, 2026",
      url: "https://github.com/modelence/modelence/pull/431",
    },
    {
      project: "Modelence",
      repo: "modelence/modelence",
      title:
        "Keep the user's plugins over framework plugins with the same name",
      date: "Nov 2, 2026",
      url: "https://github.com/modelence/modelence/pull/429",
    },
    {
      project: "Modelence",
      repo: "modelence/modelence",
      title: "Re-join channels after a socket reconnect",
      date: "Nov 2, 2026",
      url: "https://github.com/modelence/modelence/pull/425",
    },
    {
      project: "Lago",
      repo: "getlago/lago-front",
      title: "Convert add-on amounts with the add-on's currency precision",
      date: "Oct 29, 2026",
      url: "https://github.com/getlago/lago-front/pull/4547",
    },
    {
      project: "Modelence",
      repo: "modelence/modelence",
      title: "Set status params correctly on auth redirect URLs",
      date: "Oct 27, 2026",
      url: "https://github.com/modelence/modelence/pull/413",
    },
    {
      project: "Modelence",
      repo: "modelence/modelence",
      title: "Stop rebuilding collation indexes on every startup",
      date: "Oct 19, 2026",
      url: "https://github.com/modelence/modelence/pull/419",
    },
    {
      project: "TraceRoot",
      repo: "traceroot-ai/traceroot",
      title: "Break trace_start_time ties by trace_id in the trace list",
      date: "Oct 15, 2026",
      url: "https://github.com/traceroot-ai/traceroot/pull/2570",
    },
    {
      project: "TraceRoot",
      repo: "traceroot-ai/traceroot",
      title: "Count DECISION spans in the default by-model widgets",
      date: "Oct 14, 2026",
      url: "https://github.com/traceroot-ai/traceroot/pull/2552",
    },
  ],
  // Pull requests still open, and how many projects they are spread over.
  openCount: 26,
  inReview: [
    "TraceRoot",
    "Rivet",
    "SigNoz",
    "Lago",
    "Okteto",
    "Linear",
    "BuildBuddy",
    "Evidence",
    "SuperTokens",
    "OpenWork",
    "mcp-use",
    "Dittofeed",
    "Respan",
    "neatlogs",
    "reninja",
  ],
  // Repos GitHub lists under "contributed to", with their star counts.
  repos: [
    { repo: "firecrawl/firecrawl", stars: "204k" },
    { repo: "twentyhq/twenty", stars: "61.2k" },
    { repo: "SigNoz/signoz", stars: "32.7k" },
    { repo: "trycua/cua", stars: "32.7k" },
    { repo: "reflex-dev/reflex", stars: "29k" },
    { repo: "vercel/ai", stars: "28.1k" },
    { repo: "different-ai/openwork", stars: "24.6k" },
    { repo: "Skyvern-AI/skyvern", stars: "23.5k" },
    { repo: "confident-ai/deepeval", stars: "19.6k" },
    { repo: "mcp-use/mcp-use", stars: "11k" },
    { repo: "getlago/lago", stars: "10.9k" },
    { repo: "authzed/spicedb", stars: "7.2k" },
    { repo: "evidence-dev/evidence", stars: "7.1k" },
    { repo: "rivet-dev/rivet", stars: "7k" },
    { repo: "lightdash/lightdash", stars: "6.2k" },
    { repo: "supabase/supabase-js", stars: "4.6k" },
    { repo: "okteto/okteto", stars: "3.6k" },
    { repo: "svix/svix-webhooks", stars: "3.5k" },
    { repo: "dittofeed/dittofeed", stars: "3.1k" },
    { repo: "medplum/medplum", stars: "2.8k" },
    { repo: "traceroot-ai/traceroot", stars: "1.4k" },
    { repo: "buildbuddy-io/buildbuddy", stars: "808" },
    { repo: "modelence/modelence", stars: "436" },
    { repo: "supertokens/supertokens-node", stars: "330" },
  ],
};

export const experience: {
  role: string;
  company: string;
  about?: string;
  meta: string;
  dates: string;
  points: string[];
}[] = [
  {
    role: "Lead Software Engineer",
    company: "Upivot",
    about:
      "Mentorship platform for people moving into product management roles",
    meta: "Remote",
    dates: "Mar 2026 — Present",
    points: [
      "Designed and shipped the entire platform as sole engineer, from Figma designs to production, across 3 product lines: cohorts, courses and Upivot Pro (React, Node.js, Express, MongoDB, AWS).",
      "Supports a program with a 37% PM placement rate, with alumni now at companies including CRED and Morgan Stanley.",
      "Integrated Razorpay payments with GST-ready PDF receipts, mentor invoices and automated email notifications.",
      "Automated live mentor sessions end to end with the Zoom and Google Calendar APIs and scheduled jobs, removing manual sign-ups, invites and reminders.",
      "Developed a video course pipeline that converts uploads into HLS streams on S3, with Whisper transcripts and AI-generated summaries.",
      "Set up CI/CD with GitHub Actions, Docker, AWS ECS and S3/CloudFront using short-lived OIDC credentials, and hardened the API with rate limiting and input sanitization.",
    ],
  },
  {
    role: "Lead Software Engineer",
    company: "InterviewPrepUp",
    about:
      "AI interview practice platform for product managers, an Upivot product",
    meta: "Remote",
    dates: "Mar 2026 — Present",
    points: [
      "Launched an AI interview simulator that asks follow-up questions, scores answers across 5 competencies and quotes the candidate's own words in feedback, modeled on 3,000+ real MAANG interviews.",
      "Engineered real-time voice answers by streaming browser audio over WebSockets to a Node.js speech-to-text service with 2-second transcription intervals.",
      "Implemented structured JSON LLM outputs (OpenAI, LangChain) to keep scores and feedback consistent across sessions.",
      "Delivered resume parsing (PDF and Word), downloadable PDF reports, Google sign-in and Razorpay payments.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Accenture",
    meta: "Hybrid",
    dates: "Nov 2023 — Mar 2026",
    points: [
      "Developed enterprise Salesforce solutions with Apex and Lightning for client projects over 2+ years.",
      "Collaborated with cross-functional teams across requirements, development, testing and release.",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "PaTaaK Inc",
    meta: "Internship · Remote",
    dates: "Nov 2019 — Apr 2020",
    points: [
      "Built responsive web interfaces with AngularJS, HTML5 & CSS3",
      "Integrated APIs and optimized reusable UI components",
    ],
  },
];

export const education = [
  {
    title: "B.Tech, Electronics & Communication Engineering",
    place: "Sphoorthy Engineering College (JNTU Hyderabad)",
    dates: "2018 — 2022",
  },
  {
    title: "Cisco Cybersecurity",
    place: "Cisco Networking Academy",
    dates: "2019",
  },
];

export const stack: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["JavaScript", "TypeScript", "Go", "Python", "Java", "C++"],
  },
  {
    group: "Frontend",
    items: [
      "React",
      "Next.js",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Material UI",
      "Redux Toolkit",
      "Framer Motion",
      "Three.js",
      "AngularJS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    group: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL (Apollo)",
      "WebSockets",
      "JWT and Google sign-in",
      "Role-based access",
    ],
  },
  {
    group: "AI / LLM",
    items: [
      "OpenAI API",
      "LangChain",
      "Anthropic Claude API",
      "Whisper speech-to-text",
      "Model Context Protocol (MCP)",
      "Prompt design",
      "Structured JSON outputs",
    ],
  },
  {
    group: "Cloud & DevOps",
    items: [
      "AWS (ECS, ECR, EC2, S3, CloudFront, SES, Route 53, Secrets Manager)",
      "Docker",
      "Kubernetes",
      "GitHub Actions CI/CD",
      "Cloudflare Workers",
      "Vercel",
      "Netlify",
      "Linux",
    ],
  },
  {
    group: "Data & APIs",
    items: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "ClickHouse",
      "Firebase",
      "Razorpay",
      "Zoom and Google Calendar APIs",
      "FFmpeg/HLS video",
      "Salesforce (Apex)",
    ],
  },
  {
    group: "Testing & tools",
    items: [
      "Jest",
      "Mocha",
      "Unit testing",
      "Code review",
      "Debugging",
      "OpenTelemetry",
      "PostHog",
      "GA4",
      "Turborepo",
      "Postman",
      "Figma",
      "Git",
    ],
  },
];

export const contact = {
  title: "Let's work together",
  body: "Have a project in mind or need a Lead Full-Stack Developer? Feel free to reach out. Always open to collaborating on impactful products.",
  // Same Web3Forms key as the current poojagosika.com contact form.
  web3formsKey: "6556837b-7d68-40bd-b598-266f27ab5186",
};
