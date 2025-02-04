"use client"
import { motion } from "framer-motion";
import { useState } from "react";

export default function AnimatedHalfCircles() {
  const linePath = "M333 125.5H249.5C248.395 125.5 247.5 124.605 247.5 123.5V67.5C247.5 66.3954 246.605 65.5 245.5 65.5H144.5C143.395 65.5 142.5 64.6046 142.5 63.5V2.5C142.5 1.39543 141.605 0.5 140.5 0.5H0.5";
  const beamWidth = 333;
  const beamHeight = 126;

  const [pathLength, setPathLength] = useState(500); // Default, will be updated

  return (
    <div className="flex flex-col gap-10 bg-slate-600">
      <div className="w-full min-h-screen flex items-center justify-center bg-gray-900 py-9">
        <svg className="absolute -top-96" width="1067" height="1050" viewBox="0 0 1067 1050" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="533.5" cy="516.5" r="487" stroke="url(#paint0_linear_133_105)" strokeDasharray="12 12" />
          <circle cx="533.5" cy="508.5" r="451" stroke="url(#paint1_linear_133_105)" strokeDasharray="12 12" />
          <circle cx="534" cy="516" r="405.5" stroke="url(#paint2_linear_133_105)" strokeDasharray="12 12" />
          <circle cx="533.5" cy="516.5" r="533" stroke="url(#paint3_linear_133_105)" strokeDasharray="12 12" />

          {/* Animated circles */}
          <circle r="8" fill="#A972D9" opacity="0.8">
            <animateMotion dur="10s" repeatCount="indefinite" path="M1020.5,516.5 A487,487 0 1,1 46.5,516.5" />
          </circle>
          <circle r="8" fill="#A972D9" opacity="0.8">
            <animateMotion dur="9s" repeatCount="indefinite" path="M984.5,508.5 A451,451 0 1,1 82.5,508.5" />
          </circle>
          <circle r="8" fill="#A972D9" opacity="0.8">
            <animateMotion dur="8s" repeatCount="indefinite" path="M939.5,516 A405.5,405.5 0 1,1 128.5,516" />
          </circle>
          <circle r="8" fill="#A972D9" opacity="0.8">
            <animateMotion dur="11s" repeatCount="indefinite" path="M1066.5,516.5 A533,533 0 1,1 0.5,516.5" />
          </circle>

          <defs>
            <linearGradient
              id="paint0_linear_133_105"
              x1="533.5"
              y1="29"
              x2="533.5"
              y2="1004"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.545" stopColor="#A972D9" stopOpacity="0" />
              <stop offset="1" stopColor="#593C73" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_133_105"
              x1="533.5"
              y1="57"
              x2="533.5"
              y2="960"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.545" stopColor="#A972D9" stopOpacity="0" />
              <stop offset="1" stopColor="#593C73" />
            </linearGradient>
            <linearGradient id="paint2_linear_133_105" x1="534" y1="110" x2="534" y2="922" gradientUnits="userSpaceOnUse">
              <stop offset="0.545" stopColor="#A972D9" stopOpacity="0" />
              <stop offset="1" stopColor="#593C73" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_133_105"
              x1="533.5"
              y1="-17"
              x2="533.5"
              y2="1050"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.545" stopColor="#A972D9" stopOpacity="0" />
              <stop offset="1" stopColor="#593C73" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="sep w-full h-[1px] bg-zinc-200"></div>

      {/*  x1="-3" y1="0.99999" x2="333" y2="126" */}

      <div className="h-[40vh] w-full bg-gray-900">
        <div className="svg-container w-fit mt-8 ml-8">
          <h3 className="font-medium text-white">Light beam</h3>
          <svg width={beamWidth} height={beamHeight} viewBox={`0 0 ${beamWidth} ${beamHeight}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
              d={linePath} 
              stroke="url(#paint0_linear_44_8)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              // strokeDasharray="30, 300" // Small glowing portion (30px) moves along total length
              // strokeDashoffset="370"
              initial={{ pathLength: 0.1 }}
              animate={{ 
                pathLength: 0.1,
                pathOffset: [0, 1],  
              }}
              transition={{
                duration: 1.7,
                ease: "linear",
                repeat: Infinity,
                repeatDelay: 0.8,
                repeatType: "loop"
              }}
            />
            <defs>
              <motion.linearGradient id="paint0_linear_44_8" gradientUnits="userSpaceOnUse"
                // initial={{
                //   x1: -3,
                //   x2: 333,
                //   y1: 0.99999,
                //   y2: 126
                // }}
                // animate={{
                //   x1: -100,
                //   x2: -100,
                //   y1: 0,
                //   y2: 0
                // }}
                // transition={{
                //   duration: 3,
                //   ease: 'linear',
                //   repeat: Infinity
                // }}
              >
                <stop stopColor="#00CCFF"/>
                <stop offset="0.268455" stopColor="#4769F2"/>
                <stop offset="0.46" stopColor="#3422BF"/>
                <stop offset="0.77" stopColor="#562EBD"/>
                <stop offset="1" stopColor="#7400A5"/>
              </motion.linearGradient>
            </defs>
          </svg>
        </div>

      </div>
    </div>
  )
}

