import { Component, OnInit } from '@angular/core';

export interface userDetails {
    userName: string;
    password: string;
    email: string;
}

@Component({
    selector: 'app-login-register-switch',
    templateUrl: './login-register-switch.component.html',
    styleUrls: ['./login-register-switch.component.css']
})

export class LoginRegisterSwitchComponent implements OnInit, userDetails {
    form: string;

    // form data
    userName: string;
    password: string;
    email: string;
    confirmPassword: string;

    userData: Array<userDetails>;
    // form validation attributes
    isLoginValid = true;
    isRegisterValid = true;
    isLoggedIn = false;
    isRegistered = false;
    isPasswordsEqual = true;
    isUserExisted = false;

    constructor() {
        this.form = 'login';

        // form data
        this.userName = '';
        this.password = '';
        this.email = '';
        this.confirmPassword = '';

        // existing users
        this.userData = [
            { userName: 'Swaminathan', password: 'Swami7798', email: 'swami7798@gmail.com' },
            { userName: 'Rahul', password: 'Rahul7798', email: 'rahul7798@gmail.com' },
            { userName: 'Prasanth', password: 'Prasanth7798', email: 'prasanth798@gmail.com' },
            { userName: 'Mukesh', password: 'Mukesh7798', email: 'mukesh7798@gmail.com' },
            { userName: 'Ravi', password: 'Ravi7798', email: 'ravi7798@gmail.com' },
            { userName: 'Dinesh', password: 'Dinesh7798', email: 'dinesh7798@gmail.com' },
            { userName: 'Barath', password: 'Barath7798', email: 'barath7798@gmail.com' },
        ]
    }

    ngOnInit(): void {
    }

    doLogin() {
        // Filter function to get the valid user
        const isUserAvaialable = this.userData.filter(user => {
            return user.userName === this.userName && user.password === this.password
        });

        if (isUserAvaialable.length === 0) {
            this.isLoginValid = false;
        } else {
            this.isLoginValid = true;
            this.isLoggedIn = true;
        }
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
        this.form = 'login';
        let newData: userDetails = { userName: this.userName, password: this.password, email: this.email };
        this.userData.push(newData);
    }

    // function to switch between login and register form
    switchForm(form: string) {
        // reset all values
        this.userName = '';
        this.password = '';
        this.email = '';
        this.confirmPassword = '';

        this.form = form;

        if (form === 'login') {
            // rest login form values
            this.isLoginValid = true;
            this.isLoggedIn = false;
        } else {
            // reset register form values
            this.isRegisterValid = true;
            this.isRegistered = false;
            this.isPasswordsEqual = true;
            this.isUserExisted = false;
        }
    }

}
