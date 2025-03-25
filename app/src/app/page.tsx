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
  const [isDoneLoading, setIsDoneLoading] = useState(true);


  // useEffect(() => {
  //   const toInt = (val: unknown) => {
  //     if (typeof (val) !== "string") return null;
  //     return Number.parseInt(val);
  //   };

  //   let query:Products;
    
  //   const timeout = setTimeout(() => { 
  //     setIsDoneLoading(false);
  //   }, (200));

  //   query.fetch().then(n => {
  //     clearTimeout(timeout);
  //     setState(n)
  //     setIsDoneLoading(true);
  //   });
  // }, []);


  return !isDoneLoading ? <div className={style.loadScreen}></div> :
    <div>
     <main>
        <div className="categoryWrapper">Contents of landing page?</div>
        <div className="campaignWrapper">Contents of landing page?</div>
      </main>
    </div>;
}