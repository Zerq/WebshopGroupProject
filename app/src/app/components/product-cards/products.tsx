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

interface cardProps{
    product: Product
}
//Send props to the component
//export function Card({ recipe }: { recipe: Recipe }) {
    export function Card(props: cardProps) {
        const product = props.product
        return (
        <li className={styles.card}>
            <h2>{product.title}</h2>
            <div>
            <Image className={styles.image} src={product.images[0]}
                    width={100}
                    height={100}
                    alt={`Image of ${product.title}`}
                />
            </div>
            <h3>Diverse</h3>
            <ul>
                
            </ul>
        </li>
    )
}