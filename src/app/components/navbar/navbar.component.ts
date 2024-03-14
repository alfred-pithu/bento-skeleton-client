import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkeletonApiService } from '../../services/skeleton-api/skeleton-api.service';
import { IUser } from '../../Interfaces/orderProcessing.interface';

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
        this.user = data.user
        if (!localStorage.getItem('restaurantId')) {
          localStorage.setItem('restaurantId', data.user.employeeInformation.restaurantId)
        }
      });

      // Check if the logged in employee is checked in or not
      this.api.getIsCheckedInData().subscribe((data) => {
        if (data) {
          this.isUserCheckedIn = true

        } else {
          this.isUserCheckedIn = false

        }
      })

    }
  }

  checkIn() {
    if (this.user) {
      this.api.checkInUser(this.user?.employeeInformation.id, this.user?.employeeInformation.position.position)
        .subscribe((data) => {
          this.api.setAttendanceId(data.attendanceId)
        });
    }
  }

  checkOut() {
    if (this.user) {
      const attendaceIdFromLocalStorage = localStorage.getItem('attendanceId')
      if (attendaceIdFromLocalStorage) {
        this.api.checkOutUser(this.user.employeeInformation.id, attendaceIdFromLocalStorage, this.user?.employeeInformation.position.position)
          .subscribe((data) => {
            if (data.data.isCheckedIn == false) {
              this.api.setAttendanceId('')
            }
          });
      }

    }
  }
}
