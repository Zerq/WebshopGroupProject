"use client";

import { useEffect, useState } from "react";
import { ProductList } from "./components/product-cards/products";
import { Products } from "./actions";
import { ProductResult } from "./types";
import PaginationNav from "./components/navigation/pagination-nav";
import { useSearchParams } from "next/navigation";
import OrderBy from "./components/order-by/orderby";

export default function Home() {
  const [state, setState] = useState({ products: [], total: 0 } as ProductResult);
  const params = useSearchParams();
  const limit = params.get("limit");
  const skip = params.get("skip");
  const orderBy = params.get("orderBy");
  const order = params.get("order");


  useEffect(() => {
    const toInt = (val: unknown) => {
      if (typeof (val) !== "string") return null;
      return Number.parseInt(val);
    };

    let query = Products.GetProducts();

    const queryParameters = new URLSearchParams(window.location.search)
    const getIntParameter = (name: string, callback: (n: number) => Products) => {
      if (queryParameters.has(name)) {
        const val = queryParameters.get(name);

        if (!val) throw new Error(name + " is null");  //dont allow null
        const valAsNumber = Number.parseInt(val);

        if (Number.isNaN(valAsNumber)) Error(`${name} is not a number`); //dont allow non numeric values
        query = callback(valAsNumber);
      }
    }
    getIntParameter("limit", n => query.limit(n))
    getIntParameter("skip", n => query.skip(n));
    if (orderBy !== null && (order === "asc" || order === "desc")) {
      query = query.sortBy(orderBy, order);
    }

    if (toInt(limit) !== null) {
      query = query.limit(toInt(limit)!);
    }

    if (toInt(skip) !== null) {
      query = query.skip(toInt(skip)!);
    }

    query.fetch().then(n => setState(n));


  }, [limit, skip,orderBy,order]);


  const totalLimit = 25;
  const pageCount = Math.ceil(state.total / totalLimit);

  return (
    <div>
      <main>
        <OrderBy></OrderBy>
        <ProductList products={state.products ?? []} />
        <PaginationNav path={"/products"} pagesCount={pageCount} limit={totalLimit}></PaginationNav>
      </main>
    </div>
  );
}