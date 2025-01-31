"use client"

import { useState } from "react"



export default function GooeyMan() {
    const [animate, setAnimate] = useState(false);
  return (
    <div className=" w-full min-h-screen flex justify-center items-center">
        <div className="flex gap-2">
            {/* <div className="square w-20 h-20 bg-blue-600 animate-spin blur-lg contrast-200"></div> */}
            {/* <div className="square w-20 h-20 bg-blue-600" style={{filter: 'blur(#blur)'}}></div> */}

            {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="blur">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
                    </filter>
                </defs>
                <foreignObject width="100%" height="100%" filter="url(#blur)">
                    <div className="w-20 h-20 bg-blue-600 absolute top-[20%] left-[38%]"></div>
                </foreignObject>
            </svg> */}

            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                        {/* <feBlend in="SourceGraphic" in2="goo" /> */}
                        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                    </filter>
                </defs>
                <foreignObject width="100%" height="100%" filter="url(#goo)">
                    <div className="w-20 h-20 bg-black text-white absolute top-[20%] left-[19%] flex justify-center items-center">1st</div>
                    <div className={`w-20 h-20 bg-black text-white absolute top-[20%] left-[19%] flex justify-center items-center
                    ${animate? 'translate-x-[130%] duration-[2.6s]' : 'translate-x-0 duration-1000'}`}>2nd</div>
                </foreignObject>
            </svg>

            <div onClick={() => setAnimate(true)} className="h-fit py-1 px-4 border border-slate-400 rounded-xl cursor-pointer">Click to trigger</div>
            <div onClick={() => setAnimate(false)} className="h-fit py-1 px-4 border border-slate-400 rounded-xl cursor-pointer">Click to reset</div>



            {/* <div className="w-full min-h-screen flex justify-center items-center">
                <div className="flex gap-2" style={{ filter: "contrast(20)" }}>
                    <svg width="100" height="100">
                        <defs>
                            <filter id="gooey">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"/>
                                <feColorMatrix in="blur" mode="matrix" values="
                                    1 0 0 0 0  
                                    0 1 0 0 0  
                                    0 0 1 0 0  
                                    0 0 0 20 -10" result="gooey"
                                />
                                <feComposite in="SourceGraphic" in2="gooey" operator="atop"/>
                            </filter>
                        </defs>

                        <g filter="url(#gooey)">
                            <circle cx="30" cy="30" r="20" fill="blue" />
                            <circle cx="60" cy="30" r="20" fill="blue" />
                        </g>
                    </svg>
                </div>
            </div> */}

            {/* <div className="square w-20 h-20 rounded-full bg-blue-600 "></div> */}
        </div>
    </div>
  )
}