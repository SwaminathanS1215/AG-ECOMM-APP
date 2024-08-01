import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { validatePassword, validateUsername } from './login-validator';
import { LoginService } from '../services/account/login.service';
import { loginResponse } from '../modal/login.modal';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  @Output() registerTrigger = new EventEmitter<string>();

  loginForm = new FormGroup({
    userName: new FormControl<string>('', {
      validators: [
        Validators.required,
        Validators.minLength(6),
        validateUsername,
      ],
    }),
    password: new FormControl<string>('', {
      validators: [Validators.required, Validators.minLength(8)],
    }),
  });

  constructor(private loginService: LoginService) {}

  get isUsernameValid() {
    return (
      this.loginForm.controls.userName.invalid &&
      this.loginForm.controls.userName.touched &&
      this.loginForm.controls.userName.dirty
    );
  }

  get isPasswordValid() {
    return (
      this.loginForm.controls.password.invalid &&
      this.loginForm.controls.password.touched &&
      this.loginForm.controls.password.dirty
    );
  }

  onSubmit() {
    this.loginService
      .login({
        username: this.loginForm.value.userName!,
        password: this.loginForm.value.password!,
      })
      .subscribe({
        next: (data: loginResponse) => {
          console.log(data);
        },
        error: (error: any) => {
          console.error('Error handler', error);
        },
      });
  }

  onRegisterClick() {
    this.registerTrigger.emit('Register');
  }
}