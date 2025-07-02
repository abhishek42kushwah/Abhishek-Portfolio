"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaReact,FaGithub ,FaCss3Alt  } from "react-icons/fa";
import { IoLogoNodejs,IoLogoHtml5  } from "react-icons/io";
import { SiTypescript, SiMongodb,SiExpress,SiMysql  } from "react-icons/si";
import { RiJavascriptLine } from "react-icons/ri";
const stackItems = [
  { id: 1, name: "React", icon: FaReact, color: "#61DAFB" }, // React 
  { id: 2, name: "Node.js", icon: IoLogoNodejs, color: "#68A063" }, // Node.js 
  { id: 3, name: "Github", icon: FaGithub, color: "#000" },
  { id: 4, name: "HTML", icon: IoLogoHtml5, color: "#E34F26" }, // HTML
    { id: 3, name: "CSS", icon: FaCss3Alt, color: "#264de4" }, // CSS
  { id: 4, name: "JavaScript", icon: RiJavascriptLine, color: "#F0DB4F" }, // JavaScript
  { id: 5, name: "TypeScript", icon: SiTypescript, color: "#3178C6" }, // TypeScript 
  { id: 6, name: "MongoDB", icon: SiMongodb, color: "#47A248" }, // MongoDB 
  { id: 7, name: "Express.js", icon: SiExpress, color: "#000000" }, // Express.js 
  { id: 8, name: "MySQL", icon: SiMysql, color: "#4479A1" }, // MySQL
];

export const Stack = () => {
  return (
    <motion.section className="py-16 bg-black">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <h2 className="text-5xl text-white font-bold mb-4">My Stack</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {stackItems.map((item) => (
            <motion.div
            key={item.id}
            className="p-4"
            initial={{ opacity: 0, y: 50 }} // Initial state (hidden)
            whileInView={{ opacity: 1, y: 0 }} // Animate when in view
            viewport={{ once: false }} // Trigger animation every time
            transition={{ duration: 0.5, delay: item.id * 0.1 }}// Smooth transition with delay
            >
              <div className="mb-4 bg-white/15 p-6 rounded-xl">
                {React.createElement(item.icon, {
                  className: "w-16 h-16 mx-auto",
                  style: { color: item.color },
                })}
              </div>
              <p className="text-white font-semibold mt-2">{item.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};