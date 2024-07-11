import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RESTService {
    URL = 'http://localhost:3002/users';

    constructor(private http: HttpClient) { }

    getAllUsers() : Observable<any> {
        return this.http.get(this.URL);
    }

}
