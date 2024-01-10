import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkeletonApiService } from '../../services/skeleton-api/skeleton-api.service';
import { IUser } from '../../Interfaces/user.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  @Input() isAuth!: boolean;
  user: IUser | undefined;

  constructor(private router: Router, private api: SkeletonApiService) {}

  logout() {
    localStorage.clear();
    this.isAuth = false;
    this.user = undefined;
    this.router.navigateByUrl('/home');
  }

  ngOnInit(): void {
    if (this.isAuth)
      this.api.getUserFromToken().subscribe((data) => (this.user = data.user));
  }
}
