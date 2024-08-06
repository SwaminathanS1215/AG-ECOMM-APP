import { Component, OnInit, Input, DestroyRef } from '@angular/core';
import { ProductCategoryItem } from '../modal/products.modal';
import { GetProductCategoriesService } from '../services/products/getProductCategories.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-product-categories',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './product-categories.component.html',
  styleUrl: './product-categories.component.css',
})
export class ProductCategoriesComponent implements OnInit {
  @Input({required: true}) page!: string;
  productCategories: ProductCategoryItem[];

  constructor(private productCategoriesService: GetProductCategoriesService, private destroyRef: DestroyRef) {
    this.productCategories = [];
  }

  ngOnInit() {
    const subscription = this.productCategoriesService.getProductCategories().subscribe({
      next: (response: ProductCategoryItem[]) => {
        this.productCategories = response;
      },
      error: (error: any) => {
        alert(error.error.message);
      },
    });
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
