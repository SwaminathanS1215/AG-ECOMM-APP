import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ProductItem, ProductsByCategories } from '../modal/products.modal';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductCategoriesComponent } from '../product-categories/product-categories.component';
import { ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';
import { LoaderComponent } from '../shared/components/loader/loader.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ProductCardComponent,
    ProductCategoriesComponent,
    LoaderComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  // category = RouterInput.required<string>();
  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);
  category: string;
  products: ProductItem[];
  showLoader: boolean;

  constructor(private productsService: ProductsService) {
    this.products = [];
    this.category = '';
    this.showLoader = true;
  }

  ngOnInit() {
    const subscription = this.activatedRoute.paramMap.subscribe({
      next: (paramMap: ParamMap) => {
        this.category = paramMap.get('category')!;
        this.showLoader = true;
        this.productsService.getProductsByCategory(this.category).subscribe({
          next: (response: ProductsByCategories) => {
            this.products = response.products;
            this.showLoader = false;
          },
          error: (error: any) => {
            this.showLoader = false;
          },
        });
      },
    });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
