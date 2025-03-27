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
import styles from "./page.module.css";


export default function Home() {

  return 
    <div>
     <main>
        <div className={style.ToolPanel}>
          <FilterByCategory></FilterByCategory>
          <OrderBy></OrderBy>
          <Search/>
        </div>
        <ProductList products={state.products ?? []} />
        <PaginationNav path={"/products"} pagesCount={pageCount} limit={totalLimit}></PaginationNav>
        <div className={styles.categoryWrapper}>Contents of landing page?</div>
        <div className={styles.campaignWrapper}>Contents of landing page?</div>
      </main>
    </div>;
}