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
    link: "https://linkedin.com/in/Bharadwaj",
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
    Final-year CS student specialising in Machine Learning — Python, Django, FastAPI backend dev
    with hands-on experience in RAG systems, deep learning pipelines, and LLM integration.
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
        I'm a final-year Computer Science Engineering student at Dayananda Sagar University,
        Bengaluru, specialising in Machine Learning. My work sits at the intersection of backend
        systems and generative AI — building scalable APIs, data pipelines, and RAG systems that
        are genuinely production-ready.
        <br /><br />
        I've worked with Django, FastAPI, and PostgreSQL on the backend, and dived deep into
        PyTorch, TensorFlow, and LLM integration on the AI side. Whether it's a multi-PDF
        retrieval platform or an evolutionary neural architecture search framework, I like building
        things that are both technically rigorous and genuinely useful.
        <br /><br />
        Outside of code, I'm interested in how AI systems can be made interpretable,
        safe, and practically deployable — not just accurate on benchmarks.
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
            Built a production-grade RAG Analytics Platform — a Multi-PDF RAG system with hybrid
            FAISS + BM25 retrieval and a PostgreSQL Text-to-SQL pipeline, with 24 FastAPI endpoints,
            built-in LLM evaluation, and SQL logging for full auditability.
          </>,
          <>
            Developed an interactive React frontend with Plotly-based visualizations and role-aware
            query routing across both structured and unstructured data sources.
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
            Developed a Claim Reimbursement System using Django and PostgreSQL, enabling end-to-end
            claim processing with OCR-based microservices for automated document data extraction
            and space validation.
          </>,
          <>
            Contributed to backend API design, integration, and deployment of production-ready
            features with role-based access control for clients and analysts.
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
