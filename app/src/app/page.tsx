"use client";

import { useEffect, useState } from "react";
import { ProductList } from "./components/product-cards/products";
import { getCampaignIds } from "./actions";
import { ProductResult } from "./types";
import styles from "./page.module.css";


export default function Home() {
  const productIds:Array<string> = ["1","2","3"];
  const [state, setState] = useState({ products:[], total:0} as ProductResult);
  const [isDoneLoading, setIsDoneLoading]= useState(false);
  useEffect(() => {
    getCampaignIds(productIds).then(n=> {
      setState(n);
      setIsDoneLoading(true);
    });
  }, [productIds]);


  return !isDoneLoading ? <div className={styles.loadScreen}></div> :
  <div className={styles.allWrapper}>
        <div className={styles.categoryWrapper}>
          Kategori ikoner
        </div>
        <div className={styles.campaignWrapper}>
        <ProductList products={state.products ?? []} />
        </div>
    </div>
}