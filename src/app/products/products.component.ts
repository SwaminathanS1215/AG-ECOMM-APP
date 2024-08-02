import { Component, OnInit, Input as RouterInput } from '@angular/core';
import { GetProductsByCategoriesService } from '../services/products/getProductsByCategories.service';
import { ProductItem, ProductsByCategories } from '../modal/products.modal';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductCategoriesComponent } from '../product-categories/product-categories.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent, ProductCategoriesComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  @RouterInput() category!: string;

  products: ProductItem[];

  constructor(private productsService: GetProductsByCategoriesService) {
    this.products = [];
  }

  ngOnInit() {
    this.productsService.getProductsByService(this.category).subscribe({
      next: (response: ProductsByCategories) => {
        this.products = response.products;
        console.log(response);
      },
      error: (error: any) => {},
    });
  }
}
