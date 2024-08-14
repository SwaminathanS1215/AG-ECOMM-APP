import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ProductCategoryItem,
  ProductsByCategories,
} from '../modal/products.modal';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  productCategoriesEndPoint = 'https://dummyjson.com/products/categories';
  productsByCategories = 'https://dummyjson.com/products/category';
  getAllProductsEndPoint: string = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this.http.get(this.getAllProductsEndPoint).pipe(
      catchError((error: any) => {
        return throwError(() => error);
      })
    );
  }

  getProductsCategories(): Observable<ProductCategoryItem[]> {
    return this.http
      .get<ProductCategoryItem[]>(this.productCategoriesEndPoint)
      .pipe(
        catchError((error: any) => {
          return throwError(() => error);
        })
      );
  }

  getProductsByCategory(category: string): Observable<ProductsByCategories> {
    return this.http
      .get<ProductsByCategories>(`${this.productsByCategories}/${category}`)
      .pipe(
        catchError((error: any) => {
          return throwError(() => error);
        })
      );
  }
}
