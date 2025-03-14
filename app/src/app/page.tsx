"use client";
import { useContext, useEffect } from "react";
import { ProductList } from "./components/product-cards/products";
import { GeneralContext } from "./generalprovider";

export default function Home() {

  
  const Context = useContext(GeneralContext);
  if (!Context) throw new Error('GeneralContext måste användas inom en GeneralProvider');
  const { state, getProducts } = Context;

  useEffect(()=> {
    (async ()=> {
      await getProducts(n=> n.limit(20).skip(40));
    })()
  })  


  return (
    <div>
      <main>
        <ProductList products={state?.products ?? []}/>
      </main>
    </div>
  );
}



