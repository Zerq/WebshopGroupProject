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
        const recipe = props.product
        return (
        <li>
            <h2>{recipe.name}</h2>
            <div>
                <Image src={recipe.image}
                    width={100}
                    height={100}
                    alt={`Image of ${recipe.name}`}
                />
            </div>
            <h3>Ingredients</h3>
            <ul>
                {recipe.ingredients.map((ingredient, index) =>
                    <li key={index}>{ingredient}</li>)}
            </ul>
            <h3>Instructions</h3>
            <ol>
                {recipe.instructions.map((instruction, index) =>
                    <li key={index}>{instruction}</li>)}
            </ol>
        </li>
    )
}