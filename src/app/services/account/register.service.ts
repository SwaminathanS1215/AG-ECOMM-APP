import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { AddNewUserResponse, AddNewUser } from '../../modal/register.modal';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class RegisterUserService {
  resgisterUserEndpoint = 'https://dummyjson.com/users/add';

  constructor(private http: HttpClient) {}

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
