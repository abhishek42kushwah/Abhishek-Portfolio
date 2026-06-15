"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogoAnimation } from "./LogoAnimation";

export const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lock scroll while the preloader is visible
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
    }, 2200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-3xl sm:text-5xl font-bold text-transparent mb-2"
          >
            Abhishek Kushwah
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-purple-400 font-medium tracking-widest text-sm uppercase"
          >
            MERN Stack Developer
          </motion.p>

          {/* Reuse the existing tech logo marquee */}
          <div className="w-full max-w-3xl mt-4">
            <LogoAnimation />
          </div>

          {/* Loading bar */}
          <div className="h-1 w-48 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-fuchsia-500"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
