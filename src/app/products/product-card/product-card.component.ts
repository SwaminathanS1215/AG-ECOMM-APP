import { Component, Input } from '@angular/core';
import { ProductItem } from '../../modal/products.modal';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input({ required: true }) productItem!: ProductItem;
}
