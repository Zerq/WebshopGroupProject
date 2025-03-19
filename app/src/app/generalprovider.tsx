"use client";
// import { AppModel, } from "./types";
import { createContext, useContext, useState, ReactNode } from "react";
import { CartContextType, CartItem } from "./types";

// interface GeneralContextInterface {
//     state: AppModel;

//     setState: (newState: AppModel)=> void;
// }
export const GeneralContext = createContext<CartContextType | null>(null);

export function GeneralProvider({ children }: { children: ReactNode; }) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (product: CartItem) => {
        setCartItems((prev) => {
            const existingIndex = prev.findIndex((item) => item.id === product.id);
            if (existingIndex !== -1) {
                return prev.map((item, index) =>
                    index === existingIndex
                        ? { ...item, quantity: item.quantity + 1 } // Uppdatera quantity om produkten finns
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }]; // Lägg till produkt med quantity: 1 om den inte finns
        });
    };
    const incrementCartItem = (id: number) => {
        setCartItems((prevCart) => {
            return prevCart.map((item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
            );
        })
    }

    const decrementCartItem = (id: number) => {
        setCartItems((prevItems) =>
            prevItems.map(item =>
                item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
    };

    const removeCartItem = (id: number) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
    };

    return (
        <GeneralContext.Provider value={{ cartItems, addToCart, incrementCartItem, decrementCartItem, removeCartItem }}>
            {children}
        </GeneralContext.Provider>
    );
}

export function useCart() {
    const context = useContext(GeneralContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider")
    }
    return context;
}