"use client";

import { RESUME } from "@/lib/resume";
import { motion } from "motion/react";

const { name } = RESUME;

export const FooterSVG = () => {
  return (
    <svg viewBox="0 0 300 40" className="size-full select-none">
      <defs>
        {/* text gradient */}
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          x1="0"
          x2="300"
        >
          <stop offset="0%" stopColor="#3B9EFF" />
          <stop offset="40%" stopColor="#DE51A8" />
          <stop offset="70%" stopColor="#0EB39E" />
          <stop offset="100%" stopColor="#FFD60A" />
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r={35}
          cy="20"
          initial={{ cx: 0 }}
          animate={{
            cx: 300,
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="50%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>

        <mask id="textMask">
          <motion.rect
            x="0"
            y="0"
            width="300"
            height="40"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>

      {/* default stroke */}
      <text
        x="150"
        y="25"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeLinecap="round"
        strokeLinejoin="round"
        textLength={300}
        strokeWidth={0.5}
        className="stroke-border text-4xl font-semibold fill-none"
      >
        {name}
      </text>

      {/* mask */}
      <text
        x="150"
        y="25"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeLinecap="round"
        strokeLinejoin="round"
        textLength={300}
        strokeWidth={0.5}
        stroke="url(#textGradient)"
        mask="url(#textMask)"
        className="text-4xl font-semibold fill-none"
      >
        {name}
      </text>

      {/* hide stroke only fill to be visible */}
      <text
        x="150"
        y="25"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeLinecap="round"
        strokeLinejoin="round"
        textLength={300}
        strokeWidth={0}
        className="text-4xl font-semibold fill-background"
      >
        {name}
      </text>
    </svg>
  );
};
