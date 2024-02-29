import { Route, Router } from '@angular/router';
import { HrService } from './../../services/hr/hr.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hr-employees',
  templateUrl: './hr-employees.component.html',
  styleUrl: './hr-employees.component.css'
})
export class HrEmployeesComponent implements OnInit {
  allEmployeeInfos!: any[]
  hasDataReached: boolean = false;
  searchedInputValue: string = '';
  searchedEmployees!: any[]


  constructor(private HrService: HrService, private router: Router) { }

  ngOnInit(): void {

    // Fetching data of all employees from HR
    this.HrService.getEmployees().subscribe({
      next: (data) => {
        this.allEmployeeInfos = data.data
        console.log('data from hr', this.allEmployeeInfos);
        this.hasDataReached = true
      },
      error: (error) => {
        console.log(error);
      }
    })


  }

  searchEmployee() {
    if (this.searchedInputValue) {
      const arr = this.allEmployeeInfos.filter((data: any) => { return data.name.toLowerCase().includes(this.searchedInputValue.toLowerCase()) })
      console.log('filtered array', arr);
      this.searchedEmployees = arr;
      this.searchedInputValue = '';
    } else {
      this.searchedEmployees = []
    }
  }
}
