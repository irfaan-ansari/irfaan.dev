"use client";
import { motion, useScroll, useSpring } from "motion/react";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      className="fixed inset-x-0 h-0.5 origin-left bg-highlight top-0 z-2 rounded-full"
      style={{ scaleX }}
    ></motion.div>
  );
};
