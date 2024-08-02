import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'products/:category',
        loadComponent: () => import('./products/products.component').then(mod => mod.ProductsComponent),
    }
];
