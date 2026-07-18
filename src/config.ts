export const siteConfig = {
  name: "Uday Singh",
  title: "Technical & Data Consultant",
  tagline: "Full-stack applications • Data engineering • Cloud solutions",
  description:
    "Portfolio of Uday Singh, a technical and data consultant building full-stack applications, data platforms, and cloud-hosted solutions.",
  accentColor: "#1d4ed8",
  social: {
    email: "uday@geareab.com",
    linkedin: "https://www.linkedin.com/in/geareab/",
    github: "https://github.com/geareab",
  },
  aboutMe:
    "Technical and Data Consultant at PwC Malta with hands-on experience building full-stack applications, REST APIs, database-backed enterprise systems, mobile applications, ETL pipelines, and cloud-hosted solutions. I have worked across financial services, healthcare, fintech, iGaming, and enterprise environments, combining a BE in Computer Science and Engineering with an MBA in Finance and Business Analytics.",
  skills: [
    "TypeScript",
    "JavaScript",
    "Python",
    "SQL",
    "Dart",
    "Node.js",
    "Express.js",
    "Flask",
    "REST APIs",
    "Prisma ORM",
    "Zod",
    "Socket.IO",
    "React",
    "Vite",
    "Flutter",
    "Android Development",
    "Bluetooth Low Energy",
    "Android Health Connect",
    "PostgreSQL",
    "Microsoft SQL Server",
    "Oracle SQL",
    "Apache Airflow",
    "ETL Pipelines",
    "Microsoft Azure",
    "Docker",
    "GitHub Actions",
    "Power BI",
    "Oracle EBS",
    "Oracle Fusion",
    "ERPNext",
  ],
  projects: [
    {
      name: "Datta: Cashless Donation Platform",
      dateRange: "2026",
      description:
        "Architected and developed a full-stack donation platform with a Flutter Android donor app, React administration dashboard, Node.js and Express API, and PostgreSQL database. Designed payment, reconciliation, audit, and real-time event workflows with role-based access control, validation, idempotency, Docker-based deployment, and Mastercard Donate sandbox support.",
      link: "https://github.com/geareab/codesprint-main",
      skills: [
        "Flutter",
        "React",
        "Node.js",
        "Express",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "Docker",
      ],
    },
    {
      name: "ScaleSync: Privacy-First Bluetooth Health Application",
      dateRange: "2026 – Present",
      description:
        "Developing a privacy-first Android application that captures weight measurements from compatible Bluetooth Low Energy scales and synchronises validated readings with Android Health Connect. Built device discovery, scale parsing, centralised validation policies, user-controlled health permissions, and automated unit, widget, integration, and release workflows.",
      link: "",
      skills: [
        "Flutter",
        "Dart",
        "Bluetooth Low Energy",
        "Android Health Connect",
        "GitHub Actions",
      ],
    },
    {
      name: "Enterprise Platform for Pharmacy Operations",
      dateRange: "July 2022 – July 2025",
      description:
        "Designed and deployed a cloud-hosted enterprise platform for pharmacy inventory, pricing, reporting, and operational workflows. Developed Python ETL and automation pipelines, integrated backend APIs and databases, configured ERPNext modules and permissions, and deployed containerised services on Microsoft Azure.",
      link: "",
      skills: [
        "Azure",
        "ERPNext",
        "Airflow",
        "Flask",
        "React",
        "Docker",
      ],
    },
  ],
  experience: [
    {
      company: "PwC Malta",
      title: "Digital Consultant – Data Analytics and Technology Transformation",
      dateRange: "July 2024 – Present",
      bullets: [
        "Developed SQL-based validation and reconciliation workflows for an Oracle EBS-to-Fusion transformation, verifying migration accuracy across more than 50,000 finance and procurement records.",
        "Performed data mapping, cleansing, transformation, and validation across enterprise datasets, supporting system testing, migration governance, defect investigation, and deployment readiness.",
        "Built analytical models and executive dashboards with Power BI, Excel, and enterprise data for KPI monitoring, financial reporting, and transformation decision-making.",
        "Analysed delivery workflows, resource allocation, dependencies, and production KPIs across more than 100 game-development processes to identify bottlenecks and optimisation opportunities.",
        "Supported an EU CESOP-compliant regulatory reporting solution by interpreting reporting requirements, validating transactional data structures, and coordinating business and engineering testing.",
        "Translated business and regulatory requirements into process models, data requirements, Jira stories, acceptance criteria, technical documentation, and workflow diagrams.",
        "Supported technology due diligence for an iGaming organisation, assessing cloud infrastructure, cybersecurity controls, system architecture, governance maturity, and operational technology risks.",
      ],
    },
    {
      company: "University of Malta",
      title: "Software Development Research Intern",
      dateRange: "February 2024 – June 2024",
      bullets: [
        "Contributed to the end-to-end development of a Flutter and Firebase mobile health application for Inflammatory Bowel Disease management, including profiles, symptom and medication tracking, persistence, and secure patient–clinician messaging.",
        "Collaborated with research and healthcare stakeholders to translate clinical requirements into application features and user-centred mobile workflows.",
      ],
    },
  ],
  education: [
    {
      school: "Thapar Institute of Engineering and Technology",
      location: "Patiala, India",
      degree: "MBA, Finance and Business Analytics",
      dateRange: "July 2023 – June 2024",
      achievements: [
        "GPA: 8.70 / 10",
        "Coursework: Financial Markets, Business Analytics, Corporate Finance, Investment Analysis, and Financial Modeling.",
      ],
    },
    {
      school: "Thapar Institute of Engineering and Technology",
      location: "Patiala, India",
      degree: "BE, Computer Science and Engineering",
      dateRange: "July 2019 – June 2023",
      achievements: [
        "GPA: 9.00 / 10",
        "Coursework: Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Software Engineering, Machine Learning, Data Analytics, and Cloud Computing.",
      ],
    },
    {
      school: "University of Malta",
      location: "Malta",
      degree: "International Transfer Student (EQF Level 7)",
      dateRange: "2023 – 2024",
      achievements: [],
    },
  ],
  extracurriculars: [
    {
      title: "Competitive Programming",
      period: "2019 – Present",
      description:
        "Regularly solve algorithmic problems on LeetCode and Codeforces, with an emphasis on data structures, graph algorithms, dynamic programming, complexity analysis, and structured problem solving.",
    },
    {
      title: "Speedcubing",
      period: "December 2012 – Present",
      description:
        "Participated in regional and international competitions, developing rapid pattern recognition, algorithmic thinking, consistency, and composure under time pressure.",
    },
  ],
};
