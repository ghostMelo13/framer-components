"use client"
import { motion } from "framer-motion"


export default function Staggered() {
  return (
    <main className="min-h-screen grid gap-2 px-8 place-content-center bg-black text-white ">

        <section className="flex flex-col gap-6 ">
            <FlipLink href="#">Linkedin</FlipLink>
            <FlipLink href="#">Twitter</FlipLink>
            <FlipLink href="#">Instagram</FlipLink>
            <FlipLink href="#">Youtube</FlipLink>
        </section>
    </main>
  )
}

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }: { children: string, href: string }) => {
    return (
        <motion.a 
            initial="initial"
            whileHover="hovered"
            href={href}
            className="relative block overflow-hidden 
            whitespace-nowrap text-4xl text-white 
            font-bold uppercase sm:text-7xl md:text-8xl lg:text-9xl"
            style={{lineHeight: 0.75}}
        >
            <div>
                {children.split("").map((el, i) => (
                    <motion.span
                        variants={{
                            initial: { y: 0},
                            hovered: { y: "-110%" }
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER*i
                        }}
                        key={i}
                        className="inline-block"
                    >
                        {el}
                    </motion.span>
                ))}
            </div>
            <div className="absolute inset-0">
                {children.split("").map((el, i) => (
                   <motion.span
                        variants={{
                            initial: { y: "100%" },
                            hovered: { y: 0 }
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER*i
                        }}
                        key={i}
                        className="inline-block"
                    >
                        {el}
                    </motion.span>
                ))}
            </div>
        </motion.a>
    )
}