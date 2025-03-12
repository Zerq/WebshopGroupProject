export interface Products {
    pruducts: Product[],
    total: number,
    skip: number,
    limit: number
  }

export interface Product {
    id: number,
    title: string
    images: string[],
}

// {
//     id: 30,
//     title: 'Kiwi',
//     description: 'Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.',
//     category: 'groceries',
//     price: 2.49,
//     discountPercentage: 10.32,
//     rating: 4.37,
//     stock: 1,
//     tags: [Array],
//     sku: '0X3NORB9',
//     weight: 8,
//     dimensions: [Object],
//     warrantyInformation: '6 months warranty',
//     shippingInformation: 'Ships in 3-5 business days',
//     availabilityStatus: 'Low Stock',
//     reviews: [Array],
//     returnPolicy: '7 days return policy',
//     minimumOrderQuantity: 8,
//     meta: [Object],
//     images: [Array],
//     thumbnail: 'https://cdn.dummyjson.com/products/images/groceries/Kiwi/thumbnail.png'
//   }