export const siteConfig = {
  name: "Uday Singh",
  title: "Digital Strategy & Transformation Consultant",
  description:
    "Portfolio website of Uday Singh showcasing projects, skills, and experience",
  accentColor: "#1d4ed8",
  social: {
    email: "uday@geareab.com",
    linkedin: "https://www.linkedin.com/in/udaysingh314/",
    github: "https://github.com/geareab",
  },
  aboutMe:
    "Digital Strategy & Transformation Consultant at PwC Malta with expertise in ITSM, process optimization, and digital transformation. Passionate about leveraging technology to drive business outcomes and streamline operations.",
  skills: [
    "Oracle EBS",
    "Oracle Fusion",
    "ERPNext",
    "Python",
    "SQL",
    "JavaScript",
    "Alteryx ETL",
    "Docker",
    "Airflow",
    "Azure",
    "Flask",
    "React",
    "PostgreSQL",
    "Oracle SQL",
    "Microsoft SQL Server",
    "GitHub Actions",
  ],
  projects: [
    {
      name: "Enterprise Platform for Pharmacy Operations",
      description: `
        Designed and deployed a cloud-based enterprise platform supporting pharmacy operations, integrating ERP, workflow automation, and operational reporting capabilities within a containerised Azure environment.
        Configured and customised ERPNext workflows, automation rules, and scheduled integrations to streamline operational and inventory management processes.
        Developed Airflow-based data pipelines for inventory synchronisation, pricing updates, and operational reporting, applying enterprise-grade ETL and orchestration practices.
      `,
      link: "",
      skills: ["Azure", "ERPNext", "Airflow", "Flask", "React", "Docker"],
    },
  ],
  experience: [
    {
      company: "PwC Malta",
      title: "Digital Consultant – Technology Strategy & Transformation",
      dateRange: "July 2024 – Present",
      bullets: [
        "Advised senior stakeholders on technology strategy and product governance for a fintech platform, supporting roadmap prioritisation, SDLC governance, and alignment between technology investments and commercial objectives.",
        "Conducted a strategic assessment of the Game Development Lifecycle (GDLC) for a major gaming studio, evaluating delivery processes, resource allocation, and operational bottlenecks.",
        "Supported IT due diligence for an iGaming organisation by assessing infrastructure maturity, cybersecurity posture, operational risks, and governance processes.",
        "Advised finance and procurement stakeholders during an Oracle EBS-to-Fusion ERP transformation, supporting migration governance across data mapping, validation, reconciliation, and process transition activities.",
        "Supported an Oracle Fusion ERP implementation through business process analysis, stakeholder workshops, and operating model improvements across finance and procurement functions.",
        "Led coordination and stakeholder management for an EU CESOP-compliant reporting solution, translating operational requirements into delivery plans and aligning client, development, and QA teams throughout rollout activities.",
      ],
    },
    {
      company: "University of Malta",
      title: "Research Intern",
      dateRange: "February 2024 – June 2024",
      bullets: [
        "Contributed to end-to-end development of a Flutter/Firebase mobile health application for Inflammatory Bowel Disease (IBD) management.",
        "Implemented patient profile management, symptom logging, medication tracking, and secure real-time patient–clinician messaging.",
      ],
    },
  ],
  education: [
    {
      school: "Thapar Institute of Engineering and Technology, India",
      degree: "BE Computer Engineering & MBA Finance and Business Analytics",
      dateRange: "July 2019 – June 2024",
      details: "GPA: BE – 9.00/10, MBA – 8.70/10",
      description:
        "Relevant coursework: Data Structures & Algorithms, Database Management Systems, Machine Learning, Financial Modelling, Derivatives Valuation.",
    },
    {
      school: "University of Malta",
      degree: "International Transfer Student (EQF Level 7)",
      dateRange: "2023 – 2024",
      details: "Malta",
      description:
        "Study program in Computer Engineering and Business Analytics through an international transfer arrangement.",
    },
  ],
  extracurriculars: [
    {
      title: "Speedcubing",
      period: "Dec. 2012 – Present",
      description:
        "Competed in regional and international competitions, developing structured problem-solving, pattern recognition, and composure under pressure.",
    },
    {
      title: "Competitive Programming",
      period: "2019 – Present",
      description:
        "Actively solving algorithmic challenges on LeetCode and Codeforces, focusing on data structures, graph algorithms, and dynamic programming.",
    },
  ],
};
