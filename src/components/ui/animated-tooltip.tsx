"use client"
import { AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

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
    const x = useMotionValue(0);
    const springConfig = { stiffness: 100, damping: 5 };
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
                <div key={item.name} className="-mr-4 relative group">

                    <AnimatePresence mode="popLayout">
                        
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