import { Product } from "./types";

export const fetchProducts = async () => {
    const res = await fetch('https://dummyjson.com/products');
    return await res.json() as Product[];
}
