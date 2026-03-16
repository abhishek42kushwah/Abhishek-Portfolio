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
          <h1 className="text-4xl md:text-6xl font-bold mb-10">
            Selected <span className="text-gray-400">Projects</span>
          </h1>
          <div className="flex flex-col gap-4">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer mb-8 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <p className="text-gray-400 text-lg mb-2">{project.year}</p>
                <h3
                  className={`text-2xl md:text-3xl font-semibold group-hover:text-gray-400 transition-colors ${
                    selectedProject.id === project.id ? "text-gray-200" : ""
                  } duration-300`}
                >
                  {project.title}
                </h3>
                {selectedProject.id === project.id && (
                  <motion.div
                    className="border-b-2 border-gray-200"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                {selectedProject.id === project.id && (
                  <div>
                    <motion.p
                      className="text-gray-400 mt-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      {project.description}
                    </motion.p>
                    <button
                      onClick={() => window.open(project.link, "_blank")}
                      className="bg-white p-2 text-black mt-2 px-4 rounded-md font-bold hover:bg-black hover:text-white transition-all duration-300"
                    >
                      Visit
                    </button>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Section - Project Image Stack */}
        <div className="flex justify-center items-center">
          <div className="relative w-full h-64 md:h-96 lg:h-[500px] overflow-hidden rounded-lg">
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
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
