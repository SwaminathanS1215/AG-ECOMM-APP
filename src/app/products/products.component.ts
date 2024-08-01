import { Component, OnInit } from '@angular/core';
import { GetAllProductsService } from '../services/products/getAllProducts.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products = {};

  constructor(private productService: GetAllProductsService){}

  ngOnInit(){
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
  }
}
