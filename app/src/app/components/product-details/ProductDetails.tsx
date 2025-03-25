"use client"
import { Product } from "@/app/types"
import styles from "./product-details.module.css";
import Image from "next/image";
import { generateUniqueId } from "@/app/actions";
import { useCart } from "@/app/cartprovider";

import { Inter } from 'next/font/google'
 
const inter = Inter({ subsets: ['latin'] })
 

export default function ProductDetails({ product }: { product: Product }) {
    const { addToCart } = useCart();
    return (
        <div className={inter.className}>
            <div className={styles.allWrapper}>
                <div className={styles.imageWrapper}>
                    <Image
                        className={styles.image}
                        src={product.images[0]}
                        width={380}
                        height={380}
                        alt={`Image of ${product.title}`}
                    />
                                       
                    <p className={styles.price}>{product.price} kr</p>
                    <div className={styles.btnWrapper}>
                        <button
                            className={styles.btnBuy}
                            aria-label={`knapp för köp`}
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                addToCart(product);
                            }}
                        >
                            Lägg i varukorg
                        </button>
                    </div>
                </div>
                <div className={styles.infoWrapper}>
                    <h2>{product.title}</h2>
                    <h3 className={styles.headersSpacing}>Beskrivning</h3>
                    <p className={styles.descript}>{product.description}</p>
                    <h3 className={styles.headersSpacing}>Reviews:</h3>
                    <ul className={styles.myUL} role="list">
                        {product.reviews.map(review =>
                            <li key={generateUniqueId()}>Betyg: {review.rating} - {review.comment}</li>
                        )}
                    </ul>
                    <h3 className={styles.headersSpacing}>Garanti</h3>
                    <p className={styles.descript}>{product.warrantyInformation}</p>
                    <h3 className={styles.headersSpacing}>Artikelnummer</h3>
                    <p className={styles.descript}>{product.sku}</p>
                    { product.images.length > 1 &&(
                        <ul className={styles.myUL} role="list">
                            <div className={styles.thumbs}>
                                {product.images.map(imm =>
                                    <li key={generateUniqueId()}>
                                        <Image
                                            className={styles.thumb}
                                            src={imm}
                                            width={380}
                                            height={380}
                                            alt={`Image of ${product.title}`}
                                        />

                                    </li>
                                )}
                            </div>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}