import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor() {}

  checkFormValidation(controlName: string, form: FormGroup): boolean {
    if (controlName === 'password' || controlName === 'confirmPassword') {
      let passwordsCheck: boolean =
        (form.controls['passwords'].get(controlName)?.touched &&
          form.controls['passwords'].get(controlName)?.dirty &&
          form.controls['passwords'].get(controlName)?.invalid) ||
        false;

      if (controlName === 'confirmPassword') {
        passwordsCheck = !!form.controls['passwords'].errors || passwordsCheck;
      }

      return passwordsCheck;
    }

    return (form.controls[controlName].touched &&
      form.controls[controlName].dirty &&
      form.controls[controlName].invalid);
  }
}
