"use client"

import { fetchProducts, Products } from "@/app/actions";
import { ProductResult } from "@/app/types";
import { useEffect, useState } from "react";


export default function ProductDetail() {
    const [product, setProduct] = useState({ products: [], total: 0 } as ProductResult);
    const [error, setError] = useState<string | null>(null);

    // useEffect(() => {
    //     console.log("Fetching products data...");
    //     const loadData = async () => {
    //         try {
    //             const data = Products.GetProducts();
    //             setProduct(data);
    //         }
    //         catch (err) {
    //             setError("Kunde inte ladda produkterna. Försök igen senare");
    //             console.error("Fetch error:", err);
    //         }
    //     };
    //         loadData();

    //     }, []);

    return (
        <div>
            <h2>Produktdetaljer för ...</h2>
        </div>
    )
}