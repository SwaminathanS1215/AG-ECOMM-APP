import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce-portal-ag';
}
