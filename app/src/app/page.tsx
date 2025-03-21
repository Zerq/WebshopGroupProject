"use client";

import { useEffect, useState } from "react";
import { ProductList } from "./components/product-cards/products";
import { Products } from "./actions";
import { ProductResult } from "./types";
import PaginationNav from "./components/navigation/pagination-nav";
import { useSearchParams } from "next/navigation";
import OrderBy from "./components/order-by/orderby";
import FilterByCategory from "./components/filter-by-category/filterByCategory";
import SearchBar from "./components/search/searchbar";
import style from "./page.module.css";

export default function Home() {
  const [state, setState] = useState({ products: [], total: 0 } as ProductResult);
  const [searchQuery, setSearchQuery] = useState('')  // lifting it in
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
      query = query.sortBy(orderBy, order);
    }

    if (toInt(limit) !== null) {
      query = query.limit(toInt(limit)!);
    }

    if (toInt(skip) !== null) {
      query = query.skip(toInt(skip)!);
    }

    query.fetch().then(n => setState(n));


  }, [limit, skip, orderBy, order, filterBy]);


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 

    if (!searchQuery.trim()) { // precent empty string, only white spacing aswell as ?? 
      Products.GetProducts().fetch().then(n => setState(n)); 
      return;
    }

    const filteredProducts = state.products.filter(product =>
product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setState(prev => ({ ...prev, products: filteredProducts }));
  };


  


  const totalLimit = 25;
  const pageCount = Math.ceil(state.total / totalLimit);

  return (
    <div>
      <main>
        <div className={style.ToolPanel}>
          <FilterByCategory></FilterByCategory>
          <OrderBy></OrderBy>
          <SearchBar 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery} 
            handleSubmit={handleSubmit} 
          />
        </div>
        <ProductList products={state.products ?? []} /> // {/*.filter(product => 
          product.title.toLowerCase().includes(searchQuery.toLowerCase()
          ))  - for the "modalsearch "filter for each change in state" If can add usedebouncer men fråga Karl-Axel */}
        <PaginationNav path={"/products"} pagesCount={pageCount} limit={totalLimit}></PaginationNav>
      </main>
    </div>
  );
}