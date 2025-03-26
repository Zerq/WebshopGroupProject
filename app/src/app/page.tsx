"use client";

import { useEffect, useState } from "react";
import { ProductList } from "./components/product-cards/products";
import { getCampaignIds } from "./actions";
import { ProductResult } from "./types";
import styles from "./page.module.css";
import Image from "next/image";


export default function Home() {
  const productIds: Array<string> = ["1", "2", "3"];
  const [state, setState] = useState({ products: [], total: 0 } as ProductResult);
  const [isDoneLoading, setIsDoneLoading] = useState(false);
  useEffect(() => {
    getCampaignIds(productIds).then(n => {
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
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src="/pask-02.png"
            width={350}
            height={350}
            alt={`Image of Eastern eggs in a basket`}
          />
        </div>
        <div className={styles.chosenProducts}>
          <ProductList products={state.products ?? []} />
        </div>
        {/* <div className={styles.campaignImg}>
          <Image
            className={styles.image}
            src="/pask-02.png"
            width={400}
            height={400}
            alt={`Image of Eastern eggs in a basket`}
          />
        </div> */}
      </div>
    </div>
}