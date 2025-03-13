import { Product } from "./types";

export const fetchProducts = async () => {
    const res = await fetch('https://dummyjson.com/products');
    return await res.json() as Product[];
}



/**
 * this is a basic factory pattern
 */
export class Products {

    #url!: string;
    private constructor() {
        //private constructor so you cant make a instance of it
    }


    //static  method this you can call via Products.GetProducts()
    public static GetProducts(){  
        const inst= new Products();
        inst.#url = "https://dummyjson.com/products?";
        return inst;
    }


    //static  method this you can call via Products.byCategory(some category goes here)
    public static getProductsByCategory(category:string){
        const inst = new Products();
        inst.#url = "https://dummyjson.com/products/category?" + category;
        return inst;
    }

    //this is private and thus not visible outside
    #append(str: string) {
        const newFetch = new Products();
         newFetch.#url = this.#url; 

        if (this.#url.endsWith("?")) {
            newFetch.#url += str;
        }
        else {
            newFetch.#url += "&" + str;
        }
        return newFetch;
    }

    //these methods return instances of the factory class meaning you can chain the metods
    public limit(nr: number) {
        return this.#append("limit=" + nr);
    }

    public skip(nr: number) {
        return this.#append("skip=" + nr);
    }

    public select(...properties: string[]) {
        return this.#append("select=" + properties.join(","));
    }

    public sortBy(sortCriteria:string, order: "asc"|"desc") {
        return this.#append(`sortBy=${sortCriteria}&oirder=${order}`);
    }

    public async fetch(): Promise<Product[]>{
        const res = await fetch(this.#url)
        const data = await res.json();
        return data.products;
    }

}

// example  const product = await Products.GetProducts().limit(30).skip(60).select("title","price").fetch();
