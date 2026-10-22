export const resumeData = {
  name: "Abid Ali KP",
  title: "Product-Minded Engineer → Product Manager",
  email: "abidalikp98@gmail.com",
  phone: "+91 9809876758",
  summary:
    "Product-minded engineer with 2+ years of shipping user-facing software at scale, a B.Tech in CS from NIT Calicut, and a track record of turning ambiguous problems into impactful products. I combine deep technical fluency (React, Python, AI/ML) with sharp product instincts — from identifying user pain points to defining metrics, running experiments, and shipping end-to-end. I'm now channeling that full-stack execution ability into Product Management.",
  tagline: "I build things people actually want to use.",
  website: "www.abidalikp.me",
  linkedin: "www.linkedin.com/in/abidalikp",
  github: "www.github.com/abidalikp",
  skills: {
    product: [
      "Product Strategy & Roadmapping",
      "User Research & Empathy Mapping",
      "PRD & Spec Writing",
      "Data-Driven Decision Making",
      "A/B Testing & Experimentation",
      "Agile / Scrum Methodology",
      "Stakeholder Management",
      "Go-to-Market Planning",
    ],
    technical: [
      "React / TypeScript / Redux",
      "Python / Django / REST APIs",
      "AI/ML (Transformers, MediaPipe, PyTorch)",
      "GraphQL / Apollo",
      "System Design & Architecture",
      "SQL / NoSQL Databases",
    ],
  },
  experience: [
    {
      title: "Software Engineer",
      company: "Commotion",
      location: "Mumbai, India",
      startDate: "Feb 2024",
      endDate: "Dec 2024",
      description:
        "Owned frontend delivery across 20+ projects — acting as the bridge between design, engineering, and business stakeholders.",
      highlights: [
        "Independently took a project from 0→1: scoped requirements, designed the architecture, built the frontend, and shipped to production — demonstrating full product ownership.",
        "Reduced API call latency by 30% by redesigning the data-fetching layer with Apollo Client & GraphQL, directly improving page load times and user engagement metrics.",
        "Cut form error rates by 40% through a dynamic validation system (Formik + Yup), improving conversion funnel completion.",
        "Drove a 25% reduction in bundle size through build tooling optimizations (TypeScript, Vite), improving Core Web Vitals and SEO ranking.",
        "Led code reviews and established quality standards that reduced bug escape rate across the team.",
      ],
    },
    {
      title: "Software Trainee",
      company: "Commotion",
      location: "Mumbai, India",
      startDate: "Jan 2023",
      endDate: "Jan 2024",
      description:
        "Rapidly ramped up to full ownership of frontend features, shipping responsive applications used by thousands of users.",
      highlights: [
        "Reduced new project setup time by 50% by creating a reusable boilerplate — a force-multiplier for the entire team.",
        "Collaborated cross-functionally with designers and backend engineers to define API contracts and deliver pixel-perfect implementations.",
        "Built high-performance, responsive web applications using React, Redux, and TailwindCSS.",
      ],
    },
  ],
  education: [
    {
      school: "National Institute of Technology Calicut",
      major: "B.Tech in Computer Science & Engineering",
      location: "Calicut, India",
      startDate: "2018",
      endDate: "2022",
      description:
        "I studied computer science and learned about algorithms, data structures, and software engineering.",
      highlights: [
        "Graduated with first class honors",
        "Completed a capstone project on NLP",
      ],
    },
    {
      school: "Govt. Model HSS Perinthalmanna",
      major: "Higher Secondary Diploma in Computer Science",
      location: "Malappuram, Kerala",
      startDate: "2015",
      endDate: "2017",
      description: "I studied computer science, mathematics, and physics",
      highlights: [],
    },
  ],
  projects: [
    {
      title: "Physio — AI Physical Therapy Coach",
      category: "AI / HealthTech",
      problem:
        "Physical therapy patients lack access to real-time posture feedback outside clinics, leading to poor exercise form and slower recovery.",
      description:
        "A zero-cloud, privacy-first web application that uses edge AI (MediaPipe pose detection) to guide users through back pain rehabilitation exercises with real-time posture correction — all processing happens on-device.",
      impact: [
        "100% client-side AI — zero data leaves the user's device, solving the #1 healthcare privacy concern",
        "Real-time pose detection with exercise rep counting and form scoring",
        "Eliminated the need for expensive clinical visits for routine rehab exercises",
      ],
      pmInsight:
        "Identified the intersection of privacy concerns in health-tech and the accessibility gap in physical therapy. Built an MVP that validates the hypothesis: AI-powered rehab can be both private and effective.",
      techStack: ["React", "TypeScript", "MediaPipe", "TailwindCSS"],
      url: "https://github.com/abidalikp/Physio",
      github: "https://github.com/abidalikp/Physio",
      startDate: "2026",
      endDate: "Present",
      featured: true,
    },
    {
      title: "Virtual Try-On — AI Fashion Assistant",
      category: "AI / E-Commerce",
      problem:
        "Online shoppers can't visualize how clothes will look on them, leading to high return rates (~30% in fashion e-commerce).",
      description:
        "A virtual clothing try-on system built on a custom ViTON implementation that lets users upload their photo and see how different garments look on them, powered by deep learning.",
      impact: [
        "Addresses the $550B fashion e-commerce return problem with AI-powered visualization",
        "Custom deep learning pipeline for realistic garment transfer",
        "End-to-end user flow: upload photo → select garment → see result",
      ],
      pmInsight:
        "Tackled one of e-commerce's biggest conversion killers. This project demonstrates the ability to identify a billion-dollar problem and build a technical proof-of-concept that directly impacts key business metrics (return rate, conversion rate).",
      techStack: ["Python", "Deep Learning", "ViTON", "Computer Vision"],
      url: "https://github.com/abidalikp/clothes-virtual-try-on",
      github: "https://github.com/abidalikp/clothes-virtual-try-on",
      startDate: "2025",
      endDate: "2025",
      featured: true,
    },
    {
      title: "Tweet Summarizer — NLP Research",
      category: "AI / NLP",
      problem:
        "During trending events, users are overwhelmed by thousands of tweets and can't quickly grasp the key narratives.",
      description:
        "B.Tech capstone project: designed and trained transformer models (T5, BART) using PyTorch Lightning to automatically generate concise summaries from clusters of related tweets.",
      impact: [
        "Achieved ROUGE scores comparable to published literature",
        "Fine-tuned T5 transformer with optimized hyperparameters on GPU-accelerated infrastructure",
        "Demonstrated ability to own a research problem end-to-end: literature review → data pipeline → model training → evaluation",
      ],
      pmInsight:
        "Information overload is a core product challenge in social media. This project shows the ability to frame an ambiguous research problem, define success metrics (ROUGE scores), and iterate toward measurable outcomes.",
      techStack: [
        "Python",
        "PyTorch Lightning",
        "Transformers (T5, BART)",
        "Google Colab",
      ],
      url: "https://github.com/abidalikp/automatic-tweet-summarization",
      github: "https://github.com/abidalikp/automatic-tweet-summarization",
      startDate: "Jul 2021",
      endDate: "May 2022",
      featured: true,
    },
    {
      title: "Drop Board — Project Management Tool",
      category: "Productivity / SaaS",
      problem:
        "Teams need lightweight, fast project management tools without the bloat of enterprise solutions.",
      description:
        "A Trello-inspired kanban board with smooth drag-and-drop, built with modern web technologies for speed and simplicity.",
      impact: [
        "Intuitive drag-and-drop UX for task management across multiple boards",
        "Responsive design that works seamlessly across desktop and mobile",
        "Demonstrates understanding of productivity tool UX patterns",
      ],
      pmInsight:
        "Studied the Trello product deeply — understanding what makes kanban boards sticky (visual progress, low friction, satisfying interactions) — and rebuilt those core mechanics from scratch.",
      techStack: ["React", "Vite", "TailwindCSS", "DnD Kit"],
      url: "https://www.abidalikp.me/drop-board/",
      github: "https://github.com/abidalikp/drop-board",
      startDate: "Oct 2021",
      endDate: "Dec 2021",
      featured: false,
    },
    {
      title: "ChatGPT Clone — Conversational AI Interface",
      category: "AI / Developer Tools",
      problem:
        "Understanding how conversational AI interfaces work by building one from the ground up.",
      description:
        "A full-featured ChatGPT-style conversational interface built with TypeScript, demonstrating deep understanding of modern AI product patterns.",
      impact: [
        "Conversation threading and message history management",
        "Clean, responsive chat UI matching modern AI product standards",
        "Real-time streaming response rendering",
      ],
      pmInsight:
        "Demonstrates hands-on understanding of the fastest-growing product category in tech. Built to deeply understand the UX patterns that make conversational AI products engaging.",
      techStack: ["TypeScript", "React", "OpenAI API"],
      url: "https://github.com/abidalikp/chatgpt-clone",
      github: "https://github.com/abidalikp/chatgpt-clone",
      startDate: "2025",
      endDate: "2025",
      featured: false,
    },
  ],
  certifications: [
    {
      title: "Advanced React: Design System, Design Patterns, Performance",
      issuer: "Udemy",
      issueDate: "Feb 2025",
      credentialID: "UC-bf69980c-2ba5-4b1a-9e41-e70a5f91bf63",
      url: "https://www.udemy.com/certificate/UC-bf69980c-2ba5-4b1a-9e41-e70a5f91bf63/",
    },
    // {
    //   title: "Frontend Web Development with React",
    //   issuer: "Coursera",
    //   issueDate: "Dec 2021",
    //   credentialID: "123456",
    // },
  ],
};
