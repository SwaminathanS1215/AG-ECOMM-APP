import { Injectable } from '@angular/core';
import { Product } from '../products/products.component';

@Injectable({
    providedIn: 'root'
})
export class ProductsDataService {
    // Products Data
    products: Product[] = [
        { productId: 'SAM-TV-001', productName: 'SAMSUNG 4K Smart TV 40"', cost: 50000 },
        { productId: 'SAM-TV-002', productName: 'SAMSUNG LED TV 33"', cost: 35000 },
        { productId: 'SONY-TV-001', productName: 'SONY 4K Smart TV 56"', cost: 75000 },
        { productId: 'SONY-TV-002', productName: 'SONY LED TV 29"', cost: 35000 },
        { productId: 'LG-TV-001', productName: 'LG 4K Smart TV 46', cost: 50000 },
    ];

    constructor() { }

    // Function to get all products
    getAllProducts(): Product[] {
        return this.products;
    }

}
