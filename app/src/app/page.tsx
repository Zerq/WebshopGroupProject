"use client";
import styles from "./page.module.css";
import Image from "next/image";


export default function Home() {

  return (
    <div>
     <main>
        <div>
          <ul className={styles.categoryList}>
          <li>
            <Image
              className={styles.product}
              src={'/cosmetic.png'}
              width={380}
              height={380}
              alt={`Bild på skönhetsprodukter`}
            />

            </li>
            <li>
              <Image
                className={styles.product}
                src={'/mascara.png'}
                width={380}
                height={380}
                alt={`Bild på parfym`}
              />

            </li>
            <li>
              <Image
                className={styles.product}
                src={'/9165796_sofa_furniture_icon.svg'}
                width={380}
                height={380}
                alt={`Bild på möbler`}
              />
            </li>
            <li>
              <Image
                className={styles.product}
                src={'/furniture_home_illumination_icon.png'}
                width={380}
                height={380}
                alt={`Bild på möbler`}
              />
            </li>
          </ul>
        </div>
        <div className={styles.campaignWrapper}>Contents of landing page?</div>
      </main>
    </div>
  );
}