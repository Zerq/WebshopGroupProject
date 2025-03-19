"use client";
import { createContext, useState } from "react";
import {  AppModel } from "./types";

interface GeneralContextInterface {
    state: AppModel;

    setState: (newState: AppModel)=> void;
}

export const GeneralContext = createContext<GeneralContextInterface | null>(null);

export function GeneralProvider({ children }: { children: React.ReactNode; }) {
    const [state, setState] = useState({ products: [] } as AppModel);

    return (
        <GeneralContext.Provider value={{ state, setState}}>
            {children}
        </GeneralContext.Provider>
    );
}