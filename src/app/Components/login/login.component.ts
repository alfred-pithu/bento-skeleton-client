import { Component } from '@angular/core';
<<<<<<< HEAD
import { LoginServiceService } from '../../Services/login-service.service';
import { ILoginData } from '../../Interfaces/LoginDataInterface';
=======
import { SkeletonApiService } from '../../services/skeleton-api/skeleton-api.service';
>>>>>>> 64dc3e058bb694b256c0af4f24e2194b2de42a92

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
<<<<<<< HEAD
  constructor(private loginService: LoginServiceService) {}

  email?: string;
  password?: string;

  passwordVisible = false;

  postData(): void {
    if (this.email && this.password) {
      const data: ILoginData = {
        email: this.email,
        password: this.password,
      };

      this.loginService.sendLoginDataToBackend(data).subscribe((res) => {
        console.log(res);
        this.email = '';
        this.password = '';
      });
    } else {
      alert('Please Provide Email and Password');
    }
=======
  email: string = '';
  password: string = '';

  passwordVisible = false;

  loading = false;

  constructor(private api: SkeletonApiService) {}

  onSubmit() {
    this.api.login(this.email, this.password).subscribe({
      next: () => console.log('success')
    })
>>>>>>> 64dc3e058bb694b256c0af4f24e2194b2de42a92
  }
}
