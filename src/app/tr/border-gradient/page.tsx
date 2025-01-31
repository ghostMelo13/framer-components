"use client"
import * as React from "react";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
};

export default function BorderGradientExp() {
    const[lightCard, setLightCard] = React.useState(false);
  return (
    <>
        <div id="first-view" className="border border-rose-500 h-screen w-full bg-zinc-900">
            
            <div className="">Framer Playground</div>

            {/* <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                Test
            </motion.button> */}
            <div className="flex gap-14">
                <div className="relative h-40 ml-14 flex items-center justify-center rounded-xl w-[30%] border bg-black border-slate-800 p-8">
                    <HoverBorderGradient className="relative" onMouseEnter={() => setLightCard(true)} onMouseLeave={() => setLightCard(false)}>
                        <div className="text-sm">Demo button</div>
                    </HoverBorderGradient>
                </div>
                {lightCard && (
                    <motion.div 
                        initial={{
                            opacity: 0,
                            scale: 0.7,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            duration: 0.2,
                        }}
                        className="w-60 h-60 bg-zinc-500/50 absolute top-36 left-40 rounded-xl p-[14px]"
                    >
                        <span className="text-md text-white font-medium selection:bg-yellow-500">Light card content on mousedown</span>
                    </motion.div>
                )}
                <div className="h-40 ml-14 flex items-center justify-center rounded-xl w-[30%] border bg-black border-slate-800 p-8">
                    <div></div>
                </div>
            </div>

        </div>

        <div id="sec-view" className="border border-green-600 h-screen w-full">
            
            <AnimatedText 
                text="Inside comp."
                el="h1"
                className="font-medium text-3xl"
            />
            
        </div>
    </>
  )
}

type AnimatedTextProps = {
    text: string;
    el?: keyof JSX.IntrinsicElements;
    className: string;

};
const defaultAnimation = { 
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
};

export const AnimatedText = ({
    text,
    el: Wrapper = "p",
    className,
}: AnimatedTextProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5, once: true })

    return (
        <Wrapper className={className}>
            {/* For Screen readers */}
            <span className="sr-only">{text}</span>

            <motion.span 
                ref={ref}
                variants={{
                    visible: { transition: {staggerChildren: 0.1}, fontSize: 15 },
                    hidden: { fontSize: 28 }
                }}
                initial="hidden"
                animate={isInView? 'visible':'hidden'}
                aria-hidden>
                {text.split("").map((char, chartIndex) => (
                    <motion.span
                        variants={defaultAnimation}
                        key={`${char}-${chartIndex}`}
                        className="inline-block"
                    >
                        {char}
                    </motion.span>
                ))}
            </motion.span>
        </Wrapper>
    );
}