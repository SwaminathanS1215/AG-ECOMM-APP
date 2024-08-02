import { Observable, catchError, throwError } from 'rxjs';
import { ProductsByCategories } from '../../modal/products.modal';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GetProductsByCategoriesService {
  endpoint = 'https://dummyjson.com/products/category/';

  constructor(private http: HttpClient) {}

  getProductsByService(category: string): Observable<ProductsByCategories> {
    return this.http
      .get<ProductsByCategories>(`${this.endpoint}${category}`)
      .pipe(
        catchError((error: any) => {
          return throwError(() => error);
        })
      );
  }
}
