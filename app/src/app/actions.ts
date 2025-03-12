import { Product } from "./types";

export const fetchProducts = async () => {
    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json() as Product[];