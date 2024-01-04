import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { SkeletonApiService } from '../../services/skeleton-api/skeleton-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email?: string;
  password?: string;

  passwordVisible = false;

  loading = false;

  constructor (private message: NzMessageService, private api: SkeletonApiService) {}

  handleClick () {
    if (this.email && this.password) {
      this.api.login(this.email, this.password).subscribe({
        next: (data) => console.log(data),
        error: (error) => console.log(error),
      })
    }
  }
}
