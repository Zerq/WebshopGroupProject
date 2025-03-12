import Image from "next/image";
import { fetchProducts } from "./actions";

export default async function Home() {
  const {products} =  await fetchProducts()
  return (
    <div>
      <main>
        <ProductList products={products}/>
      </main>
    </div>
  );
}
