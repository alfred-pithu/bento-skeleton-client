import { Component } from '@angular/core';
import { SkeletonApiService } from '../../services/skeleton-api/skeleton-api.service';

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

  constructor(private api: SkeletonApiService) {}

  onSubmit() {
    this.api.login(this.email, this.password).subscribe({
      next: () => console.log('success'),
    });
  }
}




