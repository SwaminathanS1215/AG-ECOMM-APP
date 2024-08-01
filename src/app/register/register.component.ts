import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  @Output() loginTrigger = new EventEmitter<string>();
  @Output() cancelRegister = new EventEmitter<void>();

  firstName = signal('');
  lastName = signal('');
  email = signal('');
  username = signal('');
  password = signal('');
  confirmPassword = signal('');

  onLoginClick() {
    this.loginTrigger.emit('Login');
  }

  onCancelRegister() {
    this.cancelRegister.emit();
  }

}
