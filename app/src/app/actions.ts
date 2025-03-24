'use server';
import { loginSchema } from "./validation";
import { z } from "zod";
import { ProductResult } from "./types";

export function generateUniqueId(){
    const randomInt = getRandomInt(1, 1000);
    return randomInt;
}

function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

export const fetchProduct = async (id: string) => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    return data;
}

export const fetchProducts = async (limit = 25, skip = 0) => {
    const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
    const data = await res.json();
    return data.products;
}

export const FetchCategories = async () => {
    const res = await fetch('https://dummyjson.com/products/category-list');
    const data = await res.json();
    return data as string[];
};


/**
 * this is a basic factory pattern
 */
export class Products {

    #url!: string;
    private constructor() {
        //private constructor so you cant make a instance of it
    }


    //static  method this you can call via Products.GetProducts()
    public static GetProducts() {
        const inst = new Products();
        inst.#url = "https://dummyjson.com/products?";
        return inst;
    }


    //static  method this you can call via Products.byCategory(some category goes here)
    public static getProductsByCategory(category: string) {
        const inst = new Products();
        inst.#url = `https://dummyjson.com/products/category/${category}?`;
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

    public sortBy(sortCriteria: string, order: "asc" | "desc") {
        return this.#append(`sortBy=${sortCriteria}&order=${order}`);
    }

    public async fetch(): Promise<ProductResult> {
        const res = await fetch(this.#url)
        const data = await res.json();
        return data;
    }

}


export class Authentication {

    public static async createUser(firstName: string, lastName: string, age: number, email: string) {
        fetch('https://dummyjson.com/users/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                age: age,
                email: email
            })
        })
            .then(res => res.json())
            .then(console.log);
    }

    public static async Login(username: string, password: string) {
        try {
            console.log(username, password);
            const res = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    expiresInMins: 30,
                }),
                // credentials: 'include'
            });

            if (!res.ok) {
                throw new Error(`Login failed: ${res.status} ${res.statusText}`);
            }

            const data = await res.json();
            console.log('Login successful:', data);

            // Spara token i localStorage
            localStorage.setItem('accessToken', data.token);

            return data; // Returnera data om anroparen behöver den
        } catch (error) {
            console.error('Error:', error);
            throw error; // Skicka vidare felet så anroparen kan hantera det
        }
    }

    public static async GetUserProfile() {
        const token = localStorage.getItem('accessToken');

        const res = await fetch('https://dummyjson.com/auth/me', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        const data = await res.json();
        console.log('User Profile:', data);
    }  
}