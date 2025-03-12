import Image from "next/image";
import { fetchProducts } from "./actions";
import { ProductList } from "./components/product-cards/products";

export default async function Home() {
  const {products} =  await fetchProducts();
  
  return (
    <div>
      <main>
        <ProductList products={products}/>
      </main>
    </div>
  );
}
