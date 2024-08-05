import {
  Component,
  DestroyRef,
  OnInit,
  input as RouterInput,
  inject,
} from '@angular/core';
import { GetProductsByCategoriesService } from '../services/products/getProductsByCategories.service';
import { ProductItem, ProductsByCategories } from '../modal/products.modal';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductCategoriesComponent } from '../product-categories/product-categories.component';
import { ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent, ProductCategoriesComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  // category = RouterInput.required<string>();
  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);
  category: string;
  products: ProductItem[];

  constructor(private productsService: GetProductsByCategoriesService) {
    this.products = [];
    this.category = '';
  }

  ngOnInit() {
    const subscription = this.activatedRoute.paramMap.subscribe({
      next: (paramMap: ParamMap) => {
        this.category = paramMap.get('category')!;

        this.productsService.getProductsByService(this.category).subscribe({
          next: (response: ProductsByCategories) => {
            this.products = response.products;
          },
          error: (error: any) => {},
        });
      },
    });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
