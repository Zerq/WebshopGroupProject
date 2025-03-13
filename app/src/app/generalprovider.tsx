"use client";
import { createContext, useState } from "react";
import {  AppModel } from "./types";
import { fetchProducts } from "./actions";

interface GeneralContextInterface {
    state: AppModel;

    setState: (newState: AppModel)=> void;
    getProducts: (limit?: number, skip?: number) => Promise<void>;
    // skip: number;
    // setSkip: (value: number) => void;
}

export const GeneralContext = createContext<GeneralContextInterface | null>(null);

export function GeneralProvider({ children }: { children: React.ReactNode; }) {

    const [state, setState] = useState({ products: [] } as AppModel);

    const getProducts = async (limit= 25, skip=0) => {
        try {
            const data = await fetchProducts(limit, skip);
            if (!Array.isArray(data)) {
                console.error("fetchProducts returned non-array:", data);
                return;
            }
            const newState = Object.assign({}, state) as AppModel;
            newState.products = data;
            setState(newState);
            // setState({ ...state, products: data });
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    return (
        <GeneralContext.Provider value={{ state, setState, getProducts }}>
            {children}
        </GeneralContext.Provider>
    );
}