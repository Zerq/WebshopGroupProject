"use client";
import { createContext, useState } from "react";
import {  AppModel } from "./types";
import { fetchProducts } from "./actions";

interface GeneralContextInterface {
    state: AppModel;
    setState: (newState: AppModel) => void;
    getProducts: (callback: (products: Products) => Products) => Promise<void>
    getProductsByCategory: (category: string, callback: (Products: Products) => Products) => Promise<void>;
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