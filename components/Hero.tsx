"use client"
import { useEffect } from "react"
import { useMotionValue, animate, useMotionTemplate, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import image from "@/public/profilepic.png"
// import obj from "@/public/3d-modeling.png"
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiArrowDown, FiEye } from "react-icons/fi"

const socials = [
  { icon: FiGithub, href: "https://github.com/abhishek42kushwah", label: "GitHub" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/developer-abhishek-kushwah/", label: "LinkedIn" },
  { icon: FiMail, href: "mailto:kushwahabhishek42@gmail.com", label: "Email" },
]

const color_tops = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00"]

export const Hero = () => {
  const COLOR = useMotionValue(color_tops[0])

  useEffect(() => {
    const controls = animate(COLOR, color_tops, {
      duration: 10,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror"
    })

    return () => controls.stop()
  }, [COLOR])

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${COLOR})`
  const border = useMotionTemplate`1px solid ${COLOR}`
  const boxShadow = useMotionTemplate`0px 4px 24px ${COLOR}`

  return (
    <motion.section
      id="home"
      className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-white"
      style={{ backgroundImage }}
    >
      <div className="z-10 flex flex-col items-center text-center">
        {/* Open for Work Badge */}
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-1.5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          Open for work
        </motion.span>

         {/* Hi, I am */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-white/40 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
        >
          Hi, I am
        </motion.h1>
 
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="my-6"
        >
          <Image
            src={image}
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full sm:w-[250px] sm:h-[250px] w-[150px] h-[150px] object-cover"
          />
        </motion.div>
 
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-transparent"
        >
          Abhishek Kushwah
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-3 text-base sm:text-xl md:text-2xl font-semibold text-purple-400"
        >
          MERN Stack Developer
        </motion.p>

        {/* Happy Clients Section */}
        {/* <motion.div
          className="flex bg-white/10 shadow-xl p-3 items-center justify-center space-x-2 my-6 rounded-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image src={obj} width={30} height={30} alt="3D Modeling Icon" className="rounded-2xl" />
          <Image src={obj} width={30} height={30} alt="3D Modeling Icon" className="rounded-2xl" />
          <Image src={obj} width={30} height={30} alt="3D Modeling Icon" className="rounded-2xl" />
          <p className="text-sm sm:text-base">20+ Happy Clients</p>
        </motion.div> */}

        {/* Description Paragraph */}
        <motion.p
          className="my-6 text-sm sm:text-base md:text-lg max-w-md text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Building fast, scalable web apps with React, Next.js & Node.js. Currently
          crafting enterprise ERP solutions at D Table Analytics with 2+ years of experience.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Download CV Button */}
          <motion.a
            href="/Abhishek_kushwah_CV.pdf"
            download="Abhishek_Kushwah_CV.pdf"
            className="flex w-fit items-center gap-2 rounded-full px-5 py-2.5 bg-purple-600 hover:bg-purple-700 transition-colors cursor-pointer font-semibold"
            style={{ border, boxShadow }}
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Download CV"
          >
            Download CV
            <FiDownload />
          </motion.a>

          {/* View CV Button */}
          <motion.a
            href="/Abhishek_kushwah_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 font-semibold backdrop-blur-sm transition-colors hover:bg-white/10 cursor-pointer"
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.95 }}
            aria-label="View CV"
          >
            View CV
            <FiEye />
          </motion.a>

          {/* View Work Button */}
          <motion.a
            href="#portfolio"
            className="flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 font-semibold backdrop-blur-sm transition-colors hover:bg-white/10 cursor-pointer"
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.95 }}
            aria-label="View Work"
          >
            View Work
            <FiArrowDown />
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="mt-8 flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              aria-label={social.label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:text-purple-400 hover:-translate-y-1"
            >
              <social.icon size={20} />
            </Link>
          ))}
        </motion.div>
      </div>

      {/* Background Circles */}
      <div className="bg-circle-container">
        <div className="bg-circle-background"></div>
        <div className="bg-circle-continer"></div>
      </div>

      
    
  
    </motion.section>
  );
}
export default Hero;