export const siteConfig = {
  name: "Uday Singh",
  title: "Digital Strategy & Transformation Consultant",
  description: "Portfolio website of Uday Singh showcasing projects, skills, and experience",
  accentColor: "#1d4ed8",
  social: {
    email: "uday@geareab.com",
    linkedin: "https://www.linkedin.com/in/udaysingh314/",
    github: "https://github.com/geareab",
  },
  aboutMe:
    "Digital Strategy & Transformation Consultant at PwC Malta with expertise in ITSM, process optimization, and digital transformation. Passionate about leveraging technology to drive business outcomes and streamline operations.",
  skills: [
    "React / React Native",
    "Node.js / Express",
    "MongoDB",
    "Docker",
    "Redis",
    "Vercel / DigitalOcean",
    "HiveOS",
    "API Development",
    "Go",
    "Assembly",
  ],
  projects: [
    {
      name: "Medicine Search Engine",
      description: `
        Developed a robust medicine search engine deployed on a DigitalOcean Droplet.
        API enables spell-checked searches and provides comprehensive information on over 150k medicines,
        including price, salt content, substitutes, and side effects.
      `,
      link: "https://github.com/udaysingh/Medicine-Search-Engine",
      skills: ["Express", "React", "MongoDB", "Docker", "Redis", "DigitalOcean"],
    },
    {
      name: "Automatic Attendance Bot",
      description: `
        Developed Telegram Bot that allowed students to mark their attendance by interacting with the application.
        Successfully integrated the application with the LMS of the University to mark attendance.
      `,
      link: "https://github.com/udaysingh/Automatic-Attendance-Bot",
      skills: ["NodeJS", "Telegram API"],
    },
    {
      name: "NASA - Image of the Day",
      description: `
        Integrated NASA’s API to display the Image of the Day in a Single Page Application using the MERN stack.
        Implemented OAuth for secure sign-in functionality using Google authentication.
      `,
      link: "https://github.com/udaysingh/NASA-Image-of-the-Day",
      skills: ["React", "Express", "MongoDB", "Google OAuth", "Vercel"],
    },
    {
      name: "Cryptocurrency Mining Setup",
      description: `
        Implemented and managed a server dedicated to continuous Ethereum mining.
        Incorporated remote monitoring and self-diagnosis capabilities for seamless software issue detection and resolution,
        ensuring uninterrupted mining operations.
      `,
      link: "", // optional if not public
      skills: ["HiveOS"],
    },
  ],
  experience: [
    {
      company: "PwC Malta",
      title: "Digital Strategy & Transformation Consultant",
      dateRange: "July 2024 - Present",
      bullets: [
        "Supported project management and business process reengineering for an Oracle ERP Fusion implementation, focusing on finance and procurement workflows to ensure seamless alignment with the new system.",
        "Conducted technical due diligence for an iGaming company, assessing IT infrastructure, cybersecurity posture, and adherence to industry best practices.",
        "Reviewed the Game Development Lifecycle (GDLC) of a major gaming studio, evaluating development processes, delivery timelines, and resource allocation for operational efficiency.",
        "Managed end-to-end delivery and client communication for a fintech IT solution, including project planning, issue resolution, and customer service coordination.",
      ],
    },
  ],
  education: [
    {
      school: "University of Malta",
      degree: "International Transfer Student",
      dateRange: "2023 – 2024",
      details: "Level in EQF: 7",
      description: "Bachelor of Engineering in Computer Science and Masters in Business Administration in Finance and Business Analytics",
    },
    {
      school: "Thapar Institute of Engineering and Technology, India",
      degree: "Bachelor + MBA",
      dateRange: "2019 – 2024",
      details: "Level in EQF: 7",
    },
  ],
  extracurriculars: [
    {
      title: "Speedcubing",
      period: "Dec 2012 - Present",
      description: "Engaged in speedcubing as a hobby, continuously enhancing problem-solving skills, concentration, and dexterity.",
    },
  ],
};
