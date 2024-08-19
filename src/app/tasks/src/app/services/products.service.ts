import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductCategoryItem } from '../model/products.model';
import { catchError, throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  productCategoriesEndPoint = 'https://dummyjson.com/products/categories';
  constructor(private http: HttpClient) {}

  getProductCategories(): Observable<ProductCategoryItem[]> {
    return this.http
      .get<ProductCategoryItem[]>(this.productCategoriesEndPoint)
      .pipe(
        catchError((err: any) => {
          return throwError(() => err);
        })
      );
  }
}
