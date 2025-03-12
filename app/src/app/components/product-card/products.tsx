import { Product } from "../../../../interfaces";

export function ProductList({ products }: { products: Product[] }) {
    return (
        <ul  role="list">
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
        <li>
            <h2>{product.name}</h2>
            <div>
                <Image src={product.image}
                    width={100}
                    height={100}
                    alt={`Image of ${product.name}`}
                />
            </div>
            <h3>Diverse</h3>
            <ul>
                
            </ul>
        </li>
    )
}