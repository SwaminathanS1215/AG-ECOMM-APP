import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'products/:category',
    loadComponent: () =>
      import('./products/products.component').then(
        (mod) => mod.ProductsComponent
      ),
    title: 'Products',
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./cart/cart.component').then((mod) => mod.CartComponent),
    title: 'Cart',
  },
  {
    path: 'account',
    loadComponent: () =>
      import('./account-dialog/account-dialog.component').then(
        (mod) => mod.AccountDialogComponent
      ),
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./login/login.component').then((mod) => mod.LoginComponent),
        title: 'Login',
        data: { title: 'Login' },
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./register/register.component').then(
            (mod) => mod.RegisterComponent
          ),
        title: 'Register',
        data: { title: 'Register' },
      },
    ],
  },
];
