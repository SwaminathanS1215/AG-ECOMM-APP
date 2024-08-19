import { AbstractControl, FormGroup } from '@angular/forms';

export function checkPasswordsMatches(controls: AbstractControl) {
  const password = controls.get('password')?.value;
  const confirmPassword = controls.get('confirmPassword')?.value;

  if (password !== confirmPassword) {
    return {
      isPasswordMatches: false,
    };
  }
  return null;
}
