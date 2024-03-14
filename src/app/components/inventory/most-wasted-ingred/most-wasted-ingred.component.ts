import { Component, OnInit, ViewChild } from '@angular/core';
import { InventoryService } from '../../../services/inventory/inventory.service';

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions
} from "ng-apexcharts";
import { WastedIngredient } from '../../../Interfaces/inventory.interface';


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
};

@Component({
  selector: 'app-most-wasted-ingred',
  templateUrl: './most-wasted-ingred.component.html',
  styleUrl: './most-wasted-ingred.component.css'
})
export class MostWastedIngredComponent implements OnInit {
  hasDataReached: boolean = false
  wastedData!: WastedIngredient[]

  @ViewChild("chart") chart: ChartComponent | undefined;
  // public chartOptions!: Partial<ChartOptions>;
  public chartOptions: any;

  constructor(private inventoryService: InventoryService) {

  }


  ngOnInit(): void {
    this.inventoryService.getMostWastedIngreds().subscribe((data) => {
      if (data) {
        this.wastedData = data
        this.hasDataReached = true;
        this.executeChart()
      }
    })

  }


  executeChart() {
    // Chart Options
    this.chartOptions = {
      colors: ['#4d3a96', '#4576b5'],
      series: [
        {
          name: "Ingredient Wasted In The Last 30 Days",
          data: this.wastedData.map((data) => data.totalWaste).slice(0, 10),
          color: "#05CC79",

        }
      ],
      chart: {
        type: "bar",
        height: 250,

      },
      plotOptions: {
        bar: {
          horizontal: true,
          // columnWidth: 10,
          barHeight: 10

        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: this.wastedData.map((data) => data.ingredientName).slice(0, 10),

      },
      yaxis: {

      }
    };
  }

}
