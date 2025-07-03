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
      technologies: ["MongoDB", "MySQL", "Mongoose", "SQL"],
      expertise: ["Schema Design", "CRUD Operations", "Data Modeling", "Query Writing"]
    },
    {
      id: 4,
      description: "Frontend Development",
      details: "Creating responsive, modern user interfaces with React, focusing on component reusability and state management",
      technologies: ["React", "TypeScript", "CSS3", "HTML5"],
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
      technologies: ["Vercel", "Git", "GitHub", "Environment Variables"],
      expertise: ["Continuous Deployment", "Branch Management", "Environment Setup", "Project Configuration"]
    }
  ];

  export const Services = () => {
    const [activeService, setActiveService] = useState<number | null>(null);
  
    return (
      <section id="services" className="text-white py-20 bg-black">
        <div className="container mx-auto flex flex-col md:flex-row gap-8 px-4">
          {/* Left Section - Sticky Header */}
          <motion.div
            className="md:w-1/4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true}}
          >
            <h1 className="text-5xl lg:text-6xl text-purple-600 font-extrabold sticky top-20">
              Skills
              <span className="block mt-2 text-lg font-normal text-gray-400">
                MERN Developer
              </span>
            </h1>
          </motion.div>
  
          {/* Right Section - Services List */}
          <div className="md:w-3/4 space-y-6">
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="bg-[#212529] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <div
                  className="p-6 cursor-pointer"
                  onClick={() =>
                    setActiveService(activeService === service.id ? null : service.id)
                  }
                >
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4 items-start">
                      <span className="text-purple-600 text-4xl font-bold">
                        {String(service.id).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-xl font-bold text-gray-200">
                          {service.description}
                        </h3>
                        <p className="text-gray-400 mt-2">{service.details}</p>
                      </div>
                    </div>
                    <span
                      className={`text-purple-600 text-4xl transform transition-transform duration-300 ${
                        activeService === service.id ? "rotate-180" : ""
                      }`}
                    >
                      ↓
                    </span>
                  </div>
  
                  {/* Expanded Content */}
                  {activeService === service.id && (
                    <motion.div
                      className="mt-6 pt-6 border-t border-gray-700"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-400 mb-2">
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-purple-100 text-black font-bold rounded-full text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-400 mb-2">
                            Key Expertise
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {service.expertise.map((skill, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-purple-600/20 text-purple-400 font-bold rounded-full text-sm"
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
            ))}
          </div>
        </div>
      </section>
    );
  };

export default Services;