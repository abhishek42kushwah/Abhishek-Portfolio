"use client";
import Image from "next/image";
import mysql from "@/public/mysql.png";
import postman from "@/public/postman.png";
import docker from "@/public/docker.png";
import jwt from "@/public/jwt.png";
import tailwind from "@/public/tailwind.svg";
import Bootstrap from "@/public/Bootstrap_logo.svg";
import material from "@/public/material-ui.svg";
import redux from "@/public/redux.svg";
import vsCode from "@/public/visual-studio-code-1.svg";
import reactQuary from "@/public/react-query.svg";
import { motion } from "framer-motion";

const images = [
  { src: docker, alt: "docker" },
  { src: mysql, alt: "mysql" },
  { src: postman, alt: "postman" },
  { src: jwt, alt: "jwt" },
  { src: reactQuary, alt: "reactQuery" },
  { src: tailwind, alt: "tailwind" },
  { src: Bootstrap, alt: "bootstrap" },
  { src: material, alt: "material-ui" },
  { src: redux, alt: "redux" },
  { src: vsCode, alt: "vs-code" },
  
];

const duplicatedImages = [...images, ...images]; 

export const LogoAnimation = () => {
  return (
    <div className="relative overflow-hidden py-16">
      <motion.div
        className="flex gap-12 w-max"
        animate={{ x: "-50%" }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={index}
            className="w-[200px] h-[120px] flex items-center justify-center flex-shrink-0"
          >
            <Image
              src={image.src}
              alt={`${image.alt}-${index}`}
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
