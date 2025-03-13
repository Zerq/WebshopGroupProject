"use client";

import { createContext, useState } from "react";
import { appModel, appModel as AppModel } from "./types";

interface GeneralContextInterface {
    state: AppModel;
    setState: (newState: AppModel) => void;
}

export const GeneralContext = createContext<GeneralContextInterface | null>(null);

export function GeneralProvider({ children }: { children: React.ReactNode; }) {
    const [state, setState] = useState({ products: [] } as appModel);

    return (
        <GeneralContext.Provider value={{ state, setState}}>
            {children}
        </GeneralContext.Provider>
    );
}