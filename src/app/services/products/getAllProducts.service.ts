import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class GetAllProductsService {
    getAllProductsEndPoint: string = 'https://dummyjson.com/products';

    constructor(private http: HttpClient){}

    getAllProducts(): Observable<any>{
        return this.http.get(this.getAllProductsEndPoint);
    }
}