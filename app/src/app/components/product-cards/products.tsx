import Image from "next/image";
import styles from "./cards.module.css";
import { Product } from "../../types";
import PaginationNav from "../navigation/pagination-nav";

export function ProductList({ products }: { products: Product[] }) {
    if (!Array.isArray(products)) {
        console.error("products is not an array:", products);
        return <p>No products available</p>;
    }
    return (
        <><ul className={styles.cards} role="list">
            {products.map(product => <Card key={product.id} product={product} />
            )}
        </ul>
        <PaginationNav path={"/products"} pagesCount={20} limit={25}></PaginationNav></>
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
                    <p className={styles.paraD}>Kundomdöme: </p>{product.rating} av 5
                    </div>
                    <p>{product.description}</p>
                </div>
                <div>
                    <button className={styles.btnAddToCart}>Lägg i kundvagn</button>
                </div>
            </div>
        </li>
    )
}