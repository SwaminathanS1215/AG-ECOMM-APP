import { Injectable, inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { loginDetails, loginResponse } from '../../modal/login.modal';

@Injectable({ providedIn: 'root' })
export class LoginService {
  loginEndPoint = 'https://dummyjson.com/user/login';
  private http = inject(HttpClient);

  login(loginCreds: loginDetails): Observable<loginResponse> {
    return this.http.post<loginResponse>(this.loginEndPoint, loginCreds).pipe(
      catchError((error: any) => {
        console.error('An error occured', error);
        return throwError(() => error);
      })
    );
  }
}
