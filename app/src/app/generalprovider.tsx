import { createContext, useState } from "react";
import { appModel, appModel as AppModel, Product } from "./types";
import { fetchProducts } from "./actions";

interface GeneralContextInterface {
    state: AppModel;

    setState: (newState: AppModel)=> void;
    getProduct(): Promise<Product[]>;
}

export const GeneralContext = createContext<GeneralContextInterface | null>(null);

export function GeneralProvider({ children }: { children: React.ReactNode; }) {

    const getProduct = () => fetchProducts();
    const [state, setState] =  useState({ products: [] } as appModel);

    return (
        <GeneralContext.Provider value={{ state, setState, getProduct }}>
            {children}
        </GeneralContext.Provider>
    );
}