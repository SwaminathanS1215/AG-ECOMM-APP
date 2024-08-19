import { Component } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';
import { checkPasswordsMatches } from './register.validators';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fmb: FormBuilder,
    private registerService: RegisterService
  ) {
    this.registerForm = this.fmb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      passwords: new FormGroup(
        {
          password: new FormControl('', {
            validators: [Validators.required, Validators.minLength(8)],
          }),
          confirmPassword: new FormControl('', {
            validators: [Validators.required, Validators.minLength(8)],
          }),
        },
        { validators: [checkPasswordsMatches] }
      ),
    });
  }

  isFormControlsValid(formControlName: string): boolean {
    return this.registerService.checkFormValidation(
      formControlName,
      this.registerForm
    );
  }

  onSubmit() {
    
  }
}
