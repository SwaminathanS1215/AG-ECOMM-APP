import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { ProductCategoriesComponent } from '../product-categories/product-categories.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ProductCategoriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
