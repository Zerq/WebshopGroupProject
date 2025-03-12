export interface Products {
    pruducts: Product[],
    total: number,
    skip: number,
    limit: number
  }

export interface Product {
    id: number,
    name: string,
    
}