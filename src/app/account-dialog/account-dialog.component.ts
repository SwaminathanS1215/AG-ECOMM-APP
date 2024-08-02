import { Component, Output, EventEmitter } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-account-dialog',
  standalone: true,
  imports: [
    LoginComponent,
    RegisterComponent
  ],
  templateUrl: './account-dialog.component.html',
  styleUrl: './account-dialog.component.css'
})
export class AccountDialogComponent {
  @Output() closeDialog = new EventEmitter<void>();
  @Output() successfullLogin = new EventEmitter<void>();

  modalHeader = 'Login';

  loginRegisterSwitch(headerText: string) {
    this.modalHeader = headerText;
  }

  onCloseDialog(){
    this.closeDialog.emit();
  }

  onLoginSuccessfull(){
    this.successfullLogin.emit();
  }
}
