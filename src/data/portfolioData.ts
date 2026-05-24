export const personalInfo = {
  name: "Kirti Mahapatra",
  firstName: "Kirti",
  role: "Software Development Engineer",
  location: "Raipur, Chhattisgarh, India",
  email: "kirtimahapatra07@gmail.com",
  phone: "+91-97761-24300",
  tagline:
    "I build systems that scale. From network science on materials data to real-time collaborative editors — I turn complex problems into elegant, performant solutions.",
  about:
    "I'm Kirti Mahapatra, an M.Tech Computer Science student at IIT Bhilai with a passion for building systems that matter. From network science on 500+ material alloys to real-time collaborative editors handling 1,000+ documents, I've learned that great engineering is equal parts logic and empathy.",
  availability: "Open to opportunities · actively interviewing",
  socials: {
    github: "https://github.com/kirti-007",
    linkedin: "https://linkedin.com/in/kirti-mahapatra-1020a520b/",
    leetcode: "https://leetcode.com/kirt72/",
    email: "mailto:kirtimahapatra07@gmail.com",
  },
  leetcodeStats: "323 problems solved (190E / 124M / 9H)",
};

export const education = [
  {
    degree: "M.Tech, Computer Science and Engineering",
    institution: "Indian Institute of Technology (IIT) Bhilai",
    period: "June 2025 — Present",
    location: "Raipur, Chhattisgarh",
    details: [],
  },
  {
    degree: "B.Tech, Computer Science and Engineering",
    institution: "Veer Surendra Sai University of Technology (VSSUT), Burla",
    period: "Nov 2020 — Jun 2024",
    location: "Odisha",
    details: ["CGPA: 8.88/10"],
  },
];

export const experience = [
  {
    period: "Oct 2023 — Jun 2024",
    role: "Frontend Developer Intern",
    company: "Bottom Street",
    location: "Remote",
    bullets: [
      "Rebuilt 12 marketing/product pages in Next.js 14 + TypeScript; Lighthouse Performance 54→91, LCP down 38%.",
      "Migrated useEffect fetching to Server Components + SSG; TTFB 920ms→310ms, eliminated 18 redundant client re-renders.",
      "Implemented JSON-LD schema + semantic HTML; 30% organic ranking improvement (Google Search Console, 90 days).",
      "Built reusable TypeScript component library (buttons, modals, Zod forms); ~4 hours saved per sprint per feature.",
    ],
    tags: ["Next.js", "TypeScript", "SEO", "Performance", "Component Library"],
  },
  {
    period: "2025 — Present",
    role: "M.Tech Researcher",
    company: "IIT Bhilai",
    location: "Raipur, Chhattisgarh",
    bullets: [
      "Conducting research in network science applied to material informatics.",
      "Developing graph-based models for supply chain criticality analysis.",
    ],
    tags: ["Python", "NetworkX", "Graph Theory", "Research"],
  },
];

export const projects = [
  {
    year: "2025",
    role: "Network Science Researcher",
    title: "Global Alloy Ecosystem",
    description:
      "Scraped and structured 500+ alloys from public materials databases; modeled the ecosystem as a weighted graph with 200+ nodes. Applied PageRank, betweenness centrality, and Louvain community detection to identify the 10 most supply-chain-critical metals. Built an interactive PyVis force-directed graph for drill-down.",
    tags: ["Python", "NetworkX", "Pandas", "PyVis", "Graph Theory"],
    links: {
      github: "https://github.com/kirti-007",
      live: null,
    },
    image: "/images/project-1.jpg",
  },
  {
    year: "2024",
    role: "Full Stack Developer",
    title: "CollabNote",
    description:
      "Real-time collaborative markdown editor with WebSocket sync and operational-transformation conflict resolution. Architected with React/TypeScript custom hooks, cutting re-renders by 60% via React.memo and useMemo. JWT + refresh-token auth with HTTP-only cookies. Per-document RBAC. Compound indexes reduced fetch latency from ~400ms to ~60ms at 1,000 document scale.",
    tags: ["React", "TypeScript", "Node.js", "Socket.io", "MongoDB", "JWT"],
    links: {
      github: "https://github.com/kirti-007",
      live: null,
    },
    image: "/images/project-2.jpg",
  },
  {
    year: "2024",
    role: "Backend Engineer",
    title: "SnapLink",
    description:
      "URL shortener sustaining 100 concurrent redirects with p99 latency under 20ms via Redis caching. Sliding-window rate limiter (100 req/15min per IP) blocking abuse with zero impact on legitimate traffic. Click analytics pipeline with MongoDB aggregation and live Recharts dashboard.",
    tags: ["Node.js", "TypeScript", "Redis", "MongoDB", "React", "Recharts"],
    links: {
      github: "https://github.com/kirti-007",
      live: null,
    },
    image: "/images/project-3.jpg",
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["C/C++", "Python", "JavaScript", "TypeScript", "Java", "SQL"],
    pattern: "101010101",
    color: "#D4849A",
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Redux Toolkit", "React Query", "Tailwind CSS", "Framer Motion"],
    pattern: "010101010",
    color: "#9B8EC7",
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "WebSockets", "Socket.io"],
    pattern: "001001001",
    color: "#D4AF87",
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL", "Redis"],
    pattern: "111000111",
    color: "#D4849A",
  },
  {
    category: "Data & Tools",
    items: ["NetworkX", "Pandas", "BeautifulSoup", "PyVis", "scikit-learn", "Git", "Vercel", "Postman", "Linux"],
    pattern: "100100100",
    color: "#9B8EC7",
  },
  {
    category: "CS Fundamentals",
    items: ["DSA", "OS", "DBMS", "Computer Networks", "OOP", "Graph Theory"],
    pattern: "010010010",
    color: "#D4AF87",
  },
];

export const achievements = [
  { title: "GATE CSE 2025", detail: "645/1000 — qualified for IIT Bhilai M.Tech" },
  { title: "LeetCode", detail: "323 problems solved (190 Easy / 124 Medium / 9 Hard)" },
  { title: "Performance Impact", detail: "Rebuilt 12 production pages with measurable SEO and performance gains" },
  { title: "Full-Stack Delivery", detail: "Built 4 full-stack projects with real-world impact and deployment" },
];

export const testimonials = [
  {
    quote:
      "Kirti rebuilt our entire frontend with remarkable speed and precision. Her Lighthouse score improvements and component library work saved us countless hours per sprint.",
    author: "[To be provided]",
    role: "[Title/Relationship]",
  },
  {
    quote:
      "Her ability to dive deep into network science while delivering production-ready code is rare. Kirti combines academic rigor with engineering pragmatism beautifully.",
    author: "[To be provided]",
    role: "[Title/Relationship]",
  },
];

export const navLinks = [
  { label: "home", href: "#hero" },
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "skills", href: "#skills" },
  { label: "contact", href: "#contact" },
];

export const shortcuts = [
  { key: "j", action: "Scroll down" },
  { key: "k", action: "Scroll up" },
  { key: "g g", action: "Go to top" },
  { key: "G", action: "Go to bottom" },
  { key: "g h", action: "Go to hero" },
  { key: "g p", action: "Go to projects" },
  { key: "g s", action: "Go to skills" },
  { key: "g c", action: "Go to contact" },
  { key: "?", action: "Toggle this help" },
  { key: "Esc", action: "Close overlays" },
];
