/* ================================================================
   SITE CONFIG
   ----------------------------------------------------------------
   This is the only file you should need to edit to change your
   content. Everything here gets rendered onto the page by script.js.

   - Swap any text, add/remove array items freely.
   - certifications[].image and experience[].logo take an image URL
     or a local path (e.g. "assets/logos/nbu.png") — drop your real
     images into the assets/ folder and point these at them.
   - Colors and fonts live in style.css under :root at the top.
   ================================================================ */

const CONFIG = {

  pageTitle: "Aaron Nombrado — Front-End Developer & IT Support",

  nav: {
    brand: "PORTFOLIO",
    // Kept short on purpose so the pill taskbar stays compact.
    links: [
      { label: "About",    href: "#about" },
      { label: "Skills",   href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Certificates",    href: "#certifications" },
      { label: "Experience",     href: "#experience" },
      { label: "Contact",  href: "#contact" },
    ],
  },

  hero: {
    eyebrow: "Front-End Developer & IT Support Specialist",
    name: "Aaron Nombrado",              // this is what gets typed out
    subtitle: "Computer Science graduate who builds clean front-end interfaces and is just as comfortable troubleshooting a network or a piece of hardware.",
    actions: [
      { label: "View Projects", href: "#projects", style: "primary" },
      { label: "Get in Touch",  href: "#contact",  style: "ghost" },
    ],
  },

  about: {
    label: "About",
    heading: "Hi i'm Aaron !",
    bio: [
      "I’m a Computer Science graduate from National College of Science and Technology (NCST) in Dasmariñas, Cavite. My thesis, Wire Warden, a pixel-based network simulation game, received the Most Outstanding Undergraduate Research award.",
      "My experience spans both web development and IT support, including building and testing web interfaces, setting up and maintaining computer systems, networking, hardware troubleshooting, and technical support.",
      "I’m always looking to build practical solutions, strengthen my skills, and take on new challenges in technology.",
    ],
    location: "Based in General Trias, Cavite, Philippines",
    // Two separate CVs, each tailored to a different role. Put the
    // actual PDF files in assets/ and update the hrefs to match.
    cvOptions: [
      { label: "View CV for IT", href: "img/CV (IT).pdf", downloadName: "Aaron_Nombrado_CV_IT.pdf" },
      { label: "View CV for Dev", href: "img/CV (Soft).pdf", downloadName: "Aaron_Nombrado_CV_FrontEnd.pdf" },
    ],
    photo: "img/img1.jpg",
    photoAlt: "image",
  },

  // Each skill can be a plain string (shows a small colored dot, like
  // before) or an object with a "logo" — an icon/logo image URL or
  // local path (e.g. "assets/icons/html5.svg") — to show that instead.
  // Real tech logos (HTML/CSS/JS/Figma/etc.) are pulled from a public
  // icon CDN below; the more generic hardware skills use placeholder
  // initials — swap any of these for your own icons any time.
  skills: {
    hardware: [
      { name: "IT Support & Troubleshooting", logo: "img/hardware.png" },
      { name: "Computer Networking", logo: "img/network logo.jpg" },
      { name: "Hardware & Software Diagnostics", logo: "img/IT logo.png" },
      { name: "LAN Tester, Cable Crimper, Cable Tester", logo: "img/lan.jpg" },
    ],
    software: [
      { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "UI Design (Figma)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Application Testing & Troubleshooting", logo: "img/supp.jpg" },
    ],
  },

  education: [
    {
      title: "Bachelor of Science In Computer Science",
      meta: "National College of Science and Technology (NCST), Dasmariñas, Cavite · 2025",
      desc: "Thesis: Wire Warden : a pixel-network simulation game. Awarded Most Outstanding Undergraduate Research. Coursework included Computer Networks, IT Support & Troubleshooting, and Front-End Web Development.",
    },
  ],

  // Add up to 4 image URLs (or local paths, e.g. "assets/screenshots/1.png")
  // per project to get a Play Store-style screenshot carousel — it
  // autoplays, and shows arrow + dot controls automatically. Leave
  // "images" out (or empty) on a project to fall back to a plain icon.
  //
  // "stack" is the list of tools/software/languages used — shown as
  // small tags on the card. Replace the placeholders below with what
  // you actually used.
  projects: [
    {
      icon: "◧",
      title: "Wire Warden",
      desc: "Pixel-based network simulation game — thesis project recognized with the Most Outstanding Undergraduate Research award.",
      link: "https://koyww.github.io/wire-warden/Wire%20Wardenn/index.html",
      stack: ["C+", "Unity", "Aseprite"],
      images: [
        "img/game2.jpg",
        "img/game1.jpg",
        "img/game3.jpg",
        "img/game4.jpg",
      ],
    },
    // Add more projects here as you build them:
    // { icon: "◨", title: "Project Name", desc: "One line about it.", link: "https://...",
    //   stack: ["React", "Node.js"],
    //   images: ["assets/screenshots/proj2-1.png", "assets/screenshots/proj2-2.png"] },
  ],

  // Clicking a card opens a popup with image + title + meta + desc.
  // "image" can be a certificate photo/scan, or the issuer's logo.
  certifications: [
    {
      image: "img/award ncst.jpg",
      title: "Best Undergraduate Thesis",
      meta: "National College of Science And Technology · June 2025",
      desc: "Award Of Best In thesis.",
    },
    {
      image: "img/Networking.jpg",
      title: "Networking Basics",
      meta: "Cisco Academy | Networks · Sept 2026",
      desc: "Certificate covering the Networking Basics.",
    },
    {
      image: "img/operating system.jpg",
      title: "Operationg System Basics",
      meta: "Cisco Academy | Operating system · Sept 2026",
      desc: "Certificate covering the Operating System Basics.",
    },
    {
      image: "img/computer hardware.jpg",
      title: "Computer Hardware Basics",
      meta: "Cisco Academy | Computer Hardware · Sept 2026",
      desc: "Certificate covering the Computer Hardware Basics.",
    },
    {
      image: "img/azure fundamentals.jpg",
      title: "Azure Fundamentals",
      meta: "Simplilearn | Microsoft · Sept 2026",
      desc: "Certificate covering the Azure Fundamentals.",
    },
    {
      image: "img/Ai.jpg",
      title: "Introduction to Artificial Intelligence",
      meta: "Simplilearn | SkillUp · July 2026",
      desc: "Certificate covering the fundamentals of artificial intelligence.",
    },
    {
      image: "img/figma.jpg",
      title: "Introduction to Figma",
      meta: "Simplilearn | SkillUp · July 2026",
      desc: "Certificate covering UI design fundamentals using Figma.",
    },
    {
      image: "img/NBU.jpg",
      title: "Certificate of Training",
      meta: "Northern Border University (NBU) · July 2026",
      desc: "Training certificate from the Application Front-End Trainee OJT program.",
    },
    {
      image: "img/nineveh.jpg",
      title: "Certificate of Training",
      meta: "Nineveh Academy · March 2025",
      desc: "Training certificate from the IT Support Intern OJT program.",
    },
    {
      image: "img/CT.jpg",
      title: "ON2 Data Center Webinar",
      meta: "Convergent Technology · January 2025",
      desc: "Webinar certificate on data center operations.",
    },
  ],

  // Same popup pattern as certifications. "logo" is the company logo.
  experience: [
    {
      logo: "img/nbulg.jpg",
      title: "Northern Border University (NBU)",
      meta: "Application Front-End Trainee (OJT) · Nov 2025 – Jul 2026",
      desc: "Assisted in developing and maintaining web application user interfaces. Supported front-end design, testing, and troubleshooting activities, and collaborated with the development team to improve application features and usability. Based in Arar, Kingdom of Saudi Arabia.",
    },
    {
      logo: "img/ninevehlg.jpg",
      title: "Nineveh Academy",
      meta: "IT Support Intern (OJT) · Feb – Mar 2025",
      desc: "Assisted with cable management, hardware setup, and software installation. Provided technical support through troubleshooting and system maintenance, and helped implement monitoring systems to track student activities. Based in General Trias, Cavite.",
    },
  ],

  contact: {
    heading: "Let's talk.",
    text: "Have a role, a project, or just want to talk front-end and networking? Send a message.",
    // The form itself currently just simulates sending — see the
    // note at the top of script.js's contact form section to wire
    // it up to a real service (Formspree, EmailJS, etc.).
  },

  // Each icon key maps to a built-in SVG in script.js's ICONS map
  // (gmail, facebook, instagram, telegram). "color" is the brand
  // color shown on hover — icons are white by default.
  socials: [
    { label: "Gmail",     href: "mailto:aaronnombrado01@gmail.com", icon: "gmail",     color: "#EA4335" },
    { label: "Facebook",  href: "https://www.facebook.com/aaron.nombrado/", icon: "facebook",  color: "#1877F2" },
    { label: "Instagram", href: "https://www.instagram.com/senka.rn?stkn=bXQxcW1qajdud3Vs", icon: "instagram", color: "#E1306C" },
    {label: "LinkedIn", href: "https://www.linkedin.com/in/aaronnbrd", icon: "linkedin", color: "#157cac" }
  ],

  footerNote: "",
};
