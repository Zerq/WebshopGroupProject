
export interface AppModel {
    products: Product[]   
}

export interface ProductResult {
    products: Product[],
    total: number
}

export interface Dimensions {
    width: number;
    height: number;
    depth: number;
}

export interface Meta {
    createdAt: string,
    updatedAt: string,
    barcode: string,
    qrCode: string
}

export interface Rating {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}

export interface Product {
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    tags: string[],
    brand: string,
    sku: string,
    weight: number,
    dimensions: Dimensions,
    warrantyInformation: string,
    shippingInformation: string,
    availabilityStatus: string,
    reviews: Rating[]
    returnPolicy: string,
    minimumOrderQuantity: number,
    meta: Meta,
    images: string[], 
    thumbnail: string
}

export interface CartItem{
    id: number,
    title: string,
    images: string[],
    price: number,
    quantity: number
}

export interface CartContextType{
    cartItems: CartItem[];
    addToCart: (product: Product) => void;
    incrementCartItem: (id: number) => void;
    decrementCartItem: (id: number) => void;
    removeCartItem: (id: number) => void;

}


/**
 * this is an abstract class in typescript is kind of a bit fat lie 
 * a real abstact class is a bit like a mix between a class and an interface
 * any property or method marked abstract lacks a concrete implementation and has to be implemented... 
 * i am pretty sure typescript is just making this into a regular javascript proptotype with method that throw not implemented errors
 * then its enforcing that in the typescript tooling so it behaves like an abstract class
 * more importantly this means it a real prototype.... unlike an interface or type declaration that has no reality run time.
 */
export abstract class NewsLetterService {
    abstract register(email: string): Promise<void>;
    abstract unRegister(email: string): Promise<void>;
}
export abstract class EmailService {
    abstract register(email: string): Promise<void>;

}
