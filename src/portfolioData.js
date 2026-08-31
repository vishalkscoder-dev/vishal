export const portfolioData = {
  personal: {
    name: "K.S Vishal",
    title: "Full Stack Developer & Software Engineer",
    tagline: "I build accessible, high-performance web applications and scalable digital solutions.",
    bioShort: "I'm a developer passionate about crafting robust full-stack architectures, seamless user interfaces, and solving real-world challenges through clean, maintainable code.",
    status: {
      available: true,
      text: "Available for full-time roles & high-impact projects"
    },
    location: "India",
    email: "vishalks.software@gmail.com",
    resumeUrl: "#resume"
  },

  socials: [
    {
      name: "GitHub",
      url: "https://github.com/vishalkscoder-dev/",
      icon: "GithubIcon",
      label: "GitHub Profile"
    },
    {
      name: "LinkedIn",
      url: "www.linkedin.com/in/vishalks2006",
      icon: "LinkedinIcon",
      label: "LinkedIn Profile"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/MkplJtYBNS/",
      icon: "CodeIcon",
      label: "Coding Profile"
    },
    {
      name: "Email",
      url: "mailto:vishalks.software@gmail.com",
      icon: "MailIcon",
      label: "Send direct email"
    }
  ],

  navItems: [
    { id: "about", label: "ABOUT", number: "01" },
    // { id: "experience", label: "EXPERIENCE", number: "02" },
    { id: "projects", label: "PROJECTS", number: "02" },
    { id: "skills", label: "SKILLS", number: "03" },
    { id: "certificates", label: "CERTIFICATES", number: "04" },
    { id: "contact", label: "CONTACT", number: "05" }
  ],

  about: {
    paragraphs: [
      "About Me I am a passionate Computer Science Engineering student and an aspiring Full Stack Developer.",
      "I enjoy building practical and user-friendly web applications using Python, Django, MySQL, HTML, CSS, and JavaScript. I have worked on projects such as a Career Portal,",
      "where I learned to design applications, develop backend functionality, manage databases, and create responsive user interfaces.",
      "I am also interested in problem solving and Data Structures & Algorithms, and I continuously improve my coding skills by practicing programming problems.My goal is to become a skilled software developer and build reliable, scalable, and meaningful products that solve real-world problems."

    ],
    highlights: [
      "Full Stack Developer",
      "Python Developer",
      "Problem Solver",
      "Project Builder",
      "Continuous Learner",
      "Aspiring Software Developer"
    ],
  },

  // experiences: [
  //   {
  //     period: "2024 — PRESENT",
  //     role: "Full Stack Software Engineer",
  //     company: "Tech Systems & Digital Solutions",
  //     companyUrl: "https://github.com",
  //     description: "Architect and develop modern web applications end-to-end. Built reusable frontend component libraries, integrated real-time microservices, and collaborated closely with cross-functional teams to deliver secure, performant software solutions.",
  //     achievements: [
  //       "Engineered responsive, accessible UI modules cutting client load times by 35%",
  //       "Designed RESTful & GraphQL endpoints serving thousands of active daily sessions",
  //       "Streamlined CI/CD automation pipelines ensuring zero-downtime deployments"
  //     ],
  //     skills: ["React", "Node.js", "TypeScript", "Express", "PostgreSQL", "Tailwind CSS", "Docker"]
  //   },
  //   {
  //     period: "2023 — 2024",
  //     role: "Frontend Developer & UI Engineer",
  //     company: "Innovate Labs",
  //     companyUrl: "https://github.com",
  //     description: "Spearheaded frontend architecture for enterprise dashboard analytics tools. Collaborated directly with designers and product managers to translate complex workflows into fluid, engaging, and mobile-responsive web interfaces.",
  //     achievements: [
  //       "Implemented state management systems and optimistic UI updates for instant interactions",
  //       "Refactored legacy client-side bundles, trimming bundle size by 40%",
  //       "Championed WCAG 2.1 accessibility guidelines across all core user journeys"
  //     ],
  //     skills: ["JavaScript (ES6+)", "React", "Next.js", "Redux", "REST APIs", "CSS Modules", "Jest"]
  //   },
  //   {
  //     period: "2022 — 2023",
  //     role: "Software Development Intern",
  //     company: "CloudCore Technologies",
  //     companyUrl: "https://github.com",
  //     description: "Assisted in building internal developer tools, managing relational database schemas, and writing unit/integration test suites to ensure high code quality and test coverage.",
  //     achievements: [
  //       "Built automated data export scripts reducing manual reporting overhead by 10+ hours/week",
  //       "Implemented JWT authentication and role-based access control (RBAC)",
  //       "Participated in agile sprints, daily standups, and rigorous peer code reviews"
  //     ],
  //     skills: ["Node.js", "MongoDB", "SQL", "Git", "REST APIs", "Express.js", "Postman"]
  //   }
  // ],

  projects: [
    {
      title: "Web-Based Career Portal for Efficient Job Search and Recruitment",
      description: ["A full-stack Career Portal built using Django, MySQL, HTML, CSS, and JavaScript to connect students with companies and job opportunities.",
        "Implemented role-based access for Students, Companies, and Admin, including job posting, applications, shortlisting, rejection, notifications, and company approval workflows.",
        "Developed dashboards with job and application analytics, resume downloads, recent activities, and application tracking for an improved recruitment experience."
      ],
      highlights: [
        "Real-time WebSocket notifications & live collaboration rooms",
        "Interactive analytics charts rendered with high-performance canvas",
        "Integrated OAuth2 GitHub / GitLab single sign-on"
      ],
      skills: ["Django", "Python", "HTML", "CSS", "Bootstrap", "JavaScript", "MySQL"],
      githubUrl: "https://github.com/vishalkscoder-dev",
      featured: true
    },
    // {
    //   title: "OmniCart — Modern Cloud E-Commerce Engine",
    //   description: "An ultra-fast, headless e-commerce platform built for high-conversion retail. Features lightning-fast fuzzy product search, dynamic filtering, Stripe checkout integration, and an admin inventory management panel.",
    //   highlights: [
    //     "Optimized server-rendered product catalog with sub-100ms response times",
    //     "Stripe payment gateway integration with webhooks for automated order dispatch",
    //     "Custom caching layer using Redis for instant catalog browsing"
    //   ],
    //   skills: ["Next.js", "React", "Node.js", "MongoDB", "Redis", "Stripe API"],
    //   githubUrl: "https://github.com",
    //   liveUrl: "https://github.com",
    //   featured: true
    // },
    // {
    //   title: "Synthetix — AI Prompt & Code Playground",
    //   description: "An intelligent interactive coding playground featuring code generation, multi-language syntax formatting, instant code execution sandbox, and context-aware debugging tips.",
    //   highlights: [
    //     "Streaming AI token generation with interactive code block rendering",
    //     "Isolated code runner sandbox supporting JavaScript, Python, and SQL",
    //     "Custom dark/light theme switching with zero layout shift"
    //   ],
    //   skills: ["React", "TypeScript", "Express.js", "OpenAI API", "Monaco Editor", "Tailwind CSS"],
    //   githubUrl: "https://github.com",
    //   liveUrl: "https://github.com",
    //   featured: true
    // },
    // {
    //   title: "Nexus Stream — Real-Time Media & Chat App",
    //   description: "A low-latency audio/video and chat application with end-to-end encrypted messaging, peer-to-peer room connections, and adaptive bitrate streaming.",
    //   highlights: [
    //     "WebRTC peer-to-peer audio/video streaming with screen sharing",
    //     "Persistent message history with offline caching and sync",
    //     "Responsive multi-device layout optimized for mobile and desktop"
    //   ],
    //   skills: ["React", "WebRTC", "Node.js", "Socket.io", "PostgreSQL", "Tailwind CSS"],
    //   githubUrl: "https://github.com",
    //   liveUrl: "https://github.com",
    //   featured: false
    // }
  ],

  skillsData: [
    {
      category: "Python full stack development",
      items: [
        { name: "Django", level: "Advanced" },
        { name: "Python", level: "Advanced" },
        { name: "JavaScript", level: "Proficient" },
        { name: "HTML", level: "Advanced" },
        { name: "CSS", level: "Proficient" },
        { name: "MySQL", level: "Proficient" },
      ]
    },
    {
      category: "Frontend Development Library",
      items: [
        { name: "React", level: "Advanced" }
      ]
    },
  ],

  certificates: [
    {
      id: 1,
      title: 'Python for Everybody Specialization',
      organization: 'University of Michigan',
      date: '2026',
      description: 'Completed a guided learning track covering Python programming fundamentals, data structures, web scraping, and introductory data analysis concepts.',
      credentialId: 'UM-PY-2026-041',
      image: '/certificates/certificate-1.jpeg',
      link: '/certificates/certificate-1.jpeg'
    },
    {
      id: 2,
      title: 'Full Stack Web Development',
      organization: 'Coursera / Coding Platform',
      date: '2025',
      description: 'Developed a strong foundation in front-end and back-end technologies with a focus on responsive interfaces, RESTful APIs, and modern development workflows.',
      credentialId: 'FSWD-2025-118',
      image: '/certificates/certificate-2.png',
      link: '/certificates/certificate-2.png'
    },
    {
      id: 3,
      title: 'Problem Solving with Data Structures',
      organization: 'Skillrack / Coding Academy',
      date: '2024',
      description: 'Strengthened algorithmic thinking, optimization techniques, and problem-solving strategies using efficient data structures and coding patterns.',
      credentialId: 'DSA-2024-203',
      image: '/certificates/certificate3.jpeg',
      link: '/certificates/certificate3.jpeg'
    }
  ],

  contact: {
    heading: "Get In Touch",
    subheading: "What's Next?",
    pitch: "I'm currently looking for new opportunities and high-impact engineering roles. Whether you have an open position, an exciting project idea, a technical question, or just want to say hi, my inbox is always open!",
    directEmail: "vishalks.software@gmail.com",
    location: "Nagercoil, Tamil Nadu, India.",
    socialLinks: [
      { name: "LinkedIn", url: "www.linkedin.com/in/vishalks2006", handle: "in/vishalks2006" },
      { name: "GitHub", url: "https://github.com/vishalkscoder-dev", handle: "github.com/vishalkscoder-dev" },
    ],
    availabilityNote: "Currently responding to new messages within 24 hours."
  }
}
