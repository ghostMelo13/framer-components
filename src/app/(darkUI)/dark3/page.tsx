"use client"
import { motion, AnimatePresence, useAnimation } from "framer-motion"

export default function DarkAccordion() {


    return (
        <div className="min-h-screen bg-black flex justify-center items-center">
            <div className="w-[60%] min-h-[30rem] py-5 border border-zinc-800 rounded-xl flex flex-col items-center">
                {/* border-b border-[#313335] */}
                <div className="relative flex items-center justify-center">
                    {/* SVG Filter Definition */}
                    <svg className="absolute w-0 h-0">
                        <defs>
                            <filter
                                id="lightning-turbulence"
                                colorInterpolationFilters="sRGB"
                                x="-20%"
                                y="-20%"
                                width="140%"
                                height="140%"
                            >
                                <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise1" seed="1" />
                                <motion.feOffset
                                    in="noise1"
                                    dx="0"
                                    dy="0"
                                    result="offsetNoise1"
                                    animate={{ dy: [700, 0] }}
                                    transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                />

                                <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise2" seed="1" />
                                <motion.feOffset
                                    in="noise2"
                                    dx="0"
                                    dy="0"
                                    result="offsetNoise2"
                                    animate={{ dy: [0, -700] }}
                                    transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                />

                                <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise3" seed="2" />
                                <motion.feOffset
                                    in="noise3"
                                    dx="0"
                                    dy="0"
                                    result="offsetNoise3"
                                    animate={{ dx: [490, 0] }}
                                    transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                />

                                <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise4" seed="2" />
                                <motion.feOffset
                                    in="noise4"
                                    dx="0"
                                    dy="0"
                                    result="offsetNoise4"
                                    animate={{ dx: [0, -490] }}
                                    transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                />

                                <feComposite in="offsetNoise1" in2="offsetNoise2" result="part1" />
                                <feComposite in="offsetNoise3" in2="offsetNoise4" result="part2" />
                                <feBlend in="part1" in2="part2" mode="color-dodge" result="combinedNoise" />

                                <feDisplacementMap
                                    in="SourceGraphic"
                                    in2="combinedNoise"
                                    scale="30"
                                    xChannelSelector="R"
                                    yChannelSelector="B"
                                />
                            </filter>
                        </defs>
                    </svg>

                    {/* Card Container */}
                    <div className="relative p-0.5 rounded-3xl bg-gradient-to-br from-blue-500/40 via-transparent to-purple-500/40">
                        <div className="relative">
                            {/* Border Layers */}
                            <div className="border-2 border-blue-400/50 rounded-3xl pr-1 pb-1">
                                <motion.div
                                    className="w-[350px] h-[500px] rounded-3xl border-2 border-blue-400 -mt-1 -ml-1 relative overflow-hidden bg-neutral-900"
                                    style={{ filter: "url(#lightning-turbulence)" }}
                                    animate={{
                                        borderColor: ["#60a5fa", "#a855f7", "#3b82f6", "#8b5cf6", "#60a5fa"],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Number.POSITIVE_INFINITY,
                                        ease: "easeInOut",
                                    }}
                                />
                            </div>

                            <div className="absolute inset-0 flex flex-col p-12 z-10 pointer-events-none">
                                <div className="flex flex-col h-full pointer-events-auto">
                                    {/* Top Content */}
                                    <div className="flex flex-col pb-4">
                                        <motion.div
                                            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-2 w-fit text-sm font-bold uppercase text-white/80 hover:bg-white/15 transition-colors cursor-pointer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Electric
                                        </motion.div>
                                        <motion.h1
                                            className="text-4xl font-medium text-white mt-auto"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            Lightning Border
                                        </motion.h1>
                                    </div>

                                    {/* Divider */}
                                    <motion.hr
                                        className="border-none h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mt-auto"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ delay: 0.4, duration: 0.8 }}
                                    />

                                    {/* Bottom Content */}
                                    <div className="pt-4">
                                        <motion.p
                                            className="text-white/60"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.6 }}
                                        >
                                            A dramatic electric border effect built with React, Tailwind CSS, and Framer Motion.
                                        </motion.p>
                                    </div>
                                </div>
                            </div>

                            {/* Glow Layers */}
                            <motion.div
                                className="absolute inset-0 border-2 border-blue-400/60 rounded-3xl blur-sm pointer-events-none"
                                animate={{
                                    borderColor: ["#60a5fa99", "#a855f799", "#3b82f699", "#8b5cf699", "#60a5fa99"],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                }}
                            />
                            <motion.div
                                className="absolute inset-0 border-2 border-purple-400/80 rounded-3xl blur-md pointer-events-none"
                                animate={{
                                    borderColor: ["#a855f7cc", "#60a5facc", "#8b5cf6cc", "#3b82f6cc", "#a855f7cc"],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                    delay: 0.5,
                                }}
                            />
                        </div>

                        {/* Overlay Effects */}
                        <motion.div
                            className="absolute inset-0 rounded-3xl opacity-100 mix-blend-overlay scale-110 blur-2xl pointer-events-none"
                            style={{
                                background: "linear-gradient(-30deg, white, transparent 30%, transparent 70%, white)",
                            }}
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="absolute inset-0 rounded-3xl opacity-50 mix-blend-overlay scale-110 blur-2xl pointer-events-none"
                            style={{
                                background: "linear-gradient(-30deg, white, transparent 30%, transparent 70%, white)",
                            }}
                            animate={{ opacity: [0.2, 0.4, 0.2] }}
                            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                        />

                        {/* Background Glow */}
                        <motion.div
                            className="absolute inset-0 rounded-3xl blur-3xl scale-110 opacity-30 -z-10 pointer-events-none"
                            style={{
                                background: "linear-gradient(-30deg, #60a5fa, transparent, #a855f7)",
                            }}
                            animate={{
                                background: [
                                    "linear-gradient(-30deg, #60a5fa, transparent, #a855f7)",
                                    "linear-gradient(-30deg, #a855f7, transparent, #3b82f6)",
                                    "linear-gradient(-30deg, #8b5cf6, transparent, #60a5fa)",
                                    "linear-gradient(-30deg, #60a5fa, transparent, #a855f7)",
                                ],
                            }}
                            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}