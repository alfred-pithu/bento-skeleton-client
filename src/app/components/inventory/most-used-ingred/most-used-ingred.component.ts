
import { IMostUsedIngredient, IMostUsedIngredientChartData } from '../../../Interfaces/inventory.interface';
import { extractIngredientsFromOrder, ingredientPresentCounter } from '../../../utils/orderProcessing';
import { PosMarketplaceOrdersService } from './../../../services/pos-marketplace-orders/pos-marketplace-orders.service';
import { Component, OnInit, ViewChild } from '@angular/core';

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
  selector: 'app-most-used-ingred',
  templateUrl: './most-used-ingred.component.html',
  styleUrl: './most-used-ingred.component.css'
})
export class MostUsedIngredComponent implements OnInit {

  ingredientPresentInOrdersArray: IMostUsedIngredientChartData[] = []
  hasDataReached: boolean = false



  @ViewChild("chart") chart: ChartComponent | undefined;
  // public chartOptions!: Partial<ChartOptions>;
  public chartOptions: any;

  constructor(private orderService: PosMarketplaceOrdersService) {

  }

  ngOnInit(): void {

    this.orderService.getAllPosOrders().subscribe((data) => {
      if (data) {
        let allIngredientsArray: IMostUsedIngredient[] = []

        data.forEach((data) => {
          const ingredients = extractIngredientsFromOrder(data);

          allIngredientsArray = [...allIngredientsArray, ...ingredients]
        })

        const counterArr = ingredientPresentCounter(allIngredientsArray)

        this.ingredientPresentInOrdersArray = counterArr.sort((a, b) => b.presenceInOrders - a.presenceInOrders);
        this.hasDataReached = true


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
          name: "Ingredient Used In Number Of Orders",
          data: this.ingredientPresentInOrdersArray.map((i) => i.presenceInOrders).slice(0, 10),
          color: "#05CC79"

        }
      ],
      chart: {
        type: "bar",
        height: 280
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: 10


        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: this.ingredientPresentInOrdersArray.map((i) => i.ingredientName).slice(0, 10),

      },
      yaxis: {

      }
    };
  }

}
