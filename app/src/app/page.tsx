"use client";

import { useEffect, useState } from "react";
import { ProductList } from "./components/product-cards/products";
import { getCampaignIds } from "./actions";
import { ProductResult } from "./types";
import styles from "./page.module.css";
import Image from "next/image";
import { CampaignProductList } from "./components/product-cards/campaignProducts";
import { ShowCampaingCategories } from "./components/category-icons/categoryIcons";


export default function Home() {
  const [state, setState] = useState({ products: [], total: 0 } as ProductResult);
  const [isDoneLoading, setIsDoneLoading] = useState(false);
  useEffect(() => {
    const productIds: Array<string> = ["1", "2", "3", "8"];
    getCampaignIds(productIds).then(n => {
      setState(n);
      setIsDoneLoading(true);
    });
  }, []);


  return !isDoneLoading ? <div className={styles.loadScreen}></div> : (
    <div className={styles.allWrapper}>
      <div>
      <ShowCampaingCategories/>
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
          <div className={styles.overlay}>
            <h1>Oslagbara priser<br />under hela <br />Påsk kampanjen</h1>
          </div>
        </div>
        <div className={styles.chosenProducts}>
          <h1 className={styles.advertText}>25% rabatt på föjande varor under Påsken!</h1>
          <CampaignProductList products={state.products ?? []} />
        </div>
      </div>
    </div>
  );
}