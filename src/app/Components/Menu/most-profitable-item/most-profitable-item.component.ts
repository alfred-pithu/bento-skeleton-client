import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { processMenuDataForGettingMostProfitableItemInfo } from '../../../utils/menu.utils';

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
  selector: 'app-most-profitable-item',
  templateUrl: './most-profitable-item.component.html',
  styleUrl: './most-profitable-item.component.css'
})
export class MostProfitableItemComponent implements OnInit {
  // Chart Related Properties
  @ViewChild("chart") chart!: ChartComponent;
  public GbpChartOptions: Partial<ChartOptions> | any
  public PercentageChartOptions: Partial<ChartOptions> | any

  // Input Properties
  @Input() menuData$!: Observable<any[]>

  // Storage Properties
  processedMenuData: any[] = [];
  hasDataReached: boolean = false;
  selectedChartMode = 'GBP'




  ngOnInit(): void {
    this.menuData$.subscribe({
      next: (data: any) => {
        this.processedMenuData = processMenuDataForGettingMostProfitableItemInfo(data)
        this.hasDataReached = true;
        this.executePercentageChart()
        this.executeGbpChart()

      },
      error: (error) => console.log(error)
    })
  }

  // GBP Chart
  executeGbpChart() {
    this.GbpChartOptions = {
      series: [
        {
          name: "Profit Amount in GBP",
          data: this.processedMenuData.map((i) => i.profitAmount),
        }
      ],
      chart: {
        type: "bar",
        height: 250
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: 10,
          colors: {
            ranges: [
              {
                from: 1,
                to: 100000000,
                color: "#05CC79"
              },
              {
                from: -10000000,
                to: 0,
                color: '#FF6666'
              },
            ]
          }

        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: this.processedMenuData.map((i) => i.itemName),

      },

    };

  }


  // PERCENTAGE Chart
  executePercentageChart() {
    this.PercentageChartOptions = {
      series: [
        {
          name: "Profit  in Percentage",
          data: this.processedMenuData.map((i) => i.profitPercentage),
        }
      ],
      chart: {
        type: "bar",
        height: 250
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: 10,
          colors: {
            ranges: [
              {
                from: 1,
                to: 10000,
                color: "#05CC79"
              },
              {
                from: -100,
                to: 0,
                color: '#FF6666'
              },
            ]
          }

        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: this.processedMenuData.map((i) => i.itemName),

      },

    };

  }


}
