import { Product } from "./types";

export const fetchProducts = async (limit = 25, skip = 0) => {
    const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
    const data = await res.json();
    return data.products;
}

