import { ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";

export enum DYNAMIC_ISLAND_STATE {
    IDLE = 'IDLE',
    SUGGESTIVE = 'SUGGESTIVE',
    EXPANDED = 'EXPANDED' 
}

export interface DynamicIslandProps extends React.HTMLAttributes<HTMLDivElement> {}

export type DynamicIslandContextType = {
    state: DYNAMIC_ISLAND_STATE;
    setState: React.Dispatch<SetStateAction<DYNAMIC_ISLAND_STATE>>
}

const INITIAL_DYNAMIC_ISLAND_CONTEXT_DATA: DynamicIslandContextType = {
    state: DYNAMIC_ISLAND_STATE.IDLE,
    setState: () => {},
} as const;

export const DynamicIslandContextType = createContext<DynamicIslandContextType>(INITIAL_DYNAMIC_ISLAND_CONTEXT_DATA);

export default function DynamicIslandProvider({ children }: { children: ReactNode }){
    const [state, setState] = useState<DYNAMIC_ISLAND_STATE>(INITIAL_DYNAMIC_ISLAND_CONTEXT_DATA.state);

    return (
        <DynamicIslandContextType.Provider value={{state, setState}}>
            {children}
        </DynamicIslandContextType.Provider>
    );
}