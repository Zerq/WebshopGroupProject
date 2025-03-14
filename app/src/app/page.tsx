"use client";
import { useEffect, useState } from "react";
import { ProductList } from "./components/product-cards/products";
import { Product } from "./types";
import { Products } from "./actions";

export default function Home() {
  const [state, setState] = useState([] as Product[]);
  const limit= 30;
  const skip = 60;

  useEffect(() =>{ 
    Products.GetProducts().limit(limit).skip(skip).fetch().then(n=> setState(n));
   }, []);

  return (
    <div>
      <main>
        <ProductList products={state ?? []} />
      </main>
    </div>
  );
}
