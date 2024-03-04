import { Component, OnInit, ViewChild } from '@angular/core';
import { PosMarketplaceOrdersService } from '../../../services/pos-marketplace-orders/pos-marketplace-orders.service';
import { InventoryService } from '../../../services/inventory/inventory.service';

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
  selector: 'app-most-wasted-ingred',
  templateUrl: './most-wasted-ingred.component.html',
  styleUrl: './most-wasted-ingred.component.css'
})
export class MostWastedIngredComponent {
  hasDataReached: boolean = false
  wastedData: any[] = []

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
        // console.log(data);

        // Chart Options
        this.chartOptions = {
          colors: ['#4d3a96', '#4576b5'],
          series: [
            {
              name: "Ingredient Wasted In The Last 30 Days",
              data: this.wastedData.map((i) => i.totalWaste).slice(0, 10),
              color: "#05CC79",

            }
          ],
          chart: {
            type: "bar",
            height: 250,

          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: 20,

            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: this.wastedData.map((i) => i.ingredientName).slice(0, 10),

          },
          yaxis: {

          }
        };
      }
    })


  }

}
