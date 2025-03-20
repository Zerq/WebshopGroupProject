import { fetchProduct, Products } from "@/app/actions";

let productData = fetchProduct();
console.log(productData);

export default function ProductDetail(){
    return(
        <div>
            <h2>Produktdetaljer för ...</h2>
        </div>
    )
}