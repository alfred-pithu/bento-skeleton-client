import { Component, OnInit } from '@angular/core';
import { HrService } from '../../services/hr/hr.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hr-container',
  templateUrl: './hr-container.component.html',
  styleUrl: './hr-container.component.css'
})
export class HrContainerComponent implements OnInit {

  hasDataReached: boolean = false
  allEmployeeInfos!: Observable<any[]>

  constructor(private HrService: HrService) { }

  ngOnInit(): void {
    this.allEmployeeInfos = this.HrService.getEmployees()
  }

}

