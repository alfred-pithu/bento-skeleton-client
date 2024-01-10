import { Component } from '@angular/core';
import { SkeletonApiService } from '../../services/skeleton-api/skeleton-api.service';
import { Router } from '@angular/router';

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
    private router: Router
  ) {}

  onSubmit() {
    this.loading = true;
    this.api.login(this.email, this.password).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['dashboard']);
      },
      error: () => (this.loading = false),
    });
  }
}
