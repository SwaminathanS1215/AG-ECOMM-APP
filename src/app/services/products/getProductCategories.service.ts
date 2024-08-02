import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ProductCategoryItem } from '../../modal/products.modal';

@Injectable({ providedIn: 'root' })
export class GetProductCategoriesService {
  productCategoriesEndPoint = 'https://dummyjson.com/products/categories';

  constructor(private http: HttpClient) {}

  getProductCategories(): Observable<ProductCategoryItem[]> {
    return this.http
      .get<ProductCategoryItem[]>(this.productCategoriesEndPoint)
      .pipe(
        catchError((error: any) => {
          return throwError(() => error);
        })
      );
  }
}
