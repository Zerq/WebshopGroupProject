"use client";

import { useEffect, useState } from "react";
import { ProductList } from "./components/product-cards/products";
import { Products } from "./actions";
import { ProductResult } from "./types";
import PaginationNav from "./components/navigation/pagination-nav";
import { useSearchParams } from "next/navigation";
import OrderBy from "./components/order-by/orderby";
import FilterByCategory from "./components/filter-by-category/filterByCategory";
import SearchBar from "./components/top-navigation/SearchBar";
import style from "./page.module.css";
export default function Home() {
  const [state, setState] = useState({ products: [], total: 0 } as ProductResult);
  const [isDoneLoading, setIsDoneLoading] = useState(false);
  const params = useSearchParams();
  const limit = params.get("limit");
  const skip = params.get("skip");
  const orderBy = params.get("orderBy");
  const order = params.get("order");
  const filterBy = params.get("filterBy");

  useEffect(() => {
      const toInt = (val: unknown) => {
        if (typeof (val) !== "string") return null;
        return Number.parseInt(val);
      };

    let query:Products;
    
    if (filterBy === null){
      query = Products.GetProducts();
    }else {
      query = Products.getProductsByCategory( filterBy);

    }
    
      if (orderBy !== null && (order === "asc" || order === "desc")) {
        query = query.sortBy(orderBy, order); setIsDoneLoading(true);
      }

      if (toInt(limit) !== null) {
        query = query.limit(toInt(limit)!);
      }

      if (toInt(skip) !== null) {
        query = query.skip(toInt(skip)!);
      }

      const timeout = setTimeout(() => { // only render loading screen if request tameks more then 200 miliseconds
        setIsDoneLoading(false); 
      }, (200));


      query.fetch().then(n => {
        clearTimeout(timeout); 
        setState(n)
        setIsDoneLoading(true);
      });
    }, [limit, skip, orderBy, order, filterBy]);


  const totalLimit = 25;
  const pageCount = Math.ceil(state.total / totalLimit);

  return !isDoneLoading ? <><div className={style.loadScreen}></div>
    <div>
      <main>
        <div className={style.ToolPanel}>
          <FilterByCategory></FilterByCategory>
          <OrderBy></OrderBy>
          <SearchBar />
        </div>
        <ProductList products={state.products ?? []} />
        <PaginationNav path={"/products"} pagesCount={pageCount} limit={totalLimit}></PaginationNav>
      </main>
    </div>
  </> :
    <div>
      <main>
        <OrderBy></OrderBy>
        <ProductList products={state.products ?? []} />
        <PaginationNav path={"/products"} pagesCount={pageCount} limit={totalLimit}></PaginationNav>
      </main>
    </div>;
}