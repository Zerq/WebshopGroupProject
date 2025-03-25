"use client";

import { useEffect, useState } from "react";
import { ProductList } from "./components/product-cards/products";
import { Products } from "./actions";
import { ProductResult } from "./types";
import PaginationNav from "./components/navigation/pagination-nav";
import { useSearchParams } from "next/navigation";
import OrderBy from "./components/order-by/orderby";
import FilterByCategory from "./components/filter-by-category/filterByCategory";
import Search from "./components/search/search";
import style from "./page.module.css";

export default function Home() {
  const [state, setState] = useState({ products: [], total: 0 } as ProductResult);
  const params = useSearchParams();
  const limit = params.get("limit");
  const skip = params.get("skip");
  const orderBy = params.get("orderBy");
  const order = params.get("order");
  const filterBy = params.get("filterBy");
  const searchQuery = params.get("q");

  useEffect(() => {
    const toInt = (val: unknown) => {
      if (typeof (val) !== "string") return null;
      return Number.parseInt(val);
    };

    let query: Products;
    
    if (searchQuery) {
      query = Products.GetProductBySearch(searchQuery);
    } else if (filterBy) {
      query = Products.getProductsByCategory(filterBy);
    } else {
      query = Products.GetProducts();
    }

    
    if (orderBy !== null && (order === "asc" || order === "desc")) {
      query = query.sortBy(orderBy, order);
    }

    if (toInt(limit) !== null) {
      query = query.limit(toInt(limit)!);
    }

    if (toInt(skip) !== null) {
      query = query.skip(toInt(skip)!);
    }
           
    query.fetch().then(n => {
      setState(n);
    });

  }, [limit, skip, orderBy, order, filterBy, searchQuery]);

  const totalLimit = 25;
  const pageCount = Math.ceil(state.total / totalLimit);

  return (
    <div>
      <main>
        <div className={style.ToolPanel}>
          <FilterByCategory></FilterByCategory>
          <OrderBy></OrderBy>
          <Search/>
        </div>
        <ProductList products={state.products ?? []} />
        <PaginationNav path={"/products"} pagesCount={pageCount} limit={totalLimit}></PaginationNav>
      </main>
    </div>
  );
}