import type { StaticImageData } from "next/image";

import linkdErp from "@/public/projects/linkd-erp.webp";
import dtaErp from "@/public/projects/dta-erp.webp";
import sparshGpt from "@/public/projects/sparsh-gpt.webp";
import grabspaceCrm from "@/public/projects/grabspace-crm.webp";
import finactive from "@/public/projects/finactive.webp";
import davaGwalior from "@/public/projects/dava-gwalior.webp";
import nivishka from "@/public/projects/nivishka.webp";
import ssbookClub from "@/public/projects/ssbook-club.webp";

/**
 * Single source of truth for portfolio content.
 * Every fact below comes from the resume (public/Abhishek_kushwah_CV.pdf)
 * or the previous version of this site — keep it that way.
 */

export const profile = {
  name: "Abhishek Kushwah",
  initials: "AK",
  role: "MERN Stack Developer",
  // Aug 2022 – Feb 2023 internship + Aug 2024 – present full-time.
  experience: "3 years",
  experienceShort: "3 yrs",
  location: "Bhopal, India",
  locationFull: "Bhopal, Madhya Pradesh, India",
  email: "kushwahabhishek42@gmail.com",
  phone: "+91 77730 91428",
  phoneHref: "tel:+917773091428",
  resume: "/Abhishek_kushwah_CV.pdf",
  resumeFileName: "Abhishek_Kushwah_CV.pdf",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://abhishek-portfolio.vercel.app",
  description:
    "MERN Stack Developer with 3 years of experience building scalable web applications, ERP systems, dashboards and business workflows with React, Node.js, Express, MongoDB and TypeScript.",
};

export const socials = {
  github: "https://github.com/abhishek42kushwah",
  githubHandle: "abhishek42kushwah",
  linkedin: "https://www.linkedin.com/in/developer-abhishek-kushwah/",
  linkedinHandle: "developer-abhishek-kushwah",
  whatsapp: "https://wa.me/917773091428",
  email: `mailto:${profile.email}`,
};

export const navLinks = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export const stats = [
  { value: profile.experienceShort, label: "Professional experience" },
  { value: "12", label: "Live projects shipped" },
  { value: "MERN", label: "Primary stack, with TypeScript" },
  { value: "ERP · CRM · LMS", label: "Business domains" },
];

export const quickFacts = [
  { label: "Location", value: profile.location },
  { label: "Experience", value: profile.experience },
  { label: "Currently", value: "Full Stack Developer, D Table Analytics" },
  { label: "Primary stack", value: "MERN + TypeScript" },
  { label: "Focus", value: "Full stack · ERP & business apps" },
  { label: "Education", value: "B.E. Computer Science (Hons.), 2024" },
];

/* ------------------------------------------------------------------ */
/* Tech stack                                                          */
/* ------------------------------------------------------------------ */

export type Tech = { name: string; note?: string };
export type TechGroup = { group: string; items: Tech[] };

export const techStack: TechGroup[] = [
  {
    group: "Frontend",
    items: [
      { name: "React", note: "Primary UI library across every project here" },
      { name: "TypeScript", note: "Daily driver at D Table Analytics and EcoDigitas" },
      { name: "JavaScript" },
      { name: "Next.js", note: "This portfolio is built with Next.js" },
      { name: "Redux Toolkit", note: "State management in Linkd ERP, Sparsh GPT and DTA ERP" },
      { name: "TanStack Query", note: "Server-state caching in Linkd ERP" },
      { name: "TanStack Table", note: "Data grids with filtering and sorting in Grabspace CRM" },
      { name: "React Router", note: "Protected, role-based routing" },
      { name: "Tailwind CSS" },
      { name: "Material UI" },
      { name: "Bootstrap" },
      { name: "Formik + Yup", note: "Validation for form-heavy modules at EcoDigitas" },
      { name: "HTML" },
      { name: "CSS" },
    ],
  },
  {
    group: "Backend",
    items: [
      { name: "Node.js" },
      { name: "Express.js", note: "REST APIs, including Express 5 in Linkd ERP" },
      { name: "NestJS" },
      { name: "REST APIs" },
      { name: "JWT", note: "Authentication in every multi-role app I've built" },
      { name: "OAuth" },
      { name: "RBAC", note: "Per-module, per-action permission engine in Linkd ERP" },
      { name: "WebSocket" },
    ],
  },
  {
    group: "Database",
    items: [
      { name: "MongoDB", note: "Query optimisation for faster data retrieval" },
      { name: "Mongoose" },
      { name: "PostgreSQL", note: "Used in Linkd ERP and DTA ERP" },
      { name: "Sequelize" },
      { name: "MySQL" },
      { name: "Prisma" },
      { name: "Redis" },
    ],
  },
  {
    group: "Tools",
    items: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Postman" },
      { name: "Docker" },
      { name: "Vercel" },
      { name: "Vite" },
      { name: "Axios" },
      { name: "SheetJS", note: "Excel import/export in CRM and ERP modules" },
      { name: "AWS S3", note: "File storage in Linkd ERP" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  image: StaticImageData;
  imageAlt: string;
  link: string;
  role?: string;
  stack?: string[];
  overview: string;
  features: string[];
  implementation?: string[];
  challenges?: { challenge: string; approach: string }[];
};

export const projects: Project[] = [
  {
    slug: "linkd-erp",
    title: "Linkd ERP",
    category: "Manufacturing ERP",
    summary:
      "Full-stack, role-based manufacturing ERP that brings inventory, procurement, production, orders, finance/GST and HR/payroll for a textile printing business into one platform.",
    image: linkdErp,
    imageAlt: "Linkd ERP dashboard showing production and inventory metrics",
    link: "https://erp.linkdprints.com",
    role: "Full Stack Developer",
    stack: [
      "React 18",
      "Vite",
      "Redux Toolkit",
      "TanStack Query",
      "Tailwind CSS",
      "Node.js",
      "Express 5",
      "PostgreSQL",
      "Sequelize",
      "JWT",
      "AWS S3",
      "PDFKit",
    ],
    overview:
      "A manufacturing ERP for a textile and sublimation-printing business, digitising end-to-end operations — inventory, procurement, production, orders, finance/GST and HR/payroll — in a single role-based platform.",
    features: [
      "Custom RBAC permission engine with per-module and per-action guards, a security-matrix UI and an audit-log trail",
      "Inventory management with separate inward, outward and order flows, a stock ledger and lot tracking",
      "QR/barcode-driven warehouse operations using camera-based scanning",
      "Live production and capacity dashboards",
      "Indian GST-compliant finance reporting and PDF report generation",
      "HR and payroll alongside operations in the same platform",
    ],
    implementation: [
      "Modular, feature-based frontend in React 18 + Vite with 60+ lazy-loaded route modules",
      "Redux Toolkit for client state and TanStack Query for server state",
      "Node.js / Express 5 API on PostgreSQL via Sequelize, secured with JWT",
      "AWS S3 for file storage and PDFKit for generated reports",
    ],
    challenges: [
      {
        challenge: "Keeping a 60+ module application fast to load",
        approach: "Feature-based structure with lazy-loaded route modules so users only download what they open.",
      },
      {
        challenge: "Fine-grained access across many departments and actions",
        approach: "A custom permission engine with per-module/per-action guards, an admin security matrix and an audit trail.",
      },
      {
        challenge: "Accurate stock across inward and outward movements",
        approach: "Separate inward/outward/order flows backed by a stock ledger, lot tracking and barcode scanning.",
      },
    ],
  },
  {
    slug: "dta-erp",
    title: "DTA ERP",
    category: "Business ERP · FMS",
    summary:
      "ERP with automated checklist management for recurring tasks and a multi-stage help-ticket (FMS) workflow with automatic turn-around-time tracking.",
    image: dtaErp,
    imageAlt: "DTA ERP dashboard with task and ticket overview",
    link: "https://erp.dtableanalytics.com",
    role: "Full Stack Developer",
    stack: ["React 19", "Redux Toolkit", "Node.js", "Express", "PostgreSQL", "JWT"],
    overview:
      "An Enterprise Resource Planning system built with React 19, Node.js/Express and PostgreSQL, focused on turning recurring operational work and internal support requests into tracked, automated workflows.",
    features: [
      "Automated checklist management for recurring tasks",
      "Multi-stage help-ticket workflow (FMS) moving requests through defined stages",
      "Automated Turn-Around Time (TAT) tracking on every ticket",
      "JWT-secured authentication",
    ],
    implementation: [
      "React 19 frontend with Redux Toolkit for application state",
      "Node.js / Express REST API backed by PostgreSQL",
      "JWT-based authentication across modules",
    ],
    challenges: [
      {
        challenge: "Recurring tasks and support requests tracked manually",
        approach: "Checklist automation for recurring work and a staged ticket workflow with automatic TAT tracking.",
      },
    ],
  },
  {
    slug: "sparsh-gpt",
    title: "Sparsh GPT",
    category: "AI Support Engine + LMS",
    summary:
      "Frontend for a multi-tenant AI platform combining a contextual support chatbot with a learning management system, with four-tier role-based access.",
    image: sparshGpt,
    imageAlt: "Sparsh GPT SuperAdmin dashboard with platform growth chart",
    link: "https://erp.theknowcart.com",
    role: "Frontend Developer",
    stack: ["React 19", "Redux Toolkit", "React Router", "Tailwind CSS", "Vite", "Axios", "Vercel"],
    overview:
      "A multi-tenant, AI-powered platform that pairs a Support Engine (contextual AI chatbot) with a Learning Management System. I built the frontend.",
    features: [
      "Real-time AI chat interface with markdown rendering",
      "Four-tier access control — SuperAdmin, Admin, Client Admin and Client User — via protected routes and role-based dashboards",
      "LMS with course catalogues, video/PDF content players, and MCQ and descriptive assessments",
      "Project management, batch assignment, company onboarding and team management workflows",
      "Reusable UI components: sidebar navigation, modals and notification panels",
    ],
    implementation: [
      "React 19 with Redux Toolkit and React Router; styled with Tailwind CSS",
      "REST API integration through Axios",
      "Built with Vite and deployed on Vercel",
    ],
    challenges: [
      {
        challenge: "Four user tiers seeing different data and actions",
        approach: "Protected routes and role-based dashboards per tier, sharing one reusable component set.",
      },
    ],
  },
  {
    slug: "grabspace-crm",
    title: "Grabspace CRM",
    category: "Lead Management CRM",
    summary:
      "Lead-management CRM for leads, clients and space inquiries with advanced data tables, role-based access, Excel import and OCR invoice auto-fill.",
    image: grabspaceCrm,
    imageAlt: "Grabspace CRM dashboard with lead statistics",
    link: "https://crm.grabspace.in",
    role: "Frontend Developer",
    stack: ["React", "TypeScript", "React-Bootstrap", "TanStack Table", "Context API", "SheetJS"],
    overview:
      "A responsive CRM for managing leads, clients and space inquiries, built with React, TypeScript and TanStack Table.",
    features: [
      "Advanced filtering, sorting, pagination and search across lead tables",
      "Role-based access and protected routes using Context API, with user-specific dashboard views",
      "Secure authentication with redirection to the right dashboard after login",
      "Excel import with SheetJS",
      "OCR-based invoice auto-fill to speed up data entry",
    ],
    implementation: [
      "React + TypeScript with TanStack Table for data-heavy views",
      "Context API for auth state and role-based route guards",
      "React-Bootstrap UI components",
    ],
    challenges: [
      {
        challenge: "Slow, error-prone manual data entry",
        approach: "Bulk Excel import with SheetJS and OCR-based invoice auto-fill.",
      },
    ],
  },
  {
    slug: "finactive",
    title: "FinActive",
    category: "Investment Tracking",
    summary:
      "Platform to track and manage all financial investments in one place, with portfolio tracking and visual insights.",
    image: finactive,
    imageAlt: "FinActive dashboard showing assets, liabilities and growth chart",
    link: "https://finactive.net",
    role: "Developer",
    overview:
      "finactive.net brings a user's financial investments into one place so they can track and manage them from a single dashboard.",
    features: [
      "Real-time portfolio tracking",
      "Visual insights into investments",
      "Clean, performance-focused UI for monitoring investments",
    ],
  },
  {
    slug: "dava-gwalior",
    title: "Dava Gwalior",
    category: "E-commerce Admin",
    summary:
      "Admin dashboard for an e-commerce business to track sales, revenue, orders and product analytics.",
    image: davaGwalior,
    imageAlt: "Dava Gwalior admin dashboard with sales charts",
    link: "https://admin.davagwalior.com",
    role: "Frontend Developer",
    overview:
      "An admin e-commerce dashboard for tracking sales, revenue, orders and product analytics, with access limited to authorised admins.",
    features: [
      "Charts, tables and KPI cards for sales and revenue",
      "Reusable UI components",
      "API-integrated dynamic data with filters and pagination",
      "Responsive layout with role-based access for admins",
    ],
  },
  {
    slug: "nivishka",
    title: "Nivishka",
    category: "E-commerce",
    summary:
      "E-commerce storefront for ethnic wear with product galleries, checkout and a responsive design.",
    image: nivishka,
    imageAlt: "Nivishka website shown on a laptop",
    link: "https://nivishka.com/",
    role: "Design & Development",
    overview:
      "nivishka.com is an e-commerce platform for ethnic wear. I designed and developed the storefront.",
    features: [
      "Product galleries and a seamless shopping flow",
      "Secure checkout",
      "Responsive design with a focus on performance and accessibility",
    ],
  },
  {
    slug: "ssbook-club",
    title: "SSBook Club",
    category: "Digital Products",
    summary:
      "Platform to showcase and sell digital products, with product listings, descriptions and purchase options.",
    image: ssbookClub,
    imageAlt: "SSBook Club website shown on a laptop",
    link: "https://my-digital-products-showcase.vercel.app",
    overview:
      "An online platform for creators to showcase and sell digital products.",
    features: [
      "Product listings with descriptions and purchase options",
      "Modern design with straightforward navigation",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

export const experience = [
  {
    company: "D Table Analytics",
    role: "Full Stack Developer",
    period: "Jan 2026 — Present",
    location: "Bhopal",
    type: "Full-time",
    current: true,
    points: [
      "Develop and maintain enterprise ERP applications for manufacturing operations — procurement, inventory, production, quality control, dispatch and finance workflows.",
      "Build data-heavy interfaces in React, TypeScript and Redux over REST APIs: dynamic tables, filtering, search, pagination, reporting dashboards and Excel import/export.",
      "Implement role-based dashboards, protected routes and JWT authentication for multi-user workflows across Admin, Production, QC, Sales and Inventory teams.",
      "Deliver purchase-workflow modules — purchase orders, vendor follow-ups, delivery verification and payment tracking — that replace manual follow-up.",
      "Build order-to-dispatch flows covering order entry, production entry and material tracking.",
      "Built the internal ERP's checklist automation and multi-stage help-ticket (FMS) workflow with automated TAT tracking.",
    ],
    stack: ["React", "TypeScript", "Redux", "Node.js", "Express", "PostgreSQL", "MongoDB", "JWT", "Tailwind CSS", "Material UI", "Chart.js"],
  },
  {
    company: "EcoDigitas",
    role: "Frontend Developer",
    period: "Aug 2024 — Jan 2026",
    location: "Hybrid",
    type: "Full-time",
    points: [
      "Built complex React + TypeScript business applications with dynamic filtering, modals, pagination, responsive layouts and a reusable component architecture.",
      "Implemented form-heavy modules with Formik and Yup — validation, conditional fields and dynamic form behaviour.",
      "Implemented state management, protected routing, session handling and JWT authentication for secure multi-role dashboards.",
      "Integrated SheetJS for Excel handling and OCR-based invoice auto-fill to reduce manual data-entry errors.",
    ],
    stack: ["React", "TypeScript", "Formik", "Yup", "SheetJS", "JWT"],
  },
  {
    company: "Numeric Infosystem Pvt. Ltd.",
    role: "Full Stack Developer Intern",
    period: "Aug 2022 — Feb 2023",
    location: "Gwalior, MP",
    type: "Internship",
    points: [
      "Developed and optimised RESTful APIs and improved MongoDB query performance for faster data retrieval.",
      "Integrated third-party services, including payment gateways with secure transaction flows.",
      "Implemented user authentication with JWT and OAuth.",
      "Diagnosed and fixed bugs across the stack to improve stability and performance.",
    ],
    stack: ["Node.js", "Express", "MongoDB", "JWT", "OAuth"],
  },
];

/* ------------------------------------------------------------------ */
/* Services & approach                                                 */
/* ------------------------------------------------------------------ */

export const services = [
  {
    title: "Full Stack Web Applications",
    body: "End-to-end MERN applications — React and TypeScript on the front, Node.js, Express and a database behind it.",
  },
  {
    title: "ERP & Business Applications",
    body: "Modules for procurement, inventory, production, QC, dispatch and finance that match how teams actually work.",
  },
  {
    title: "REST APIs & Backend Systems",
    body: "Express APIs with clean routing, validation and efficient MongoDB or SQL queries.",
  },
  {
    title: "Admin Dashboards",
    body: "Data-heavy dashboards with tables, filters, pagination, charts and Excel import/export.",
  },
  {
    title: "Authentication & RBAC",
    body: "JWT authentication, protected routes and role-based permissions from simple roles to per-action guards.",
  },
  {
    title: "Workflow & Automation Systems",
    body: "Multi-stage workflows, ticketing with TAT tracking, recurring checklists and OCR-assisted data entry.",
  },
];

export const approach = [
  { title: "Understand", body: "Learn the business requirements and the workflow people already follow." },
  { title: "Design", body: "Plan a scalable UI and application architecture before writing code." },
  { title: "Build", body: "Develop reusable frontend and backend components." },
  { title: "Integrate", body: "Connect APIs, authentication, databases and business logic." },
  { title: "Improve", body: "Test, debug, optimise and keep iterating after release." },
];
