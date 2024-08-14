import { Injectable, inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  loginDetails,
  loginResponse,
  AddNewUser,
  AddNewUserResponse,
} from '../modal/account.modal';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private http = inject(HttpClient);
  loginEndPoint = 'https://dummyjson.com/auth/login';
  resgisterUserEndpoint = 'https://dummyjson.com/users/add';

  login(loginCreds: loginDetails): Observable<loginResponse> {
    return this.http.post<loginResponse>(this.loginEndPoint, loginCreds).pipe(
      catchError((error: any) => {
        return throwError(() => error);
      })
    );
  }

  addNewUser(userData: AddNewUser): Observable<AddNewUserResponse> {
    return this.http
      .post<AddNewUserResponse>(this.resgisterUserEndpoint, userData)
      .pipe(
        catchError((error: any) => {
          return throwError(() => error);
        })
      );
  }
}
