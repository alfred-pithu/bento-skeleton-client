import { Component, Input, ViewChild } from '@angular/core';
import { HrService } from '../../../services/hr/hr.service';
import { Observable } from 'rxjs';
import { extractWaitersFromAllEmployee } from '../../../utils/hr.utils';


import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
};
@Component({
  selector: 'app-orders-served-ranking',
  templateUrl: './orders-served-ranking.component.html',
  styleUrl: './orders-served-ranking.component.css'
})
export class OrdersServedRankingComponent {
  @Input() allEmployeeInfosObservable!: Observable<any[]>
  allEmployeeInfos: any[] = []
  hasDataReached: boolean = false
  waiters!: any[]

  @ViewChild("chart") chart: ChartComponent | undefined;
  // public chartOptions!: Partial<ChartOptions>;
  public chartOptions: any;

  constructor(private HrService: HrService) { }


  ngOnInit(): void {
    this.allEmployeeInfosObservable.subscribe((data: any) => {
      this.allEmployeeInfos = data.data
      console.log('this.allEmployeeInfos', this.allEmployeeInfos);
      this.hasDataReached = true
      this.waiters = extractWaitersFromAllEmployee(this.allEmployeeInfos)
      console.log(this.waiters);

      // Chart Options
      this.chartOptions = {
        colors: ['#4d3a96', '#4576b5'],
        series: [
          {
            name: "Total Orders Served",
            data: this.waiters.map((i) => i.servedOrders),
            color: "#05CC79",

          }
        ],
        chart: {
          type: "bar",
          height: 280
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: 10

          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: this.waiters.map((i) => i.name)

        },
        yaxis: {

        }
      };




    })



  }


}
