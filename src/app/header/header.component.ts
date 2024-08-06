import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth/auth.service';

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
  private authService = inject(AuthService);

  constructor(private destroyRef: DestroyRef) {
  }

  ngOnInit(): void {

    const subscription = this.authService.checkIfUserLoggedIn.subscribe({
      next: (isAuthenticated: boolean) => {
        this.isLoggedIn = isAuthenticated;
      },
    });
    this.isLoggedIn = this.authService.isAuthenticatedUser();

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  onUserMenuClick() {
    this.showUserMenu = !this.showUserMenu;
  }

  onLogout() {
    this.showUserMenu = false;
    alert('Logged out successfully');
    this.authService.logout();
  }
}
