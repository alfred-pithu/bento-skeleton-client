import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { IUser } from '../../Interfaces/user.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  user: IUser | null = null;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.user = this.auth.getUser();
  }
}
