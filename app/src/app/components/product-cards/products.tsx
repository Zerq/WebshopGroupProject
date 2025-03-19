import Image from "next/image";
import styles from "./cards.module.css";
import { Product } from "../../types";

export function ProductList({ products }: { products: Product[] }) {
    return (
        <ul className={styles.cards} role="list">
            {products.map(product =>
                <Card key={product.id} product={product} />
            )}
        </ul>
    )
}

interface cardProps {
    product: Product
}
//Send props to the component
//export function Card({ recipe }: { recipe: Recipe }) {
export function Card(props: cardProps) {
    const product = props.product
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
                    <button className={styles.btnSeeDetails}>Se detaljer</button>
                    <button className={styles.btnBuy}>Köp</button>
                </div>
            </div>
        </li>
    )
}