"use client"

import { FC, ReactNode } from "react"
import DynamicIslandProvider from "./dynamicIsland-provider"

const Provider: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <DynamicIslandProvider>
            { children }
        </DynamicIslandProvider>
    )
}

export default Provider;