// Central content store for the site. Edit copy and data here.

export const stats = [
  { value: "1.5+", label: "Years experience" },
  { value: "12+", label: "Projects shipped" },
  { value: "13", label: "Core technologies" },
  { value: "100%", label: "Client satisfaction" },
];

export const quickFacts = [
  { label: "Primary stack", value: "MERN" },
  { label: "Based in", value: "Dhaka, BD" },
  { label: "Working style", value: "Remote" },
  { label: "Response time", value: "< 24h" },
];

export const coreSkills = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "REST APIs",
  "JWT Auth",
  "Firebase",
];

export const milestones = [
  {
    year: "2024",
    title: "Started web development",
    description:
      "Learned HTML, CSS and JavaScript fundamentals, then moved into React.",
  },
  {
    year: "2025",
    title: "Shipped first full MERN platform",
    description:
      "Designed and deployed Blood Donation Hub end-to-end, from schema to UI.",
  },
  {
    year: "2026 — Present",
    title: "Freelance Full-Stack Developer",
    description:
      "Building production web apps for clients — auth systems, dashboards and public-facing platforms.",
    current: true,
  },
];

export const techLayers = [
  {
    index: "01",
    name: "Frontend",
    description: "What the user sees and interacts with",
    color: "blue",
    items: [
      { name: "React", tag: "Re" },
      { name: "Next.js", tag: "▲" },
      { name: "JavaScript", tag: "JS" },
      { name: "Tailwind CSS", tag: "Tw" },
      { name: "HTML5 & CSS3", tag: "H5" },
      { name: "Vite", tag: "Vt" },
    ],
  },
  {
    index: "02",
    name: "Backend",
    description: "Where the logic, rules and auth live",
    color: "purple",
    items: [
      { name: "Node.js", tag: "Nd" },
      { name: "Express", tag: "Ex" },
      { name: "REST APIs", tag: "Rs" },
      { name: "JWT & OAuth", tag: "Jw" },
    ],
  },
  {
    index: "03",
    name: "Database",
    description: "Where the data is stored and modeled",
    color: "green",
    items: [
      { name: "MongoDB", tag: "Mg" },
      { name: "Mongoose", tag: "Ms" },
      { name: "Firebase", tag: "Fb" },
    ],
  },
  {
    index: "04",
    name: "Tools & deployment",
    description: "How it ships and stays reliable",
    color: "amber",
    items: [
      { name: "Git & GitHub", tag: "Gt" },
      { name: "Vercel", tag: "Vc" },
      { name: "Netlify", tag: "Nf" },
      { name: "Postman", tag: "Pm" },
      { name: "Docker", tag: "Dk" },
      { name: "Figma", tag: "Fg" },
    ],
  },
];

export const projects = [
  {
    slug: "ahspdl",
    number: "01",
    category: "Company website",
    title: "AHS Property Developers",
    summary:
      "A builders company website showcasing premier real estate projects across Bangladesh — from Jolshiri to Dhaka.",
    tags: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    color: "blue",
    overview:
      "A comprehensive company website for a builders and property development firm. It showcases their ongoing and completed projects in key locations across Bangladesh including Jolshiri and Dhaka, providing potential buyers with detailed information about available properties.",
    problem:
      "Property development companies need a professional online presence that effectively showcases their portfolio of projects and available properties for sale. The goal was a modern, trustworthy platform that highlights their work and makes it easy for buyers to explore and inquire.",
    role:
      "Designed and built the full-stack company website with Next.js and TypeScript on the frontend, and Node.js with MongoDB on the backend. Implemented project showcase pages, property listings, and contact functionality.",
    features: [
      "Project showcase with detailed information about ongoing and completed developments",
      "Location-based property browsing across Jolshiri, Dhaka and other areas",
      "Responsive design optimized for all devices",
      "Contact and inquiry system for potential buyers",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    year: "2026",
    links: { live: "https://ahspdl.com/", code: "#" },
  },
  {
    slug: "blood-donation-hub",
    number: "02",
    category: "Full-stack platform",
    title: "Blood Donation Hub",
    summary:
      "Connects donors with recipients through registration, search and request management — built for reliability at scale.",
    tags: ["React", "Node.js", "MongoDB"],
    color: "red",
    overview:
      "Blood Donation Hub is a full-stack platform that matches blood donors with people in need. Donors register with their blood group and location, recipients search and send requests, and admins manage the donation pipeline end-to-end.",
    problem:
      "Coordinating donors in an emergency is often informal — phone trees and social media posts. This platform centralizes donor discovery and request tracking, with authentication to keep the donor list trustworthy.",
    role:
      "Built the entire stack solo: schema design, REST API, JWT-based authentication and role handling, and the client interface.",
    features: [
      "Donor registration with blood group, district and availability",
      "Search and filter donors by blood group and location",
      "Request workflow with status tracking (pending, accepted, done)",
      "JWT authentication with donor and admin roles",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT Auth"],
    year: "2025",
    links: { live: "#", code: "#" },
  },
  {
    slug: "local-event",
    number: "03",
    category: "Web application",
    title: "Local Event",
    summary:
      "An event management platform for creating, discovering and RSVP-ing to local events, with real-time status updates.",
    tags: ["React", "Express", "MongoDB"],
    color: "green",
    overview:
      "Local Event lets organizers publish events and lets attendees discover what's happening nearby and RSVP in a couple of clicks. Event status updates in real time as capacity and dates change.",
    problem:
      "Small community events often get lost across scattered social posts. Local Event gives organizers one place to publish details and gives attendees one place to find and track events they care about.",
    role:
      "Built the API and data model, implemented the RSVP and capacity logic, and shipped the responsive React frontend.",
    features: [
      "Create and manage events with date, location and capacity",
      "Browse and filter upcoming events",
      "One-click RSVP with live capacity tracking",
      "Organizer dashboard for managing attendees",
    ],
    stack: ["React", "Express", "MongoDB", "Node.js"],
    year: "2026",
    links: { live: "#", code: "#" },
  },
];

export const testimonials = [
  {
    quote:
      "Fahim rebuilt our booking site from scratch and it just works. Fast, clean, no surprises after launch.",
    name: "Sarah Khan",
    role: "Small business owner",
  },
  {
    quote:
      "He shipped our MVP in three weeks and hasn't broken once. Communication was clear the entire time.",
    name: "Rafiq Ahmed",
    role: "Startup founder",
  },
  {
    quote:
      "Clear communicator, meets deadlines, and the code was cleaner than our next developer thanked us for.",
    name: "Mehrunnesa",
    role: "Product manager",
  },
];

export const services = [
  {
    icon: "server",
    title: "Backend development",
    description:
      "Secure, scalable APIs and services built on Node.js, Express and MongoDB — engineered to hold up under real traffic.",
  },
  {
    icon: "layout",
    title: "Product design & UI",
    description:
      "Responsive, considered interfaces that adapt across devices, built around clarity and usability.",
    highlighted: true,
  },
  {
    icon: "shield",
    title: "Authentication & security",
    description:
      "Secure sign-in systems using Firebase Auth, JWT and OAuth, including social login with Google and GitHub.",
  },
];

export const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand the problem, the users and the constraints before writing a line of code.",
    icon: "search",
    color: "blue",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Wireframe the flow and UI, and get alignment before any heavy building starts.",
    icon: "pen",
    color: "purple",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Ship in small, testable increments — frontend and backend together, not in silos.",
    icon: "code",
    color: "green",
  },
  {
    number: "04",
    title: "Ship & support",
    description:
      "Deploy, monitor, and stay reachable afterward for fixes and the next iteration.",
    icon: "shield",
    color: "amber",
  },
];

export const experience = [
  {
    period: "2026 — Present",
    title: "Freelance Full-Stack Developer",
    subtitle: "Self-employed",
    description:
      "Design and build complete web applications for independent clients — from initial architecture through deployment and handoff.",
    current: true,
  },
  {
    period: "2025 — 2026",
    title: "Junior Web Developer",
    subtitle: "Independent projects",
    description:
      "Built and shipped three full MERN-stack platforms, focusing on authentication, data modeling and responsive UI.",
  },
  {
    period: "2024 — 2025",
    title: "Web Development, self-taught",
    subtitle: "HTML, CSS, JavaScript → React",
    description:
      "Built foundational skills through project-based learning, moving from static sites to full React applications.",
  },
];
