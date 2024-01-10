
import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../../interfaces/user.interface';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {

  @Input() isAuth! : boolean;
  @Input() user: IUser | undefined;

  constructor (private router : Router) {}

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/home');
  }

}
