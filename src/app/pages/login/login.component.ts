import { Component } from '@angular/core';
import { SkeletonApiService } from '../../services/skeleton-api/skeleton-api.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { ToastMessageService } from '../../services/toast-message/toast-message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  passwordVisible = false;

  loading = false;

  constructor(
    private api: SkeletonApiService,
    private router: Router,
    private auth: AuthService
  ) {}

  onSubmit() {
    this.loading = true;
    this.api.login(this.email, this.password).subscribe({
      next: (data) => {
        console.log(data);
        this.loading = false;
        this.auth.setUser(data.user);
        this.router.navigate(['dashboard']);
      },
      error: () => (this.loading = false),
    });
  }
}
