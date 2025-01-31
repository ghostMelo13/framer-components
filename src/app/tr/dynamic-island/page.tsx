"use client"
import { ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { cn } from '@/lib/utils';
import { motion } from "framer-motion";
import { DynamicIslandContextType } from "@/providers/dynamicIsland-provider";

export enum DYNAMIC_ISLAND_STATE {
    IDLE = 'IDLE',
    SUGGESTIVE = 'SUGGESTIVE',
    EXPANDED = 'EXPANDED' 
}

export default function DynamicIsland({ className}: { className: string }) {
    const { state, setState } = useContext(DynamicIslandContextType);
    const [showBlur, setShowBlur] = useState(false);

    useEffect(() => {
        setShowBlur(true);
        const showBlurTimeout = setTimeout(() => setShowBlur(false), 200);
        return () => clearTimeout(showBlurTimeout);
    }, [state]);

    return (
        <main className="min-h-screen w-full flex justify-center items-center bg-white text-black">
                <motion.div 
                    className={cn(
                        'dynamic-island p-2 bg-black overflow-hidden font-sans text-white shadow-md shadow-black/20',
                        getDynamicIslandBorderRadiusByState(state),
                        className,
                    )}
                    animate={{
                        width: getDynamicIslandWidthByState(state),
                        scale: state === DYNAMIC_ISLAND_STATE.EXPANDED ? 1.2 : 1,
                        filter: showBlur ? 'blur(2px)' : 'blur(0px)'
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        bounce: 0,
                        filter: {
                            type: 'spring',
                            duration: 0.2,
                        }
                    }}
                >
                    <div className="w-4 h-4 rounded-full bg-slate-600"></div>
                </motion.div>
               <div className="absolute bottom-6 flex gap-3">
                    <button className="p-5 rounded-lg border border-black" onClick={() => setState(DYNAMIC_ISLAND_STATE.IDLE)}>IDLE</button>
                    <button className="p-5 rounded-lg border border-black" onClick={() => setState(DYNAMIC_ISLAND_STATE.SUGGESTIVE)}>SUGGESTIVE</button>
                    <button className="p-5 rounded-lg border border-black" onClick={() => setState(DYNAMIC_ISLAND_STATE.EXPANDED)}>EXPANDED</button>
               </div>
        </main>
    )
}

// Utility funcitons
function getDynamicIslandWidthByState(state: DYNAMIC_ISLAND_STATE): string {
    switch (state) {
        case DYNAMIC_ISLAND_STATE.IDLE: return '130px';
        case DYNAMIC_ISLAND_STATE.SUGGESTIVE: return '220px';
        case DYNAMIC_ISLAND_STATE.EXPANDED: return '260px';
        default: return '';
    }
}

function getDynamicIslandBorderRadiusByState(state: DYNAMIC_ISLAND_STATE): string {
    switch (state) {
        case DYNAMIC_ISLAND_STATE.IDLE: return 'rounded-full';
        case DYNAMIC_ISLAND_STATE.SUGGESTIVE: return 'rounded-full';
        case DYNAMIC_ISLAND_STATE.EXPANDED: return 'rounded-3xl';
    }
}