"use client"
import { useEffect } from "react"
import { useMotionValue, animate, useMotionTemplate, motion } from "framer-motion"
import Image from "next/image"
import image from "@/public/profilepic.png"
// import obj from "@/public/3d-modeling.png"
import {  FiDownload } from "react-icons/fi" // Added FiDownload icon

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
      className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-white"
      style={{ backgroundImage }}
    >
      <div className="z-10 flex flex-col items-center text-center">
        {/* Open for Work Badge */}
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm"
        >
          Open for work
        </motion.span>

        {/* Hi, I am */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-white/40 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
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
            width={250}
            height={250}
            alt="Profile Picture"
            className="rounded-full"
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold"
        >
         Abhishek Kushwah
        </motion.h1>

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
          className="my-6 text-sm sm:text-base md:text-lg max-w-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Frontend Developer based in eocDigitas, with over 1.6 years of experience
        </motion.p>

        {/* Download CV Button - Updated to be functional */}
        <motion.a
          href="/AbhishekKushwahCV.pdf" // Path to your CV file in the public folder
          download="AbhishekKushwahCV.pdf" // Name that will be used when downloading
          className="flex w-fit items-center gap-2 rounded-full px-4 py-2 bg-purple-600 hover:bg-purple-700 transition-colors cursor-pointer"
          style={{ border, boxShadow }}
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Download CV"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Download CV
          <FiDownload />
        </motion.a>
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