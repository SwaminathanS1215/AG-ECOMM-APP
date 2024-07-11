import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { ProductsDataService } from '../services/ProductsData.service';

// Product interface
export interface Product {
    productId: string;
    productName: string;
    cost: number;
}

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    products: Array<Product> = [];

    // Dependency Injection in constructor
    constructor(private productService: ProductsDataService, private loggerService: LoggerService) { }

    ngOnInit(): void {
    }
    // function to get products data from service
    getProducts() {
        this.loggerService.log('Info', 'Going to read the products data');
        this.products = this.productService.getAllProducts();

        if (this.products.length === 0) {
            this.loggerService.log('Error', 'Unable to read the data, please try again');
        } else {
            this.loggerService.log('Info', 'Loaded the data from server');
        }
    }

}
