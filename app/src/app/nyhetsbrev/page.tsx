"use client";

import { useEffect, useState } from "react";
import { ProductList } from "../components/product-cards/products";
import { Products } from "../actions";
import { ProductResult } from "../types";
import PaginationNav from "../components/navigation/pagination-nav";
import { useSearchParams } from "next/navigation";
import OrderBy from "../components/order-by/orderby";
import FilterByCategory from "../components/filter-by-category/filterByCategory";
import SearchBar from "../components/top-navigation/SearchBar";
import style from "./page.module.css";


export default function NyhetsbrevPage() {
  const [state, setState] = useState({ products: [], total: 0 } as ProductResult);
  const [isDoneLoading, setIsDoneLoading] = useState(true);

  const totalLimit = 25;
  const pageCount = Math.ceil(state.total / totalLimit);

  return !isDoneLoading ? <div className={style.loadScreen}></div> :
    <div>
     <main>
        <div>Contents of newsletter</div>
      </main>
    </div>;
}