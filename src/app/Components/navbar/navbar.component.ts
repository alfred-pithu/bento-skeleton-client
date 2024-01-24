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
  isUserCheckedIn: boolean = false;

  constructor(private router: Router, private api: SkeletonApiService) { }

  logout() {
    this.router.navigateByUrl('/logout');
  }

  ngOnInit(): void {
    if (this.isAuth) {

      // Get the User Info from JWTToken
      this.api.getUserFromToken().subscribe((data) => {
        this.user = data.message
      });

      // Get data to see if checked in or checked out
      this.api.getIsCheckedInData().subscribe((data) => {
        console.log('isCheckedIn', data);
        this.isUserCheckedIn = data.isCheckedIn;
      })
    }
  }

  checkIn() {
    if (this.user) {
      console.log('clicked', this.user);
      this.api.checkInUser(this.user?.employeeInformation.id)
        .subscribe((data) => {
          console.log('response from hr + skeleton backend', data)
        });
    }
  }

  checkOut() {
    if (this.user) {
      this.api.checkOutUser(this.user?.employeeInformation.id)
        .subscribe((data) => console.log(data));
    }
  }
}
