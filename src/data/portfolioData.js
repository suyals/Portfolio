export const PROFILE = {
  brand: "suyal.",
  name: "Shraddha Suyal",
  firstName: "Shraddha",
  handle: "suyals",
  role: "Full-Stack Developer & CS Engineer",
  headline: "I architect and build full-stack web apps and AI-driven digital products.",
  location: "Phagwara & Prayagraj, India",
  availability: "Open to internships & full-stack roles.",
  email: "suyalshraddha@gmail.com",
  phone: "+91 9236615908",
  github: "https://github.com/suyals",
  linkedin: "https://www.linkedin.com/in/shraddha-suyal/",
  aboutLede: [
    "I'm",
    "Shraddha",
    "— Full-Stack",
    "Developer &",
    "CS Engineer",
    "building fast,",
    "resilient systems.",
  ],
  aboutBio: [
    "Pursuing my B.Tech in Computer Science and Engineering at Lovely Professional University (CGPA 7.87), I design and ship end-to-end web platforms that pair crisp React interfaces with low-latency Node.js, Redis, and AI-assisted backends.",
    "From multi-portal aviation operations at Aerogarage (cutting data-processing latency by 35% with Redis & BullMQ) to multilingual civic AI platforms like SchemeMatch and creative Web Audio tools like AudioSphere, I love building software directly in code from architecture to deployment.",
  ],
  currentlyBuilding: {
    title: "Agentic AI & Distributed React Systems",
    subtitle: "Oracle Agentic AI Certified · B.Tech CSE @ LPU",
  },
};

export const PROJECTS = [
  {
    id: "aerogarage",
    title: "Aerogarage",
    category: "Multi-portal aviation platform",
    year: "2026",
    badge: "Experience · Production",
    repoUrl: "https://github.com/suyals/Aerogarage",
    language: "JavaScript · React 19",
    summary:
      "Multi-portal aviation & facility management platform engineered for airlines, trainees, and administrators with real-time WebSocket workflows and Redis/BullMQ caching.",
    highlights: [
      "Architected separate operational portals for airlines, trainees, and administrators, integrating Redis caching and BullMQ background job queues to reduce data-processing latency by 35%.",
      "Implemented secure role-based access control (RBAC) using JWT authentication and request sanitization to safeguard sensitive aviation operational data.",
      "Built real-time status updates using WebSockets and streamlined client request workflows across multiple user portals.",
    ],
    metrics: [
      { label: "Latency Drop", value: "-35%" },
      { label: "Portals", value: "3 Roles" },
      { label: "Realtime", value: "WebSockets" },
    ],
    stack: ["React 19", "Node.js", "Express.js", "MongoDB", "Redis", "BullMQ", "Tailwind CSS", "WebSockets"],
    theme: {
      bg: "from-[#1a0505] via-[#2b0908] to-[#0f0000]",
      accent: "#e5524a",
      secondary: "#45e0ea",
    },
    visualType: "aviation",
  },
  {
    id: "schemematch",
    title: "SchemeMatch",
    category: "AI scheme matching platform",
    year: "2026",
    badge: "AI & Full-Stack",
    repoUrl: "https://github.com/suyals/SchemeMatch",
    language: "TypeScript · React",
    summary:
      "AI-driven government scheme matching platform for marginalized entrepreneurs featuring rule-based eligibility scoring, automated DPR generation, and a multilingual conversational copilot.",
    highlights: [
      "Developed an AI-powered scheme matching engine using rule-based eligibility scoring across demographic, income, sector, location, and loan requirements.",
      "Engineered REST APIs for scheme matching, automated DPR (Detailed Project Report) generation, document readiness analysis, EMI calculation, and financial projection.",
      "Designed responsive React + TypeScript interfaces with multilingual support, side-by-side scheme comparison, application navigation, and an AI conversational copilot.",
    ],
    metrics: [
      { label: "Scoring", value: "5-Factor" },
      { label: "Automation", value: "DPR + EMI" },
      { label: "UX", value: "Multilingual" },
    ],
    stack: ["React", "TypeScript", "Vite", "Node.js", "Express.js", "REST API", "Supabase"],
    theme: {
      bg: "from-[#06181c] via-[#0c272d] to-[#0f0000]",
      accent: "#45e0ea",
      secondary: "#e5524a",
    },
    visualType: "schemematch",
  },
  {
    id: "audiosphere",
    title: "AudioSphere",
    category: "Browser DAW & sample hub",
    year: "GitHub",
    badge: "Web Audio Engine",
    repoUrl: "https://github.com/suyals/audiosphere",
    language: "HTML · Web Audio API",
    summary:
      "Browser-based Digital Audio Workstation & Sample Hub with a 16-step sequencer, real-time Web Audio synthesis, interactive waveform slicer, and community loops.",
    highlights: [
      "Built a 16-step interactive pattern sequencer running directly in the browser with Web Audio API timing precision.",
      "Implemented real-time Web Audio synthesis and an interactive waveform slicer for chopping and previewing audio samples.",
      "Designed a community loop discovery hub allowing creators to browse, layer, and arrange audio loops seamlessly.",
    ],
    metrics: [
      { label: "Sequencer", value: "16-Step" },
      { label: "Audio", value: "Web Synth" },
      { label: "Tools", value: "Slicer" },
    ],
    stack: ["Web Audio API", "HTML5", "JavaScript", "CSS3", "Canvas"],
    theme: {
      bg: "from-[#1e0814] via-[#2c0d1c] to-[#0f0000]",
      accent: "#ffb3b3",
      secondary: "#45e0ea",
    },
    visualType: "audiosphere",
  },
  {
    id: "govassistant",
    title: "GovAssistant",
    category: "Civic services AI chatbot",
    year: "GitHub",
    badge: "Conversational AI",
    repoUrl: "https://github.com/suyals/GovAssistant",
    language: "JavaScript",
    summary:
      "Interactive conversational assistant designed to help citizens understand eligibility, documentation, and workflows for public government services.",
    highlights: [
      "Created an accessible conversational interface guiding citizens through government schemes and public service directories.",
      "Structured multi-turn query handling to surface relevant documentation checklists and application steps quickly.",
    ],
    metrics: [
      { label: "Interface", value: "Chatbot" },
      { label: "Focus", value: "Civic Tech" },
      { label: "Access", value: "Public Web" },
    ],
    stack: ["JavaScript", "Node.js", "HTML5", "CSS3", "NLP Flows"],
    theme: {
      bg: "from-[#0b1522] via-[#132235] to-[#0f0000]",
      accent: "#60a5fa",
      secondary: "#45e0ea",
    },
    visualType: "govassistant",
  },
  {
    id: "foodsmile",
    title: "FoodSmile",
    category: "Food & recipe web app",
    year: "2026",
    badge: "Frontend & UI",
    repoUrl: "https://github.com/suyals/Food-Smile",
    language: "JavaScript · Bootstrap",
    summary:
      "Responsive food and recipe discovery web application crafted with structured culinary sections, intuitive navigation, and cross-device interactive UI components.",
    highlights: [
      "Developed a responsive food web application enabling users to explore recipes and food content through an engaging editorial interface.",
      "Designed structured content sections, intuitive navigation, and interactive UI components for improved user experience.",
      "Deployed on Vercel with fluid mobile-first breakpoints for smooth browsing across phones, tablets, and desktops.",
    ],
    metrics: [
      { label: "Layout", value: "Responsive" },
      { label: "Hosting", value: "Vercel" },
      { label: "UI", value: "Interactive" },
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Vercel"],
    theme: {
      bg: "from-[#211005] via-[#311708] to-[#0f0000]",
      accent: "#f59e0b",
      secondary: "#ffb3b3",
    },
    visualType: "foodsmile",
  },
  {
    id: "hackher",
    title: "HackHer",
    category: "Student mental health platform",
    year: "GitHub",
    badge: "Social Impact UI",
    repoUrl: "https://github.com/suyals/HackHer",
    language: "CSS · Web",
    summary:
      "Student mental health support platform built to make wellness resources, peer guidance, and self-care check-ins approachable and stigma-free.",
    highlights: [
      "Crafted a calm, empathetic visual system tailored for students seeking confidential mental wellness support.",
      "Organized guided resources, mood check-in flows, and crisis helpline access in a clear, accessible layout.",
    ],
    metrics: [
      { label: "Domain", value: "Wellness" },
      { label: "Design", value: "Empathetic" },
      { label: "Audience", value: "Students" },
    ],
    stack: ["HTML5", "CSS3", "Responsive Design", "Accessibility"],
    theme: {
      bg: "from-[#1a0d1e] via-[#281330] to-[#0f0000]",
      accent: "#f472b6",
      secondary: "#ffb3b3",
    },
    visualType: "hackher",
  },
  {
    id: "systems-ai-lab",
    title: "Systems & Triage Lab",
    category: "OS simulator & complaint AI",
    year: "GitHub",
    badge: "Systems & Python",
    repoUrl: "https://github.com/suyals/Replacement-Algorithm-Simulator",
    language: "TypeScript · Python",
    summary:
      "Dual engineering showcase pairing an interactive TypeScript Page Replacement Algorithm Simulator with Intelligent Student Complaint prioritization (Python & JS).",
    highlights: [
      "Built a TypeScript Replacement Algorithm Simulator to visualize FIFO, LRU, and Optimal page replacement steps interactively.",
      "Developed Intelligent Student Complaint prioritization pipelines in Python and JavaScript to classify and route urgent campus issues.",
    ],
    metrics: [
      { label: "Repos", value: "2 Labs" },
      { label: "Languages", value: "TS + Py" },
      { label: "Core", value: "Algorithms" },
    ],
    stack: ["TypeScript", "Python", "JavaScript", "OS Algorithms", "Classification"],
    theme: {
      bg: "from-[#0e1714] via-[#132620] to-[#0f0000]",
      accent: "#34d399",
      secondary: "#45e0ea",
    },
    visualType: "systems",
  },
];

export const EXPERIENCE_ROWS = [
  {
    org: "Aerogarage",
    role: "Aviation & Facility Management Platform",
    period: "May 2026",
    summary:
      "Architected a 3-portal aviation platform (airlines, trainees, admins) with Redis + BullMQ (-35% latency), JWT RBAC, request sanitization, and real-time WebSocket workflows.",
    stack: "React 19 · Node.js · Express · MongoDB · Redis · BullMQ · WebSockets",
  },
  {
    org: "Cipher Schools",
    role: "Java with OOP Programming Trainee",
    period: "Jun 2026 – Jul 2026",
    summary:
      "Intensive EdTech training covering Core Java fundamentals, Object-Oriented Programming (Encapsulation, Inheritance, Polymorphism, Abstraction), and algorithmic problem-solving.",
    stack: "Core Java · OOP · Data Structures · Problem Solving",
  },
  {
    org: "Lovely Professional University",
    role: "B.Tech in Computer Science & Engineering",
    period: "Aug 2026 – Present",
    summary:
      "Pursuing Bachelor of Technology in CSE in Phagwara, Punjab (CGPA: 7.87), building full-stack products, AI copilots, and systems simulators.",
    stack: "Phagwara, Punjab · CGPA 7.87",
  },
  {
    org: "Bethany Convent School",
    role: "Intermediate (68%) & Matriculation (85%)",
    period: "Mar 2021 – May 2024",
    summary:
      "Completed senior secondary and secondary schooling in Prayagraj, Uttar Pradesh with a strong foundation in mathematics and computer science.",
    stack: "Prayagraj, Uttar Pradesh",
  },
];

export const GITHUB_REPOS_EXTRA = [
  { name: "SchemeMatch", url: "https://github.com/suyals/SchemeMatch" },
  { name: "audiosphere", url: "https://github.com/suyals/audiosphere" },
  { name: "Aerogarage", url: "https://github.com/suyals/Aerogarage" },
  { name: "GovAssistant", url: "https://github.com/suyals/GovAssistant" },
  { name: "Food-Smile", url: "https://github.com/suyals/Food-Smile" },
  { name: "HackHer", url: "https://github.com/suyals/HackHer" },
  { name: "Replacement-Algorithm-Simulator", url: "https://github.com/suyals/Replacement-Algorithm-Simulator" },
  { name: "Intelligent-Student-Complaint", url: "https://github.com/suyals/Intelligent-Student-Complaint" },
];

export const INSIGHTS_AND_CERTS = [
  {
    date: "Aug 26",
    title: "Agentic AI Certified Foundation Associate",
    description:
      "Earned Oracle certification covering autonomous AI agent architectures, tool-use orchestration, reasoning loops, and grounded enterprise workflows.",
    tag: "Oracle · Certificate",
    meta: "Verified Credential",
    link: "https://www.linkedin.com/in/shraddha-suyal/",
  },
  {
    date: "Jul 26",
    title: "Java with OOPs – Programming Language",
    description:
      "Completed hands-on Core Java and Object-Oriented Programming certification at Cipher School, mastering encapsulation, inheritance, polymorphism, and abstraction.",
    tag: "Cipher School · Certificate",
    meta: "Training + Exam",
    link: "https://www.linkedin.com/in/shraddha-suyal/",
  },
  {
    date: "Apr 26",
    title: "React Js — Modern Frontend Engineering",
    description:
      "Certified in React.js by Tech Veda, building component-driven interfaces, hooks state management, and responsive production UIs.",
    tag: "Tech Veda · Certificate",
    meta: "Frontend Cert",
    link: "https://www.linkedin.com/in/shraddha-suyal/",
  },
  {
    date: "May 26",
    title: "Cutting Data-Processing Latency by 35% with Redis & BullMQ",
    description:
      "Engineering breakdown from Aerogarage: offloading heavy aviation portal tasks to BullMQ workers, caching hot queries in Redis, and broadcasting state over WebSockets.",
    tag: "Architecture Note",
    meta: "3 min read",
    projectId: "aerogarage",
  },
  {
    date: "Sept 26",
    title: "Hybrid Rule-Based Scoring + Conversational Copilot in SchemeMatch",
    description:
      "How combining deterministic 5-factor eligibility scoring with automated DPR/EMI APIs and an AI copilot delivers trustworthy recommendations for entrepreneurs.",
    tag: "AI Engineering",
    meta: "4 min read",
    projectId: "schemematch",
  },
];

export const SKILLS_GRID = [
  { name: "React 19 / Next.js", group: "Frontend", badge: "Core" },
  { name: "TypeScript", group: "Language", badge: "Typed" },
  { name: "Node.js & Express", group: "Backend", badge: "APIs" },
  { name: "Python & FastAPI", group: "AI / Backend", badge: "ML Ready" },
  { name: "Tailwind CSS", group: "Styling", badge: "Design Sys" },
  { name: "Redis & BullMQ", group: "Performance", badge: "-35% Latency" },
  { name: "WebSockets & JWT", group: "Realtime / Auth", badge: "RBAC" },
  { name: "PostgreSQL & MySQL", group: "Relational DB", badge: "SQL" },
  { name: "MongoDB & Supabase", group: "Cloud Data", badge: "NoSQL / BaaS" },
  { name: "C / C++ / Java", group: "Systems & OOP", badge: "DSA" },
  { name: "Git & GitHub", group: "Workflow", badge: "@suyals" },
  { name: "Vercel & Vite", group: "Deployment", badge: "Edge" },
];

export const FOCUS_SLIDES = [
  {
    quote:
      "Architected Aerogarage's multi-portal aviation platform across airlines, trainees, and admins — integrating Redis caching and BullMQ queues to cut data-processing latency by 35% while securing operations with JWT RBAC and WebSockets.",
    author: "Aerogarage",
    role: "Production Architecture · May 2026",
    projectId: "aerogarage",
    cta: "Inspect Aerogarage case study",
  },
  {
    quote:
      "Built SchemeMatch end-to-end in React, TypeScript, Express, and Supabase — combining deterministic 5-factor eligibility scoring with automated DPR generation, EMI projections, multilingual UI, and an AI conversational copilot.",
    author: "SchemeMatch",
    role: "AI & Civic Tech · Sept 2026",
    projectId: "schemematch",
    cta: "Inspect SchemeMatch case study",
  },
  {
    quote:
      "Certified Oracle Agentic AI Foundation Associate alongside hands-on Java OOP training at Cipher Schools and React.js at Tech Veda — bridging clean algorithmic fundamentals with modern full-stack shipping.",
    author: "Continuous Engineering",
    role: "Oracle · Cipher Schools · Tech Veda",
    projectId: "audiosphere",
    cta: "Explore AudioSphere & Labs",
  },
];
