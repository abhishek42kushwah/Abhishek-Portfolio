"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

const services = [
    {
      id: 1,
      description: "Full Stack MERN Development",
      details: "End-to-end web application development using MongoDB, Express, React, and Node.js with TypeScript integration",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      expertise: ["REST APIs", "State Management", "Component Architecture", "MVC Pattern"]
    },
    {
      id: 2,
      description: "Next.js Application Development",
      details: "Building modern, server-side rendered and statically generated web applications with Next.js framework",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "React"],
      expertise: ["Server-Side Rendering", "Static Site Generation", "API Routes", "Page Routing"]
    },
    {
      id: 3,
      description: "Database Implementation",
      details: "Designing and implementing database solutions using both MongoDB for NoSQL and MySQL for relational data",
      technologies: ["MongoDB", "MySQL", "Mongoose", "SQL", "Neon"],
      expertise: ["Schema Design", "CRUD Operations", "Data Modeling", "Query Writing"]
    },
    {
      id: 4,
      description: "Frontend Development",
      details: "Creating responsive, modern user interfaces with React, focusing on component reusability and state management",
      technologies: ["React", "JavaScript", "TypeScript", "CSS3", "HTML5"],
      expertise: ["Hooks", "Functional Components", "Responsive Design", "Context API"]
    },
    {
      id: 5,
      description: "Backend Development",
      details: "Building robust server-side applications with Node.js, Express, and implementing RESTful APIs",
      technologies: ["Node.js", "Express", "REST API", "Middleware"],
      expertise: ["Route Handling", "Authentication", "Error Handling", "Server Configuration"]
    },
    {
      id: 6,
      description: "Authentication & Security",
      details: "Implementing secure authentication flows and basic security measures using JWT and bcrypt",
      technologies: ["JWT", "bcrypt", "HTTP-Only Cookies", "Auth Middleware"],
      expertise: ["Password Hashing", "Token Verification", "Protected Routes", "User Authentication"]
    },
    {
      id: 7,
      description: "Deployment & Version Control",
      details: "Deploying applications using Vercel for Next.js projects and maintaining code with version control",
      technologies: ["Vercel","Render","Netlify", "Hostinger", "Git", "GitHub", "Environment Variables"],
      expertise: ["Continuous Deployment", "Branch Management", "Environment Setup", "Project Configuration"]
    }
  ];

  export const Services = () => {
    const [activeService, setActiveService] = useState<number | null>(null);

    return (
      <section id="services" className="text-white py-24 bg-black">
        <div className="container mx-auto flex flex-col md:flex-row gap-8 lg:gap-12 px-4">
          {/* Left Section - Sticky Header */}
          <motion.div
            className="md:w-1/3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true}}
          >
            <div className="sticky top-24">
              <span className="inline-block rounded-full bg-purple-600/20 px-4 py-1.5 text-sm text-purple-400 font-semibold mb-4">
                What I Do
              </span>
              <h1 className="text-5xl lg:text-6xl text-white font-extrabold">
                Skills &amp;
                <span className="block text-purple-600">Services</span>
              </h1>
              <p className="mt-4 text-gray-400 max-w-xs">
                A full-stack MERN toolkit — tap any card to explore the
                technologies and expertise behind it.
              </p>
            </div>
          </motion.div>

          {/* Right Section - Services List */}
          <div className="md:w-2/3 space-y-4">
            {services.map((service) => {
              const isOpen = activeService === service.id;
              return (
              <motion.div
                key={service.id}
                className={`rounded-2xl border backdrop-blur-sm overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-purple-500/50 bg-white/[0.07]"
                    : "border-white/10 bg-white/[0.04] hover:border-purple-500/30 hover:bg-white/[0.06]"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div
                  className="p-6 cursor-pointer"
                  onClick={() =>
                    setActiveService(isOpen ? null : service.id)
                  }
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-4 items-start">
                      <span className="bg-gradient-to-br from-purple-400 to-purple-700 bg-clip-text text-3xl font-extrabold text-transparent">
                        {String(service.id).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white">
                          {service.description}
                        </h3>
                        <p className="text-gray-400 mt-2 text-sm sm:text-base">{service.details}</p>
                      </div>
                    </div>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-purple-500/40 text-purple-400 text-2xl leading-none transition-transform duration-300 ${
                        isOpen ? "rotate-45 bg-purple-500/20" : ""
                      }`}
                    >
                      +
                    </span>
                  </div>

                  {/* Expanded Content */}
                  {isOpen && (
                    <motion.div
                      className="mt-6 pt-6 border-t border-white/10"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-400 mb-3 text-sm uppercase tracking-wider">
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-purple-100 text-black font-semibold rounded-full text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-400 mb-3 text-sm uppercase tracking-wider">
                            Key Expertise
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {service.expertise.map((skill, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 border border-purple-500/30 bg-purple-500/10 text-purple-300 font-medium rounded-full text-sm"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );})}
          </div>
        </div>
      </section>
    );
  };

export default Services;