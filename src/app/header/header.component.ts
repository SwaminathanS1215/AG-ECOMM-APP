import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [FontAwesomeModule, RouterLink],
})
export class HeaderComponent implements OnInit {
  userIcon = faCircleUser;
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
