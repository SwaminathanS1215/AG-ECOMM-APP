import { Component, OnInit } from '@angular/core';
import { AccountDialogComponent } from '../account-dialog/account-dialog.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [AccountDialogComponent, FontAwesomeModule],
})
export class HeaderComponent implements OnInit {
  userIcon = faCircleUser;
  openDialog = false;
  isLoggedIn = false;
  showUserMenu = false;

  ngOnInit(): void {
    const activeUser = localStorage.getItem('activeUser');
    if (activeUser) {
      this.isLoggedIn = true;
    }
  }

  onUserMenuClick(){
    this.showUserMenu = !this.showUserMenu;
  }

  onLoginClick() {
    this.openDialog = true;
  }

  onCloseDialog() {
    this.openDialog = false;
  }

  onLogout(){
    localStorage.removeItem('activeUser');
    this.showUserMenu = false;
    this.isLoggedIn = false;
    alert('Logged out successfully');
  }

  onLogin(){
    this.isLoggedIn = true;
  }
}
