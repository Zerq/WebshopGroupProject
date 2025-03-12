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