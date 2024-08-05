import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterUserService } from '../services/account/register.service';
import { AddNewUserResponse } from '../modal/register.modal';
import {
  checkPasswordAndConfirmPasswordValid,
  checkPasswordValid,
} from './register.validator';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  isPasswordValid: boolean;
  isPasswordAndConfirmPasswordSame: boolean;

  constructor(private registerService: RegisterUserService) {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.username = '';
    this.password = '';
    this.confirmPassword = '';
    this.isPasswordValid = false;
    this.isPasswordAndConfirmPasswordSame = false;
  }

  onRegister() {
    this.registerService
      .addNewUser({
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        username: this.username,
        password: this.password,
      })
      .subscribe({
        next: (response: AddNewUserResponse) => {
          console.log(response);
          alert('Registered successfully, Please login now');
        },
        error: (error: any) => {
          alert(error.error.message);
          console.error('An error occured', error);
        },
      });
  }

  checkPassword() {
    this.isPasswordValid = checkPasswordValid(this.password);
  }

  checkPasswordAndConfirmPassword() {
    this.isPasswordAndConfirmPasswordSame =
      checkPasswordAndConfirmPasswordValid(this.password, this.confirmPassword);
  }
}
