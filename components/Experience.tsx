"use client";

import { useEffect } from "react";
import {
  useMotionValue,
  animate,
  useMotionTemplate,
  motion,
} from "framer-motion";

const experiences = [
  {
    id: 1,
    company: "D Table Analytics",
    initials: "DT",
    role: "Mern Stack Developer",
    duration: "Jan 2026 – Present",
    location: "Bhopal",
    type: "Full Time",
    current: true,
    points: [
      "Developed and maintained enterprise ERP applications for manufacturing and business operations — Procurement, Inventory, Production, Quality Control, Dispatch, and Finance workflows.",
      "Built advanced data-driven interfaces with React.js, TypeScript, Redux, and REST APIs featuring dynamic tables, filtering, search, pagination, reporting dashboards, and Excel import/export.",
      "Implemented role-based dashboards, protected routes, JWT authentication, and multi-user workflows for Admin, Production, QC, Sales, and Inventory teams.",
      "Delivered business modules such as Purchase Orders, Vendor Follow-Ups, Delivery Verification, Payment Tracking, and Material Tracking to reduce manual operations.",
    ],
    technologies: ["JavaScript","React.js", "TypeScript", "Redux", "REST APIs", "JWT","Node.js","MongoDB","MySQL","Express.js","Git","Bootstrap","TailwindCSS","Material UI","Next.js","PostgreSQL","Excel","Chart.js"],
  },
  {
    id: 2,
    company: "EcoDigitas",
    initials: "EC",
    role: "Frontend Developer",
    duration: "Aug 2024 – Jan 2026",
    location: "Hybrid",
    type: "Full Time",
    current: false,
    points: [
      "Built complex frontend applications using React.js and TypeScript with dynamic filtering, modals, pagination, responsive layouts, and a reusable component architecture.",
      "Worked extensively with Formik and Yup for form validation, conditional fields, and clean user input flows across business modules.",
      "Implemented state management, protected routing, session handling, and JWT-based authentication for secure multi-role dashboards.",
      "Integrated SheetJS for Excel handling and OCR-based invoice auto-fill to improve automation and reduce manual data-entry errors.",
    ],
    technologies: ["React.js", "TypeScript", "Formik", "Yup", "SheetJS"],
  },
  {
    id: 3,
    company: "Numeric Infosystem Pvt. Ltd.",
    initials: "NI",
    role: "Full Stack Developer Intern",
    duration: "Aug 2022 – Feb 2023",
    location: "Gwalior, MP",
    type: "Internship",
    current: false,
    points: [
      "Developed and optimized RESTful APIs and improved MongoDB query performance for faster data retrieval.",
      "Integrated third-party services including payment gateways and handled secure transaction flows.",
      "Implemented secure user authentication using JWT and OAuth to strengthen application security.",
      "Identified and resolved full-stack bugs to enhance system stability and performance.",
    ],
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "OAuth"],
  },
];

const color_tops = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00"];

export const Experience = () => {
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
      id="experience"
      style={{ backgroundImage }}
      className="text-white py-28 overflow-hidden bg-black"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block rounded-full bg-purple-600/20 px-4 py-1.5 text-sm text-purple-400 font-semibold mb-4">
            2+ Years of Experience
          </span>
          <h1 className="text-4xl md:text-6xl font-bold">
            Work <span className="text-gray-400">Experience</span>
          </h1>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical gradient line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2 bg-gradient-to-b from-purple-600 via-purple-600/40 to-transparent" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`relative flex md:items-stretch ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                {/* Timeline node */}
                <span className="absolute left-4 md:left-1/2 top-7 z-10 -translate-x-1/2 flex h-5 w-5 items-center justify-center">
                  <span className="absolute h-5 w-5 rounded-full bg-purple-600/30" />
                  <span
                    className={`h-3 w-3 rounded-full bg-purple-500 ${
                      exp.current ? "animate-pulse ring-4 ring-purple-500/20" : ""
                    }`}
                  />
                </span>

                {/* Spacer for desktop alternating layout */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div
                  className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                    index % 2 === 0 ? "md:pl-12" : "md:pr-12"
                  }`}
                >
                  <div className="group relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 transition-all duration-300 hover:border-purple-500/50 hover:bg-white/[0.07] hover:-translate-y-1 hover:shadow-[0_8px_40px_-12px_rgba(168,85,247,0.5)]">
                    {/* Top row: avatar + meta */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-purple-800 font-bold text-white shadow-lg">
                        {exp.initials}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-lg font-bold text-white">
                            {exp.company}
                          </h3>
                          {exp.current && (
                            <span className="rounded-full bg-green-500/15 px-2 py-0.5 text-xs font-semibold text-green-400">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-purple-400 font-semibold text-sm mt-0.5">
                          {exp.role}
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                          {exp.duration} · {exp.location} · {exp.type}
                        </p>
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul className="mt-5 space-y-2.5">
                      {exp.points.map((point, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm text-gray-300 leading-relaxed"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
