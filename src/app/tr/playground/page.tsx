"use client"

import { motion } from "framer-motion"
/**
 * 
 * Not the actual result I wanted, the characters should rotate in the same place, like tow faces of cube
 */
 
export default function StaggerText() {
  const text = "Deploying"
  const duration = 1.5
  const staggerDelay = 0.1

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-black perspective-[1000px]">
      <div className="relative">
        {/* First set of characters (rotating up and blurring) */}
        <div className="flex">
          {text.split("").map((char, i) => (
            <motion.span
              key={`up-${i}`}
              className="text-7xl font-bold text-white inline-block"
              initial={{ opacity: 1, rotateX: 0, filter: "blur(0px)" }}
              animate={{
                opacity: 0,
                rotateX: -90,
                filter: "blur(8px)",
              }}
              transition={{
                duration: duration,
                delay: i * staggerDelay,
                ease: "easeInOut",
              }}
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: "bottom",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>

        {/* Second set of characters (rotating up from bottom) */}
        <div className="absolute inset-0 flex">
          {text.split("").map((char, i) => (
            <motion.span
              key={`down-${i}`}
              className="text-7xl font-bold text-white inline-block"
              initial={{ opacity: 0, rotateX: 90, y: "100%" }}
              animate={{
                opacity: 1,
                rotateX: 0,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: duration,
                delay: i * staggerDelay,
                ease: "easeInOut",
              }}
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: "bottom",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  )
}

