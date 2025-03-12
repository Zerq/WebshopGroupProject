import { createContext } from "react";
import { appModel, appModel as AppModel, Product } from "./types";
import { fetchProducts } from "./actions";

interface GeneralContextInterface {
    state: AppModel;
    getProduct(): Promise<Product[]>
}

export const GeneralContext = createContext<GeneralContextInterface | null>(null);

export function GeneralProvider({ children }: { children: React.ReactNode; }) {

    const getProduct = () => fetchProducts();
    const state = { products: [] } as appModel;

    return (
        <GeneralContext.Provider value={{ state, getProduct }}>
            {children}
        </GeneralContext.Provider>
    );
}