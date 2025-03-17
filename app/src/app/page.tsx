"use client";
import { useEffect, useState } from "react";
import { ProductList } from "./components/product-cards/products";
import { Products } from "./actions";
import { ProductResult } from "./types";
import PaginationNav from "./components/navigation/pagination-nav";


export default function Home() {
  const [state, setState] = useState({ products: [], total: 0 } as ProductResult);

  useEffect(() => {
    let query = Products.GetProducts();

    const queryParameters = new URLSearchParams(window.location.search)
    const getIntParameter = (name: string, callback: (n: number) => Products) => {
      if (queryParameters.has(name)) { //does this query string paramater exist?
        const val = queryParameters.get(name);

        if (!val) throw new Error(name + " is null");  //dont allow null
        const valAsNumber = Number.parseInt(val);

        if (Number.isNaN(valAsNumber)) Error(`${name} is not a number`); //dont allow non numeric values
        query = callback(valAsNumber);
      }
    }
    getIntParameter("limit", n => query.limit(n))
    getIntParameter("skip", n => query.skip(n));

    query.fetch().then(n => setState(n));
  }, [window.location.search]);


  const limit = 25;
  const pageCount = Math.ceil(state.total / limit);
  return (
    <div>
      <main>
        <ProductList products={state.products ?? []} />
        <PaginationNav path={"/products"} pagesCount={pageCount} limit={limit}></PaginationNav>
      </main>
    </div>
  );
}



