import { Component, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { extractChefsFromAllEmployee, extractWaitersFromAllEmployee } from '../../../utils/hr.utils';
import { ChartComponent } from "ng-apexcharts";


import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
} from "ng-apexcharts";
import { Chef, Employee, Waiter } from '../../../Interfaces/employee.interface';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
@Component({
  selector: 'app-orders-served-ranking',
  templateUrl: './orders-served-ranking.component.html',
  styleUrl: './orders-served-ranking.component.css'
})
export class OrdersServedRankingComponent {
  @Input() allEmployeeInfosObservable!: Observable<{ data: Employee[] }>
  allEmployeeInfos: Employee[] = []
  hasDataReached: boolean = false
  waiters!: Waiter[]
  chefs!: Chef[]

  totalChefOrders!: number
  totalWaiterOrders!: number

  @ViewChild("chart") chart!: ChartComponent;
  public waiterChartOptions: any;
  public chefChartOptions: any




  ngOnInit(): void {
    this.allEmployeeInfosObservable.subscribe((data: { data: Employee[] }) => {
      this.allEmployeeInfos = data.data
      this.hasDataReached = true;

      this.executeWaiterChartTask()
      this.executeChefChartTask()
    })

  }

  // Waiter Chart
  executeWaiterChartTask() {
    this.waiters = extractWaitersFromAllEmployee(this.allEmployeeInfos)
    const orderNumbers = this.waiters.map((waiter) => waiter.servedOrders)
    this.totalWaiterOrders = orderNumbers.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    }, 0)


    // Waiter Chart Options
    this.waiterChartOptions = {
      series: this.waiters.map((waiter) => waiter.servedOrders),
      chart: {
        width: 360,
        type: "pie"
      },
      labels: this.waiters.map((waiter) => waiter.name),

      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "top"
            }
          }
        }
      ]
    };
  }

  // Chefs Chart
  executeChefChartTask() {
    this.chefs = extractChefsFromAllEmployee(this.allEmployeeInfos)
    const ordersArr = this.chefs.map((c) => c.servedOrders);
    this.totalChefOrders = ordersArr.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    }, 0)

    // Chef Chart Options
    this.chefChartOptions = {
      series: this.chefs.map((chef) => chef.servedOrders),
      chart: {
        width: 380,
        type: "pie"
      },
      labels: this.chefs.map((chef) => chef.name),

      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }




}







