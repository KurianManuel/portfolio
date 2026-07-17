export const portfolioData = {
  name: "Kurian Manuel",
  role: "Security Researcher",
  location: "Kerala, India",

  hero: {
    eyebrow: "// security researcher",
    firstName: "Kurian",
    lastName: "Manuel",
    roles: ["Network Security", "Digital Forensics", "Secure Systems"],
    ctaPrimary: "view_projects()",
    ctaSecondary: "contact.me",
    accentText: "ECC · VANET · 802.11p",
  },

  about: {
    paragraphs: [
      "I'm a cybersecurity student at APJ Abdul Kalam Technological University, focused on network security, digital forensics, and building secure systems. My work spans both academic research and independent development.",
      "Currently contributing to active research on vehicular network authentication protocols using elliptic curve cryptography — work that involves implementing unpublished academic findings in a real simulation environment.",
      "Outside of research, I build security tooling, participate in CTF competitions, and explore vulnerabilities across web and network attack surfaces."
    ]
  },

  skills: {
    categories: [
      {
        category: "Security",
        items: ["Network Security", "Web Application Security", "Cryptography", "Digital Forensics"]
      },
      {
        category: "Tools",
        items: ["Kali Linux", "Burp Suite", "Wireshark", "Nmap"]
      },
      {
        category: "Programming",
        items: ["Python", "C/C++", "Java", "JavaScript", "Bash", "SQL"]
      },
      {
        category: "Development",
        items: ["React", "Node.js", "Flask", "Linux", "Git"]
      }
    ]
  },

  education: {
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    university: "APJ Abdul Kalam Technological University",
    location: "Kerala, India",
    duration: "2023 – 2027",
    relevantCourses: [
      "Network Security",
      "Ethical Hacking",
      "Cryptography",
      "Digital Forensics",
      "Web Application Security",
      "Operating System Security"
    ]
  },

  projects: [
    {
      id: "vanet",
      title: "VANET Security Simulation Monitor",
      tag: "active research",
      description: "Implementation of an unpublished ECC-based mutual authentication protocol for vehicular ad-hoc networks. Simulates realistic 802.11p DSRC channel conditions — Rayleigh fading, log-normal shadowing, exponential backoff retry — against a three-phase protocol: registration, authentication, and GIFT-algorithm key exchange. Built on ns-3 with a React frontend for real-time metric visualisation.",
      tags: ["ns-3", "ECC", "802.11p", "DSRC", "React", "TypeScript", "VANET"],
      github: "https://github.com/KurianManuel/vanet-sim",
      demo: "https://vanet-sim.vercel.app",
      private: false,
      category: "research"
    },
    {
      id: "travel-router",
      title: "Travel Router Firewall",
      tag: "hardware · security",
      description: "Raspberry Pi-based portable security gateway built on a four-layer defense architecture: network layer (evil twin detection, MAC randomisation), ARP layer (continuous gateway MAC monitoring with automatic lockdown on change detection), VPN layer (WireGuard health monitoring with fail-closed kill switch), and application layer (real-time Flask dashboard with live security alerts). Designed to harden untrusted public Wi-Fi connections with zero user configuration.",
      tags: ["Python", "Linux", "WireGuard", "iptables", "Flask", "Raspberry Pi"],
      github: "https://github.com/KurianManuel/travel-router-project",
      demo: null,
      private: false,
      category: "security"
    },
    {
      id: "metadata-cleaner",
      title: "Metadata Cleaner",
      tag: "web · privacy",
      description: "Fast, client-side web application that strips EXIF data and embedded metadata from images before they leave the browser. Zero server uploads — all processing happens locally, which is the only architecture that actually protects user privacy.",
      tags: ["Python", "Flask", "JavaScript", "Security", "Privacy"],
      github: "https://github.com/KurianManuel/metadata-cleaner",
      demo: "https://metadatacleaner.vercel.app",
      private: false,
      category: "security"
    }
  ],

  experience: [
    {
      title: "Event Coordinator & Media Team Member",
      org: "ASTHRA 10.0 — National Level Techfest",
      duration: "2024",
      points: [
        "Coordinated a technical event at a national-level college techfest.",
        "Created and distributed promotional content across digital platforms.",
        "Worked across organising teams to ensure smooth event execution."
      ]
    },
    {
      title: "Marketing Team Member",
      org: "Computer Society of India (CSI), SJCET",
      duration: "Sept 2024 – Apr 2025",
      points: [
        "Contributed to promotional campaigns for technical events and workshops.",
        "Improved student engagement through targeted outreach initiatives.",
        "Managed social media content and event promotion."
      ]
    }
  ],

  certifications: [
    {
      name: "Java SE Programming",
      issuer: "G-TEC Computer Education",
      year: "2024",
      type: "training"
    },
    {
      name: "Programming in C++",
      issuer: "G-TEC Computer Education",
      year: "2024",
      type: "training"
    },
    {
      name: "Infosys Springboard",
      issuer: "Infosys",
      year: "2024",
      type: "training"
    }
  ],

  contact: {
    description: "Open to internships, research collaborations, and security projects. If you're working on something interesting, reach out.",
    email: "kurianmanuel.2288@gmail.com",
    availability: "Available for internships · Open to research collaboration"
  },

  social: {
    github: "https://github.com/KurianManuel",
    linkedin: "https://www.linkedin.com/in/kurian-manuel/",
    email: "kurianmanuel.2288@gmail.com"
  },

  footer: {
    text: "© 2025 Kurian Manuel"
  }
}
