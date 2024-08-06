import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  inject,
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
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [ReactiveFormsModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  @Output() registerTrigger = new EventEmitter<string>();
  private router = inject(Router);

  loginForm = new FormGroup({
    userName: new FormControl<string>('', {
      validators: [Validators.required, validateUsername],
    }),
    password: new FormControl<string>('', {
      validators: [Validators.required, Validators.minLength(8)],
    }),
  });

  constructor(
    private loginService: LoginService,
    private authService: AuthService
  ) {}

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
          alert('Logged in successfully');
          this.authService.login(data);
        },
        error: (error: any) => {
          alert(error.error.message);
        },
      });
  }

  onRegisterClick() {
    this.registerTrigger.emit('Register');
  }
}
