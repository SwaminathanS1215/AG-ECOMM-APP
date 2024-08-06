import { EventEmitter, Injectable, Output, afterNextRender, afterRender } from '@angular/core';
import { loginResponse } from '../modal/login.modal';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  @Output() checkIfUserLoggedIn = new EventEmitter<boolean>();

  private isAuthenticated = false;

  constructor(private router: Router) {
    afterNextRender(() => {
      this.isAuthenticated = !!localStorage.getItem('activeUser');
    });
  }

  isAuthenticatedUser(): boolean {
    this.checkIfUserLoggedIn.emit(this.isAuthenticated);
    return this.isAuthenticated;
  }

  login(userData: loginResponse) {
    this.isAuthenticated = true;
    this.checkIfUserLoggedIn.emit(this.isAuthenticated);
    this.router.navigate([localStorage.getItem('previousUrl') || '/']);
    localStorage.setItem('activeUser', JSON.stringify(userData));
  }

  logout() {
    this.isAuthenticated = false;
    this.checkIfUserLoggedIn.emit(this.isAuthenticated);
    localStorage.removeItem('activeUser');
    this.router.navigate(['/']);
  }
}
