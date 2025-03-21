"use client"
import { Product } from "@/app/types"

export default function ProductDetails({ product }: { product: Product }) {
    console.log(product);
    return(
        <>
        <div>
            <h2>Produktdetaljer för {product.title}</h2>
        </div>
        </>
    )
}