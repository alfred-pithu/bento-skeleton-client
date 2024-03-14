import { Component, OnInit } from '@angular/core';
import { HrService } from '../../services/hr/hr.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Employee } from '../../Interfaces/employee.interface';

@Component({
  selector: 'app-hr-container',
  templateUrl: './hr-container.component.html',
  styleUrl: './hr-container.component.css'
})
export class HrContainerComponent implements OnInit {


  hasDataReached: boolean = false
  allEmployeeInfos!: Observable<{ data: Employee[] }>

  constructor(private HrService: HrService, private router: Router) { }

  ngOnInit(): void {
    this.allEmployeeInfos = this.HrService.getEmployees()
  }

  navigateToInventory() {
    this.router.navigateByUrl('/redirect?service=hr')
  }

}

