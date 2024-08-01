import {AbstractControl} from '@angular/forms';


export function validateUsername(control: AbstractControl) {
    const userNameRegex = /^[A-Za-z]+$/;
    if (userNameRegex.test(control.value)) {
        return null;
    }

    return {
      invalidUsername: true,
    };
}

export function validatePassword(control: AbstractControl){
    const passwordRegex = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;
    if(passwordRegex.test(control.value)){
        return null;
    }

    return {
      invalidPassword: true,
    };
}