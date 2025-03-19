import Image from "next/image";
import styles from "./cards.module.css";
import { CartItem } from "../../types";
import { useCart } from "@/app/generalprovider";

export function ProductList({ products }: { products: CartItem[] }) {
    return (
        <ul className={styles.cards} role="list">
            {products.map(product =>
                <Card key={product.id} product={product} />
            )}
        </ul>
    )
}

export function Card({ product }: { product: CartItem }) {
    // const product = props.product
    const { addToCart } = useCart();
    return (
        <li className={styles.card}>
            <h2>{product.title}</h2>
            <div className={styles.imageWrapper}>
                <Image className={styles.image} src={product.images[0]}
                    width={80}
                    height={80}
                    alt={`Image of ${product.title}`}
                />
            </div>
            <div className={styles.lowerHalf}>
                <div>
                    <div>
                        <p className={styles.paraD}>Pris:</p>{product.price} kr
                    </div>
                    <div>
                        <p className={styles.paraD}>Kundbetyg:</p>{product.rating} av 5
                    </div>
                    <p className={styles.paraSmall}>{product.description}</p>
                </div>
                <div className={styles.btnsWrapper}>
                    <button className={styles.btnSeeDetails} aria-label={`Se detaljer om ${product.title}`}>Se detaljer</button>
                    <button className={styles.btnBuy} aria-label={`knapp för köp`} onClick={() => addToCart(product)}>Köp</button>
                </div>
            </div>
        </li>
    )
}