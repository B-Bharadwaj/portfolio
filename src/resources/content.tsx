import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";

const person: Person = {
  firstName: "B",
  lastName: "Bharadwaj",
  name: "B Bharadwaj",
  role: "Software Developer & GenAI Engineer",
  avatar: "/images/avatar.jpg",
  email: "bharadwaj1603@gmail.com",
  location: "Asia/Kolkata",
  languages: ["English"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Occasional thoughts on AI, backend systems, and building things.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/B-Bharadwaj",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/balaji-bharadwaj1603/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:bharadwaj1603@gmail.com",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} — Software Developer & GenAI Engineer`,
  description: `Portfolio of ${person.name} — building AI-powered systems and scalable backends from Bengaluru, India.`,
  headline: <>Building AI-powered systems & scalable backends</>,
  featured: {
    display: false,
    title: <>Featured Work</>,
    href: "/work/rag-analytics-platform",
  },
  subline: (
  <>
    I'm B Bharadwaj — a Computer Science and Engineering graduate from Dayananda Sagar University,
    specialising in Machine Learning. I design and build backend systems, REST APIs, and AI pipelines
    — with hands-on experience in Django, FastAPI, PostgreSQL, RAG systems, and deep learning across
    NLP and Computer Vision.
  </>
),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About — ${person.name}`,
  description: `CV and background of ${person.name}, ${person.role} based in Bengaluru, India.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: false,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
  <>
    <p>Computer Science and Engineering graduate from Dayananda Sagar University, Bengaluru,
    specialising in Machine Learning. My work sits at the intersection of backend systems
    and generative AI — building scalable APIs, data pipelines, and RAG systems that are
    genuinely production-ready.</p>

    <p>I have worked with Django, FastAPI, and PostgreSQL on the backend, and applied PyTorch,
    TensorFlow, and LLM integration on the AI side — from hybrid RAG retrieval systems to
    deep learning models across NLP and Computer Vision.</p>
  </>
),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Happiest Minds Technologies",
        timeframe: "March 2026 – May 2026",
        role: "GenAI Intern",
        achievements: [
  <>
    Built a production-grade RAG Analytics Platform with hybrid FAISS + BM25 retrieval across multiple PDFs and a PostgreSQL Text-to-SQL pipeline, exposed via 24 FastAPI endpoints with built-in LLM evaluation metrics for response quality monitoring.
  </>,
  <>
    Developed a React + Plotly frontend with role-aware query routing, enabling non-technical stakeholders to query both structured and unstructured data sources through a single unified interface.
  </>,
],
        images: [],
      },
      {
        company: "Innoventes",
        timeframe: "July 2025 – March 2026",
        role: "Software Developer Intern",
        achievements: [
  <>
    Built an end-to-end Claim Reimbursement System in Django and PostgreSQL with a 5-stage automated claim lifecycle, integrating a FastAPI + Tesseract OCR microservice that extracts vendor, date, and amount from receipts into structured JSON with user-authoritative override.
  </>,
  <>
    Designed and deployed REST APIs with role-based access control across 3 user roles — Employee, Manager, and Finance — streamlining approval workflows and reducing unauthorised access risk across the platform.
  </>,
],
        images: [],
      },
    ],
  },
  studies: {
  display: true,
  title: "Education & Certifications",
  institutions: [
    {
      name: "Dayananda Sagar University",
      description: <>B.Tech in Computer Science and Engineering · Elective: Machine Learning · 2022 – 2026 · Bengaluru</>,
    },
    {
      name: "IBM Deep Learning Specialization",
      description: <>Coursera — Introduction to Deep Learning with Keras · Deep Learning with TensorFlow and Keras</>,
    },
    {
      name: "Django for Everybody",
      description: <>Coursera — Web Application Technologies and Django · Building Web Applications in Django · Django Features and Libraries</>,
    },
    {
      name: "AWS Cloud Practitioner Essentials",
      description: <>Coursera — AWS Cloud Practitioner Essentials</>,
    },
  ],
},
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Backend & APIs",
        description: (
          <>
            Building production-grade REST APIs and microservices with Django, FastAPI, and PostgreSQL.
            Experienced with JWT auth, role-based access control, async endpoints, and deployment on AWS.
          </>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "Django", icon: "django" },
          { name: "FastAPI", icon: "fastapi" },
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "REST API", icon: "api" },
          { name: "AWS", icon: "aws" },
          { name: "Git", icon: "git" },
        ],
        images: [],
      },
      {
        title: "AI & Machine Learning",
        description: (
          <>
            Applied deep learning across NLP, Computer Vision, and Generative AI using PyTorch and TensorFlow.
            Built RAG systems with hybrid FAISS + BM25 retrieval, LLM integration, and production evaluation pipelines.
          </>
        ),
        tags: [
          { name: "PyTorch", icon: "pytorch" },
          { name: "TensorFlow", icon: "tensorflow" },
          { name: "Keras", icon: "keras" },
          { name: "Streamlit", icon: "streamlit" },
        ],
        images: [],
      },
      {
        title: "Frontend & Tools",
        description: (
          <>
            Building interactive UIs with React and Tailwind CSS. Data visualization with Plotly.
            Comfortable across the full stack — from SQL schemas to React dashboards.
          </>
        ),
        tags: [
          { name: "React", icon: "react" },
          { name: "JavaScript", icon: "javascript" },
          { name: "TypeScript", icon: "typescript" },
          { name: "HTML/CSS", icon: "html" },
          { name: "Tailwind CSS", icon: "tailwind" },
          { name: "SQL", icon: "database" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Thoughts on AI and engineering...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects — ${person.name}`,
  description: `AI and backend projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery — ${person.name}`,
  description: `A collection by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
