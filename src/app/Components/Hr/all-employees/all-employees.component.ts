import { Component, Input, OnInit } from '@angular/core';
import { HrService } from '../../../services/hr/hr.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrl: './all-employees.component.css'
})
export class AllEmployeesComponent implements OnInit {

  @Input() allEmployeeInfosObservable!: Observable<any[]>
  allEmployeeInfos!: any[]
  hasDataReached: boolean = false

  searchValue = '';
  visible = false;

  listOfDisplayData: any[] = [];


  constructor(private HrService: HrService) { }


  ngOnInit(): void {

    this.allEmployeeInfosObservable.subscribe((data: any) => {
      this.allEmployeeInfos = data.data

      this.listOfDisplayData = [...this.allEmployeeInfos]
      this.hasDataReached = true
    })


  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.allEmployeeInfos.filter((data: any) => {
      return data.name.toLowerCase().includes(this.searchValue.toLowerCase())
    })
  }

}

