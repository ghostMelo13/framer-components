"use client"
import { AnimatePresence, useMotionValue, useSpring, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function AnimatedTooltip({
    items
} : {
    items: {
        id: number;
        name: string;
        designation: string;
        image: string
    }[]
}){
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const springConfig = { stiffness: 100, damping: 5 };
    const x = useMotionValue(0);
    const rotate = useSpring(
        useTransform(x, [-100, 100], [-45, 45]),
        springConfig
    )
    // translate the tooltip
    const translateX = useSpring(
        useTransform(x, [-100, 100], [-50, 50]),
        springConfig
    );


    const handleMouseMove = (event: any) => {
        const halfwidth = event.target.offsetWidth / 2;
        // console.log("offset_wid", event.target.offsetWidth);
        // console.log("offset_X", event.nativeEvent.offsetX - halfwidth);
        x.set(event.nativeEvent.offsetX - halfwidth);
    }

    return (
        <>
            {items.map((item, idx) => (
                <div 
                    key={item.name} 
                    className="-mr-4 relative group"
                    onMouseEnter={() => setHoveredIndex(item.id)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >

                    <AnimatePresence mode="popLayout">
                        {hoveredIndex === item.id && (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                    scale: 0.6
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: {
                                        type: 'spring',
                                        stiffness: 260,
                                        damping: 10
                                    }
                                }}
                                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                                style={{
                                    translateX: translateX,
                                    rotate: rotate,
                                    whiteSpace: "nowrap",
                                }}
                                className="absolute -top-16 -left-1/2 translate-x-1/2 flex flex-col items-center justify-center text-xs rounded-md bg-black z-50 shadow-xl px-4 py-2"
                            >
                                <div className="absolute z-10 inset-x-10 -bottom-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
                                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                                <div className="font-bold text-white relative z-30 text-base">
                                    {item.name}
                                </div>
                                <div className="text-white text-xs">{item.designation}</div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <Image
                        onMouseMove={handleMouseMove}
                        height={100}
                        width={100}
                        src={item.image}
                        alt={item.name}
                        className="object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-white  relative transition duration-500"
                    />
                </div>
            ))}
        </>
    )
}