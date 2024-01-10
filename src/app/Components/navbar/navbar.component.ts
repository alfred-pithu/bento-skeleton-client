
import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../../interfaces/user.interface';
import { Router } from '@angular/router';
import { SkeletonApiService } from '../../services/skeleton-api/skeleton-api.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {

  @Input() isAuth! : boolean;
  user: IUser | undefined;

  constructor (private router : Router, private api: SkeletonApiService) {}

  logout() {
    this.router.navigateByUrl('/logout');
  }

  ngOnInit(): void {
    if (this.isAuth)
      this.api.getUserFromToken().subscribe(data => this.user = data.user);
  }

}
