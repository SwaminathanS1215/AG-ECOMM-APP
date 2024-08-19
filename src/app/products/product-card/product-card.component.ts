import { Component, Input } from '@angular/core';
import { ProductItem } from '../../modal/products.modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input({ required: true }) productItem!: ProductItem;
  @Input({ required: true }) category!: String;

  constructor(private router: Router) {}

  navigateToProductDetailsPage(productId: number) {
    this.router.navigate([]).then((result) => {
      window.open(
        `product-category/${this.category}/products/${productId.toString()}`,
        '_blank'
      );
    });
  }
}
