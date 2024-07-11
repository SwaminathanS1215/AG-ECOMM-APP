import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login-validation',
    templateUrl: './login-validation.component.html',
    styleUrls: ['./login-validation.component.css']
})
export class LoginValidationComponent implements OnInit {
    userName: string;
    password: string;
    isLoggedIn: boolean = false;
    isValid: boolean = true;

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
        this.password = '';
    }

    ngOnInit(): void {
    }

    doLogin() {
        // Filter function to get the valid user
        const isUserAvaialable = this.userData.filter(user => {
           return user.userName === this.userName && user.password === this.password
        });

        if (isUserAvaialable.length === 0) {
            this.isValid = false;
        } else {
            this.isValid = true;
            this.isLoggedIn = true;
        }
    }
}
