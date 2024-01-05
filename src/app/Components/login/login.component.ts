import { Component } from '@angular/core';
import { LoginServiceService } from '../../Services/login-service.service';
import { ILoginData } from '../../Interfaces/LoginDataInterface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
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
  }
}
