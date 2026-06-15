"use client";
import React, { useState, useEffect } from "react";
import {
  useMotionValue,
  animate,
  useMotionTemplate,
  motion,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    id: 1,
    year: "",
    title: "Grab CRM",
    description:
      "Developed a responsive CRM web application for managing leads, clients, and space inquiries efficiently.Implemented secure authentication with redirection to dashboards post-login.Enhanced user experience with role based access and intuitive navigation flows.",
    Image: "/2.jpg",
    link: "https://crm.grabspace.in",
  },
  {
    id: 2,
    year: "",
    title: "Dava Gwalior",
    description:
      "An admin e-commerce dashboard for tracking sales, revenue, orders, and product analytics. As a front-end developer, this page would feature charts, tables, and KPI cards, built using React or Next.js with Tailwind or Material-UI for styling and libraries like Recharts or Chart.js for visualizations. Your role would include building reusable UI components, integrating APIs for dynamic data, adding filters and pagination, and ensuring responsiveness and role-based access so only authorized admins can view and manage the analytics",
    Image: "/5.png",
    link: "https://admin.davagwalior.com",
  },
  {
    id: 3,
    year: "",
    title: "FinActive",
    description:
      "Developed finActive.net, a platform to track and manage all financial investments in one place. Integrated real-time portfolio tracking and intuitive visual insights for users. Focused on clean UI and performance for a seamless investment monitoring experience",
    Image: "/1.jpg",
    link: "https://finactive.net",
  },
  {
    id: 4,
    year: "",
    title: "SSBook Club",
    description:
      "An online platform to showcase and sell digital products. The website features a modern design, user-friendly navigation, and sections for product listings, descriptions, and purchase options. Ideal for creators looking to monetize their digital products.",
    Image: "/3.jpg",
    link: "https://my-digital-products-showcase.vercel.app",
  },
  {
    id: 5,
    year: "",
    title: "Nivishka",
    description:
      "Designed and developed nivishka.com, a modern e-commerce platform for ethnic wear. Implemented a seamless shopping experience with product galleries, secure checkout, and responsive design. Focused on performance, accessibility, and a visually appealing interface to enhance user engagement and drive sales.",
    Image: "/4.jpg",
    link: "https://nivishka.com/",
  },
  {
    id: 6,
    year: "",
    title: "ERP",
    description:
      "Developed a robust Enterprise Resource Planning (ERP) system using React 19, Node.js/Express, and PostgreSQL. Engineered complex modules including an automated Checklist Management system for recurring tasks and a multi-stage Help Ticket (FMS) workflow with automated Turn-Around Time (TAT) tracking. Integrated Redux Toolkit for efficient state management and utilized JWT for secure authentication, ensuring a high-performance and scalable business solution.",
    Image: "/6.png",
    link: "https://erp.dtableanalytics.com"
  },
  {
    id: 7,
    year: "",
    title: "Sparsh GPT",
    description:
      "Built the frontend of Sparsh GPT, a multi-tenant AI-powered platform combining a Support Engine (contextual AI chatbot) with a Learning Management System (LMS), using React 19, Redux Toolkit, React Router, and Tailwind CSS. Developed a real-time AI chat interface with markdown rendering, role-based dashboards and protected routes for a four-tier access control system (SuperAdmin, Admin, Client Admin, Client User), and reusable UI components including sidebar navigation, modals, and notification panels. Implemented the LMS module with course catalogs, video/PDF content players, and MCQ/descriptive assessment interfaces. Integrated RESTful APIs using Axios for project management, batch assignment, company onboarding, and team management workflows, and deployed the application on Vercel with Vite as the build tool.",
    Image: "/7.png",
    link: "https://erp.theknowcart.com"
  },
  {
    id: 8,
    year: "",
    title: "Linkd ERP",
    description:
      "Built a full-stack, role-based Manufacturing ERP for a textile/sublimation-printing business, digitizing end-to-end operations across inventory, procurement, production, orders, finance/GST, and HR/payroll in one platform. Architected a modular, feature-based frontend with React 18 + Vite, Redux Toolkit, TanStack React Query, and Tailwind CSS — 60+ lazy-loaded route modules for a lean, scalable bundle. Engineered a custom Role-Based Access Control (RBAC) permission engine with per-module/per-action guards, a security-matrix UI, and an audit-log trail. Delivered end-to-end inventory management with separate inward/outward/order flows, stock-ledger and lot tracking, plus QR/barcode-driven warehouse operations using camera-based scanning. Backed by Node.js/Express 5, PostgreSQL with Sequelize, JWT auth, AWS S3 file storage, and PDFKit report generation, with live production/capacity dashboards and Indian GST-compliant finance reporting.",
    Image: "/linkd-erp.png",
    link: "https://erp.linkdprints.com",
  },
];

const color_tops = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00"];

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const COLOR = useMotionValue(color_tops[0]);

  useEffect(() => {
    const controls = animate(COLOR, color_tops, {
      duration: 10,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
    });

    return () => controls.stop();
  }, [COLOR]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${COLOR})`;

  return (
    <motion.section
      style={{ backgroundImage }}
      id="portfolio"
      className="py-32 text-white overflow-hidden bg-black min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
        {/* Left Section - Project List */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <span className="inline-block rounded-full bg-purple-600/20 px-4 py-1.5 text-sm text-purple-400 font-semibold mb-4">
            My Work
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-10">
            Selected <span className="text-gray-400">Projects</span>
          </h1>
          <div className="flex flex-col gap-2">
            {projects.map((project, index) => {
              const isActive = selectedProject.id === project.id;
              return (
              <motion.div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`cursor-pointer group rounded-2xl border p-5 transition-all duration-300 ${
                  isActive
                    ? "border-purple-500/50 bg-white/[0.06]"
                    : "border-transparent hover:border-white/10 hover:bg-white/[0.03]"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`text-sm font-mono transition-colors ${
                      isActive ? "text-purple-400" : "text-gray-600"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className={`text-2xl md:text-3xl font-semibold transition-colors duration-300 ${
                      isActive ? "text-white" : "text-gray-500 group-hover:text-gray-300"
                    }`}
                  >
                    {project.title}
                  </h3>
                </div>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    {/* Mobile preview image */}
                    <div className="relative mt-4 h-52 w-full overflow-hidden rounded-xl border border-white/10 lg:hidden">
                      <Image
                        src={project.Image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="100vw"
                      />
                    </div>
                    <p className="text-gray-400 mt-4 text-sm leading-relaxed line-clamp-4">
                      {project.description}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.link, "_blank");
                      }}
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-purple-600 px-5 py-2 font-semibold text-white transition-all duration-300 hover:bg-purple-700"
                    >
                      Visit Site
                      <FiArrowUpRight />
                    </button>
                  </motion.div>
                )}
              </motion.div>
            );})}
          </div>
        </motion.div>

        {/* Right Section - Project Image Stack */}
        <div className="hidden lg:flex justify-center items-center">
          <div className="sticky top-24 w-full h-[500px] overflow-hidden rounded-2xl border border-white/10 shadow-[0_8px_40px_-12px_rgba(168,85,247,0.4)]">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: selectedProject.id === project.id ? 1 : 0,
                  scale: selectedProject.id === project.id ? 1 : 1.05,
                  zIndex: selectedProject.id === project.id ? 10 : 0
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={project.Image}
                  alt={project.title}
                  fill
                  priority={true}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h4 className="text-xl font-bold text-white">{project.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
