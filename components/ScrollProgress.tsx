"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 top-0 z-[100] h-1 w-full origin-left bg-gradient-to-r from-purple-500 via-purple-400 to-fuchsia-500"
      />

      {/* Scroll-to-top button */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-[100] flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-white shadow-[0_8px_30px_-6px_rgba(168,85,247,0.7)] transition-colors hover:bg-purple-700"
          >
            <FiArrowUp size={22} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollProgress;
