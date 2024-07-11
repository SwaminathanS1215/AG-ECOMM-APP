import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-register-validation',
    templateUrl: './register-validation.component.html',
    styleUrls: ['./register-validation.component.css']
})
export class RegisterValidationComponent implements OnInit {
    // Class attributes
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
    isUserExisted = false;
    isRegistered = false;
    isPasswordsEqual = true;
    // existing users
    userData = [
        { userName: 'Swaminathan', password: 'Swami7798' },
        { userName: 'Rahul', password: 'Rahul7798' },
        { userName: 'Prasanth', password: 'Prasanth7798' },
        { userName: 'Mukesh', password: 'Mukesh7798' },
        { userName: 'Ravi', password: 'Ravi7798' },
        { userName: 'Dinesh', password: 'Dinesh7798' },
        { userName: 'Barath', password: 'Barath7798' },
    ]

    constructor() {
        this.userName = '';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
    }

    ngOnInit(): void {
    }

    checkUserExistance() {
        // Filter function to check user existed already
        const isUserAvaialable = this.userData.filter(user => {
            return user.userName === this.userName
         });
 
         if (isUserAvaialable.length === 0) {
             this.isUserExisted = false;
         } else {
             this.isUserExisted = true;
         }
    }

    // checks whether the password and confirm passwords are equal
    checkPasswordAndConfirmPassword() {
        if (this.password === this.confirmPassword) {
            this.isPasswordsEqual = true;
        } else {
            this.isPasswordsEqual = false
        }
    }

    doRegister() {
        this.isRegistered = true;
    }

}
