"use client"
import { ProductList } from "./components/product-cards/products";
import { GeneralContext } from "./generalprovider";
import { useContext, useEffect } from "react";

export default function Home() {
  // const {products} =  await fetchProducts();
  const productsCtx = useContext(GeneralContext);
  if (!productsCtx) throw new Error('context måste användas inom en provider');
  const { state, getProducts } = productsCtx;
  useEffect(() => {
     getProducts();
  })
  console.log("Products state:", state.products);
  const products =  state.products ?? [];
  
  return (
    <div>
      <main>
        <ProductList products={products}/>
      </main>
    </div>
  );
}



