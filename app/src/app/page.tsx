"use client";
import {  useEffect, useState } from "react";
import { ProductList } from "./components/product-cards/products";
import { Products } from "./actions";
import { ProductResult } from "./types";
import PaginationNav from "./components/navigation/pagination-nav";


export default function Home() {
  const [state, setState] = useState({ products: [], total: 0 } as ProductResult);
  let query = Products.GetProducts();
  const queryParameters = new URLSearchParams(window.location.search)

  
  if (queryParameters.has("limit")) {
    const limit = queryParameters.get("limit");
    if (!limit) throw new Error("Limit is null");
    const numberLimit = Number.parseInt(limit);
    if (Number.isNaN(numberLimit)) Error("Limit is not a number");
    query = query.limit(numberLimit);
  }

  if (queryParameters.has("skip")) {
    const skip = queryParameters.get("skip");
    if (!skip) throw new Error("Skip is null");
    const numberSkip = Number.parseInt(skip);
    if (Number.isNaN(numberSkip)) Error("Skip is not a number");
    query = query.skip(numberSkip);
  }


  useEffect(() => {
    query.fetch().then(n => setState(n));
  }, [query]);
const limit = 25;
  const pageCount = Math.round(state.total/limit);
  return (
    <div>
      <main>
        <ProductList products={state.products ?? []} />
        <PaginationNav path={"/products"} pagesCount={pageCount} limit={limit}></PaginationNav>
      </main>
    </div>
  );
}



