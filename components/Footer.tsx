"use client";
import React from "react";
import { motion } from "framer-motion";
import {  FaInstagram, FaLinkedin, FaGithub,FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col md:flex-row items-center justify-between w-full h-auto bg-black py-10 md:py-[100px] px-4 md:px-[400px]"
    >
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-6 md:mb-0"
      >
        <h1 className="text-white font-bold text-lg md:text-2xl text-center md:text-left">
          © 2025. All rights reserved.
        </h1>
      </motion.div>

      {/* Social Media Icons Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="flex space-x-6 md:space-x-8"
      >
        {[
          // { href: "https://facebook.com", icon: <FaFacebook /> },
          { href: "https://wa.me/7773091428", icon: <FaWhatsapp /> },
          { href: "https://www.instagram.com/abhishek_kushwah01", icon: <FaInstagram /> },
          { href: "https://www.linkedin.com/in/developer-abhishek-kushwah/", icon: <FaLinkedin /> },
          { href: "https://github.com/abhishek42kushwah", icon: <FaGithub /> },
        ].map(({ href, icon }, index) => (
          <motion.a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-white text-[34px] hover:text-gray-500 transition-colors duration-300"
          >
            {icon}
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
}
