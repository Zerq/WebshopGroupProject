"use client";

import { createContext, useState } from "react";
import { appModel, appModel as AppModel } from "./types";
import { Products } from "./actions";

interface GeneralContextInterface {
    state: AppModel;
    setState: (newState: AppModel) => void;
    getProducts: (callback: (products: Products) => Products) => Promise<void>
    getProductsByCategory: (category: string, callback: (Products: Products) => Products) => Promise<void>;
}

export const GeneralContext = createContext<GeneralContextInterface | null>(null);

export function GeneralProvider({ children }: { children: React.ReactNode; }) {
    const [state, setState] = useState({ products: [] } as appModel);
    const getProducts = async (callback: (products: Products) => Products) => {
        const fetchedProducts = await callback(Products.GetProducts()).fetch();
        const newState = Object.assign({}, state);
        newState.products = fetchedProducts;
        setState(newState);
    };
    const getProductsByCategory = async (category: string, callback: (products: Products) => Products) => {
        const fetchedProducts = await callback(Products.getProductsByCategory(category)).fetch();
        const newState = Object.assign({}, state);
        newState.products = fetchedProducts;
        setState(newState);
    };

    return (
        <GeneralContext.Provider value={{ state, setState, getProducts, getProductsByCategory }}>
            {children}
        </GeneralContext.Provider>
    );
}