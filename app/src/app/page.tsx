"use client";
import { useState, useEffect } from "react";
import { ProductList } from "./components/product-cards/products";
import { Product } from "./types";
import { Products } from "./actions";

export default function Home() {

  const [state, setState] = useState([] as Product[]);

  useEffect(() => {
    Products.GetProducts().limit(20).skip(40).fetch().then(n => setState(n));
  },[])

  return (
    <div>
      <main>
        <ProductList products={state ?? []} />
      </main>
    </div>
  );
}
